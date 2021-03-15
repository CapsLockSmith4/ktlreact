import React, { useState } from 'react'
import Moving1 from './MovingQuestions/Moving1'
import Moving2 from './MovingQuestions/Moving2'
import Moving3 from './MovingQuestions/Moving3'
import Moving4 from './MovingQuestions/Moving4'
import Moving5 from './MovingQuestions/Moving5'



const Moving = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div className='grid'>
                <button className='btnBig' onClick={() => setChoice(1)}>Visas - how do I check my visa status and conditions?</button>
                <button className='btnBig' onClick={() => setChoice(2)}>Arrival - what do I have to do when I arrive in Australia</button>
                <button className='btnBig' onClick={() => setChoice(3)}>Student Insurance - do I need it while I'm studying in Australia</button>
                <button className='btnBig' onClick={() => setChoice(4)}>Visa Conditions - do I have to comply with all conditions on my visa while studying</button>
                <button className='btnBig' onClick={() => setChoice(5)}>Visa & Work</button>
            </div>
            <div className='question'>
                {choice === 1 && <Moving1 lang={lang}/>} 
                {choice === 2 && <Moving2 lang={lang}/>} 
                {choice === 3 && <Moving3 lang={lang}/>} 
                {choice === 4 && <Moving4 lang={lang}/>} 
                {choice === 5 && <Moving5 lang={lang}/>} 
            </div>
        </>
        
    ) : (
        <>
            <div className='grid'>
                <button className='btnBig' onClick={() => setChoice(1)}>签证 - 如何检查签证状况和条款?</button>
                <button className='btnBig' onClick={() => setChoice(2)}>到达 - 当到达澳大利亚时, 我必须做什么</button>
                <button className='btnBig' onClick={() => setChoice(3)}>学生保险 - 我在澳大利亚留学时需要办理保险吗?</button>
                <button className='btnBig' onClick={() => setChoice(4)}>签证条件 － 在澳洲学习时, 我是否需要遵守签证的所有条款？</button>
                <button className='btnBig' onClick={() => setChoice(5)}>签证和工作</button>
            </div>
            <div className='question'>
                {choice === 1 && <Moving1 lang={lang}/>} 
                {choice === 2 && <Moving2 lang={lang}/>} 
                {choice === 3 && <Moving3 lang={lang}/>} 
                {choice === 4 && <Moving4 lang={lang}/>} 
                {choice === 5 && <Moving5 lang={lang}/>} 
            </div>
        </>
    )
    
    )}

export default Moving