import { Layout } from '@/components/layout';
import type { NextSeoProps } from 'next-seo';
import { useState } from 'react';
import type { FormEventHandler } from 'react';
import Link from 'next/link';

const seoProp: NextSeoProps = {
    title: 'Contact',
};

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = {
            name: name,
            email: email,
            message: message,
        };

        await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify(formData),
        });

        setMessageSent(true);
        setLoading(false);
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
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                className="text-stone-600 dark:text-stone-400"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="mt-2 block w-full rounded-md border-transparent bg-white placeholder:text-stone-300 focus:border-stone-400 focus:bg-white focus:ring-0 dark:bg-stone-700 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-600"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                disabled={loading}
                                value={name}
                                onChange={(event) => {
                                    const newValue = event.target.value;
                                    setName(newValue);
                                }}
                            />
                        </div>

                        <div>
                            <label
                                className="text-stone-600 dark:text-stone-400"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="mt-2 block w-full rounded-md border-transparent bg-white placeholder:text-stone-300 focus:border-stone-400 focus:bg-white focus:ring-0 dark:bg-stone-700 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-600"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.nz"
                                disabled={loading}
                                value={email}
                                onChange={(event) => {
                                    const newValue = event.target.value;
                                    setEmail(newValue);
                                }}
                            />
                        </div>

                        <div>
                            <label
                                className="text-stone-600 dark:text-stone-400"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className="mt-2 block w-full rounded-md border-transparent bg-white placeholder:text-stone-300 focus:border-stone-400 focus:bg-white focus:ring-0 dark:bg-stone-700 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-600"
                                id="message"
                                name="message"
                                placeholder="Type your message here..."
                                rows={4}
                                disabled={loading}
                                value={message}
                                onChange={(event) => {
                                    const newValue = event.target.value;
                                    setMessage(newValue);
                                }}
                            />
                        </div>

                        <button
                            className="mt-6 flex rounded-lg border-4 border-solid border-stone-500 dark:border-stone-400"
                            type="submit"
                            disabled={loading}
                        >
                            <span className="grow py-2 px-5 text-2xl uppercase text-stone-700 dark:text-stone-300">
                                {loading ? 'Sending...' : 'Send'}
                            </span>
                        </button>
                    </form>
                )}
            </div>
        </Layout>
    );
}
