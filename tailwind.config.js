/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            flexGrow: {
                1: "1",
                2: "2",
            },
        },
    },
    plugins: [],
};
