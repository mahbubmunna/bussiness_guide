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
                slate: {
                    850: '#1e293b', // Custom deeper slate
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
export default config;
