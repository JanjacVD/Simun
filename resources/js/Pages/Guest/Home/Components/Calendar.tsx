import { useLaravelReactI18n } from "laravel-react-i18n";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";

export default function Calendar({
    disabledDates = [],
    disabledDays = [],
}: {
    disabledDates: string[];
    disabledDays: number[];
}) {
    const { currentLocale } = useLaravelReactI18n();
    const CURR_YEAR = new Date().getFullYear();
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    function getMonthDays(month: number) {
        return new Date(CURR_YEAR, month + 1, 0).getDate();
    }
    const changeMonth: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const value = e.currentTarget.value;
        setCurrentMonth((prev) => {
            const currentNewMonth = +value + prev;
            if (currentNewMonth < new Date().getMonth()) return 11;
            else if (currentNewMonth > 11) return new Date().getMonth();
            else return currentNewMonth;
        });
    };
    function generateElementsForDays(currentMonth: number) {
        let days = [];
        for (let i = 1; i <= getMonthDays(currentMonth); i++) {
            days.push(new Date(CURR_YEAR, currentMonth, i));
        }
        return days;
    }
    const days = useMemo<Date[]>(
        () => generateElementsForDays(currentMonth),
        [currentMonth]
    );
    function isDisabled(date: Date): boolean {
        return (
            disabledDays.includes(date.getDay()) ||
            disabledDates.some((x) => {
                const d = moment(x).toDate();
                return d.toDateString() === date.toDateString();
            })
        );
    }
    const DAYS_OF_WEEK = [1, 2, 3, 4, 5, 6, 0];
    return (
        <div className="calendar-container">
            <div className="calendar">
                <div className="header">
                    <button
                        aria-label="Previous Month"
                        title="Previous Month"
                        value={-1}
                        onClick={changeMonth}
                    >
                        &#8249;
                    </button>
                    <h3>
                        {new Intl.DateTimeFormat(currentLocale(), {
                            month: "long",
                        }).format(new Date(CURR_YEAR, currentMonth))}{" "}
                        {CURR_YEAR}
                    </h3>
                    <button
                        aria-label="Next Month"
                        title="Next Month"
                        value={1}
                        onClick={changeMonth}
                    >
                        &#8250;
                    </button>
                </div>
                <div className="dates">
                    {DAYS_OF_WEEK.map((x, i) => (
                        <div key={i} role="columnheader" className={"col-" + x}>
                            {new Intl.DateTimeFormat(currentLocale(), {
                                weekday: "short",
                            }).format(new Date(2022, 7, x))}
                        </div>
                    ))}
                    {days.map((x, i) => (
                        <div
                            aria-describedby={
                                isDisabled(x) ? "disabled-info" : undefined
                            }
                            aria-disabled={isDisabled(x)}
                            role="gridcell"
                            className={
                                "col-" +
                                x.getDay() +
                                (isDisabled(x) ? " disabled-date" : "")
                            }
                            key={i}
                        >
                            {x.getDate()}
                        </div>
                    ))}
                </div>
            </div>
            <div id="disabled-info" className="sr-only">
                Non-working day
            </div>
        </div>
    );
}
