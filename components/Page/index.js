/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthorizedLayout from '../Layouts/AuthorizedLayout';
import StyledLoginPage from '../../styles/pages/LoginPage';

class Page extends Component {
  state = {};

  render() {
    const { children, isAuth } = this.props;

    return isAuth ? (
      <AuthorizedLayout>{children}</AuthorizedLayout>
    ) : (
      <StyledLoginPage>{children}</StyledLoginPage>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default Page;
