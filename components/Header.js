import React from 'react';
import Image from 'next/image';

import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <span>Next</span>
        <Image src="/favicon.ico" alt="" width={80} height={80} />
        <span className={styles.colourSpan}>Splash</span>
      </h1>
      <p>Awesome Images</p>
    </header>
  );
};

export default Header;
