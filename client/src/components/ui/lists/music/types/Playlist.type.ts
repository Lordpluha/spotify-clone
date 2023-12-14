import { IArtist } from '../../../../interfaces/Artist.interface'
import { ITrack } from '../../../../interfaces/Track.interface'
import { IUser } from '../../../../interfaces/User.interface'

/** Type of Playlist component props */
export type TypePlaylistProps = {
	readonly id: string
	name: string
	tracks?: Array<ITrack>
	cover?: string

	authors: Array<IUser | IArtist>

	listens: number
	releaseDate: number
	updateDate?: number
}