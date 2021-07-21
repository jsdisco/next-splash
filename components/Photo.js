import Image from 'next/image';
import Link from 'next/link';

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
          />
        </a>
      </Link>
      {isBig && <h3>{photo.width}</h3>}
    </div>
  );
}
