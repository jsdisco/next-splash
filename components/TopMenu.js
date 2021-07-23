import { BsViewStacked, BsGrid1X2 } from 'react-icons/bs';

import styles from '../styles/TopMenu.module.css';

export default function TopMenu({ isGridLayout, handleGridSwitch }) {
  return (
    <div className={styles.topMenu}>
      <h2>Photos</h2>
      <button
        className={styles.btn}
        onClick={handleGridSwitch}
        title={isGridLayout ? 'show as list' : 'show as grid'}
      >
        {isGridLayout ? <BsViewStacked /> : <BsGrid1X2 />}
      </button>
    </div>
  );
}
