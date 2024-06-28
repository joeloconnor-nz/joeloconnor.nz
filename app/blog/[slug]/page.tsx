import { format, parseISO } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'

import { Title } from '@/components/title'
import { mdxComponents } from '../mdx-components'
import { allPosts, Post } from '.contentlayer/generated'

function getPost(slug: string): Post {
  const post = allPosts.find((p) => p.slug === slug)
  if (!post || !post.isPublished) notFound()
  return post
}

export function generateStaticParams() {
  return allPosts.map((post) => {
    return { slug: post.slug }
  })
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = getPost(params.slug)
  return {
    title: post.title,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="md:my-12 md:px-6">
      <div className="w-full border-t-4 border-t-purple-700 bg-white px-6 pb-16 pt-12 shadow-xl shadow-stone-700/10 ring-1 ring-stone-900/5 dark:border-t-purple-900 dark:bg-stone-800 dark:shadow-stone-800/10 md:px-12 md:pt-16 lg:pb-28 lg:pt-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-8 flex flex-col">
            <Title>{post.title}</Title>
            <time
              className="order-first mb-6 text-base text-stone-400 dark:text-stone-500"
              dateTime={post.date}
            >
              {format(parseISO(post.date), 'd LLLL yyyy')}
            </time>
          </header>
          <div className="prose prose-xl prose-stone dark:prose-invert md:prose-2xl prose-figure:-mx-6 prose-figcaption:px-6 prose-figcaption:italic prose-pre:-mx-6 prose-pre:rounded-none md:prose-figcaption:px-0 md:prose-pre:rounded-lg max-w-full">
            <MDXContent components={mdxComponents} />
          </div>
        </article>
      </div>
    </div>
  )
}
