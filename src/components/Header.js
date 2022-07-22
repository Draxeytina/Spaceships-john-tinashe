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
          <nav>
            <ul className="nav-links-list">
              <li key="rockets"><NavLink to="/" className="nav-link">Rockets</NavLink></li>
              <li key="missions"><NavLink to="/missions" className="nav-link">Missions</NavLink></li>
              <li key="profile"><NavLink to="/profile" className="nav-link">My Profile</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
