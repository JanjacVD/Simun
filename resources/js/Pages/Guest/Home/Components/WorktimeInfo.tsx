import { useLaravelReactI18n } from "laravel-react-i18n";
import { Worktime } from "../types/homeTypes";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { lazy, memo, useRef } from "react";


const Calendar = lazy(() => import("./Calendar"));

const WorktimeInfo = memo(function WorktimeInfo({
    worktime,
    non_working_dates,
}: {
    worktime: Worktime;
    non_working_dates: string[];
}) {
    const { t } = useLaravelReactI18n();
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(sectionRef);
    return (
        <section
            ref={sectionRef}
            id="work"
            className={isVisible ? "animate-entry-fade-in" : ""}
        >
            <h2>{t("homepage.worktime")}</h2>
            <div className="info">
                <div className="calendar-container">
                    <Calendar
                        disabledDates={non_working_dates}
                        disabledDays={worktime.non_working_days
                            ?.split(",")
                            ?.map((x) => Number(x))}
                    />
                    <p className="worktime">
                        {worktime?.time_from?.replace(/:00$/, "")}
                        {" - "}
                        {worktime?.time_to?.replace(/:00$/, "")}
                    </p>
                </div>
            </div>
        </section>
    );
});
export default WorktimeInfo;
