import { PageProps } from "@/types";
import { HTMLProps } from "react";

export type Translatable = {
    en: string;
    hr: string;
};
export type Orderable = {
    id: number;
    name: Translatable;
    order: number;
    deleted_at: string | null;
};
export type NamedEntity = {
    name: Translatable;
    parent_id?: number;
    allergens?:any[]
};
export type ParentEntity = {
    id: number;
} & NamedEntity;
export type MenuSection = Orderable;
export type MenuCategory = Orderable & {
    menu_section_id: number;
};
export type MenuItem = Orderable & {
    menu_category_id: number;
    description: Translatable;
    price: number;
    allergens:{id:number,name:Translatable}[]
};
export type FormProps<T extends NamedEntity> = PageProps & {
    routeName: string;
    data: T;
    req: (url: string, options: any) => void;
    reset(): void;
    setData(x: string, y: Object): void;
    children?: React.ReactNode;
    parentResult?: ParentEntity[];
    formProps?: HTMLProps<HTMLFormElement>;
    title:string
};
export type MenuAllergen = Orderable & {
    image:string;
}
export type AllergenFormData = {
    name: Translatable;
    img: File | null;
};
