import Image from 'next/image';
import { previewTextColor } from '../utils/helpers';

import styles from '../styles/Photo.module.css';
import imgContainerStyles from '../styles/globalImgContainer.module.css';

export default function Photo({ photo, openModal }) {
  const loader = ({ src }) => src;

  return (
    <div className={styles.photo}>
      <div
        className={imgContainerStyles.imgContainer}
        style={{
          backgroundColor: photo.color,
          color: previewTextColor(photo.color),
        }}
      >
        <div className={imgContainerStyles.imgAlt}>{photo.alt_description}</div>
        <Image
          src={photo.urls.regular}
          width={photo.width}
          height={photo.height}
          alt={photo.alt_description}
          onClick={() => openModal(photo.id)}
          loader={loader}
        />
      </div>
    </div>
  );
}
