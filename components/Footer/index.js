import React from 'react';
import { APP_NAME } from '../../config';
import StyledFooter from '../../styles/components/Footer';

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; 2019 - {APP_NAME}</p>
    </StyledFooter>
  );
}

export default Footer;
