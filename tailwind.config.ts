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
    fontFamily: {
      heading: 'Poppins',
      body: 'Cabin',
    },  
  },
  darkMode: "class",
  plugins: [nextui()]
}
export default config
