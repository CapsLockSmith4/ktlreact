import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Working1 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Tax & Superannuation - what do I need to know?
	</p>
    <br />


	<p class='subtitle'>Tax</p>


	<p class="content">To work in Australia you are required to have a Tax File Number (TFN). A TFN is a nine-digit number issued by the Australian Government that must be used by individuals in order to pay tax. You will only ever have one TFN but you will need to complete a Tax File Number Declaration Form for every new job when you start. This form provides your TFN to your employer, which enables them to pay the required tax to the Australian Tax Office on your behalf.</p>


	<p class="content">You will need to <a  href="https://www.ato.gov.au/Individuals/Tax-file-number/Apply-for-a-TFN/">apply for a TFN</a> through the Australian Taxation Office (ATO) website. It may take up to 28 days for your application to be processed. The ATO also provides further information about <a class="ng-scope" href="https://www.ato.gov.au/individuals/working/working-as-an-employee/">working in Australia</a>.</p>


	<p class='subtitle'>Superannuation</p>


	<p class="content">If you are over 18 years of age and earning $450 or more before tax in a month, your employer must contribute 9.5% of your wages into your <a  href="https://www.ato.gov.au/Individuals/Super/Getting-your-super-started/">super fund</a>. This contribution will increase to 12% by 2019.</p>


	<p class="content">Depending on the field in which you are working, your employer may select your superannuation fund for you or you may have the option to <a  href="https://www.ato.gov.au/Individuals/Super/Getting-your-super-started/Employees/">choose your own fund</a>.</p>


	<p class="content">Your employer must contribute superannuation on your behalf even if you are a temporary resident of Australia. They must do this whether you are a full-time, part-time or casual employee. Temporary residents departing Australia can make a claim for any superannuation paid by their employer using the Departing Australia Superannuation Payment (DASP) online application system.</p>
</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            税收和退休金 - 我需要知道些什么?
        </p>
        <br />

        <p class="content">
            在澳大利亚工作, 你需要一个税务档案号码. 税务档案号码是一组由澳大利亚 政府发放的是九位数税号. 该号码必须由个人使用以支付税收. 您的一生只会 有一个税号, 并且每一次当你开始新的工作时你需要重新填写纳税申报表. 此 表格向雇主提供了您的税号, 并在您每次收到工资前从扣去相应税款.
        </p>

        <p class="content">
            您需要通过澳大利亚税务局网站申请<a  href='https://www.ato.gov.au/Individuals/Tax-file-number/Apply-for-a-TFN/'>税务档案号码</a>并且申请时长可能需要 28 天. 税务局网站也提供了关于<a  href='https://www.ato.gov.au/individuals/working/working-as-an-employee/'>在澳大利亚工作</a>的更多信息.
        </p>

        <p class="content">
            如果您超过 18 岁并且在一个月内税前收入超过 450 澳元, 那么您的雇主必须贡献您的工资的 9.5%到您的退<a  href='https://www.ato.gov.au/Individuals/Super/Getting-your-super-started/'>休基金中</a>. 该比率将在 2019 年增加至 12%.
        </p>

        <p class="content">
            根据您工作的领域, 您的雇主会为您选择您的养老基金或者你有可能<a  href='https://www.ato.gov.au/Individuals/Super/Getting-your-super-started/Employees/'>会选择你的养老基金</a>.
        </p>

        <p class="content">
            即使您是澳大利亚的临时居民, 您的雇主也必须为您提供退休金. 无论您是全职、 非全职还是临时雇员, 他们都要为您提供退休金. 当临时居民在离开澳大利亚时可通过澳大利亚离境退休金(DASP)线上申请系统领取雇主为他们支付的退休金福利.
        </p>
    </div>
	)
	
	)
}

export default Working1