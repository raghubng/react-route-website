import React from 'react'
import logo from '../../assets/images/logo.png'

import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Portfolio from './Portfolio';
import { NavLink, } from 'react-router-dom';
export default function Header() {
  return (
    <div>
       
       <header className="fixed-top">
        <div className="container-fluid  header">
          <div className="container">
            <nav className="navbar navbar-expand-lg" id="sticky-nav">
                <a className="navbar-brand white" href="#">
                  <img src={logo} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="">
                <ul className="navbar-nav ms-auto">
                <li className="nav__item"><NavLink to='/'>Home</NavLink></li>
            <li className="nav__item"><NavLink to='/About'>about</NavLink></li>
            <li className="nav__item"><NavLink to='/service'>Service</NavLink></li>
            <li className="nav__item"><NavLink to='/portfolio'>Portfolio</NavLink></li>
            <li className="nav__item"><NavLink to='/contact'>Contact</NavLink></li>
                     
                    </ul>
                </div>
            </nav>
          </div>
        </div>
      </header>
     
    </div>
  )
}
