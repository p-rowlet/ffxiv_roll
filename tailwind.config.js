/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
            gridTemplateColumns: {
                'roll' : '40px 35px 90px 1fr 1fr'
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
