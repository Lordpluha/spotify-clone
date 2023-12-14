'use client'

import { Plus } from 'lucide-react'
import { MouseEventHandler } from 'react'

export const CreateButton = ({ onClick }: { onClick: MouseEventHandler}) => {
  return (
	<div>
		<Plus onClick={onClick} />
	</div>
  )
}
