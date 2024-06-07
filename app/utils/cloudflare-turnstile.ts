export async function validateCloudflareTurnstileToken(
  request: Request,
  captchaToken: string,
): Promise<boolean> {
  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY
  if (!secretKey) {
    throw new Error('Cloudflare Turnstile secret key not defined.')
  }

  const formData = new URLSearchParams()
  formData.append('secret', secretKey)
  formData.append('response', captchaToken)
  formData.append('remoteip', request.headers.get('x-forwarded-for') as string)

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
  const result = await fetch(url, {
    body: formData,
    method: 'POST',
  })

  const outcome = await result.json()
  return outcome.success
}
