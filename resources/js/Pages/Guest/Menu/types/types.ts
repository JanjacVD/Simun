import { Translatable } from "@/Pages/Menu/types/types";

type OrderableTranslatableItem = {
    order: number;
    name: Translatable;
};

export type MenuAllergen = OrderableTranslatableItem & {
    image: string;
};
export type MenuItem = OrderableTranslatableItem & {
    description: Translatable;
    price: number;
    allergens: MenuAllergen[];
};
export type MenuCategory = OrderableTranslatableItem & {
    items: MenuItem[];
};

export type MenuSection = OrderableTranslatableItem & {
    categories: MenuCategory[];
};
export type MenuType = MenuSection[];
