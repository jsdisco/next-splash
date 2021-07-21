import Photo from '../components/Photo';

import listStyles from '../styles/PhotoList.module.css';

export default function PhotoList({ photos }) {
  return (
    <div className={listStyles.imgList}>
      {photos.map((photo) => (
        <div key={photo.id} className={listStyles.imgWrapper}>
          <Photo photo={photo} isBig={false} />
        </div>
      ))}
    </div>
  );
}
