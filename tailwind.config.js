/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "blue-costom":"#3e70f1"
      
      },
      backgroundImage:{
        "left_img":"url('/public/MacBook Pro 16_ - 1.jpg')",
        "right_img":"url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
      }
    },
  },
  plugins: [],
}