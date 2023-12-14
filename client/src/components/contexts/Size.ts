import { createContext } from 'react'

export type TypeSize = 'text' | 'sm' | 'md' | 'lg'

export const SizeContext = createContext<TypeSize>('text')