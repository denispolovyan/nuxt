(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{352:function(t,e,r){var content=r(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("3614ad99",content,!0,{sourceMap:!1})},360:function(t,e,r){"use strict";r(352)},361:function(t,e,r){var n=r(75)((function(i){return i[1]}));n.push([t.i,".current-film[data-v-0bfc06e2]{background-color:var(--films-bg-color);color:var(--films-text-color)}.current-film__body[data-v-0bfc06e2]{margin:0 auto;max-width:900px;padding:40px}.current-film__title[data-v-0bfc06e2]{font-size:24px;font-weight:700;margin-bottom:15px}.current-film__img img[data-v-0bfc06e2]{margin-bottom:10px;max-width:100%;width:900px}.current-film__text[data-v-0bfc06e2]{line-height:26px;margin-bottom:10px}.current-film__dates[data-v-0bfc06e2]{display:flex;flex-wrap:wrap;gap:5px}@media (max-width:1050px){.current-film__body[data-v-0bfc06e2]{padding:20px}}",""]),n.locals={},t.exports=n},367:function(t,e,r){"use strict";r.r(e);r(37),r(13),r(88),r(27),r(157),r(8);var n={data:function(){return{film:"",sessions:""}},methods:{switchToSessions:function(t){this.$router.push("/films/".concat(this.$route.params.id,"/").concat(t))}},created:function(){var t=this,e=this.$store.getters.getFilms;this.film=e.find((function(e){return e.id===t.$route.params.id}));var r=this.$store.getters.getSessions;this.sessions=r.find((function(e){return e.id===t.$route.params.id})).sessions}},o=(r(360),r(77)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"current-film"},[e("div",{staticClass:"current-film__body"},[e("div",{staticClass:"current-film__title"},[t._v(t._s(t.film.name))]),t._v(" "),e("div",{staticClass:"current-film__img"},[e("img",{attrs:{src:t.film.img,alt:t.film.name}})]),t._v(" "),e("div",{staticClass:"current-film__text"},[t._v(t._s(t.film.description))]),t._v(" "),e("div",{staticClass:"current-film__dates"},t._l(t.sessions,(function(r,n){return e("b-button",{key:n,staticStyle:{"font-weight":"500"},attrs:{variant:t.$store.getters.getBlackTheme?"warning":"secondary"},on:{click:function(e){return t.switchToSessions(r.idx)}}},[t._v(t._s(r.day)+"\n      ")])})),1)])])}),[],!1,null,"0bfc06e2",null);e.default=component.exports}}]);