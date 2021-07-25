import { server } from '../../config';
import { useState, useEffect } from 'react';
import PhotoPage from '../../components/PhotoPage';
import Errors from '../../components/Errors';

export default function PhotoDetailsPage({ data }) {
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (data.errors) {
      setErrors(data.errors);
    } else {
      setErrors(null);
    }
  }, [data]);

  return (
    <>
      {errors && <Errors errors={errors} />}
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
