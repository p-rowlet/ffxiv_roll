/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
            gridTemplateColumns: {
                'roll' : '50px 90px 1.3fr 1fr 2fr'
            },
			colors: {
				'dark-default' : '#181a1b',
				'dark-text' :'#e8e6e3'
			}	
        },
	},
	plugins: [],
	darkMode: ['class', '[data-mode="dark"]'],
};
