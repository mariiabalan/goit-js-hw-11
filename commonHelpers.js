import{S as n,i as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(o){return fetch(`https://pixabay.com/api/?key=45091921-bafbe55c990439d7032dec8c8&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{console.log(r)})}function p(o){const s=new n(".gallery-list a",{captions:!0,captionsData:"alt",captionsDelay:250}),a=document.querySelector(".gallery-list");let r=o.hits.map(e=>`<div class="image-wrapper">
    <a href="${e.largeImageURL}">
    <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}"></img>
    </a>
    <div class="text-wrapper">
    <div class="text-item"><h5 class="text-header">Likes</h5><p class="text-paragraph">${e.likes}</p></div>
    <div class="text-item"><h5 class="text-header">Views</h5><p class="text-paragraph">${e.views}</p></div>
    <div class="text-item"><h5 class="text-header">Comments</h5><p class="text-paragraph">${e.comments}</p></div>
    <div class="text-item"><h5 class="text-header">Downloads</h5><p class="text-paragraph">${e.downloads}</p></div>
    </div>
    </div>`).join("");a.insertAdjacentHTML("beforeend",r),s.refresh()}function h(){const o=document.querySelector(".gallery-list");o.innerHTML=""}const l=document.querySelector(".form-gallery"),m=document.querySelector(".form-gallery-input"),c=document.querySelector(".loader");l.addEventListener("submit",f);function f(o){o.preventDefault(),h(),c.classList.remove("hidden");let s=m.value.trim();u(`${s}`).then(a=>{if(a.total===0||s===""){d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.classList.add("hidden");return}else p(a);c.classList.add("hidden")}),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
