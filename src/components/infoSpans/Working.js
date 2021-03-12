import React, { useState } from 'react'
import Working1 from './WorkingQuestions/Working1'
import Working2 from './WorkingQuestions/Working2'
import Working3 from './WorkingQuestions/Working3'
import Working4 from './WorkingQuestions/Working4'
import Working5 from './WorkingQuestions/Working5'


const Working = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>Types of Employees</button>
                <button className='btnBig' onClick={() => setChoice(2)}>Tax and Superannuation - what do I need to know?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>Employment Conditions - what am I entitled to?</button>
                <button className='btnBig' onClick={() => setChoice(4)}>Discrimination - what if I face discrimination at work? What if I am unfairly dismissed?</button>
                <button className='btnBig' onClick={() => setChoice(5)}>Finishing Work - what should I do if I want to resign from work or finish my job?</button>
            </div>
            <div className='question'>
                {choice === 1 && <Working1 lang={lang}/>} 
                {choice === 2 && <Working2 lang={lang}/>} 
                {choice === 3 && <Working3 lang={lang}/>} 
                {choice === 4 && <Working4 lang={lang}/>} 
                {choice === 5 && <Working5 lang={lang}/>} 
            </div>
        </>
        
    ) : (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>就业类别</button>
                <button className='btnBig' onClick={() => setChoice(2)}>税收和退休金 - 我需要知道些什么?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>就业权利 - 我有什么基本权利和义务?</button>
                <button className='btnBig' onClick={() => setChoice(4)}>歧视 - 我该做什么如果我在工作中面临歧视呢? 我该做什么如果我被不公平地解雇呢?</button>
                <button className='btnBig' onClick={() => setChoice(5)}>終止僱用關係 - 我该做什么如果我想结束工作?</button>
            </div>
            <div className='question'>
                {choice === 1 && <Working1 lang={lang}/>} 
                {choice === 2 && <Working2 lang={lang}/>} 
                {choice === 3 && <Working3 lang={lang}/>} 
                {choice === 4 && <Working4 lang={lang}/>} 
                {choice === 5 && <Working5 lang={lang}/>} 
            </div>
        </>
    )
    
    )}

export default Working