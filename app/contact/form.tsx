'use client';
import { ContactFormData } from '@/contact/form-data';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import Turnstile from 'react-turnstile';
import { Button } from '../components/button';

export function ContactForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');

    const turnstileSiteKey =
        process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;

    if (!turnstileSiteKey) {
        throw new Error('Cloudflare Turnstile site key not defined.');
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData: ContactFormData = {
            name,
            email,
            message,
            captchaToken,
        };

        if (formData.captchaToken === '') {
            alert('Please complete the captcha verification');
            return;
        }

        setLoading(true);

        const response = await fetch('/contact/api', {
            method: 'POST',
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            router.replace('/contact/sent');
        } else {
            setLoading(false);
            const body = await response.json();
            alert(`Failed to send email. ${body.message}`);
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
                <label
                    className="text-stone-600 dark:text-stone-400"
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    className="mt-2 block w-full rounded-md border-transparent bg-stone-100 text-stone-700 placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:ring-0 dark:bg-stone-700 dark:text-stone-300 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-600"
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required={true}
                    maxLength={100}
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
                    className="mt-2 block w-full rounded-md border-transparent bg-stone-100 text-stone-700 placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:ring-0 dark:bg-stone-700 dark:text-stone-300 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-600"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required={true}
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
                    className="mt-2 block w-full rounded-md border-transparent bg-stone-100 text-stone-700 placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:ring-0 dark:bg-stone-700 dark:text-stone-300 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-600"
                    id="message"
                    name="message"
                    required={true}
                    minLength={10}
                    maxLength={2000}
                    placeholder="Type your message here..."
                    rows={4}
                    disabled={loading}
                    value={message}
                    onChange={(event) => {
                        const newValue = event.target.value;
                        setMessage(newValue);
                    }}
                />
                <p className="mt-1 text-right text-stone-400 dark:text-stone-600">
                    {message.length}/2000
                </p>
            </div>

            <Turnstile
                sitekey={turnstileSiteKey}
                onVerify={setCaptchaToken}
                refreshExpired="auto"
            />

            <Button
                className="mt-6"
                type="submit"
                label={loading ? 'Sending...' : 'Send'}
                disabled={loading}
            />
        </form>
    );
}
