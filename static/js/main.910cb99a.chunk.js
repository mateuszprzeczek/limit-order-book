(this["webpackJsonporder-book"]=this["webpackJsonporder-book"]||[]).push([[0],{21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n.n(r),a=n(8),s=n.n(a),j=(n(21),n(2)),o=n(5),d=n(14),u=function(e,t,n){var i=Object(r.useState)(e),a=Object(j.a)(i,2),s=a[0],o=a[1],d="use-dropdown-".concat(t);return[s,function(){return Object(c.jsxs)("label",{htmlFor:d,children:[t,Object(c.jsx)("select",{id:d,value:s,onChange:function(e){return o(e.target.value)},onBlur:function(e){return o(e.target.value)},children:n.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))})]})},o]},b=n(11),l=n(12),O=n(15),h=n(13),x=function(e){Object(O.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.state,r=e.setState,i=e.type,a=void 0===i?"text":i,s="component-input-".concat(t);return Object(c.jsxs)("label",{htmlFor:s,children:[t,Object(c.jsx)("input",{id:s,type:a,value:n,placeholder:"",onChange:function(e){return r(e.target.value)}})]})}}]),n}(i.a.Component),p=function(e){var t=e.orders,n=e.setOrders,i=Object(r.useState)(""),a=Object(j.a)(i,2),s=a[0],o=a[1],b=Object(r.useState)(""),l=Object(j.a)(b,2),O=l[0],h=l[1],p=Object(r.useState)(""),f=Object(j.a)(p,2),v=f[0],m=f[1],g=u("","Side",["Buy","Sell"]),S=Object(j.a)(g,2),y=S[0],P=S[1];return Object(c.jsxs)("div",{children:[s,Object(c.jsxs)("form",{children:[Object(c.jsx)(x,{label:"id",state:s,setState:o}),Object(c.jsx)(P,{}),Object(c.jsx)(x,{label:"LimitPrice",state:O,setState:h}),Object(c.jsx)(x,{label:"quantity",state:v,setState:m,type:"number"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),e.stopPropagation();var c={id:s,side:y,limitPrice:O,quantity:v},r=[].concat(Object(d.a)(t),[c]);n(r)}.bind(undefined),children:"Dodaj"})]})]})},f=function(e){var t=e.id,n=e.side,r=e.limitPrice,i=e.quantity;return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("h2",{children:[" ",t]}),Object(c.jsxs)("h3",{children:[" ",n]}),Object(c.jsxs)("h3",{children:[r," "]}),Object(c.jsx)("h3",{children:i})]})},v=function(e){var t=e.orders,n=t.map((function(e){return Object(c.jsx)(f,{id:e.id,side:e.side,limitPrice:e.limitPrice,quantity:e.quantity},e.id)}));return Object(c.jsxs)(i.a.Fragment,{children:[0===t.length?Object(c.jsx)("h3",{children:"No Orders"}):n,Object(c.jsx)(o.a,{to:"/add",children:"Zarz\u0105dzaj inwentarzem"})]})};n(28);var m=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(o.a,{to:"/",children:Object(c.jsx)("h1",{children:"Limit Order Book v1"})}),Object(c.jsxs)(o.b,{children:[Object(c.jsx)(p,{orders:n,setOrders:i,path:"/add"}),Object(c.jsx)(v,{orders:n,path:"/"})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),g()}},[[29,1,2]]]);
//# sourceMappingURL=main.910cb99a.chunk.js.map