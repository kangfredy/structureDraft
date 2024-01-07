import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { SET_USER_PROFILE, SET_USER_PROFILE_PICTURE, USER_LOGOUT } from './constants'
import IUser from './interface'

export const setUserProfile = (payload: IUser) => ({
	type: SET_USER_PROFILE,
	payload,
})

export const setUserProfilePicture = (payload: string) => ({
	type: SET_USER_PROFILE_PICTURE,
	payload,
})

export const RefreshUserData = () => ({
	type: USER_LOGOUT,
	payload: null,
})
