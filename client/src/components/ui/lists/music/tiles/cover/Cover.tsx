import clsx from 'clsx'
import Image from 'next/image'

import styles from './Cover.module.scss'

import { LinkWrapperBlock } from '../links/LinkWrapper'
import type { TypeCoverProps } from './Cover.types'
import { ReactNode } from 'react'

const sizes = {
	xs: 32,
	sm: 50,
	md: 50,
	lg: 192
}

const CoverWrapper = ({
	children,
	link,
	linkUrl
}: {
	children: ReactNode
	link?: boolean
	linkUrl?: string
}) => (
	<>
		{link && linkUrl ? (
			<LinkWrapperBlock to={linkUrl}>{children}</LinkWrapperBlock>
		) : (
			<div>{children}</div>
		)}
	</>
)

export default function Cover(cover: TypeCoverProps) {
	const { size, alt, url, link, linkUrl } = cover
	const classes = clsx(styles.cover, styles[size])

	return (
		<CoverWrapper link={link} linkUrl={linkUrl}>
			{url ? (
				<Image
					src={url}
					className={classes}
					alt={alt || 'cover image'}
				/>
			) : (
				<Image
					src={
						'http://fakeimg.pl/50x50/#D9D9D9,255/#D9D9D9?text=Test&font=lobster'
					}
					className={classes}
					width={sizes[size]}
					height={sizes[size]}
					alt={alt}
				/>
			)}
		</CoverWrapper>
	)
}
