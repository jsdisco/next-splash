//
//
// previously used in a version where clicking on an image led to a different URL
//
//

import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

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
