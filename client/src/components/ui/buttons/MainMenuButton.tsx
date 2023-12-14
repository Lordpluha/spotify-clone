'use client'

import { Home } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const MainMenuButton = () => {
	const router = useRouter()
	return (
		<Home onClick={e=>{
			router.replace('/')
		}} />
	)
}