import { formatDate } from '../utils/helpers';
import styles from '../styles/PhotoInfo.module.css';

export default function PhotoInfo({ photo }) {
  if (photo.links.html === 'https://unsplash.com/photos/e5dlsEXc4dI') {
    console.log(photo);
  }

  return (
    <div>
      <div className={styles.listItem}>
        <p className={styles.attribution}>
          <span>Photo by </span>
          <a
            target="_blank"
            rel="noreferrer"
            href={`${photo.user.links.html}?utm_source=next-splash&utm_medium=referral`}
          >
            {photo.user.name}
          </a>
          <span> on </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://unsplash.com/?utm_source=next-splash&utm_medium=referral"
          >
            Unsplash
          </a>
        </p>
      </div>
      <div className={styles.listItem}>
        <p>
          <span className={styles.listItemLeft}>Downloads: </span>
          <span>{photo.downloads || '-'}</span>
        </p>
      </div>
      <div className={styles.listItem}>
        <p>
          <span className={styles.listItemLeft}>Likes: </span>
          <span>{photo.likes}</span>
        </p>
      </div>
      <div className={styles.listItem}>
        <p>
          <span className={styles.listItemLeft}>Created at: </span>
          <span>{formatDate(photo.created_at)}</span>
        </p>
      </div>
      <div className={styles.listItem}>
        <p>
          <span className={styles.listItemLeft}>Last updated: </span>
          <span>{formatDate(photo.updated_at)}</span>
        </p>
      </div>
      <div className={styles.listItem}>
        <p>
          <span className={styles.listItemLeft}>Dimensions: </span>
          <span>{`${photo.width} x ${photo.height}`}</span>
        </p>
      </div>
      <div className={styles.listItemLast}>
        <p>
          <span className={styles.listItemLeft}>Unsplash Link:</span>
          <a href={photo.links.html}>{photo.links.html}</a>
        </p>
      </div>
    </div>
  );
}
