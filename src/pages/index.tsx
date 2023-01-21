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
                <header className="flex flex-row justify-between p-7">
                    <Link
                        href="/"
                        className="text-purple-900 dark:text-purple-500"
                    >
                        joeloconnor.nz
                    </Link>
                    {/* Temporarily hiding dark mode toggle until implemented */}
                    <button
                        className="hidden p-2 transition-colors hover:text-slate-500 dark:text-slate-400"
                        aria-label="Toggle Dark Mode"
                    >
                        <MoonIcon />
                    </button>
                </header>
                <main className="flex flex-col items-center p-10 text-center">
                    <Image
                        className="mb-10 h-24 w-24 rounded-full shadow-2xl sm:h-40 sm:w-40 md:h-44 md:w-44"
                        src="/profile-photo.jpeg"
                        width="176"
                        height="176"
                        alt=""
                    />
                    <h1 className="mb-10 text-4xl text-slate-700 dark:text-slate-300 sm:text-5xl md:text-6xl">
                        Joel O&rsquo;Connor
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 md:text-2xl">
                        I am currently rebuilding my website as I learn software
                        development
                    </p>
                    <p className="mt-2 hidden text-slate-500 dark:text-slate-400 sm:block md:text-2xl">
                        Follow my progress on GitHub or connect with me on
                        LinkedIn
                    </p>
                </main>
                <footer className="flex flex-row justify-center p-7 text-slate-700 dark:text-slate-400">
                    <ul className="flex gap-4 md:gap-6">
                        <li>
                            <a
                                href="https://github.com/joeloconnor-nz"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Visit my GitHub profile"
                                className="transition-colors hover:text-slate-500"
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
