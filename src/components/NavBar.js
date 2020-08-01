import React from 'react';
import { NavLink } from 'react-router-dom';
import person3 from '../components/yf_logo.jpeg';
const NavBar = () => {
    return (
        <>
        <div className ="container-fluid nav bg">
        <div className="row">
        <div className="col-11 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <NavLink className="navbar-brand" to="#">
      <img src={person3} width="70" height="70" alt="" loading="lazy"/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link" to="/boardofadvisors">Board Of Advisors</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
        </div>

        </div>
        </>

    );
};

export default NavBar;