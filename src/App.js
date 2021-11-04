import React from 'react'
import Home from './Home.jsx'
import login from "./Components/logIn/login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={login}/>
        <Route path='/signUp' component={SignUp}/>
      </Router>
    </div>
  )
}

export default App
