import React from 'react'
import {Link} from 'react-router-dom'
import AusFlag from '../../components/images/australian.png'
import ZeFlag from '../../components/images/chinese.png'
import Logo from '../../components/images/logo.png'

const Navbar = ({lang, onLangChange}) => {
    
    return (
        <nav className='navbar'>
            {!lang ? (
                <div className='navbits'>
                    <div className='navtitle'>
                        <img src={Logo} />
                        <h1>Know the Law</h1>
                    </div>
                    
                    <button  onClick={onLangChange}><img src={ZeFlag} style={{width:'90px', height:'45px'}} /></button>
                </div>
            ) : (
                <div className='navbits'>
                    <div className='navtitle'>
                    <img src={Logo} />
                    <h1>知道法律</h1>
                    </div>
                    
                    <button  onClick={onLangChange}><img src={AusFlag} style={{width:'90px', height:'45px'}}/></button>
                </div>
            )}
            <button className='btn' onclick={()=><Link to='/'/>}>Home</button>
        </nav>
    )
}

export default Navbar
