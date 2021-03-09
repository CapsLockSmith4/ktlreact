import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Moving3 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Student Insurance - do I need it while I am studying in Australia?
        </p>
        <br />

        <p class="content">The <a  href="http://www.studyinaustralia.gov.au/">Study in Australia website</a> has extensive information for students studying in Australia. Topics that are covered include arriving in Australia, health and safety, visa information, insurance, accommodation and many other useful tips. The website also contains several links to other relevant websites.</p>


        <p class="content">International students must have <a  href="http://www.health.gov.au/internet/main/Publishing.nsf/Content/Overseas+Student+Health+Cover+FAQ-1#insurersofferoshc">Overseas Student Health Cover</a> (OSHC) to study in Australia. OSHC includes coverage for visits to the doctor, some hospital treatment, ambulance cover and limited pharmaceuticals (medicines). For more details, visit the <a href="https://www.newcastle.edu.au/international/while-you-are-here/health,-safety-and-wellbeing/oshc">University of Newcastle OSHC webpage</a>.</p>


        <p class="content">For general information about other insurance such as private health insurance and car insurance, visit the <a  href="http://www.studyinaustralia.gov.au/global/live-in-australia/insurance">Study in Australia insurance webpage</a>.</p>
    </div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
                学生保险 - 我在澳大利亚留学时需要办理保险吗?
        </p>
        <br />

        <p class="content">
            "<a  href='http://www.studyinaustralia.gov.au/'>在澳大利亚学习</a>"网站. 为在澳大利亚学习的留学生提供了丰富的信息. 内容包括抵达澳大利亚, 健康和安全, 签证信息, 保险, 住宿等, 及其他许多有用的小贴士. 该网站还包含了几个其他相关网站的链接.
        </p>

        <p class="content">
            留学生在澳大利亚学习时, 必须购买<a href='http://www.health.gov.au/internet/main/Publishing.nsf/Content/Overseas+Student+Health+Cover+FAQ-1#insurersofferoshc'>留学生健康保险</a>(OSHC), 保险包括门诊, 一些住院治疗, 紧急救护及购买一些药物. 如果你想获得更多的细节, 请访问<a  href='https://www.newcastle.edu.au/international/while-you-are-here/health,-safety-and-wellbeing/oshc'>纽卡素大学留学生健康保险网页</a>.
        </p>

        <p class="content">
            如果你想了解其他保险, 如私人健康保险和汽车保险这类信息, 请你访问<a  href='http://www.studyinaustralia.gov.au/global/live-in-australia/insurance'>"在澳大利亚学习"网站的保险网页</a>.
        </p>
    </div>
    )
    )
}

export default Moving3