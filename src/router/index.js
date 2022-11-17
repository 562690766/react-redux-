import React from 'react'
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom'
import Home from '@/component/Home'
import Page1 from '@/component/Page1'
import Page2 from '@/component/Page2'
import Page3 from '@/component/Page3'
import Banner from '@/component/Banner'
import Footer from '@/component/Footer'
import Style from '@/css/style'
import { renderRoutes } from 'react-router-config'
const routes=[
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/page1",
        component:Page1
    },
    {
        path:"/page2",
        component:Page2
    },
    {
        path:"/page3",
        component:Page3
    }
]
const BasrowRouter=()=>{
    return (
        <Router>
            <div>
                <ul className={Style.nav}>
                    <li>
                        <Link  to="/">首页</Link>
                    </li>
                    <li>
                        <Link  to="/page1">行业</Link>
                    </li>
                    <li>
                        <Link  to="/page2">资源</Link>
                    </li>
                    <li>
                        <Link  to="/page3">分享</Link>
                    </li>
                </ul>
                <Banner/>
                <Switch>
                    {
                        renderRoutes(routes)
                    }
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}
export default BasrowRouter;