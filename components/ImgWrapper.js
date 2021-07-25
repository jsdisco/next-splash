import { previewTextColor } from '../utils/helpers';
import styles from '../styles/ImgWrapper.module.css';

export default function ImgWrapper({ children, photoColor, photoAlt }) {
  return (
    <div
      className={styles.imgContainer}
      style={{
        backgroundColor: photoColor,
        color: previewTextColor(photoColor),
      }}
    >
      <div className={styles.imgAlt}>{photoAlt}</div>
      {children}
    </div>
  );
}
