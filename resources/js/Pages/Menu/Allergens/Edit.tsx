import { useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import MenuForm from "../Components/MenuForm";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { AllergenFormData, MenuAllergen } from "../types/types";
import InputError from "@/Components/InputError";

export default function Edit({
    items,
    ...params
}: PageProps<{ items: MenuAllergen }>) {
    const { data, setData, post, reset } = useForm<AllergenFormData>({
        ...items,
        img: null,
    });
    const { t } = useLaravelReactI18n();
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("menu-allergens.update", items.id));
    };
    return (
        <MenuForm
            title="edit_section"
            formProps={{ encType: "multipart/form-data", onSubmit: submit }}
            data={data as any}
            routeName={route("menu-allergens.update", items.id)}
            setData={setData}
            reset={reset}
            req={post}
            {...params}
        >
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
            >
                {t("messages.upload_img")}
            </label>
            <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                onChange={(e) =>
                    setData((prev) => {
                        const newData = {
                            ...prev,
                            img: e.target.files ? e.target.files[0] : null,
                        };
                        return newData;
                    })
                }
            />
            <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
            >
                SVG only.
            </p>
            <InputError message={params.errors["img"]} className="mt-2" />
        </MenuForm>
    );
}
