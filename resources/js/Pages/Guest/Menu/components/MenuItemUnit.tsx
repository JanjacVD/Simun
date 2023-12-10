import { useState } from "react";
import { MenuItem } from "../types/types";
import { useLaravelReactI18n } from "laravel-react-i18n";
import AllergenUnit from "./AllergenUnit";

export default function MenuItemUnit({ item }: { item: MenuItem }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggle = () => setIsExpanded((prev) => !prev);
    const { t } = useLaravelReactI18n();
    return (
        <div className="menu-item-container" onClick={toggle}>
            <article className="menu-item" role="article">
                <header>
                    <h3>{item.name}</h3>
                </header>
                <section>
                    <h4
                        className="menu-item-price"
                        aria-label={`Price: ${item.price.toFixed(2)} euros`}
                    >
                        {item.price.toFixed(2)} €
                    </h4>
                </section>
            </article>
            <section
                aria-label={`Description and allergens`}
                className={
                    isExpanded
                        ? "menu-item-accordion menu-item-accordion-expanded"
                        : "menu-item-accordion"
                }
            >
                <p aria-label="Menu item description" className="menu-item-description">{item.description}</p>
                <h4>{t("messages.item_allergens")}:</h4>
                <div className="allergen-list" aria-label="Allergens">
                    {item.allergens.map((x) => (
                        <AllergenUnit x={x} key={x.order} />
                    ))}
                </div>
            </section>
        </div>
    );
}
