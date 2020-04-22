import React from 'react';
import { Link } from 'react-router-dom';

function appHeader() {
  return (
    <header className="app-header">
      app header
      <Link to="/login">Log In</Link>
    </header>
  );
}

export default appHeader;
