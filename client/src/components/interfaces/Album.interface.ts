import { IArtist } from './Artist.interface'
import { IComment } from './Comment.interface'
import { ITrack } from './Track.interface'

/** General Album interface */
export type IAlbum = {
	readonly id: string
	name: string
	artists: Array<IArtist> 
	cover: string
	listens: number
	releaseDate: number

	tracks: Array<ITrack>
	comments: Array<IComment>
}