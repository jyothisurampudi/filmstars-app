import React from "react";
import { Dropdown } from "bootstrap";
import {Navbar} from "bootstrap"
//import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navbar1(){
    return(
      <nav class="navbar navbar-dark bg-dark">
     <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
  <Link to="/"   class="navbar-brand">FILM STARS</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto  my-2 my-lg-0">
        <li class="nav-item">
        <Link to="/" class="nav-link">HOME</Link>
        </li>
        <li class="nav-item">
        <Link to="/login" class="nav-link" >LOGIN</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SELECT
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to ="/twpage"><a class="dropdown-item" href="#">TOLLYWOOD</a></Link></li>
            <li><Link to ="/bwpage"><a class="dropdown-item" href="#">BOLLYWOOD</a></Link></li>
          
            <li><a class="dropdown-item" href="#">HOLLYWOOD</a></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </nav>
    
   
    )
}
export default Navbar1;