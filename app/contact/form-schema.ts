import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: 'Name must contain at least 2 characters' })
    .max(50, { error: 'Name cannot be longer than 50 characters' }),
  email: z.email({ error: 'You must enter a valid email' }),
  message: z
    .string()
    .trim()
    .min(10, { error: 'Your message must contain at least 10 characters' })
    .max(1000, {
      error: 'Your message cannot be longer than 1000 characters',
    }),
  captchaToken: z.string({
    error: 'Captcha verification failed. Please try again.',
  }),
})

export type FormSchema = z.infer<typeof formSchema>
