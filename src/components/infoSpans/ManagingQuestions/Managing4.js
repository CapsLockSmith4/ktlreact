import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Managing4 = ({lang}) => {
    return (
        (!lang) ? (
            <div className="row">
                <div id="answer3" className="answer answer3">
                    <p className="title">
                    <span className="fa-gavel-icon answer-icon">
                        <img src={lawIcon} alt="law symbol" className="image" />
                        </span>Letter of Demand - what is it?
        </p>
        <br />

        <p className="content">A person or company to whom you owe money is called a 'creditor'. The creditor may send you a Letter of Demand as an attempt to get you to pay the debt, either in full or in part, by a certain date.</p>
        <p className="content">If you receive a Letter of Demand, make sure the amount of the debt being claimed is correct. If you write to the creditor for any reason, such as to obtain more details, you should keep a copy of all correspondence and the date on any email or letters that you write.</p>
        <p className="content">For more information see LawAccess: <a  href="https://www.lawaccess.nsw.gov.au/Pages/representing/debt/responding_to_a_claim/responding_to_a_letter_of_demand.aspx">responding to a letter of demand</a>.</p>
    </div>

</div>
    ) : (
        <div>
    <div>
         <p className="title">
             <span className="fa-gavel-icon answer-icon">
                 <img src={lawIcon} className="image" />
                 </span>
            缴款通知书 - 它是什么?
        </p>
        <br />

        <p className="content">
            如果你欠某个人或公司的钱, 他们被称为"债权人". 债权人可以向你发送一份缴款通知书, 以试图让你在某一日期全额或部分地支付债务.
        </p>

        <p className="content">
            如果你收到缴款通知书, 你要确保债务金额正确无误. 如果你写给债权人出于任何原因, 如要获得更多的细节, 你应该保留一份所有的信件和电子邮件的副本, 同时记住你写信的日期.
        </p>
        <p className="content">更多信息请参阅LawAccess：<a  href="https://www.lawaccess.nsw.gov.au/Pages/representing/debt/responding_to_a_claim/responding_to_a_letter_of_demand.aspx">回应缴款通知书</a>.</p>
    </div>
</div>

    ))
}

export default Managing4