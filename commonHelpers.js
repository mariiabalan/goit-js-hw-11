import{S as g,i as a}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="45071357-999033ebbf151b40dc2c05ece",h="https://pixabay.com/api/";function y(s,t=1){const o=`${h}?key=${p}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=12`;return fetch(o).then(n=>{if(!n.ok)throw new Error("Network response was not ok");return n.json()})}function b(s){const t=document.querySelector(".gallery"),o=s.map(({webformatURL:e,largeImageURL:r,tags:i,likes:u,views:d,comments:f,downloads:m})=>`
            <a href="${r}" class="gallery__link">
                <div class="photo-card">
                    <img src="${e}" alt="${i}" loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b> ${u}
                        </p>
                        <p class="info-item">
                            <b>Views</b> ${d}
                        </p>
                        <p class="info-item">
                            <b>Comments</b> ${f}
                        </p>
                        <p class="info-item">
                            <b>Downloads</b> ${m}
                        </p>
                    </div>
                </div>
            </a>
        `).join("");t.insertAdjacentHTML("beforeend",o),new SimpleLightbox(".gallery a").refresh()}function L(){const s=document.querySelector(".gallery");s.innerHTML=""}const c=document.querySelector("#search-form"),$=c.querySelector('input[name="searchQuery"]');document.querySelector(".gallery");const l=document.getElementById("loader");let S=new g(".gallery a"),q=1;c.addEventListener("submit",s=>{s.preventDefault();const t=$.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search query!"});return}L(),l.classList.remove("hidden"),y(t,q).then(o=>{if(l.classList.add("hidden"),o.hits.length===0){a.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(o.hits),S.refresh()}).catch(o=>{l.classList.add("hidden"),a.error({title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error fetching images:",o)})});
//# sourceMappingURL=commonHelpers.js.map
