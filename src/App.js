import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Careers from './pages/Careers/Careers';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';
import { translations } from './translations.js'
import {useEffect } from 'react'
import { MyHookProvider, useMyHook } from './components/myHook';

function App() {
  useEffect(() => {
    // added line to grab translation file (can use the same method as food_data to grab translations file)
    sessionStorage.setItem("translations", JSON.stringify(translations))
    // sessionStorage.setItem("translationsMode", "en")
}, [])
  return (
    <MyHookProvider>
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/careers' component={Careers} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>

          <Footer />
      </Router>
      </MyHookProvider>
    
  );
}

export default App;
