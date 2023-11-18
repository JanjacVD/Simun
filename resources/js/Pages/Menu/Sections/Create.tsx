import { useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import MenuForm from "../Components/MenuForm";

export default function Create({ ...params }: PageProps) {
    const { data, setData, post, reset } = useForm({
        name: {
            en: "",
            hr: "",
        },
    });
    return (
        <MenuForm
            title="create_section"
            data={data}
            routeName={route("menu-sections.store")}
            setData={setData}
            reset={reset}
            req={post}
            {...params}
        />
    );
}
