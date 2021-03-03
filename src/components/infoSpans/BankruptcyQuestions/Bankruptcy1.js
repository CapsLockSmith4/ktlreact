import React from 'react'
import lawIcon from '../../images/law.png'
//import '../../../styles.css'

const Bankruptcy1 = ({lang}) => {
    return (
        (!lang) ? (
                <div>
                    <div >
                        <p className="title">
                            <span className="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" className="image" />
                                </span>What is bankruptcy?
        </p>
        <br />

        <p className="content">
            Bankruptcy is a process by which you are declared to be unable to pay your debts. You can voluntarily declare bankruptcy or, in some circumstances, a person you owe money to can apply to make you bankrupt. There are significant costs and benefits to bankruptcy, so any decisions you make should be taken seriously. <a className="ng-scope" href="https://www.moneysmart.gov.au/managing-your-money/managing-debts/trouble-with-debt/bankruptcy">ASIC’s ‘Money Smart’ website</a> provides simple information about bankruptcy. You should obtain legal advice if you are considering becoming bankrupt.
        </p>
    </div>

</div>
    ) : (
        <div >
        <div >
            <p className="title">
                <span className="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' className="image"/>
                    </span>什么是破产？
        </p>
        <br />

        <p className="content">
            破产是一个声明您无法偿还债务的过程。您可以自行宣布破产，或者在某些情况下，您欠钱的对象可以申请让您破产。破产会产生巨大的成本和收益，因此不论做出何种决定都应经过慎重考虑。<a className="ng-scope" href="https://www.moneysmart.gov.au/managing-your-money/managing-debts/trouble-with-debt/bankruptcy">ASIC’s ‘Money Smart’ 网站</a>提供有关破产的简单信息。如果考虑宣布破产，您应该寻求法律咨询。
        </p>
    </div>

</div>
    ));
}

export default Bankruptcy1
