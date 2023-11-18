import { PageProps } from "@/types";
import { MenuSection } from "../types/types";
import { useLaravelReactI18n } from "laravel-react-i18n";
import ButtonLink from "@/Components/ButtonLink";
import MenuDetails from "../Components/MenuDetails";

export default function Show({
    items,
    ...props
}: PageProps<{ items: MenuSection }>) {
    const { t } = useLaravelReactI18n();
    return (
        <MenuDetails routeBase="menu-sections" {...props} items={items}>
            <ButtonLink
                className="mr-5"
                href={route("menu-sections.edit", items.id)}
            >
                {t("messages.edit")}
            </ButtonLink>
            <ButtonLink className="mr-5" href={route("menu-categories.index", {section_id:items.id})}>
                {t("messages.linked_cat")}
            </ButtonLink>
        </MenuDetails>
    );
}
