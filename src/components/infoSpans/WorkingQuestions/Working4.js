import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Working4 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Discrimination - what if I face discrimination at work? What if I am unfairly dismissed?
    </p>
    <br />

    <p class="subtitle">Discrimination</p>


    <p class="content">It is <a  href="http://www.fairwork.gov.au/employee-entitlements/protections-at-work/protection-from-discrimination-at-work">unlawful for an employer to discriminate against an employee</a> who is full-time, part-time, casual, fixed-term, probationary, an apprentice or a trainee. Unlawful discrimination in the workplace occurs when an employer takes adverse action against an employee based on an employee’s race, sex, sexual orientation, age, physical or mental disability, marital status, family or carer’s responsibilities, language, pregnancy, religion, political opinion, national extraction or social origin. It is also generally unlawful for an employer to refuse to hire you based on one of the above attributes. For more information, see the <a  href="http://www.fairwork.gov.au/about-us/policies-and-guides/fact-sheets/rights-and-obligations/workplace-discrimination#unlawful-workplace-discrimination">workplace discrimination fact sheet</a> provided by the Fair Work Ombudsman.</p>


    <p class="content">If you believe you have been unlawfully discriminated against you should contact the Australian Human Rights Commission on 1300 369 711 or visit the <a  href="http://www.antidiscrimination.justice.nsw.gov.au/">Anti-Discrimination Board of NSW website</a>. You can also lodge a complaint with the Fair Work Commission but it must be within 21 days of your dismissal. If you need help to make a claim call the Fair Work Infoline on 13 13 94 or visit their <a  href="http://www.fairwork.gov.au/how-we-will-help/how-we-help-you/help-resolving-workplace-issues/working-with-you-to-resolve-workplace-issues">website</a>. To find out more about matters involving termination contact the Fair Work Commission on 1300 799 675.</p>


    <p class='subtitle'>Bullying</p>


    <p class="content"><a  href="http://www.fairwork.gov.au/employee-entitlements/bullying-and-harassment">Bullying or harassment</a> in the workplace may not constitute unlawful discrimination. However, workplace bullying may be considered unlawful under work health and safety laws. If you feel you have been bullied or harassed you may be <a  href="https://www.fwc.gov.au/resolving-issues-disputes-and-dismissals/workplace-issues-disputes/anti-bullying/anti-bullying-am-i">eligible</a> to apply to the Fair Work Commission for an order to stop the bullying.</p>


    <p class='subtitle'>Unfair Dismissal</p>


    <p class="content"><a  href="http://www.fairwork.gov.au/ending-employment/unfair-dismissal">Unfair dismissal</a> is where an employer terminates an employee’s employment in a way that is “harsh, unjust or unreasonable”.</p>


    <p class="content">If you feel you have been unfairly dismissed you must lodge an application for unfair dismissal with the Fair Work Commission within 21 days of the date on which your dismissal takes effect.</p>


    <p class="content"><a  href="http://www.fairwork.gov.au/about-us/policies-and-guides/fact-sheets/minimum-workplace-entitlements/notice-of-termination-and-redundancy-pay">Minimum notice periods</a> apply when an employer dismisses an employee. Notice periods do not apply to casual employees, fixed term contract employees, seasonal workers, those who are dismissed for serious misconduct (e.g. theft, fraud or assault) or those employed for a training period. An apprentice is entitled to notice of termination unless they are only employed for a set period of time or task or they are fired for serious misconduct. For more information, visit the <a  href="https://www.fwc.gov.au/resolving-issues-disputes-and-dismissals/dismissal-termination-redundancy/what-unfair-dismissal">Fair Work Commission website</a>.</p>
</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            歧视 - 我该做什么如果我在工作中面临歧视呢? 我该做什么如果我被不公平地解雇呢?
        </p>
        <br />

        <p class="content">
            不管你是一名全日制、 非全日制, 临时、 固定期限、 试用期、 学徒或实习生, <a  href='http://www.antidiscrimination.justice.nsw.gov.au/'>雇主歧视你是不合法的</a>. 当雇主因为你的年龄、 种族、 民族、 性别、 性倾向、 残 障、 信仰、 婚姻状况、 就业状况或政治观点对你采取不利措施, 就被定义为工 作场所发生非法歧视. 如果雇主拒绝雇用上述属性之一的员工就是不合法的行 为, 如果你想获得更多反工作场所歧视的信息, <a  href='http://www.fairwork.gov.au/about-us/policies-and-guides/fact-sheets/rights-and-obligations/workplace-discrimination#unlawful-workplace-discrimination'>请参见公平工作监察专员提供的情况说明书</a>.
        </p>

        <p class="content">
            如果你认为你已经被非法歧视, 你应该致电澳大利亚人权委员会 1300 369 711, 或者访问新南威尔士州<a  href='http://www.antidiscrimination.justice.nsw.gov.au/Pages/adb1_antidiscriminationlaw/adb1_antidiscriminationlaw.aspx'>反歧视委员会网站</a>, 你也可以向公平工作委员会投诉, 但它必须发生在你解雇的 21 天内. 如果你需要索赔, 请致电公平工作委员会热线 13 13 94 或访问他们的<a  href='http://www.fairwork.gov.au/how-we-will-help/how-we-help-you/help-resolving-workplace-issues/working-with-you-to-resolve-workplace-issues'>网站</a>. 如果你想了解更多有关终止合同的事宜, 请致 电公平工作委员会 1300 799 675.
        </p>

        <p class="content">
            <a  href='http://www.fairwork.gov.au/employee-entitlements/bullying-and-harassment'>骚扰和欺凌行</a>为在工作场所也许不构成非法歧视, 然而, 根据工作健康与安全条例, 工作场所欺凌可能被认为是非法的. 如果你觉得你被别人骚扰和欺凌, 你<a  href='https://www.fwc.gov.au/resolving-issues-disputes-and-dismissals/workplace-issues-disputes/anti-bullying/anti-bullying-am-i'>有资格向</a>公平工作委员会申请命令停止欺负.
        </p>

        <p class="content">
            <a  href='http://www.fairwork.gov.au/ending-employment/unfair-dismissal'>不公平解雇</a>是雇主以一种 "苛刻的、不公正的或不合理的" 的方式终止雇员就业的行为.
        </p>

        <p class="content">
            如果你觉得你被不公正解雇, 你必须向公平工作委员会提出一个不公平解雇的申请在你被解雇生效之日起的 21 天内.
        </p>

        <p class="content">
            当一个雇主解雇雇员需要提出<a  href='http://www.fairwork.gov.au/about-us/policies-and-guides/fact-sheets/minimum-workplace-entitlements/notice-of-termination-and-redundancy-pay'>最短通知期限</a>, 通知期限不适用于临时雇员, 固定期限的合同雇员, 季节性工人, 因严重不当行为而被开除的人 (例如: 盗窃、 诈骗或攻击) 或受雇于训练期的人. 学徒有权享有解雇通知期, 除非他们只受雇于一段时间, 或是因为严重的不当行为而被解雇. 如果你想更多信息, 请访问<a  href='https://www.fwc.gov.au/resolving-issues-disputes-and-dismissals/dismissal-termination-redundancy/what-unfair-dismissal'>公平工作委员会网站</a>.
        </p>
    </div>
	)
	
	)
}

export default Working4