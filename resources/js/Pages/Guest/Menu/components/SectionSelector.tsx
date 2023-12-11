import { Dispatch, SetStateAction, useState } from "react";
import { MenuSection } from "../types/types";
import { useWindowWidth } from "@/hooks/useWindowWidth";
type CategorySelectorProps = {
    categories: MenuSection[];
    selectedSection: number;
    setSelectedSection: Dispatch<SetStateAction<number>>;
};
export default function SectionSelector({
    categories,
    selectedSection,
    setSelectedSection,
}: CategorySelectorProps) {
    const width = useWindowWidth()
    const [dropdownDisplayed, setDropdownDisplayed] = useState(false)
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(width > 800) setSelectedSection(Number(e.currentTarget.value))
        else {
            if(!e.currentTarget.classList.contains('selected')) setSelectedSection(Number(e.currentTarget.value))
            setDropdownDisplayed(prev => !prev)
        }
        console.log(e.currentTarget.value)
    }
    return (
        <div className={(dropdownDisplayed ? "dropdown-displayed " : "") + "category-selector"}>
            {categories
                .sort((a, b) => a.order - b.order)
                .map((x) => (
                    <button
                        onClick={handleClick}
                        value={x.order}
                        className={selectedSection === x.order ? "selected" : ""}
                        key={x.order}
                        aria-current={
                            selectedSection === x.order ? "page" : undefined
                        }
                        aria-label={"Set menu section to:" + x.name}
                    >
                        {x.name}
                        <span>&#x1F80B;</span>
                    </button>
                ))}
        </div>
    );
}
