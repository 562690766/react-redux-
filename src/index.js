import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {legacy_createStore} from 'redux'
import {Provider} from 'react-redux'
import {counter} from './reducers/counter'

const store=legacy_createStore(counter);
console.log("store中的state",store.getState());
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById("app")
    )
store.subscribe(()=>{
    console.log("监控到，render以后的state",store.getState());
})

