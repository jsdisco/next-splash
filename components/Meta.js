import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <meta name="keywords" content="images, high quality"></meta>
      <meta
        name="description"
        content="awesome images brought to you by Unsplash, powered by Next.js"
      ></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <title>Next Splash</title>
    </Head>
  );
};

export default Meta;
