import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Police3 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Other Police Powers
		</p>
        <br />


		<p class="content">Police can tell you to leave a public place. This is also known as a ‘move along’ direction and will be issued if the police reasonably believe a person is:</p>


		<ul class='content-list'>
			<li><span>Obstructing traffic</span></li>


			<li><span>Harassing another person</span></li>


			<li><span>Attempting to obtain or supply prohibited drugs</span></li>


			<li><span>Affected by alcohol to the point where they are likely to cause harm to a person or property or cause general disorder</span></li>
		</ul>


		<p class="content">It is an offence not to follow this direction. If it is given because the police believe you are intoxicated and disorderly it is an offence to be intoxicated in that same place, or any other public place, for the following 6 hours.</p>


		<p class="content">Police may also detain an intoxicated and disorderly person. In such a situation they will usually release the person into the responsibility of another person who is willing to immediately take care of them. If there is no one available they may take the person to the nearest available police station. If you are detained as an intoxicated person you must be allowed to contact a friend or relative and you must be kept separately from those detained for possible criminal offences. You must also be provided with food, water and bedding.</p>
	</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            警察的其他权力
        </p>
        <br />

        <p class="content">
            警察有权让你离开一个公共场所. 又称为"要走的方向". 如果警察判断某人是有下列行为, 警方会下达命令让你离开. <ul class='content-list'><li>阻赛交通</li><li>扰乱他人</li><li>试图获得或供应违禁药物</li><li>受酒精影响, 他们可能会造成人员伤害或引起财产扰乱</li></ul>
        </p>

        <p class="content">
            如果你不遵守这个命令是违法的. 如果醉酒以后 6 小时, 发现你醉酒在同一地点, 或任何其他公共场所, 你就会被指控为犯罪. 警察认为你是醉酒和扰乱秩序.
        </p>

        <p class="content">
            警方还可以拘留醉酒、扰乱秩序的人. 如果一个违法者愿意立即照顾另一个违法者, 在这样的情况下, 他们通常会先释放该违法者. 如果当时没有这样的人, 可能会把违法者带到最近的警察局. 如果你作为醉酒者被拘留了, 允许你与朋友或家人联系. 你必须与其他拘留的违法者隔离. 你必须提供给食品、水和床上用品.
        </p>
    </div>
	)
	
	)
}

export default Police3