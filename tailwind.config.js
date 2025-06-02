/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
		colors: {
			accent: 'var(--color-text)',
			fons: 'var(--color-fons)',
			link: 'var(--color-link)',
		}
	},
  },
  plugins: [],
}

