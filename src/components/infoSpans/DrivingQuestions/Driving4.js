import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Driving4 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Registration - do I have to register my vehicle?
        </p>
        <br />

        <p class="content">Yes. All cars and motorcycles being driven or towed on roads in New South Wales must be registered. <a class="ng-scope" href="http://www.rms.nsw.gov.au/roads/registration/unregistered.html">Driving an unregistered vehicle is illegal</a>. If you are caught driving an unregistered vehicle you will most likely be fined and the police may also seize your car.</p>


        <p class="content">In order to register your vehicle you will need to have CTP insurance which is known as a 'green slip'. To calculate the cost of registration you can use the <a class="ng-scope" href="https://myrta.com/myRego/pages/content/rc/RegistrationCalculator.page">RMS registration calculator</a>.</p>


        <p class="content">You are also usually required to have a ‘pink slip’ which is obtained from an authorised person, such as a car mechanic, which indicates the roadworthiness of the vehicle.</p>
    </div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} className="image"/>
                </span>
            注册 - 我必须注册我的车吗?
        </p>
        <br />

        <p class="content">
            对的. 所有在新南威尔士的道路上行驶的汽车和摩托车都必须注册.  <a href='http://www.rms.nsw.gov.au/roads/registration/unregistered.html'>驾驶未经登记的车辆是非法的</a>. 如果您被抓到驾驶一辆未注册的车辆你将很可能被罚款, 警察也可能扣下您的车.
        </p>

        <p class="content">
            注册您的车辆时, 您需要有 CTP 保险, 这常被叫做"绿色保险单". 要计算注册 成本, 可以使用<a href='https://myrta.com/myRego/pages/content/rc/RegistrationCalculator.page'>RMS 的费用计算软件</a>.
        </p>

        <p class="content">
            您通常还需要有一个从授权的法人处获得的"粉色报告单", 如汽车维修厂, 以证明您的汽车适合在道路安全驾驶.
        </p>
    </div>
	)
	
	)
}

export default Driving4