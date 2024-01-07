import { Route, Redirect } from 'react-router'
import Home from '../pages/mobile/Home'

export const mobileRoutes: React.ReactNode = (
	<>
		<Route
			exact
			path='/home'
		>
			<Home />
		</Route>
		<Route
			exact
			path='/'
		>
			<Redirect to='/home' />
		</Route>
	</>
)
