import { NextSeo, NextSeoProps } from 'next-seo';
import { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

export interface LayoutProps {
    children: ReactNode;
    seo: NextSeoProps;
}

export function Layout(props: LayoutProps) {
    return (
        <>
            <NextSeo {...props.seo} />
            <div className="mx-auto flex min-h-[100dvh] max-w-screen-xl flex-col">
                <Header />
                <main className="flex grow flex-col py-8 px-6">
                    {props.children}
                </main>
                <Footer />
            </div>
        </>
    );
}
