import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EA580C',
        secondary: '#0EA5E9',
      },
      borderRadius: {
        custom: '12px',
      },
    },
  },
  
  plugins: [],
}
export default config
