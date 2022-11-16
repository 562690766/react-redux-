import React,{Component} from 'react'
import {HashRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom'
import Style from '@/css/style1'
import Home from '@/component/Home'
import Books from '@/component/Books'
import News from '@/component/News'
import Travle from '@/component/Travle'
import Play from '@/component/Play'
import NoMatch from '@/component/NoMatch'
import Course from '@/component/Course'
const PrivateRoute=({component:Component,...rest})=>{
    return(
        <Route {...rest} render={props=>(<Component {...props}/>)}/>
    )
}
const BaseRouter=()=>{
    return (
        <>
            <Router>
                <div>
                    <ul className={Style.nav}>
                        <li>
                            <NavLink to="/">首页</NavLink>
                        </li>
                        <li>
                            <NavLink to="/news">news页面</NavLink>
                        </li>
                        <li>
                            <NavLink to="/books?title=这是书籍页&&content=可以免费阅读">books页面</NavLink>
                        </li>
                        <li>
                            <NavLink to="/travle/tom">travle页面</NavLink>
                        </li>
                        <li>
                            <NavLink to="/play">play页面</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Course">Course页面</NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/news/food" component={News}></Route>
                        <Route path="/books" component={Books}></Route>
                        <Route path="/travle/:user" component={Travle}></Route>
                        <PrivateRoute path="/play" component={Play}></PrivateRoute>
                        {/* 重定向组件 */}
                        <Redirect from="/news" to="/news/food"></Redirect>
                        <Route path="/course" exact component={Course}></Route>

                        <Route component={NoMatch}></Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}
export default BaseRouter;