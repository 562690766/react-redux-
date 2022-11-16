import React from 'react'
import Style from '@/css/style1'
import {Redirect} from 'react-router-dom'
const Travle=(props)=>{
    console.log("props.match:",props.match);
    let {params}=props.match;
    return (
        <div className={Style.container}>
            <h2>Travle组件</h2>
            {/* <P>{params.user}</P> */}
            {
                params.user==="tom"?<Redirect to="/" />:
                <div>
                    高薪就业!
                </div>
            }
        </div>
    )
}
export default Travle;
