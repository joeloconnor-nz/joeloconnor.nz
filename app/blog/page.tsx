import { allPosts, Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export default function Blog() {
    const posts = allPosts
        .filter((post) => post.isPublished)
        .sort((a, b) => {
            const timeA = new Date(a.date).getTime();
            const timeB = new Date(b.date).getTime();
            return timeB - timeA;
        });

    return (
        <div className="p-6 py-8">
            <h1 className="text-3xl font-medium tracking-tight">
                <Balancer>
                    Hellow worlds This is a title which i am not sure on yet
                </Balancer>
            </h1>

            <ul className="mt-12 grid gap-8 md:grid-cols-2">
                {posts.map((post) => (
                    <BlogPost key={post._id} post={post} />
                ))}
            </ul>
        </div>
    );
}

interface BlogPostProps {
    post: Post;
}

function BlogPost(props: BlogPostProps) {
    const post = props.post;

    return (
        <li>
            <Link className="flex flex-col gap-2 bg-white p-6" href={post.url}>
                <h2 className="text-xl font-medium">{post.title}</h2>
                <time
                    className="order-first text-stone-400 first-letter:text-base dark:text-stone-500"
                    dateTime={post.date}
                >
                    {format(parseISO(post.date), 'd LLLL yyyy')}
                </time>
                <p>{post.description}</p>
                <div className="font-medium text-purple-500">Read Article</div>
            </Link>
        </li>
    );
}
