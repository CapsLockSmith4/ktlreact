import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Future1 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>What is a Will?
        </p>
        <br />
        
        <p class="content">A Will is a legal document that sets out your wishes for the distribution of your assets after your death.</p>
        <br />
        <p class="subtitle">What if I die without a Will?</p>
        <p class="content">
            If you die without a Will, there will be no record of who you wanted to be your beneficiaries.
            If you die without a Will, you die intestate.  In this instance, your assets will be distributed according to a set formula with certain relatives receiving a defined percentage of your assets, 
        despite what you may have wished.  Therefore, it is important to ensure you have a current and valid Will, so your estate is distributed according to your wishes.</p>
        <p class="content">Dying intestate can result in your surviving spouse, family and friends suffering unnecessary financial hardship and emotional stress.</p>
        
    </div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} className="image"/>
                </span>资产及未来规划
        </p>
        <br />
        <p>
            在我们最新的视频中，纽卡斯尔大学老年人法律诊所的法律从业者Margot McAlary讨论了在就当前新冠疫情环境下，永久性授权书时可能出现的一些问题。您可以在此 <a href="https://drive.google.com/file/d/1NWA7JksSNfgPtxpFrbLA9MXe3QcmfzYT/view">链接</a>上观看我们的视频。
        </p>
        <ul className='content-list'>
            <li><span>什么是遗嘱？ </span></li>

            <li><span>什么是永久性授权书？</span></li>


            <li><span>什么是永久性监护人？</span></li>


            <li><span>什么是预先医疗保健指令？ </span></li>


            <li><span>新冠疫情如何影响资产和未来规划？</span></li>
            

        </ul>
        <p class="content">
            新冠疫情的影响并不妨碍完成或促进遗产规划、遗产管理或其他法律服务。我们可以帮助您在前所未有的时光中解决这些问题。

            如需进一步的帮助，请联系纽卡斯尔大学法律中心老年人诊所。
            电话 <a href="tel:1800 314 792">1800 314 792 (免费电话)</a>
            电子邮件 <a href="legalcentre@newcastle.edu.au">legalcentre@newcastle.edu.au</a>
        </p>
    </div>
	)
	
	)
}

export default Future1