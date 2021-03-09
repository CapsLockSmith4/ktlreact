import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Scams1 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>What can I do if I have been scammed?
        </p>
        <br />

        <p class="content">
            ASIC’s Money Smart provides <a class="ng-scope" href="https://www.moneysmart.gov.au/scams/recovering-your-losses">detailed information to help you if you’ve been scammed</a>. If you’ve been scammed you should: act immediately, report it (to the police or other authority listed on the Money Smart website) and ensure you protect yourself from future scams.
</p>

        <p class="content">
            So that other people can be warned about and protected from future scams you can report what happened to you to the Australian Competition and Consumer Commission <a class="ng-scope" href="https://www.scamwatch.gov.au/">here</a>.
        </p>
    </div>

    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>在被骗后该怎么办？
        </p>
        <br />

        <p class="content">
            ASIC’s Money Smart 提供了<a class="ng-scope" href="https://www.moneysmart.gov.au/scams/recovering-your-losses">可以在您被骗后帮助您的详细信息</a>。如果被骗了，您应该：立即行动，向 Money Smart 网站上列出的警察或其他机构报告，然后确保自己以后免遭诈骗。
        </p>

        <p class="content">
            这样一来，其他人就可以收到警告，从而防止以后免遭此类诈骗，您可以在<a class="ng-scope" href="https://www.scamwatch.gov.au/">此处</a>向澳大利亚竞争和消费者委员会报告您的情况。
        </p>
    </div>
	)
	
	)
}

export default Scams1