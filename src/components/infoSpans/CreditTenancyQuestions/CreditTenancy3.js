import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const CreditTenancy3 = ({lang}) => {
    return (
        (!lang) ? (
                <div className="row">
                    <div id="answer" className="answer answer1">
                        <p className="title">
                            <span className="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" className="image" />
                                </span>Where can I get help with my credit report?
        </p>
        <br />

        <p className="content">
            <a className="ng-scope" href="https://www.moneysmart.gov.au/borrowing-and-credit/borrowing-basics/credit-reports">ASIC's Money Smart website</a> explains that you have a right to get a free credit report once a year (if you can wait 10 days to receive it) and correct any mistakes. If you notice any mistakes you can and should have them corrected. ASIC explains that you can get free help with certain types of incorrect reports: the <a className="ng-scope" href="https://www.afca.org.au/">Australian Financial Complaints Authority</a> website or phone on 1800 931 678 (for credit report issues with credit cards, finance, bank loans, investment products and insurance) and the <a className="ng-scope" href="https://www.tio.com.au/">Telecommunications Industry Ombudsman</a> website or phone on 1800 062 058 (for credit report issues with phone and internet).
        </p>
    </div>

</div>
    ) : (
        <div className="row">
        <div id="answer" className="answer answer1">
            <p className="title">
                <span className="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' className="image"/>
                    </span>在哪里可以获得有关信用报告的帮助？
        </p>
        <br />

        <p className="content">
            <a className="ng-scope" href="https://www.moneysmart.gov.au/borrowing-and-credit/borrowing-basics/credit-reports">ASIC’s Money Smart 网站</a>表示，您有权每年获得一次免费的信用报告（如果您可以等待 10 天），然后纠正任何错误。如果发现了任何错误，您可以并且应该予以纠正。ASIC 表示，对于特定类型的错误报告，您可以获得免费帮助：访问<a className="ng-scope" href="https://www.afca.org.au/">澳大利亚金融投诉局</a>网站或致电 1800 931 678 可了解关于信用卡、财务、银行贷款、投资产品和保险的信用报告问题，而访问 <a className="ng-scope" href="https://www.tio.com.au/">Telecommunications Industry Ombudsman</a> 网站或致电 1800 062 058 则可询问与电话和互联网有关的信用报告问题。
        </p>
    </div>

</div>
    ));
}

export default CreditTenancy3
