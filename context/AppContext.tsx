import React, { createContext, useContext, useState } from 'react';
import useDisplaySize from '@/hooks/useDisplaySize';

const AppContext = createContext<{
    toggleDrawer: boolean;
    handleDrawer: () => void;
    closeDrawer: () => void;
    validateUrl: (url: string) => boolean;
    isMobile: boolean;
}>
    ({
        toggleDrawer: false,
        handleDrawer: () => null,
        closeDrawer: () => null,
        validateUrl: (url: string) => false,
        isMobile: false
    });

const useAppContext = () => {
    return useContext(AppContext);
}

const AppProvider: React.FC = ({ children }) => {

    const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

    const handleDrawer = () => {
        setToggleDrawer(!toggleDrawer);
    }

    const closeDrawer = () => {
        setToggleDrawer(false);
    }

    const validateUrl = (origUrl: string) => {
        const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
        return urlRegex.test(origUrl);
    };

    const { isMobile } = useDisplaySize()

    return (
        <AppContext.Provider value={{ toggleDrawer, handleDrawer, closeDrawer, validateUrl, isMobile }}>
            { children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider, useAppContext };