import { FunctionComponent } from "react";
import { useAppContext } from "~/context/AppContext";
import styles from "./Hamburger.module.css";

const Hamburger: FunctionComponent = () => {

    const { toggleDrawer, handleDrawer } = useAppContext();

    return (
        <button
            className={!toggleDrawer ? styles.hamb_Btn : `${styles.hamb_Btn} ${styles.toggle}`}
            onClick={() => handleDrawer()}
        >
            <div className={styles.hamb_Line} />
            <div className={styles.hamb_Line} />
            <div className={styles.hamb_Line} />
        </button>
    );
}

export default Hamburger;


/**** -> SVG version

<svg
            aria-hidden="true"
            focusable="false"
            width={`${size}`}
            height={`${size}`}
            className={className}
            role="img"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line x1="2" y1="3" x2="18" y2="3" stroke={color} strokeWidth="2.2" strokeLinecap="square" />
            <line x1="2" y1="10" x2="18" y2="10" stroke={color} strokeWidth="2.2" strokeLinecap="square" />
            <line x1="2" y1="17" x2="18" y2="17" stroke={color} strokeWidth="2.2" strokeLinecap="square" />
        </svg>

 */