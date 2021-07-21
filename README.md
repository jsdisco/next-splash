TODO:

- re-fetch on scroll

COMMENTS:

- uses getServerSideProps

- clicking on a photo opens a modal with a bigger version of the image and additional information, but closing the modal triggers the Home component to rerender/refetch the images a second time

- the Home component keeps the current layout (list/grid) in state, but loses it when the modal closes
