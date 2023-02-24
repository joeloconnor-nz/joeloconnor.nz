// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ContactEmail } from '@/components/contact-email';
import { validateCloudflareTurnstileToken } from '@/utils/cloudflare-turnstile';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { renderToString } from 'react-dom/server';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    console.log('Sending email...');

    const formData = JSON.parse(req.body);
    const { name, email, message, captchaToken } = formData;

    // Name must be at least 1 character long
    if (name.length === 0) {
        res.status(400).send({
            message: 'Name must be at least 1 character long.',
        });
        return;
    }

    // Name can be no longer than 100 characters long
    if (name.length > 100) {
        res.status(400).send({
            message: 'Name must not be longer than 100 characters.',
        });
        return;
    }

    // Email must be a valid email address
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,63})+$/;
    if (!mailFormat.test(email)) {
        res.status(400).send({
            message: 'Email must contain a valid email address.',
        });
        return;
    }

    // Message must be at least 10 characters long
    if (message.length < 10) {
        res.status(400).send({
            message: 'Message must be at least 10 characters long.',
        });
        return;
    }

    // Message can be no longer than 2000 characters long
    if (message.length > 2000) {
        res.status(400).send({
            message: 'Message must not be longer than 2000 characters.',
        });
        return;
    }

    // Validate that captchaToken is provided
    if (captchaToken === undefined || captchaToken.length === 0) {
        res.status(400).send({
            message: 'Cloudflare Turnstile captcha token must be provided.',
        });
        return;
    }

    // Validate captchaToken against Cloudflare API
    const isCaptchaValid = await validateCloudflareTurnstileToken(
        req,
        captchaToken
    );

    if (isCaptchaValid === false) {
        res.status(400).send({
            message: 'Cloudflare Turnstile captcha token provided is invalid.',
        });
        return;
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
    const html = renderToString(<ContactEmail data={formData} />);

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

    res.status(200).json({ message: 'Message sent' });
}
