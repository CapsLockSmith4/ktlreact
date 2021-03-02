import React from 'react'
import {Link} from 'react-router-dom'
import AusFlag from '../../components/images/australian.png'
import ZeFlag from '../../components/images/chinese.png'
import Logo from '../../components/images/logo.png'

const Navbar = ({lang, onLangChange}) => {
    
    return (
        <nav className='navbar'>
            {!lang ? (
                <div>
                    <img src={Logo} />
                    <h1>Know the Law</h1>
                    <button onClick={onLangChange}><img src={ZeFlag} /></button>
                </div>
            ) : (
                <div>
                    <img src={Logo} />
                    <h1>知道法律</h1>
                    <button onClick={onLangChange}><img src={AusFlag} /></button>
                </div>
            )}
            <Link to='/'>HOME</Link>
        </nav>
    )
}

export default Navbar
