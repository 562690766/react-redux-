import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Redirect,withRouter} from 'react-router-dom'


//公共路由组件--不需要权限就可以访问
const Public=()=><h3>Public</h3>;
//受保护的路由组件--需要登录验证后才能访问，否则重定向到登录组件
const Protected=()=><h3>Protected</h3>;

//登录验证组件
class Login extends Component {
    constructor(){
        super();
        this.state={
            redirectToReferrer:false
        }
        this.login=this.login.bind(this);
    }
    login(){
        FakeAuth.authenticate(()=>{
            this.setState({
                redirectToReferrer:true
            })
        })
    }
    render() {
        let {redirectToReferrer}=this.state;
        let {from} = this.props.location.state || {from :{pathname:"/"}}
        if(redirectToReferrer===true){
            return (
                <Redirect to={from} />
            )
        }
        return (
            <div>
                <div>You must login in to view the page {from.pathname}</div>
                <button onClick={this.login}>login in<tton>
            </div>
        )
    }
}
//模拟异步验证过程对象
const FakeAuth={
    isAuthenticated:false,//验证是否通过，通过true/未通过false
    authenticate(cb){//模拟异步进行验证的方法
        this.isAuthenticated=true;//调用这个方法，验证通过true
        setTimeout(cb,100);//伪造异步
    },
    signout(cb){//模拟注销方法
        this.isAuthenticated=false;
        setTimeout(cb,100)
    }
}
//提示登录或注销的组件
const AuthButton = withRouter(({history})=>(
    FakeAuth.isAuthenticated
        ?<p>
            Welcom!  <button
            onClick={() => {
                FakeAuth.signout(() => history.push("/"));

            }}
        >
            Sign out
        <tton>
        </p>
        :<p>You are not logged in.</p>
))
//根路由组件--存放路由表的组件
const BaseRoutes=()=>{
    return (
        <Router>
            <div>
                <AuthButton/>
                <ul>
                    <li><Link to="/public">Public Page</Link><>
                    <li><Link to="/protected">Protected Page</Link><>
                </ul>
                <Route path="/public" component={Public}></Route>
                <Route path="/login" component={Login}></Route>
                <PrivateRoute path="/protected" componet={Protected}></PrivateRoute>
            </div>
        </Router>
    )
}
//路由守卫---私有路由
const PrivateRoute=({componet:Component,...rest})=>(
    <Route {...rest}
           render={(props)=>(
               FakeAuth.isAuthenticated===true
                   ?<Component {...props} />
                   :<Redirect to={
                       {
                           pathname:"/login",
                           state:{from:props.location}
                       }
                   } />
           ) }></Route>

)
export default BaseRoutes; 