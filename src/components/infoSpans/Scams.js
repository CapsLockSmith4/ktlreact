import React, { useState } from 'react'
import Scams1 from './ScamsQuestions/Scams1'
import Scams2 from './ScamsQuestions/Scams2'
import Scams3 from './ScamsQuestions/Scams3'



const Scams = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button onClick={() => setChoice(1)}>What scams should I be aware of?</button>
                <button onClick={() => setChoice(2)}>How can I avoid getting scammed?</button>
                <button onClick={() => setChoice(3)}>What can I do if I have been scammed?</button>
                
            </div>
            
            <div>
                {choice === 1 && <Scams1 lang={lang}/>} 
                {choice === 2 && <Scams2 lang={lang}/>} 
                {choice === 3 && <Scams3 lang={lang}/>} 
            
            </div>
        </>
        
    ) : (
        <>
            <div>
                <button onClick={() => setChoice(1)}>我应该注意哪些诈骗？</button>
                <button onClick={() => setChoice(2)}>如何避免被骗？</button>
                <button onClick={() => setChoice(3)}>在被骗后该怎么办？</button>
            
            </div>
            <div>
                {choice === 1 && <Scams1 lang={lang}/>} 
                {choice === 2 && <Scams2 lang={lang}/>} 
                {choice === 3 && <Scams3 lang={lang}/>} 
            
            </div>
        </>
    ))}

export default Scams 
