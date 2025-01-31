import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["var(--font-montserrat)"],
				"abhaya-libre": ["var(--font-abhaya-libre)"],
			},
			colors: {
				gray: {
					900: "#000000",
					700: "#404042",
					500: "#D9D9D9",
					300: "#DFDFDF",
					100: "#EDEDED",
				},
			},
			letterSpacing: {
				"3": "0.3125rem",
			},
			fontSize: {
				"7xl": "5rem",
				"7.5xl": "5.625rem",
				"8xl": "6.25rem",
			},
			lineHeight: {
				"70": "7.1875",
			},
			maxWidth: {
				"86": "22.5rem",
			},
		},
	},
	plugins: [aspectRatio],
} satisfies Config;
