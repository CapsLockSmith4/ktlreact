import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const Domestic1 = ({lang}) => {
    return (
        (!lang) ? (
                <div className="row">
                    <div id="answer" className="answer answer1">
                        <p className="title">
                            <span className="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" className="image" />
                                </span>What is an apprehended violence order?
        </p>
        <br />

        <p class="content">An Apprehended Violence Order (AVO) is a court order made to protect a ‘person in need of protection’ (‘PINOP’) from violence, harassment, intimidation or stalking. This can either be in the form of a ‘domestic violence order’ if there is an existing domestic or family relationship between the parties or a ‘personal violence order’ where there is no domestic relationship between the parties, for example, co-workers and neighbours.  </p>
    </div>
    </div>
    ) : (
        <div className="row">
        <div id="answer" className="answer answer1">
            <p className="title">
                <span className="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' className="image"/>
                    </span>家庭暴力
        </p>

        <br />

        
        <ul class='content-list'>
            <li><span>什么是暴力禁制令？</span></li>


            <li><span>如何发布暴力禁制令（AVO）？</span></li>


            <li><span>我什么时候可以提出私人AVO申请？</span></li>


            <li><span>进行私人AVO申请会产生任何费用吗？</span></li>


            <li><span>我该如何申请私人AVO？</span></li>


            <li><span>新冠疫情后进行了哪些变更？</span></li>

        </ul>
        <p class="content">


            如需进一步的帮助，请联系纽卡斯尔大学法律中心老年人诊所。
            电话： <a href="tel:1800 314 792">1800 314 792 (免费电话)</a>
            电子邮件: <a href="legalcentre@newcastle.edu.au">legalcentre@newcastle.edu.au</a>
        </p>
    </div>
</div>
    ));
}

export default Domestic1
