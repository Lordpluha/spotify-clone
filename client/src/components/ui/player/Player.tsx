import { ConfigProvider } from 'antd'
import Cover from '../lists/music/tiles/cover/Cover'
import Wrapper from '../wrapper/Wrapper'
import styles from './Player.module.scss'
import { TimeBar } from './bars/TimeBar/TimeBar'
import { PlayStatus } from './buttons/PlayStatus'
import theme from '@/components/theme/themeConfig'

const Player = ({ status }: { status: boolean }) => {
	return (
		<ConfigProvider theme={theme}>
			{status && (
				<Wrapper level={1} orientation={'horizontal'} customStyles={styles.Player}>
					<div className="mr-auto">
						<Cover url='' size='md' linkUrl={''} alt='Player preview'/>
					</div>
					<TimeBar />
					<div className='ml-auto'>
						<PlayStatus status={true} />
					</div>
				</Wrapper>
			)}
		</ConfigProvider>
	)
}

export default Player
