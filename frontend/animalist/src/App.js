import React from 'react'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import LogIn from './components/pages/LogIn'
import SignUp from './components/pages/SignUp'
import Anime from './components/pages/Anime'
import Movies from './components/pages/Movies'
import Ovas from './components/pages/Ovas'
import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Switch>
            <Route path={'/Anime'} component={Anime}></Route>
            <Route path={'/Movies'} component={Movies}></Route>
            <Route path={'/Ovas'} component={Ovas}></Route>
            <Route path={'/LogIn'} component={LogIn}></Route>
            <Route path={'/SignUp'} component={SignUp}></Route>
            <Route path={'/'} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
export default App;
