import { server } from '../config';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TopMenu from '../components/TopMenu';
import Photos from '../components/Photos';
import PhotoModal from '../components/PhotoModal';
import Errors from '../components/Errors';

import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  const [photos, setPhotos] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [isGridLayout, setIsGridLayout] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currPhotoId, setCurrPhotoId] = useState(null);
  const [errors, setErrors] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (data.errors) {
      setErrors(data.errors);
    }
    setPhotos(data.photos);
  }, [data]);

  useEffect(() => {
    const fetchImgs = async () => {
      try {
        const res = await fetch(`${server}/api/unsplash?page=${currPage}`);
        const data = await res.json();
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors(null);
          setPhotos((prev) => {
            const ids = prev.map((photo) => photo.id);
            const newUniquePhotos = data.photos.filter(
              (photo) => !ids.includes(photo.id)
            );
            return [...prev, ...newUniquePhotos];
          });
        }
      } catch (err) {
        setErrors([err.toString()]);
      }
    };
    if (currPage > 1) {
      fetchImgs();
    }
  }, [currPage]);

  const handleGridSwitch = () => setIsGridLayout((prev) => !prev);

  const triggerRefetch = () => setCurrPage((prev) => prev + 1);

  const openModal = (id) => {
    router.push(`/?photo=${id}`, `/photo/${id}`, { shallow: true });
    setIsModalOpen(true);
    setCurrPhotoId(id);
  };

  const closeModal = () => {
    router.push('/', undefined, { shallow: true });
    setIsModalOpen(false);
    setCurrPhotoId(null);
  };

  /*
  useEffect(() => {
    if (router.asPath === '/') {
      //router.push('/', undefined, { shallow: true });
    }
    console.log(router);
  }, [router.asPath]);
  */

  return (
    <div className={styles.wrapper}>
      <TopMenu
        isGridLayout={isGridLayout}
        handleGridSwitch={handleGridSwitch}
      />
      {errors && <Errors errors={errors} />}
      {photos && photos.length > 0 && (
        <Photos
          photos={photos}
          triggerRefetch={triggerRefetch}
          isGridLayout={isGridLayout}
          openModal={openModal}
        />
      )}
      {isModalOpen && (
        <div>
          <PhotoModal
            photoId={currPhotoId}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
          />
        </div>
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/unsplash`);
  const data = await res.json();

  data.status = res.status;

  return { props: { data }, revalidate: 60 };
};
