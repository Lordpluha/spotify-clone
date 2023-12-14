import { IArtist } from '../../../../interfaces/Artist.interface'
import { ITrack } from '../../../../interfaces/Track.interface'

/** Type of Album component props */
export type TypeAlbumProps = {
	readonly id: string
	name: string
	tracks: Array<ITrack>
	cover?: string

	artists: Array<IArtist>
	listens: number
	releaseDate: number

	key?: string | number | Symbol
}