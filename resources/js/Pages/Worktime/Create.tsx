import { PageProps } from "@/types";
import { Worktime } from "./types/WorktimeTypes";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { useLaravelReactI18n } from "laravel-react-i18n";
import PrimaryButton from "@/Components/PrimaryButton";
import toast from "react-hot-toast";
import Select from "react-select";
import { customStyles } from "@/data/Styles";
import moment from "moment";
export default function Create({
    auth,
    errors,
    current,
}: PageProps<{ current: Worktime | null }>) {
    const { data, setData, post } = useForm<Worktime>({
        time_from: current?.time_from || "",
        time_to: current?.time_to || "",
        is_working: current?.is_working || true,
        non_working_days: current?.non_working_days || "",
    });
    const { t, currentLocale } = useLaravelReactI18n();
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("worktime.store"), {
            onSuccess: () => toast.success(t("messages.sent")),
        });
    };
    const options = [0, 1, 2, 3, 4, 5, 6];
    const days = () =>
        options.map((x) => ({
            value: x,
            label: new Intl.DateTimeFormat(currentLocale(), {
                weekday: "long",
            }).format(new Date(0, 0, x)),
        }));
    const daysOfWeek = days();
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
                                        htmlFor="time_from"
                                        value={t("messages.time_from")}
                                    />
                                    <TextInput
                                        required
                                        id="time_from"
                                        type="time"
                                        name="time_from"
                                        value={data.time_from}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("time_from", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors["time_from"]}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-5">
                                    <InputLabel
                                        htmlFor="time_to"
                                        value={t("messages.time_to")}
                                    />
                                    <TextInput
                                        required
                                        id="time_to"
                                        type="time"
                                        name="time_to"
                                        value={data.time_to}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("time_to", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors["time_to"]}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-5 flex flex-row items-center justify-start">
                                    <InputLabel
                                        htmlFor="is_working"
                                        value={t("messages.is_working") + ":"}
                                    />
                                    <TextInput
                                        id="is_working"
                                        type="checkbox"
                                        name="is_working"
                                        checked={data.is_working}
                                        className="ml-5"
                                        isFocused={true}
                                        onChange={() =>
                                            setData(
                                                "is_working",
                                                !data.is_working
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors["is_working"]}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ml-4"
                                        disabled={
                                            !data.time_from || !data.time_to
                                        }
                                    >
                                        {t("messages.save")}
                                    </PrimaryButton>
                                </div>

                                <div className="mb-5">
                                    <InputLabel
                                        htmlFor="days"
                                        value={
                                            t("messages.non_working_days") + ":"
                                        }
                                    />
                                    <Select
                                        onChange={(selectedOptions) =>
                                            setData(
                                                "non_working_days",
                                                selectedOptions
                                                    .map(
                                                        (option) =>
                                                            option?.value
                                                    )
                                                    .filter(
                                                        (option) =>
                                                            option !== undefined
                                                    )
                                                    .join(",")
                                            )
                                        }
                                        defaultValue={data.non_working_days
                                            ?.split(",")
                                            .map((x) => {
                                                const num = Number(x);
                                                if (!isNaN(num))
                                                    return daysOfWeek[num];
                                            })
                                            .filter((x) => x != undefined)}
                                        isMulti
                                        options={daysOfWeek}
                                        name="days"
                                        styles={customStyles}
                                    />
                                    <InputError
                                        message={errors["non_working_days"]}
                                        className="mt-2"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
