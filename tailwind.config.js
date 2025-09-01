/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // switch with <html class="dark">
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: { primary: "#2563eb" },
        },
    },
    plugins: [],
};
