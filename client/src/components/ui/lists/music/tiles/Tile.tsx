import Cover from './cover/Cover'
import { LinkWrapperBlock } from './links/LinkWrapper'

import { ReactNode } from 'react'
import type { TypeTileProps } from './Tile.type'
import { TileContent } from './content/TileContent'

/**
 * Main component, which realease album+track+playlist tiles
 * @todo xsAlbum = xsPlaylist
 * @todo smAlbum = smPlaylist
 * @todo mdAlbum = mdPlaylist
 * @todo lgAlbum = lgPlaylist
 * @todo xsArtist = xsAuthor
 * @todo smArtist = smAuthor
 * @todo mdArtist = mdAuthor
 * @todo lgArtist = lgAuthor
 */

export const Tile = (props: TypeTileProps): ReactNode => {
	const TileContentProps = {
		size: props.size,
		type: props.type,
		name: props.name,
		authors: props.authors
	}
	return (
		<div style={props.style}>
			{props.size == 'xs' || props.size == 'sm' ? (
				<>
					<Cover
						url={props.coverUrl}
						alt={props.name}
						size={props.size}
						link={true}
						linkUrl={props.linkUrl}
					/>
					{props.size != 'xs' && (
						<TileContent {...TileContentProps} />
					)}
				</>
			) : (
				<LinkWrapperBlock to={props?.linkUrl || ''}>
					{props.size == 'md' || props.size == 'lg' ? (
						<>
							<Cover
								url={props.coverUrl}
								alt={props.name}
								size={props.size}
							/>
							<TileContent {...TileContentProps} />
						</>
					) : (
						<TileContent {...TileContentProps} />
					)}
				</LinkWrapperBlock>
			)}
		</div>
	)
}
