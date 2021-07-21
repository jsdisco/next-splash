import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

export default async function handler(_, res) {
  const result = await unsplash.photos.list({ page: 1, perPage: 10 });
  if (result.errors) {
    console.log(`ERROR in unsplash.js: ${result.errors}`);
    res.json({ errors });
  } else {
    const { results } = result.response;
    res.status(200).json(results);
  }
}
