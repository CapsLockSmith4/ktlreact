import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = ({lang, title, onLangChange}) => {
    
    return (
        <nav className='navbar'>
            <h1>{title}</h1>
            {!lang ? (
                    <button onClick={onLangChange}>中文</button>
            ) : (
                    <button onClick={onLangChange}>English</button>
            )}
            <Link to='/'>HOME</Link>
        </nav>
    )
}

export default Navbar
