import React from 'react';
import { Link } from "react-router-dom";


export default function navBar() {
  const handleNavLinkClick =(title)=> {
    document.title = "NewsMonkey || "+title; // Set the document title
  }
  return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/" onClick={() => handleNavLinkClick('Home')}>NewsMonkey</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/"onClick={() => handleNavLinkClick('Home')}>Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/entertainment" onClick={() => handleNavLinkClick('Entertainment')}>Entertainment</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/business" onClick={() => handleNavLinkClick('Business')}>Business</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/health" onClick={() => handleNavLinkClick('Health')}>Health</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/science" onClick={() => handleNavLinkClick('Science')}>Science</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/sports" onClick={() => handleNavLinkClick('Sports')}>Sports</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/technology" onClick={() => handleNavLinkClick('Technology')}>Technology</Link>
            </li> 
          </ul>
        </div>
      </nav>
    );
  }
