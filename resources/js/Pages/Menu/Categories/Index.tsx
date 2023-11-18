import { PageProps } from "@/types";
import { MenuSection } from "../types/types";
import MenuTable from "../Components/MenuTable";

export default function Index({
    items,
    ...props
}: PageProps<{ items: MenuSection[] }>) {
    return (
        <MenuTable
            {...props}
            data={items}
            title={"categories"}
            model="menu-categories"
        />
    );
}
