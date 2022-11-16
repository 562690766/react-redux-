import React from 'react'
import Style from '@/css/style1'
import MyTest from '@/component/MyTest'
const Course=(props)=>{
    console.log("myrest props:",props);
    let {location,history,match}=props;
    return (
        <div className={Style.container}>
            <h2>Course组件</h2>
            <MyTest
            /* location={location}
            history={history}
            match={match} */
            {...props}
            />
        </div>
    )
}
export default Course;