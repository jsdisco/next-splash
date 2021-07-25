import Image from 'next/image';
import PhotoInfo from './PhotoInfo';

import wrapperStyles from '../styles/globalWrapper.module.css';
import imgContainerStyles from '../styles/globalImgContainer.module.css';

export default function PhotoPage({ photo }) {
  const loader = ({ src }) => src;

  return (
    <div className={wrapperStyles.wrapper}>
      <div
        className={imgContainerStyles.imgContainer}
        style={{ backgroundColor: photo.color }}
      >
        <div className={imgContainerStyles.imgAlt}>{photo.alt_description}</div>
        <Image
          src={photo.urls.full}
          width={photo.width}
          height={photo.height}
          alt={photo.alt_description}
          loader={loader}
          quality={100}
        />
      </div>
      <PhotoInfo photo={photo} />
    </div>
  );
}
