"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[927],{818:function(e,n,t){t.d(n,{wr:function(){return d},bI:function(){return l},Mc:function(){return h},eH:function(){return p},Uw:function(){return f}});var r=t(861),c=t(757),i=t.n(c),s="https://api.themoviedb.org/3",a="276ded1fd3f5024715e6a06fff45ae5d";function o(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(i().mark((function e(){var n,t,r,c=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function d(){return o("".concat(s,"/trending/all/day?api_key=").concat(a))}function l(e){return o("".concat(s,"/search/movie?api_key=").concat(a,"&query=").concat(e,"&page=1"))}function h(e){return o("".concat(s,"/movie/").concat(e,"?api_key=").concat(a))}function p(e){return o("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(a))}function f(e){return o("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(a))}},927:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,c,i,s=t(885),a=t(791),o=t(501),u=t(871),d=t(168),l=t(499),h=l.Z.div(r||(r=(0,d.Z)(["\n  margin-top: 10px;\n  display: flex;\n"]))),p=l.Z.div(c||(c=(0,d.Z)(["\n  margin-left: 15px;\n"]))),f=l.Z.div(i||(i=(0,d.Z)(["\npadding-left: 15px;\n  border-bottom: 1px solid #2a363b;\n  border-top: 1px solid #2a363b;\n"]))),x=t(818),j=t(184),v=(0,a.lazy)((function(){return t.e(418).then(t.bind(t,418))})),m=(0,a.lazy)((function(){return t.e(133).then(t.bind(t,133))}));function b(){var e=(0,u.UO)().movieId,n=(0,a.useState)(null),t=(0,s.Z)(n,2),r=t[0],c=t[1],i=(0,u.s0)();return(0,a.useEffect)((function(){x.Mc(e).then(c)}),[e]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("button",{type:"button",onClick:function(){i(-1)},children:"Go back"}),!r&&(0,j.jsx)("h2",{children:"Loading..."}),r&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(h,{children:[(0,j.jsx)("div",{children:(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(r.poster_path),alt:r.title,width:300})}),(0,j.jsxs)(p,{children:[(0,j.jsxs)("h2",{children:[r.title," (",r.release_date.slice(0,4),")"]}),(0,j.jsxs)("p",{children:["User Score: ",r.vote_average]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:r.overview}),(0,j.jsx)("h3",{children:"Genres"}),r.genres.map((function(e){return(0,j.jsxs)("span",{children:[e.name," "]},e.id)}))]})]}),(0,j.jsxs)(f,{children:[(0,j.jsx)("p",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,j.jsx)(u.j3,{})]}),(0,j.jsx)(a.Suspense,{fallback:(0,j.jsx)("h2",{children:"Loading..."}),children:(0,j.jsxs)(u.Z5,{children:[(0,j.jsx)(u.AW,{path:"cast",element:(0,j.jsx)(v,{})}),(0,j.jsx)(u.AW,{path:"reviews",element:(0,j.jsx)(m,{})})]})})]})}}}]);
//# sourceMappingURL=927.50d66535.chunk.js.map