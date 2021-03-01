import React, { useState } from 'react'
//import {Link} from 'react-router-dom'
import Loan1 from './LoanQuestions/Loan1'
import Loan2 from './LoanQuestions/Loan2'
import Loan3 from './LoanQuestions/Loan3'
import Loan4 from './LoanQuestions/Loan4'
import Loan5 from './LoanQuestions/Loan5'


const LoanHome = ({lang}) => {
    const [choice,setChoice] = useState (1)

    return (
        (!lang) ? (
        <>
            <div>
                <button onClick={() => setChoice(1)}>What is a Loan</button>
                <button onClick={() => setChoice(2)}>Types of Debt- what debt could I get into?</button>
                <button onClick={() => setChoice(3)}>Fines and Debt - what should I do?</button>
                <button onClick={() => setChoice(4)}>Letter of Demand - what is it?</button>
                <button onClick={() => setChoice(5)}>Statement of Claim - what is it?</button>
            </div>
            
            <div>
                {choice === 1 && <Loan1 lang={lang}/>} 
                {choice === 2 && <Loan2 lang={lang}/>} 
                {choice === 3 && <Loan3 lang={lang}/>} 
                {choice === 4 && <Loan4 lang={lang}/>} 
                {choice === 5 && <Loan5 lang={lang}/>} 
            </div>
        </>
        
    ) : (
        <>
            <div>
                <button onClick={() => setChoice(1)}>什么是贷款?</button>
                <button onClick={() => setChoice(2)}>债务的类型 - 我能进入什么债务?</button>
                <button onClick={() => setChoice(3)}>罚款和债务 - 我该怎么办?</button>
                <button onClick={() => setChoice(4)}>缴款通知书 - 它是什么?</button>
                <button onClick={() => setChoice(5)}>起诉书 - 它是什么?</button>
            </div>
            <div>
                {choice === 1 && <Loan1 lang={lang}/>} 
                {choice === 2 && <Loan2 lang={lang}/>} 
                {choice === 3 && <Loan3 lang={lang}/>} 
                {choice === 4 && <Loan4 lang={lang}/>} 
                {choice === 5 && <Loan5 lang={lang}/>} 
            </div>
        </>
    )
    
    )}

export default LoanHome
