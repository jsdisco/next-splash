import { server } from '../config';
import { useState, useEffect } from 'react';
import TopMenu from '../components/TopMenu';
import PhotoList from '../components/PhotoList';

import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  const [photos, setPhotos] = useState(null);
  const [currPage, setCurrPage] = useState(1);
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
    if (currPage > 1) {
      fetchImgs();
    }
  }, [currPage]);

  const handleGridSwitch = () => setIsGridLayout((prev) => !prev);

  const triggerRefetch = () => setCurrPage((prev) => prev + 1);

  return (
    <div className={styles.wrapper}>
      <TopMenu
        isGridLayout={isGridLayout}
        handleGridSwitch={handleGridSwitch}
      />

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
