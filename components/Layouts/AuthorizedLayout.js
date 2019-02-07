import React from 'react';
import PropTypes from 'prop-types';
import { StyledMain } from '../../styles/components/Common';
import StyledLayout from '../../styles/components/AuthorizedLayout';
import Navigation from '../Navigation';
import Footer from '../Footer';

function AuthorizedLayout({ children }) {
  return (
    <StyledLayout>
      <Navigation />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledLayout>
  );
}

AuthorizedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthorizedLayout;
