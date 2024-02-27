import Link from 'next/link'
import { CSSProperties, PropsWithChildren, ReactNode } from 'react'

type TypeLinkWrapperProps = {
	to: string
	children: ReactNode
	styles?: CSSProperties
} & PropsWithChildren

export const LinkWrapperBlock = ({ to='', children, styles }: TypeLinkWrapperProps) => {
  return (
	<Link href={to} style={styles}>
		{ children }
	</Link>
  )
}
