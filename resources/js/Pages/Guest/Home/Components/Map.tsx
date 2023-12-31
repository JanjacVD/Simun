import { useIntersectionObserverCallback } from "@/hooks/useIntersectionObserverCallback";
import { memo, useRef } from "react";

const Map = memo(function Map() {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    function setSource(source: HTMLIFrameElement) {
        source.src =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.689536852982!2d15.77359247629952!3d43.75854347109728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1334d7fc820c5589%3A0x9cc76463ff95890f!2sRESTORAN%20%26%20PIZZERIA%20%C5%A0IMUN!5e0!3m2!1shr!2shr!4v1700743218102!5m2!1shr!2shr";
    }
    useIntersectionObserverCallback(iframeRef, setSource);
    return (
        <iframe
            title="Google map"
            key={"only-map"}
            ref={iframeRef}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
});
export default Map;
