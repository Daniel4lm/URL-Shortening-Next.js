import { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import styles from "@/styles/Layout.module.css";
import Seo from "~/seo/Seo";
import { MetaTags } from "~/data-types/MetaTags";
import NavBar from "~/components/navbar/NavBar";
import Footer from "~/components/footer/Footer";
import { useAppContext } from "~/context/AppContext";
import MobileMenu from "~/components/drawer/Drawer";

interface LayoutProps {
    children: ReactNode;
    metaTags: MetaTags;
}

const Layout: NextPage<LayoutProps> = ({ children, metaTags }) => {

    const { isMobile, toggleDrawer, closeDrawer } = useAppContext();

    useEffect(() => {
        if (!isMobile && toggleDrawer === true) {
            closeDrawer();
        }
    }, [isMobile])

    return (
        <>
            <Seo metaTags={metaTags} />
            <main className={styles.mainWrapper}>
                <NavBar />
                {isMobile && toggleDrawer && <MobileMenu />}
                <div className={styles.mainContainer}>
                    {children}
                </div>
                <Footer />
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
                    Coded by <a href="#">Your Name Here</a>.
                </div>
            </main>
        </>
    )
}

export default Layout;