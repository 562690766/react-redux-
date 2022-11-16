import React from 'react'
import Style from '@/css/style1'
const Books=(props)=>{
    console.log("books props:",props)
    let {location}=props;
    let url=new URLSearchParams(location.search);
    console.log("url:",url);
    let title=url.get("title");
    let content=url.get("content");
   
    return (
        <div className={Style.container}>
            <h2>Books组件</h2>
            <p>title:{title}</p>
            <p>content:{content}</p>
        </div>
    )
}
export default Books;