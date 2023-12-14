export default function AlbumPage({ params }: { params: { albumId: string } }) {
	return (
		<>
			<h1>Album Page #{params.albumId}</h1>
		</>
	)
}