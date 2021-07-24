### DESCRIPTION

At initial page load, `getStaticProps` (with `revalidate=60`) fetches the first 10 images from the endpoint at `/api/unsplash`. Upon scroll, the frontend fetches chunks of 10 images.

A click on an image shows a Modal with a higher resolution image and some more data, which is reflected in the URL. Shallow routing prevents re-renders of the Home component. Accessing the URL directly will lead to a page https://domain.app/photo/[id], which uses `getServerSideProps` to display the image/information.

The `/api/unsplash/[id]` endpoint is used

- by the PhotoModal component to fetch additional information about a photo from the frontend
- by `getServerSideProps` in `/photo/[id].js`

### TODOS:

1. Browser Back/Next buttons don't work when opening an image Modal

2. console (Firefox) shows issues "unreachable code" (I'm unsure if it's even possible for me to fix since it's coming from the built bundle), console (Chrome) shows issues with third-party cookies
