import { ContactFormData } from '@/contact/form-data';
import { validateCloudflareTurnstileToken } from '@/utils/cloudflare-turnstile';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getContactEmailString } from './email-temp';

export async function POST(request: Request) {
    console.log('Sending email...');

    const formData: ContactFormData = await request.json();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    const { captchaToken } = formData;

    // Name must be at least 1 character long
    if (name.length === 0) {
        return NextResponse.json(
            { message: 'Name must be at least 1 character long.' },
            { status: 400 }
        );
    }

    // Name can be no longer than 100 characters long
    if (name.length > 100) {
        return NextResponse.json(
            { message: 'Name must not be longer than 100 characters.' },
            { status: 400 }
        );
    }

    // Email must be a valid email address
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,63})+$/;
    if (!mailFormat.test(email)) {
        return NextResponse.json(
            { message: 'Email must contain a valid email address.' },
            { status: 400 }
        );
    }

    // Message must be at least 10 characters long
    if (message.length < 10) {
        return NextResponse.json(
            { message: 'Message must be at least 10 characters long.' },
            { status: 400 }
        );
    }

    // Message can be no longer than 2000 characters long
    if (message.length > 2000) {
        return NextResponse.json(
            { message: 'Message must not be longer than 2000 characters.' },
            { status: 400 }
        );
    }

    // Validate that captchaToken is provided
    if (captchaToken === undefined || captchaToken.length === 0) {
        return NextResponse.json(
            { message: 'Cloudflare Turnstile captcha token must be provided.' },
            { status: 400 }
        );
    }

    // Validate captchaToken against Cloudflare API
    const isCaptchaValid = await validateCloudflareTurnstileToken(
        request,
        captchaToken
    );

    if (isCaptchaValid === false) {
        return NextResponse.json(
            { message: 'Cloudflare Turnstile token provided is invalid.' },
            { status: 400 }
        );
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false, // use STARTTLS instead of SSL
        requireTLS: true, // enable STARTTLS
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    // create email HTML using react
    const html = getContactEmailString(formData);

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `${name} <${process.env.SMTP_FROM_ADDRESS}>`, // sender address
        to: process.env.SMTP_TO_ADDRESS, // list of receivers
        replyTo: email,
        subject: `Message from ${email}`, // Subject line
        text: message, // plain text body
        html,
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    return NextResponse.json({ message: 'Message sent.' }, { status: 200 });
}
