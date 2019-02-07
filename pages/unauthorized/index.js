import React from 'react';
import Link from 'next/link';
import { StyledMain } from '../../styles/components/Common';
import StyledPage from '../../styles/pages/Unauthorized';

function UnauthorizedPage() {
  return (
    <StyledPage>
      <StyledMain>
        <h2>
          <i className='fas fa-times-circle' /> No tiene <em>permiso</em> para estar aquí
        </h2>
        <p>Por favor, ingrese su nombre en la página inicial</p>
        <Link href='/'>
          <a>
            <i className='fas fa-arrow-left' /> <span className='text'>Ir a la página inicial</span>
          </a>
        </Link>
      </StyledMain>
    </StyledPage>
  );
}

export default UnauthorizedPage;
