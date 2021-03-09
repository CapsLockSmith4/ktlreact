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
                </span>Are there any alternatives to payday loans?
        </p>
        <br />

        <p class="content">
            There are alternatives to payday loans including no interest loans, student loans and Centrelink advanced payments and crisis assistance.
        </p>

        <p class="content">
            No interest loans are like payday loans except they are much cheaper, provided by not-for-profit organisations and are easier to repay. But, they are only provided for certain things to people who earn less than $45,000 per year. The No Interest Loan Scheme has a <a class="ng-scope" href="https://nils.com.au/">website</a> which answers many questions, including <a class="ng-scope" href="https://nils.com.au/#qualify">whether you qualify</a> and <a class="ng-scope" href="https://nils.com.au/find">where to find a lender</a>. You can also phone the No Interest Loan Scheme on 13 64 57.
        </p>
        
        <p class="content">
            If you receive a Centrelink benefit you might be able to get an advanced payment. You can find out whether you qualify on the Department of Human Services website, <a class="ng-scope" href="https://www.humanservices.gov.au/individuals/enablers/advance-payment/30201">here</a>. Centrelink crisis assistance is available in certain circumstances, such as: a <a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/crisis-payment">Crisis Payment</a> for financial hardship and extreme circumstances, <a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/carer-adjustment-payment">Carer Adjustment Payment</a> for certain carers and the <a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/pension-loans-scheme">Pension Loans Scheme</a> that provides a fortnightly payment that is repaid out of the person’s estate.
        </p>

        <p class="content">
            If you’re studying, an apprentice or trainee you might also qualify for other payments: the <a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/education-entry-payment">Education Entry Payment</a> which is a yearly payment to help you study, you might also qualify for a <a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/student-start-loan">Student Start-up Loan</a> up to twice a year for higher education expenses, and certain pensioners who are studying might qualify for a <a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/pensioner-education-supplement">Pensioner Education Supplement</a>.
        </p>
	</div>

    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>是否有发薪日贷款的替代品？
        </p>
        <br />

        <p class="content">
            发薪日贷款的替代品包含无息贷款、学生贷款和 Centrelink 预付款和危机援助。
        </p>

        <p class="content">
            无息贷款很像发薪日贷款，只是它们更便宜、贷方为非营利组织并且也更容易偿还。但是，它们仅在特性情况下面向每年收入低于$ 45,000的人。无息贷款计划设有<a class="ng-scope" href="https://nils.com.au/">网站</a>，可回答很多问题，包括<a class="ng-scope" href="https://nils.com.au/#qualify">您是否符合资格</a>以及<a class="ng-scope" href="https://nils.com.au/find">在何处找到贷方</a>。也可拨打 13 64 57 致电无息贷款计划。
        </p>
        
        <p class="content">
            如果您收到了 Centrelink 福利，可能也可以获得预付款。您可以从<a class="ng-scope" href="https://www.humanservices.gov.au/individuals/enablers/advance-payment/30201">此处</a>的澳大利亚民政服务部网站了解您是否符合申请资格。在特定情况下可以使用 Centrelink 危机援助，例如：在经济困难和极端情况下可以使用<a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/crisis-payment">危机补助金</a>，某些护理人员可以使用<a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/carer-adjustment-payment">护理人员调节金</a>，以及用个人不动产偿还的两周一次提供贷款的<a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/pension-loans-scheme">养老金贷款计划</a>。
        </p>

        <p class="content">
            如果您正在学习，是一位学徒或实习生，可能也有资格获得其他贷款：<a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/education-entry-payment">入学津贴 (Education Entry Payment)</a>，这种一年一度的贷款旨在帮助您学习；<a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/student-start-loan">学生起步贷款 (Student Start-up Loan)</a>，这种贷款每年最多提供两次，可用作高等教育经费；以及某些正在学习的养老金领取者可能有资格获得<a class="ng-scope" href="https://www.humanservices.gov.au/individuals/services/centrelink/pensioner-education-supplement">福利金教育补助 (Pensioner Education Supplement)</a>。
        </p>
	</div>
	)
	
	)
}

export default Payday2