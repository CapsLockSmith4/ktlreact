import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Tenancy3 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Tenant's Obligations
                </p>
        <br />

		<p class='subtitle'>Rent</p>
		<p class='content'>
			You must pay your rent in advance. If you fail to pay rent by the agreed due date you are considered to be in arrears which constitutes a breach of the residential tenancy agreement. However, you do not have to pay more than 2 weeks in advance. If you are in arrears, try to catch up on your rent payments immediately or contact the landlord to come to a payment agreement.
		</p>
		<p class='content'>
			The landlord cannot immediately evict you if their only reason for termination of the rental agreement is that you are in arrears. However, they can issue you with a ‘Non-Payment Termination Notice’ if your rent has remained unpaid for at least 14 days. A legal process must then be followed before eviction can occur. For more information see the <a href="http://www.tenants.org.au/factsheet-05-rent-arrears">rent fact sheet</a> prepared by Tenants NSW.
		</p>


		<p class='subtitle'>Condition Report</p>
		<p class='content'>
			When you move into the property a condition report must be completed by both you and the landlord. This report basically outlines the state of the premises, including whether anything in or on the property is damaged or in poor condition. It is strongly advisable to take photos of the property to attach to the report, particularly if there is pre-existing damage. You should keep a copy of the report for your records.
		</p>
		<p class='content'>
			If the landlord has not provided you with a condition report you should make your own detailed notes regarding the state of the property. You should take photos of everything to properly show the state of the property and highlight any pre-existing damage. Once finished, sign and date this report and also have it signed by an independent witness. Also note in your report if the landlord has agreed to take care of repairs, cleaning or other work around the property.
		</p>
		<p class='content'>The condition report is vital as it can help you <a  href="http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners/Renting_a_home/Ending_a_tenancy/Getting_your_bond_back.page">get your bond back</a> if the landlord tries to withhold it. The landlord may claim they need to keep your bond in order to pay for any damage you have caused. The condition report provides valuable evidence of pre-existing damage for which you cannot be held responsible. The landlord can only hold you responsible for "negligent, irresponsible or intentional actions that cause damage to the premises". They cannot hold you legally responsible for fair wear and tear to the premises which is the deterioration that occurs over time with the use of the premises. This deterioration may be caused by "exposure, time or just by ordinary use." For more information see the <a href="http://www.tenants.org.au/factsheet-02-starting-a-tenancy">tenancy fact sheet</a> prepared by Tenants NSW.</p>
		<p class='subtitle'>Utilities</p>
		<p class='content'>
			The standard residential tenancy agreement provides that the tenant pays for electricity and gas where the property is separately metered from other premises. The landlord is usually responsible for the installation of the initial connection to an electricity, water and gas service.
		</p>
		<p class='content'>
			Water bills are paid differently depending on whether the premises are separately metered and are water efficient. If you are required to pay for water usage the landlord must bill you correctly and give you a copy of the bill. For more information see the <a href="http://www.tenants.org.au/factsheet-23-utilities">utilities fact sheet</a> prepared by Tenants NSW. For assistance please contact the <a href="http://www.tenants.org.au/index.php?option=com_tnswsearch&amp;search=2300,NEWCASTLE">Hunter Tenants Advice and Advocacy Service</a>, or the <a href="http://www.tenantsunion.org.au/">Tenants Union</a>.
		</p>
		<p class='subtitle'>Basic Rules</p>
		<p class='content'>
			Keep the property clean, tidy and in good order.
			Do not cause damage to the property.
			Follow the terms and conditions in your residential tenancy agreement.
		</p>
		<p class='subtitle'>Inspections</p>
		<p class='content'>
			If you have not given permission the landlord, agent or any other authorised person may not enter the rented premises except for prearranged inspections. However, if there is an emergency or the landlord is concerned about your welfare and cannot contact you or urgent repairs are required, the landlord may come onto the property without your permission and without giving you any notice. The residential tenancy agreement should state who you should contact in the event of an emergency such as an urgent plumbing repair.
		</p>
		<p class='content'>
			The landlord or agent must give you notice for certain activities to be carried out on the property. The activity that is most likely to affect you is an inspection. The landlord is permitted to conduct 4 inspections of the property per year but they must give you at least 7 days written notice prior to each inspection. The landlord must respect your privacy and adhere to their obligations as recorded in the residential tenancy agreement. For more information see the <a href="http://www.tenants.org.au/factsheet-08-access-and-privacy">access and privacy fact sheet</a> prepared by Tenants NSW.

		</p>
	</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            承租人的义务
        </p>
        <br />

        <p class="content">
            你必须提前支付租金. 如果你未在约定的日期缴纳房租, 你被认为是拖欠, 这构成了违反住宅租赁协议. 然而, 你不必提前 2 个星期支付租金. 如果你被认定是拖欠, 请尽快付清你的租金欠款或者联系你的房东来支付租赁协议.
        </p>

        <p class="content">
            房东不能立即将你赶出去, 如果他们终止租赁协议的唯一理由是你拖欠了房租. 然而, 他们可以给你发布一个 "未支付终止通知" 当你至少 14 天未缴纳房租. 房东和房客需要遵循一个法律过程在逐出的可能性发生前, 更多信息请见南威尔士<a href='http://www.tenants.org.au/factsheet-05-rent-arrears'>租赁情况说明书</a>.
        </p>

        <p class="content">
            当你搬入住所居住时, 你和房东都必须完成一个房屋情况报告, 本报告基本上概述了该房子的状态, 包括房子里的任何东西是否损坏或质量不佳. 我们强烈建议你拍摄照片附加到报告, 特别是如果有房屋有预先存在的质量问题, 你应该自己也保存一份记录.
        </p>

        <p class="content">
            如果房东没有给你提供一个房地报告, 你应该自己出具一份对房地的状况的说明. 你应该完整拍摄房屋照片, 要正确显示房屋的状态, 并突出任何预先存在的损坏处. 一旦你完成这一举动, 你需要在这一报告前面和标注日期, 并且需要一个独立的证人审核签署. 请注意在你的报告中标明如果房东同意照顾维修, 清理或有其他关于房产的工作.
        </p>

        <p class="content">
            房屋检测报告是至关重要的, 因为它可以帮助你<a  href='http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners/Renting_a_home/Ending_a_tenancy/Getting_your_bond_back.page'>拿回押金回来</a>如果房东试图扣留押金. 房东可能会声称他们需要扣留你的押金以支付你所造成的任何房屋损害. 房屋检测报告展示了房屋预先存在质量问题证据, 有利于你不需要承担责任. 只有当你因疏忽, 不负责任的或故意的行为造成处所的损坏, 房东才能叫你索赔. 房东不能因为随着时间的推移房屋磨损和老化, 让你进行索赔, 因为这种损坏可能是由暴露, 时间或只是普通用途而引起的, 更多信息见《新南威尔士州准<a href='http://www.tenants.org.au/factsheet-02-starting-a-tenancy'>备租赁情况说明书</a>》.
        </p>

        <p class="content">
            标准的住宅租赁协议规定承租人需要支付电费和气费, 如果房屋是区分于其他处所而计量. 房东通常是负责电力, 水和天然气服务的初始安装.
        </p>

        <p class="content">
            水费单据的支付方式不同, 取决于房屋是否单独计量和水的效率性. 如果你需要支付用水费, 房东必须给你正确的账单复印件. 更多信息参见《新南威尔士州<a href='http://www.tenants.org.au/factsheet-23-utilities'>公共事业情况说明书</a>》. 如果你需要协助, 请联络的<a href='http://www.tenants.org.au/index.php?option=com_tnswsearch&search=2300,NEWCASTLE'>猎人租户咨询, 宣传服务</a>, 或<a href='http://www.tenantsunion.org.au/'>租户联盟</a>.
        </p>

        <p class="content">
            保持房屋的清洁, 整齐和良好的秩序<br />请不要不造成房屋损坏<br />履行你的住宅租赁协议的条款和条件
        </p>

        <p class="content">
            如果你没有, 房东、代理人或其他授权人的许可, 他们不得进入出租房内, 除 非是预先安排的检查. 但是, 如果有紧急情况或关系到你的安危不能与你取得联系或需要紧急维修, 房东进入你的房间而没有没有你的许可和而不给你任何通知, 住宅租赁协议应说明在紧急情况下你该与谁进行联系, 例如紧急水管维修.
        </p>

        <p class="content">
            房东或中介必须给你一个通知当房屋要进行的某些活动, 最有可能影响你的活动是一个房屋检查. 房东被允许每年进行 4 次物业检查, 但他们必须至少提前 7 天以书面形式通知你在每一个检查. 房东必须尊重你的隐私, 并履行他们的义务基于住宅租赁协议, 更多信息请访问《新南威尔士州<a href='http://www.tenants.org.au/factsheet-08-access-and-privacy'>租户访问和隐私情况说明书M</a>》.
        </p>
    </div>
	)
	
	)
}

export default Tenancy3