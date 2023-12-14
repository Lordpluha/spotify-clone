import { MutableRefObject, PropsWithChildren, ReactNode } from 'react'

/**
 * Type definition for Wrapper component
 */
export type TypeWrapperProps = {
	/** level 0 - background,
	 * level 1 - generic layout
	 * level 2 - main blocks layout
	 * level 3 - content divider layout
	 */
	level?: 0 | 1 | 2 | 3 | undefined
	children?: ReactNode
	orientation?: 'horizontal' | 'vertical' | 'full' | 'none'
	customStyles?: string | string[]
	style?: React.CSSProperties
} & PropsWithChildren

export type TypeWrapperRef = MutableRefObject<Element>
