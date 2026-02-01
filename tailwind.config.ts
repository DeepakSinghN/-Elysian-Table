import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'paper-light': '#F9F7F2',
                'green-deep': '#052e23',
            },
            fontFamily: {
                body: ['var(--font-body)'],
                logo: ['var(--font-logo)'],
                heading: ['var(--font-heading)'],
                helvetica: ['Helvetica LT Pro', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
