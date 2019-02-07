import React, { Component } from 'react';
import { AuthContextConsumer } from '../../context/AuthContext';
import LoginForm from '../../components/LoginForm';
import Loading from '../../components/Loading';

export class IndexPage extends Component {
  state = {};

  render() {
    return (
      <AuthContextConsumer>
        {({ isAuth, handleLogin, serverErrorMessage }) =>
          !isAuth ? (
            <LoginForm handleLogin={handleLogin} serverMessage={serverErrorMessage} />
          ) : (
            <Loading />
          )
        }
      </AuthContextConsumer>
    );
  }
}

export default IndexPage;
