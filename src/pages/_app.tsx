import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo
                defaultTitle="Joel O&rsquo;Connor"
                titleTemplate="%s | Joel O&rsquo;Connor"
                description="The personal website of Joel O&rsquo;Connor. Follow my progress as I learn software development"
                openGraph={{
                    type: 'website',
                    images: [
                        {
                            url: 'https://joeloconnor.nz/images/profile-photo.jpeg',
                        },
                    ],
                }}
                twitter={{
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[
                    {
                        name: 'author',
                        content: 'Joel O&rsquo;Connor',
                    },
                ]}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/favicon.ico',
                    },
                ]}
            />
            <Component {...pageProps} />
        </>
    );
}
