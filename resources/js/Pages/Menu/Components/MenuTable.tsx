import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { PageProps, PaginatedProp } from "@/types";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { MenuSection, Orderable, Translatable } from "../types/types";
import DragList from "../Components/DragList";
import { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import toast from "react-hot-toast";
export default function MenuTable({
    auth,
    data,
    model,
    title
}: PageProps<{ data: Orderable[]; model: string, title:string }>) {
    const { t } = useLaravelReactI18n();
    const [list, setList] = useState({ hasChanged: false, data: data });
    const handleOrder = () => {
        router.post(
            route(model+".order"),
            { data: list.data },
            {
                onSuccess: () => {
                    toast.success(t("messages.sent"));
                    setList((prev) => ({ ...prev, hasChanged: false }));
                },
            }
        );
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        {t("messages."+title)}
                    </h2>
                    <Link
                        href={route("menu-sections.create")}
                        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    >
                        {t("messages.new")}
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="relative overflow-x-auto">
                                {list.hasChanged && (
                                    <PrimaryButton onClick={handleOrder}>
                                        {t("messages.save.order")}
                                    </PrimaryButton>
                                )}{" "}
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="px-6 py-3">
                                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                #
                                            </th>
                                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Name
                                            </th>
                                        </tr>
                                    </thead>
                                    <DragList model={model} setList={setList} data={data} />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
