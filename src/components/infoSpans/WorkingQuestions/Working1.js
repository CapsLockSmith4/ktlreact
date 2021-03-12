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
                </span>Types of Employees
	</p>
    <br />

	<p class="content">There are different <a href="http://www.fairwork.gov.au/employee-entitlements/types-of-employees">types of employees</a>. The type of employee you are determines your rights and entitlements. The categories of employees are:</p>


	<ul class='content-list'>
		<li><span>Full-time - permanent employees who work 35-38 hours per week on average.</span></li>


		<li><span>Part-time - employees who work regular hours each week but less hours than a full time employee. Part-time employees may be employed on a permanent basis or on a fixed term contract. Part-time employees have the same minimum entitlements as full-time employees including sick leave and holiday leave. These entitlements are calculated according to the hours worked per week.</span></li>


		<li><span>
			Casual - employees who work irregular hours each week with no guaranteed hours of work. Casual employees do not get entitlements such as paid leave for sickness or holidays, but they do receive a ‘casual loading’ so they are paid at a higher hourly rate than part-time or full-time employees.

			<ul class='content-list'>
				<li><span>Shift workers</span></li>


				<li><span>Daily and weekly hire</span></li>


				<li><span>Probation</span></li>


				<li><span>Outworkers</span></li>
			</ul>
		</span></li>
	</ul>
	<u>IF YOU ARE ON A STUDENT VISA YOU ARE USUALLY ONLY ALLOWED TO WORK A MAXIMUM OF 40 HOURS PER FORTNIGHT (TWO WEEK PERIOD).</u>
</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            就业类别
        </p>
        <br />

        <p class="content">
            这里有多种不同的<a href='http://www.fairwork.gov.au/employee-entitlements/types-of-employees'>就业类型</a>. 雇员工作的类型决定了雇员享有的权利和待遇. 这些工作类别有： <ul class='content-list'><li>全日制就业 - 指每周平均工作 35-38 小时的全职雇员.</li><li>非全日制就业：指雇员每周定期工作, 但工作时长小于全职雇员. 非全日制工作员工可能被长期雇佣或者按照一个固定时长合同雇佣. 非全日制雇员享有与全日制雇员同等的最低福利, 包括病假和带薪休假. 这些福利根据每周工作时长计算.</li><li>临时就业 - 指员工每周不定时工作并且其工作时长不受到保证. 临时就业的雇员不享受病假或带薪休假福利但他们享有特殊临时工津贴, 即, 临时就业员工比全日制员工和非全日制员工工资更高.<ul class='content-list'><li>轮班工人</li><li>每日和每周租用员工</li><li>试用期</li><li>外工</li></ul></li></ul><u>请注意 - 如果你是学生签证, 在两周以内你通常只允许你工作不超过四十小时.</u>
        </p>
    </div>
	)
	
	)
}

export default Working1