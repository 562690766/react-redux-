
/* import React,{Component} from 'react'
import {connect} from 'react-redux'
import {add,sub} from './actions/action1'

class App extends Component{
    
    render(){
        let {dispatch,count}=this.props
        return(
            <div>
                <p>{count}</p>
                <button onClick={()=>dispatch(add())}>+</button>
                <button onClick={()=>dispatch(sub())}>-</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        count:state
    }
}
export default connect(mapStateToProps)(App);
 */


import React,{Component} from 'react'
import {connect} from 'react-redux'
import {add,sub} from './actions/action1'

class App extends Component {
    render (){
        let {dispatch,count} =this.props;
        return (
            <div>
                <h2>app组件</h2>
                <p>{count}</p>
                <button onClick={()=>dispatch(add())}>+</button>
                <button onClick={()=>dispatch(sub())}>-</button>

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        count:state
    }
}
export default connect(mapStateToProps)(App);
