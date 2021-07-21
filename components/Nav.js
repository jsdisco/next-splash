import Link from 'next/link';

import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.navigation}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
