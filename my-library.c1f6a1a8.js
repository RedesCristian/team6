function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".carousel-img");let t=0;const n=e.length;function o(t){e.forEach(((e,n)=>{n===t?e.classList.add("active"):e.classList.remove("active")}))}setInterval((function(){t=(t+1)%n,o(t)}),4e3),o(t)})),a("epHO8"),a("ak03H");var r=a("1GAPJ"),i=a("6ta99");const l=document.querySelector(".galleryLibrary");function c(t){const n=JSON.parse(localStorage.getItem(t))||[];if(0===n.length)return void e(r).Notify.info(`No movies in ${t}`);const o=n.map((e=>`\n      <div class="div-poster">\n      <a href="#" data-id="${e.id}" class="poster-link">\n        <img class="poster-card" src="${"https://image.tmdb.org/t/p/w500"+e.poster_path}" alt="${e.title}" loading="lazy" />\n        </a>\n        <div class="info">\n          <p class="info-title">${e.title}</p>\n          <p class="info-genre-year">${e.genres.map((e=>e.name)).join(", ")} | ${e.release_date.split("-")[0]}</p>\n        </div>\n      </div>\n    `)).join("");l.innerHTML=o,document.querySelectorAll(".poster-link").forEach((e=>{e.addEventListener("click",(async e=>{e.preventDefault();const t=e.currentTarget.getAttribute("data-id");await(0,i.openModal)(t)}))}))}"/my-library.html"!==window.location.pathname&&"/team6/my-library.html"!==window.location.pathname||c("watched"),document.querySelector(".watched-btn").addEventListener("click",(()=>{c("watched")})),document.querySelector(".queue-btn").addEventListener("click",(()=>{c("queue")}));
//# sourceMappingURL=my-library.c1f6a1a8.js.map
