import React, { useState } from 'react'
import Future1 from './FutureQuestions/Future1'
import Future2 from './FutureQuestions/Future2'
import Future3 from './FutureQuestions/Future3'
import Future4 from './FutureQuestions/Future4'
import Future5 from './FutureQuestions/Future5'

const Future = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}></button>
                <button className='btnBig' onClick={() => setChoice(2)}></button>
                <button className='btnBig' onClick={() => setChoice(3)}></button>
                <button className='btnBig' onClick={() => setChoice(4)}></button>
                <button className='btnBig' onClick={() => setChoice(5)}></button>
            </div>
            <div className='question'>
                {choice === 1 && <Future1 lang={lang}/>} 
                {choice === 2 && <Future2 lang={lang}/>} 
                {choice === 3 && <Future3 lang={lang}/>} 
                {choice === 4 && <Future4 lang={lang}/>} 
                {choice === 5 && <Future5 lang={lang}/>} 
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
                {choice === 1 && <Future1 lang={lang}/>} 
                {choice === 2 && <Future2 lang={lang}/>} 
                {choice === 3 && <Future3 lang={lang}/>} 
                {choice === 4 && <Future4 lang={lang}/>} 
                {choice === 5 && <Future5 lang={lang}/>} 
            </div>
        </>
    )
    
    )}

export default Future