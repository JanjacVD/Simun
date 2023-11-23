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
                <title>{t("labels.homepage")}</title>
                <meta name="description" content="Your page description" />
            </Head>
            <Hero />
            <WorktimeInfo {...props} />
            <MenuInfo />
        </GuestLayoutContainer>
    );
}
