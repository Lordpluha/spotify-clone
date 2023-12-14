'use client'

import { SizeContext } from '@/components/contexts/Size'
import { useContext } from 'react'
import { Album } from './music/Album'
import { Playlist } from './music/Playlist'
import { TypeAlbumProps } from './music/types/Album.type'
import { TypePlaylistProps } from './music/types/Playlist.type'
import { TypeTypeListProps } from './music/types/TypeList.type'

export const TypeList = (params: TypeTypeListProps) => {
	const size = useContext(SizeContext)
	return (
		<div>
			{params.title && <h1>{params.title}</h1>}
			{params?.data.map(el =>
				params.type == 'album' ? (
					<Album
						key={el.id}
						album={el as TypeAlbumProps}
						size={size}
					/>
				) : (
					params.type == 'playlist' && (
						<Playlist
							key={el.id}
							playlist={el as TypePlaylistProps}
							size={size}
						/>
					)
				)
			)}
		</div>
	)
}
