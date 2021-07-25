import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

// responds with an object that always has a photo (Object) and an errors (Array) property
export default async function handler(req, res) {
  try {
    const result = await unsplash.photos.get({ photoId: req.query.id });
    if (result.errors) {
      console.log(
        `${result.status} ERROR in /api/unsplash/[id]: ${result.errors}`
      );
      res.status(result.status).json({ errors: result.errors, photo: null });
    } else {
      res.status(result.status).json({ errors: null, photo: result.response });
    }
  } catch (err) {
    console.log(`catch ERROR in /api/unsplash/[id]: ${err.message}`);
    res.status(500).json({
      errors: (err.message && [err.message]) || ['Internal Server Error'],
      photo: null,
    });
  }
}
