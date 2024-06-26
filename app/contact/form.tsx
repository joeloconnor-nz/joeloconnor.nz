'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Turnstile from 'react-turnstile'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useDarkMode } from '@/hooks/use-dark-mode'
import { Button } from '../components/ui/button'
import { contactFormAction } from './action'
import { FormSchema, formSchema } from './form-schema'

export function ContactForm() {
  const router = useRouter()
  const { isDarkMode } = useDarkMode()

  const turnstileSiteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY

  if (!turnstileSiteKey) {
    throw new Error('Cloudflare Turnstile site key not defined.')
  }

  // 1. Define your form.
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      captchaToken: undefined,
    },
  })

  const isLoading = form.formState.isSubmitting

  // 2. Define a submit handler.
  async function onSubmit(values: FormSchema) {
    await contactFormAction(values)
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} type="text" autoComplete="name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  autoComplete="email"
                  placeholder="email@example.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Type your message here"
                  rows={4}
                />
              </FormControl>
              <FormDescription className="text-right">
                {field.value.length}/2000
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="captchaToken"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Turnstile
                  className="h-[65px] w-[300px]"
                  sitekey={turnstileSiteKey}
                  onVerify={(token) => field.onChange(token)}
                  refreshExpired="auto"
                  theme={isDarkMode ? 'dark' : 'light'}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </Form>
  )
}
