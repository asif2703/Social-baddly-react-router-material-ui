import React, { useState, useEffect } from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Comment from './Components/Comment/Comment';


function App() {
  
  
  return (
    <Router> 
     <Switch>
       <Route path="/home" >
         <Home></Home>

       </Route>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="*">
         <NoMatch></NoMatch>
         <Router>
            <Switch>
            
            <Route path="/comment/:postId">
                <Comment/>
                </Route>
            </Switch>
        </Router>
       </Route>
     </Switch>
    </Router>

  );
}

export default App;
