import { FunctionComponent } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";


const MobileMenu: FunctionComponent = () => {

    return (
        <div className={styles.mob_Menu}>
            <ul className={styles.mob_Routes}>
                <li>
                    <Link href='/features'>
                        <a>Features</a>
                    </Link>
                </li>
                <li>
                    <Link href='/pricing'>
                        <a>Pricing</a>
                    </Link>
                </li>
                <li>
                    <Link href='/resources'>
                        <a>Resources</a>
                    </Link>
                </li>
                <hr />
            </ul>
            <ul className={styles.mob_Admin}>
                <li>
                    <Link href='/login'>
                        <a >Login</a>
                    </Link>
                </li>
                <li>
                    <Link href='/sign-up'>
                        <a className={styles.nav_sign_up}>Sign Up</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;