import { useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { MenuItem, Translatable } from "../types/types";
import ItemForm from "../Components/ItemForm";

export default function Edit({
    items,
    allergens,
    ...params
}: PageProps<{
    items: MenuItem;
    allergens: { id: number; name: Translatable }[];
}>) {
    const { data, setData, post, reset } = useForm({
        ...items,
        parent_id: items.menu_category_id,
    });
    return (
        <ItemForm
            allergens={allergens}
            title="edit_item"
            routeName={route("menu-items.update")}
            {...params}
            data={data}
            setData={setData}
            req={post}
            reset={reset}
        />
    );
}
