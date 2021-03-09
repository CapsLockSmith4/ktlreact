import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Moving5 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Visa & Work
        </p>
        <br />

        <p class="content">If you were granted a student visa on or after 26 April 2008, you and any dependent family members who accompany you to Australia are generally permitted to work. However, you cannot start work until your course of study has commenced. During the term of study you are only permitted to work a maximum of 40 hours per fortnight. For more information, visit the <a href="http://www.border.gov.au/Trav/Stud/More/Work-conditions-for-Student-visa-holders">work conditions webpage</a> on the Department of Immigration and Border Protection website.</p>
    </div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            签证和工作
        </p>
        <br />

        <p class="content">
            如果你在 2008 年 4 月 26 日或之后获得学生签证, 你和任何陪同你到澳大利亚的家庭成员都是被允许工作的. 然而, 你不能在课程开始之前打工. 在开课期间你每两周总共最多只能工作 40 小时. 如果你想了解更多信息, 请你访问移民局及边境保护局网站的<a  href='http://www.border.gov.au/Trav/Stud/More/Work-conditions-for-Student-visa-holders'>"工作条件"的网页</a>.
        </p>
    </div>
    )
    )
}

export default Moving5