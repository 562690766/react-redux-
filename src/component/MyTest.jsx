import React from 'react'
import Style from '@/css/style1'
import { withRouter } from 'react-router-dom';
const MyTest=(props)=>{
    console.log("myrest props:",props);
    return (
        <div className={Style.container}>
            <h2>MyTest组件</h2>
            <button onClick={()=>{
                props.history.push("/books");
            }}>
                跳转到books
            </button>
        </div>
    )
}
export default withRouter(MyTest);