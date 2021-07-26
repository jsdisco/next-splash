import Image from 'next/image';
import ImgWrapper from './ImgWrapper';
import PhotoInfo from './PhotoInfo';

import wrapperStyles from '../styles/globalWrapper.module.css';

export default function PhotoPage({ photo }) {
  const loader = ({ src }) => src;

  console.log(photo);

  return (
    <div className={wrapperStyles.wrapper}>
      <ImgWrapper photoColor={photo.color} photoAlt={photo.alt_description}>
        <Image
          src={photo.urls.full}
          width={photo.width}
          height={photo.height}
          alt={photo.alt_description}
          loader={loader}
          quality={100}
        />
      </ImgWrapper>

      <PhotoInfo photo={photo} />
    </div>
  );
}
