/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
            gridTemplateColumns: {
                'roll' : '50px 90px 1.3fr 1fr 2fr'
            }
        },
	},
	plugins: [],
};
