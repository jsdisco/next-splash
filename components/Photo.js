import Image from 'next/image';

import styles from '../styles/Photo.module.css';

export default function Photo({ photo, openModal }) {
  const loader = ({ src }) => src;

  return (
    <div className={styles.photo}>
      <div
        className={styles.imgContainer}
        style={{ backgroundColor: photo.color }}
      >
        <div className={styles.imgAlt}>{photo.alt_description}</div>
        <Image
          src={photo.urls.regular}
          width={photo.width}
          height={photo.height}
          alt={photo.alt_description || ''}
          onClick={() => openModal(photo.id)}
          loader={loader}
        />
      </div>
    </div>
  );
}
