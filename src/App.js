import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Display from './components/layout/Display'
import Loan from './components/infoSpans/Loan'
import Managing from './components/infoSpans/Managing'
import Budget from './components/infoSpans/Budget'
import Bankruptcy from './components/infoSpans/Bankruptcy'
import CreditTenancy from './components/infoSpans/CreditTenancy'
import Domestic from './components/infoSpans/Domestic'
import Driving from './components/infoSpans/Driving'
import Future from './components/infoSpans/Future'
import Guaranteeing from './components/infoSpans/Guaranteeing'
import Moving from './components/infoSpans/Moving'
import Police from './components/infoSpans/Police'
import Scams from './components/infoSpans/Scams'
import Working from './components/infoSpans/Working'
import Tenancy from './components/infoSpans/Tenancy'



import './App.css';

const App = props => {
  const [lang, setLang] = useState (false);
  
  // Changing the Language at any time shouldn't make you restart the app
  const changeLanguage = event => {
      if (lang) {
        setLang(prevCheck => !prevCheck);
      } else {
        setLang(prevCheck => !prevCheck);
      }
    }

  return (
    <Router>
      <div>
        <header>
          <Navbar lang = {lang}/>
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
          <Footer lang= {lang} onLangChange={changeLanguage}/>
        </header>
      </div>
    </Router>
);
}    
export default App;
