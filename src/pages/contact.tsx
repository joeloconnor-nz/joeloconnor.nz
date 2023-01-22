import { Layout } from '@/components/layout';
import { NextSeoProps } from 'next-seo';

const seoProp: NextSeoProps = {
    title: 'Contact',
};

export default function Contact() {
    return (
        <Layout seo={seoProp}>
            <h1 className="text-4xl">Contact Me</h1>
            <p>TODO</p>
        </Layout>
    );
}
