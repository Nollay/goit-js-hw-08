function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n,r={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(T,t),l?p(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function T(){var e=g();if(j(e))return O(e);f=setTimeout(T,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function O(e){return f=void 0,d&&r?p(e):(r=o=void 0,a)}function w(){var e=g(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(T,t),p(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?v(y(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:O(g())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const h=document.querySelector(".feedback-form");!function(){const e=r.load("feedback-form-state");e&&Object.entries(e).forEach((([e,t])=>{h.elements[e].value=t}))}(),h.addEventListener("input",e(n)((function(e){let t=r.load("feedback-form-state");t||(t={});const{name:n,value:o}=e.target;t[n]=o,r.save("feedback-form-state",t)}),500));h.addEventListener("submit",(e=>{e.preventDefault();const{email:t,message:n}=e.currentTarget;console.log({email:t.value,message:n.value}),e.currentTarget.reset(),r.remove("feedback-form-state")}));
//# sourceMappingURL=03-feedback.e69cc45d.js.map
