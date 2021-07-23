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
          {photos.map((photo, i) => (
            <Photo key={`${photo.id}-${i}`} photo={photo} />
          ))}
        </Masonry>
      ) : (
        <div className={styles.imgList}>
          {photos.map((photo, i) => (
            <div key={`${photo.id}-${i}`} className={styles.imgWrapper}>
              <Photo photo={photo} />
            </div>
          ))}
        </div>
      )}
    </InfiniteScroll>
  );
}
