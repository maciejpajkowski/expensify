import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => (
    <header>
      <h1>Expenses Calculator</h1>
      <NavLink to="/dashboard" activeClassName="is-active">Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create an expense</NavLink>
      <button onClick={startLogOut}>Log out</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);