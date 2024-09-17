import React, { Component } from "react";
 import './App.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {
        logo: "https://www.achieversit.com/assets/images/logo-white.png",
        
      },
      links: [
        { label: "Home", href: "/" },
        { label: "All Courses", href: "/All-courses" },
        { label: "Corporate Training", href: "/corporate-training" },
        { label: "Placements", href: "/Placements" },
        { label: "Internships", href: "/Internships" },
        { label: "Review", href: "/Review" },
        
      ],
    };
  }

  render() {
    const { logo  } = this.state.company;
    return (
      <header className="header">
        <div>
          <img src={logo} alt="logo" />
        </div>
        

        <nav className="navbar">
          <ul className="navlist">
            {this.state.links.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}