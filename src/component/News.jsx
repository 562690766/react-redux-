import React from 'react'
import Style from '@/css/style1'
const News=(props)=>{
    return (
        <div className={Style.container}>
            <h2>News组件</h2>
            <p>美食</p>
            <button onClick={()=>{
                props.history.push("/course")
            }}>
                跳转到course页面
            </button>
        </div>
    )
}
export default News;