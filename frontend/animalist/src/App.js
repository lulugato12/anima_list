import React from 'react'
import {  BrowserRouter as Switch, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import Anime from './components/pages/Anime'
import Movies from './components/pages/Movies'
import Ovas from './components/pages/Ovas'
import LogIn from './components/pages/LogIn'
import './App.css';

function App() {
  return (
    <div className="body-wrap">
        <Layout>
          <Switch>
            <Route path={'/Anime'} component={ () => <Anime /> }></Route>
            <Route path={'/Movies'} component={ () => <Movies /> }></Route>
            <Route path={'/Ovas'} component={ () => <Ovas /> }></Route>
            <Route path={'/SignUp'} component={ () => <SignUp /> }></Route>
            <Route path={"/LogIn"} element={<LogIn/>}/>
            <Route path={'/'} component={ () => <Home /> }></Route>
          </Switch>
        </Layout>
    </div>
  );
}
export default App;
