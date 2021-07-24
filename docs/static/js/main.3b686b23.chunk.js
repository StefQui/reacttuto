(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{44:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(3),r=c(6),s=c(11),a=c(14),i=c(15),d=c(0),l=c.n(d),j=c(23),o=c.n(j),b=(c(44),c(4)),u=c(1);function h(e){return Object(u.jsx)("div",{className:"mb-3",children:Object(u.jsxs)("table",{className:"table table-bordered table-sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Id"}),Object(u.jsx)("td",{children:"Name"})]})}),Object(u.jsx)("tbody",{children:e.products.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.id}),Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-default btn-sm",onClick:function(){return e.view(t)},children:"View"})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-default btn-sm",onClick:function(){return e.edit(t)},children:"Edit"})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return e.delete(t)},children:"Delete"})})]},t.id)}))})]})})}var O=c(38);function m(e){var t=Object(O.a)({defaultValues:e.product}),c=t.register,n=t.handleSubmit,r=t.reset;Object(d.useEffect)((function(){r(e.product)}),[e.product]);return console.log("render form",e),Object(u.jsxs)("form",{onSubmit:n((function(t){console.log(t),e.save(t)})),children:[Object(u.jsx)("div",{className:"row",children:e.product.id?Object(u.jsxs)("h6",{children:["Update du produit ",e.product.id," / ",e.product.name]}):Object(u.jsx)("h6",{children:"Cr\xe9ation d'un produit"})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"form-group col-md-12",children:[Object(u.jsx)("label",{htmlFor:"name",children:"Nom"}),Object(u.jsx)("input",Object(b.a)({type:"text",className:"form-control"},c("name")))]})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("button",{className:"btn btn-primary mr-2",children:"save"}),Object(u.jsx)("button",{className:"btn btn-default",onClick:function(){return e.close()},children:"cancel"})]})]})}function x(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"row mb-2",children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("div",{className:"card-title",children:Object(u.jsx)("h5",{children:"D\xe9tail product"})}),Object(u.jsxs)("p",{className:"card-text",children:[e.product.id," / ",e.product.name]})]})})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("button",{className:"btn",onClick:function(){return e.close()},children:"close"})})]})}var p=c(22),f=c(8);function v(){return Object(u.jsx)("h2",{children:"About"})}function N(){return Object(u.jsx)("h2",{children:"Home"})}var k=c(17),w=[{id:1,name:"coca"},{id:2,name:"pepsi"}],y=Object(k.b)({key:"productList",default:w}),g=Object(k.c)({key:"productCount",get:function(e){return(0,e.get)(y).length}});function C(){var e=Object(k.d)(y),t=Object(n.a)(e,2),c=(t[0],t[1]);return Object(u.jsx)("button",{className:"btn btn-default",onClick:function(){c(w)},children:"Reset list"})}function S(){return Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Call"})})}function q(){var e=Object(k.d)(y),t=Object(n.a)(e,2),c=t[0],r=t[1],s=Object(k.e)(g),a=Object(d.useState)(null),i=Object(n.a)(a,2),l=i[0],j=i[1],o=Object(d.useState)("VIEW"),O=Object(n.a)(o,2),w=O[0],q=O[1];Object(d.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"React POST Request Example"})};fetch("https://reqres.in/api/posts",e).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}));var E=function(e){if(e.id){var t=c.findIndex((function(t){return t.id===e.id}));if(-1!==t){var n=c.slice();console.log(n,t,e),n[t]=Object(b.a)(Object(b.a)({},n[t]),{},{name:e.name}),r(n),I()}}else{var s=0===c.length?0:Math.max.apply(Math,c.map((function(e){return e.id?e.id:0})));c.slice();r(c.concat({id:s+1,name:e.name})),I()}},I=function(){j(null)};return Object(u.jsx)(p.a,{basename:"/reacttuto",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm",children:[Object(u.jsx)("h5",{className:"my-0 mr-md-auto font-weight-normal",children:"React demo"}),Object(u.jsxs)("nav",{className:"my-2 my-md-0 mr-md-3",children:[Object(u.jsx)(p.b,{className:"p-2 text-dark",to:"./",children:"Home"}),Object(u.jsx)(p.b,{className:"p-2 text-dark",to:"./products",children:"Products"}),Object(u.jsx)(p.b,{className:"p-2 text-dark",to:"./about",children:"About"}),Object(u.jsx)(p.b,{className:"p-2 text-dark",to:"./call",children:"Call"}),Object(u.jsx)(C,{})," ",s," products"]}),Object(u.jsx)("a",{className:"btn btn-outline-primary",href:"#",children:"Sign up"})]}),Object(u.jsxs)(f.c,{children:[Object(u.jsx)(f.a,{path:"/about",children:Object(u.jsx)(v,{})}),Object(u.jsx)(f.a,{path:"/call",children:Object(u.jsx)(S,{})}),Object(u.jsxs)(f.a,{path:"/products",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row mb-3",children:Object(u.jsx)("h1",{children:"Blog"})}),Object(u.jsx)("div",{className:"row mb-3",children:Object(u.jsx)("button",{className:"btn btn-success",onClick:function(){return j({name:""}),void q("EDIT")},children:"create"})}),Object(u.jsx)("div",{className:"row mb-3",children:Object(u.jsx)(h,{products:c,edit:function(e){j(e),q("EDIT")},view:function(e){j(e),q("VIEW")},delete:function(e){if(j(null),e.id){var t=c.findIndex((function(t){return t.id===e.id})),n=c.slice();n.splice(t,1),r(n)}}})}),l?function(e){switch(w){case"EDIT":return Object(u.jsx)(m,{product:e,save:E,close:I});case"VIEW":return Object(u.jsx)(x,{product:e,close:I})}}(l):Object(u.jsx)("p",{})]}),"         "]}),Object(u.jsx)(f.a,{path:"/",children:Object(u.jsx)(N,{})})]})]})})}function E(){return Object(u.jsx)(k.a,{children:Object(u.jsx)(q,{})})}function I(e){return Object(u.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var T=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"renderSquare",value:function(e){var t=this;return Object(u.jsx)(I,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(u.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(u.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),c}(l.a.Component);l.a.Component;function D(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var r=Object(n.a)(t[c],3),s=r[0],a=r[1],i=r[2];if(e[s]&&e[s]===e[a]&&e[s]===e[i])return e[s]}return null}o.a.render(Object(u.jsx)(E,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.3b686b23.chunk.js.map