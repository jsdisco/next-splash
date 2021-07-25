import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

export default async function handler(req, res) {
  try {
    const result = await unsplash.photos.get({ photoId: req.query.id });
    if (result.errors) {
      console.log(
        `${result.status} ERROR in /api/unsplash/[id]: ${result.errors}`
      );
      res.status(result.status).json({ errors: result.errors, photo: null });
    } else {
      res.status(200).json({ photo: result.response });
    }
  } catch (err) {
    console.log(`catch ERROR in /api/unsplash/[id]: ${err.message}`);
    res.status(500).json({
      errors: (err.message && [err.message]) || ['Internal Server Error'],
      photo: null,
    });
  }
}
