import { useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import MenuForm from "../Components/MenuForm";
import { ParentEntity } from "../types/types";

export default function Create({
    ...params
}: PageProps<{ parentResult: ParentEntity[] }>) {
    const { data, setData, post, reset } = useForm({
        name: {
            en: "",
            hr: "",
        },
        parent_id: params.parentResult[0]?.id
    });
    return (
        <MenuForm
            data={data}
            routeName={route("menu-categories.store")}
            setData={setData}
            reset={reset}
            req={post}
            parentLabel="select_section"
            {...params}
        />
    );
}
