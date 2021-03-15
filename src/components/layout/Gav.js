import React from 'react'
import { Scrollbars } from 'rc-scrollbars';

const Gav = () => {
    return (
        <div >
            <Scrollbars style={{ width: 700, height: 300 }}>
            <p className='textbubble'>Hi, I'm <strong>Gav</strong> a know the law bot that can help you find what your looking for. Type in what you want to talk about.</p>
            </Scrollbars>
            
        </div>
    )
}

export default Gav
