'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Turnstile } from '@marsidev/react-turnstile'
import { LoaderCircleIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

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
import { Button } from '../components/ui/button'
import { contactFormAction } from './action'
import { FormSchema, formSchema } from './form-schema'

export function ContactForm() {
  const router = useRouter()
  const { theme } = useTheme()

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
        className="flex flex-col gap-3 pb-8 sm:gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isLoading}
                  type="text"
                  autoComplete="name"
                />
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
                  disabled={isLoading}
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
              <div className="flex items-center justify-between">
                <FormLabel>Message</FormLabel>
                <FormDescription
                  className={twMerge(
                    'text-right',
                    field.value.length > 0 &&
                      field.value.length < 10 &&
                      'text-red-500',
                    field.value.length > 900 && 'text-orange-500',
                    field.value.length > 950 && 'text-red-500',
                  )}
                >
                  {field.value.length} / 1000
                </FormDescription>
              </div>

              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Type your message here"
                  rows={4}
                  disabled={isLoading}
                />
              </FormControl>

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
                  className="mt-2 h-[65px] w-[300px]"
                  siteKey={turnstileSiteKey}
                  onSuccess={(token: string) => field.onChange(token)}
                  options={{
                    theme: theme === 'dark' ? 'dark' : 'light',
                    refreshExpired: 'auto',
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="mt-4 w-full transition-transform hover:scale-101"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <LoaderCircleIcon className="mr-2 size-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send'
          )}
        </Button>
      </form>
    </Form>
  )
}
