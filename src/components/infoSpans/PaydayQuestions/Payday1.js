import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Payday1 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>What is a payday loan?
        </p>
        <br />

        <p class="content">
            A payday loan is a loan for $2,000 or less which must be paid within 16 days to one year. They can be expensive and can be difficult to pay off, can cost you much more than you receive and lead to an escalating series of loans as you try to catch up. You can check the total cost of a payday loan with Australian Financial Security Authority <a class="ng-scope" href="https://www.moneysmart.gov.au/tools-and-resources/calculators-and-apps/payday-loan-calculator">payday loan calculator</a>.
        </p>

        <p class="content">
            National laws in Australia have put strict limits on payday lenders. There are limits on what they can charge you: a maximum one-off fee of 20% of the amount borrowed and an administration fee of 4% of the amount borrowed per month (as well as fees for government charges, failing to pay the loan, and the costs of enforcing the loan).
        </p>
    </div>

    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>什么是发薪日贷款？
        </p>
        <br />

        <p class="content">
            发薪日贷款是贷款额为 $2000或以下并且必须在 16 天到一年内支付的贷款。这种贷款的利息很高并且难以偿还，成本会比您收到的金额高得多，并且在您试图还上时还会导致一系列不断增加的贷款。您可以使用澳大利亚金融安全管理局 (Australian Financial Security Authority) <a class="ng-scope" href="https://www.moneysmart.gov.au/tools-and-resources/calculators-and-apps/payday-loan-calculator">发薪日贷款计算器</a>计算发薪日贷款的总成本。
        </p>

        <p class="content">
            澳大利亚现行国家法律对发薪日贷款机构进行了严格限制。他们只能向您收取有限的费用：一次性费用的最高金额为借款金额的 20％，每月管理费为借款金额的 4％（以及政府收费、未支付贷款的费用和执行贷款的成本）。
        </p>
    </div>
	)
	
	)
}

export default Payday1