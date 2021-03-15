import React, { useState } from 'react'
import Guaranteeing1 from './GuaranteeingQuestions/Guaranteeing1.js'


const Guaranteeing = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div className='grid'>
                <button className='btnBig' onClick={() => setChoice(1)}>What does it mean to guarantee a loan?</button>
                
            </div>
            <div className='question'>
                {choice === 1 && <Guaranteeing1 lang={lang}/>} 
                
            </div>
        </>
        
    ) : (
        <>
            <div className='grid'>
                <button className='btnBig' onClick={() => setChoice(1)}>保证贷款意味着什么？</button>
                
            </div>
            <div className='question'>
                {choice === 1 && <Guaranteeing1 lang={lang}/>} 
                
            </div>
        </>
    )
    
    )}

export default Guaranteeing