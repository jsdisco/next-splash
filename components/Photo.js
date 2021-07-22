import { useState } from 'react';
import Image from 'next/image';
import PhotoInfo from './PhotoInfo';
import Modal from 'react-modal';
import { IoCloseCircle } from 'react-icons/io5';

import styles from '../styles/BigImageModal.module.css';

Modal.setAppElement('#__next');

export default function Photo({ photo, shouldTriggerRefetchOnLoad }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchImages = () => {
    console.log('TRIGGER FETCH');
  };

  const loader = ({ src }) => src;

  return (
    <div>
      {isModalOpen ? (
        <div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="BigImage Modal"
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
            <PhotoInfo photo={photo} />
          </Modal>
        </div>
      ) : shouldTriggerRefetchOnLoad ? (
        <Image
          src={photo.urls.regular}
          width={photo.width}
          height={photo.height}
          alt={photo.alt_description}
          onClick={() => setIsModalOpen(true)}
          onLoad={() => fetchImages()}
          loader={loader}
        />
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

// placeholder="blur"
// blurDataURL={`data:image/jpeg;base83,${photo.blur_hash}`}

// data:image/jpeg;base64,LEHV6nWB2yk8pyoJadR*.7kCMdnj
// data:image/jpeg;base64,LuHV9wRjWBay~qWBRjayofj[WBj[
