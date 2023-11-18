import { useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import MenuForm from "../Components/MenuForm";
import { ParentEntity } from "../types/types";
import { useLaravelReactI18n } from "laravel-react-i18n";
import ItemForm from "../Components/ItemForm";

export default function Create({
    ...params
}: PageProps<{ parentResult: ParentEntity[] }>) {
    const { data, setData, post, reset } = useForm({
        name: {
            en: "",
            hr: "",
        },
        description: {
            en: "",
            hr: "",
        },
        price: 0,
        parent_id: params.parentResult[0]?.id
    });
    return (
       <ItemForm routeName={route("menu-items.store")} {...params} data={data} setData={setData} req={post} reset={reset}/>
    );
}
