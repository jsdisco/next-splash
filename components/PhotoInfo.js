import { formatDate } from '../utils/helpers';
import styles from '../styles/PhotoInfo.module.css';

export default function PhotoInfo({ photo }) {
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
          <span>{photo.downloads}</span>
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
    </div>
  );
}
