!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("7hKzD"),a("kyW71"),a("iSEZc");var o=document.querySelector(".loader-container");o.style.display="flex",o.style.justifyContent="center",window.addEventListener("load",(function(){setTimeout((function(){o.style.display="none"}),500)}));var c=a("bpxeT"),i=a("2TvXO"),s=a("dIxxU"),l=a("ejkSG");a("kyW71"),document.addEventListener("DOMContentLoaded",(function(){var t,n=document.querySelector(".header-form"),r=n.querySelector(".header-form__input"),a=document.querySelector(".galleryPopular");function o(e){var t=e.map((function(e){var t=e.id,n=e.poster_path,r=e.original_title,a=e.release_date;return'\n        <div class="div-poster">\n          <a href="#" data-id="'.concat(t,'" class="poster-link">\n            <img class="poster-card" src="').concat("https://image.tmdb.org/t/p/w500"+n,'" alt="').concat(r,'" loading="lazy" />\n          </a>\n          <div class="info">\n            <p class="info-title">').concat(r,'</p>\n            <p class="info-genre-year">').concat(a,"</p>\n          </div>\n        </div>\n      ")})).join("");console.log("Generated Markup:",t),a.innerHTML=t}n.addEventListener("submit",(t=e(c)(e(i).mark((function t(n){var a,c,u,d;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=r.value.trim(),console.log("Search Query:",a),""!==a){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,c="https://api.themoviedb.org/3/search/movie?api_key=".concat("904cc36a32d92a605c14a646cc21fc67","&query=").concat(encodeURIComponent(a)),t.next=10,s.default.get(c);case 10:u=t.sent,d=u.data.results,console.log("Search Results:",d),o(d),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(5),console.error("Error fetching movies:",t.t0),e(l).Notify.failure("Failed to fetch movies. Please try again later.");case 20:case"end":return t.stop()}}),t,null,[[5,16]])}))),function(e){return t.apply(this,arguments)})),a.addEventListener("click",function(){var t=e(c)(e(i).mark((function t(n){var r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),(r=n.target.closest(".poster-link"))&&r.dataset.id;case 3:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))}();
//# sourceMappingURL=index.32d57afa.js.map
