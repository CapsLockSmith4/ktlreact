import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Bankruptcy3 = ({lang}) => {
    return (
        (!lang) ? (
                <div className="row">
                    <div id="answer" className="answer answer1">
                        <p className="title">
                            <span className="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" className="image" />
                                </span>Who can help me with bankruptcy?
        </p>
        <br />

        <p className="content">
            It is a good idea to contact a financial counsellor or a free legal service before you make any decisions about bankruptcy. You can find a financial counsellor on the <a className="ng-scope" href="https://www.financialcounsellingaustralia.org.au/">Financial Counselling Australia website</a>. ASIC’s Money Smart website lists a range of <a className="ng-scope" href="https://www.moneysmart.gov.au/managing-your-money/managing-debts/free-legal-advice">free legal services</a>.
</p>
    </div>

</div>
        ) : (
        <div className="row">
        <div id="answer" className="answer answer1">
            <p className="title">
                <span className="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' className="image"/>
                    </span>谁能为我提供破产帮助？
        </p>
        <br />

        <p className="content">
            在做出任何破产决定之前，最好联系财务顾问或免费法律服务。要寻找财务顾问，您可以访问<a className="ng-scope" href="https://www.financialcounsellingaustralia.org.au/">澳大利亚理财咨询协会网站</a>。ASIC’s Money Smart 网站也列出了一系列<a className="ng-scope" href="https://www.moneysmart.gov.au/managing-your-money/managing-debts/free-legal-advice">免费法律服务</a>。
        </p>
    </div>

</div>
    ));
}

export default Bankruptcy3
