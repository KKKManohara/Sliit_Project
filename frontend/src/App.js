import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



 
function App() {
  return (
   <>
   <Router>
    <Navbar />
      <Switch>
        <Route path ='/' Components={Home} exact> <Home /></Route>
        <Route path ='/AboutUs' Components={AboutUs} exact> <AboutUs /></Route>
        <Route path ='/Contact' Components={Contact} exact> <Contact /></Route>
      </Switch>
    </Router>
   </>
  );
}

export default App;
