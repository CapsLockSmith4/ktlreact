import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Working1 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Finishing Work - what should I do if I want to resign from work or finish my job?
	</p>
    <br />

	<p class="content">If you wish to leave your job you should tell your employer in advance, either verbally or in writing. If you do not give your employer sufficient notice they have the right to withhold some of your pay to cover the notice period. Your award, employment contract, enterprise agreement or other registered agreement will usually set out how much notice you are required to give when you resign, and whether or not your employer can withhold money. Make sure you check your award, employment contract or enterprise agreement as this will usually specify the <a  href="http://www.fairwork.gov.au/ending-employment/notice-and-final-pay">amount of notice</a> that must be given. Notice periods usually do not apply to casual employees but again check your award or employment contract for these details.</p>
</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            終止僱用關係 - 我该做什么如果我想结束工作?
        </p>
        <br />

        <p class="content">
            如果你希望离职,你应当通过写信或者提前通知雇主. 如果你没提前通知雇主, 他们有权利保留一些你的工资以支付通知期限所产生的费用. 你的裁定協議,劳动合同,企业协议或其他注册协议通常列举出当你辞职时,你需要给雇主的通知期限,以及是否你的雇主可以保留你的工资. 你应该确保检查你的裁定協議,劳动合同,企业协议或其他注册协议,因为通常上面详细列举了你需给予雇主的<a  href='http://www.fairwork.gov.au/ending-employment/notice-and-final-pay'>通知时限</a>. 通知期通常不适用于临时就业人员,但你可以再次检查您的就业裁定協議或雇佣合同中查询这些细节.
        </p>
    </div>
	)
	
	)
}

export default Working1