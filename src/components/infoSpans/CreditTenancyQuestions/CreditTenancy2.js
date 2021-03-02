import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const CreditTenancy2 = ({lang}) => {
    return (
        (!lang) ? (
                <div className="row">
                    <div id="answer" className="answer answer1">
                        <p className="title">
                            <span className="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" className="image" />
                                </span>How can I improve my credit record?
        </p>
        <br />

        <p className="content">
            <a className="ng-scope" href="https://www.moneysmart.gov.au/borrowing-and-credit/borrowing-basics/credit-reports">ASIC's Money Smart website</a> suggests that you lower your credit card limits, consolidate your debts, limit your applications for credit, pay rent, mortgages, bills and loans on time, and paying your credit card off in full each month.
        </p>
	</div>

</div>
    ) : (
        <div className="row">
        <div id="answer" className="answer answer1">
            <p className="title">
                <span className="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' className="image"/>
                    </span>如何提高信用记录？
        </p>
        <br />

        <p className="content">
            <a className="ng-scope" href="https://www.moneysmart.gov.au/borrowing-and-credit/borrowing-basics/credit-reports">ASIC’s Money Smart 网站</a>建议您降低信用卡额度，整合债务，限制信用申请，按时支付租金、房屋贷款、账单和贷款，以及每月全额偿还信用卡。
        </p>
	</div>

</div>
    ));
}

export default CreditTenancy2
