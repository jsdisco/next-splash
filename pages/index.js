import { server } from '../config';
import { useState, useEffect } from 'react';
import PhotoList from '../components/PhotoList';
import { BsViewStacked, BsGrid1X2 } from 'react-icons/bs';

import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  const [photos, setPhotos] = useState(null);
  const [currPage, setCurrPage] = useState(2); // initial fetch in getStaticProps defaults to 1, further fetches from the frontend start at 2
  const [isGridLayout, setIsGridLayout] = useState(false);

  useEffect(() => {
    setPhotos(data);
  }, [data]);

  useEffect(() => {
    const fetchImgs = async () => {
      const res = await fetch(`${server}/api/unsplash?page=${currPage}`);
      const refetchedData = await res.json();
      setPhotos((prev) => [...prev, ...refetchedData]);
    };
    fetchImgs();
  }, [currPage]);

  const handleGridSwitch = () => setIsGridLayout((prev) => !prev);

  const triggerRefetch = () => setCurrPage((prev) => prev + 1);

  return (
    <div className={styles.wrapper}>
      <div className={styles.topMenu}>
        <h1>Photos</h1>
        <button
          className={styles.btn}
          onClick={handleGridSwitch}
          title={isGridLayout ? 'show as list' : 'show as grid'}
        >
          {isGridLayout ? <BsViewStacked /> : <BsGrid1X2 />}
        </button>
      </div>

      {photos && (
        <PhotoList
          photos={photos}
          triggerRefetch={triggerRefetch}
          isGridLayout={isGridLayout}
        />
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/unsplash`);
  const data = await res.json();

  return { props: { data }, revalidate: 60 };
};
