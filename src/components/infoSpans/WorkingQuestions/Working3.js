import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Working3 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Employment Conditions - what am I entitled to?
	</p>
    <br />


	<p class='subtitle'>Pay</p>


	<p class="content">Fair Work is responsible for setting the <a  href="http://www.fairwork.gov.au/pay/minimum-wages">minimum rates of pay</a> for employees in Australia. The <a class="ng-scope" href="http://www.fairwork.gov.au/awards-and-agreements">minimum wage and conditions</a> are often set out in your employment contract, applicable <a class="ng-scope" href="http://www.fairwork.gov.au/awards-and-agreements/awards">award</a> or particular agreement. A full <a class="ng-scope" href="http://www.fairwork.gov.au/awards-and-agreements/awards/list-of-awards">list of awards</a> is provided on the Fair Work website. Enterprise agreements are made between an employer and employee and apply to specific businesses.</p>


	<p class="content">You should be <a  href="http://www.fairwork.gov.au/pay">paid</a> for all hours that you work including trial shifts, training, meetings and opening and closing the business. You should receive a pay slip from your employer and always check the slip to ensure you are being paid correctly. “Cash in hand” employment is against the law which is why it is important to make sure you receive a pay slip from your employer. In general, you are entitled to have a 30 minute unpaid break if you work for more than 5 hours. The length of any <a class="ng-scope" href="http://www.fairwork.gov.au/employee-entitlements/hours-of-work-breaks-and-rosters/breaks">breaks</a> you are permitted to take will be listed in your employment contract, award or enterprise agreement.</p>


	<p class="content">Your award, enterprise agreement or other registered agreement could stipulate that you will receive extra pay in the form of <a class="ng-scope" href="http://www.fairwork.gov.au/pay/penalty-rates-and-allowances">penalty rates</a> (i.e. time and a half or double time payments for the hours worked). Make sure you are aware of whether you should be earning penalty rates for working on a public holiday, weekend and/or nights. You may have the right to say no to working on a public holiday if you have reasonable grounds. Things that can be taken into account include personal circumstances, the needs of the workplace, the category of employee you are, the type of work you do, how much notice the employer gives you or how much notice the employee gives that they are able or not able to work.</p>


	<p class="subtitle">Leave</p>


	<p class="content">You may need to take time off work for many reasons such as sickness, holidays or caring for a close family member. All employees, other than casuals, are entitled to annual leave. Full-time and part-time employees receive four weeks of annual leave per year based on how many hours they work per week. For example, if you work 20 hours per week you are entitled to 80 hours of annual leave, which is the equivalent of four weeks work. For <a  href="http://www.fairwork.gov.au/leave">information relating to leave</a>, visit the Fair Work Ombudsman website.</p>
</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            就业权利 - 我有什么基本权利和义务?
        </p>
        <br />

        <p class="content">
            公平工作委员会负责制定澳大利亚员工的<a  href='http://www.fairwork.gov.au/pay/minimum-wages'>最低工资标准</a>. <a  href='http://www.fairwork.gov.au/awards-and-agreements'>最低工资和工作条件</a>通常在劳动合同中设定, 并适用与根据<a  href='http://www.fairwork.gov.au/awards-and-agreements/awards'>裁定的协议</a>或特殊协议书. 公平工作委员会网站上提供了完整的<a  href='http://www.fairwork.gov.au/awards-and-agreements/awards/list-of-awards'>裁定协议列表</a>. 企业协议书是由雇主和雇员制定的, 并适用于一些特殊企业.
        </p>

        <p class="content">
            你的雇主应该为你所有的工作时间<a  href='http://www.fairwork.gov.au/pay'>付费</a>, 包括试验、 培训、 会议和开业和闭幕业务. 你应该从雇主那里收到你的工资单并且要仔细检查工资单以确保你收到正确的工资. 现金支付型雇佣是非法的, 这也是为什么确认从你雇主那里收到工资单的重要性. 一般情况下, 如果你工作时长超过 5 小时, 你就有权有一个 30 分钟的无薪休息. 就业合同或在企业协议书中将会列出你所被允许的<a  href='http://www.fairwork.gov.au/employee-entitlements/hours-of-work-breaks-and-rosters/breaks'>休息</a>时长.
        </p>

        <p class="content">
            你的就业协议书或其他注册协议书规定: 你会收到额外的<a  href='http://www.fairwork.gov.au/pay/penalty-rates-and-allowances'>加班工資</a>, 例如一个半工资或两倍工资. 确保你知道如果你应该被更多工资利率在公共假日、 周末和/或晚上工作. 如果你有合理的理由, 你可以有权拒绝在公共假日工作的权利. 可以考虑的事情包括个人情况, 工作场所的需求, 你的员工的类别, 你所做的工作类型, 雇主给你多长时间知道你什么时候工作还是不用去工作.
        </p>

        <p class="content">
            你可能需要休假因为许多原因, 如疾病, 假期或照顾一个亲密的家庭成员. 所有的员工, 除了临时就业, 都享受年休假. 全职和非全职员工每年有四周帶薪假期据他们每周工作多少小时. 例如, 如果你每周工作 20 小时, 你有权获得 80 小时的年休假, 这相当于四周的工作. <a  href='http://www.fairwork.gov.au/leave'>有关离开的信息</a>, 访问公平工作申诉专员网站.
        </p>
    </div>
	)
	
	)
}

export default Working3