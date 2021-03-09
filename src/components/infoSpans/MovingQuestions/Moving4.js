import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Moving4 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Visa Conditions - do I have to comply with all conditions on my visa while studying?
        </p>
        <br />

        <p class="content">Yes. Always be aware of your visa conditions and ensure you always comply with them. Some <a href="http://www.studyinaustralia.gov.au/global/live-in-australia/visa-compliance">general tips for visa compliance</a> include:</p>


        <ul class='content-list'>
            <li><span>You must remain enrolled and satisfy class attendance conditions</span></li>


            <li><span>You must maintain the same qualification level or change the visa</span></li>


            <li><span>You must be able to support yourself financially</span></li>


            <li><span>You must not breach the working conditions of the visa</span></li>
        </ul>
        <p class="content"></p>
    </div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
                签证条件 － 在澳洲学习时,  我是否需要遵守签证的所有条款？
        </p>
        <br />

        <p class="content">
            是的. 需要了解你的签证条款, 并确保你一直遵守条款规定. 关于签证条款规定的<a  href='http://www.studyinaustralia.gov.au/global/live-in-australia/visa-compliance'>一些建议</a>包括: <ul class='content-list'><li>你必须在登记的课程中注册并维持足够的出勤率</li><li>变更成其他签证时, 你必须保持与现有签证具有相同的资格</li><li>你必须有充分的财务能力, 保证你在澳的学习与生活</li><li>你不能违反签证条款里的工作条件</li></ul>
        </p>
    </div>
    )
    )
}

export default Moving4