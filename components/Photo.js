import { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import PhotoInfo from './PhotoInfo';
import { IoCloseCircle } from 'react-icons/io5';

import styles from '../styles/Photo.module.css';

Modal.setAppElement('#__next');

export default function Photo({ photo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            />
            <PhotoInfo photo={photo} closeModal={closeModal} />
          </Modal>
        </div>
      ) : (
        <Image
          src={photo.urls.regular}
          width={photo.width}
          height={photo.height}
          alt={photo.alt_description}
          onClick={() => setIsModalOpen(true)}
          loader={loader}
        />
      )}
    </div>
  );
}
