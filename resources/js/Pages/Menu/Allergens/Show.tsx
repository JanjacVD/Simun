import { PageProps } from "@/types";
import { MenuAllergen } from "../types/types";
import MenuDetails from "../Components/MenuDetails";

export default function Show({
    items,
    ...props
}: PageProps<{ items: MenuAllergen }>) {
    return (
        <MenuDetails routeBase="menu-allergens" {...props} items={items}>
            <img width={100} height={100} src={"/storage/allergen-images/"+items.image+'.svg'}/>
        </MenuDetails>
    );
}
