import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Police4 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Victims of Crime - what can I do?
        </p>
        <br />

        <p class="content">If you have been the victim of a crime there are a number of government departments that can provide access to counselling, financial assistance, information on your rights and legal advice. The following information has been reproduced from the <a href="https://www.victimsservices.justice.nsw.gov.au/Pages/vss/vs_victims/VS_victims.aspx">Victims of Crime</a> section of the Family and Community Services website:</p>


        <ul class='content-list'>
            <li><span>TO REPORT EMERGENCIES CALL TRIPLE ZERO (000)</span></li>


            <li><span>If you are a victim of a crime that is not life threatening or not a critical emergency, you should contact the Police Assistance Line on 131 444.</span></li>


            <li><span>For confidential support, referral and information, call the Victims Access Line on 1800 633 063.</span></li>


            <li><span>For confidential enquiries by Aboriginal and Torres Strait Islander people who are victims of crime, call the Aboriginal Contact Line on 1800 019 123.</span></li>


            <li><span>For help with legal problems, contact the LawAccess NSW free legal helpline on 1300 888 529.</span></li>
        </ul>
        <p class="content"></p>

        <p class="content">The University of Newcastle also provides emergency and support services:</p>


        <ul class='content-list'>
            <li><span>University of Newcastle Security: 0249 215 888</span></li>


            <li><span>University Shuttle Bus: 0407 951 470</span></li>


            <li><span>University of Newcastle Legal Centre: 0249 218 666</span></li>
        </ul>

    </div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            受害者 - 我能做什么?
        </p>
        <br />

        <p class="content">
            如果你已经是犯罪的受害者. 有多个政府部门为你提供咨询, 包括财务援助、知情权和法律咨询. 下列<a href='https://www.victimsservices.justice.nsw.gov.au/Pages/vss/vs_victims/VS_victims.aspx'>犯罪的受害</a>者信息转载于家庭和社区服务网站: <ul class='content-list'><li>报告突发事件请打000.</li><li>如果你是一个犯罪的受害者, 还未有生命的威胁或还未陷入紧急情况, 你应该联系警方协助电话: 131 444.</li><li>对于保密的支持, 转介和信息, 呼叫受害者访问电话 1800 633 063.</li><li>对于犯罪的受害者是土著和托雷斯海峡岛民, 保密咨询电话 1800 019 123.</li><li>对于法律问题的帮助, 联系 LawAccess 新南威尔士州免费法律服务 热线: 1300 888 529. </li></ul>
        </p>

        <p class="content">
            纽卡素大学还提供紧急和支持服务: <ul class='content-list'><li>纽卡斯尔大学安全机构: 0249 215 888</li><li>大学班车: 0407 951 470</li><li>纽卡斯尔大学法律中心: 0249 218 666</li></ul>
        </p>
    </div>
	)
	
	)
}

export default Police4