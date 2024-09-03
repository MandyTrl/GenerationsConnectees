import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#364753",
				secondary: "#b8c0ff",
				tertiary: "#829cbc",
				background: "#f6f7ff",
			},
		},
	},
	plugins: [],
}
export default config
