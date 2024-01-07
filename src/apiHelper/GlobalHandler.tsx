import Axios from 'axios'
import queryString from 'query-string'
import { store } from '../redux'
import { Config } from '../config'

export enum IType {
	get = 'get',
	post = 'post',
}

export interface Ihydrate {
	success: boolean
	msg: string
}

interface IHandler {
	path: string
	type: IType
	data?: any
	_token?: string
	isFormData?: boolean
	isUrlencoded?: boolean
	otpToken?: string
}

const GlobalHandler = (payload: IHandler): Promise<[boolean, any]> => {
	console.log(`⚡ Requesting::${payload.path} :`, payload)
	const _handler = async (payload: IHandler): Promise<[boolean, any]> => {
		try {
			store.dispatch(session_check())
			const tokens = await localStorage.getItem('token')
			const token = tokens || null
			const { path, type, data, _token } = payload
			const tokenFromParam = _token || token
			const baseURL = Config.API_URL + path
			console.log(baseURL)
			const otpToken = payload.otpToken != null ? { 'otp-token': payload.otpToken } : {}
			if (type === 'get') {
				//GET TYPE
				const response = await Axios({
					method: 'GET',
					baseURL,
					params: data,
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${tokenFromParam}`,
						...otpToken,
					},
				}).catch((error: any) => {
					const msg =
						error?.response?.data?.message ??
						typeof error?.response?.data?.responseException?.exceptionMessage ===
							'string'
							? error?.response?.data?.responseException?.exceptionMessage
							: error?.response?.data?.responseException?.exceptionMessage?.title ??
							  error?.response?.data?.responseException?.title ??
							  error?.message ??
							  'Something When Wrong'
					if (typeof msg !== 'string') {
						console.log(
							`💀❗❗ Response::${payload.path}`,
							error?.response?.data?.responseException,
						)
					}
					throw new Error(msg)
				})
				console.log(`🌈 Response::${payload.path} :`, response?.data)

				return [true, response?.data]
			} else {
				//POST TYPE
				const response = await Axios({
					method: 'POST',
					baseURL,
					data: payload?.isUrlencoded ? queryString.stringify(data) : data,
					headers: {
						'Content-Type': payload?.isFormData
							? 'multipart/form-data'
							: payload?.isUrlencoded
							? 'application/x-www-form-urlencoded'
							: 'application/json',
						Authorization: `Bearer ${token}`,
						...otpToken,
					},
				}).catch((error: any) => {
					console.log('💀❗❗Global Handler', error?.response?.data)
					let msg =
						error?.response?.data?.message ??
						typeof error?.response?.data?.responseException?.exceptionMessage ===
							'string'
							? error?.response?.data?.responseException?.exceptionMessage
							: error?.response?.data.responseException?.exceptionMessage.message ??
							  error?.response?.data?.responseException?.exceptionMessage?.title ??
							  error?.response?.data?.responseException?.title ??
							  error?.message ??
							  'Something When Wrong'
					if (typeof msg !== 'string') {
						console.log(
							`💀❗❗ Response::${payload.path}`,
							error?.response?.data?.responseException,
						)
					} else if (String(msg).includes('validation errors')) {
						const validationErrorMessage =
							error?.response?.data?.responseException?.validationErrors[0]?.reason
						if (validationErrorMessage) {
							msg = validationErrorMessage
						}

						console.log(
							`💀❗❗ Validation Error::${payload.path}`,
							validationErrorMessage,
						)
					}

					throw new Error(msg)
				})
				console.log(`🌈 Response::${payload.path} :`, response?.data)
				return [true, response?.data]
			}
		} catch (error: any) {
			console.log(`💀❗❗ Response::${payload.path}`, {
				msg: error.message,
			})
			return [false, error.message]
		}
	}
	return _handler(payload)
}

export default GlobalHandler
function session_check(): any {
	throw new Error('Function not implemented.')
}
