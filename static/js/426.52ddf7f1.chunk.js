"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[426],{426:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var s=r(861),n=r(439),a=r(757),c=r.n(a),i=r(791),u=r(689),o="Reviews_boxReviews__1SeBL",l="Reviews_listReviews__aoKww",v="Reviews_itemReviews__uyGgQ",p="Reviews_labelReviews__z0S3u",h="Reviews_accentText__kS7gQ",w="Reviews_contentReviews__Nzxqe",_="Reviews_messageEmptyReviews__l6BLk",f=r(243),m=r(565);function d(){return(d=(0,s.Z)(c().mark((function e(t){var r,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(m.$),e.next=4,f.Z.get(r);case 4:if(0!==(s=e.sent).data.results.length){e.next=7;break}throw new Error("Backend is empty by this request");case 7:return e.abrupt("return",s.data.results);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var x=function(e){return d.apply(this,arguments)},k=r(673),R=r(184);var b=function(){var e=(0,u.UO)().movie_id,t=(0,i.useState)([]),r=(0,n.Z)(t,2),a=r[0],f=r[1],m=(0,i.useState)(!1),d=(0,n.Z)(m,2),b=d[0],y=d[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,s.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:r=t.sent,f(r),y(!0);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,R.jsx)("div",{className:o,children:b?0===a.length?(0,R.jsx)("p",{className:_,children:"We don't have any reviews for this movie"}):(0,R.jsx)("ul",{className:l,children:a.map((function(e){return(0,R.jsxs)("li",{className:v,children:[(0,R.jsxs)("h3",{className:p,children:[(0,R.jsx)("span",{className:h,children:"Author: "}),e.author]}),(0,R.jsx)("p",{className:w,children:e.content})]},e.id)}))}):(0,R.jsx)(k.Z,{})})}}}]);
//# sourceMappingURL=426.52ddf7f1.chunk.js.map