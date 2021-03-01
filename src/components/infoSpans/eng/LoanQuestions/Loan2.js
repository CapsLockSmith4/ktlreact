import React from 'react'
import lawIcon from '../../../images/law.png'
import '../../../../styles.css'

const Loan2 = ({lang}) => {
    return (
		(!lang) ? (
        <div>
	        <div id="answer2" class="answer answer2">
		        <p class="title">
			    <span class="fa-gavel-icon answer-icon">
				    <img src={lawIcon} alt="law symbol" class="image" />
			    </span>Types of Debt
		    </p>
        <br />
			<p class="subtitle">Credit Card Debt</p>
			<p class="content">A credit card allows you to purchase things now and pay for them at a later time. It is important to avoid credit card debt as you are charged interest on your purchases. It is very easy to overspend or exceed the limit on your credit card if you don’t keep a careful track of your expenses. You should aim to at least make the minimum repayment on any or all credit cards you have each month. If you cannot make the minimum repayment you should pay off whatever you can and then speak with your credit card provider about any possible repayment arrangements. The Financial Rights Legal Centre provides the following factsheet relating to <a href="http://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Drowning-Credit-Cards1.pdf">credit card debt.</a></p>

			<p class="subtitle">Phone Debt</p>
			<p class="content">If you do not have a stable job, have little to no income or you have significant debt, it is not advisable to enter into a phone plan contract. Pre-paid mobile phones are available where you pre-pay a certain amount of 'credit' for your phone without having a contract. If you are struggling to pay your phone debt consult the Financial Rights Legal Centre factsheet on <a class="ng-scope" href="http://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Cant-Pay-Phone.pdf">phone debt</a></p>
			<p class="content">or visit the <a href="https://www.tio.com.au/">Telecommunications Industry Ombudsman</a></p>
			<p class="subtitle">Utility Debt – Electricity, Gas &amp; Water Bills</p>
			<p class="content">If you find yourself in debt to a utility company you should contact the company and try to negotiate a repayment arrangement. Also inform the company that you are suffering financial hardship and ask that they don’t disconnect your services. For more information see the Financial Rights Legal Centre factsheet on <a class="ng-scope" href="http://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Cant-Pay-Electricity1.pdf">electricity debt</a></p>
	</div>
</div>
    ): (
		<div class="row">
    <div id="answer" class="answer answer2">
        <p class="title">
            <span class="fa-gavel-icon answer-icon">
                <img src={lawIcon} class="image"/>
            </span>
            债务的类型 - 我能进入什么债务?
        </p>
        <br />

		<p class="content"> 信用卡可以让你先购买东西, 并在之后付款, 重要的是要避免信用卡债务, 因为你会被收取利息当你购买. 如果你没有小心跟踪你的费用, 是很容易超支或超过你的信用卡限额, 在任意一张或全部信用卡, 你至少应该在每月支付最低还款额. 如果你不能偿还最低还款额, 你应该尽可能还清债务, 然后与你的信用卡提供商协商任何可能的还款安排.《金融权利法律中心》提供以下资料有关于<a href='http://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Drowning-Credit-Cards1.pdf' >信用卡债务</a>情况说明.</p>
		<p class="content">如果你没有固定的工作, 没有收入或你有显着的债务, 签订电话计划合同是不可取的. 但预付费的手机对你而言是可行的, 因为你不需要签合同只需要预先支付一定的钱到你的电话中. 如果你正在努力支付手机债务, 你可以咨询《金融权利法律中心》目录中的<a href='http://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Cant-Pay-Phone.pdf' >手机债务</a>或访问《<a href='https://www.tio.com.au/' >电信业申诉专员</a>》.</p>

		<p class="content">
		如果你发现自己在一家公用事业公司欠费, 你应该联系公司并协商还款. 你需要通知公司, 要求他们不要断开水, 电, 汽服务当你处于财政困难. 更多信息请参见《金融权利法律中心》目录中的<a href='http://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Cant-Pay-Electricity1.pdf' >电力债务</a>.
		</p>
    </div>
</div>
	)
	
	)
}

export default Loan2
