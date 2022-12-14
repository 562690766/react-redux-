import React from 'react'
import Style from '@/css/style'
const Page1=()=>{
    return (
        <div className={Style.content}>
            <h2>Page1组件</h2>
            <h3>行业资讯:</h3>
            <p>
            国内某知名招聘网站发布的一份报告中显示，web前端开发工程师已成为中国互联网行业中最紧俏的职位。根据此次报告，今年三季度，互联网在上海全行业中成为人才需求最为紧迫的行业;而在当地互联网各种紧缺职位中，各类研发技术类岗位稳居前列。 据悉，目前web前端工程师的年薪待遇平均在10万以上，高级HTML前端工程师年薪达30—50万，很多企业对于与web前端相关的技术职位更是求贤若渴。 以目前的互联网企业为例，他们都十分注重前端的设计。因为，只有先做好前端技术、做好客户体验一切才有可能。用户体验做好，才有人访问，访问的人多了，才会优化后端，才做客户分析，公司上市了，才从大量数据做数据分析，获得更有价值的数据信息。所以，一些互联网创业公司也是如此，在获得第一轮融资后第一件事就是不计成本地招Web前端开发人员，就是要先把前端的做起来，客户体验先做起来，这就是为什么前端很火，前端工程师工资很高的原因。 不得不说，web前端开发工程师的“黄金时代”正在走来。
            </p>
        </div>
    )
}
export default Page1;