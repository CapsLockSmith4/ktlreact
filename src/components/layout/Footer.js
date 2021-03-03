import React from 'react'
import {Link} from 'react-router-dom'
import AusFlag from '../../components/images/australian.png'
import ZeFlag from '../../components/images/chinese.png'


const Footer = ({lang, onLangChange}) => {
    
    return (
        <div className='footer'>
            {!lang ? (
                <div className='foot'>
                    <Link className='btnHome' to='/'>Home</Link>
                    <button className='btnFlag' onClick={onLangChange}><img src={ZeFlag} style={{width:'90px', height:'45px'}} /></button>
                </div>
            ) : (
                <div className='foot'>
                    <Link className='btnHome' to='/'>家</Link>
                    <button className='btnFlag' onClick={onLangChange}><img src={AusFlag} style={{width:'90px', height:'45px'}}/></button>
                </div>
            )}
            </div>
            )
}

export default Footer