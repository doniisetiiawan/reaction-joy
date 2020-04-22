import React, { Component } from 'react';

class login extends Component {
  logIn(e) {
    this.props.history.push('/');
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.logIn}>
        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default login;
