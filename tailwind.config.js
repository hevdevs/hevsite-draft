/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				game: ['VT323', "mono"],
			},
		},
	},
	plugins: [],
};
