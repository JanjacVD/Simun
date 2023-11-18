import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { FormProps, MenuItem } from "../types/types";
import MenuForm from "./MenuForm";
import { useLaravelReactI18n } from "laravel-react-i18n";

export default function ItemForm(params: FormProps<Omit<MenuItem, "id" | "menu_category_id" | "order" | "deleted_at">>) {
    const {t} = useLaravelReactI18n();
    return (
        <MenuForm {...params}>
            <div className="mb-5">
                <InputLabel htmlFor="desc_en" value={t("messages.desc_en")} />
                <TextInput
                    required
                    id="desc_en"
                    type="text"
                    name="desc_en"
                    value={params.data.description.en}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) =>
                        params.setData("description", {
                            ...params.data.description,
                            en: e.target.value,
                        })
                    }
                />
                <InputError
                    message={params.errors["description.en"]}
                    className="mt-2"
                />
            </div>
            <div className="mb-5">
                <InputLabel htmlFor="desc_hr" value={t("messages.desc_hr")} />
                <TextInput
                    required
                    id="desc_hr"
                    type="text"
                    name="desc_hr"
                    value={params.data.description.hr}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) =>
                        params.setData("description", {
                            ...params.data.description,
                            hr: e.target.value,
                        })
                    }
                />
                <InputError
                    message={params.errors["description.hr"]}
                    className="mt-2"
                />
            </div>
            <div className="mb-5">
                <InputLabel htmlFor="price" value={t("messages.price")} />
                <TextInput
                    required
                    id="price"
                    type="number"
                    name="price"
                    value={params.data.price}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) =>
                        params.setData("price", parseFloat(e.target.value))
                    }
                />
                <InputError message={params.errors["price"]} className="mt-2" />
            </div>
        </MenuForm>
    );
}
