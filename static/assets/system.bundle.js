/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/system.js":
/*!**************************!*\
  !*** ./src/js/system.js ***!
  \**************************/
/***/ (() => {

eval("// import '../style.css';\n// import \"../styles/docs/docs.scss\";\n// import '@popperjs/core';\n// import 'bootstrap';\n// import { Tooltip } from 'bootstrap';\n// import interact from 'interactjs';\n// document.addEventListener(\"DOMContentLoaded\", function () {\n//   // On page load or when changing themes, best to add inline in `head` to avoid FOUC\n//   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n//     document.documentElement.classList.add('dark');\n//     document.documentElement.classList.remove('light');\n//     document.getElementById('toggleDarkEl').checked = true;\n//   } else {\n//     document.documentElement.classList.remove('dark');\n//     document.documentElement.classList.add('light');\n//     document.getElementById('toggleDarkEl').checked = false;\n//   }\n//   document.getElementById('toggleDarkEl').addEventListener('change', function (e) {\n//     e.preventDefault();\n//     if (this.checked) {\n//       document.documentElement.classList.add('dark');\n//       document.documentElement.classList.remove('light');\n//       localStorage.setItem('theme', 'dark');\n//     } else {\n//       document.documentElement.classList.remove('dark');\n//       document.documentElement.classList.add('light');\n//       localStorage.setItem('theme', 'light');\n//     }\n//   });\n//   // Set current year\n//   document.getElementById('currentYear').textContent = new Date().getFullYear();\n//   // Bootstrap setup\n//   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"tooltip\"]'))\n//   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {\n//     return new Tooltip(tooltipTriggerEl)\n//   })\n//   // Toggle responsive view\n//   document.querySelector('.toggle-responsive') && document.querySelector('.toggle-responsive').addEventListener('click', function (ev) {\n//     var el = ev.target;\n//     var toggleResponsive = el.getAttribute('data-toggle-responsive');\n//     if (toggleResponsive === 'false') {\n//       el.setAttribute('data-toggle-responsive', 'true');\n//     } else {\n//       el.setAttribute('data-toggle-responsive', 'false');\n//     }\n//   })\n//   // Toggle RTL view\n//   var rtlTogglesList = [].slice.call(document.querySelectorAll('.toggle-rtl'))\n//   rtlTogglesList.map(function (el) {\n//     el.addEventListener('click', function (ev) {\n//       console.log('toggle');\n//       var el = ev.target;\n//       var toggleRTL = el.getAttribute('data-toggle-rtl');\n//       var contentId = el.getAttribute('data-content-id');\n//       var contentLTR = document.getElementById('iframe-content-' + contentId);\n//       var contentRTL = document.getElementById('iframe-content-rtl-' + contentId);\n//       var codeLTR = document.getElementById('code-ltr-' + contentId);\n//       var codeRTL = document.getElementById('code-rtl-' + contentId);\n//       if (toggleRTL === 'LTR') {\n//         contentLTR.style.display = 'none';\n//         contentRTL.style.display = 'block';\n//         codeLTR.style.display = 'none';\n//         codeRTL.style.display = 'block';\n//         el.textContent = 'LTR';\n//         el.setAttribute('data-toggle-rtl', 'RTL');\n//       } else {\n//         contentLTR.style.display = 'block';\n//         contentRTL.style.display = 'none';\n//         codeLTR.style.display = 'block';\n//         codeRTL.style.display = 'none';\n//         el.textContent = 'RTL';\n//         el.setAttribute('data-toggle-rtl', 'LTR');\n//       }\n//     })\n//   })\n//   interact('.resizable')\n//     .resizable({\n//       edges: { top: true, left: true, bottom: true, right: true },\n//       listeners: {\n//         move: function (event) {\n//           let { x, y } = event.target.dataset\n//           x = (parseFloat(x) || 0) + event.deltaRect.left\n//           y = (parseFloat(y) || 0) + event.deltaRect.top\n//           Object.assign(event.target.style, {\n//             width: `${event.rect.width}px`,\n//             height: `${event.rect.height}px`,\n//             transform: `translate(${x}px, ${y}px)`\n//           })\n//           Object.assign(event.target.dataset, { x, y })\n//         }\n//       }\n//     })\n// });\n// function setupIframe(obj) {\n//   obj.style.display = 'block';\n//   obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';\n//   if (obj.getAttribute('data-dir') === 'rtl') {\n//     obj.style.display = 'none';\n//   }\n// }\n// window.setupIframe = setupIframe;\n\n//# sourceURL=webpack:///./src/js/system.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/system.js"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=system.bundle.js.map