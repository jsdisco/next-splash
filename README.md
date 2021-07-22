### USAGE OF NEXT.JS:

At initial page load, getStaticProps (with revalidate=60) fetches the first 10 images from the only API endpoint at /api/unsplash. Any further calls to the API are made from the frontend.

The [id].js endpoint is unused at the moment (see point 3 below).

### TODOS AND COMMENTS:

1. occasionally it happens that the same image is fetched twice in different chunks -> check if it's an issue with the API (if I'm using it wrong) or if it's unavoidable because the API keeps updating their photo lists while my user is scrolling (in which case, implement manual check)

2. console (Chrome) shows issues "unreachable code", I'm unsure if it's even possible for me to fix since it's coming from the built bundle

3. clicking on an image to get a larger view doesn't change the URL in the address bar to something like https://app.com/photo/[id] (this worked in a previous version, but closing the modal caused a re-render of the Home component including a complete reset of its state)

4. accessibility (while it's unlikely that visually impaired people would use an image gallery, it should still be keyboard-accessible for people who prefer to browse without mouse)

5. in wide viewports, the details view of an image with a portrait aspect ratio makes it necessary to scroll to see the whole image

6. in narrow viewports, after closing the modal, the scroll position isn't always exactly the same as before (when clicking on an image that's only partly in view)

7. the code isn't particularly robust, it doesn't use TypeScript or defaultProps etc, and it lacks proper error handling

8. check compliance with Unsplash API (particularly hotlinking/implementation of image loader)

9. find out how to use the API's photo.blur_hash with the Image component's baseDataURL / placeholder="blur"

10. styling... (button hover effects, slight box-shadows, :focus, minor adjustments for mobile)
