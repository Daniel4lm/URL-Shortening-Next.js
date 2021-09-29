import { FunctionComponent, ReactChild, ReactNode } from "react";
import styles from "./PresentationCard.module.css";

interface PresentationCardProps {
    title: string;
    text: string;
    icon: string;
}

const PresentationCard: FunctionComponent<PresentationCardProps> = ({ title, text, icon }) => {

    return (
        <div className={styles.card}>
            <div className={styles.card_Icon}>
                <img src={icon} alt="Icon" />
            </div>
            <p className={styles.card_Title}>{title}</p>
            <span className={styles.card_Text}>{text}</span>
        </div>
    )
}

export default PresentationCard;