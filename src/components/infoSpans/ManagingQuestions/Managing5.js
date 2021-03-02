import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Managing5 = ({lang}) => {
    return (
        (!lang) ? (
            <div className="row">
                <div id="answer3" className="answer answer3">
                    <p className="title">
                    <span className="fa-gavel-icon answer-icon">
                        <img src={lawIcon} alt="law symbol" className="image" />
                        </span>Statement of Claim - what is it?
        </p>
        <br />
        <p className="content">If the creditor commences legal proceedings against you, you will receive a Statement of Claim usually from the Local Court. <a target="_blank" rel="noopener" href="https://www.lawaccess.nsw.gov.au/Pages/representing/Local_courts_small_claims/chased_for_money/Responding_to_soc/Responding_to_soc.aspx">You must respond to this Statement of Claim</a> within 28 days from the date you receive it. This response is known as a ‘Defence’. If you fail to lodge your Defence with the Local Court within 28 days the creditor may apply for a default judgment. This means the Court can enter judgment against you for the money owing and you will have no opportunity to present your case.</p>
        <p className="content">For more information see LawAccess: <a target="_blank" rel="noopener" href="https://www.lawaccess.nsw.gov.au/Pages/representing/Local_courts_small_claims/flowcharts/resp_soc_flow_accessible.aspx">Responding to a statement of claim flowchart</a>.</p>
    </div>

</div>
    ) : (
        <div className="row">
    <div id="answer" className="answer answer3">
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} className="image" />
                </span>
            起诉书 - 它是什么?
        </p>
        <br />

        <p className="content">如果债权人开始对你提出法律诉讼, 您将收到来自地方法院起诉书. 你必须<a target="_blank" rel="noopener" href="https://www.lawaccess.nsw.gov.au/Pages/representing/Local_courts_small_claims/chased_for_money/Responding_to_soc/Responding_to_soc.aspx">回应这封起诉书</a>从你收到它那天起的 28 天内, 这项回复被称为 '辩护'. 如果你在 28 天内未提出你的辩护到地方法院, 债权人可以申请缺席判决, 这意味着法院可以进行判决关于你欠下的钱, 并且你以后也没有机会呈递你的申请.</p>
        <p className="content">更多信息请参阅LawAccess：<a target="_blank" rel="noopener" href="https://www.lawaccess.nsw.gov.au/Pages/representing/debt/responding_to_a_claim/responding_to_a_letter_of_demand.aspx">回应缴款通知书</a>.</p>
    </div>
</div>

    ))
}

export default Managing5