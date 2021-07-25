import Image from 'next/image';
import PhotoInfo from './PhotoInfo';

import styles from '../styles/PhotoPage.module.css';

export default function PhotoPage({ photo }) {
  const loader = ({ src }) => src;

  return (
    <div className={styles.photoPage}>
      <div
        className={styles.imgContainer}
        style={{ backgroundColor: photo.color }}
      >
        <div className={styles.imgAlt}>{photo.alt_description}</div>
        <Image
          src={photo.urls.full}
          width={photo.width}
          height={photo.height}
          alt={photo.alt_description}
          loader={loader}
          quality={100}
        />
      </div>
      <PhotoInfo photo={photo} />
    </div>
  );
}
