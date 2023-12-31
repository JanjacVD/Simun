import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import route from "../../vendor/tightenco/ziggy/dist/index.m";
import { LaravelReactI18nProvider } from "laravel-react-i18n";

const appName = "Laravel";

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.tsx`,
                import.meta.glob("./Pages/**/*.tsx")
            ),
        setup: ({ App, props }) => {
            // @ts-expect-error
            global.route = (name: any, params: any, absolute: any) =>
                route(name, params, absolute, {
                    // @ts-expect-error
                    ...page.props.ziggy,
                    // @ts-expect-error
                    location: new URL(page.props.ziggy.location),
                });
            const locale = document.documentElement.getAttribute(
                "lang"
            ) as string;
            return (
                <LaravelReactI18nProvider
                    locale={locale}
                    fallbackLocale={"en"}
                    files={import.meta.glob("/lang/*.json", { eager: true })}
                >
                    <App {...props} />
                </LaravelReactI18nProvider>
            );
        },
    })
);
