import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Driving1 = ({lang}) => {
    return (
        (!lang) ? (
                    <div  >
                        <p className="title">
                            <span className="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" className="image" />
                                </span>Licence - do I need one?
		</p>
        <br />


		<p class="content">
			Yes, you must have a licence if you want to drive while in NSW.
		</p>


		<p class="content">
			Overseas drivers who are visiting NSW and do not hold a permanent visa (a student on a student visa) can drive on their valid overseas licence as long as you comply with the following conditions as stated on the NSW Roads and Maritime Services (RMS) website:
		</p>


		<ul class='content-list'>
			<li><span>You remain a temporary overseas visitor</span></li>


			<li><span>Your overseas licence remains current</span></li>


			<li><span>You have not been disqualified from driving in NSW or anywhere else</span></li>


			<li><span>You have not had your licence suspended or cancelled or your visiting driving privileges withdrawn</span></li>
		</ul>
		<p class="content">
			While driving in NSW a <a href="http://www.rms.nsw.gov.au/roads/licence/visiting-nsw.html">visiting driver</a> must carry their overseas licence with them at all times. If the text on your licence is written in a language other than English, you must also have a certified English translation or an International Driving Permit and carry them with your licence at all times. These rules act as an exemption from having to hold a NSW drivers licence.
		</p>
		<p class="content">
			If you are a permanent Australian resident or you hold a permanent visa you are not classed as a ‘visitor’. You are then only permitted to drive on your current overseas licence for a maximum of 3 months. After 3 months <a class="ng-scope" href="http://www.rms.nsw.gov.au/roads/licence/moving-to-nsw.html">you must apply for a NSW licence</a> if you want to keep driving in NSW.
		</p>
		<p class="content">If you apply for a NSW licence you must comply with the various rules as stipulated by the RMS. Please note if you have previously taken out a NSW drivers licence, other rules may apply.</p>
	</div>


    ) : (
        <div >
            <p className="title">
                <span className="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' className="image"/>
                    </span>
            驾照 - 我需要有驾照吗?
        </p>
    <br />

        <p class="content">
        是的, 如果你想在新南威尔士州中开车你必须有驾照.
        </p>

        <p class="content">
        前往新南威尔士州的海外司机在不持有永久签证 (持有学生签证的学生) 的情况下可以使用他们原有的海外驾照驾驶, 只要其满足新南威尔士州道路和海事局(RMS)网站上列出的条款: <ul class='content-list'><li>您仍是临时海外访客身份</li><li>您的海外驾照没有过期</li><li>您并没有被取消在新南威尔士或其他地方驾驶的资格</li><li>您的驾照没有被暂扣或者吊销或者您的驾驶资格被取消</li></ul>
        </p>

        <p class="content">
        在新南威尔士州驾驶时, <a href='http://www.rms.nsw.gov.au/roads/licence/visiting-nsw.html' >来访的驾驶员</a>必须随时携带其海外驾照如果您的驾照并不是英文版本而是其他语言, 您则必须在原来携带您海外驾照的基础上随时携带一份经过认证承认的英文翻译件或者国际驾照. 新南威尔士州驾照持有人对以上条款不适用.
        </p>

        <p class="content">
        如果您是澳大利亚永久居民或者您持有不属于 "访客"类的永久签证. 您则只能使用当前驾照驾驶不超过三个月的时长. 三个月后, 您如果想继续在新南威尔士驾驶, <a  href='http://www.rms.nsw.gov.au/roads/licence/moving-to-nsw.html' >您则必须申请一个新南威尔士的驾照</a>.
        </p>

        <p class="content">
        如果您申请新南威尔士的驾照, 您必须遵守道路和海事服务的各种规则. 请注意, 如果您之前曾持有新南威尔士的驾照, 规则会有所不同.
        </p>
    </div>

    ));
}

export default Driving1
