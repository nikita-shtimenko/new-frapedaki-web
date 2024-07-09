import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import pluginAspectRatio from "@tailwindcss/aspect-ratio";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	darkMode: ["class"],
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			sans: ["Heebo", ...defaultTheme.fontFamily.sans],
			mono: ["Cousine", ...defaultTheme.fontFamily.mono],
		},
		extend: {
			fontFamily: {
				geist: ["Geist"],
				"geist-mono": ["GeistMono"],
				greek: ["Greek"],
			},
		},
	},
	plugins: [pluginAspectRatio],
} satisfies Config;
