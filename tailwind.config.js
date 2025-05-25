/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // 掃描 src 資料夾下所有相關檔案
    "./*.html"                         // 掃描根目錄下所有 html 檔案
    // 根據您的專案結構調整這些路徑
  ],
  theme: {
    extend: {
      // 在這裡擴展您的主題，例如自訂顏色、字型等
      // colors: {
      //   'custom-blue': '#1e40af',
      // },
    },
  },
  plugins: [
    // 在這裡加入您想使用的 Tailwind CSS 插件
    // require('@tailwindcss/forms'),
  ],
}