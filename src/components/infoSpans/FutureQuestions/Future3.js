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
                </span>What is an Enduring Power of Attorney?
        </p>
        <br />

        <p class="content">An Enduring Power of Attorney is the appointment of another person or persons to make legal and financial decisions on your behalf.  Your power of Attorney can manage your affairs and do things such as pay bills and liaise with Centrelink. </p>

    </div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} className="image"/>
                </span>什么是遗嘱？
        </p>
        <br />
        
        <p class="content">遗嘱是一份法律文件，列出了您去世后分配资产的意愿。</p>

        <p class="subtitle">如果我去世时没有立遗嘱怎么办？</p>
        <p class="content">
            如果您在没有遗嘱的情况下死亡，则不会有您指定受益人的记录。
            如果您在没有遗嘱的情况下死亡，则认为您未立遗嘱。在这种情况下，您的资产将按照设定的公式进行分配，某些亲属将获得您所定义资产的百分比，而不是按照您希望的进行分配。因此，确保您拥有最新且有效的遗嘱十分重要，这样才能根据您的意愿分配财产。
            
        </p>
        <p class="content">去世时未立遗嘱可能导致您尚存的配偶、家人和朋友遭受不必要的经济困难和情绪压力。</p>
        
    </div>
	)
	
	)
}

export default Future1