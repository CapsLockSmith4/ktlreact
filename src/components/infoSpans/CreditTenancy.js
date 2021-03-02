import React, { useState } from 'react'
import Tenancy1 from './CreditTenancyQuestions/CreditTenancy1'
import Tenancy2 from './CreditTenancyQuestions/CreditTenancy2.js'
import Tenancy3 from './CreditTenancyQuestions/CreditTenancy3.js'
import Tenancy4 from './CreditTenancyQuestions/CreditTenancy4'



const CreditTenancy= ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button onClick={() => setChoice(1)}>What is a credit record?</button>
                <button onClick={() => setChoice(2)}>How can I improve my credit record?</button>
                <button onClick={() => setChoice(3)}>Where can I get help with my credit report?</button>
                <button onClick={() => setChoice(4)}>What is a black list or tenancy record?</button>
            </div>
            <div>
                {choice === 1 && <Tenancy1 lang={lang}/>} 
                {choice === 2 && <Tenancy2 lang={lang}/>} 
                {choice === 3 && <Tenancy3 lang={lang}/>} 
                {choice === 4 && <Tenancy4 lang={lang}/>} 
            </div>
        </>
        
    ) : (
        <>
            <div>
                <button onClick={() => setChoice(1)}>什么是信用记录？</button>
                <button onClick={() => setChoice(2)}>如何提高信用记录？</button>
                <button onClick={() => setChoice(3)}>在哪里可以获得有关信用报告的帮助？</button>
                <button onClick={() => setChoice(4)}>什么是黑名单或租赁记录？</button>
            </div>
            <div>
                {choice === 1 && <Tenancy1 lang={lang}/>} 
                {choice === 2 && <Tenancy2 lang={lang}/>} 
                {choice === 3 && <Tenancy3 lang={lang}/>} 
                {choice === 4 && <Tenancy4 lang={lang}/>} 
            </div>
        </>
    )
    
    )}

export default CreditTenancy