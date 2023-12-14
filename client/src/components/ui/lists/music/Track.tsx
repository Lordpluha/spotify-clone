import { TypeTrackProps } from './types/Track.type'

export const Track = ({ track }: {track: TypeTrackProps}): JSX.Element => {
	return (
		<div className='bg-lighterGrey flex p-1 items-center my-2 rounded-md'>
			<h6 className='ml-3'>Track</h6>
		</div>
	)
}
