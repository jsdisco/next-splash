import PhotoPage from '../../components/PhotoPage';
import Errors from '../../components/Errors';

export default function PhotoDetailsPage({ data }) {
  return (
    <>
      {data.errors && <Errors errors={data.errors} status={data.status} />}
      {data.photo && <PhotoPage photo={data.photo} />}
    </>
  );
}

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
