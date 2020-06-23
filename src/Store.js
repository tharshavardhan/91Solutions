import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import  persistedReducer from './redux/RootReducer'
import { persistStore } from 'redux-persist'

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

const persistor = persistStore(store)


export {store , persistor}

