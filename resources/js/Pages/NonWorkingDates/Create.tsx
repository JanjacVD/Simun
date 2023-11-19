import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useLaravelReactI18n } from "laravel-react-i18n";
import moment from "moment";
import InputLabel from "@/Components/InputLabel";
import toast from "react-hot-toast";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Create({
    auth,errors
}: PageProps) {
    const { data, setData, post } = useForm({
        non_working_date: new Date().toISOString().split("T")[0]
    });
    const { t } = useLaravelReactI18n();
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("non-working-dates.store"), {
            onSuccess: () => toast.success(t("messages.sent")),
        });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
        <Head title="Dashboard" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <form onSubmit={submit}>
                            <div className="mb-5">
                                <InputLabel
                                    htmlFor="non_working_date"
                                    value={t("messages.non_working_date")}
                                />
                                <TextInput
                                    required
                                    id="non_working_date"
                                    type="date"
                                    name="non_working_date"
                                    value={moment(data.non_working_date).format('YYYY-MM-DD')}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("non_working_date", new Date(e.target.value).toISOString().split('T')[0])
                                    }
                                />
                                <InputError
                                    message={errors["non_working_date"]}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="ml-4"
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
