import '@/styles/globals.css';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import type { AppProps } from 'next/app';

const defaultSeoProp: DefaultSeoProps = {
    defaultTitle: 'Joel O’Connor',
    titleTemplate: '%s | Joel O’Connor',
    description:
        'The personal website of Joel O’Connor. Follow my progress as I learn software development',
    openGraph: {
        type: 'website',
        images: [
            {
                url: 'https://joeloconnor.nz/images/profile-photo.jpeg',
            },
        ],
    },
    twitter: {
        cardType: 'summary_large_image',
    },
    additionalMetaTags: [
        {
            name: 'author',
            content: 'Joel O’Connor',
        },
    ],
    additionalLinkTags: [
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
    ],
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo {...defaultSeoProp} />
            <Component {...pageProps} />
        </>
    );
}
