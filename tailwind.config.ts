// @type {import('tailwindcss').Config}
module.exports = {
  content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
          fontFamily: {
              holtwood: ['Holtwood One SC', 'sans-serif'],
              hammersmith: ['Hammersmith One', 'sans-serif'],
          },
          backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          },
          fontSize: {
              xs: '10px',
              sx: '12px',
              sm: '14px',
              base: '16px',
              lg: '18px',
              xl: '20px',
              '1.5xl': '24px',
              '5xl': '64px',
              '2xl': '32px',
              '3xl': '40px',
              '4xl': '48px',
            
          },
          screens: {
              sm: '640px',
              md: '768px',
              lg: '1024px',
              xl: '1280px',
              '2xl': '1536px',
              '3xl': '1670px',
          },
          colors: {
              bluePrimary: '#1A75FF',
              blueSecondary: '#F0F6FF',
              blueDeep: '#002966',
              blueBackground: '#F2F7FF',
              lightTextColor: '#00184485',
          },
      },
  },
  plugins: [],
}