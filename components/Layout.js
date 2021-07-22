import Meta from './Meta';
import Nav from './Nav';
import Header from './Header';

import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Meta />
      <Nav />
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
