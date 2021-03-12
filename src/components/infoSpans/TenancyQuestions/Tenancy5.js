import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Tenancy5 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
            </span>Disputes - what do I do?
		</p>
        <br />

		<p class='content'>
			It is possible for <a  href="http://www.realestate.com.au/blog/how-to-deal-with-a-problem-or-dispute/">problems or disputes</a> to arise during your tenancy. They may be minor or quite serious. Potential issues include:

			<ul class='content-list'>
				<li><span>
					<a  href="http://www.tenants.org.au/factsheet-04-rent-increases">Change in rent</a> – see Tenants NSW Factsheet 04
				</span></li>


				<li><span>
					<a  href="http://www.tenants.org.au/factsheet-10-landlord-ends-agreement">Unfair eviction</a> – see Tenants NSW Factsheet 10
				</span></li>


				<li><span>
					<a  href="http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners/Renting_a_home/Ending_a_tenancy/Getting_your_bond_back.page">No return of bond</a> – see the Department of Fair Trading
				</span></li>


				<li><span>
					<a  href="http://www.tenants.org.au/factsheet-08-access-and-privacy">Privacy</a> – see Tenants NSW Factsheet 08
				</span></li>


				<li><span>
					<a  href="http://www.tenants.org.au/factsheet-06-repairs-and-maintenance">General repairs and maintenance</a> are not carried out – see Tenants NSW Factsheet 06
				</span></li>


				<li><span>
					<a  href="http://www.tenants.org.au/factsheet-06-repairs-and-maintenance">Urgent repairs and maintenance</a> are not carried out – see Tenants NSW Factsheet 06
				</span></li>
			</ul>

		</p>
		<p class="content">There are several options for resolving your disputes:</p>
		<p class='subtitle'> Contact the Tenants Advice and Advocacy Service (TAAS)</p>
		<p class='content'>
			<ul class='content-list'>
				<li><span>
					<a  href="https://www.tenants.org.au/taas/htaas">Hunter Tenants Advice and Advocacy Service</a>
				</span></li>


				<li><span>Phone: 0249 697 666</span></li>


				<li><span>Free Call: 1800 654 504</span></li>


				<li><span>Tenants Advice Line: 1800 251 101</span></li>
			</ul>
		</p>
		<p class='subtitle'>Contact the University Legal Centre</p>
		<p class='content'>
			<ul class='content-list'>
				<li><span>
					<a  href="https://www.newcastle.edu.au/about-uon/governance-and-leadership/faculties-and-schools/faculty-of-business-and-law/newcastle-law-school/the-university-of-newcastle-legal-centre">University of Newcastle Legal Centre (UNLC)</a>
				</span></li>


				<li><span>Phone: 0249 218 666</span></li>


				<li><span>The UNLC conducts free legal advice clinics during University Semesters</span></li>
			</ul>
		</p>
		<p class='subtitle'>Contact the NSW Civil and Administrative Tribunal (NCAT)</p>
		<p class='content'>
			<ul class='content-list'>
				<li><span>
					<a  href="http://www.ncat.nsw.gov.au">NCAT</a> is an independent body which determines disputes between tenants and landlords. The decisions made by NCAT tribunal members are legally binding on the parties
				</span></li>


				<li><span>Phone: 1300 006 228</span></li>


				<li><span>
					For more information see the <a  href="http://www.tenants.org.au/factsheet-11-nsw-civil-and-administrative-tribunal">NCAT fact sheet</a> prepared by Tenants NSW.
				</span></li>
			</ul>
		</p>
		<p class='subtitle'>Contact NSW Fair Trading</p>
		<p class='content'>
			<ul class='content-list'>
				<li><span>
					The <a  href="http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners.page">Department of Fair Trading</a> provides useful information and advice for current and prospective tenants, as well as agents and landlords.
				</span></li>


				<li><span>Phone: 13 32 20</span></li>
			</ul>
		</p>
	</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            发生纠纷，我应该做什么?
        </p>
        <br />

        <p class="content">
            在你的租约中可能出现的<a  href='http://www.realestate.com.au/blog/how-to-deal-with-a-problem-or-dispute/'>问题或纠纷</a>, 他们可能是轻的或严重的, 潜在的问题包括: <ul class='content-list'><li><a  href='http://www.tenants.org.au/factsheet-04-rent-increases'>租金变化</a> - 参见《新南威尔士州租户情况说明书 04》</li><li><a  href='http://www.tenants.org.au/factsheet-10-landlord-ends-agreement'>不公平的逐出</a> - 参见《新南威尔士州租户情况说明书 10》</li><li><a  href='http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners/Renting_a_home/Ending_a_tenancy/Getting_your_bond_back.page'>不归还押金</a> - 参见《公平交易部》</li><li><a  href='http://www.tenants.org.au/factsheet-08-access-and-privacy'>隐私</a> - 参见《新南威尔士州租户情况说明书 08》</li><li><a  href='http://www.tenants.org.au/factsheet-06-repairs-and-maintenance'>维修和保养无进行</a> - 参见《新南威尔士州租户情况说明书 06》</li><li><a  href='http://www.tenants.org.au/factsheet-06-repairs-and-maintenance'>紧急维修及保养无进行</a> - 参见《新南威尔士州租户情况说明书 06》</li></ul>
        </p>

        <p class="content">
            解决你的争端有几种选择：
        </p>

        <p class="content">
            <ul class='content-list'><li><a  href='https://www.tenants.org.au/taas/htaas'>猎人租户咨询和宣传服务</a></li><li>电话: 0249 697 666</li><li>免费通话: 1800 654 504</li><li>住户咨询热线: 1800 251 101</li></ul>
        </p>

        <p class="content">
            <ul class='content-list'><li><a  href='https://www.newcastle.edu.au/about-uon/governance-and-leadership/faculties-and-schools/faculty-of-business-and-law/newcastle-law-school/the-university-of-newcastle-legal-centre'>纽卡斯尔大学法律中心 (UNLC)</a></li><li>电话: 0249 218 666</li><li>纽卡素大学法律中心在大学学期举办的免费法律咨询</li></ul>
        </p>

        <p class="content">
            <ul class='content-list'><li><a  href='http://www.ncat.nsw.gov.au'>NCAT</a>是一个独立的机构力图解决房客和房东之间的纠纷, 决定是由NCAT仲裁庭成员作出的具有法律约束力.</li><li>电话: 1300 006 228</li><li>更多信息参见《新南威尔士州 <a  href='http://www.tenants.org.au/factsheet-11-nsw-civil-and-administrative-tribunal'>NCAT 情况说明书</a>》.</li></ul>
        </p>

        <p class="content">
            <ul class='content-list'><li><a  href='http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners.page'>公平交易委员会</a>为目前的和未来的租户提供了有用的信息和建议, 以及中介和业主.</li><li>电话: 13 32 20</li></ul>
        </p>
    </div>
	)
	
	)
}

export default Tenancy5