import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { LaravelReactI18nProvider } from "laravel-react-i18n";
import { Toaster } from "react-hot-toast";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        const locale = document.documentElement.getAttribute("lang") as string;
        root.render(
            <LaravelReactI18nProvider
                locale={locale}
                fallbackLocale={"en"}
                files={import.meta.glob("./lang/*.json")}
            >
                <Toaster position="top-center" reverseOrder={false} />
                <App {...props} />
            </LaravelReactI18nProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
