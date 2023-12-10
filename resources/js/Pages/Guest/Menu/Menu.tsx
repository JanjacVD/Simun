import ComingSoon from "@/Components/ComingSoon";
import { PageProps } from "@/types";
import { MenuSection, MenuType } from "./types/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { useState } from "react";
import SectionSelector from "./components/SectionSelector";
import DisplayedSection from "./components/DisplayedSection";

export default function Menu({ menu }: PageProps<{ menu: MenuType }>) {
    const { t } = useLaravelReactI18n();
    const [selectedSection, setSelectedSection] = useState<MenuSection>(menu.data[0]);
    console.log(menu.data);
    return (
        <section id="menu">
            <div className="first-block info-block">
                <div className="info">
                    <h1>{t("labels.menu")}</h1>
                </div>
                <LazyLoadImage
                    src={"/storage/page-images/menu.webp"}
                    alt="Shrip spaghetti dish photo"
                    title="Shrip spaghetti dish photo"
                />
            </div>
            <div className="menu-container">
                <SectionSelector
                    categories={menu.data}
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}
                />
                <DisplayedSection section={selectedSection}/>
            </div>
        </section>
    );
}
