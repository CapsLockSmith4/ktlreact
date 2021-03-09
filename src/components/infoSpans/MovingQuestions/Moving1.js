import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Moving1 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Visas - how do I check my visa status and conditions?
		</p>
        <br />


		<p class="content">If you haven’t yet applied for your visa, there are several <a  href="http://www.border.gov.au/Trav/Stud">student visa options</a> available.</p>


		<p class="content">If you want to check the status or conditions of your visa, you can use the <a  href="http://www.immi.gov.au/Services/Pages/vevo/vevo-overview.aspx">Visa Entitlement Verification Online</a> (VEVO) service. This is a free online service where you are able to check your visa status and entitlements at any time. VEVO will show the following details for current visas:</p>


		<ul class='content-list'>
			<li><span>visa class and subclass</span></li>


			<li><span>visa description (student, temporary or permanent)</span></li>


			<li><span>visa holder role type (primary or secondary applicant)</span></li>


			<li><span>visa status</span></li>


			<li><span>visa grant and expiry date</span></li>


			<li><span>visa grant number</span></li>


			<li><span>the date you must enter Australia by for your visa to remain valid</span></li>


			<li><span>entries allowed</span></li>


			<li><span>period of stay</span></li>


			<li><span>current location (in or outside Australia)</span></li>


			<li><span>all conditions applicable to your visa in plain English</span></li>
		</ul>
		
	</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            签证 - 如何检查签证状况和条款?
        </p>
        <br />

        <p class="content">
            如果你还没有申请签证, 以下有几个<a  href='http://www.border.gov.au/Trav/Stud'>学生签证选项</a>你可以选用.
        </p>

        <p class="content">
            如果想检查你的签证状态和条款, 可以使用<a  href='http://www.immi.gov.au/Services/Pages/vevo/vevo-overview.aspx'>签证在线验证服务</a> (VEVO) 系统. 这是一个免费的网上服务系统, 可以在任何时间查询你的签证状态和条款. 签证在线验证服务系统将呈现你现有签证的详细信息: 
            <ul class='content-list'>
                <li>签证等级和类别</li>
                <li>签证描述 (学生签证, 临时签证或永久签证)</li>
                <li>签证持有者角色类型 (主申请者或副申请者)</li><li>签证状态</li>
                <li>签证签发日和到期日</li><li>签证号</li><li>规定入境澳大利亚日期 允许入境次数</li>
                <li>逗留期</li><li>当前位置 (在澳大利亚境内或境外)</li>
                <li>适用你签证的条款</li>
            </ul>
        </p>
    </div>
	)
	
	)
}

export default Moving1