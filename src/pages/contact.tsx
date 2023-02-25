import { Layout } from '@/components/layout';
import type { NextSeoProps } from 'next-seo';
import { useState } from 'react';
import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/button';

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
            <div className="mx-auto flex w-full flex-col border-t-4 border-t-purple-700 bg-white px-6 pt-8 pb-12 shadow dark:bg-stone-800 sm:my-8 sm:max-w-xl sm:px-10">
                <h1 className="mb-8 text-2xl font-semibold text-stone-700 dark:text-stone-300 sm:mb-10 sm:text-3xl">
                    {messageSent
                        ? 'Thanks for your message 🙈'
                        : 'Send me a message'}
                </h1>

                {messageSent ? (
                    <div className="flex flex-col">
                        <p className="text-stone-700 dark:text-stone-400">
                            I&apos;ll get back to you soon.
                        </p>

                        <Button
                            className="mt-20"
                            href="/"
                            label="Return to Home"
                        />
                    </div>
                ) : (
                    <ContactForm onMessageSent={handleMessageSent} />
                )}
            </div>
        </Layout>
    );
}
