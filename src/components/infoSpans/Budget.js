import React, { useState } from 'react'
import Budget1 from './BudgetQuestions/Budget1'


const Budget = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>How do I make a budget?</button>
                
            </div>
            <div className='question'>
                {choice === 1 && <Budget1 lang={lang}/>} 
                
            </div>
        </>
        
    ) : (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>如何编制预算？</button>
                
            </div>
            <div className='question'>
                {choice === 1 && <Budget1 lang={lang}/>} 
                
            </div>
        </>
    )
    
    )}

export default Budget