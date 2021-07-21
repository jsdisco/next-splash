import Image from 'next/image';
import Link from 'next/link';
import PhotoInfo from './PhotoInfo';

export default function Photo({ photo, isBig }) {
  return (
    <div>
      <Link as={`/photo/${photo.id}`} href="/photo/[id]">
        <a>
          <Image
            src={photo.urls.regular}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            layout="intrinsic"
          />
        </a>
      </Link>
      {isBig && <PhotoInfo photo={photo} />}
    </div>
  );
}
