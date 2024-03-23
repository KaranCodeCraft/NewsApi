import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  handleNavLinkClick(title) {
    document.title = "NewsMonkey || "+title; // Set the document title
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/" onClick={() => this.handleNavLinkClick('Home')}>NewsMonkey</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/"onClick={() => this.handleNavLinkClick('Home')}>Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/entertainment" onClick={() => this.handleNavLinkClick('Entertainment')}>Entertainment</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/business" onClick={() => this.handleNavLinkClick('Business')}>Business</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/health" onClick={() => this.handleNavLinkClick('Health')}>Health</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/science" onClick={() => this.handleNavLinkClick('Science')}>Science</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/sports" onClick={() => this.handleNavLinkClick('Sports')}>Sports</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/technology" onClick={() => this.handleNavLinkClick('Technology')}>Technology</Link>
            </li> 
          </ul>
        </div>
      </nav>
    );
  }
}
