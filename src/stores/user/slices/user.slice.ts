import type { StateCreator } from "zustand"

import type { UserStore } from "."
import type { User } from "../../../graphql/api"
import type { Maybe } from "../../../types"

import { UserApi } from "../../../apis"

type UserState = {
	currentUser: User | null
	loadingUser: boolean
	errorUser: string | null
}

type UserActions = {
	setCurrentUser: (userId: string) => Promise<void>
	clearCurrentUser: () => void
	updateCurrentUser: (user: User, selfie?: File) => Promise<Maybe<User>>
}

export type UserSlice = UserState & UserActions

const createUserSlice: StateCreator<UserStore, [], [], UserSlice> = (set) => {
	const userApi = new UserApi()

	return {
		currentUser: null,
		loadingUser: false,
		errorUser: null,

		setCurrentUser: async (userId: string): Promise<void> => {
			set({ loadingUser: true, errorUser: null })

			try {
				const res = await userApi.get(userId)

				if (res.hasError) {
					throw res.error
				}

				const currentUser = res.item

				set((state: UserState) => ({
					...state,
					currentUser,
					loadingUser: false,
				}))
			} catch (error) {
				set({ loadingUser: false, errorUser: error as string })
			}
		},

		clearCurrentUser: (): void => {
			set((state: UserState) => ({
				...state,
				currentUser: null,
			}))
		},

		updateCurrentUser: async (
			user: User,
			selfie?: File,
		): Promise<Maybe<User>> => {
			set({ loadingUser: true, errorUser: null })

			try {
				const res = await userApi.update(user, selfie)

				if (res.hasError) {
					throw res.error
				}

				const updatedUser = res.item

				set((state: UserState) => ({
					...state,
					currentUser: updatedUser,
					loadingUser: false,
				}))

				return { value: updatedUser! }
			} catch (error) {
				set({ loadingUser: false, errorUser: error as string })

				return { error: Error("Failed to update user") }
			}
		},
	}
}

export default createUserSlice
