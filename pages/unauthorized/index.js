import React from 'react';
import Link from 'next/link';

function UnauthorizedPage() {
  return (
    <div>
      <h2>No tiene permiso de estar aquí</h2>
      <p>Por favor, ingrese su nombre en la página inicial</p>
      <Link href='/'>
        <a>Ir a la página inicial</a>
      </Link>
    </div>
  );
}

export default UnauthorizedPage;
