'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import nodemailer from 'nodemailer'

import { validateCloudflareTurnstileToken } from '@/utils/cloudflare-turnstile'
import { getContactEmailString } from './email-temp'
import { formSchema } from './form-schema'

export async function contactFormAction(request: any) {
  console.log('Sending email...')

  const result = formSchema.safeParse(request)

  if (result.error) {
    throw new Error('Invalid request. Error: ' + result.error.message)
  }

  const { name, email, message, captchaToken } = result.data

  // Validate captchaToken against Cloudflare API
  const headersList = await headers()
  const remoteIP = headersList.get('x-forwarded-for')

  const isCaptchaValid = await validateCloudflareTurnstileToken(
    captchaToken,
    remoteIP,
  )

  if (isCaptchaValid === false) {
    throw new Error('Cloudflare Turnstile token provided is invalid.')
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
  })

  // create email HTML using react
  const html = getContactEmailString(request)

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${name} <${process.env.SMTP_FROM_ADDRESS}>`, // sender address
    to: process.env.SMTP_TO_ADDRESS, // list of receivers
    replyTo: email,
    subject: `Message from ${email}`, // Subject line
    text: message, // plain text body
    html,
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  redirect('/contact/sent')
}
