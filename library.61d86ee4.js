function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){l[e]=n},n.parcelRequired7c6=r);var o=r("5uEKZ"),a=r("jZsFh"),i=r("bTcpz");var c=e(r("amrNH")).template({1:function(e,n,t,l,r){var o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"      src='https://image.tmdb.org/t/p/w500/"+e.escapeExpression(e.lambda(null!=n?o(n,"poster_path"):n,n))+"'\n"},3:function(e,n,t,l,r){return"      src='https://png.pngtree.com/png-clipart/20211121/original/pngtree-not-found-stamp-label-png-image_6948403.png'\n"},5:function(e,n,t,l,r){var o,a=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return e.escapeExpression(e.lambda(null!=n?a(n,"name"):n,n))+(null!=(o=a(t,"unless").call(null!=n?n:e.nullContext||{},r&&a(r,"last"),{name:"unless",hash:{},fn:e.program(6,r,0),inverse:e.noop,data:r,loc:{start:{line:18,column:34},end:{line:18,column:64}}}))?o:"")},6:function(e,n,t,l,r){return", "},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,r){var o,a=null!=n?n:e.nullContext||{},i=e.lambda,c=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='film-card card-item'>\n    <img\n"+(null!=(o=u(t,"if").call(a,null!=n?u(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.program(3,r,0),data:r,loc:{start:{line:3,column:6},end:{line:7,column:13}}}))?o:"")+"      alt='Poster of movie \""+c(i(null!=n?u(n,"original_title"):n,n))+'"\'\n      loading=\'lazy\'\n      class="film-image"\n      id="'+c(i(null!=n?u(n,"id"):n,n))+"\"\n    />\n    <div class='info'>\n      <p class='film-tittle'>\n        "+c(i(null!=n?u(n,"original_title"):n,n))+"\n      </p>\n      <p class='film-genre'>\n"+(null!=(o=u(t,"each").call(a,null!=n?u(n,"genres"):n,{name:"each",hash:{},fn:e.program(5,r,0),inverse:e.noop,data:r,loc:{start:{line:18,column:0},end:{line:18,column:73}}}))?o:"")+"\n        &#8739;\n        "+c(i(null!=n?u(n,"release_date"):n,n))+" <span>"+c(i(null!=n?u(n,"vote_average"):n,n))+"</span>\n      </p>\n    </div>\n  </li>\n"},useData:!0}),u=r("31u3U"),s=r("abEvz");const d=document.querySelector(".library-film_list"),p=document.querySelector("button[data-watched]"),f=document.querySelector("button[data-queue]");function m(){(0,u.updateDataForLocalStorage)(),d.innerHTML="";const e=o.default.load("toWatch");if(!e||0===e.length){const e=document.createElement("p");return e.classList.add("library_alert"),e.textContent="You don't have watched films in your library",void d.append(e)}for(let n of e)a.galleryApi.fetchMovieById(n).then((e=>{g(e)})).catch((e=>console.log(e)))}function g(e){e.release_date=e.release_date.split("-")[0];const n=c(e);d.insertAdjacentHTML("beforeend",n)}d.addEventListener("click",i.onPosterClick),p.addEventListener("click",(function(e){(0,s.changeColorBtnLibraryClick)(e,f),m()})),f.addEventListener("click",(function(e){(0,s.changeColorBtnLibraryClick)(e,p),function(){(0,u.updateDataForLocalStorage)(),d.innerHTML="";const e=o.default.load("queue");if(!e||0===e.length){const e=document.createElement("p");return e.classList.add("library_alert"),e.textContent="You don't have films in queue in your library",void d.append(e)}for(let n of e)a.galleryApi.fetchMovieById(n).then((e=>{g(e)})).catch((e=>console.log(e)))}()})),m();
//# sourceMappingURL=library.61d86ee4.js.map
