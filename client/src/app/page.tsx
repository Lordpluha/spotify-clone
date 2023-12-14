import { TypeList } from '@/components/ui/lists/TypeList'
import Wrapper from './../components/ui/wrapper/Wrapper'
import { ETypeList } from '@/components/ui/lists/music/types/TypeList.type'

const albumsList: ETypeList = [{
	id: '1',
	name: 'Album 1',
	artists: ['Artist 1', 'Artist 2'],
	listens: 20,
	releaseDate: 10022674351198418,
},
{
	id: '12',
	name: 'Album 2',
	artists: ['Artist 1', 'Artist 2'],
	listens: 1025,
	releaseDate: 10022674351198418,
},
{
	id: '123',
	name: 'Album 3',
	artists: ['Artist 1', 'Artist 2'],
	listens: 900000,
	releaseDate: 10022674351198418,
}]

const Home = (): JSX.Element => {
	return (
		<>
			<TypeList title='Подборка для вас' data={albumsList} type={'album'} />
		</>
	)
}

export default Home