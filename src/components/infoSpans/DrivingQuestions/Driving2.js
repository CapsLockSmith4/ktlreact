import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Driving2 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>How to get a NSW Licence
        </p>
        <br />


        <p class="content">In order to apply for a NSW licence you must attend a RMS registry or service centre in person and comply with the <a class="ng-scope" href="http://www.rms.nsw.gov.au/roads/licence/moving-to-nsw.html">following requirements</a></p>


        <ul class='content-list'>
            <li><span>Take your overseas licence with you</span></li>


            <li><span>Provide proof of your identity and residential address</span></li>


            <li>
                <span>Provide proof of your Australian permanent residency</span>

                <ul class="content-list">
                    <li>
                        <span>If you can’t provide this you will be issued with a Temporary Overseas Visitor licence</span>
                    </li>
                </ul>
            </li>


            <li><span>Complete the Licence Application Form</span></li>


            <li><span>Pass an eyesight test</span></li>


            <li><span>Pass a knowledge test for each class of licence you require unless you are exempt</span></li>


            <li><span>Pass a driving or riding test for each class of licence you require unless you are exempt</span></li>


            <li><span>Pay the relevant licence fee</span></li>
        </ul>

        <br />

        <p class="content">In NSW, there are 4 classes of licence:</p>


        <ul class='content-list'>
            <li><span>Learner Licence</span></li>


            <li><span>Provisional P1 Licence</span></li>


            <li><span>Provisional P2 Licence</span></li>


            <li><span>Unrestricted Licence</span></li>
        </ul>

        <br />

        <p class="content">If you are a permanent resident or you hold a permanent visa RMS stipulates the NSW equivalent for overseas licences:</p>


        <ul class='content-list'>
            <li><span>If you hold a current learner overseas licence the NSW equivalent is a learner driver licence</span></li>


            <li><span>If you have held an overseas licence for less than 12 months the NSW equivalent is a Provisional P1 licence</span></li>


            <li><span>If you have held an overseas licence for over 12 months but less than 3 years the NSW equivalent is a Provisional P2 licence</span></li>


            <li><span>If you have held an overseas licence for over 3 years the NSW equivalent is an unrestricted licence</span></li>
        </ul>

        <br />

        <p class="content">You are required to comply with the rules for each licence classification which are available on the RMS website. If you hold both an overseas licence and a NSW licence you are required to comply with all of the NSW licence requirements.</p>
    </div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} className="image"/>
                </span>
            驾照 - 我怎样能取得
        </p>
    <br />

        <p class="content">
        您必须亲临道路和海事服务注册处或服务中心并符合<a href='http://www.rms.nsw.gov.au/roads/licence/moving-to-nsw.html' >下列要求</a>, 才能申请新南 威尔士州的驾照:  
            <ul class='content-list'>
                <li>携带您的海外驾照</li>
                <li>提供您身份和住址的证明</li>
                <li>提供你澳大利亚永久居民身份证明
                    <ul class='content-list'>
                        <li>如果你不能提供这一项, 你会将被授予一个临时海外访客驾照</li>
                    </ul>
                </li>
                <li>完成驾照申请表格</li>
                <li>通过视力测试</li>
                <li>通过您申请的每个驾照类别的知识测试, 除非被豁免</li>
                <li>通过您申请的每个驾照类别的驾驶测试或驾驶摩托车测试, 除非被豁免</li>
                <li>支付相关的驾照费用</li>  
            </ul>
        </p>

        <p class="content">
        新南威尔士州共有4种类别的驾照: <ul class='content-list'><li>初学者驾照</li><li>临时的P1驾照</li><li>临时的 P2驾照</li><li>无限制的驾照</li></ul>
        </p>

        <p class="content">
        如果您是一位永久居民或您持有一个永久性签证, RMS 规定在新南威尔士授予的驾照与您的海外驾照等效同级: <ul class='content-list'><li>如果您正持有一个海外初学者驾照, 在新南威尔士州相当于是一个初学者驾照</li><li>如果您持有您的海外驾照不足 12 个月, 在新南威尔士州则相当于是一个临时的 P1 驾照</li><li>如果您已持有海外驾照超过 12 个月, 但不超过 3 年, 在新南威尔士州则等同于是一个临时的 P2 驾照</li><li>如果你持有海外驾照超过 3 年, 在新南威尔士州则相当于是一个非限制 性驾照</li></ul>
        </p>

        <p class="content">
        您必须遵守在 RMS 网站上列出的每一个驾照分类的对应规则. 如果您同时持有一个海外驾照和新南威尔士州驾照, 你则必须遵守所有对的新南威尔士州驾 照的要求.
        </p>
    </div>
	)
	
	)
}

export default Driving2
