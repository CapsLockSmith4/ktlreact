import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Guaranteeing1 = ({lang}) => {
    return (
        (!lang) ? (
                <div >
                    <div >
                        <p className="title">
                            <span className="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" className="image" />
                                </span>What does it mean to guarantee a loan?
        </p>
        <br />

        <p class="content">
            Sometimes a money lender (like a payday lender or a bank) requires that a person applying for a loan get another person to promise to pay back the loan if the borrower fails to do so. It is common for this person to be a family member or close friends. The promise (or guarantee) might involve promising that in the event that the borrower fails to pay back the loan you will take over repayments, make one large payment or give up some property (like your car, house or boat).
        </p>

        <p class="content">
            Any decision to guarantee a loan should be taken very seriously. Some of the most important questions are dealt with on ASIC’s Money Smart website, <a class="ng-scope" href="https://www.moneysmart.gov.au/borrowing-and-credit/borrowing-basics/loans-involving-family-and-friends">here</a>. Legal Aid NSW also provides some essential tips that you should consider before making any decision in the factsheet <a class="ng-scope" href="https://www.legalaid.nsw.gov.au/publications/factsheets-and-resources/helping-your-family-financially-understand-the-risks">‘Helping your family financial? Understand the risks’</a>.
        </p>

        <p class="content">
            You should consider seeking legal advice or financial counselling. You might be able to get assistance from the Financial Rights Legal Centre on 1800 007 007 or LawAccess on 1300 888 529. ASIC’s Money Smart website lists a range of <a class="ng-scope" href="https://www.moneysmart.gov.au/managing-your-money/managing-debts/free-legal-advice">free legal services</a>. You may also be able to find a free financial counsellor on the <a class="ng-scope" href="https://www.financialcounsellingaustralia.org.au">Financial Counselling Australia website</a>.
        </p>
    </div>
    </div>
    ) : (
        <div >
        <div >
            <p className="title">
                <span className="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' className="image"/>
                    </span>保证贷款意味着什么？
        </p>
        <br />

        <p class="content">
            有时，放贷人（如发薪日贷款机构或银行）会要求借款人找来另一个人承诺在借款人未能还款的情况下偿还贷款。这个人通常是借款人的家人或密友。做出这种承诺（或担保）可能涉及这样的保证：如果借款人未能偿还贷款，您将接管还款事项，支付一笔大额款项或放弃一些财产（如您的汽车、房屋或船只）。
        </p>

        <p class="content">
            不论做任何担保贷款决定都应慎之又慎。一些最重要的问题可在<a class="ng-scope" href="https://www.moneysmart.gov.au/borrowing-and-credit/borrowing-basics/loans-involving-family-and-friends">此处</a>即 ASIC’s Money Smart 网站上处理。新南威尔士州法律援助组织 Legal Aid NSW 还在资料页<a class="ng-scope" href="https://www.legalaid.nsw.gov.au/publications/factsheets-and-resources/helping-your-family-financially-understand-the-risks">“帮助您的家庭财务状况？了解风险”</a>中提供了一些基本技巧，供您在做决定之前参考。
        </p>

        <p class="content">
            您应考虑寻求法律咨询或财务顾问。可以致电 1800 007 007 向金融权利法律中心或致电 1300 888 529 向 LawAccess 寻求帮助。ASIC’s Money Smart 网站列出了一系列<a class="ng-scope" href="https://www.moneysmart.gov.au/managing-your-money/managing-debts/free-legal-advice">免费法律服务</a>。您也可以在<a class="ng-scope" href="https://www.financialcounsellingaustralia.org.au">澳大利亚理财咨询协会网站</a>找到免费的财务顾问。
        </p>
    </div>

</div>
    ));
}

export default Guaranteeing1