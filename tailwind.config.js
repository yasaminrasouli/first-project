module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-cube": "url('../public/headerCube-rtl.png')",
        "header-logo": "url('../public/logo_fa.png')",
      }),
      backgroundPosition: {
        "left-bottom": "left bottom",
        "right-center": "right center",
      },
    },
  },
  plugins: [],
};
