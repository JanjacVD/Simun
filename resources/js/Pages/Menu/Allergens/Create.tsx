import { useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import MenuForm from "../Components/MenuForm";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { AllergenFormData } from "../types/types";
import InputError from "@/Components/InputError";

export default function Create({ ...params }: PageProps) {
    const { data, setData, post, reset } = useForm<AllergenFormData>({
        name: {
            en: "",
            hr: "",
        },
        img: null,
    });
    const { t } = useLaravelReactI18n();
    return (
        <MenuForm
            title="create_allergen"
            formProps={{ encType: "multipart/form-data" }}
            data={data as any}
            routeName={route("menu-allergens.store")}
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
                    setData("img", e.target.files ? e?.target?.files[0] : null)
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
