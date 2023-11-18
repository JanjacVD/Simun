import { PageProps } from "@/types";
import { MenuItem } from "../types/types";
import { useLaravelReactI18n } from "laravel-react-i18n";
import ButtonLink from "@/Components/ButtonLink";
import MenuDetails from "../Components/MenuDetails";

export default function Show({
    items,
    ...props
}: PageProps<{ items: MenuItem }>) {
    const { t } = useLaravelReactI18n();
    return (
        <MenuDetails routeBase="menu-items" {...props} items={items}>
            <ButtonLink className="mr-5" href={route("menu-categories.show", items.menu_category_id)}>
                {t("messages.linked_cat")}
            </ButtonLink>
        </MenuDetails>
    );
}
