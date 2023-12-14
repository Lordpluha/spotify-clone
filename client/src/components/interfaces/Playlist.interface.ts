import { IArtist } from './Artist.interface'
import { IComment } from './Comment.interface'
import { ITrack } from './Track.interface'
import { IUser } from './User.interface'

/** General Playlist interface  */
export interface IPlaylist {
	readonly id: string
	name: string
	tracks: Array<ITrack>
	authors: Array<IUser | IArtist>
	cover: string
	listens: number
	comments: Array<IComment>
	releaseDate: number
	updateDate: number
}