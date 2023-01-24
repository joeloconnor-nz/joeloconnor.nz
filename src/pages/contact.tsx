import { Layout } from '@/components/layout';
import { NextSeoProps } from 'next-seo';

const seoProp: NextSeoProps = {
    title: 'Contact',
};

export default function Contact() {
    return (
        <Layout seo={seoProp}>
            <div className="mx-auto flex w-full max-w-lg flex-col">
                <h1 className="mb-10 text-4xl text-stone-700 dark:text-stone-300">
                    Send me a message
                </h1>
                <form className="flex flex-col gap-4">
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
                            type="text"
                            placeholder="John Doe"
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
                            type="email"
                            placeholder="john@example.nz"
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
                            placeholder="Type your message here..."
                            rows={4}
                        />
                    </div>

                    <button
                        className="mt-6 flex rounded-lg border-4 border-solid border-stone-500 dark:border-stone-400"
                        type="submit"
                    >
                        <span className="grow py-2 px-5 text-2xl uppercase text-stone-700 dark:text-stone-300">
                            Send
                        </span>
                    </button>
                </form>
            </div>
        </Layout>
    );
}
