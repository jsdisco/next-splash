import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <h2>About</h2>
      <p>
        <span>Image Gallery using the </span>
        <a href="https://unsplash.com/" target="blank" rel="noreferrer">
          Unsplash
        </a>
        <span> API, built with </span>
        <a href="https://nextjs.org/" target="blank" rel="noreferrer">
          Next.js.
        </a>
      </p>

      <footer className={styles.footer}>
        <p>
          <span>Copyright 2021 </span>
          <a href="https://twitter.com/jsdisco" target="blank" rel="noreferrer">
            @jsdisco
          </a>
        </p>
      </footer>
    </div>
  );
};

export default About;
