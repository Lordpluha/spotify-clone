import { Pause, Play } from 'lucide-react'

export const PlayButton = ({ status }: { status: 'play' | 'stop' }) => {
  return (
	<div>
		{
			status == 'play'
			? <Play />
			: <Pause />
		}
	</div>
  )
}
