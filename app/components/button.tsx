import Link from 'next/link';

export interface ButtonProps {
    label: string;
    className?: string;
    href?: string;
    type?: 'button' | 'reset' | 'submit';
    disabled?: boolean;
}

export function Button(props: ButtonProps) {
    const { label, href, type, disabled } = props;

    const className = `${props.className} shadow flex rounded-xl bg-stone-700 text-center transition-colors no-underline hover:bg-stone-600 active:shadow-inner active:bg-stone-800 dark:bg-stone-400 hover:dark:bg-stone-500 active:dark:bg-stone-600`;

    const contents = (
        <span className="w-full py-3 px-10 text-xl uppercase text-stone-100 dark:text-stone-800 sm:text-2xl">
            {label}
        </span>
    );

    if (href !== undefined) {
        return (
            <Link className={className} href={href}>
                {contents}
            </Link>
        );
    } else {
        return (
            <button className={className} type={type} disabled={disabled}>
                {contents}
            </button>
        );
    }
}
