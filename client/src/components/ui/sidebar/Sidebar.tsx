'use client'

import { useRef } from 'react'

import Wrapper from '../wrapper/Wrapper'

import { SizeContext } from '@/components/contexts/Size'
import useResizer from '@/components/hooks/useResizer'
import { TypeList } from '../lists/TypeList'
import styles from './Sidebar.module.scss'

export default function Sidebar() {
	const sidebarRef = useRef<HTMLDivElement>(null!)
	const [sidebarWidth, startResizing] = useResizer(sidebarRef)

	return (
		<Wrapper
			level={2}
			orientation={'none'}
			customStyles={styles.sidebar}
			ref={sidebarRef}
			style={{
				width: `${sidebarWidth}px`
			}}
		>
			<div className={styles.sidebarContent}>
				<SizeContext.Provider value={'text'}>
					{/* <TypeList type={'album'} data={[]} /> */}
				</SizeContext.Provider>
			</div>
			<div
				className={styles.sidebarResizer}
				onMouseDown={startResizing}
			/>
		</Wrapper>
	)
}
