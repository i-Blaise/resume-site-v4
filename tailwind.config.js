/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter-Medium', 'sans-serif'],
        custom: ['Inter-Regular', 'sans-serif'],
        custom: ['Inter-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
