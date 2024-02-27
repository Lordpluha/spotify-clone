'use client'

import { Progress } from 'antd'
import { Volume2 } from 'lucide-react'
import { useState } from 'react'

export const PlayStatus = ({ status }: { status: boolean }) => {
	const [percent, setPercent] = useState<number>(0)

	const increase = () => {
		setPercent((prevPercent: number) => {
			const newPercent = prevPercent + 10
			if (newPercent > 100) return 100
			return newPercent
		})
	}

	const decline = () => {
		setPercent((prevPercent: number) => {
			const newPercent = prevPercent - 10
			if (newPercent < 0) return 0
			return newPercent
		})
	}

	return (
		<>
			<Volume2 />
			{status ?? <>
				<Progress percent={percent} />
			</>}
		</>
	)
}
