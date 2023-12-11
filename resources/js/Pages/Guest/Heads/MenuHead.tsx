import { Head } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";

export default function MenuHead() {
    const { t } = useLaravelReactI18n();
    return (
        <Head>
            <link rel="canonical" href="https://restoran-simun.hr" />
            <meta name="description" content={t("metaTags_description")} />
            <meta name="keywords" content={t("metaTags_keywords")} />
            <meta name="author" content={t("metaTags_author")} />
            <meta
                property="og:title"
                content={t("labels.menu") + t("Restoran & Pizzeria Šimun")}
            />
            <meta
                property="og:description"
                content={t("metaTags_ogDescription")}
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://restoran-simun.hr" />
            <meta
                property="og:image"
                content="/storage/page-images/index.webp"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={t("metaTags_twitterTitle")} />
            <meta
                name="twitter:description"
                content="Explore our menu and reserve a table for an unforgettable dining experience at Restoran & Pizzeria Šimun."
            />
            <meta
                name="twitter:description"
                content={t("metaTags_twitterDescription")}
            />
            <meta
                name="twitter:image"
                content="/storage/page-images/index.webp"
            />
            <title>{t("labels.menu")}</title>
        </Head>
    );
}
