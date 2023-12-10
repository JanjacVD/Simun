
type OrderableTranslatableItem = {
    order: number;
    name: string;
};

export type MenuAllergen = OrderableTranslatableItem & {
    image: string;
};
export type MenuItem = OrderableTranslatableItem & {
    description: string;
    price: number;
    allergens: MenuAllergen[];
};
export type MenuCategory = OrderableTranslatableItem & {
    items: MenuItem[];
};

export type MenuSection = OrderableTranslatableItem & {
    categories: MenuCategory[];
};
export type MenuType ={data: MenuSection[]};
