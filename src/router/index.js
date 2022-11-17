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
// 创建路由配置助手
const routes=[
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/news/food",
        component:News,
    },
    {
        path:"/books",
        component:Books,
    },
    {
        path:"/travle/:user",
        component:Travle,
    },
    {
        path:"/course",
        component:Course,
    },
]
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
                        {/* 纯手写 */}
                        {
                            routes.map((value,index)=>{
                                return (
                                    <Router key={index}
                                        path={value.path}
                                        component={value.component}
                                        {...value}
                                    ></Router>
                                )
                            })
                        }

                        {/* <Route path="/" exact component={Home}></Route> */}
                        {/* <Route path="/news/food" component={News}></Route> */}
                        {/* <Route path="/books" component={Books}></Route> */}
                        {/* <Route path="/travle/:user" component={Travle}></Route> */}
                        {/* <Route path="/course" exact component={Course}></Route> */}

                        {/* 重定向组件 */}
                        <Redirect from="/news" to="/news/food"></Redirect>
                        <PrivateRoute path="/play" component={Play}></PrivateRoute>

                        <Route component={NoMatch}></Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}
export default BaseRouter;