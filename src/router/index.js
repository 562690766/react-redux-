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
import {renderRoutes} from "react-router-config"
import BookChild from './child/BookChild'
/* import Child1 from '@/component/child/Child1'
import Child2 from '@/component/child/Child2' */
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
        path:"/news",
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
    {
        // 私有路由也要添加
        path:"/play",
        component:Play,
    },
    {
        path:"/BookChild333",
        component:BookChild,
        
    },
/*     {
        path:"/BookChild/child1",
        component:Child1,
        exact:true,
    },
    {
        path:"/BookChild/child2",
        component:Child2,
        exact:true,
    }, */
    {
        component:NoMatch
    }
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
{/* 二级菜单 */}
                         <li>
                            <NavLink to="/BookChild333">BookChild页面</NavLink>
                        </li>
                       {/* <li>
                            <NavLink to="/BookChild/child1">Child11111页面</NavLink>
                        </li>
                        <li>
                            <NavLink to="/BookChild/child2">Child22222页面</NavLink>
                        </li> */}
                    </ul>
                    <Switch>
                        {/* 配置式路由方法2 */}
                        {/* 遍历存储路由配置得助手 */}     
                        <PrivateRoute path="/course" component={Course}/>
                        {/* 重定向组件 buggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg*/}
                        {/* <Redirect from="/news" to="/news/food"></Redirect> */}
                        <PrivateRoute path="/play" component={Play}></PrivateRoute>
                        {renderRoutes(routes)}

                    </Switch>
                </div>
            </Router>
        </>
    )
}
export default BaseRouter;