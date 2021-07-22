import { server } from '../config';
import { useState } from 'react';
import PhotoList from '../components/PhotoList';
import PhotoGrid from '../components/PhotoGrid';
import { BsViewStacked, BsGrid1X2 } from 'react-icons/bs';

import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  const [photos, setPhotos] = useState(data);
  const [currPage, setCurrPage] = useState(2);
  const [isGridLayout, setIsGridLayout] = useState(true);

  const handleGridSwitch = () => {
    setIsGridLayout((prev) => !prev);
  };

  const fetchImages = async () => {
    console.log('REFETCH');
    const res = await fetch(`${server}/api/unsplash?page=${currPage}`);
    const data = await res.json();
    console.log(data);
    setPhotos((prev) => [...prev, ...data]);
    setCurrPage((prev) => prev + 1);
  };

  console.log('RENDER HOME', isGridLayout);

  return (
    <div className={styles.wrapper}>
      <div className={styles.homeTop}>
        <h1>Photos</h1>
        <button
          className={styles.btn}
          onClick={handleGridSwitch}
          title={isGridLayout ? 'show as list' : 'show as grid'}
        >
          {isGridLayout ? <BsViewStacked size="24" /> : <BsGrid1X2 size="24" />}
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
