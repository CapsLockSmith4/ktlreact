import React, { useState } from 'react'
import Police1 from './PoliceQuestions/Police1'
import Police2 from './PoliceQuestions/Police2'
import Police3 from './PoliceQuestions/Police3'
import Police4 from './PoliceQuestions/Police4'
import Police5 from './PoliceQuestions/Police5'


const Police = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>Police Searches - when can police stop and search persons in the street? Can the police search my home?</button>
                <button className='btnBig' onClick={() => setChoice(2)}>Arrest - when can police arrest me?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>Other Police Powers</button>
                <button className='btnBig' onClick={() => setChoice(4)}>Victims of Crime - what can I do?</button>
                <button className='btnBig' onClick={() => setChoice(5)}>Fines - what do I do if I recieve a fine?</button>
            </div>
            <div className='question'>
                {choice === 1 && <Police1 lang={lang}/>} 
                {choice === 2 && <Police2 lang={lang}/>} 
                {choice === 3 && <Police3 lang={lang}/>} 
                {choice === 4 && <Police4 lang={lang}/>} 
                {choice === 5 && <Police5 lang={lang}/>} 
            </div>
        </>
        
    ) : (
        <>
            <div>
                <button className='btnBig' onClick={() => setChoice(1)}>警方搜查 - 什么时候警方会在街上停下来搜查人? 警方能搜查我的家吗?</button>
                <button className='btnBig' onClick={() => setChoice(2)}>逮捕 - 警方什么时可以逮捕我?</button>
                <button className='btnBig' onClick={() => setChoice(3)}>警察的其他权力</button>
                <button className='btnBig' onClick={() => setChoice(4)}>受害者 - 我能做什么?</button>
                <button className='btnBig' onClick={() => setChoice(5)}>罚款 - 如果我收到罚款, 我该做什么?</button>
            </div>
            <div className='question'>
                {choice === 1 && <Police1 lang={lang}/>} 
                {choice === 2 && <Police2 lang={lang}/>} 
                {choice === 3 && <Police3 lang={lang}/>} 
                {choice === 4 && <Police4 lang={lang}/>} 
                {choice === 5 && <Police5 lang={lang}/>} 
            </div>
        </>
    )
    
    )}

export default Police