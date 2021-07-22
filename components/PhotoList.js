import { useState } from 'react';
import Photo from '../components/Photo';

import listStyles from '../styles/PhotoList.module.css';

export default function PhotoList({ photos }) {
  return (
    <div className={listStyles.imgList}>
      {photos.map((photo, i) => {
        const isLastImg = i === photos.length - 1;
        return (
          <div key={photo.id} className={listStyles.imgWrapper}>
            <Photo photo={photo} shouldTriggerRefetchOnLoad={isLastImg} />
          </div>
        );
      })}
    </div>
  );
}
