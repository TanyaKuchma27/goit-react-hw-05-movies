"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[927],{818:function(n,e,t){t.d(e,{wr:function(){return d},bI:function(){return l},Mc:function(){return h},eH:function(){return f},Uw:function(){return p}});var r=t(861),i=t(757),c=t.n(i),s="https://api.themoviedb.org/3",a="276ded1fd3f5024715e6a06fff45ae5d";function o(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(c().mark((function n(){var e,t,r,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}function d(){return o("".concat(s,"/trending/all/day?api_key=").concat(a))}function l(n){return o("".concat(s,"/search/movie?api_key=").concat(a,"&query=").concat(n,"&page=1"))}function h(n){return o("".concat(s,"/movie/").concat(n,"?api_key=").concat(a))}function f(n){return o("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(a))}function p(n){return o("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(a))}},927:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,i,c,s=t(885),a=t(791),o=t(501),u=t(871),d=t(168),l=t(499),h=l.Z.div(r||(r=(0,d.Z)(["\n  margin-top: 10px;\n  display: flex;\n"]))),f=l.Z.div(i||(i=(0,d.Z)(["\n  margin-left: 15px;\n"]))),p=l.Z.div(c||(c=(0,d.Z)(["\npadding-left: 15px;\n  border-bottom: 1px solid #2a363b;\n  border-top: 1px solid #2a363b;\n"]))),x=t(818),j=t(184),v=(0,a.lazy)((function(){return t.e(418).then(t.bind(t,418))})),m=(0,a.lazy)((function(){return t.e(133).then(t.bind(t,133))}));function b(){var n=(0,u.UO)().movieId,e=(0,a.useState)(null),t=(0,s.Z)(e,2),r=t[0],i=t[1],c=(0,u.s0)();return(0,a.useEffect)((function(){x.Mc(n).then(i)}),[n]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("button",{type:"button",onClick:function(){c(-1)},children:"Go back"}),!r&&(0,j.jsx)("h2",{children:"Loading..."}),r&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(h,{children:[(0,j.jsx)("div",{children:(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(r.poster_path),alt:r.title,width:300})}),(0,j.jsxs)(f,{children:[(0,j.jsxs)("h2",{children:[r.title," (",r.release_date.slice(0,4),")"]}),(0,j.jsxs)("p",{children:["User Score: ",r.vote_average]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:r.overview}),(0,j.jsx)("h3",{children:"Genres"}),r.genres.map((function(n){return(0,j.jsxs)("span",{children:[n.name," "]},n.id)}))]})]}),(0,j.jsxs)(p,{children:[(0,j.jsx)("p",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,j.jsx)(u.j3,{})]}),(0,j.jsx)(a.Suspense,{fallback:(0,j.jsx)("h2",{children:"Loading..."}),children:(0,j.jsxs)(u.Z5,{children:[(0,j.jsx)(u.AW,{path:"cast",element:(0,j.jsx)(v,{})}),(0,j.jsx)(u.AW,{path:"reviews",element:(0,j.jsx)(m,{})})]})})]})}}}]);
//# sourceMappingURL=927.c6eda4bc.chunk.js.map