import React, { useState } from 'react'
import Bankruptcy1 from './BankruptcyQuestions/Bankruptcy1'
import Bankruptcy2 from './BankruptcyQuestions/Bankruptcy2'
import Bankruptcy3 from './BankruptcyQuestions/Bankruptcy3'

const Bankruptcy = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>What is bankruptcy?</button>
                <button className='btnBig' onClick={() => setChoice(2)}>What are the risks and benefits of bankruptcy?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>Who can help me with bankruptcy?</button>
            </div>
            <div className='question'>
                {choice === 1 && <Bankruptcy1 lang={lang}/>} 
                {choice === 2 && <Bankruptcy2 lang={lang}/>} 
                {choice === 3 && <Bankruptcy3 lang={lang}/>} 
            </div>
        </>
        
    ) : (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>什么是破产？</button>
                <button className='btnBig' onClick={() => setChoice(2)}>破产的风险和好处是什么？</button>
                <button className='btnBig' onClick={() => setChoice(3)}>谁能为我提供破产帮助？</button>
            </div>
            <div className='question'>
                {choice === 1 && <Bankruptcy1 lang={lang}/>} 
                {choice === 2 && <Bankruptcy2 lang={lang}/>} 
                {choice === 3 && <Bankruptcy3 lang={lang}/>} 
            </div>
        </>
    )
    
    )}

export default Bankruptcy