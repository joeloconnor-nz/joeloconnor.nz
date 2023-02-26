export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="w-full border-t-4 border-t-purple-700 bg-white px-6 pt-12 pb-16 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:my-12 md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
            <article className="prose prose-slate mx-auto lg:prose-lg">
                {children}
            </article>
        </section>
    );
}
