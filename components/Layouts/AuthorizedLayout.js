import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';

function AuthorizedLayout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

AuthorizedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthorizedLayout;
