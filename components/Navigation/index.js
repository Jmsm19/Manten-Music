import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import StyledNav from '../../styles/components/Navigation';
import Logo from '../Logo';

function Navigation({ router }) {
  const setActiveOn = path =>
    classnames({
      active: router.pathname === path,
    });

  return (
    <StyledNav>
      <div className='left'>
        <Logo short />
      </div>

      <div className='right'>
        <Link href='/home'>
          <a className={setActiveOn('/home')}>Home</a>
        </Link>
        <Link href='/list'>
          <a className={setActiveOn('/list')}>Artistas</a>
        </Link>
      </div>
    </StyledNav>
  );
}

Navigation.propTypes = {
  router: PropTypes.shape().isRequired,
};

export default withRouter(Navigation);
