(this.webpackJsonppupster=this.webpackJsonppupster||[]).push([[0],{54:function(e,t,n){},56:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(21),a=n.n(s),i=(n(54),n(43)),o=n(44),l=n(49),j=n(48),b=n(22),d=n(6),u=n(87),h=n(91),O=n(90),f=n(86),x=n(88),p=n(89),m=n(1);var g=function(e){return console.log(e),Object(m.jsx)(f.a,{className:"bg-transparent jumbotron-fluid p-0 bg-img ",children:Object(m.jsx)(u.a,{children:Object(m.jsx)(x.a,{className:"justify-content-center py-5",children:Object(m.jsx)(p.a,{className:"",children:e.title&&Object(m.jsx)("h1",{className:"text-right",children:e.title})})})})})};var v=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{title:e.title}),Object(m.jsx)("h1",{children:"About Pupster"}),Object(m.jsx)("p",{children:"Feel free to poke around and discover some new pups, or search for specific breeds."}),Object(m.jsx)("p",{children:"This site was made purely for fun. If you have any questions feel free to shoot me an email, or linkedIn message."}),Object(m.jsxs)("p",{children:["Created with React, React-Bootstrap, and the ",Object(m.jsx)("a",{href:"https://dog.ceo/dog-api/",target:"_blank",rel:"noopener noreferrer",children:"Dog CEO API"})]})]})},N=(n(56),n(16));var k=function(e){var t=Object(c.useState)(0),n=Object(N.a)(t,2),r=n[0],s=n[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"btn btn-info my-3 mx-3",onClick:function(){e.shuffleFn(),s((function(e){return e+1}))},children:" \ud83d\udc36 \ud83d\udc99 \ud83d\udc36  "}),Object(m.jsxs)("h3",{children:["You have sent ",r," doggos love!"]})]})},y=n(28),C=n.n(y),P=function(){return C.a.get("https://dog.ceo/api/breeds/image/random")},S=function(e){return C.a.get("https://dog.ceo/api/breed/"+e+"/images")},w=function(){return C.a.get("https://dog.ceo/api/breeds/list")};var F=function(e){var t=Object(c.useState)({image:""}),n=Object(N.a)(t,2),r=n[0],s=n[1],a=function(e){P().then((function(e){s((function(){return e.data.message}))}))};return Object(c.useEffect)((function(){P().then((function(e){s((function(){return e.data.message}))}))}),[]),Object(m.jsx)("div",{children:Object(m.jsxs)(u.a,{className:"text-center",fluid:!0,children:[Object(m.jsx)(x.a,{children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)("h1",{className:"mx-auto my-auto",children:e.title}),Object(m.jsx)("img",{className:"img",alt:"dog",src:r})]})}),Object(m.jsx)(x.a,{children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)("button",{onClick:a,className:"btn btn-info my-3",children:"More \ud83d\udc36!"}),Object(m.jsx)(k,{shuffleFn:a})]})})]})})},D=n(92),I=n(15);var B=function(e){var t=Object(c.useState)(""),n=Object(N.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)([]),i=Object(N.a)(a,2),o=i[0],l=i[1],j=Object(c.useState)([]),b=Object(N.a)(j,2),d=b[0],u=b[1];return Object(c.useEffect)((function(){w().then((function(e){l((function(){return e.data.message}))}))}),[]),Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("h1",{className:"text-center",children:"Search for Pupsters!"}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"breed",children:"Breed Name:"}),Object(m.jsx)("select",{onChange:function(e){var t=e.target.value;s(t)},children:o.map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),S(r).then((function(e){u(e.data.message)}))},className:"btn btn-info",children:Object(m.jsx)(I.a,{})}),Object(m.jsx)(D.a,{children:Object(m.jsx)("p",{children:r?"":"API error, please try a different breed"})})]}),Object(m.jsx)("ul",{children:d.map((function(e){return Object(m.jsxs)("li",{className:"py-3",children:[Object(m.jsx)("img",{alt:"dog",src:e},e)," "]})}))})]})};var A=function(){return Object(m.jsx)("footer",{className:"mt-5",children:Object(m.jsx)(u.a,{fluid:!0,children:Object(m.jsxs)(x.a,{className:"border-top justify-content-between p-3",children:[Object(m.jsxs)(p.a,{className:"p-0",md:3,sm:12,children:[Object(m.jsxs)("a",{className:"footer-link brand",href:"mailto:tonipow3ll@gmail.com",rel:"noopener noreferrer",children:[Object(m.jsx)(I.b,{size:28}),"  "]}),Object(m.jsxs)("a",{className:"footer-link brand",href:"https://github.com/tonipow3ll",target:"_blank",rel:"noopener noreferrer",children:[Object(m.jsx)(I.c,{size:28}),"  "]}),Object(m.jsxs)("a",{className:"footer-link brand",href:"https://linkedin.com/in/tonipowell13",target:"_blank",rel:"noopener noreferrer",children:[Object(m.jsx)(I.d,{size:28}),"  "]})]}),Object(m.jsx)(p.a,{className:"p-0 d-flex justify-content-end",md:3,children:"Made with \ud83d\udda4"})]})})})},E=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={title:"Pupster App",headerLinks:[{title:"Home",path:"/pupster"},{title:"Discover",path:"/discover"},{title:"Search",path:"/search"}],home:{title:"Welcome to Pupster"},discover:{title:"Discover Pupsters!"},search:{title:"Search for Pupsters!"}},c}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(u.a,{fluid:!0,children:[Object(m.jsxs)(h.a,{className:"border-bottom text-center",bg:"transparent",expand:"xl",children:[Object(m.jsx)(h.a.Brand,{children:Object(m.jsx)(b.b,{to:"/pupster",className:"brand",children:"Pupster"})}),Object(m.jsx)(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(m.jsx)(h.a.Collapse,{id:"navbar-toggle",children:Object(m.jsxs)(O.a,{className:"ml-auto",children:[Object(m.jsx)(b.b,{className:"nav-link",to:"/pupster",children:"Home"}),Object(m.jsx)(b.b,{className:"nav-link",to:"/discover",children:"Discover"}),Object(m.jsx)(b.b,{className:"nav-link",to:"/search",children:"Search"})]})})]}),Object(m.jsx)(d.a,{path:"/pupster",exact:!0,render:function(){return Object(m.jsx)(v,{title:e.state.home.title})}}),Object(m.jsx)(d.a,{path:"/discover",exact:!0,render:function(){return Object(m.jsx)(F,{title:e.state.discover.title})}}),Object(m.jsx)(d.a,{path:"/search",exact:!0,render:function(){return Object(m.jsx)(B,{title:e.state.search.title})}})]}),Object(m.jsx)(A,{})]})}}]),n}(r.a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(83);a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),T()}},[[84,1,2]]]);
//# sourceMappingURL=main.721125b8.chunk.js.map