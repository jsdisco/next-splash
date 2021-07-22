import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import Photo from '../components/Photo';

import styles from '../styles/PhotoList.module.css';

export default function PhotoList({ photos, triggerRefetch, isGridLayout }) {
  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={triggerRefetch}
      hasMore={true}
    >
      {isGridLayout ? (
        <Masonry
          breakpointCols={3}
          className={styles.masonryGrid}
          columnClassName={styles.masonryGridColumn}
        >
          {photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </Masonry>
      ) : (
        <div className={styles.imgList}>
          {photos.map((photo) => (
            <div key={photo.id} className={styles.imgWrapper}>
              <Photo photo={photo} />
            </div>
          ))}
        </div>
      )}
    </InfiniteScroll>
  );
}
