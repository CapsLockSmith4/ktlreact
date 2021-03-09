import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Police5 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Fines - what do I do if I receive a fine?
        </p>
        <br />


		<p class="content">If you receive a <a  href="https://www.revenue.nsw.gov.au/fines-and-fees">fine</a> you must either pay it promptly, make arrangements to pay the sum in instalments, or dispute the fine. If you do not pay a fine by the due date, you will receive a reminder and you will have a further 28 days to pay. If you do not pay by the end of the second 28 day period you will have to pay additional fees. You can pay a fine online at the <a href="http://www.sdro.nsw.gov.au/">State Debt Recovery Office</a> website, in person at an Australia Post Office, or by phone using Visa or Mastercard (call 1300 130 112).</p>


		<p class="content">Alternatively, you may request for the State Debt Recovery Office (SDRO) to review your penalty notice. You can <a href="https://www.revenue.nsw.gov.au/fines/pn/review">request a review</a> if you believe you should not have been fined, or the fine was extremely harsh as special circumstances contributed to the offence. Following the review, the SDRO will either decide the fine was issued correctly and must be paid, the fine was issued correctly but does not have to paid due to the special circumstances, or the fine was issued incorrectly and will be cancelled.</p>


		<p class="content">The other option is to <a href="https://www.revenue.nsw.gov.au/fines/pn/court">challenge the fine</a> and have it decided in court. If challenging in court you must complete a Court Election Form and return it to the State Debt Recovery Office. Disputing a fine in court may cost more than the fine itself and if your challenge is unsuccessful the court’s decision may result in you having a criminal record. If you are unsure what to do, seek legal advice.</p>
	</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            罚款 - 如果我收到罚款, 我该做什么?
        </p>
        <br />

        <p class="content">
            如果你收到<a href='http://www.sdro.nsw.gov.au/fines/'>罚款</a>你有三个选择: 立即支付, 安排分期付款, 或对罚金提出抗辩. 如果到期日你还没有支付罚款, 你会收到一个提醒, 你将有一个延期的 28 天支 付. 如果第二个 28 天期结束后你仍未支付, 你将支付额外的费用. 支付罚款你 可以选择: 在<a href='http://www.sdro.nsw.gov.au/'>国家追收债项办事处</a>网站上支付, 或到澳大利亚邮政局支付, 或 通过电话使用 Visa 信用卡或万事达信用卡支付（电话 1300 130 112).
        </p>

        <p class="content">
            你还可以要求国家追收债项办事处(SDRO)审查你的罚款通知. 有两种方法<a href='https://www.revenue.nsw.gov.au/fines/pn/review '>要求审查</a>: 如果你坚信你不应该被罚款；或罚款是非常苛刻的, 因为有特殊情况导 致犯罪发生. 在通过审核后, 国家追收债项办事处将决定: 罚款是公正和必须支付；罚款发出是正确的, 但由于特殊情况不必支付；罚款发出是错误的, 将被取消.
        </p>

        <p class="content">
            另一个选择是<a href='https://www.revenue.nsw.gov.au/fines/pn/court'>对罚款提出抗辩</a>, 并让法庭决定. 如果在法庭上具有挑战性, 你可以完成一个法律的选择, 将其归还给国家追收债项办事处. 在法庭辩论的成本可能会超过罚款的成本. 如果你的挑战是不成功的, 法院的决定可能会导致你有犯罪记录. 如果你不知道该做什么, 请寻求律师意见.
        </p>
    </div>
	)
	
	)
}

export default Police5