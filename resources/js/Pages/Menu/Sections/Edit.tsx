import { useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { MenuSection } from "../types/types";
import MenuForm from "../Components/MenuForm";

export default function Edit({
    items,
    ...params
}: PageProps<{ items: MenuSection }>) {
    const { data, setData, put, reset } = useForm({
        ...items,
    });

    return (
        <MenuForm
            title="edit_section"
            data={data}
            routeName={route("menu-sections.update", data)}
            setData={setData}
            reset={reset}
            req={put}
            {...params}
        />
    );
}
