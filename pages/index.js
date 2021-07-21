import { server } from '../config';

import { useState } from 'react';

import Modal from 'react-modal';

import PhotoList from '../components/PhotoList';
import PhotoGrid from '../components/PhotoGrid';

import styles from '../styles/Home.module.css';

Modal.setAppElement('#__next');

export default function Home({ data }) {
  const [photos, setPhotos] = useState(data);

  const [isGridLayout, setIsGridLayout] = useState(true);

  const handleGridSwitch = () => {
    setIsGridLayout((prev) => !prev);
  };
  console.log('RENDER HOME', isGridLayout);
  return (
    <div>
      <div className={styles.homeTop}>
        <h1>Photos</h1>
        <button className={styles.btn} onClick={handleGridSwitch}>
          toggle grid
        </button>
      </div>

      {photos &&
        (isGridLayout ? (
          <PhotoGrid photos={photos} />
        ) : (
          <PhotoList photos={photos} />
        ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  console.log('FETCH IMAGES');
  const res = await fetch(`${server}/api/unsplash`);
  const data = await res.json();

  return { props: { data } };
};
