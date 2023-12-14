import { IArtist } from '@/components/interfaces/Artist.interface'
import { IUser } from '@/components/interfaces/User.interface'
import { CSSProperties, PropsWithChildren } from 'react'

export type TypeTileProps = {
	/**
	 * LG - albums, playlists
	 * MD - md - "pose" tracks on main
	 * SM - tracks
	 * XS - tracks for sidebar with hover
	 * text - minimalistic view for tracks in sidebar
 	 */
	name: string
	type: 'album' | 'playlist' | 'artist' | 'author'
	size: 'lg' | 'md' | 'sm' | 'xs' | 'text'

	/** CONTENT PROPS */
	authors: Array<IArtist | IUser>

	/** COVER PROPS */
	/** Alternative text for images */
	alt: string
	/** Url for Cover component */
	coverUrl?: string
	/** Link Url */
	linkUrl?: string

	style?: CSSProperties
} & PropsWithChildren