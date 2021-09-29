import Head from 'next/head';
import Link from 'next/link';
import styles from "@/styles/404.module.css";

const NotFoundPage = ({ title = 'Opps! Page not found' }) => {
  return (
    <section className={styles.nfContainer}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.errorCode} >
        <h1>4</h1>
        <h1>0</h1>
        <h1>4</h1>
      </div>
      <p className={styles.errDescription}>Page not found</p>
      <p className={styles.errMessage}>Opps! Looks like this page doesn&apos;t exist</p>
      <Link href="/">
        <a className={styles.errLink}>Go to the front page &rarr;</a>
      </Link>
    </section>
  );
};

export default NotFoundPage;