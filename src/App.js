import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './components/Home';
import BoardOfAdvisors from './components/BoardOfAdvisors';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
      <>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/boardofadvisors" component={BoardOfAdvisors}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>
      <Home/>
      </Switch>
      </>
  );
};

export default App;