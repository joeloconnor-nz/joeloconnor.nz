import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Metadata } from 'next';
import { Analytics } from './components/analytics';
import './globals.css';

export const metadata: Metadata = {
    title: "Joel O'Connor",
    description:
        "The personal website of Joel O'Connor. Follow my progress as I learn software development",
    authors: [{ name: "Joel O'Connor" }],
    openGraph: {
        type: 'website',
        images: [{ url: 'https://joeloconnor.nz/images/profile-photo.jpeg' }],
    },
    twitter: {
        card: 'summary_large_image',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-stone-100 dark:bg-stone-900">
                <div className="mx-auto flex min-h-[100dvh] max-w-screen-xl flex-col">
                    <Header />
                    <main className="flex grow flex-col">{children}</main>
                    <Footer />
                </div>
                <Analytics />
            </body>
        </html>
    );
}
