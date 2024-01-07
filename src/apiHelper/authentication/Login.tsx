import GlobalHandler, { IType } from '../GlobalHandler'
import { loginUrl } from '../ListUrl'

export const Login = async (params: any) => {
	try {
		const [success, data] = await GlobalHandler({
			path: loginUrl,
			type: IType.post,
			data: params,
		})
		return {
			success,
			msg: success ? 'Success' : data,
			data: success ? data : undefined,
		}
	} catch (error: any) {
		return {
			success: false,
			msg: error.message,
		}
	}
}
