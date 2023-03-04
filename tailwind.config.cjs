/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {	       
			"primary": "#0055a2",	
			"secondary": "#4B8F8C",	
			"accent": "#ECA400",	
			"neutral": "#292929",	
			"base-100": "#899878",	
			"info": "#7272AC",	
			"success": "#6A8D73",	
			"warning": "#DCC48E",	
			"error": "#7C1325",
		},
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
			serif: ['Georgia', 'serif'],
		  },
		extend: {},
	},
	plugins: [],
}
