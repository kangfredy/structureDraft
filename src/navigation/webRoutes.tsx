import { Route, Redirect } from 'react-router'
import Login from '../pages/website/auth/Login'
import Dashboard from '../pages/website/dashboard/Dashboard'

export const webRoutes: React.ReactNode = (
	<>
		<Route
			exact
			path='/'
		>
			<Redirect to='/auth/login' />
		</Route>
		<Route
			exact
			path='/auth/login'
			component={Login}
		/>
		<Route
			exact
			path={'/dashboard'}
			component={Dashboard}
		/>
	</>
)
