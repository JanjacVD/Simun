import { PageProps } from "@/types";
import { NamedEntity, Orderable, Translatable } from "../types/types";
import DetailsLayout from "./DetailsLayout";
import { useLaravelReactI18n } from "laravel-react-i18n";
import moment from "moment";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { router } from "@inertiajs/react";
import ButtonLink from "@/Components/ButtonLink";

export default function MenuDetails({
    items,
    children,
    routeBase,
    ...props
}: PageProps & {
    items: Orderable;
    children?: React.ReactNode;
    routeBase: string;
}) {
    const { currentLocale, t } = useLaravelReactI18n();
    const locale = currentLocale() as keyof Translatable;
    const handleRestore = () => {
        router.post(route(routeBase + ".restore", items.id));
    };
    const handleDelete = () => {
        router.delete(route(routeBase + ".destroy", items));
    };
    const handleForceDelete = () => {
        router.post(route(routeBase + ".forceDelete", items.id));
    };
    return (
        <DetailsLayout {...props} title={items.name[locale]}>
            <div className="p-3">ID: {items.id}</div>
            <div className="p-3">
                {t("messages.name_en")}: {items.name.en}
            </div>
            <div className="p-3">
                {t("messages.name_hr")}: {items.name.hr}
            </div>

            {items.deleted_at && (
                <div className="p-3 flex flex-row items-center">
                    {t("messages.deleted_at")}:{" "}
                    {moment(items.deleted_at).toDate().toLocaleDateString()}
                </div>
            )}
            <div className="flex p-3 flex-row items-center">
                {items.deleted_at && (
                    <>
                        <SecondaryButton
                            className="mr-5"
                            onClick={handleRestore}
                        >
                            {t("messages.restore")}
                        </SecondaryButton>
                        <DangerButton
                            className="mr-5"
                            onClick={handleForceDelete}
                        >
                            {t("messages.forceDelete")}
                        </DangerButton>
                    </>
                )}
                {!items.deleted_at && (
                    <DangerButton className="mr-5" onClick={handleDelete}>
                        {t("messages.delete")}
                    </DangerButton>
                )}
                <ButtonLink
                    className="mr-5"
                    href={route(routeBase+".edit", items.id)}
                >
                    {t("messages.edit")}
                </ButtonLink>
                {children}
            </div>
        </DetailsLayout>
    );
}
