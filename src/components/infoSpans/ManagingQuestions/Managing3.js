import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../../styles.css'

const Loan3 = ({lang}) => {
    return (
        (!lang) ? (
            <div class="row">
                <div id="answer3" class="answer answer3">
                    <p class="title">
                    <span class="fa-gavel-icon answer-icon">
                        <img src={lawIcon} alt="law symbol" class="image" />
                    </span>Fines and Debt - what should I do?
                    </p>
                    <br />

                    <p class="content">There are two types of fines: penalty notices and court fines. Penalty notices are also referred to as "on the spot" fines. Common examples include speeding tickets issued by the Police when driving and parking fines. Court fines are imposed by a court following a finding of guilt. If you have not paid a fine the <a class="ng-scope" href="https://www.revenue.nsw.gov.au/fines">NSW State Debt Recovery Office</a> (SDR) may seek to recover the money you owe. If you are a visiting driver who holds an international licence, your visiting driver privileges (including not having to hold a NSW driver licence) may be cancelled if you fail to pay fines issued for traffic offences. Legal Aid NSW provides information if you are having <a class="ng-scope" href="http://www.legalaid.nsw.gov.au/publications/factsheets-and-resources/are-you-having-problems-with-fines">problems in paying your fines</a> and they have collaborated with the Inner Community Legal Centre and the Redfern Legal Centre on a very <a class="ng-scope" href="http://www.iclc.org.au/finedout/">helpful guide</a> relating to fines.</p>

                    <p class="content">The best option regarding any money that you legally owe is to pay it off in full as quickly as possible. However, if you are unable to do this there are various options available:</p>


                    <ul class='content-list'>
                        <li>
                            <span>
                                External Dispute Resolution (EDR) attempts to resolve your debt dispute out of court. This may involve mediation at the <a target="_blank" href="http://www.cjc.justice.nsw.gov.au">Community Justice Centre</a>. If your debt is about consumer goods or services, you can contact the NSW Civil and Administrative Tribunal (NCAT) to seek a resolution;
                            </span>
                        </li>


                        <li><span>You can contact the creditor and attempt to negotiate a suitable – and realistic – timeframe in which to pay the debt in line with a specified payment plan;</span></li>


                        <li><span>If you think a fine is excessive or has been imposed in error, you can defend the matter in court. However, this can be a stressful and expensive process that may cost you more than the actual amount you owe. You should seek legal advice about this.</span></li>
                    </ul>



                    <p class="content">For advice call Aboriginal Department in Financial Rights - Mob Strong Debt Help on 1800 808 488 or the Financial Rights Legal Centre Credit &amp; Debt Hotline on 1800 007 007.</p>
                </div>
            </div>
    ) : (
        <div class="row">
    <div id="answer" class="answer answer3">
         <p class="title">
             <span class="fa-gavel-icon answer-icon">
                 <img src={lawIcon} class="image" />
             </span>
             罚款和债务 - 我该怎么办?
         </p>
        <br />

         <p class="content">
         这里有两种类型的罚款: 罚款通知和法院罚款. 罚款通知也被称为"当场罚款", 例子包括由警察开出的超速罚单当你驾驶及泊车的时候. 法院的罚款是 由法庭宣判后得出你有犯罪, 如果你不支付罚款, <a href='https://www.revenue.nsw.gov.au/fines' >新南威尔士州追讨债务办事处</a>(SDR)可能会追讨你欠的钱. 如果你是一个持有国际驾驶证的来访司机, 当 你未缴纳驾驶罚款时, 你的访客驾驶权益将会被取消. 如果你<a href='http://www.legalaid.nsw.gov.au/publications/factsheets-and-resources/are-you-having-problems-with-fines' >支付罚款有困难</a>,  可以寻求新南威尔士法律援助. 内部社区法律中心和费恩法律中心将对你的罚 款提供非常<a href='http://www.iclc.org.au/finedout/' >有益的指导</a>
         </p>

         <p class="content">
         关于你法律上欠款的最佳的选择就是尽快全额还清. 然而, 如果你无法做到的话, 可采取其他选择: <ul class='content-list'><li>外部纠纷解决(EDR). 尝试在庭外解决你的债务纠纷, 这可能涉及<a href='http://www.cjc.justice.nsw.gov.au' >社区司法中心的调解</a>. 如果你的债务是有关消费品或服务, 您可以联系《新南威尔士州民 事和行政仲裁庭》寻求解决;</li><li>你可以联系债权人并尝试通过谈判得出合适的, 实际的, 根据指定付款计划偿还债务的时间表;</li><li>如果你认为罚款是过度的或是错误的, 你可以在法庭上捍卫自己权益. 然而,  这是一个有压力和昂贵的过程, 它可能会花费比你欠的金额更多, 你应该寻求 法律咨询.</li></ul>
         </p>

         <p class="content">
             如果需要帮忙请致电到土著金融权利部门-暴民债务援助1800 808 488, 或《金融 权利法律中心》信贷和债务热线 1800 007 007.
         </p>
    </div>
</div>

    ))
}

export default Loan3
