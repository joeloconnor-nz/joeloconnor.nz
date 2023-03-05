import { Button } from '@/components/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Thanks for your message',
};

export default function ContactSent() {
    return (
        <div className="mx-auto flex w-full flex-col border-t-4 border-t-purple-700 bg-white px-6 pt-8 pb-12 shadow dark:bg-stone-800 sm:my-12 sm:max-w-xl sm:px-10">
            <h1 className="mb-8 text-2xl font-semibold text-stone-700 dark:text-stone-300 sm:mb-10 sm:text-3xl">
                Thanks for your message 🙈
            </h1>

            <div className="flex flex-col">
                <p className="text-stone-700 dark:text-stone-400">
                    I&apos;ll get back to you soon.
                </p>

                <Button className="mt-20" href="/" label="Return to Home" />
            </div>
        </div>
    );
}
