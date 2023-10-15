import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-orbitron)'],
        main: ['var(--font-gemunu-libre)'],
      },
      width: {
        'button': '18.75rem'
      },
      height: {
        'button': '3.375rem'
      },
      dropShadow: {
        'button': '6px 6px rgba(0, 0, 0, 0.5)'
      },
      boxShadow: {
        'yellowcard': '8px 8px 10px 2px rgba(119, 134, 60, 0.5)',
      }
    },
    colors: {
      'cyberyellow': '#C0DD4A',
      'deepblue': '#092047',
      'purple': '#63345E',
      'seagray': '#B7C1DE',
      'yellowshadow': '#77863C'
    }
  },
  plugins: [],
}
export default config
