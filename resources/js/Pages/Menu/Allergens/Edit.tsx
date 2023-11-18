import { useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { AllergenFormData, MenuSection } from "../types/types";
import MenuForm from "../Components/MenuForm";
import { useLaravelReactI18n } from "laravel-react-i18n";

export default function Edit({
    items,
    ...params
}: PageProps<{ items: AllergenFormData }>) {
    const { data, setData, patch, reset } = useForm<AllergenFormData>({
        ...items,
        img: null,
    });
    const { t } = useLaravelReactI18n();
    const handleFormImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const selectedFile = e.target.files && e.target.files[0];
        if (selectedFile) {
            setData("img", selectedFile);
        }
    };
    return (
        <MenuForm
            formProps={{ encType: "multipart/form-data" }}
            data={data}
            routeName={route("menu-allergens.update", data)}
            setData={setData}
            reset={reset}
            req={patch}
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
                onChange={handleFormImgChange}
            />
            <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
            >
                SVG only.
            </p>
        </MenuForm>
    );
}
