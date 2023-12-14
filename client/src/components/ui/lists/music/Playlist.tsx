import { Tile } from './tiles/Tile'
import { TypePlaylistProps } from './types/Playlist.type'

export const Playlist = ({
	playlist,
	size
}: {
	playlist: TypePlaylistProps
	size: 'text' | 'xs' | 'sm' | 'md' | 'lg'
}): JSX.Element => {
	return (
		<Tile
			name={playlist.name}
			type={'album'}
			size={size}
			authors={playlist.authors}
			alt={playlist.name}
			coverUrl={playlist.cover}
		/>
	)
}
