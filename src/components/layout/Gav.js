import React, { useState } from 'react';
import { Scrollbars } from 'rc-scrollbars';

const [question,setQuestion] = 'type inquiry here';

const handleQuestion = (question) => {
return (`text box ${question}`);
}


const Gav = () => {
    return (
        <div >
            <Scrollbars style={{ width: 1200, height: 300 }}>
            <p className='gavbubble'>Hi, I'm <strong>Gav</strong> a know the law bot that can help you find what your looking for. Type in what you want to talk about.</p>
            </Scrollbars>
            <form>
                <input type="text" name='question' onChange={handleQuestion} />
            </form>
            
        </div>
    )
}

export default Gav
