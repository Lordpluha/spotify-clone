export default function ProfilePage({ params }: { params: { profileId: string } }) {
	return (
		<>
			<h1>Profile Page #{params.profileId}</h1>
		</>
	)
}