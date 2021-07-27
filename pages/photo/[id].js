import PhotoPage from '../../components/PhotoPage';
import Errors from '../../components/Errors';

export default function PhotoDetailsPage({ data }) {
  return (
    <>
      {data && data.errors && (
        <Errors errors={data.errors} status={data.status} />
      )}
      {data && data.photo && <PhotoPage photo={data.photo} />}
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/api/unsplash/${params.id}`
  );
  const data = await res.json();

  data.status = res.status;

  return {
    props: { data },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

/*
export const getServerSideProps = async ({ query }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/api/unsplash/${query.id}`
  );
  const data = await res.json();

  data.status = res.status;

  return {
    props: { data },
  };
};
*/
