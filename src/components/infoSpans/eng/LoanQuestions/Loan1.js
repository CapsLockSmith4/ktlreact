import React from 'react'
import lawIcon from '../../../images/law.png'
import '../../../../styles.css'

const Loan1 = ({lang}) => {
    return (
        (!lang) ? (
                <div class="row">
                    <div id="answer" class="answer answer1">
                        <p class="title">
                            <span class="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" class="image" />
                            </span>What is a Loan?
                        </p>
                        <br />
                        <p class="content">
                            A loan is where you borrow money, most likely from a bank or other financial institution, and agree to pay the amount back over a certain time. There is usually an amount of interest charged in addition to the amount borrowed. It is best to get financial advice before entering into any type of loan to make sure you understand all of the terms and conditions. You should consider the following questions before getting a loan:
                        </p>
                        <ul class='content-list'>
                            <li><span>Do I need a loan?</span></li>


                            <li><span>Do I have a stable job?</span></li>


                            <li><span>Do I have a regular income?</span></li>


                            <li><span>What other expenses do I have to consider?</span></li>


                            <li><span>Can I afford the repayments on the loan?</span></li>


                            <li><span>Will I be able to keep up with the repayments if my work situation changes?</span></li>
                        </ul>
                        <p class="content">
                            The Financial Rights Legal Centre provides further information that you should read before you borrow money, or advice on what to do if you are <a class="ng-scope" href="http://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Cant-Pay-Loan.pdf">struggling to pay your loan.</a>
                        </p>
                    </div>
                </div>

    ) : (
        <div class="row">
        <div id="answer" class="answer answer1">
            <p class="title">
                <span class="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' class="image"/>
                </span>
                什么是贷款?
            </p>
            <br />

            <p class="content">
                贷款主要指银行或者金融机构依法把货币资金按一定的利率贷放给客户, 并约 定期限由客户偿还本息的一种信用活动. 为了确保你明白所有的条款和条件, 当你在申请任何类型的贷款之前最好先得到理财顾问的建议.
            </p>

            <p class="content">
                在申请贷款之前, 你应该考虑以下几个问题: <ul class='content-list'><li>我需要贷款吗?</li><li>我有固定的工作吗?</li><li>我有固定的收入吗?</li><li>我还需要考虑哪些其他费用?</li><li>我是否能付担得起偿还贷款?</li><li>如果我工作情况改变, 我是否还能偿还贷款?</li></ul>
            </p>

            <p class="content">
                如果你正在理财问题中挣扎, 在<a href='http://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Cant-Pay-Loan.pdf' >你贷款之前</a>应该阅读《金融权利法律中心》提供的信息和意见.
            </p>
        </div>
    </div>
    ));
}

export default Loan1
