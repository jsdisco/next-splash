import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

// PPu_8q2zs2U

export default async function handler(req, res) {
  const id = req.query.id;

  const result = await unsplash.photos.get({ photoId: id });

  if (result.errors) {
    console.log(`ERROR in unsplash.js: ${result.errors}`);
    res.json({ errors });
  } else {
    res.status(200).json(result.response);
  }
}
