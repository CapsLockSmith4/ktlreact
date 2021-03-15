import React from 'react'
import Logo from '../../components/images/logo.png'

const Navbar = ({lang}) => {
    
    return (
        <nav className='navbar'>
            {!lang ? (
                <div className='navbits navtitle'>
                    <span className='inline'> <img src={Logo} />
                    <h1 style={{'margin-left': '20px'}}>Know the Law</h1>
                    </span>
                    
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
