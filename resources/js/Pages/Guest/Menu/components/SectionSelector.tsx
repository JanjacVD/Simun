import { Dispatch, SetStateAction } from "react";
import { MenuSection } from "../types/types";
type CategorySelectorProps = {
    categories: MenuSection[];
    selectedSection: MenuSection;
    setSelectedSection: Dispatch<SetStateAction<MenuSection>>;
};
export default function SectionSelector({
    categories,
    selectedSection,
    setSelectedSection,
}: CategorySelectorProps) {
    return (
        <div className="category-selector">
            {categories
                .sort((a, b) => a.order - b.order)
                .map((x) => (
                    <button
                        onClick={() => setSelectedSection(x)}
                        className={selectedSection === x ? "selected" : ""}
                        key={x.order}
                        aria-current={
                            selectedSection === x ? "page" : undefined
                        }
                        aria-label={"Set menu section to:" + x.name}
                    >
                        {x.name}
                    </button>
                ))}
        </div>
    );
}
