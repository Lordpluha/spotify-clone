import type { Metadata } from 'next'

import 'normalize.css'

import { Titillium_Web } from 'next/font/google'
import './globals.scss'

import Navbar from '@/components/ui/navbar/Navbar'
import Sidebar from '@/components/ui/sidebar/Sidebar'
import Wrapper from '@/components/ui/wrapper/Wrapper'
import Player from './../components/ui/player/Player'
import { useState } from 'react'
import StyledComponentsRegistry from '@/components/lib/AntdRegistry'

const WF_titillium_web = Titillium_Web({
	subsets: ['latin'],
	weight: '400',
	variable: '--wf-titilium'
})

export const metadata: Metadata = {
	title: 'Spotify clone',
	description: 'Create by Lordpluha'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={WF_titillium_web.className}>
				<StyledComponentsRegistry>
					<Wrapper
						orientation={'full'}
						customStyles={'flex flex-col'}
					>
						<Wrapper level={1} customStyles={'m-1'}>
							<Sidebar />

							<Wrapper
								level={2}
								orientation={'vertical'}
								customStyles='flex grow max-h-full z-1 ml-3 overflow-y-scroll'
							>
								<main className='w-full'>
									<Navbar />
									{children}
								</main>
							</Wrapper>
						</Wrapper>
						<Player status={true} />
					</Wrapper>
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
