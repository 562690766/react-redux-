import React from 'react'
import {NavLink,Route,Switch} from 'react-router-dom'
import Child1 from '@/component/child/Child1'
import Child2 from '@/component/child/Child2'
import NoMatch from '@/component/NoMatch'
const BookChild=({match})=>{
  return (
    <div>
        <h2>BookChildhhdhdhhdh</h2>
        <ul>
            <li> <NavLink  to={`${match.url}/child1`} exact>child1</NavLink> </li>
            <li> <NavLink  to="/bookchild/child2" exact>child222</NavLink> </li>
        </ul>
        <Switch>
        <Route path={`${match.url}/child1`} component={Child1}></Route>
        <Route path="/bookchild/child2" component={Child2}></Route>
        <Route  component={NoMatch}></Route>

        </Switch>
    </div>
  )
}
export default BookChild;
