import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import PresentationCard from '~/components/cards/PresentationCard';
import ShortenForm from '~/components/form/ShortenForm';

const siteCards = [
  {
    id: 0,
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    icon: "/images/icon-brand-recognition.svg"
  },
  {
    id: 1,
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: "/images/icon-detailed-records.svg"
  },
  {
    id: 2,
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: "/images/icon-fully-customizable.svg"
  },
]

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Home: NextPage = () => {

  return (
    <div className={styles.home_Container}>

      <section className={styles.more_About}>
        <div className={styles.more_Left}>
          <h1>More than just shorter links</h1>
          <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <a className="info__button">Get Started</a>
        </div>
        <div className={styles.working_Img}>
          <img src={`${prefix}/"/images/illustration-working.svg`} alt="illustration-working" />
        </div>
      </section>

      <section className={styles.url_Form}>
        <ShortenForm />
        <div className={styles.site_Statistic}>
          <h1 className={`${styles.site_Title} ${styles.dark}`}>Advanced Statistics</h1>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className={styles.cards_List}>
          {siteCards.map(card => {
            return <PresentationCard key={card.id} title={card.title} text={card.text} icon={card.icon} />
          })}
        </div>
      </section>

      <section className={styles.boost_Links}>
        <h1 className={`${styles.site_Title} ${styles.white}`}>Boost your links today</h1>
        <a className="info__button">Get Started</a>
      </section>
    </div>
  )
}

export default Home
