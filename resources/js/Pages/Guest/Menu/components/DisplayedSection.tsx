import { MenuSection } from "../types/types";
import MenuItemUnit from "./MenuItemUnit";

export default function DisplayedSection({section}:{section:MenuSection}){
    return <div className="displayed-section" aria-label={`Displayed Section: ${section.name}`}>
        {section.categories.sort((a, b) => a.order - b.order).map(x => (
            <div key={x.order} className="menu-category">
                <h2>{x.name}</h2>
                {x.items.sort((a, b) => a.order - b.order).map(x => (
                    <MenuItemUnit key={x.order} item={x} />
                ))}
            </div>
        ))}
    </div>
}