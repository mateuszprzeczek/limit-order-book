(this["webpackJsonporder-book"]=this["webpackJsonporder-book"]||[]).push([[0],{23:function(t,e,i){},30:function(t,e,i){},31:function(t,e,i){"use strict";i.r(e);var n=i(1),c=i(0),a=i.n(c),r=i(10),u=i.n(r),s=(i(23),i(3)),o=i(8),l=i(2),j=i(11),d=i(4),b=function(t,e,i){var a=Object(c.useState)(t),r=Object(s.a)(a,2),u=r[0],o=r[1],l="use-dropdown-".concat(e);return[u,function(){return Object(n.jsxs)("label",{htmlFor:l,children:[e,Object(n.jsx)("select",{id:l,value:u,onChange:function(t){return o(t.target.value)},onBlur:function(t){return o(t.target.value)},children:i.map((function(t){return Object(n.jsx)("option",{value:t,children:t},t)}))})]})},o]},O=i(14),f=i(15),y=i(17),v=i(16),m=function(t){Object(y.a)(i,t);var e=Object(v.a)(i);function i(){return Object(O.a)(this,i),e.apply(this,arguments)}return Object(f.a)(i,[{key:"render",value:function(){var t=this.props,e=t.label,i=t.state,c=t.setState,a=t.type,r=void 0===a?"text":a,u="component-input-".concat(e);return Object(n.jsxs)("label",{htmlFor:u,children:[e,Object(n.jsx)("input",{id:u,type:r,value:i,placeholder:"",onChange:function(t){return c(t.target.value)}})]})}}]),i}(a.a.Component),h=function(t){var e=t.orders,i=t.setOrders,a=t.buyers,r=t.setBuyers,u=t.sellers,o=t.setSellers,O=Object(c.useState)(""),f=Object(s.a)(O,2),y=f[0],v=f[1],h=Object(c.useState)(""),q=Object(s.a)(h,2),x=q[0],p=q[1],g=Object(c.useState)(""),P=Object(s.a)(g,2),S=P[0],F=P[1],B=Object(c.useState)(!0),C=Object(s.a)(B,2),w=C[0],k=C[1],I=Object(c.useState)("OK"),N=Object(s.a)(I,2),L=N[0],D=(N[1],b("Buy","Side",["Buy","Sell","Cancel"])),J=Object(s.a)(D,2),M=J[0],T=J[1],A=function(t){if("Buy"===t.side){var e=[].concat(Object(d.a)(a),[t]);r(e),E(t)}if("Sell"===t.side){var i=[].concat(Object(d.a)(u),[t]);o(i),K(t)}"Cancel"===t.side&&G(t.id)},E=function(t){if(u.length){var e=u.slice().filter((function(e){return parseInt(e.limitPrice)<=parseInt(t.limitPrice)}));z(e);var i,n=Object(j.a)(e);try{var c=function(){var e=i.value;if(e.quantity<=t.quantity&&e.active){var n=t.quantity-e.quantity;if(n<0)return"continue";var c=Object(l.a)(Object(l.a)({},t),{},{quantity:n,message:"Fully matched with ".concat(e.id," ").concat(e.quantity," @ ").concat(e.limitPrice," ")}),s=Object(l.a)(Object(l.a)({},e),{},{quantity:0,active:k(!1)}),j=u.filter((function(t){return t.id!==e.id})),b=[].concat(Object(d.a)(j),[s]);o(b);var O=a.filter((function(e){return e.id!==t.id})),f=[].concat(Object(d.a)(O),[c]);r(f)}if(e.quantity>t.quantity&&e.active){var y=e.quantity-t.quantity;if(y<0)return"continue";var v=Object(l.a)(Object(l.a)({},t),{},{quantity:0,active:k(!1),message:"Fully matched with ".concat(e.id," ").concat(e.quantity," @ ").concat(e.limitPrice," ")}),m=Object(l.a)(Object(l.a)({},e),{},{quantity:y}),h=u.filter((function(t){return t.id!==e.id})),q=[].concat(Object(d.a)(h),[m]);o(q);var x=a.filter((function(e){return e.id!==t.id})),p=[].concat(Object(d.a)(x),[v]);r(p)}};for(n.s();!(i=n.n()).done;)c()}catch(s){n.e(s)}finally{n.f()}}},K=function(t){if(a.length){var e=a.slice().filter((function(e){return parseInt(e.limitPrice)>=parseInt(t.limitPrice)}));z(e);var i,n=Object(j.a)(e);try{var c=function(){var e=i.value;if(e.quantity<=t.quantity&&e.active){var n=t.quantity-e.quantity;if(n<0)return"continue";var c=Object(l.a)(Object(l.a)({},t),{},{quantity:n,message:"Fully matched with ".concat(e.id," ").concat(e.quantity," @ ").concat(e.limitPrice)}),s=Object(l.a)(Object(l.a)({},e),{},{quantity:0,active:k(!1)}),j=a.filter((function(t){return t.id!==e.id})),b=[].concat(Object(d.a)(j),[s]);r(b);var O=u.filter((function(e){return e.id!==t.id})),f=[].concat(Object(d.a)(O),[c]);o(f)}if(e.quantity>t.quantity&&e.active){var y=e.quantity-t.quantity;if(y<0)return"continue";var v=Object(l.a)(Object(l.a)({},t),{},{quantity:0,active:k(!1),message:"Fully matched with ".concat(e.id," ").concat(e.quantity," @ ").concat(e.limitPrice)}),m=Object(l.a)(Object(l.a)({},e),{},{quantity:y}),h=a.filter((function(t){return t.id!==e.id})),q=[].concat(Object(d.a)(h),[m]);r(q);var x=u.filter((function(e){return e.id!==t.id})),p=[].concat(Object(d.a)(x),[v]);o(p)}};for(n.s();!(i=n.n()).done;)c()}catch(s){n.e(s)}finally{n.f()}}},z=function(t){t.sort((function(t,e){return t.quantity-e.quantity}))},G=function(t){r(a.filter((function(e){return e.id!==t}))),o(u.filter((function(e){return e.id!==t})))};return Object(n.jsxs)("div",{children:[y,Object(n.jsxs)("form",{children:[Object(n.jsx)(m,{label:"id",state:y,setState:v}),Object(n.jsx)(T,{}),Object(n.jsx)(m,{label:"quantity",state:S,setState:F,type:"number"}),Object(n.jsx)(m,{label:"LimitPrice",state:x,setState:p}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),t.stopPropagation();var n={id:y,side:M,limitPrice:x,quantity:S,message:L,active:w},c=[].concat(Object(d.a)(e),[n]);i(c),A(n)}.bind(undefined),children:"Dodaj"})]})]})},q=function(t){var e=t.id,i=t.side,c=t.limitPrice,a=t.quantity,r=t.message;return Object(n.jsx)("div",{children:Object(n.jsxs)("h2",{children:[" ",e," ",i," ",a," @ ",c," ",r]})})},x=function(t){var e=t.orders,i=e.map((function(t){return Object(n.jsx)(q,{id:t.id,side:t.side,limitPrice:t.limitPrice,quantity:t.quantity},t.id)}));return Object(n.jsxs)(a.a.Fragment,{children:[0===e.length?Object(n.jsx)("h3",{children:"No Orders"}):i,Object(n.jsx)(o.a,{to:"/",children:"Menage orders"})]})};i(30);var p=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),i=e[0],a=e[1],r=Object(c.useState)([]),u=Object(s.a)(r,2),l=u[0],j=u[1],d=Object(c.useState)([]),b=Object(s.a)(d,2),O=b[0],f=b[1];console.log("orders   ",i),console.log("sellers   ",O),i.map((function(t){return console.log(t),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(q,{id:t.id,side:t.side,limitPrice:t.limitPrice,quantity:t.quantity,message:t.message}),Object(n.jsx)("hr",{})]},t.id)}));var y=l.map((function(t){return console.log(t),Object(n.jsxs)("div",{className:"buyer",children:[Object(n.jsx)(q,{id:t.id,side:t.side,limitPrice:t.limitPrice,quantity:t.quantity,message:t.message}),Object(n.jsx)("hr",{})]},t.id)})),v=O.map((function(t){return Object(n.jsx)("div",{className:"seller",children:Object(n.jsx)(q,{id:t.id,side:t.side,limitPrice:t.limitPrice,quantity:t.quantity,message:t.message})},t.id)}));return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(o.a,{to:"/",children:Object(n.jsx)("h1",{children:"Limit Order Book v1"})}),Object(n.jsxs)(o.b,{children:[Object(n.jsx)(h,{orders:i,setOrders:a,buyers:l,setBuyers:j,sellers:O,setSellers:f,path:"/"}),Object(n.jsx)(x,{orders:i,path:"/"})]}),y,v]})},g=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,32)).then((function(e){var i=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;i(t),n(t),c(t),a(t),r(t)}))};u.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.dbcc6e54.chunk.js.map