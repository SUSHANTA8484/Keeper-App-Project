import { Link } from "@mui/material";
import React from "react";


function Navbar(){
  return(
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link"  aria-current="page" to="/">shop</Link>
          
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/Mens">Mens</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Womens">Womens</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Kids">kids</Link> 
        </li>
      
      </ul>
      <li className="logindesing">
      <button type="button" class="btn btn-light">Login</button>
      </li>
      <li className="logindesing">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-dash-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
</svg>
      </li>
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar;