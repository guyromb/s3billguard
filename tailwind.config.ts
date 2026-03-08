import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#059669',
        secondary: '#6B7280',
      },
      borderRadius: {
        custom: '12px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
