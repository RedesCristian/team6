function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".carousel-img");let t=0;const n=e.length;function r(t){e.forEach(((e,n)=>{n===t?e.classList.add("active"):e.classList.remove("active")}))}setInterval((function(){t=(t+1)%n,r(t)}),4e3),r(t)})),o("epHO8"),o("ak03H");var i=o("1GAPJ"),a=o("6ta99");const l=document.querySelector(".galleryLibrary");function c(t){const n=JSON.parse(localStorage.getItem(t))||[];if(0===n.length)return void e(i).Notify.info(`No movies in ${t.toUpperCase()}`);const r=n.map((e=>`\n      <div class="div-poster">\n      <a href="#" data-id="${e.id}" class="poster-link">\n        <img class="poster-card" src="${"https://image.tmdb.org/t/p/w500"+e.poster_path}" alt="${e.title}" loading="lazy" />\n        </a>\n        <div class="info">\n          <p class="info-title">${e.title}</p>\n          <p class="info-genre-year">${e.genres.map((e=>e.name)).join(", ")} | ${e.release_date.split("-")[0]}</p>\n        </div>\n      </div>\n    `)).join("");l.innerHTML=r,document.querySelectorAll(".poster-link").forEach((e=>{e.addEventListener("click",(async e=>{e.preventDefault();const t=e.currentTarget.getAttribute("data-id");await(0,a.openModal)(t)}))}))}document.querySelector(".watched-btn").addEventListener("click",(()=>{l.innerHTML="",c("watched")})),document.querySelector(".queue-btn").addEventListener("click",(()=>{l.innerHTML="",c("queue")}));
//# sourceMappingURL=my-library.2d706bd9.js.map
