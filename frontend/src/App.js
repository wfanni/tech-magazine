import './App.css';
import { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Newsfeed from './components/newsfeed/Newsfeed.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Landing from './components/landing/Landing.jsx';

export default function App() {
  const [isFirstLanding, setIsFirstLanding] = useState(localStorage.getItem('MyBrowser'))

  useEffect (() => {
    
  }, [isFirstLanding])

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            {isFirstLanding ? <Home /> : <Landing setFirstLanding={setIsFirstLanding}/>}
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Newsfeed />
    </>
  );
}


