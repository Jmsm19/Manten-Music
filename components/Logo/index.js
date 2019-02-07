import React from 'react';
import PropTypes from 'prop-types';
import StyledLogo from '../../styles/components/Logo';

function Logo({ short }) {
  return (
    <StyledLogo className='logo'>
      {short ? (
        <h1>
          <i className='fas fa-headphones' />
        </h1>
      ) : (
        <h1>MANTEN MUSIC</h1>
      )}
    </StyledLogo>
  );
}

Logo.defaultProps = {
  short: false,
};

Logo.propTypes = {
  short: PropTypes.bool,
};

export default Logo;
