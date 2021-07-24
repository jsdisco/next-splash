import Link from 'next/link';

import styles from '../styles/CustomErrorPage.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <p>404 | page could not be found</p>
      <p>
        <Link href="/">
          <a>go back home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
