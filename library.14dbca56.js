!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequired7c6=l);var a=l("jzQFI"),o=l("4QITu"),i=l("5xtVg"),u=e(l("WMajR")).template({1:function(e,n,t,r,l){var a=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"      src='https://image.tmdb.org/t/p/w500/"+e.escapeExpression(e.lambda(null!=n?a(n,"poster_path"):n,n))+"'\n"},3:function(e,n,t,r,l){return"      src='https://png.pngtree.com/png-clipart/20211121/original/pngtree-not-found-stamp-label-png-image_6948403.png'\n"},5:function(e,n,t,r,l){var a,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return e.escapeExpression(e.lambda(null!=n?o(n,"name"):n,n))+(null!=(a=o(t,"unless").call(null!=n?n:e.nullContext||{},l&&o(l,"last"),{name:"unless",hash:{},fn:e.program(6,l,0),inverse:e.noop,data:l,loc:{start:{line:18,column:34},end:{line:18,column:64}}}))?a:"")},6:function(e,n,t,r,l){return", "},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,l){var a,o=null!=n?n:e.nullContext||{},i=e.lambda,u=e.escapeExpression,c=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='film-card card-item'>\n    <img\n"+(null!=(a=c(t,"if").call(o,null!=n?c(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l,loc:{start:{line:3,column:6},end:{line:7,column:13}}}))?a:"")+"      alt='Poster of movie \""+u(i(null!=n?c(n,"original_title"):n,n))+'"\'\n      loading=\'lazy\'\n      class="film-image"\n      id="'+u(i(null!=n?c(n,"id"):n,n))+"\"\n    />\n    <div class='info'>\n      <p class='film-tittle'>\n        "+u(i(null!=n?c(n,"original_title"):n,n))+"\n      </p>\n      <p class='film-genre'>\n"+(null!=(a=c(t,"each").call(o,null!=n?c(n,"genres"):n,{name:"each",hash:{},fn:e.program(5,l,0),inverse:e.noop,data:l,loc:{start:{line:18,column:0},end:{line:18,column:73}}}))?a:"")+"\n        &#8739;\n        "+u(i(null!=n?c(n,"release_date"):n,n))+" <span>"+u(i(null!=n?c(n,"vote_average"):n,n))+"</span>\n      </p>\n    </div>\n  </li>\n"},useData:!0}),c=l("UL92Z"),d=l("bu0Gx"),s=document.querySelector(".library-film_list"),p=document.querySelector("button[data-watched]"),f=document.querySelector("button[data-queue]");function m(){(0,c.updateDataForLocalStorage)(),s.innerHTML="";var e=a.default.load("toWatch");if(!e||0===e.length){var n=document.createElement("p");return n.classList.add("library_alert"),n.textContent="You don't have watched films in your library",void s.append(n)}var t=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(t=(i=u.next()).done);t=!0){var d=i.value;o.galleryApi.fetchMovieById(d).then((function(e){v(e)})).catch((function(e){return console.log(e)}))}}catch(e){r=!0,l=e}finally{try{t||null==u.return||u.return()}finally{if(r)throw l}}}function v(e){e.release_date=e.release_date.split("-")[0];var n=u(e);s.insertAdjacentHTML("beforeend",n)}s.addEventListener("click",i.onPosterClick),p.addEventListener("click",(function(e){(0,d.changeColorBtnLibraryClick)(e,f),m()})),f.addEventListener("click",(function(e){(0,d.changeColorBtnLibraryClick)(e,p),function(){(0,c.updateDataForLocalStorage)(),s.innerHTML="";var e=a.default.load("queue");if(!e||0===e.length){var n=document.createElement("p");return n.classList.add("library_alert"),n.textContent="You don't have films in queue in your library",void s.append(n)}var t=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(t=(i=u.next()).done);t=!0){var d=i.value;o.galleryApi.fetchMovieById(d).then((function(e){v(e)})).catch((function(e){return console.log(e)}))}}catch(e){r=!0,l=e}finally{try{t||null==u.return||u.return()}finally{if(r)throw l}}}()})),m()}();
//# sourceMappingURL=library.14dbca56.js.map
