import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must contain at least 2 characters' })
    .max(50, { message: 'Name cannot be longer than 50 characters' }),
  email: z.string().email({ message: 'You must enter a valid email' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Your message must contain at least 10 characters' })
    .max(1000, {
      message: 'Your message cannot be longer than 1000 characters',
    }),
  captchaToken: z.string({
    message: 'Please complete the captcha verification',
  }),
})

export type FormSchema = z.infer<typeof formSchema>
