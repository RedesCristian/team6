!function(){var e=document.querySelector(".students-link"),t=document.querySelector(".modal"),n=document.querySelector(".close");document.querySelector(".modal-content");t.style.display="none",e.addEventListener("click",(function(e){e.preventDefault(),t.style.display="flex"})),n.addEventListener("click",(function(e){e.preventDefault(),t.style.display="none"})),t.addEventListener("click",(function(e){e.target==t&&(t.style.display="none")}));var o=document.getElementById("theme-toggle-btn"),i=document.body;o.addEventListener("click",(function(){i.classList.contains("light-mode")?(i.classList.remove("light-mode"),i.classList.add("dark-mode"),o.textContent="Light"):(i.classList.remove("dark-mode"),i.classList.add("light-mode"),o.textContent="Dark")})),document.getElementById("homeBtn").addEventListener("click",(function(){window.location.href=window.location.origin+"/team6/index.html"})),document.getElementById("libraryBtn").addEventListener("click",(function(){window.location.href=window.location.origin+"/team6/my-library.html"}))}();
//# sourceMappingURL=index.5a3fc5dd.js.map
