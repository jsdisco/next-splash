## Motivation

An infinite-scroll photo page, built with [Next.js](https://nextjs.org/). 
(Serving as a code sample, as specified in a job interview)

### Use of Next.js

At initial page load, `getStaticProps` (with `revalidate=3600`) fetches the first 10 images from the endpoint at `/api/unsplash`. Upon scroll, the frontend fetches chunks of 10 images.

A click on an image shows a Modal with a higher resolution image and some more data, which is reflected in the URL. Accessing the URL directly will lead to a page https://domain.app/photo/[id], which uses `getStaticProps/getStaticPaths` to display the image/information.

The `/api/unsplash/[id]` endpoint is used

- by the PhotoModal component to fetch additional information about a photo from the frontend
- by `getStaticProps` in `/photo/[id].js`
