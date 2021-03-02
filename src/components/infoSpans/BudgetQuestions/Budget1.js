import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Budget1 = ({lang}) => {
    return (
        (!lang) ? (
                <div className="row">
                    <div id="answer" className="answer answer1">
                        <p className="title">
                            <span className="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" className="image" />
                                </span>How do I make a budget?
        </p>
        <br />

        <p className="content">
            Making and sticking to a budget is a great way to stay on top of your finances, have less money stress and get the things you want and need.
        </p>

        <p className="content">
            There are many excellent resources to help you start budgeting, including:
        </p>

        <ul className='content-list'>
            <li>
                <span>
                    ASIC’s Money Smart <a  href="https://www.moneysmart.gov.au/tools-and-resources/calculators-and-apps/budget-planner">'Budget Planner'</a>, and webpages on <a target="_blank" href="https://www.moneysmart.gov.au/managing-your-money/budgeting/how-to-do-a-budget">‘How to do a budget’</a> and <a target="_blank" href="https://www.moneysmart.gov.au/managing-your-money/budgeting/simple-ways-to-save-money">‘Simple ways to save money’</a>.
                </span>
            </li>

            <li>
                <span>
                    ASIC has also created two apps to help you budget: <a href="https://www.moneysmart.gov.au/tools-and-resources/calculators-and-apps/mobile-apps/trackmyspend">TrackMySPEND</a> to monitor your spending habits and <a  href="https://www.moneysmart.gov.au/tools-and-resources/calculators-and-apps/mobile-apps/trackmygoals">TrackMYGOALS</a> to track your saving goals.
                </span>
            </li>

            <li>
                <span>
                    The Australian Government’s Business website has budgeting information for businesses <a  href="https://www.business.gov.au/finance/accounting/cash-flow-and-budgeting/how-to-create-a-budget">here</a> and provides a range of useful <a  href="https://www.business.gov.au/planning/templates-and-tools" > templates for small businesses. </a>
                </span>
            </li>
        </ul>
    </div>

</div>
    ) : (
        <div className="row">
        <div id="answer" className="answer answer1">
            <p className="title">
                <span className="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' className="image"/>
                    </span>如何编制预算？
        </p>
        <br />

        <p className="content">
            编制并坚守预算是掌握财务状况、减少资金压力以及达到预期和满足需求的好方法。
        </p>

        <p className="content">
            可以帮助您着手编制预算的优秀资源有很多，包括：
        </p>

        <ul className='content-list'>
            <li>
                <span>
                    ASIC’s Money Smart“<a href="https://www.moneysmart.gov.au/tools-and-resources/calculators-and-apps/budget-planner">预算规划人</a>”，以及“<a  href="https://www.moneysmart.gov.au/managing-your-money/budgeting/how-to-do-a-budget">如何编制预算</a>”和“<a  href="https://www.moneysmart.gov.au/managing-your-money/budgeting/simple-ways-to-save-money">简单的省钱方法</a>”网页。
                </span>
            </li>

            <li>
                <span>
                    ASIC 还创建了两个应用程序来帮助您编制预算：<a  href="https://www.moneysmart.gov.au/tools-and-resources/calculators-and-apps/mobile-apps/trackmyspend">TrackMySPEND</a>，用以监控消费习惯；以及 <a  href="https://www.moneysmart.gov.au/tools-and-resources/calculators-and-apps/mobile-apps/trackmygoals">TrackMYGOALS</a>，用于追踪储蓄目标。
                </span>
            </li>

            <li>
                <span>
                    Australian Government’s Business 网站在<a href="https://www.business.gov.au/finance/accounting/cash-flow-and-budgeting/how-to-create-a-budget">此处</a>提供企业编制预算的信息，并为<a  href="https://www.business.gov.au/planning/templates-and-tools">小企业提供一系列有用的模板</a>。
                </span>
            </li>
        </ul>
    </div>

</div>
    ));
}

export default Budget1