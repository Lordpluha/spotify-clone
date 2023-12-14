import { Tile } from './tiles/Tile'
import { TypeAlbumProps } from './types/Album.type'

export const Album = ({
	album,
	size
}: {
	album: TypeAlbumProps
	size: 'text' | 'xs' | 'sm' | 'md' | 'lg'
}) => {
	return (
		<Tile
			name={album.name}
			type={'album'}
			size={size}
			authors={album.artists}
			alt={album.name}
			coverUrl={album.cover}
		/>
	)
}
