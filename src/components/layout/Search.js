import React, {useState} from 'react'

const Search = ({changeUser}) => {
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        changeUser(text);
    };

    const onChange = e => setText(e.target.value); 

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label for='username'>Username:</label>
                <input type='text' id='username' placeholder='Type here' onChange={onChange} name='username' />
                <input type='Submit' value='Submit' />
            </form>
        </div>
    )
};

export default Search
