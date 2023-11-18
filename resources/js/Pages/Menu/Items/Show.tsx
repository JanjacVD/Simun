import { PageProps } from "@/types";
import { MenuItem, Translatable } from "../types/types";
import { useLaravelReactI18n } from "laravel-react-i18n";
import ButtonLink from "@/Components/ButtonLink";
import MenuDetails from "../Components/MenuDetails";

export default function Show({
    items,
    ...props
}: PageProps<{ items: MenuItem }>) {
    const { t, currentLocale } = useLaravelReactI18n();
    const locale = currentLocale() as keyof Translatable;
    return (
        <MenuDetails routeBase="menu-items" {...props} items={items}>
            <p className="p-3">
                {t("messages.item_allergens")} :{" "}
                {items.allergens.map((x) => x.name[locale] + ", ")}
            </p>{" "}
            <p className="p-3">
                {t("messages.desc_en")} : {items.description.en}
            </p>{" "}
            <p className="p-3">
                {t("messages.desc_hr")} : {items.description.hr}
            </p>
            <p className="p-3">
                {t("messages.price")} : {items.price.toFixed(2)} €
            </p>
            <ButtonLink
                className="m-3"
                href={route("menu-categories.show", items.menu_category_id)}
            >
                {t("messages.linked_cat")}
            </ButtonLink>
        </MenuDetails>
    );
}
