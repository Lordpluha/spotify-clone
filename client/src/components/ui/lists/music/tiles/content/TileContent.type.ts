import { IArtist } from '@/components/interfaces/Artist.interface'
import { IUser } from '@/components/interfaces/User.interface'

export type TypeTileContentProps = {
	size: 'lg' | 'md' | 'sm' | 'xs' | 'text'
	type: 'album' | 'playlist' | 'artist' | 'author' | 'track'
	name: string
	authors: Array<IArtist | IUser>
}