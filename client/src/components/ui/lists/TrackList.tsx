import { Track } from './music/Track'
import { TypeTrackProps } from './music/types/Track.type'
import { TypeTracksList } from './music/types/TracksList.type'

const TrackList = ({ trackList }: {trackList: TypeTracksList}) => {
	return (
		<>
			{trackList.map((el, i) => (
				<Track key={i} track={el as unknown as TypeTrackProps} />
			))}
		</>
	)
}
export default TrackList