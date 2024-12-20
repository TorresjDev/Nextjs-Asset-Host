/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./public/**/*.{html}",
  ],
  theme: {
    container: {
			center: true,
			screens: {
				"2xl": "1420px",
				"3xl": "2400px",
				"2.5xl": "1912px",
				xsm: "480px",
			},
		},
    extend: {},
  },
  plugins: [],
};
