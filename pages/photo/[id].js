import { server } from '../../config';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';

import Photo from '../../components/Photo';

export default function BigImage({ photo }) {
  const router = useRouter();

  /*useEffect(() => {
    router.prefetch('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);*/

  /*if (!router.isFallback && !photo) {
    return <div>ERROR 404 PAGE NOT FOUND</div>;
  }

  console.log('/PHOTO/[id].js');*/

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={() => router.push('/')}
        contentLabel="BigImage Modal"
      >
        {photo && <Photo photo={photo} isBig={true} />}
      </Modal>
    </>
  );
}
export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  const res = await fetch(`${server}/api/unsplash/${id}`);
  const photo = await res.json();

  return {
    props: { photo },
  };
};

/*
 <div>
      <div>
        {router.isFallback ? (
          <div>Loading...</div>
        ) : (
          <BigImage
            url={photo.urls.full}
            width={photo.width}
            height={photo.height}
            alt={photo.alt_description}
          />
        )}
      </div>
      <Link href="/">
        <a>Go back Home</a>
      </Link>
    </div>
*/

/*
export async function getStaticProps({ params }) {
  const id = params.id;
  //const res = await fetch(`https://images-api.nasa.gov/asset/${id}`);
  const res = await fetch(`https://api.unsplash.com/photos/${id}`);
  const photo = await res.json();
  //const photo = await previews.collection.items[0].href;

  return {
    props: { photo },
  };
}
*/
/*
export async function getStaticPaths(){
  const res = await fetch()
}
*/
/*
export async function getStaticPaths() {
  const res = await fetch(
    'https://images-api.nasa.gov/search?media_type=image'
  );
  const preview = await res.json();
  const items = await preview.collection.items;

  return {
    paths:
      items?.map((nasa) => ({
        params: {
          id: nasa.data[0].nasa_id,
        },
      })) || [],
    fallback: true,
  };
}
*/
