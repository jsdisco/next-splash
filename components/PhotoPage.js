import Image from 'next/image';
import PhotoInfo from './PhotoInfo';

import styles from '../styles/PhotoPage.module.css';

export default function PhotoPage({ photo }) {
  const loader = ({ src }) => src;

  return (
    <div className={styles.photoPage}>
      <Image
        src={photo.urls.regular}
        width={photo.width}
        height={photo.height}
        alt={photo.alt_description}
        loader={loader}
        quality={100}
      />
      <PhotoInfo photo={photo} />
    </div>
  );
}
