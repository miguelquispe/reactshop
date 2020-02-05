import * as React from 'react';

import logo from './logo.svg';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title">React Shop</h1>
      <nav>
        <NavLink to="/products" className="header-link" activeClassName="header-link-active">Products</NavLink>
        <NavLink to="/admin" className="header-Navlink" activeClassName="header-link-active">Admin</NavLink>
      </nav>
    </header>
  )
}

export default Header;