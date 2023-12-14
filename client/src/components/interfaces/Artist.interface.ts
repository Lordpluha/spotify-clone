import { TypeUserInfo } from './User.interface'

/** General Artist interface  */
export interface IArtist extends TypeUserInfo {
	user_id: string
	listens: number
	verified: boolean
}