import React, {useState} from 'react'

const Navbar = ({username}) => {
    const [defaultTitle, setDefaultTitle] = useState('Know the Law');
    const [lang,setLang] = useState(true)
    
    const langChange = e => {
            if (lang) {
                setLang(false);
                setDefaultTitle ('Know the Law');
            } else {
                setLang(true); 
                setDefaultTitle ('知道法律');
            }; 
    };

    return (
        <nav className='navbar'>
            <h1>{defaultTitle}</h1>
            {!lang ? (
                    <button onClick={langChange}>中文</button>
            ) : (
                    <button onClick={langChange}>English</button>
            )}
            {{username} ? <h3>{username}</h3> : <h3>Login</h3>}
        </nav>
    )
}

export default Navbar
