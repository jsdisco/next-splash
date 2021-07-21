import React from 'react';
import Image from 'next/image';

import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={headerStyles.title}>
      <h1>
        Next <Image src="/favicon.ico" alt="" width={80} height={80} />{' '}
        <span>Splash</span>
      </h1>
      <p>Awesome images</p>
    </header>
  );
};

export default Header;
