"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[489],{818:function(n,t,e){e.d(t,{wr:function(){return f},bI:function(){return d},Mc:function(){return h},eH:function(){return l},Uw:function(){return p}});var r=e(861),c=e(757),i=e.n(c),o="https://api.themoviedb.org/3",a="276ded1fd3f5024715e6a06fff45ae5d";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(i().mark((function n(){var t,e,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(o,"/trending/all/day?api_key=").concat(a))}function d(n){return u("".concat(o,"/search/movie?api_key=").concat(a,"&query=").concat(n,"&page=1"))}function h(n){return u("".concat(o,"/movie/").concat(n,"?api_key=").concat(a))}function l(n){return u("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(a))}function p(n){return u("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(a))}},489:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});var r=e(885),c=e(791),i=e(501),o=e(818),a=e(184);function u(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],u=t[1];return(0,c.useEffect)((function(){o.wr().then((function(n){return n.results})).then(u)}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"Trending today"}),e&&(0,a.jsx)("ul",{children:e.map((function(n){return(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"/movies/".concat(n.id),children:n.title||n.original_name})},n.id)}))})]})}}}]);
//# sourceMappingURL=489.13aa7037.chunk.js.map