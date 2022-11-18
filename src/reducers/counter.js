/* import {ADD,SUB} from '../constants/constant'

const counter=(state=0,action)=>{
    switch(action.type){
        case ADD:
            return state+1;
        case SUB:
            return state-1;
        default:
            return state;
    }
} 
export default counter;*/


import {ADD,SUB} from '../constants/constant'
const counter =(state=0,action)=>{
    switch(action.type){
        case ADD:
            return state+1;
        case SUB:
            return state-1;
        default :
            return state;
    }
}
export default counter;