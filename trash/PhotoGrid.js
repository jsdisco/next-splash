import { useState } from 'react';
import Photo from '../components/Photo';
import { dividePhotosIntoColumns } from '../utils/helpers';

import gridStyles from '../styles/PhotoGrid.module.css';

export default function PhotoGrid({ photos, triggerRefetch }) {
  const [photoLists, setPhotoLists] = useState(dividePhotosIntoColumns(photos));
  const [lastId, setLastId] = useState(photos[photos.length - 1].id);

  return (
    <div className={gridStyles.imgGrid}>
      <div className={gridStyles.imgColumnLeft}>
        {photoLists.col1.map((photo) => {
          const isLastImg = photo.id === lastId;
          return (
            <div key={photo.id} className={gridStyles.imgWrapper}>
              <Photo photo={photo} shouldTriggerRefetchOnLoad={isLastImg} />
            </div>
          );
        })}
      </div>
      <div className={gridStyles.imgColumnCenter}>
        {photoLists.col2.map((photo) => {
          const isLastImg = photo.id === lastId;
          return (
            <div key={photo.id} className={gridStyles.imgWrapper}>
              <Photo photo={photo} shouldTriggerRefetchOnLoad={isLastImg} />
            </div>
          );
        })}
      </div>
      <div className={gridStyles.imgColumnRight}>
        {photoLists.col3.map((photo) => {
          const isLastImg = photo.id === lastId;
          return (
            <div key={photo.id} className={gridStyles.imgWrapper}>
              <Photo photo={photo} shouldTriggerRefetchOnLoad={isLastImg} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
