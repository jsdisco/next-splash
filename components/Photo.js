import { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import PhotoInfo from './PhotoInfo';
import { IoCloseCircle } from 'react-icons/io5';

import styles from '../styles/Photo.module.css';

Modal.setAppElement('#__next');

export default function Photo({ photo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAltTextVisible, setIsAltTextVisible] = useState(true);

  const loader = ({ src }) => src;

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.photo}>
      {isModalOpen ? (
        <div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Photo - Additional Info"
            className={styles.modal}
          >
            <div className={styles.iconClose}>
              <IoCloseCircle
                color="cadetblue"
                size="32"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            <Image
              src={photo.urls.regular}
              width={photo.width}
              height={photo.height}
              alt={photo.alt_description}
              loader={loader}
              quality={100}
            />
            <PhotoInfo photo={photo} closeModal={closeModal} />
          </Modal>
        </div>
      ) : (
        <div className={styles.imgContainer}>
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
      )}
    </div>
  );
}
