export default function PlaylistPage({ params }: { params: { playlistId: string } }) {
	return (
		<>
			<h1>Playlist Page #{params.playlistId}</h1>
		</>
	)
}