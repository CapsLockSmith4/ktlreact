import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Tenancy4 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Terminating a Lease
		</p>
        <br />

		<p class='content'>If you have a periodic tenancy you must give at least 21 days written notice before terminating your lease. If you have a <a href="http://www.tenants.org.au/factsheet-16-ending-tenancy-early">fixed-term agreement</a> you must also give notice, but the amount of notice differs depending on the reason you give for ending your tenancy. When you enter into a fixed term agreement it is expected you will remain at the premises for the entire length of the residential tenancy agreement. It is advisable to seek legal advice before attempting to terminate the agreement early as the process may prove quite expensive. If you do want to terminate the agreement early, try to give the landlord as much notice as possible. Also try to get the landlord’s agreement to early termination in writing.</p>
		<p class='content'>
			If you terminate the agreement before the specified date this may incur a ‘break fee’ as stipulated under the additional terms of your agreement. If you are wanting to leave before half of the fixed term has passed, the fee is equal to 6 weeks rent. If more than half of the fixed term has passed, the fee is 4 weeks rent. If no break fee is stated in your agreement you may need to come to an arrangement with the landlord as to what an appropriate amount of compensation will be. You must provide a written <a href="http://www.tenants.org.au/factsheet-09-you-want-to-leave">termination notice</a> to the landlord, vacate the premises and return the keys to the landlord.
		</p>
		<p class='subtitle'>Bond - how do I get it back?</p>
		<p class='content'>
			You are only required to steam clean the carpets if this is stipulated in your residential tenancy agreement. The landlord cannot withhold or reduce your bond for this unless it is stated in the agreement. At the end of the tenancy the bond should be refunded in full provided you do not owe any money to the landlord and you have not caused any damage to the property during the term of your tenancy.
		</p>
		<p class='content'>
			The landlord will need to complete and sign a ‘Claim for Refund of Bond Money’ form. Make sure the amount of the refund has been filled in before you sign the form. You are responsible for lodging this form with Fair Trading in order to receive your refund as soon as possible. For more information on getting your bond back, visit <a href="http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners/Renting_a_home/Ending_a_tenancy/Getting_your_bond_back.page">NSW Fair Trading</a>.
		</p>
	</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            终止租约
        </p>
        <br />

        <p class="content">
            如果你有一个周期性的租赁, 你必须提前 21 天提供给房东一份终止租约的书面 通知. 如果你有一个<a  href='http://www.tenants.org.au/factsheet-16-ending-tenancy-early'>固定期限的协议</a>, 你也必须给予通知, 但通知的数目不同, 这取决于你结束你的租约的原因. 当你签署一个固定租赁的协议, 这说明你会居住在房屋内根据住宅租赁协议上的期间. 通常在你在试图提前终止协议之前征求法律咨询是明智的选择, 因为这个终止协议过程可能是相当昂贵的. 如果 你想提前终止协议, 你需要给房东提供尽可能多的通知, 此外, 你应该试图获取房东同意你终止租约的书面形式.
        </p>

        <p class="content">
            如果你在指定日期之前终止协议, 这可能会导致一个 "终止协议费用" 根据你签署协议的附加条款规定的. 如果你想提前终止租赁合约当你还未居住超过一半的固定租赁期, 那么所产生的费用相当于 6 周的租金. 如果你已经居住超过一半的固定租赁期, 那么所产生的费用是 4 周租金. 如果"终止协议费用"不在你的协议中, 你可能需要和房东一起安排一个适当数额的补偿, 你必须向房东提供书面<a href='http://www.tenants.org.au/factsheet-09-you-want-to-leave'>终止通知</a>, 清空房屋物品和把钥匙退给房东.
        </p>

        <p class="content">
            在你归还房屋的钥匙之前, 你需要联系你的房东或中介进行最后检查, 这是你需要完成另一个房屋报告的时期, 你无需承担在你的租赁期间发生的房屋<a href='http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners/Renting_a_home/Ending_a_tenancy/Getting_your_bond_back.page'>正常磨损或房屋预先存</a>在的质量问题. 所以就是重要安排时间正式完成一个房屋报告的时期在你租约之前和拍照那些先已存在的问题.
        </p>

        <p class="content">
            你只需要蒸汽清洗地毯, 如果这是在你的住宅租赁协议规定中, 房东不能扣留 或减少你的押金, 除非该在协议中有陈述. 在租约结束时, 只要你不在你的租 约期内欠房东钱, 你没有对该住宅造成任何损害, 押金应当全额退还你.
        </p>

        <p class="content">
            房东需要填写并签署"退还债券的索赔"表格, 确保在你签署表格前退款的金 额已经填入表格中, 你需要尽快到公平交易委员会申请退款. 如果你想了解更多关于退还押金的信息, 访问《<a href='http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners/Renting_a_home/Ending_a_tenancy/Getting_your_bond_back.page'>新州公平交易委员会</a>》.
        </p>
    </div>
	)
	
	)
}

export default Tenancy4