import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-stone-100 dark:bg-stone-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
