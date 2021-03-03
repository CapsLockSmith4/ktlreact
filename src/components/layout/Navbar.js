import React from 'react'
import Logo from '../../components/images/logo.png'

const Navbar = ({lang}) => {
    
    return (
        <nav className='navbar'>
            {!lang ? (
                <div className='navbits navtitle'>
                    <img src={Logo} />
                    <h1>Know the Law</h1>
                </div>
            ) : (
                <div className='navbits navtitle'>
                    <img src={Logo} />
                    <h1>知道法律</h1>
                </div>
            )}
        </nav>
    )
}

export default Navbar
