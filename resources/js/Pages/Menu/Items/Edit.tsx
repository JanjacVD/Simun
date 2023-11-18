import { useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { MenuItem } from "../types/types";
import ItemForm from "../Components/ItemForm";

export default function Edit({
    items,
    ...params
}: PageProps<{ items: MenuItem }>) {
    const { data, setData, put, reset } = useForm({
        ...items,
        parent_id: items.menu_category_id,
    });
    return (
        <ItemForm routeName={route("menu-items.store")} {...params} data={data} setData={setData} req={put} reset={reset}/>
    );
}
