import { router } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";

export default function LangButton() {
    const { currentLocale, setLocale } = useLaravelReactI18n();
    const changeLocale = () => {
        const curr = currentLocale();
        const changeTo = curr === "en" ? "hr" : "en";
        setLocale(changeTo);
        router.visit(route("locale", changeTo), { preserveState: false });
    };
    return (
        <button
            className="lang-btn"
            onClick={changeLocale}
            aria-label="Switch language"
            aria-description="Switch language"
        >
            <img
                className={
                    currentLocale() === "hr" ? "active-lang" : "inactive-lang "
                }
                src={"/storage/page-images/hr.webp"}
                width={30}
                height={30}
                alt="Croatia flag"
                title="Croatia flag"
            />
            <span
                className={
                    "flag-cover " +
                    (currentLocale() === "en"
                        ? "slide-lang-left"
                        : "slide-lang-right")
                }
            />
            <img
                className={
                    currentLocale() === "en" ? "active-lang" : "inactive-lang"
                }
                src={"/storage/page-images/uk.webp"}
                height={30}
                width={30}
                alt="UK flag"
                title="UK flag"
            />
        </button>
    );
}
