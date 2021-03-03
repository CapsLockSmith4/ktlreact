import React, { useState } from 'react'
import Managing1 from './ManagingQuestions/Managing1'
import Managing2 from './ManagingQuestions/Managing2'
import Managing3 from './ManagingQuestions/Managing3'
import Managing4 from './ManagingQuestions/Managing4'
import Managing5 from './ManagingQuestions/Managing5'


const Managing = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>What is a Managing</button>
                <button className='btnBig' onClick={() => setChoice(2)}>What types of debt are there?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>Fines and Debt - what should I do?</button>
                <button className='btnBig' onClick={() => setChoice(4)}>Letter of Demand - what is it?</button>
                <button className='btnBig' onClick={() => setChoice(5)}>Statement of Claim - what is it?</button>
            </div>
            <div className='question'>
                {choice === 1 && <Managing1 lang={lang}/>} 
                {choice === 2 && <Managing2 lang={lang}/>} 
                {choice === 3 && <Managing3 lang={lang}/>} 
                {choice === 4 && <Managing4 lang={lang}/>} 
                {choice === 5 && <Managing5 lang={lang}/>} 
            </div>
        </>
        
    ) : (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>什么是贷款?</button>
                <button className='btnBig' onClick={() => setChoice(2)}>债务的类型 - 我能进入什么债务?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>罚款和债务 - 我该怎么办?</button>
                <button className='btnBig' onClick={() => setChoice(4)}>缴款通知书 - 它是什么?</button>
                <button className='btnBig' onClick={() => setChoice(5)}>起诉书 - 它是什么?</button>
            </div>
            <div className='question'>
                {choice === 1 && <Managing1 lang={lang}/>} 
                {choice === 2 && <Managing2 lang={lang}/>} 
                {choice === 3 && <Managing3 lang={lang}/>} 
                {choice === 4 && <Managing4 lang={lang}/>} 
                {choice === 5 && <Managing5 lang={lang}/>} 
            </div>
        </>
    )
    
    )}

export default Managing