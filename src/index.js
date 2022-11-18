/* import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {legacy_createStore} from 'redux'
import counter from './reducers/counter'
import {Provider} from 'react-redux'


const store=legacy_createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
)

store.subscribe=()=>{
    console.log("store里的state",store.getState());
} */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from "./App"
import {legacy_createStore} from 'redux'
import counter from './reducers/counter'

const store=legacy_createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
)

store.subscribe =()=>{
    console.log("store里的state",store.getState());
}
    
