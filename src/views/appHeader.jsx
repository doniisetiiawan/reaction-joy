import React from 'react';
import { Link } from 'react-router-dom';

function appHeader() {
  return (
    <header className="app-header">
      <Link to="/">
        <h1>Re&#923;ction</h1>
      </Link>
      <section className="account-ctrl">
        <Link to="/users/create">Join</Link>
        <Link to="/login">Log In</Link>
      </section>
    </header>
  );
}

export default appHeader;
