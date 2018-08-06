import { applyMiddleware, createStore } from 'redux'
import sagaMiddlewareFactory from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const configureStore = () => {
  const sagaMiddleware = sagaMiddlewareFactory()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
