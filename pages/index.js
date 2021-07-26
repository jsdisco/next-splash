import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TopMenu from '../components/TopMenu';
import Photos from '../components/Photos';
import PhotoModal from '../components/PhotoModal';
import Errors from '../components/Errors';

import globalWrapperStyles from '../styles/globalWrapper.module.css';

export default function Home({ data }) {
  const [photos, setPhotos] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [currPhotoId, setCurrPhotoId] = useState(null);
  const [isGridLayout, setIsGridLayout] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (data.errors) {
      setErrors(data.errors);
    }
    setPhotos(data.photos);
  }, [data]);

  // fetch more images when InfiniteScroll component increments currPage
  useEffect(() => {
    const fetchImgs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER}/api/unsplash?page=${currPage}`
        );
        const data = await res.json();

        // response is always an object with a photos (Array) and an errors (Array) property
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

  // handle behaviour for browser back/next btns
  useEffect(() => {
    if (router.asPath === '/') {
      setIsModalOpen(false);
      setCurrPhotoId(null);
    } else {
      setCurrPhotoId(router.asPath.replace('/photo/', ''));
      setIsModalOpen(true);
    }
  }, [router.asPath]);

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

  return (
    <div className={globalWrapperStyles.wrapper}>
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
          <PhotoModal photoId={currPhotoId} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/unsplash`);
  const data = await res.json();

  // res.status is either the status code that came back from Unsplash API or a generic 500
  data.status = res.status;

  return { props: { data }, revalidate: 3600 };
};
