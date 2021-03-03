import React, { useState } from 'react'
import Domestic1 from './DomesticQuestions/Domestic1'
import Domestic2 from './DomesticQuestions/Domestic2'
import Domestic3 from './DomesticQuestions/Domestic3'
import Domestic4 from './DomesticQuestions/Domestic4'
import Domestic5 from './DomesticQuestions/Domestic5'
import Domestic6 from './DomesticQuestions/Domestic6'


const Domestic = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>What is a Loan</button>
                <button className='btnBig' onClick={() => setChoice(2)}>Types of Debt- what debt could I get into?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>Fines and Debt - what should I do?</button>
                <button className='btnBig' onClick={() => setChoice(4)}>Letter of Demand - what is it?</button>
                <button className='btnBig' onClick={() => setChoice(5)}>Statement of Claim - what is it?</button>
                <button className='btnBig' onClick={() => setChoice(6)}>Statement of Claim - what is it?</button>
            </div>
            <div className='question'>
                {choice === 1 && <Domestic1 lang={lang}/>} 
                {choice === 2 && <Domestic2 lang={lang}/>} 
                {choice === 3 && <Domestic3 lang={lang}/>} 
                {choice === 4 && <Domestic4 lang={lang}/>} 
                {choice === 5 && <Domestic5 lang={lang}/>} 
                {choice === 6 && <Domestic6 lang={lang}/>}
            </div>
        </>
        
    ) : (
        <>
            <div className='question'>
                <button className='btnBig' onClick={() => setChoice(1)}>什么是贷款?</button>
                <button className='btnBig' onClick={() => setChoice(2)}>债务的类型 - 我能进入什么债务?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>罚款和债务 - 我该怎么办?</button>
                <button className='btnBig' onClick={() => setChoice(4)}>缴款通知书 - 它是什么?</button>
                <button className='btnBig' onClick={() => setChoice(5)}>起诉书 - 它是什么?</button>
                <button className='btnBig' onClick={() => setChoice(6)}>Statement of Claim - what is it?</button>
            </div>
            <div>
                {choice === 1 && <Domestic1 lang={lang}/>} 
                {choice === 2 && <Domestic2 lang={lang}/>} 
                {choice === 3 && <Domestic3 lang={lang}/>} 
                {choice === 4 && <Domestic4 lang={lang}/>} 
                {choice === 5 && <Domestic5 lang={lang}/>} 
                {choice === 6 && <Domestic6 lang={lang}/>}
            </div>
        </>
    )
    
    )}

export default Domestic