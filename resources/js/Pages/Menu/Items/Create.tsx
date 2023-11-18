import { useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import MenuForm from "../Components/MenuForm";
import { ParentEntity, Translatable } from "../types/types";
import ItemForm from "../Components/ItemForm";

export default function Create({
    ...params
}: PageProps<{ parentResult: ParentEntity[], allergens:{id:number,name:Translatable}[] }>) {
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
        parent_id: params.parentResult[0]?.id,
        allergens:[]
    });
    return (
       <ItemForm title="create_item" routeName={route("menu-items.store")} {...params} data={data} setData={setData} req={post} reset={reset}/>
    );
}
