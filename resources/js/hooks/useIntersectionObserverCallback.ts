import { useEffect } from "react";

export const useIntersectionObserverCallback = <T extends HTMLElement>(
    refObject: React.RefObject<T>,
    callback: (refObject: T) => void
) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && refObject.current) {
                    callback(refObject.current);
                    observer.disconnect();
                }
            },
            { root: null, rootMargin: "0px", threshold: 0.1, passive:true } as IntersectionObserverInit
        );

        if (refObject.current) {
            observer.observe(refObject.current);
        }

        // Cleanup the observer when the component unmounts
        return () => observer.disconnect();
    }, [refObject]);
};
