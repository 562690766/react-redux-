/* import {legacy_createStore as createStore} from 'redux'
function reducer(state=0,action){
    console.log("reducer调用了",action);
    switch(action.type){
        case 'ADD':
            return state+1;
        case 'SUB':
            return state-1;
        default:
            return state;
    }
}
const store =createStore(reducer);
console.log("store中state初始值",store.getState()); */
/* function createStore(reducer){
    reducer(undefind,{type:'@@redux/INITz.5.q.5.i.o'})
} */
/* store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch({type:"ADD"});
store.dispatch({type:"ADD"});
store.dispatch({type:"ADD"});
store.dispatch({type:"SUB"}); */

/* 
import  {legacy_createStore} from 'redux'
const reducer=(state=10,action={})=>{
    switch(action.type){
        case "add":
            return state+1;
        case "sub":
            return state-1;
        default:
            return state;
    }
}
const store=legacy_createStore(reducer);
console.log("store:",store);
console.log("store里的state值:",store.getState());
store.dispatch({type:"add"});
console.log("store里的state值:",store.getState()); */


import {legacy_createStore} from 'redux'
const reducer=(state=0,action={})=>{
    switch(action.type){
        case "add":
            return state+1;
        case "sub":
            return state-1;
        default:
            return state;
    }
}
const store=legacy_createStore(reducer);
store.subscribe(()=>{
    console.log("store.getSata",store.getState());
})

console.log("store:",store);
console.log("sotre里的state",store.getState());
store.dispatch({type:"add"});
console.log("sotre里的state",store.getState());
store.dispatch({type:"add"});
console.log("sotre里的state",store.getState());