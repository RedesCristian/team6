!function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".carousel-img"),t=0,n=e.length;function o(t){e.forEach((function(e,n){e.classList.toggle("active",n===t)}))}setInterval((function(){o(t=(t+1)%n)}),4e3),o(t)}));var e=document.querySelector(".students-link"),t=document.querySelector(".modal"),n=document.querySelector(".close");document.querySelector(".modal-content");t.style.display="none",e.addEventListener("click",(function(e){e.preventDefault(),t.style.display="flex"})),n.addEventListener("click",(function(e){e.preventDefault(),t.style.display="none"})),t.addEventListener("click",(function(e){e.target==t&&(t.style.display="none")}));var o=document.getElementById("theme-toggle-btn"),c=document.body;o.addEventListener("click",(function(){c.classList.contains("light-mode")?(c.classList.remove("light-mode"),c.classList.add("dark-mode"),o.textContent="Light"):(c.classList.remove("dark-mode"),c.classList.add("light-mode"),o.textContent="Dark")}))}();
//# sourceMappingURL=my-library.c34a921d.js.map
