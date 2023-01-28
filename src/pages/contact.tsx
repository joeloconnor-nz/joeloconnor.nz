import { Layout } from '@/components/layout';
import type { NextSeoProps } from 'next-seo';
import { useState } from 'react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';

const seoProp: NextSeoProps = {
    title: 'Contact',
};

export default function Contact() {
    const [messageSent, setMessageSent] = useState(false);

    const handleMessageSent = () => {
        setMessageSent(true);
    };

    return (
        <Layout seo={seoProp}>
            <div className="mx-auto flex w-full max-w-lg flex-col">
                <h1 className="mb-10 text-4xl text-stone-700 dark:text-stone-300">
                    {messageSent ? 'Message sent' : 'Send me a message'}
                </h1>

                {messageSent ? (
                    <div>
                        <p>
                            Thanks for your message, I&apos;ll get back to you
                            as soon as I can.
                        </p>
                        <Link href="/">Go back to home</Link>
                    </div>
                ) : (
                    <ContactForm onMessageSent={handleMessageSent} />
                )}
            </div>
        </Layout>
    );
}
