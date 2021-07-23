import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

export default async function handler(req, res) {
  const page = req.query.page || 1;

  try {
    const result = await unsplash.photos.list({ page, perPage: 10 });

    if (result.errors) {
      console.log(`${result.status} ERROR in unsplash.js: ${result.errors}`);
      res.status(result.status).json({ errors: result.errors, photos: [] });
    } else {
      const { results } = result.response;
      res.status(200).json({ photos: results });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: ['Internal Server Error'], photos: [] });
  }
}
