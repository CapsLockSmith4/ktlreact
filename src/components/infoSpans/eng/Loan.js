import React from 'react'
import {Link} from 'react-router-dom'
import Loan1 from './manageDebit/Loan1'

const LoanHome = ({lang}) => {
   /* const [val, setVal] = useState (1);
    const [loan,setLoan] = useState ();
    switch (val) {
        case 1: setLoan( 
                <div className='Content'>
                    <h1>What is a Loan?</h1>
                    <br/>
                    <p>A loan is where you borrow money, most likely from a bank or other financial 
                        institution, and agree to pay the amount back over a certain time. There is 
                        usually an amount of interest charged in addition to the amount borrowed. 
                        It is best to get financial advice before entering into any type of loan to 
                        make sure you understand all of the terms and conditions. You should consider 
                        the following questions before getting a loan:</p>
                    <ul>
                        <li>Do I need a Loan?</li>
                        <li>Do I have a stable job?</li>
                        <li>Do I have regular income?</li>
                        <li>What other expenses do I have to consider?</li>
                        <li>Can I afford the repayments on the loan?</li>
                        <li>Will I be able to keep up with the repayments if my work situation changes?</li>
                    </ul>
                    <p>The Financial Rights Legal Centre provides further information that you should read before 
                        you borrow money, or advice on what to do if you are <a href= 'https://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Cant-Pay-Loan.pdf'>struggling to pay your loan.</a></p>
                </div>)
                break;
        case 2: setLoan(
                <div>
                    <div id="answer2" class="answer answer2">
                        <p class="title">
                        <span class="fa-gavel-icon answer-icon">
                            <img src="~/Content/images/law.png" alt="law symbol" class="image" />
                        </span>Types of Debt
                    </p>
                <br />
                    <p class="subtitle">Credit Card Debt</p>
                    <p class="content">A credit card allows you to purchase things now and pay for them at a later time. It is important to avoid credit card debt as you are charged interest on your purchases. It is very easy to overspend or exceed the limit on your credit card if you don’t keep a careful track of your expenses. You should aim to at least make the minimum repayment on any or all credit cards you have each month. If you cannot make the minimum repayment you should pay off whatever you can and then speak with your credit card provider about any possible repayment arrangements. The Financial Rights Legal Centre provides the following factsheet relating to <a target="_blank" href="http://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Drowning-Credit-Cards1.pdf">credit card debt.</a></p>

                    <p class="subtitle">Phone Debt</p>
                    <p class="content">If you do not have a stable job, have little to no income or you have significant debt, it is not advisable to enter into a phone plan contract. Pre-paid mobile phones are available where you pre-pay a certain amount of 'credit' for your phone without having a contract. If you are struggling to pay your phone debt consult the Financial Rights Legal Centre factsheet on <a class="ng-scope" href="http://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Cant-Pay-Phone.pdf">phone debt</a></p>
                    <p class="content">or visit the <a target="_blank" href="https://www.tio.com.au/">Telecommunications Industry Ombudsman</a></p>
                    <p class="subtitle">Utility Debt – Electricity, Gas &amp; Water Bills</p>
                    <p class="content">If you find yourself in debt to a utility company you should contact the company and try to negotiate a repayment arrangement. Also inform the company that you are suffering financial hardship and ask that they don’t disconnect your services. For more information see the Financial Rights Legal Centre factsheet on <a class="ng-scope" href="http://financialrights.org.au/wp-content/uploads/2014/02/FRLC-Factsheet-Cant-Pay-Electricity1.pdf">electricity debt</a></p>
                    </div>
                </div>)
            break;
        default: 
            break;
    }
*/

    return (
        (!lang) ? (
        <div>
            <a href="#">What is a loan?</a>
            <a href="#">Types of Debt- what debt could I get into?</a>
            <button >Fines and Debt - what should I do?</button>
            <button >Letter of Demand - what is it?</button>
            <button >Statement of Claim - what is it?</button>
            <Link to='/Loan/Loan1' className='btn btn-light' component={Loan1} ></Link>
        </div>
        
    ) : (
        <div>
            <button >g</button>
            <button >Type</button>
            <button >FI do?</button>
            <button >Lettt?</button>
            <button >Statit?</button>
        </div>
    )
    )}

export default LoanHome
