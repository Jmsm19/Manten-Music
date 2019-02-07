import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { AuthContextConsumer } from '../../context/AuthContext';

class RequireAuthentication extends Component {
  state = {};

  checkIfAccessAllowed = (isAuth, context) => {
    const { children, router } = this.props;
    if (isAuth) {
      return children({
        ...context,
      });
    }
    router.push('/unauthorized');
    return [];
  };

  render() {
    return (
      <AuthContextConsumer>
        {context => this.checkIfAccessAllowed(context.username && context.isAuth, context)}
      </AuthContextConsumer>
    );
  }
}

RequireAuthentication.propTypes = {
  children: PropTypes.func.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(RequireAuthentication);
