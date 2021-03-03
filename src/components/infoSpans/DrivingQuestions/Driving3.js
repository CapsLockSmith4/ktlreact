import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Driving3 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Insurance - do I need to insure my vehicle?
        </p>
        <br />

        <p class="content">There are three different types of car insurance available in NSW: Compulsory Third Party (CTP) Insurance, Comprehensive Car Insurance and Third Party Property Damage Car Insurance.</p>

        <p class="content"><a href="http://www.rms.nsw.gov.au/roads/registration/renew/ctp.html">CTP Insurance</a> is compulsory for all owners of motor vehicles being driven in NSW. CTP provides cover for death and personal injury caused to others when either you, or anyone driving your vehicle, has caused an accident. You must have CTP Insurance in order to register your vehicle with the RMS.</p>

        <p class="content">Comprehensive Car Insurance covers damage to your own car and to other vehicles and property. Third Party Property Damage Car Insurance covers damage you cause to someone else’s car or property but not to your own vehicle.</p>

        <p class="content">You should have property damage insurance for your car or motorcycle in case you are ever involved in an accident. Insurance is important as it can help you repair your car if someone else hits it or can help you if you ever cause an accident. If there is a dispute regarding who is at fault in an accident, insurance protects you from legal trouble and costs in trying to determine who is at fault. Please note you must pay your insurance on or by the due date as stipulated by your insurance provider.</p>
    </div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} className="image"/>
                </span>
            保险 - 我需要给我的车投保吗?
        </p>
        <br />

        <p class="content">
            在新南威尔士州游三个不同的类型的汽车保险: 第三方强险 (CTP), 汽车全险和 第三方财产责任险.
        </p>

        <p class="content">
            所有机动车所有人都必须强制购买<a href='http://www.rms.nsw.gov.au/roads/registration/renew/ctp.html'>第三方强险</a> (CTP)以合法在新南威尔士州驾驶. CTP 对您或是其他任何人驾驶您的车辆发生事故, 造成其他人死亡或伤害的情况提供赔付. 您必须持有 CTP 保险才能获得道路和海事服务登记您的车辆 的资格.
        </p>

        <p class="content">
            全险提供了对您车辆或者其他车辆财产损毁的理赔责任. 第三方财产险则囊括了您造成的他人车辆或财产损失的理赔责任, 但这并不包括您自己的车辆.
        </p>

        <p class="content">
            您最好为您的车辆或摩托车购买第三方财产责任险, 因为你不知道什么时候会被卷入事故当中. 保险是很重要的, 因为它可以帮助您在被撞或者市您造成事故时修理您的车辆. 如果在事故中对责任认定有分歧, 保险可以保护你免于法律上的麻烦和成本. 请注意, 你必须在您的保险公司规定的到期日之前或到期之时支付你的保险金.
        </p>
    </div>
	)
	
	)
}

export default Driving3
