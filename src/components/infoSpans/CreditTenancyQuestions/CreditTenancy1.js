import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const CreditTenancy1 = ({lang}) => {
    return (
        (!lang) ? (
                <div >
                    <div>
                        <p className="title">
                            <span className="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" className="image" />
                                </span>What is a credit record?
        </p>
        <br />

        <p className="content">
            If you’ve recently had a credit card, debt agreement, loan, phone contract, lease or payment plan you are likely to have a credit record. A bad record might impact on your ability to get a loan for a home or a car, have a mobile phone on a payment plan or get a credit card.
        </p>

        <p className="content">
            A credit report is a collection of information about your credit history, usually with a ranking number. The report is likely to include your personal details as well as your repayment history, bankruptcy, court judgments, and records of any time you’ve been asked to pay a debt after failing to pay it for more than 60 days. <a className="ng-scope" href="https://www.moneysmart.gov.au/borrowing-and-credit/borrowing-basics/credit-reports">ASIC’s Money Smart website</a> provides detailed information about what is contained in a credit report.
        </p>
    </div>

</div>
    ) : (
        <div >
        <div >
            <p className="title">
                <span className="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' className="image"/>
                    </span>什么是信用记录？
        </p>
        <br />

        <p className="content">
            如果近期有信用卡、债务协议、贷款、电话合同、租赁或支付计划，您很可能会有信用记录。不良记录可能会对您获得房屋贷款或汽车贷款、以付款计划购买手机或获得信用卡的能力产生消极影响。
        </p>

        <p className="content">
            信用报告是您的信用记录信息集合，通常具有等级顺序。该报告很可能包含您的个人详细信息以及您的还款记录、破产情况、法院裁决，以及您何时在逾期 60天 的情况下仍未还款从而被要求偿还债务的记录。<a className="ng-scope" href="https://www.moneysmart.gov.au/borrowing-and-credit/borrowing-basics/credit-reports">ASIC’s Money Smart 网站</a>提供信用报告所含内容的详细信息。
        </p>
    </div>

</div>
    ));
}

export default CreditTenancy1
