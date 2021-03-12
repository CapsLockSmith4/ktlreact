import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Tenancy2 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Renting
		</p>
        <br />

		<p class='content'>The University has a web page relating to <a href="http://www.newcastle.edu.au/current-students/campus-environment/campus-life/accommodation">accommodation</a>, both on and off campus. There are several other real estate websites where you can look for places to rent.</p>
		<p class='subtitle'>What is a residential tenancy agreement (RTA)?</p>
		<p class='content'>A <a href="http://www.tenants.org.au/factsheet-02-starting-a-tenancy">residential tenancy agreement (RTA)</a> is a legal contract between you (the tenant) and the landlord or home owner. It is sometimes referred to as a lease. It outlines your rights and responsibilities and also states what the landlord is required to do for you. It is vital that you obtain a written tenancy agreement from the landlord for your reference.</p>
		<p class='content'>
			A residential tenancy agreement can be periodic or fixed term. If your agreement is periodic this means it doesn't continue for a fixed period of time, whereas a fixed term agreement stipulates the length of the agreement (e.g. 6 or 12 months). If it is a fixed term you are required to rent the premises for this period. If you wish to leave earlier you should seek legal advice.
		</p><p class='content'>
			If you have previously rented a property it may be useful to provide to the landlord or agent:

			<ul class='content-list'>
				<li><span>Your current or previous residential tenancy agreement, if you have one</span></li>


				<li><span>A list of past addresses where you have rented</span></li>


				<li><span>Reference letters from your previous landlords, if you have them</span></li>
			</ul>
		</p><p class='content'>
			If you are employed at the time you sign the residential tenancy agreement the landlord may request you show the following documents:

			<ul class='content-list'>
				<li><span>Proof of employment</span></li>


				<li><span>Most recent tax return</span></li>
			</ul>
		</p><p class='subtitle'>What is a Bond?</p><p class='content'>
			A bond is a payment that most landlords or agents request at the start of the residential tenancy agreement. It should only be paid at or after signing this agreement and they cannot ask you to pay it before this time. In the event you fail to comply with the agreement an amount of money can be deducted from the bond to pay for any loss or damage to the property. The bond usually cannot be for an amount that is more than 4 weeks rent. The landlord can only ask for one bond per tenancy agreement.
		</p>
		<p class='content'>If the landlord agrees you can pay your bond over several payments rather than a lump sum. Following payment the landlord must give you a receipt for all payments you make towards the bond and a Bond Lodgement Form which must be signed by both yourself and the landlord. The landlord is responsible for depositing the bond with New South Wales Fair Trading <a target="_blank" rel="noopener" href="https://www.service.nsw.gov.au/nswgovdirectory/rental-bonds">Rental Bond Board</a>, and you should receive a notice from the Board when the bond has been deposited. At the end of the tenancy you should fill in a ‘Claim for Refund of Bond Money’ with New South Wales Fair Trading. For more information see the <a target="_blank" rel="noopener" href="http://www.tenants.org.au/factsheet-03-bond">bond fact sheet</a> prepared by Tenants NSW</p>
	</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            租用
        </p>
        <br />

        <p class="content">
            这所大学有一个关于校内和校外<a href='http://www.newcastle.edu.au/current-students/campus-environment/campus-life/accommodation'>住宿</a>的网站. 你可以在其他房产网站上找到地方租赁.
        </p>

        <p class="content">
            <a  href='http://www.tenants.org.au/factsheet-02-starting-a-tenancy'>住宅租赁协议(RTA)</a>是你 (租客) 与房东或者房主的合法契约. 它有时被称为一个租赁. 它概述了你的权利和责任责任并规定房东需要为你做什么. 重要的是, 你从房东处得到了书面协议供你参考.
        </p>

        <p class="content">
            住宅租赁协议可以是周期性的或固定的期限. 如果你的住宅租赁协议是周期性的, 这意味着它不会继续一段固定的时间, 而固定期限的协议规定了协议的时间长度 (例如: 6 个月或 12 个月). 如果是一个固定的期限, 你需要在这个时期租赁此房屋.
        </p>

        <p class="content">
            你需要寻求法律咨询如果你想提前离开. 对房东或中介来说是有帮助的当你以前租过房子: <ul class='content-list'><li>如果你有一个当前或以前的住宅租赁协议,</li><li>你之前租赁房产的住址</li><li>如果你有你以前的房东的参考信, </li></ul>
        </p>

        <p class="content">
            如果你签署住宅租赁协议的时候, 房东可能会要求你呈现以下文件: <ul class='content-list'><li>就业证明</li><li>最近的纳税申报单子</li></ul>
        </p>

        <p class="content">
            大多数房东或中介要求你用押金支付方式当你在刚开始签署住宅租赁协议时候. 它应该只在签署本协议或签署后支付他们时候支付, 而房东和中介不能要求你在签署时间之前支付. 如果在某些情况下你没有遵守租赁协议, 某些金额会从押金中扣除, 以支付你造成的任何损失或损坏的财产. 押金数额通常是不能超过 4 周租金的金额. 房东只能要求每一位租客签署一个押金协议.
        </p>

        <p class="content">
            如果房东同意你可以几次支付你的押金而不是一个一次性付款, 那么房东必须给你一个收据当你缴清所有押金和住宿押金申请表, 并且表格必须由你和房东签约. 房东负责存放押金到新南威尔士州公平<a href='https://www.service.nsw.gov.au/nswgovdirectory/rental-bonds'>贸易租赁押金委员会</a>, 你应该收到委员会的通知当你的押金被存放之中. 在租约结束时, 你应该填写一个"要 求退还押金" 在新南威尔士州公平贸易委员会. 更多信息见《新南威尔士州<a href='http://www.tenants.org.au/factsheet-03-bond'>租赁押金情况说明书</a>》.
        </p>
    </div>
	)
	
	)
}

export default Tenancy2