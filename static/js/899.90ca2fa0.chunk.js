"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[899],{818:function(e,t,n){n.d(t,{wr:function(){return s},bI:function(){return l},Mc:function(){return h},eH:function(){return p},Uw:function(){return d}});var r=n(861),c=n(757),u=n.n(c),a="https://api.themoviedb.org/3",o="276ded1fd3f5024715e6a06fff45ae5d";function i(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(u().mark((function e(){var t,n,r,c=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function s(){return i("".concat(a,"/trending/all/day?api_key=").concat(o))}function l(e){return i("".concat(a,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&page=1"))}function h(e){return i("".concat(a,"/movie/").concat(e,"?api_key=").concat(o))}function p(e){return i("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(o))}function d(e){return i("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(o))}},899:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(885),c=n(791),u=n(501),a=n(818),o=n(184);function i(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],i=t[1],f=(0,c.useState)(null),s=(0,r.Z)(f,2),l=s[0],h=s[1],p=(0,u.lr)(),d=(0,r.Z)(p,2),m=d[0],v=d[1];return(0,c.useEffect)((function(){if(null!==m.get("query")){var e=m.get("query");a.bI(e).then((function(e){return e.results})).then(h)}}),[m]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.bI(n).then((function(e){return e.results})).then(h),i("")},children:[(0,o.jsx)("input",{type:"text",name:"query",value:null===m.get("query")?"":m.get("query"),onChange:function(e){i(e.target.value),""!==e.target.value?v({query:e.target.value}):v({})},autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,o.jsx)("button",{type:"submit",children:"Search"})]}),l&&(0,o.jsx)("ul",{children:l.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title||e.original_name})},e.id)}))})]})}}}]);
//# sourceMappingURL=899.90ca2fa0.chunk.js.map