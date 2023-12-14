import { Volume2 } from 'lucide-react'

export const PlayStatus = (status: boolean) => {
	return <>{status && <Volume2 />}</>
}
