import ComingSoon from "@/Components/ComingSoon";
import { PageProps } from "@/types";
import { MenuSection, MenuType } from "./types/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { useState } from "react";
import SectionSelector from "./components/SectionSelector";
import DisplayedSection from "./components/DisplayedSection";
import GuestLayoutContainer from "@/Layouts/GuestLayoutContainer";
import MenuHead from "../Heads/MenuHead";

export default function Menu({ menu }: PageProps<{ menu: MenuType }>) {
    const { t } = useLaravelReactI18n();
    const [selectedSection, setSelectedSection] = useState<number>(
        menu.data[0]?.order || 0
    );
    return (
        <GuestLayoutContainer>
            <MenuHead />
            <section id="menu">
                <div className="first-block info-block">
                    <div className="info">
                        <h1>{t("labels.menu")}</h1>
                    </div>
                    <LazyLoadImage
                        src={"/storage/page-images/menu.webp"}
                        alt="Shrimp spaghetti"
                        title="Shrimp spaghetti"
                    />
                </div>
                <div className="menu-container">
                    <SectionSelector
                        categories={menu.data}
                        selectedSection={selectedSection}
                        setSelectedSection={setSelectedSection}
                    />
                    <DisplayedSection section={menu.data.find(x => x.order === selectedSection)} />
                </div>
            </section>
        </GuestLayoutContainer>
    );
}
