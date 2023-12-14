import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				lighterBlack: '#0B0B0B',
				lightestBlack: '#161616',
				customGrey: '#1D1D1D',
				lighterGrey: '#2C2C2C',
				lightestGrey: '#D9D9D9',
			},
			borderRadius: {
				none: '0',
				sm: '5px',
				md: '10px',
				lg: '15px',
				xl: '25px'
			},
			width: {
				'tile-lg': '132px',
				'tile-md': '67px',
				'tile-sm': '49px',
				'tile-xs': '38px'
			},
			height: {
				'tile-lg': '132px',
				'tile-md': '10px',
				'tile-sm': '49px',
				'tile-xs': '38px'
			}
		}
	},
	plugins: [],
	safelist: [
		{
			pattern:
				/(bg|text|border)-(lighterBlack|lightestBlack|customGrey|lightGrey)/
		}
	]
}
export default config
