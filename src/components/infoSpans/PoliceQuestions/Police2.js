import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Police1 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Arrest - when can police arrest me?
        </p>
        <br />

        <p class='subtitle'>Police Rights</p>


        <p class="content">The police can arrest you:</p>


        <ul class='content-list'>
            <li><span>Without a warrant, if you are committing an offence or they have reasonable grounds to suspect you have committed an offence.</span></li>


            <li><span>With a warrant (a written authority) from a court for your arrest.</span></li>
        </ul>
        <p class="content">A police officer may use reasonable force in arresting you. However, if unreasonable force is used this may be a breach of the law. A police officer should also tell you why you are being arrested and their place of duty but if the officer does not give you this information do not get into an argument with them. Instead, you may file a complaint against them at a later time. At the police station police may take photographs, fingerprints and palmprints for identification purposes. They may also ask a witness if they are able to identify you from a photograph.</p>


        <p class='subtitle'>Your Rights</p>


        <p class="content">It is an offence to resist arrest. If you think you are not guilty of the offence or that you should not be arrested you will be able to explain your case later. You must provide your name and address to police but other than stating this information you have the right to remain silent. If your car is involved in a crime you are <a href="http://www.legalaid.nsw.gov.au/publications/factsheets-and-resources/burn-movie/loaning-your-car">required to tell the police</a> who was driving the vehicle and provide details of any passengers who were in the car at the time. While at the police station you have the right not to answer any questions.</p>


        <p class="content">If you agree to be questioned at the police station you have the right to communicate with a friend, relative, guardian or Australian legal practitioner. If you do not have a lawyer you can seek help from:</p>


        <ul class='content-list'>
            <li>
                <span>
                    <a  href="http://www.lawaccess.nsw.gov.au/">LawAccess NSW</a> between 9am and 5pm Monday to Friday on 1300 888 529
                </span>
            </li>


            <li>
                <span>
                    Your local office of <a  href="http://www.legalaid.nsw.gov.au/contact-us/legal-aid-nsw-offices">Legal Aid NSW</a>
                </span>
            </li>


            <li>
                <span>
                    Your local office of the <a  href="http://www.alsnswact.org.au/contact/#ALS-office">Aboriginal Legal Service</a>, if you are Aboriginal or a Torres Strait Islander person
                </span>
            </li>
            <li><span>Youth Hotline on 1800 101 810 (if you are under 18)</span></li>
        </ul>
        <p class="content">For more information, see the <a  href="http://www.legalaid.nsw.gov.au/publications/factsheets-and-resources/police-powers">police powers fact sheet</a> prepared by Legal Aid NSW.</p>
    </div>

    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            逮捕 - 警方什么时可以逮捕我?
        </p>
        <br />

        <p class="content">
            警察可以逮捕你: <ul class='content-list'><li>不必须要有逮捕令, 如果你犯了罪或者他们有合理的理由怀疑你犯了罪.</li><li>从法院那得到关于你的逮捕令(书面权威).</li></ul>
        </p>

        <p class="content">
            一个警察可以用正当的武力来逮捕你. 但是, 如果使用不合理的武力, 这可能是一个违反法律. 警察也应该告诉你为什么你被逮捕和他们的职责. 但如果警察没有告知你理由, 也不要与他们起争执. 相反, 你可以在之后向他们提出控诉. 在警察局, 警察可能对你进行拍照, 检查指纹和掌纹作为身份识别. 他们 也可以询问证人, 是否能够识别你的照片.
        </p>

        <p class="content">
            抗拒逮捕是一种违法行为. 如果你认为你是无罪的或者你不应该被逮捕. 你可以在以后的时间解释你的情况. 你必须向警方提供你的姓名和地址, 除了说明这些信息, 你有权保持沉默. 如果你的车涉及到犯罪, 你<a  href='http://www.legalaid.nsw.gov.au/publications/factsheets-and-resources/burn-movie/loaning-your-car'>需要告诉警察</a>是谁驾驶的车辆并提供所有乘客在车上的细节. 在警察局的时候, 你有权不回答任何问题.
        </p>

        <p class="content">
            如果你同意在警察局审问, 你有权与朋友、家人、监护人或澳大利亚的法律从 业者交流. 如果你没有律师, 你可以向以下机构寻求帮助: <ul class='content-list'><li><a  href='http://www.lawaccess.nsw.gov.au/'>Law Access 新南威尔士州</a>, 每周一到周五上午 9 点和下午 5 点之间, 电 话号码: 1300 888 529</li>
            <li>当地的 <a  href='http://www.legalaid.nsw.gov.au/contact-us/legal-aid-nsw-offices'>法律援助的办公室</a></li><li>如果你是原住民和托雷斯海峡岛民的人, 你可以咨询<a href='http://www.alsnswact.org.au/offices/nsw-north'>当地的土著法律服务办公室</a></li><li>青年热线 1800 101 810（如果你是 18 岁以下)</li></ul>
        </p>

        <p class="content">
            更多信息, 参见由新南威尔士州法律援助机构的<a  href='http://www.legalaid.nsw.gov.au/publications/factsheets-and-resources/police-powers'>警权概况</a>.
        </p>
    </div>
	)
	
	)
}

export default Police1