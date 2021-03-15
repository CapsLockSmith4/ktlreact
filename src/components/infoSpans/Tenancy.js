import React, { useState } from 'react'
import Tenancy1 from './TenancyQuestions/Tenancy1'
import Tenancy2 from './TenancyQuestions/Tenancy2'
import Tenancy3 from './TenancyQuestions/Tenancy3'
import Tenancy4 from './TenancyQuestions/Tenancy4'
import Tenancy5 from './TenancyQuestions/Tenancy5'


const Tenancy = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div className='grid'>
                <button className='btnBig' onClick={() => setChoice(1)}>Who am I - boarder, lodger or tenant?</button>
                <button className='btnBig' onClick={() => setChoice(2)}>Renting</button>
                <button className='btnBig' onClick={() => setChoice(3)}>Tenant's obligations</button>
                <button className='btnBig' onClick={() => setChoice(4)}>Terminating a Lease</button>
                <button className='btnBig' onClick={() => setChoice(5)}>Disputes - what can I do?</button>
            </div>
            <div className='question'>
                {choice === 1 && <Tenancy1 lang={lang}/>} 
                {choice === 2 && <Tenancy2 lang={lang}/>} 
                {choice === 3 && <Tenancy3 lang={lang}/>} 
                {choice === 4 && <Tenancy4 lang={lang}/>} 
                {choice === 5 && <Tenancy5 lang={lang}/>} 
            </div>
        </>
        
    ) : (
        <>
            <div className='grid'>
                <button className='btnBig' onClick={() => setChoice(1)}>我属于寄宿生 - 寄宿者还是租客？</button>
                <button className='btnBig' onClick={() => setChoice(2)}>租用</button>
                <button className='btnBig' onClick={() => setChoice(3)}>承租人的义务</button>
                <button className='btnBig' onClick={() => setChoice(4)}>终止租约</button>
                <button className='btnBig' onClick={() => setChoice(5)}>发生纠纷，我应该做什么?</button>
            </div>
            <div className='question'>
                {choice === 1 && <Tenancy1 lang={lang}/>} 
                {choice === 2 && <Tenancy2 lang={lang}/>} 
                {choice === 3 && <Tenancy3 lang={lang}/>} 
                {choice === 4 && <Tenancy4 lang={lang}/>} 
                {choice === 5 && <Tenancy5 lang={lang}/>} 
            </div>
        </>
    )
    
    )}

export default Tenancy