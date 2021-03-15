import React, { useState } from 'react'
import Payday1 from './PaydayQuestions/Payday1'
import Payday2 from './PaydayQuestions/Payday2'
import Payday3 from './PaydayQuestions/Payday3'



const Payday = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div className='grid'>
                <button className='btnBig' onClick={() => setChoice(1)}>What is a Payday</button>
                <button className='btnBig' onClick={() => setChoice(2)}>Are there any alternatives to payday loans?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>What can I do if I can’t pay my payday loan?</button>
                
            </div>
            
            <div className='grid'>
                {choice === 1 && <Payday1 lang={lang}/>} 
                {choice === 2 && <Payday2 lang={lang}/>} 
                {choice === 3 && <Payday3 lang={lang}/>} 
            
            </div>
        </>
        
    ) : (
        <>
            <div className='grid'>
                <button className='btnBig' onClick={() => setChoice(1)}>什么是发薪日贷款？</button>
                <button className='btnBig' onClick={() => setChoice(2)}>是否有发薪日贷款的替代品？</button>
                <button className='btnBig' onClick={() => setChoice(3)}>如果无法偿还发薪日贷款，我该怎么办？</button>
            
            </div>
            <div className='grid'>
                {choice === 1 && <Payday1 lang={lang}/>} 
                {choice === 2 && <Payday2 lang={lang}/>} 
                {choice === 3 && <Payday3 lang={lang}/>} 
            
            </div>
        </>
    )
    
    )}

export default Payday 
