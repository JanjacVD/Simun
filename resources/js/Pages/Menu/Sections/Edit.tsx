import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useLaravelReactI18n } from "laravel-react-i18n";
import PrimaryButton from "@/Components/PrimaryButton";
import { FormEventHandler } from "react";
import toast from "react-hot-toast";
import { MenuSection } from "../types/types";

export default function Sections({
    auth,
    errors,
    section,
}: PageProps<{ section: MenuSection }>) {
    const { t } = useLaravelReactI18n();
    const { data, setData, put, reset } = useForm({
        ...section,
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route("menu-sections.update", data), {
            onSuccess: () => {
                toast.success(t("sent"));
                reset();
            },
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {t("messages.edit_section")}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit}>
                                <div className="mb-5">
                                    <InputLabel
                                        htmlFor="name_en"
                                        value={t("messages.name_en")}
                                    />
                                    <TextInput
                                        id="name_en"
                                        type="text"
                                        name="text_en"
                                        value={data.name.en}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", {
                                                ...data.name,
                                                en: e.target.value,
                                            })
                                        }
                                    />
                                    <InputError
                                        message={errors["name.en"]}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="name_hr"
                                        value={t("messages.name_hr")}
                                    />
                                    <TextInput
                                        id="name_hr"
                                        type="text"
                                        name="name_hr"
                                        value={data.name.hr}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", {
                                                ...data.name,
                                                hr: e.target.value,
                                            })
                                        }
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ml-4"
                                        disabled={
                                            !data.name.en || !data.name.hr
                                        }
                                    >
                                        {t("create")}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
