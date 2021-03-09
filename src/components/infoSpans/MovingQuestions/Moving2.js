import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Moving2 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Arrival - what do I have to do when I arrive in Australia?
        </p>
        <br />


        <p class="content">When arriving in Australia you will have to clear customs. The <a href="http://www.border.gov.au/Trav/Ente">Department of Immigration and Border Protection website</a> provides information regarding customs clearance, <a  href="http://www.border.gov.au/Trav/Ente/Brin/Can-I-bring-it-back">restricted items</a> and an overview of what must be declared to customs.</p>
    </div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            到达 - 当到达澳大利亚时, 我必须做什么?
        </p>
        <br />

        <p class="content">
            你必须办理报关手续. 当你抵达澳大利亚后, <a href='http://www.border.gov.au/Trav/Ente'>向移民局和边境检查站</a>提供资料, 包括海关清关材料、 <a href='http://www.border.gov.au/Trav/Ente/Brin/Can-I-bring-it-back'>限制物品</a>以及必须向海关申报的物品清单.
        </p>
    </div>
	)
	
	)
}

export default Moving2