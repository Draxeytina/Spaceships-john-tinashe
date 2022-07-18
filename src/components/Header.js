import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/space_travellers.png';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <div className="inner-header">
          <div className="header-logo">
            <NavLink className="nav-logo" to="/">
              <img src={logo} alt="logo" />
              <h3>Space Travellers&apos; Hub</h3>
            </NavLink>
          </div>
          <nav />
        </div>
      </header>
    );
  }
}
export default Header;
