import React from 'react'
import Style from '@/css/style1'
const Travle=(props)=>{
    console.log("props.match:",props.match);
    let {title,content}=props.match.params;
    return (
        <div className={Style.container}>
            <h2>Travle组件</h2>
            <p>title:{title}</p>
            <p>content:{content}</p>
        </div>
    )
}
export default Travle;