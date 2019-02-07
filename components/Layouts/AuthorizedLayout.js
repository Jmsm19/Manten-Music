import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Navigation from '../Navigation';

function AuthorizedLayout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

AuthorizedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthorizedLayout;
