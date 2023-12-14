import { IAlbum } from './Album.interface'
import { ITrack } from './Track.interface'

/** General Comment interface  */
export interface IComment {
	readonly id: string
	userId: string
	target: ITrack | IAlbum
	text: string
	publicationDate: number
}