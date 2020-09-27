import { combineReducers, createStore } from 'redux'
import reducer from './reducer'

const rootReducer = combineReducers({
	reducer: reducer,
})

type RootReducerType = typeof rootReducer

export type StoreType = ReturnType<RootReducerType>

const store = createStore(rootReducer)

export default store
