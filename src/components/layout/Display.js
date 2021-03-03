import React from 'react'
import { Link} from 'react-router-dom'

const Display = ({lang}) => {

    return (
        (!lang) ?(
        <div className='grid'>
            <Link className='btnBig ' to='/ManageCD'>MANAGING CREDIT & DEBT</Link>
            <Link className='btnBig ' to='/Driving'>DRIVING IN NSW</Link>
            <Link className='btnBig ' to='/Working'>WORKING IN NSW</Link>
            <Link className='btnBig ' to='/Moving'>MOVING TO NSW</Link>
            <Link className='btnBig ' to='/Police'>POLICE POWERS & FINES IN NSW</Link>
            <Link className='btnBig ' to='/Tenancy'>TENANCY IN NSW</Link>
            <Link className='btnBig ' to='/Loans'>PAYDAY LOANS</Link>
            <Link className='btnBig ' to='/CreditTenancy'>CREDIT AND TENANCY RECORDS</Link>
            <Link className='btnBig ' to='/Budget'>BUDGETING</Link>
            <Link className='btnBig ' to='/Scams'>FINANCIAL SCAMS</Link>
            <Link className='btnBig ' to='/Bankruptcy'>BANKRUPTCY</Link>
            <Link className='btnBig ' to='/Guaranteeing'>GUARANTEEING LOANS</Link>
            <Link className='btnBig ' to='/Domestic'>DOMESTIC VIOLENCE</Link>
            <Link className='btnBig ' to='/Future'>FUTURE PLANNING</Link>
        </div>
        ) : (
        <div className='grid'>
            <Link className='btnBig ' to='/ManageCD'>信用和债务管理</Link>
            <Link className='btnBig ' to='/Driving'>在新南威尔士州开车</Link>
            <Link className='btnBig ' to='/Working'>在新南威尔士州工作</Link>
            <Link className='btnBig ' to='/Moving'>抵达新南威尔士州</Link>
            <Link className='btnBig ' to='/Police'>新南威尔士州警察的权力和罚款</Link>
            <Link className='btnBig ' to='/Tenancy'>新南威尔士州租赁</Link>
            <Link className='btnBig ' to='/Loans'>发薪日贷款</Link>
            <Link className='btnBig ' to='/CreditTenancy'>信用和租赁记录</Link>
            <Link className='btnBig ' to='/Budget'>编制预算</Link>
            <Link className='btnBig ' to='/Scams'>金融诈骗</Link>
            <Link className='btnBig ' to='/Bankruptcy'>破产</Link>
            <Link className='btnBig ' to='/Guaranteeing'>担保贷款</Link>
            <Link className='btnBig ' to='/Domestic'>DOMESTIC VIOLENCE</Link>
            <Link className='btnBig ' to='/Future'>FUTURE PLANNING</Link>
        </div>));
}

export default Display
