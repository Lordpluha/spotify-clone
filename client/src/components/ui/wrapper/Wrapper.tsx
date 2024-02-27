'use client'

import { forwardRef } from 'react'
import clsx from 'clsx'

import { TypeWrapperProps } from './Wrapper.types'

const colors = ['black', 'lighterBlack', 'lightestBlack', 'customGrey']
const orientationStyles = {
	full: 'h-full w-full',
	horizontal: 'w-full',
	vertical: 'h-full',
	min: 'h-min w-min',
	max: 'h-max w-max',
	none: ''
}
const levelStyles = {
	0: 'rounded-xl',
	1: 'p-2 rounded-xl flex flex-row',
	2: 'p-2 rounded-xl',
	3: 'p-5 rounded-xl'
}

const Wrapper = forwardRef(({ ref, ...props }: TypeWrapperProps) => {
	const { level, children, orientation, customStyles, style } = props
	return (
		<div
			className={clsx(
				level && `bg-${colors[level]} ${levelStyles[level]}`,
				orientationStyles[orientation || 'full'],
				customStyles
			)}
			onMouseDown={e => e.preventDefault()}
			ref={ref}
			style={style}
		>
			{children}
		</div>
	)
})

export default Wrapper
