import { FormEventHandler, useState } from 'react';

export interface ContactFormProps {
    onMessageSent: () => void;
}

export function ContactForm(props: ContactFormProps) {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = { name, email, message };

        await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify(formData),
        });

        props.onMessageSent();
        setLoading(false);
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
                    className="mt-2 block w-full rounded-md border-transparent bg-white placeholder:text-stone-300 focus:border-stone-400 focus:bg-white focus:ring-0 dark:bg-stone-700 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-600"
                    id="name"
                    name="name"
                    type="text"
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
                    className="mt-2 block w-full rounded-md border-transparent bg-white placeholder:text-stone-300 focus:border-stone-400 focus:bg-white focus:ring-0 dark:bg-stone-700 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-600"
                    id="email"
                    name="email"
                    type="email"
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
                    className="mt-2 block w-full rounded-md border-transparent bg-white placeholder:text-stone-300 focus:border-stone-400 focus:bg-white focus:ring-0 dark:bg-stone-700 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-600"
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
    );
}
