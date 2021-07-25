import Image from 'next/image';
import ImgWrapper from './ImgWrapper';

import styles from '../styles/Photo.module.css';

export default function Photo({ photo, openModal }) {
  const loader = ({ src }) => src;

  return (
    <div className={styles.photo}>
      <ImgWrapper photoColor={photo.color} photoAlt={photo.alt_description}>
        <Image
          src={photo.urls.regular}
          width={photo.width}
          height={photo.height}
          alt={photo.alt_description}
          onClick={() => openModal(photo.id)}
          loader={loader}
        />
      </ImgWrapper>
    </div>
  );
}
