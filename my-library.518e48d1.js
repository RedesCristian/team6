!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var a=o("bpxeT"),i=o("2TvXO");document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".carousel-img"),n=0,t=e.length;function r(n){e.forEach((function(e,t){t===n?e.classList.add("active"):e.classList.remove("active")}))}setInterval((function(){r(n=(n+1)%t)}),4e3),r(n)})),o("7hKzD"),o("iSEZc");var c=o("ejkSG"),l=o("kyW71"),d=document.querySelector(".galleryLibrary");function s(n){var t=JSON.parse(localStorage.getItem(n))||[];if(0!==t.length){var r=t.map((function(e){return'\n      <div class="div-poster">\n      <a href="#" data-id="'.concat(e.id,'" class="poster-link">\n        <img class="poster-card" src="').concat("https://image.tmdb.org/t/p/w500"+e.poster_path,'" alt="').concat(e.title,'" loading="lazy" />\n        </a>\n        <div class="info">\n          <p class="info-title">').concat(e.title,'</p>\n          <p class="info-genre-year">').concat(e.genres.map((function(e){return e.name})).join(", ")," | ").concat(e.release_date.split("-")[0],"</p>\n        </div>\n      </div>\n    ")})).join("");d.innerHTML=r,document.querySelectorAll(".poster-link").forEach((function(n){var t;n.addEventListener("click",(t=e(a)(e(i).mark((function n(t){var r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.currentTarget.getAttribute("data-id"),e.next=4,(0,l.openModal)(r);case 4:case"end":return e.stop()}}),n)}))),function(e){return t.apply(this,arguments)}))}))}else e(c).Notify.info("No movies in ".concat(n.toUpperCase()))}document.querySelector(".watched-btn").addEventListener("click",(function(){d.innerHTML="",s("watched")})),document.querySelector(".queue-btn").addEventListener("click",(function(){d.innerHTML="",s("queue")}))}();
//# sourceMappingURL=my-library.518e48d1.js.map
