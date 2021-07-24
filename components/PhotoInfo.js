import { formatDate } from '../utils/helpers';
import styles from '../styles/PhotoInfo.module.css';

export default function PhotoInfo({ photo, closeModal }) {
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
          <span className={styles.listLeftSpan}>Downloads: </span>
          <span>{photo.downloads}</span>
        </p>
      </div>
      <div className={styles.listItem}>
        <p>
          <span className={styles.listLeftSpan}>Views: </span>
          <span>{photo.views}</span>
        </p>
      </div>
      <div className={styles.listItem}>
        <p>
          <span className={styles.listLeftSpan}>Likes: </span>
          <span>{photo.likes}</span>
        </p>
      </div>
      <div className={styles.listItem}>
        <p>
          <span className={styles.listLeftSpan}>Created at: </span>
          <span>{formatDate(photo.created_at)}</span>
        </p>
      </div>
      <div className={styles.listItem}>
        <p>
          <span className={styles.listLeftSpan}>Last updated: </span>
          <span>{formatDate(photo.updated_at)}</span>
        </p>
      </div>
      <div className={styles.listItem}>
        <p>
          <span className={styles.listLeftSpan}>Dimensions: </span>
          <span>{`${photo.width} x ${photo.height}`}</span>
        </p>
      </div>
      <div className={styles.listItem}>
        <p>
          <span className={styles.listLeftSpan}>Unsplash Link:</span>
          <a href={photo.links.html} target="_blank" rel="noreferrer">
            {photo.links.html}
          </a>
        </p>
      </div>
      <div className={styles.listItemButton}>
        <button onClick={closeModal}>close</button>
      </div>
    </div>
  );
}
