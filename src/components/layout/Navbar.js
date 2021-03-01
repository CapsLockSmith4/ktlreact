import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = ({lang, onLangChange}) => {
    
    return (
        <nav className='navbar'>
            {!lang ? (
                <div>
                    <h1>Know the Law</h1>
                    <button onClick={onLangChange}>中文</button>
                </div>
            ) : (
                <div>
                    <h1>知道法律</h1>
                    <button onClick={onLangChange}>English</button>
                </div>
            )}
            <Link to='/'>HOME</Link>
        </nav>
    )
}

export default Navbar
