import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Display from './components/layout/Display'
import Loan from './components/infoSpans/eng/Loan'
import Managing from './components/infoSpans/eng/Managing'
import Budget from './components/infoSpans/eng/Budget'
import Bankruptcy from './components/infoSpans/eng/Bankruptcy'
import CreditTenancy from './components/infoSpans/eng/CreditTenancy'
import Domestic from './components/infoSpans/eng/Domestic'
import Driving from './components/infoSpans/eng/Driving'
import Future from './components/infoSpans/eng/Future'
import Guaranteeing from './components/infoSpans/eng/Guaranteeing'
import Moving from './components/infoSpans/eng/Moving'
import Police from './components/infoSpans/eng/Police'
import Scams from './components/infoSpans/eng/Scams'
import Working from './components/infoSpans/eng/Working'
import Tenancy from './components/infoSpans/eng/Tenancy';



import './App.css';

const App = props => {
  const [lang, setLang] = useState (false);
  const [title, setTitle] = useState("KNOW THE LAW");

    const changeLanguage = event => {
      if (lang) {
        setLang(prevCheck => !prevCheck);
        setTitle('KNOW THE LAW');
      } else {
        setLang(prevCheck => !prevCheck);
        setTitle('知道法律');
      }
    }

  return (
    <Router>
      <div>
        <header>
          <Navbar lang = {lang} title={title} onLangChange={changeLanguage} />
          <Switch>
            <Route exact path='/' render={props => (<Display lang = {lang}/>)}/> 
            <Route path='/ManageCD'><Managing lang = {lang}/></Route>
            <Route path='/Driving'><Driving lang = {lang}/></Route>
            <Route path='/Working'><Working lang = {lang}/></Route>
            <Route path='/Moving'><Moving lang = {lang}/></Route>
            <Route path='/Police'><Police lang = {lang}/></Route>
            <Route path='/Tenancy'><Tenancy lang = {lang}/></Route>
            <Route path='/Loans'><Loan lang = {lang}/></Route>
            <Route path='/CreditTenancy'><CreditTenancy lang = {lang}/></Route>
            <Route path='/Budget'><Budget lang = {lang}/></Route>
            <Route path='/Scams'><Scams lang = {lang}/></Route>
            <Route path='/Bankruptcy'><Bankruptcy lang = {lang}/></Route>
            <Route path='/Guaranteeing'><Guaranteeing lang = {lang}/></Route>
            <Route path='/Domestic'><Domestic lang = {lang}/></Route>
            <Route path='/Future'><Future lang = {lang}/></Route>
          </Switch>
        </header>
      </div>
    </Router>
);
}    
export default App;
