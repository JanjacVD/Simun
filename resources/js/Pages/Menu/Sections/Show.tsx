import { PageProps } from "@/types";
import { MenuSection, Translatable } from "../types/types";
import DetailsLayout from "../Components/DetailsLayout";
import { useLaravelReactI18n } from "laravel-react-i18n";
import moment from "moment";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link, router } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";

export default function Sections({
    section,
    ...props
}: PageProps<{ section: MenuSection }>) {
    const { currentLocale,t } = useLaravelReactI18n();
    const locale = currentLocale() as keyof Translatable;
    const handleRestore = () => {
        router.post(route('menu-sections.restore', section.id))
    }
    const handleDelete = () => {
        router.delete(route('menu-sections.destroy', section))
    }
    const handleForceDelete = () => {
        router.post(route('menu-sections.forceDelete', section.id))
    }
    return (
        <DetailsLayout {...props} title={section.name[locale]}>
            <div className="p-3">ID: {section.id}</div>
            <div className="p-3">{t("messages.name_en")}: {section.name.en}</div>
            <div className="p-3">{t("messages.name_hr")}: {section.name.hr}</div>
            {section.deleted_at && 
            <div className="p-3 flex flex-row items-center">{t("messages.deleted_at")}: {moment(section.deleted_at).toDate().toLocaleDateString()}
            <SecondaryButton className="p-3" onClick={handleRestore}>{t('messages.restore')}</SecondaryButton>
            <SecondaryButton className="p-3" onClick={handleForceDelete}>{t('messages.forceDelete')}</SecondaryButton>
            </div>
            }
            {!section.deleted_at &&
            <DangerButton className="m-3" onClick={handleDelete}>{t('messages.delete')}</DangerButton>
        }
        <Link className="block p-3" href={route('dashboard')}>{t('messages.linked_cat')}</Link>
        <Link className="block p-3" href={route('dashboard')}>{t('messages.linked_item')}</Link>
        </DetailsLayout>
    );
}
