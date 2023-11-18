import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useLaravelReactI18n } from "laravel-react-i18n";
import PrimaryButton from "@/Components/PrimaryButton";
import { FormEventHandler } from "react";
import toast from "react-hot-toast";
import { FormProps, NamedEntity, Translatable } from "../types/types";
export default function MenuForm<T extends NamedEntity>({
    auth,
    errors,
    routeName,
    data,
    req,
    reset,
    setData,
    children,
    parentResult,
    formProps,
    title
}: FormProps<T>) {
    const { t, currentLocale } = useLaravelReactI18n();
    const locale = currentLocale() as keyof Translatable;
    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        req(routeName, {
            onSuccess: () => {
                toast.success(t("messages.sent"));
                reset();
            },
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {t("messages."+title)}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit} {...formProps}>
                                <div className="mb-5">
                                    <InputLabel
                                        htmlFor="name_en"
                                        value={t("messages.name_en")}
                                    />
                                    <TextInput
                                        required
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
                                <div className="mb-5">
                                    <InputLabel
                                        htmlFor="name_hr"
                                        value={t("messages.name_hr")}
                                    />
                                    <TextInput
                                        required
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

                                {children}
                                {parentResult && (
                                    <>
                                        <label
                                            htmlFor="parentClass"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Select an option
                                        </label>
                                        <select
                                            required
                                            defaultValue={data.parent_id}
                                            id="parentClass"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={(e) =>
                                                setData(
                                                    "parent_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            {parentResult.map((x) => (
                                                <option key={x.id} value={x.id}>
                                                    {x.name[locale]}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.parent_id}
                                            className="mt-2"
                                        />
                                    </>
                                )}
                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ml-4"
                                        disabled={
                                            !data.name.en || !data.name.hr
                                        }
                                    >
                                        {t("messages.save")}
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
