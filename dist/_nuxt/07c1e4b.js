(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{349:function(t,d,e){var content=e(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(76).default)("754d25cc",content,!0,{sourceMap:!1})},354:function(t,d,e){"use strict";e(349)},355:function(t,d,e){var n=e(75)((function(i){return i[1]}));n.push([t.i,".films[data-v-6402d1f8]{background-color:var(--films-bg-color);min-height:calc(100vh - 60px);padding:40px}.films__body[data-v-6402d1f8]{display:flex;flex-wrap:wrap;gap:20px 15px;justify-content:space-between}.film-card[data-v-6402d1f8]{background-color:var(--films-card-color);display:flex;flex:0 0 24%;flex-direction:column;font-size:24px;font-weight:600;position:relative}.film-card__img img[data-v-6402d1f8]{height:220px;margin-bottom:10px;-o-object-fit:cover;object-fit:cover;width:100%}.film-card__img[data-v-6402d1f8]{align-items:center;display:block}.film-card__name[data-v-6402d1f8]{display:flex;margin:0 0 15px 20px}.film-card__button[data-v-6402d1f8]{margin:0 0 20px 20px}.jcCenter[data-v-6402d1f8]{justify-content:center}@media (min-width:1700px){.film-card[data-v-6402d1f8]{flex:0 0 400px}.films__body[data-v-6402d1f8]{justify-content:center}}@media (max-width:1350px){.film-card[data-v-6402d1f8]{flex:0 0 32%}.film-card__img img[data-v-6402d1f8]{height:220px;-o-object-fit:cover;object-fit:cover}}@media (max-width:1050px){.film-card[data-v-6402d1f8],.films__body[data-v-6402d1f8]{display:block}.film-card[data-v-6402d1f8]{margin-bottom:20px;padding-bottom:5px}.film-card__img img[data-v-6402d1f8]{height:auto;width:100%}.films[data-v-6402d1f8]{padding:20px}.film-card__button[data-v-6402d1f8]{margin:0 0 15px 20px}}",""]),n.locals={},t.exports=n},364:function(t,d,e){"use strict";e.r(d);e(37);var n={data:function(){return{films:[]}},methods:{switchToCurrentFilm:function(t){this.$router.push("/films/".concat(t))}}},c=(e(354),e(77)),component=Object(c.a)(n,(function(){var t=this,d=t._self._c;return d("div",{staticClass:"films"},[d("div",{staticClass:"films__body"},t._l(t.$store.getters.getFilteredFilms,(function(e,n){return d("div",{key:n,staticClass:"film-card"},[d("div",{staticClass:"film-card__img"},[d("img",{attrs:{src:e.img,alt:e.name}})]),t._v(" "),d("div",{staticClass:"film-card__name"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),d("div",{staticClass:"film-card__button"},[d("button",{staticClass:"btn btn-warning",staticStyle:{"font-weight":"500"},on:{click:function(d){return t.switchToCurrentFilm(e.id)}}},[t._v("\n          More info\n        ")])])])})),0)])}),[],!1,null,"6402d1f8",null);d.default=component.exports}}]);