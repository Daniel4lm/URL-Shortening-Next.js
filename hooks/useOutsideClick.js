import { useEffect, useRef } from "react";

export default function useOutsideClick(menuRef, hamgRef, handler) {

    useEffect(() => {

        const handleClick = (event) => {

            if (menuRef.current && menuRef.current.contains(event.target)) {
                return;
            } else if (hamgRef.current && event.target.isEqualNode(hamgRef.current)) {
                return;
            }
            handler(false);
        }

        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    }, []);
}