import { CSSProperties } from 'react'

export type TypeCoverProps = {
	alt: string
	size: 'xs' | 'sm' | 'md' | 'lg'
	url?: string
	link?: boolean
	linkUrl?: string
	styles?: CSSProperties
}