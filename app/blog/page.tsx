import { Title } from '@/components/title';
import { allPosts, Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function Blog() {
    const posts = allPosts
        .filter((post) => post.isPublished)
        .sort((a, b) => {
            const timeA = new Date(a.date).getTime();
            const timeB = new Date(b.date).getTime();
            return timeB - timeA;
        });

    return (
        <div className="p-6 py-8 ">
            <div className="max-w-xl">
                <Title>Blog</Title>
                <p className="mt-4 pr-10 text-lg tracking-tight text-zinc-600 dark:text-zinc-400">
                    This includes a diverse range of posts covering topics such
                    as DIY projects, pets, gardening, technology trends,
                    software development insights, and more.
                </p>
            </div>

            <ul className="mt-12 grid gap-8 lg:grid-cols-2">
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
        <li className="group border-t-4 border-t-purple-700 bg-white p-6 text-zinc-800 shadow transition-colors hover:border-t-purple-800 hover:bg-stone-100 dark:border-t-purple-800/50 dark:bg-stone-800 dark:text-zinc-100 hover:dark:bg-stone-700/50">
            <Link className="flex h-full flex-col gap-2 " href={post.url}>
                <h2 className="text-xl font-medium">{post.title}</h2>
                <time
                    className="order-first text-stone-400 first-letter:text-base dark:text-stone-500"
                    dateTime={post.date}
                >
                    {format(parseISO(post.date), 'd LLLL yyyy')}
                </time>
                <p className="mb-4 grow dark:text-zinc-400">
                    {post.description}
                </p>
                <div
                    className="font-medium text-stone-400 transition-colors group-hover:text-purple-600 dark:text-stone-500 group-hover:dark:text-purple-700/80"
                    aria-hidden={true}
                >
                    Read Article
                </div>
            </Link>
        </li>
    );
}
