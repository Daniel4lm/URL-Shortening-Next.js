import { useEffect, useState } from "react";

export default function useDisplaySize() {

    const [displaySize, setDisplaySize] = useState(null);   
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        setDisplaySize({
            width: window.innerWidth,
            height: window.innerHeight
        });
        setIsMobile(window.innerWidth <= 1024);

        function getSize() {
            setDisplaySize({
                width: window.innerWidth,
                height: window.innerHeight
            });
            
            setIsMobile(window.innerWidth <= 1024);
        }

        window.addEventListener('resize', getSize);

        return () => {
            window.removeEventListener('resize', getSize);
        }
    }, [])

    return { isMobile, displaySize };
}