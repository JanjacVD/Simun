import DangerButton from "@/Components/DangerButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import toast from "react-hot-toast";

export default function Userlist({
    auth,
    userList,
}: PageProps<{ userList: { id: number; name: string }[] }>) {
    const { t } = useLaravelReactI18n();
    const handleDelete = (x:{id:number, name:string}) => {
        router.delete(route('user.delete', x), {
            onSuccess:() => {
                toast.success("Deleted")
            }
        })
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        {t("messages.users")}
                    </h2>
                    <Link
                        href={route("register")}
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
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="px-6 py-3">
                                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                #
                                            </th>
                                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Name
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userList.map((x, i) => (
                                            <tr
                                                key={x.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-600 w-full"
                                            >
                                                <td className="px-6 py-4">
                                                    {i}.
                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {x.name}
                                                </td>
                                                <td><DangerButton onClick={() => handleDelete(x)}>DELETE</DangerButton></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
