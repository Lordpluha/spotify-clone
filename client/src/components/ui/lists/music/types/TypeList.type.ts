import { TypeAlbumProps } from './Album.type'
import { TypePlaylistProps } from './Playlist.type'

export type ETypeList = Array<TypeAlbumProps> | Array<TypePlaylistProps>

export type TypeTypeListProps = {
	title?: string
	subtitle?: string
	type: 'album' | 'playlist'
	data: ETypeList
}