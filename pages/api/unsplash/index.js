import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

// responds with an object that always has a photos and an errors property
export default async function handler(req, res) {
  // initial fetch from getStaticProps comes without query attached
  const page = req.query.page || 1;

  try {
    const result = await unsplash.photos.list({ page, perPage: 10 });

    if (result.errors) {
      console.log(`${result.status} ERROR in /api/unsplash: ${result.errors}`);
      res.status(result.status).json({ photos: [], errors: result.errors });
    } else {
      const { results } = result.response;
      res.status(result.status).json({ photos: results, errors: null });
    }
  } catch (err) {
    console.log(`catch ERROR in /api/unsplash: ${err.message}`);
    res.status(500).json({
      photos: [],
      errors: (err.message && [err.message]) || ['Internal Server Error'],
    });
  }
}
