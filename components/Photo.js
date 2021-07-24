import { useState } from 'react';
import Image from 'next/image';
import PhotoModal from './PhotoModal';

import styles from '../styles/Photo.module.css';

export default function Photo({ photo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAltTextVisible, setIsAltTextVisible] = useState(true);

  const loader = ({ src }) => src;

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.photo}>
      {isModalOpen && (
        <PhotoModal
          photoId={photo.id}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
      <div
        className={styles.imgContainer}
        style={{ backgroundColor: photo.color }}
      >
        <Image
          src={photo.urls.regular}
          width={photo.width}
          height={photo.height}
          alt={photo.alt_description}
          onClick={() => setIsModalOpen(true)}
          onLoad={() => setIsAltTextVisible(false)}
          loader={loader}
        />
        {isAltTextVisible && (
          <div className={styles.imgAlt}>{photo.alt_description}</div>
        )}
      </div>
    </div>
  );
}
