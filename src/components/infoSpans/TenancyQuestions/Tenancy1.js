import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Tenancy1 = ({lang}) => {
    return (
		(!lang) ? (
		<div >
			<p className="title">
			<span className="fa-gavel-icon answer-icon">
				<img src={lawIcon} alt="law symbol" className="image" />
                </span>Who am I - boarder, lodger or tenant?
		</p>
        <br />

		<p class='content'>
			In order to understand your rights and responsibilities when renting property in New South Wales you must first know whether you are a boarder, lodger or tenant. If you are a tenant you are protected by, and must comply with, the Residential Tenancies Act 2010 (NSW) and the Residential Tenancies Act Regulation 2010 (NSW).
		</p>
		<p class='content'>
			I am a boarder or lodger if:

			<ul class='content-list'>
				<li><span>I have keys to some doors including my bedroom but not to all of the rooms and have use of the common areas but I do not have control over them</span></li>


				<li><span>Domestic services are provided by the landlord such as cooking, laundry, cleaning and shopping</span></li>


				<li><span>The landlord or home owner lives on the premises</span></li>
			</ul>
		</p><p class='content'>
			I am a tenant if:

			<ul class='content-list'>
				<li><span>I have keys to all external doors and have exclusive possession of the property</span></li>


				<li><span>The landlord or home owner does not live on the premises</span></li>
			</ul>
		</p>
		<p class='content'>For more information see the <a href="http://www.tenants.org.au/factsheet-14-boarders-and-lodgers">boarders and lodgers fact sheet</a> prepared by Tenants NSW. You should seek legal advice if you have a dispute about your accommodation and you are unsure whether you are a boarder, lodger or tenant.</p>
	</div>
    ): (
    <div >
        <p className="title">
            <span className="fa-gavel-icon answer-icon">
                <img src={lawIcon} alt="law symbol" className="image"/>
                </span>
            我属于寄宿生 - 寄宿者还是租客？
        </p>
        <br />

        <p class="content">
            当你在新南威尔士租赁房产时候, 为了了解你的权利和责任, 你必须首先知道你是寄宿者, 寄宿生还是租客? 如果你是一名租客, 那么你必须遵守并受新南威尔士 (NSW), 《住宅租赁法 2010》 (Residential Tenancies ACT 2010) 和新南威尔士州 (NSW) 《住在租赁法条例 2010》 (Residential Tenancies ACT Regulation 2010) 保护.
        </p>

        <p class="content">
            如果我是一个寄宿生或寄宿者: <ul class='content-list'><li>我有一些门的钥匙, 包括我的卧室, 但我不能完全控制所有的房间和使用的共同领域.</li><li>家庭服务是由房东提供的, 如做饭、洗衣、清洁和购物</li><li>房东或房主也住在上述房屋之内</li></ul>
        </p>

        <p class="content">
            如果我是一个租客: <ul class='content-list'><li>我有所有的大门的钥匙和拥有房子占领权</li><li>房东或房主不同我住在房子里</li></ul>
        </p>

        <p class="content">
            更多信息参见《新南威尔士州租户》 中准备的<a href='http://www.tenants.org.au/factsheet-14-boarders-and-lodgers'>寄宿和房客情况说明书</a>, 如果你对你的住宿有疑虑并且你不确定你是寄宿生、寄宿者还是租客, 那么你应该寻求法律建议.
        </p>
    </div>
	)
	
	)
}

export default Tenancy1