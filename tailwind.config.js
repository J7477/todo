/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/Navbar.js',
    './src/component/Home.js',
    './src/component/Login.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

