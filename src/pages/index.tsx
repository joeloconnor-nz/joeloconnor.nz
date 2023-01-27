import { Layout } from '@/components/layout';
import { NextSeoProps } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

const seoProps: NextSeoProps = {};

export default function Home() {
    return (
        <Layout seo={seoProps}>
            <div className="flex grow flex-col items-center justify-center text-center">
                <Image
                    className="mb-12 h-40 w-40 rounded-3xl shadow-2xl shadow-purple-900/60 dark:shadow-purple-700/30 md:h-44 md:w-44"
                    src="/images/profile-photo.jpeg"
                    width="176"
                    height="176"
                    alt="Image of Joel O'Connor"
                    priority
                />
                <h1 className="mb-8 text-4xl font-medium text-stone-700 dark:text-stone-300 sm:text-5xl md:mb-20 md:text-6xl">
                    Joel O&apos;Connor
                </h1>
                <p className="text-slate-600 dark:text-stone-400 md:text-2xl">
                    I am currently rebuilding my website as I learn software
                    development
                </p>
                <p className="mt-2 hidden text-slate-600 dark:text-stone-400 sm:block md:text-2xl">
                    Follow my progress on GitHub or connect with me on LinkedIn
                </p>
                <Link
                    className="mt-6 flex rounded-lg border-4 border-solid"
                    href="/contact"
                >
                    <span className="py-2 px-5 text-2xl uppercase text-stone-700 dark:text-stone-300">
                        Contact Me
                    </span>
                </Link>
            </div>
        </Layout>
    );
}
