import { useState } from 'react';
import Photo from '../components/Photo';
import { dividePhotosIntoColumns } from '../utils/helpers';

import gridStyles from '../styles/PhotoGrid.module.css';

export default function PhotoGrid({ photos }) {
  const [photoLists, setPhotoLists] = useState(dividePhotosIntoColumns(photos));

  return (
    <div className={gridStyles.imgGrid}>
      <div className={gridStyles.imgColumnLeft}>
        {photoLists.col1.map((photo) => (
          <div key={photo.id} className={gridStyles.imgWrapper}>
            <Photo photo={photo} isBig={false} />
          </div>
        ))}
      </div>
      <div className={gridStyles.imgColumnCenter}>
        {photoLists.col2.map((photo) => (
          <div key={photo.id} className={gridStyles.imgWrapper}>
            <Photo photo={photo} isBig={false} />
          </div>
        ))}
      </div>
      <div className={gridStyles.imgColumnRight}>
        {photoLists.col3.map((photo) => (
          <div key={photo.id} className={gridStyles.imgWrapper}>
            <Photo photo={photo} isBig={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
