// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// TODO: Remove this and use actual data
const formData = {
    name: 'John Smith',
    email: 'john@example.com',
    message: 'Can I ask a question?'
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    console.log('Sending email...');

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false, // use STARTTLS instead of SSL 
        requireTLS: true, // enable STARTTLS
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `${formData.name} <${process.env.SMTP_FROM_ADDRESS}>`, // sender address
        to: process.env.SMTP_TO_ADDRESS, // list of receivers
        replyTo: formData.email,
        subject: `New message from ${formData.email}`, // Subject line
        text: formData.message, // plain text body
        html: `
        <div>
            <p style="font-weight:bold;">You've received a message via joeloconnor.nz</p>
            <p>${formData.message}</p>
        </div>
        `
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    res.status(200).send('Message sent');
}