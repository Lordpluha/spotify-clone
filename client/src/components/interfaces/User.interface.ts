/** Additional interface for extension general Users and etc. */
export type TypeUserInfo = {
	readonly id: string
	username: string
	email: string
	password: string
	avatar: string
	country: string
	bio: string
	followers: number
}

/** General User interface */
export interface IUser extends TypeUserInfo {
	followed: number
}