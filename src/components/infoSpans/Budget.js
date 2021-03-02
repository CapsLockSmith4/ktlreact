import React, { useState } from 'react'
import Budget1 from './BudgetQuestions/Budget1'


const Budget = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button onClick={() => setChoice(1)}>What is bankruptcy?</button>
                
            </div>
            <div>
                {choice === 1 && <Budget1 lang={lang}/>} 
                
            </div>
        </>
        
    ) : (
        <>
            <div>
                <button onClick={() => setChoice(1)}>什么是破产？</button>
                
            </div>
            <div>
                {choice === 1 && <Budget1 lang={lang}/>} 
                
            </div>
        </>
    )
    
    )}

export default Budget