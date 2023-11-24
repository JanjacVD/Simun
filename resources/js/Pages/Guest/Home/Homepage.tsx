import GuestLayoutContainer from "@/Layouts/GuestLayoutContainer";
import GuestNavbar from "@/Layouts/GuestNavbar";
import { Head, Link } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import Calendar from "./Components/Calendar";
import { PageProps } from "@/types";
import { Worktime } from "./types/homeTypes";
import { useEffect, useRef, useState } from "react";
import Hero from "./Components/Hero";
import WorktimeInfo from "./Components/WorktimeInfo";
import MenuInfo from "./Components/MenuInfo";

export default function Homepage(
    props: PageProps<{ worktime: Worktime; non_working_dates: string[] }>
) {
    const { t } = useLaravelReactI18n();
    return (
        <GuestLayoutContainer>
            <Head>
            <meta name="description" content={t("metaTags_description")} />
            <meta name="keywords" content={t("metaTags_keywords")} />
            <meta name="author" content={t("metaTags_author")} />
            <meta property="og:title" content={t("Restoran & Pizzeria Šimun" )}/>
            <meta property="og:description" content={t("metaTags_ogDescription")} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://restoran-simun.hr"/>
            <meta property="og:image" content="/storage/page-images/index.png"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={t("metaTags_twitterTitle")} />
            <meta name="twitter:description" content="Explore our menu and reserve a table for an unforgettable dining experience at Restoran & Pizzeria Šimun." />
            <meta name="twitter:description" content={t("metaTags_twitterDescription")} />
            <meta name="twitter:image" content="/storage/page-images/index.png"/>
            <link rel="icon" href="/storage/page-images/favicon.ico"/>
            <title>{t("labels.homepage")}</title>
            </Head>
            <Hero />
            <WorktimeInfo {...props} />
            <MenuInfo />
        </GuestLayoutContainer>
    );
}
