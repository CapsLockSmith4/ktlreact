import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Driving5 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Alcohol & Drugs
        </p>
        <br />

        <p class="content">In New South Wales it is a crime to drive under the influence of alcohol or other drugs. Random Breath Tests (RBT) and random drug tests are frequently undertaken by police officers on patrol on roads.</p>


        <p class="content">The offence of drink driving has different ranges as determined by your Blood Alcohol Concentration (BAC). The BAC measures the number of grams of alcohol in 100ml of blood. If you are the driver of a vehicle in a public place, the police may take a sample of your breath or blood to determine your BAC.</p>


        <p class="content">If you are a visiting driver on an overseas learner or provisional driver licence or you hold a Learner, P1 or P2 Provisional licence, your BAC must be zero – you are not permitted to have any alcohol in your system. Some cough mixtures, medicines and mouth washes can have small amounts of alcohol which could place you over the legal limit. All other overseas and Australian licence holder’s BAC must not exceed 0.05, which is the legal limit.</p>


        <p class="content">The higher your BAC reading is, the higher the penalty. Low range drink driving attracts a fine of up to $1,100 and disqualification from driving for periods of usually 3-6 months. Mid range and high range drink driving penalties include fines, licence disqualification and immediate suspension of your licence and sometimes more serious penalties such as gaol. You cannot drive if your licence has been suspended.</p>


        <p class="content">The Centre for Road Safety provides useful information in relation to <a class="ng-scope" href="http://roadsafety.transport.nsw.gov.au/stayingsafe/alcoholdrugs/index.html">alcohol, drugs and driving</a>.</p>
    </div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} className="image"/>
                </span>
            酒精和毒品
        </p>
        <br />

        <p class="content">
            在新南威尔士, 在酒精或其他药物的影响下开车是一种犯罪行为. 巡警会在路上进行随机的酒精测试 (RBT) 和毒品测试.
        </p>

        <p class="content">
            您血液里酒精浓度（BAC）决定了您触犯酒驾条款的严重程度. 警用的酒精测量仪, 可以检测出您每 100ml 血液所含酒精的克数. 如果您在公共场所驾车, 警察或许对您的呼吸或血液取样以确定你的酒精含量.
        </p>

        <p class="content">
            如果你是一个海外的初学者驾照持有人, 或是初学者驾照或临时驾驶驾照 P1/P2 的持有人, 您 BAC 测试的酒精含量必须为零, 也就是说在您不允许摄入任何酒精. 一些咳嗽的混合物, 药物和口腔清洗中的少量的酒精成分或许会让您超过法定酒精含量限制. 其它所有的海外和澳洲驾照持有人血液中酒精含量不得超过法定限制 0.05g 每 100ml.
        </p>

        <p class="content">
            越高的酒精含量会使您面临更高刑罚. 少量的饮酒驾驶可导致高达 1100 元的罚 款和 3-6 个禁驾期. 饮酒驾驶和醉酒驾驶的处罚包括罚款, 取消驾驶资格, 暂 扣驾照, 在某些严重的情况下还需入狱.  如果您的驾照被扣下来了, 您将不能 继续驾驶车辆
        </p>

        <p class="content">
            道路安全中心为<a  href='http://roadsafety.transport.nsw.gov.au/stayingsafe/alcoholdrugs/index.html'>酒精、 毒品和驾驶</a>提供此相关信息.
        </p>
    </div>
	)
	
	)
}

export default Driving5