import GuestLayoutContainer from "@/Layouts/GuestLayoutContainer";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { PageProps } from "@/types";
import { Worktime } from "./types/homeTypes";
import { lazy, memo } from "react";
import HomeHead from "../Heads/HomeHead";

// const WorktimeInfo = lazy(() => import("./Components/WorktimeInfo"));
const MenuInfo = lazy(() => import("./Components/MenuInfo"));
const Hero = lazy(() => import("./Components/Hero"));

const Homepage = memo(function Homepage(
    props: PageProps<{ worktime: Worktime; non_working_dates: string[] }>
) {
    const { t } = useLaravelReactI18n();
    return (
        <GuestLayoutContainer>
            <HomeHead />
            <Hero />
            {/* <WorktimeInfo {...props} /> */}
            <MenuInfo />
        </GuestLayoutContainer>
    );
});
export default Homepage;
