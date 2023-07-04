import React from 'react';
import Navbar from './Components/Navbar';
import  {BrowserRouter as Router,Switch , Routs , Links, Route } from 'react-router-dom';
import Home from './Components/Home';


const App = () => {
    return(
        <>
        <navbar/>
        <Router>
          <Switch>
            <Route path='/' Component={Home} exact 
          </Switch>
        </Router>
        </>
    )
}
export default App
