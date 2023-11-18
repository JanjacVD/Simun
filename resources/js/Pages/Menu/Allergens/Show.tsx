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
        <MenuDetails routeBase="menu-allergens" {...props} items={items}/>
    );
}
