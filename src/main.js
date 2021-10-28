// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "./css/main.css";

const fontsCSS = `
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/montserrat-v18-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/montserrat-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/montserrat-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/montserrat-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/montserrat-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/montserrat-v18-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-700 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/montserrat-v18-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/montserrat-v18-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/montserrat-v18-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/montserrat-v18-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/montserrat-v18-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/montserrat-v18-latin-700.svg#Montserrat') format('svg'); /* Legacy iOS */
}
`;

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.style.push({
    type: "text/css",
    cssText: fontsCSS,
  });
}
