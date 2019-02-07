import React from 'react';
import PropTypes from 'prop-types';

function Header({ username }) {
  return (
    <header>
      <h1>
        Bienvenido, <span className='username'>{username}</span>
      </h1>
    </header>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
