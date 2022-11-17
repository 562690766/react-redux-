import React from "react";
import Img1 from '@/img/timg.jpg'
import Style from '@/css/style'
const Banner =()=>{
    return (
        <div>
            <img src={Img1} className={Style.banner}/>
        </div>
    )
}
export default Banner;