import React,{Component} from 'react'
import {connect} from "react-redux"
// import {add,sub} from './actions/action1'
import {ADD,SUB} from './actions/action1'

class App extends Component{
    render(){
        let {dispatch,count}=this.props;
        return (
            <div>
                <h3>app组件</h3>
                <p>count:{count}</p>
                <button onClick={()=>dispatch(ADD())}>+</button>
                <button onClick={()=>dispatch(SUB())}>-</button>
            </div>
        )
    }
}
const manStoreToProps=(state)=>{
    return {
        count:state
    }
}

export default connect(manStoreToProps)(App);