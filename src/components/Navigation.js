import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain">Mountain</NavLink></li>
        <li><NavLink to="/puppy">Dogs</NavLink></li>
        <li><NavLink to="/book">Books</NavLink></li>
        <li><NavLink to="/sportcar">Sport Cars</NavLink></li>
        <li><NavLink to="/exercise">Exercise</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;