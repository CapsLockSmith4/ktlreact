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
                </span>Police Searches - when can police stop and search persons in the street? Can the police search my home?
        </p>
        <br />


        <p class='subtitle'>Police Rights</p>


        <p class="content">Police may search you or your car on the street without a search warrant and seize and detain anything they find in that search provided they have reasonable grounds to believe that you are carrying:</p>


        <ul class="content-list">
            <li><span>A stolen item</span></li>


            <li><span>A dangerous item (e.g. a knife)</span></li>


            <li><span>A prohibited drug</span></li>


            <li><span>An item that has been or may be used in relation to a crime</span></li>
        </ul>
        <p class="content">Police may conduct a ‘frisk’ or ordinary search without a search warrant. This means the officer can pat you down and ask you to remove a coat or jacket.</p>


        <p class="content">Police are also able to search your home either with the authority of a search warrant or if an occupant of the home gives them permission to enter. The police can apply for a search warrant if they believe on reasonable grounds there is, or very soon will be, in or on the premises anything connected with a criminal offence. When executing the warrant, police are permitted to seize and detain anything mentioned in the warrant and any other thing the police have reasonable grounds to believe is connected with any offence. Further, the police may search any person in the premises at the time the search warrant is being executed if the police reasonably suspect they have a thing mentioned in the warrant. Reasonable force may be used when executing the warrant and normal search warrants must be executed between 6am and 9pm. The police can search the premises without a warrant if an occupier of the premises gives their permission for the police to enter the property.</p>


        <p class='subtitle'>Your Rights</p>


        <p class="content">Police are required to provide their name, place of duty and reason for carrying out the search. If you do not comply with a search, you may be committing an offence. Police may ask you to accompany them to a police station to  questions or assist them with their inquiries but you are not required to go unless you have been arrested.</p>
    </div>

    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            警方搜查 - 什么时候警方会在街上停下来搜查人? 警方能搜查我的家吗?
        </p>
        <br />

        <p class="content">
            警方可以在没有搜查令的情况下在路上搜查人或汽车, 抓住并扣留他们, 在搜查中发现的任何东西只要他们有合理的理由相信你带的东西是: <ul class='content-list'><li>被偷的东西</li><li>危险的东西 (例如: 刀)</li><li>违禁的药物</li><li>已经或可能用于与犯罪有关的东西</li></ul>
        </p>

        <p class="content">
            警察可以在没有搜查令情况下进行搜身, 这意味着警察对你进行搜身并要求你 脱掉一件外套.
        </p>

        <p class="content">
            警察既可以通过权威的搜查令, 或通过家庭的主人给他们进入的许可搜查你的 房间. 如果有合理证据表明在处所已有或将有任何与刑事有关的犯罪, 警方可 以申请搜查令. 在执行搜查令时, 警方获准扣留搜查令中提及的任何物品. 如 果有合理的证据表明其他的物品与犯罪有关. 也可以检取扣留. 此外, 在搜查 令正在执行的时, 如果警方合理怀疑他们涉嫌搜查令中所提及的违法内容, 警 方可搜查该处所的任何人. 警察执行搜查令时, 可以使用正当武力, 正常的搜查令必须早上 6 点到晚 9 点 执行. 如果房屋的主人允许警察进入房屋, 警方可以不用搜查令就可以进行搜查.
        </p>

        <p class="content">
            警方须提供他们的姓名、职务及理由进行搜查. 如果你配合搜查, 你可能指控犯罪. 警方可能会要求你跟他们到警察局回答问题, 或协助他们调查但你不需要这么做除非你已被逮捕.
        </p>
    </div>
	)
	
	)
}

export default Police1