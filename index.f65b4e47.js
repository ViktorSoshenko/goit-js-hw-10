var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,r=l||f||Function("return this")(),c=Object.prototype.toString,u=Math.max,p=Math.min,s=function(){return r.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(b(e)){var l="function"==typeof e.valueOf?e.valueOf():e;e=b(l)?l+"":l}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||a.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const y=document.querySelector("#search-box"),d=document.querySelector(".country-list");y.addEventListener("input",(()=>{fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,flags,lang").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>function(e){const t=e.map((e=>`\n          <li>\n            <p><b>name</b>: ${e.name.official}</p>\n            <p><b>capital </b>: ${e.capital}</p>\n            <p><b>population </b>: ${e.population}</p>\n             <p><IMG SRC="${e.flags.svg}" height = 40px></p>\n             <p><b>languages </b>: ${e.languages}</p>\n          </li>\n      `)).join("");d.innerHTML=t,console.log(languages)}(e))).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.f65b4e47.js.map
