import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import {createStore} from 'redux'
function reducer(state=0,action){
    console.log("reducer调用了",action);
    switch(action.type){
        case 'ADD':
            return state+1;
        case 'SUB':
            return state-1;
        defaule:
            return state;
    }
}
const store =createStore(reducer);
/* function createStore(reducer){
    reducer(undefind,{type:'@@redux/INITz.5.q.5.i.o'})
} */
console.log("store state",store.getState());

ReactDOM.render(
    <App />,
    document.getElementById("app")
)
