import React from 'react'
import Routes from './routes'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducers from './store/reducers'

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
)

function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

export default App
