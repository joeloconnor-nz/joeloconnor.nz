import Balancer from 'react-wrap-balancer'

export interface TitleProps {
  children: React.ReactNode
}

export function Title(props: TitleProps) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      <Balancer>{props.children}</Balancer>
    </h1>
  )
}
