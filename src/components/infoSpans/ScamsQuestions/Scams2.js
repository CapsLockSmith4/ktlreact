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
                </span>How can I avoid getting scammed?
        </p>
        <br />

        <p class="content">
            The Scam Watch website explains some of the way you can protect yourself against these scams and the signs you should watch out for. ASIC’s Money Smart website also has <a class="ng-scope" href="https://www.moneysmart.gov.au/scams/avoiding-scams">tips on how to protect yourself</a>.
        </p>
	</div>

    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>如何避免被骗？
        </p>
        <br />

        <p class="content">
            Scam Watch 网站列出了一些保护自己免遭这些骗局的方法以及应该注意的一些迹象。ASIC’s Money Smart 网站<a class="ng-scope" href="https://www.moneysmart.gov.au/scams/avoiding-scams">给出了如何保护自己的方法</a>。
        </p>
    </div>
	)
	
	)
}

export default Scams1