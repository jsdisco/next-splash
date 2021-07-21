import Meta from './Meta';
import Nav from './Nav';
import Header from './Header';

import layoutStyles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Meta />
      <Nav />
      <Header />
      <main className={layoutStyles.main}>{children}</main>
    </div>
  );
};

export default Layout;
