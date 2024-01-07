import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'

import IUser from './userReducer/interface'
import userReducer from './userReducer'

export interface IRootState {
	user: IUser
}

const reducers = combineReducers({
	user: userReducer as any,
})

const persistConfig = {
	key: 'root',
	storage: localStorage,
	blacklist: ['global', 'services', 'app'], //add a reducer you dont want to save on the local storage, state will be reset when the app restart
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk] as any,
})

const persistor = persistStore(store)

export { store, persistor }
