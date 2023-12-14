import { IAlbum } from '../../../../interfaces/Album.interface'
import { IArtist } from '../../../../interfaces/Artist.interface'

/** Type of Track component props */
export type TypeTrackProps = {
	readonly id: string
	name: string
	artists: Array<IArtist>
	listens: number
	cover: string
	audio: string
	album: Array<IAlbum>
	duration: number
}