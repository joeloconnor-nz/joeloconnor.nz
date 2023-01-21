import { GitHubLogo } from '@/components/icons/github-logo';
import { LinkedInLogo } from '@/components/icons/linkedin-logo';
import { MoonIcon } from '@/components/icons/moon';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Joel O&rsquo;Connor</title>
                <meta
                    name="description"
                    content="The personal website of Joel O&rsquo;Connor. Follow my progress as I learn software development"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-between">
                <header className="flex flex-row justify-between p-6">
                    <Link
                        href="/"
                        className="text-xl font-light text-purple-500 dark:text-purple-600 sm:text-2xl md:text-3xl"
                    >
                        joeloconnor.nz
                    </Link>
                    {/* Temporarily hiding dark mode toggle until implemented */}
                    <button
                        className="hidden p-2 transition-colors hover:text-stone-500 dark:text-stone-400"
                        aria-label="Toggle Dark Mode"
                    >
                        <MoonIcon />
                    </button>
                </header>
                <main className="flex flex-col items-center py-8 px-6 text-center">
                    <Image
                        className="mb-12 h-40 w-40 rounded-3xl shadow-2xl shadow-purple-900/60 dark:shadow-purple-700/30 md:h-44 md:w-44"
                        src="/profile-photo.jpeg"
                        width="176"
                        height="176"
                        alt=""
                    />
                    <h1 className="mb-8 text-4xl font-medium text-stone-700 dark:text-stone-300 sm:text-5xl md:mb-20 md:text-6xl">
                        Joel O&rsquo;Connor
                    </h1>
                    <p className="text-slate-600 dark:text-stone-400 md:text-2xl">
                        I am currently rebuilding my website as I learn software
                        development
                    </p>
                    <p className="mt-2 hidden text-slate-600 dark:text-stone-400 sm:block md:text-2xl">
                        Follow my progress on GitHub or connect with me on
                        LinkedIn
                    </p>
                </main>
                <footer className="flex flex-row justify-center py-8 px-6 text-stone-700 dark:text-stone-400">
                    <ul className="flex gap-4 md:gap-6">
                        <li>
                            <a
                                href="https://github.com/joeloconnor-nz"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Visit my GitHub profile"
                                className="transition-colors hover:text-stone-500"
                            >
                                <GitHubLogo />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/joel-oconnor"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Visit my LinkedIn profile"
                                className="transition-colors hover:text-[#0077B5]"
                            >
                                <LinkedInLogo />
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </>
    );
}
