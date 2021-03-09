import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Payday2 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>What can I do if I can’t pay my payday loan?
        </p>
        <br />

        <p class="content">
            If you already have a payday loan and you suspect that the lender gave you a loan you could not afford or did not properly consider your financial situation you may able to resolve the issue with a complaint to the <a class="ng-scope" href="https://www.afca.org.au/">Australian Financial Complaints Authority</a>.<br />
            Other options include seeking assistance from the Financial Rights Legal Centre on 1800 007 007 or LawAccess on 1300 888 529. ASIC’s Money Smart website lists a range of <a class="ng-scope" href="https://www.moneysmart.gov.au/managing-your-money/managing-debts/free-legal-advice">free legal services</a>. You may also be able to find a free financial counsellor on the <a class="ng-scope" href="https://www.financialcounsellingaustralia.org.au/">Financial Counselling Australia website</a>.
        </p>
    </div>

    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>如果无法偿还发薪日贷款，我该怎么办？
        </p>
        <br />

        <p class="content">
            如果您已经借了发薪日贷款并且怀疑自己无法偿还贷款人向您提供的贷款或未正确考虑自己的财务状况，您可以通过向<a class="ng-scope" href="https://www.afca.org.au/">澳大利亚金融投诉局 (Australian Financial Complaints Authority)</a> 投诉来解决问题。<br />
            其他选择包括致电 1800 007 007 向金融权利法律中心 (Financial Rights Legal Centre) 或致电 1300 888 529 向 LawAccess 寻求帮助。ASIC’s Money Smart 网站列出了一系列<a class="ng-scope" href="https://www.moneysmart.gov.au/managing-your-money/managing-debts/free-legal-advice">免费法律服务</a>。您也可以在<a class="ng-scope" href="https://www.financialcounsellingaustralia.org.au/">澳大利亚理财咨询协会 (Financial Counselling Australia) 网站</a>找到免费的财务顾问。
        </p>
    </div>
	)
	
	)
}

export default Payday2