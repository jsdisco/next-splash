import { server } from '../../config';
import PhotoPage from '../../components/PhotoPage';
import Errors from '../../components/Errors';

export default function PhotoDetailsPage({ data }) {
  return (
    <>
      {data.errors && <Errors errors={data.errors} status={data.status} />}
      {data.photo && <PhotoPage photo={data.photo}></PhotoPage>}
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const res = await fetch(`${server}/api/unsplash/${query.id}`);
  const data = await res.json();

  data.status = res.status;

  return {
    props: { data },
  };
};
