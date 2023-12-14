import { PlayButton } from '@/components/ui/buttons/PlayButton'
import { LinkWrapperBlock } from '../links/LinkWrapper'
import { TypeTileContentProps } from './TileContent.type'

export const TileContent = (props: TypeTileContentProps) => {
	const renderAuthors = () =>
		props.authors.map(el => (
			<LinkWrapperBlock to={''} key={el.id}>
				{el.username}
			</LinkWrapperBlock>
		))

	return (
		<>
			{props.type == 'album' || props.type == 'playlist' ? (
				<>
					{ props.size != 'xs' && props.name}
					{props.size == 'lg' ? (
						<>
							<PlayButton status={'stop'} />
							{renderAuthors()}
						</>
					) : props.size == 'md' ? (
						<PlayButton status={'stop'} />
					) : (
						props.size == 'sm' && (
							<>
								{props.type} - {renderAuthors()}
							</>
						)
					)}
				</>
			) : props.type == 'artist' || props.type == 'author' ? (
				<>
					{ props.size != 'xs' && props.name}
					{props.size != 'xs' && props.type}
				</>
			) : ( props.type == 'track' && <>
				{props.name}
				{renderAuthors()}
				<PlayButton status={'stop'} />
			</> )}
		</>
	)
}
