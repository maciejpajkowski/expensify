import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
      <h1>Expenses Calculator</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create an expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Halp pls</NavLink>
    </header>
);

export default Header;