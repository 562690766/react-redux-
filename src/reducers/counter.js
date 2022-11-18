import {add,sub} from '../constants/constant'
export const counter=(state=0,action)=>{
    console.log("reducer");
    switch(action.type){
        case add:
            return state+1;
        case sub:
            return state-1;
        default:
            return state;
    }
}
