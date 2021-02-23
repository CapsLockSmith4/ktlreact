import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Search from  './components/layout/Search';
import './App.css';

function App() {
  const [text, setText] = useState('Prop Drilled!!!');
    const changeUser = (text) => {
    setText(text);
  }
  return (
    <div>
      <header>
        <Navbar username={text} />
        <Search changeUser={changeUser}/>
      </header>
    </div>
  );
}

export default App;
