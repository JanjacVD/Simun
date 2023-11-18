import { useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { MenuCategory } from "../types/types";
import MenuForm from "../Components/MenuForm";

export default function Edit({
    items,
    ...params
}: PageProps<{ items: MenuCategory }>) {
    const { data, setData, put, reset } = useForm({
        ...items,
        parent_id: items.menu_section_id,
    });
    return (
        <MenuForm
        title="edit_category"
        data={data}
            routeName={route("menu-categories.update", data)}
            setData={setData}
            reset={reset}
            req={put}
            parentLabel="select_section"
            {...params}
        />
    );
}
