import React from 'react';
import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <Link href='/home'>
        <a>Home</a>
      </Link>
      <Link href='/list'>
        <a>Artistas</a>
      </Link>
    </nav>
  );
}

export default Navigation;
