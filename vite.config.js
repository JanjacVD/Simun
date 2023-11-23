import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import i18n from "laravel-react-i18n/vite"; 

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.tsx", "resources/css/styles.scss"],
            ssr: "resources/js/ssr.tsx",
            refresh: true,
        }),
        react(),
        i18n(),
    ],
});
