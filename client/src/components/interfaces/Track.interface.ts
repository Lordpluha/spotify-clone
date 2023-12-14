import { IAlbum } from './Album.interface'
import { IArtist } from './Artist.interface'
import { IComment } from './Comment.interface'


/** General Track interface */
export interface ITrack {
	readonly id: string
	name: string
	artists: Array<IArtist>
	listens: number
	cover: string
	audio: string
	album: Array<IAlbum> | null
	duration: number

	comments: Array<IComment> 
	releaseDate: number
	text: string
}