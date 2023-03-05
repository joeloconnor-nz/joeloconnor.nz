export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="pb-6 md:px-6 md:py-12">
            <article className="w-full border-t-4 border-t-purple-700 bg-white px-6 pt-12 pb-16 shadow-xl shadow-stone-700/10 ring-1 ring-stone-900/5 dark:bg-stone-800 dark:shadow-stone-800/10 md:px-12 md:pt-16 lg:pt-24 lg:pb-28">
                <div className="prose prose-lg prose-stone mx-auto prose-figure:-mx-6 prose-figcaption:px-6 prose-figcaption:italic prose-pre:-mx-6 prose-pre:rounded-none dark:prose-invert md:prose-figcaption:px-0 md:prose-pre:rounded-lg">
                    <section>{children}</section>
                </div>
            </article>
        </div>
    );
}
