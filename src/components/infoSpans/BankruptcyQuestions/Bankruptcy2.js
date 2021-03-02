import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Bankruptcy2 = ({lang}) => {
    return (
        (!lang) ? (
                <div className="row">
                    <div id="answer" className="answer answer1">
                        <p className="title">
                            <span className="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" className="image" />
                                </span>What are the risks and benefits of bankruptcy?
        </p>
        <br />

        <p className="content">
            Bankruptcy generally means you will not have to repay many of your debts. But, the consequences of bankruptcy are serious and include having a trustee control much of your finances, the removal and/or sale of your car, house and other belongings, negative effects on your credit reports, strict requirements to report details about your employment and finances, compulsory payments from any earnings, and restrictions on the type of employment/work you can do. Bankruptcy generally continues for 3 years and 1 day.
        </p>

        <p className="content">
            The <a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/what-bankruptcy">Australian Financial Security Authority</a> provides more detailed information including <a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/am-i-eligible-bankruptcy">the requirements to enter bankruptcy</a>, <a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/what-are-consequences-bankruptcy">the consequences of bankruptcy</a>, <a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/what-can-be-taken-or-sold-bankruptcy">what can be taken or sold</a>, <a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/how-does-bankruptcy-affect-my-income-and-employment">effects on your income/employment</a>, and <a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/who-will-know-im-bankrupt">who will know you’re bankrupt</a>.
        </p>
    </div>

</div>
    ) : (
        <div className="row">
        <div id="answer" className="answer answer1">
            <p className="title">
                <span className="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' className="image"/>
                    </span>破产的风险和好处是什么？
        </p>
        <br />

        <p className="content">
            破产通常意味着您将无需偿还很多债务。但破产的后果也很严重，包括：受托人会控制您的大部分资金，您的汽车、房屋和其他物品都会被拆卸和/或出售，您的信用报告会遭受负面影响，要按照要求严格上报就业和经济状况的详细信息，强制用您的任何收益进行支付，并且您的就业/工作类型也会受到限制。破产通常持续 3 年零 1 天。
        </p>

        <p className="content">
            <a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/what-bankruptcy">澳大利亚金融安全管理局 (Australian Financial Security Authority)</a>提供了更详细的信息，包括<a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/am-i-eligible-bankruptcy">进入破产的条件</a>, <a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/what-are-consequences-bankruptcy">破产的后果</a>, <a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/what-can-be-taken-or-sold-bankruptcy">可以取走或出售的物品</a>, <a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/how-does-bankruptcy-affect-my-income-and-employment">对您收入/就业的影响</a>以及<a className="ng-scope" href="https://www.afsa.gov.au/insolvency/i-cant-pay-my-debts/who-will-know-im-bankrupt">谁将会知道您破产了</a>。
        </p>
    </div>

</div>
    ));
}

export default Bankruptcy2
