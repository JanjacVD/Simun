import { Ref, useEffect, useState } from "react";

export const useIntersectionObserver = <T extends HTMLElement>( ref: React.RefObject<T>) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      }, options);
  
      if (ref?.current) {
        observer.observe(ref?.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isVisible;
  };