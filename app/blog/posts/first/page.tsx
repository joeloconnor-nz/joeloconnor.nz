import { Metadata } from 'next';
import FirstPost from './post.mdx';

export const metadata: Metadata = {
    title: 'My First Blog Post',
};

export default function Page() {
    return <FirstPost />;
}
