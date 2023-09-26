import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'text': '#031c26',
      'background': '#ffffff',
      'primary': '#79d3f6',
      'secondary': '#bce9fa',
      'accent': '#0fa2db',
     },
     fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Poppins',
      body: 'Cabin',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    }     
  },
  darkMode: "class",
  plugins: [nextui()]
}
export default config
