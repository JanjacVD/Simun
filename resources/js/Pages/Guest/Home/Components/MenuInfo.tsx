import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Link } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { useRef } from "react";

export default function MenuInfo() {
    const { t } = useLaravelReactI18n();
    const menuRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(menuRef)
    return (
        <section
            ref={menuRef}
            className={isVisible ? "animate-entry-fade-in" : ""}
            id="about-menu"
        >
            <div className="info">
                <h2>{t("labels.menu")}</h2>
                <h3>{t("homepage.menu.title")}</h3>
                <p>{t("homepage.menu.about")}</p>
                <Link className="button-red" title="Go to menu" aria-label="Go to Menu" href="/">
                    {t("labels.menu")}
                </Link>
            </div>
        </section>
    );
}
