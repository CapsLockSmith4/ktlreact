import React from 'react'
import { Link} from 'react-router-dom'

const Display = ({lang}) => {

    return (
        (!lang) ?(
        <div className='grid'>
            <Link className='btn btn-light' to='/ManageCD'>MANAGING CREDIT & DEBT</Link>
            <Link className='btn btn-light' to='/Driving'>DRIVING IN NSW</Link>
            <Link className='btn btn-light' to='/Working'>WORKING IN NSW</Link>
            <Link className='btn btn-light' to='/Moving'>MOVING TO NSW</Link>
            <Link className='btn btn-light' to='/Police'>POLICE POWERS & FINES IN NSW</Link>
            <Link className='btn btn-light' to='/Tenancy'>TENANCY IN NSW</Link>
            <Link className='btn btn-light' to='/Loans'>PAYDAY LOANS</Link>
            <Link className='btn btn-light' to='/CreditTenancy'>CREDIT AND TENANCY RECORDS</Link>
            <Link className='btn btn-light' to='/Budget'>BUDGETING</Link>
            <Link className='btn btn-light' to='/Scams'>FINANCIAL SCAMS</Link>
            <Link className='btn btn-light' to='/Bankruptcy'>BANKRUPTCY</Link>
            <Link className='btn btn-light' to='/Guaranteeing'>GUARANTEEING LOANS</Link>
            <Link className='btn btn-light' to='/Domestic'>DOMESTIC VIOLENCE</Link>
            <Link className='btn btn-light' to='/Future'>FUTURE PLANNING</Link>
        </div>
        ) : (
        <div className='grid'>
            <Link className='btn btn-light' to='/ManageCD'>信用和债务管理</Link>
            <Link className='btn btn-light' to='/Driving'>在新南威尔士州开车</Link>
            <Link className='btn btn-light' to='/Working'>在新南威尔士州工作</Link>
            <Link className='btn btn-light' to='/Moving'>抵达新南威尔士州</Link>
            <Link className='btn btn-light' to='/Police'>新南威尔士州警察的权力和罚款</Link>
            <Link className='btn btn-light' to='/Tenancy'>新南威尔士州租赁</Link>
            <Link className='btn btn-light' to='/Loans'>发薪日贷款</Link>
            <Link className='btn btn-light' to='/CreditTenancy'>信用和租赁记录</Link>
            <Link className='btn btn-light' to='/Budget'>编制预算</Link>
            <Link className='btn btn-light' to='/Scams'>金融诈骗</Link>
            <Link className='btn btn-light' to='/Bankruptcy'>破产</Link>
            <Link className='btn btn-light' to='/Guaranteeing'>担保贷款</Link>
            <Link className='btn btn-light' to='/Domestic'>DOMESTIC VIOLENCE</Link>
            <Link className='btn btn-light' to='/Future'>FUTURE PLANNING</Link>
        </div>));
}

export default Display
