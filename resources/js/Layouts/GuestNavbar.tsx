import ApplicationLogo from "@/Components/ApplicationLogo";
import Hamburger from "@/Components/Hamburger";
import LangButton from "@/Components/LangButton";
import { Link } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import GuestNavbarAside from "./GuestNavbarAside";
import { memo, useState } from "react";
const GuestNavbar = memo(function GuestNavbar() {
    const { t } = useLaravelReactI18n();
    const [isActive, setIsActive] = useState(false);
    return (
        <nav className="guest-navbar">
            <div className="left">
                <Link href="/" className="logo">
                    <ApplicationLogo width={160} />
                </Link>
                <Link
                    href={route('menu')}
                    className={
                        "link " +
                        (route().current("menu") ? "link-active" : "")
                    }
                >
                    {t("labels.menu")}
                </Link>
                <Link
                    href={route('gallery')}
                    className={
                        "link " +
                        (route().current("gallery") ? "link-active" : "")
                    }
                >
                    {t("labels.gallery")}
                </Link>
                <Link
                    href={route('contact')}
                    className={
                        "link " +
                        (route().current("contact") ? "link-active" : "")
                    }
                >
                    {t("labels.contact")}
                </Link>
                <Hamburger isActive={isActive} setIsActive={setIsActive} />
            </div>
            <LangButton />
            <GuestNavbarAside isActive={isActive} />
        </nav>
    );
}) 
export default GuestNavbar
