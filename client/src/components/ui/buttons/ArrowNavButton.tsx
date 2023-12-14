'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const ArrowNavButtonTile = ({
	to
}: {
	to: 'before' | 'after' | 'both'
}) => {
	const router = useRouter()

	const LeftArrow = () => (
		<ChevronLeft
			color='#ffffff'
			strokeWidth={1.5}
			onClick={e => {
				router.back()
			}}
		/>
	)

	const RightArrow = () => (
		<ChevronRight
			color='#ffffff'
			strokeWidth={1.5}
			onClick={e => {
				router.forward()
			}}
		/>
	)

	return (
		<>
			{to == 'both' ? (
				<>
					<LeftArrow />
					<RightArrow />
				</>
			) : to == 'before' ? (
				<LeftArrow />
			) : (
				<RightArrow />
			)}
		</>
	)
}
