import { server } from '../config';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import PhotoInfo from './PhotoInfo';
import Errors from './Errors';
import { IoCloseCircle } from 'react-icons/io5';

import styles from '../styles/PhotoModal.module.css';

Modal.setAppElement('#__next');

export default function PhotoModal({ photoId, isModalOpen, closeModal }) {
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState(null);

  const loader = ({ src }) => src;

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const res = await fetch(`${server}/api/unsplash/${photoId}`);
        const data = await res.json();
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors(null);
          setPhoto(data.photo);
        }
      } catch (err) {
        setErrors([err.toString()]);
      }
    };
    fetchImg();
  }, [photoId]);

  return (
    <>
      {errors && <Errors errors={errors} />}
      {photo && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Photo - Additional Info"
          preventScroll={true}
          className={styles.modal}
        >
          <div className={styles.iconClose}>
            <IoCloseCircle color="cadetblue" size="32" onClick={closeModal} />
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
      )}
    </>
  );
}
