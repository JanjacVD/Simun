import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { PageProps, PaginatedProp } from "@/types";
import { MenuSection } from "../types/types";
import MenuTable from "../Components/MenuTable";

export default function Sections({
    sectionList,
    ...props
}: PageProps<{ sectionList: MenuSection[] }>) {
    return (
        <MenuTable
            {...props}
            data={sectionList}
            title={"sections"}
            model="menu-sections"
        />
    );
}
