import { PageProps } from "@/types";
import { MenuCategory } from "../types/types";
import { useLaravelReactI18n } from "laravel-react-i18n";
import ButtonLink from "@/Components/ButtonLink";
import MenuDetails from "../Components/MenuDetails";

export default function Show({
    items,
    ...props
}: PageProps<{ items: MenuCategory }>) {
    const { t } = useLaravelReactI18n();
    return (
        <MenuDetails routeBase="menu-categories" {...props} items={items}>
            <ButtonLink className="mr-5" href={route("dashboard")}>
                {t("messages.linked_item")}
            </ButtonLink>
            <ButtonLink className="mr-5" href={route("menu-sections.show", items.menu_section_id)}>
                {t("messages.linked_section")}
            </ButtonLink>
        </MenuDetails>
    );
}
