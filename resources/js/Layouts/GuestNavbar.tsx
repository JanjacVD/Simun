import ApplicationLogo from "@/Components/ApplicationLogo";
import Hamburger from "@/Components/Hamburger";
import LangButton from "@/Components/LangButton";
import { Link } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import GuestNavbarAside from "./GuestNavbarAside";
import { memo, useState } from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth";
const GuestNavbar = memo(function GuestNavbar() {
    const { t } = useLaravelReactI18n();
    const [isActive, setIsActive] = useState(false);
    const width = useWindowWidth()
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
                <Hamburger isActive={isActive} setIsActive={setIsActive} />
            </div>
            <LangButton />
            {width < 800 &&<GuestNavbarAside isActive={isActive} />}
        </nav>
    );
}) 
export default GuestNavbar
