import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class login extends Component {
  logIn() {
    this.props.history.push('/');
    return null;
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.logIn}>
        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default withRouter(login);
