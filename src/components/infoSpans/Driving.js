import React, { useState } from 'react'
import Driving1 from './DrivingQuestions/Driving1'
import Driving2 from './DrivingQuestions/Driving2'
import Driving3 from './DrivingQuestions/Driving3'
import Driving4 from './DrivingQuestions/Driving4'
import Driving5 from './DrivingQuestions/Driving5'



const Driving = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>Licence - do I need one?</button>
                <button className='btnBig' onClick={() => setChoice(2)}>How to get a licence?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>Insurance and my vehicle?</button>
                <button className='btnBig' onClick={() => setChoice(4)}>Registration and my vehicle?</button>
                <button className='btnBig' onClick={() => setChoice(5)}>Alcohol & Drugs</button>
            </div>
            <div className='question'>
                {choice === 1 && <Driving1 lang={lang}/>} 
                {choice === 2 && <Driving2 lang={lang}/>} 
                {choice === 3 && <Driving3 lang={lang}/>} 
                {choice === 4 && <Driving4 lang={lang}/>} 
                {choice === 5 && <Driving5 lang={lang}/>} 
            </div>
        </>
        
    ) : (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>驾照 - 我需要有驾照吗?</button>
                <button className='btnBig' onClick={() => setChoice(2)}>如何得到驾照?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>保险 - 我需要给我的车投保吗?</button>
                <button className='btnBig' onClick={() => setChoice(4)}>注册 - 我必须注册我的车吗?</button>
                <button className='btnBig' onClick={() => setChoice(5)}>酒精和毒品</button>
            </div>
            <div className='question'>
                {choice === 1 && <Driving1 lang={lang}/>} 
                {choice === 2 && <Driving2 lang={lang}/>} 
                {choice === 3 && <Driving3 lang={lang}/>} 
                {choice === 4 && <Driving4 lang={lang}/>} 
                {choice === 5 && <Driving5 lang={lang}/>} 
            </div>
        </>
    )
    
    )}

export default Driving