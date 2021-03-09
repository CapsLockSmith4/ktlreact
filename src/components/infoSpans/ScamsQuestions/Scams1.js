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
                </span>What scams should I be aware of?
        </p>
        <br />

        <p class="content">
            Every year, many people in Australia are tricked by financial scams that can cost large amounts of money. The Australian Competition and Consumer Commission <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams">Scam Watch explains some of the most common scams</a>, including:
</p>

        <ul class="content-list">
            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/attempts-to-gain-your-personal-information">Identity theft</a> through hacking, calling your phone or emailing you to pretend to be a government or company official.
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/buying-or-selling">Consumer scams</a> like fake bills, fake products, premium phone services and fortune tellers.
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/dating-romance">Online dating</a> scams where potential companions ask for gifts or money.
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/fake-charities">Fake charities</a> requesting money.
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/jobs-employment/jobs-employment-scams">Fake jobs</a> and <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/jobs-employment/pyramid-schemes">pyramid schemes</a> that offer high returns for little effort.
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/investments">Investments</a> that seem (and are) too good to be true.
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/threats-extortion">Threats and blackmail</a> including online scams that lock your computer files or photograph you.
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/unexpected-money">Receiving unexpected money or winnings</a> like inheritance, scams asking for money to help them transfer you money, fake government rebates, and winning prizes in competitions you didn’t enter.
                </span>
            </li>

            <li>
                <span>
                    There are also <a class="ng-scope" href="https://www.moneysmart.gov.au/scams/superannuation-scams">scams which offer to let you access your superannuation early</a>.
                </span>
            </li>


        </ul>

        <p class="content">
            ASIC’s Money Smart website <a class="ng-scope" href="https://www.moneysmart.gov.au/scams/companies-you-should-not-deal-with">provides a list of unlicensed companies and fake authorities</a> that you can check if you’re suspicious.
        </p>
    </div>

    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>我应该注意哪些诈骗？
        </p>
        <br />

        <p class="content">
            每年，澳大利亚都有很多人遭受金融诈骗，这些诈骗会让人损失巨额资金。澳大利亚竞争和消费者委员会 (Australian Competition and Consumer Commission) 的 <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams">Scam Watch 就一些最常见的骗局做出了说明</a>，其中包括：
        </p>

        <ul class="content-list">
            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/attempts-to-gain-your-personal-information">盗窃身份</a>，通过黑客攻击、拨打电话或发送电子邮件的方法假冒政府官员或公司官员
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/buying-or-selling">消费者欺诈</a>，比如伪造的票据、假冒伪劣产品、收费电话服务和算命先生。
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/dating-romance">网络约会</a>骗局，潜在的同伴会索要礼物或金钱。
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/fake-charities">虚假慈善机构</a>，索要金钱。
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/jobs-employment/jobs-employment-scams">假招聘</a>和<a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/jobs-employment/pyramid-schemes">非法传销</a>，只需很少的努力就可以获得高回报。
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/investments">投资项目</a>，看起来（以及真的）好到令人难以置信。
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/threats-extortion">威胁和勒索</a>包括锁定您的计算机文件或拍摄您的照片的网络诈骗。
                </span>
            </li>

            <li>
                <span>
                    <a class="ng-scope" href="https://www.scamwatch.gov.au/types-of-scams/unexpected-money">收到意外的钱或奖金</a>，如遗产，诈骗犯会向您要钱表示要用来帮助转移您的金钱；虚假的政府减免，以及在没有参加的比赛中赢得奖品。
                </span>
            </li>

            <li>
                <span>
                    还有一些<a class="ng-scope" href="https://www.moneysmart.gov.au/scams/superannuation-scams">表示可以让您提前获得退休金的骗局</a>。
                </span>
            </li>


        </ul>

        <p class="content">
            ASIC’s Money Smart 网站<a class="ng-scope" href="https://www.moneysmart.gov.au/scams/companies-you-should-not-deal-with">提供了未经许可的公司和虚假机构的清单</a>，如有疑问，您可以查看。
        </p>
    </div>
	)
	
	)
}

export default Scams1