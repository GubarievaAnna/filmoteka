function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){a[e]=n},n.parcelRequired7c6=l),l("evw5H"),l("apujj");var o=l("5uEKZ"),r=l("fb9GJ"),i=l("jZsFh"),s=l("bTcpz");var c=e(l("amrNH")).template({1:function(e,n,t,a,l){var o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"      src='https://image.tmdb.org/t/p/w500/"+e.escapeExpression(e.lambda(null!=n?o(n,"poster_path"):n,n))+"'\n"},3:function(e,n,t,a,l){return"      src='https://png.pngtree.com/png-clipart/20211121/original/pngtree-not-found-stamp-label-png-image_6948403.png'\n"},5:function(e,n,t,a,l){var o,r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return e.escapeExpression(e.lambda(null!=n?r(n,"name"):n,n))+(null!=(o=r(t,"unless").call(null!=n?n:e.nullContext||{},l&&r(l,"last"),{name:"unless",hash:{},fn:e.program(6,l,0),inverse:e.noop,data:l,loc:{start:{line:18,column:34},end:{line:18,column:64}}}))?o:"")},6:function(e,n,t,a,l){return", "},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var o,r=e.lambda,i=e.escapeExpression,s=null!=n?n:e.nullContext||{},c=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='film-card card-item' data-id="+i(r(null!=n?c(n,"id"):n,n))+" data-action>\n    <img\n"+(null!=(o=c(t,"if").call(s,null!=n?c(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l,loc:{start:{line:3,column:6},end:{line:7,column:13}}}))?o:"")+"      alt='Poster of movie \""+i(r(null!=n?c(n,"original_title"):n,n))+'"\'\n      loading=\'lazy\'\n      class="film-image"\n      id="'+i(r(null!=n?c(n,"id"):n,n))+"\"\n    />\n    <div class='info'>\n      <p class='film-tittle'>\n        "+i(r(null!=n?c(n,"original_title"):n,n))+"\n      </p>\n      <p class='film-genre'>\n"+(null!=(o=c(t,"each").call(s,null!=n?c(n,"genres"):n,{name:"each",hash:{},fn:e.program(5,l,0),inverse:e.noop,data:l,loc:{start:{line:18,column:0},end:{line:18,column:73}}}))?o:"")+"\n        &#8739;\n        "+i(r(null!=n?c(n,"release_date"):n,n))+' <span class="film-raiting">&nbsp;'+i(r(null!=n?c(n,"vote_average"):n,n))+"&nbsp;</span>\n      </p>\n    </div>\n  </li>\n"},useData:!0}),u=l("31u3U"),d=l("abEvz");const p=document.querySelector(".library-film_list"),m=document.querySelector("button[data-watched]"),f=document.querySelector("button[data-queue]");p.addEventListener("click",s.onPosterClick);const g=document.querySelector(".library_alert");m.addEventListener("click",(function(e){(0,d.changeColorBtnLibraryClick)(e,f),h()})),f.addEventListener("click",(function(e){(0,d.changeColorBtnLibraryClick)(e,m),function(){p.innerHTML="",g.innerHTML="";const e=o.default.load("queue");if(!e||0===e.length)return g.innerHTML="You don't have films in queue in your library",void v.reset(0);w(e.slice(0,cardsQuantity)),v.reset(e.length)}()})),window.innerWidth<768?cardsQuantity=4:window.innerWidth<1200?cardsQuantity=8:cardsQuantity=9;cardsQuantity;const b=document.querySelector(".pagination"),y=new(e(r))(b,{itemsPerPage:cardsQuantity,visiblePages:5,centerAlign:!0,firstItemClassName:1,template:{currentPage:'<a class="page-btn is-selected">{{page}}</a>',page:'<a class="page-btn">{{page}}</a>',moveButton:'<button class="move-btn move-btn-{{type}}"></button>',disabledMoveButton:'<button class="move-btn move-btn-{{type}} disabled" disabled></button>',moreButton:'<a class="page-btn next-is-ellip last-child">...</a>'}}),v=new(e(r))(b,{itemsPerPage:cardsQuantity,visiblePages:5,centerAlign:!0,firstItemClassName:1,template:{currentPage:'<a class="page-btn is-selected">{{page}}</a>',page:'<a class="page-btn">{{page}}</a>',moveButton:'<button class="move-btn move-btn-{{type}}"></button>',disabledMoveButton:'<button class="move-btn move-btn-{{type}} disabled" disabled></button>',moreButton:'<a class="page-btn next-is-ellip last-child">...</a>'}});function h(){p.innerHTML="",g.innerHTML="";const e=o.default.load("toWatch");if(!e||0===e.length)return g.innerHTML="You don't have watched films in your library",void y.reset(0);w(e.slice(0,cardsQuantity)),y.reset(e.length)}function w(e){let n="";e.forEach((e=>{i.galleryApi.fetchMovieById(e).then((e=>(e.release_date=e.release_date.split("-")[0],n+=c(e),n))).then((e=>p.innerHTML=e)).catch((e=>console.log(e)))}))}document.onload=(0,u.updateDataForLocalStorage)(),document.onload=h(),y.on("afterMove",(e=>{const n=e.page;g.innerHTML="";w(o.default.load("toWatch").slice((n-1)*cardsQuantity,n*cardsQuantity))})),v.on("afterMove",(e=>{const n=e.page;g.innerHTML="";w(o.default.load("queue").slice((n-1)*cardsQuantity,n*cardsQuantity))}));
//# sourceMappingURL=library.8a2077d0.js.map