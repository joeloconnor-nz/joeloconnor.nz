import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thanks for your message',
}

export default function ContactSentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
