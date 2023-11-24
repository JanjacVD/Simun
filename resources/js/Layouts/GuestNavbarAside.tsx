import ApplicationLogo from "@/Components/ApplicationLogo";
import LangButton from "@/Components/LangButton";
import { Link } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";

export default function GuestNavbarAside({ isActive }: { isActive: boolean }) {
    const {t} = useLaravelReactI18n()
    return (
        <div className={isActive ? "nav-mobile active" : "nav-mobile"}>
            <Link href="/" className="logo">
                <ApplicationLogo width={160} />
            </Link>
            <Link href={route('menu')} className="link">
                {t("labels.menu")}
            </Link>
            <Link href={route('gallery')} className="link">
                {t("labels.gallery")}
            </Link>
            <Link href={route('contact')} className="link">
                {t("labels.contact")}
            </Link>
            <LangButton />
        </div>
    );
}
