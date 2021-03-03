import React from 'react'
import lawIcon from '../../images/law.png'
import '../../../styles.css'

const CreditTenancy4 = ({lang}) => {
    return (
        (!lang) ? (
                <div >
                    <div >
                        <p className="title">
                            <span className="fa-gavel-icon answer-icon">
                                <img src={lawIcon} alt="law symbol" className="image" />
                                </span>What is a black list or tenancy record?
        </p>
        <br />

        <p className="content">
            Tenancy databases or tenancy blacklists are business run by private companies. They hold the details of people who have been reported. They provide this information to other landlords and real estate agents when you apply to rent a property or to live in a residential park. This can stop you from being able to find a place to live.
        </p>
        <p className="content">
            There are strict limitations on the operators regarding when and what information can be listed about you, providing you with information before making a listing and what information is kept about you, the length of time a record can be kept, and the removal of old or incorrect information. The <a className="ng-scope" href="https://www.tenants.org.au/factsheet-19-tenant-databases">Tenants' Advice and Advocacy Services NSW detail these requirements</a> and the ways you can help yourself.
        </p>
    </div>

</div>
    ) : (
        <div>
        <div >
            <p className="title">
                <span className="fa-gavel-icon answer-icon">
                    <img src={lawIcon} alt='law symbol' className="image"/>
                    </span>什么是黑名单或租赁记录？
        </p>
        <br />

        <p className="content">
            租赁数据库或租赁黑名单由私营公司经营。他们掌握了有信用报告的人的详细信息。当您申请租赁房产或住在居住区公园时，他们会向其他房东和房地产经纪人提供此信息。这些信息可能会阻碍您找到居住的地方。
        </p>
        <p className="content">
            对于在何时可以列出您的信息以及可以列出您的哪些信息、在列出清单之前要为您提供信息、可以保留关于您的哪些信息、记录可以保存的时长以及要删除旧的或不正确的信息，运营商都受到严格限制。<a className="ng-scope" href="https://www.tenants.org.au/factsheet-19-tenant-databases">新南威尔士州的租户建议和代言服务处 (Tenants' Advice and Advocacy Services NSW) 详细说明了这些要求</a>以及您可以自助的方式。
        </p>
    </div>

</div>
    ));
}

export default CreditTenancy4
