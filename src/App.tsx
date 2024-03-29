import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import { webRoutes } from './navigation/webRoutes'
import { mobileRoutes } from './navigation/mobileRoutes'

setupIonicReact()

const App: React.FC = () => {
	const isAndroid = /Android/i.test(navigator.userAgent)

	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>{isAndroid ? mobileRoutes : webRoutes}</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	)
}

export default App
