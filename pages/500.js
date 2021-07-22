import Link from 'next/link';

import styles from '../styles/CustomError.module.css';

const InternalServerError = () => {
  return (
    <div className={styles.container}>
      <p>500 | internal server error</p>
      <p>
        <Link href="/">
          <a>go back home</a>
        </Link>
      </p>
    </div>
  );
};

export default InternalServerError;
