(this.webpackJsonprequisitos=this.webpackJsonprequisitos||[]).push([[0],{36:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(29),r=s.n(n),i=(s(36),s.p+"static/media/logo_UACH.6eed2502.png"),l=s(7),o=s.p+"static/media/edificio_UACH.fe168a2b.jpg",j=s(2),u=s(20),b=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(u.a)(Object(u.a)({},e),{},{isFetching:!0});case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},p=s(0),d={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},h=Object(a.createContext)(d),O=function(e){var t=e.children,s=Object(a.useReducer)(b,d),c=Object(j.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(p.jsx)(h.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})};function m(){var e=Object(a.useContext)(h),t=e.user,s=e.dispatch;return Object(p.jsxs)("div",{className:"top",children:[Object(p.jsx)("div",{className:"topLeft",children:Object(p.jsx)("a",{href:"https://www.uach.cl/",target:"_blank",className:"topLogoLink",children:Object(p.jsx)("img",{src:i,alt:"UACH",className:"topLogo"})})}),Object(p.jsx)("div",{className:"topCenter",children:Object(p.jsxs)("ul",{className:"topList",children:[Object(p.jsx)("li",{className:"topListItem",children:Object(p.jsx)(l.b,{className:"link",to:"/",children:"HOME"})}),Object(p.jsx)("li",{className:"topListItem",children:Object(p.jsx)(l.b,{className:"link",to:"/",children:"ABOUT"})}),Object(p.jsx)("li",{className:"topListItem",children:Object(p.jsx)("a",{className:"link",href:"http://www.biblioteca.uach.cl/",target:"_blank",children:"LIBRARY"})}),Object(p.jsx)("li",{className:"topListItem",children:Object(p.jsx)(l.b,{className:"link",to:"/write",children:t&&"WRITE"})})]})}),Object(p.jsxs)("div",{className:"topRight",children:[t?Object(p.jsx)(l.b,{to:"/settings",children:Object(p.jsx)("img",{className:"topImg",src:t.profilePic?"http://localhost:5000/images/"+t.profilePic:o,alt:""})}):Object(p.jsx)("li",{className:"topListItem",children:Object(p.jsx)(l.b,{className:"link",to:"/login",children:"LOGIN"})}),Object(p.jsx)("li",{className:"topListItem",onClick:function(){s({type:"LOGOUT"})},children:t&&"LOGOUT"})]})]})}var x=s(3),f=s.n(x),g=s(8),v=(s(47),s.p+"static/media/biblioteca.822d1580.jpg");function N(){return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsxs)("div",{className:"headerTitles",children:[Object(p.jsx)("span",{className:"headerTitleSm",children:"Gesti\xf3n de tesis y art\xedculos acad\xe9micos"}),Object(p.jsx)("span",{className:"headerTitleLg",children:"UACH"})]}),Object(p.jsx)("img",{className:"headerImg",src:v,alt:""})]})}s(48);function w(e){var t=e.post;return Object(p.jsxs)("div",{className:"post",children:[t.photo&&Object(p.jsx)("img",{className:"postImg",src:"http://localhost:5000/images/"+t.photo,alt:""}),Object(p.jsxs)("div",{className:"postInfo",children:[Object(p.jsx)("div",{className:"postCats",children:Object(p.jsx)("span",{className:"postCat",children:t.categories})}),Object(p.jsx)(l.b,{to:"/post/".concat(t._id),className:"link",children:Object(p.jsx)("span",{className:"postTitle",children:t.title})}),Object(p.jsx)("hr",{}),Object(p.jsx)("span",{className:"postDate",children:t.date}),Object(p.jsx)("span",{className:"postState",children:t.state})]}),Object(p.jsx)("p",{className:"postDesc",children:t.desc})]})}s(49);function I(e){var t=e.posts;return Object(p.jsx)("div",{className:"posts",children:t.map((function(e){return Object(p.jsx)(w,{post:e})}))})}var S=s(6),y=s.n(S);s(68);function P(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(p.jsxs)("div",{className:"sidebar",children:[Object(p.jsxs)("div",{className:"sidebarItem",children:[Object(p.jsx)("span",{className:"sidebarTitle",children:"SEARCH"}),Object(p.jsxs)("div",{class:"field",id:"searchform",children:[Object(p.jsx)("input",{type:"text",id:"searchterm",onChange:function(e){return o(e.target.value)},placeholder:"what are you searching for?"}),Object(p.jsx)("button",{type:"button",onClick:function(){window.location.href="/?postName=".concat(i)},children:Object(p.jsx)("i",{class:"fas fa-search"})})]})]}),Object(p.jsxs)("div",{className:"sidebarItem",children:[Object(p.jsx)("span",{className:"sidebarTitle",children:"CATEGORIES"}),Object(p.jsx)("ul",{className:"sidebarList",children:s.map((function(e){return Object(p.jsx)(l.b,{to:"/?cat=".concat(e.name),className:"link",children:Object(p.jsx)("li",{className:"sidebarListItem",children:e.name})})}))})]})]})}s(69);var C=s(4);function k(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(C.f)().search;return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/posts"+n);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(N,{}),Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)(I,{posts:s}),Object(p.jsx)(P,{})]})]})}s(70);function A(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(h),c=s.dispatch,n=s.isFetching,r=function(){var s=Object(g.a)(f.a.mark((function s(a){var n;return f.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),c({type:"LOGIN_START"}),s.prev=2,s.next=5,y.a.post("/auth/login",{email:e.current.value,password:t.current.value});case 5:n=s.sent,c({type:"LOGIN_SUCCESS",payload:n.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),c({type:"LOGIN_FAILURE"});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("span",{className:"loginTitle",children:"Login"}),Object(p.jsxs)("form",{className:"loginForm",onSubmit:r,children:[Object(p.jsx)("label",{children:"Email"}),Object(p.jsx)("input",{type:"text",className:"loginInput",placeholder:"Enter your email...",ref:e}),Object(p.jsx)("label",{children:"Password"}),Object(p.jsx)("input",{type:"password",className:"loginInput",placeholder:"Enter your password...",ref:t}),Object(p.jsx)("button",{className:"loginButton",type:"submit",disabled:n,children:"Login"})]})]})}s(71);function L(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],l=r[1],o=Object(a.useState)(""),u=Object(j.a)(o,2),b=u[0],d=u[1],O=Object(a.useState)(""),m=Object(j.a)(O,2),x=m[0],v=m[1],N=Object(a.useState)(""),w=Object(j.a)(N,2),I=w[0],S=w[1],C=Object(a.useState)(!1),k=Object(j.a)(C,2),A=k[0],L=k[1],F=Object(a.useContext)(h),T=F.user,U=F.dispatch,E=function(){var e=Object(g.a)(f.a.mark((function e(t){var a,c,n,r,l,o,j,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),U({type:"UPDATE_START"}),a="",c="",n="",r="",a=""===i?T.username:i,c=""===b?T.email:b,n=""===x?T.phone:x,r=""===I?T.password:I,l={userId:T._id,username:a,email:c,phone:n,password:r},!s){e.next=24;break}return o=new FormData,j=Date.now()+s.name,o.append("name",j),o.append("file",s),l.profilePic=j,e.prev=17,e.next=20,y.a.post("/upload",o);case 20:e.next=24;break;case 22:e.prev=22,e.t0=e.catch(17);case 24:return e.prev=24,e.next=27,y.a.put("/users/"+T._id,l);case 27:u=e.sent,L(!0),U({type:"UPDATE_SUCCESS",payload:u.data}),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(24),U({type:"UPDATE_FAILURE"});case 35:case"end":return e.stop()}}),e,null,[[17,22],[24,32]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"settings",children:[Object(p.jsxs)("div",{className:"settingsWrapper",children:[Object(p.jsxs)("div",{className:"settingsTitle",children:[Object(p.jsx)("span",{className:"settingsTitleUpdate",children:"Update Your Account"}),Object(p.jsx)("span",{className:"settingsTitleDelete",children:"Delete Account"})]}),Object(p.jsxs)("form",{className:"settingsForm",onSubmit:E,children:[Object(p.jsx)("label",{children:"Profile Picture"}),Object(p.jsxs)("div",{className:"settingsPP",children:[Object(p.jsx)("img",{src:s?URL.createObjectURL(s):"http://localhost:5000/images/"+T.profilePic,alt:""}),Object(p.jsx)("label",{htmlFor:"fileInput",children:Object(p.jsx)("i",{className:"settingsPPIcon far fa-user-circle"})}),Object(p.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return c(e.target.files[0])}})]}),Object(p.jsx)("label",{children:"Username"}),Object(p.jsx)("input",{type:"text",placeholder:T.username,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("label",{children:"Email"}),Object(p.jsx)("input",{type:"email",placeholder:T.email,onChange:function(e){return d(e.target.value)}}),Object(p.jsx)("label",{children:"Phone"}),Object(p.jsx)("input",{type:"phone",placeholder:T.phone,onChange:function(e){return v(e.target.value)}}),Object(p.jsx)("label",{children:"Password"}),Object(p.jsx)("input",{type:"password",onChange:function(e){return S(e.target.value)}}),Object(p.jsx)("button",{className:"settingsSubmitButton",type:"submit",children:"Update"}),A&&Object(p.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated..."})]})]}),Object(p.jsx)(P,{})]})}s(72);function F(){var e=Object(C.f)().pathname.split("/")[2],t=Object(a.useState)({}),s=Object(j.a)(t,2),c=s[0],n=s[1],r="http://localhost:5000/images/",i=Object(a.useContext)(h).user,o=Object(a.useState)(""),u=Object(j.a)(o,2),b=u[0],d=u[1],O=Object(a.useState)(""),m=Object(j.a)(O,2),x=m[0],v=m[1],N=Object(a.useState)(!1),w=Object(j.a)(N,2),I=w[0],S=w[1];Object(a.useEffect)((function(){var t=function(){var t=Object(g.a)(f.a.mark((function t(){var s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("/posts/"+e);case 2:s=t.sent,n(s.data),d(s.data.title),v(s.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var P=function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("/posts/".concat(c._id),{data:{username:i.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.put("/posts/".concat(c._id),{username:i.username,title:b,desc:x});case 3:S(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"singlePost",children:Object(p.jsxs)("div",{className:"singlePostWrapper",children:[c.photo&&Object(p.jsx)("img",{src:r+c.photo,alt:"",className:"singlePostImg"}),I?Object(p.jsx)("input",{type:"text",value:b,className:"singlePostTitleInput",autoFocus:!0,onChange:function(e){return d(e.target.value)}}):Object(p.jsxs)("h1",{className:"singlePostTitle",children:[b,c.username===(null===i||void 0===i?void 0:i.username)&&Object(p.jsxs)("div",{className:"singlePostEdit",children:[Object(p.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return S(!0)}}),Object(p.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:P})]})]}),Object(p.jsxs)("div",{className:"singlePostInfo",children:[Object(p.jsxs)("span",{className:"singlePostAuthor",children:["Author:",Object(p.jsx)(l.b,{to:"/?author=".concat(c.author),className:"link",children:Object(p.jsxs)("b",{children:[" ",c.author]})})]}),Object(p.jsx)("span",{className:"singlePostDate",children:c.date})]}),Object(p.jsxs)("div",{className:"singlePostInfo",children:[Object(p.jsxs)("span",{className:"singlePostAuthor",children:["Upload by: ",c.username]}),Object(p.jsxs)("span",{className:"singlePostDate",children:["Upload: ",new Date(c.createdAt).toLocaleDateString("en-GB")]})]}),Object(p.jsx)("div",{className:"singlePostInfo",children:Object(p.jsxs)("span",{className:"singlePostAuthor",children:["Collaborator: ",c.collaborator]})}),Object(p.jsx)("div",{className:"singlePostState",children:Object(p.jsx)("span",{className:"singlePostAuthor",children:c.state})}),I?Object(p.jsx)("textarea",{className:"singlePostDescInput",value:x,onChange:function(e){return v(e.target.value)}}):Object(p.jsx)("p",{className:"singlePostDesc",children:x}),I&&Object(p.jsx)("button",{className:"singlePostButton",onClick:k,children:"Update"}),Object(p.jsxs)("div",{className:"singlePostContact",children:[Object(p.jsxs)("span",{className:"singlePostAuthor",children:["Email: ",c.userEmail]}),Object(p.jsxs)("span",{className:"singlePostAuthor",children:["Phone: ",c.userPhone]})]}),c.pdf&&Object(p.jsx)("embed",{src:r+c.pdf,type:"application/pdf",className:"singlePostpdf"})]})})}s(73);function T(){return Object(p.jsxs)("div",{className:"single",children:[Object(p.jsx)(F,{}),Object(p.jsx)(P,{})]})}s(74);function U(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1];Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var n=Object(a.useState)(null),r=Object(j.a)(n,2),i=r[0],l=r[1],o=Object(a.useState)(""),u=Object(j.a)(o,2),b=u[0],d=u[1],O=Object(a.useState)(""),m=Object(j.a)(O,2),x=m[0],v=m[1],N=Object(a.useState)(""),w=Object(j.a)(N,2),I=w[0],S=w[1],P=Object(a.useState)(""),C=Object(j.a)(P,2),k=C[0],A=C[1],L=Object(a.useState)(""),F=Object(j.a)(L,2),T=F[0],U=F[1],E=Object(a.useState)(""),D=Object(j.a)(E,2),_=D[0],R=D[1],G=Object(a.useState)(""),B=Object(j.a)(G,2),H=B[0],J=B[1],q=Object(a.useState)(null),W=Object(j.a)(q,2),M=W[0],Y=W[1],z=Object(a.useContext)(h).user,K=function(){var e=Object(g.a)(f.a.mark((function e(t){var s,a,c,n,r,l,o,j;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s="",a="",s=""===T?"Proposal of thesis":T,a=""===_?"Arquitectura y Urbanismo":_,c={username:z.username,userPhone:z.phone,userEmail:z.email,author:x,state:s,date:I,title:b,collaborator:H,categories:a,desc:k},!i){e.next=19;break}return n=new FormData,r=Date.now()+i.name,n.append("name",r),n.append("file",i),c.pdf=r,e.prev=12,e.next=15,y.a.post("/upload",n);case 15:e.next=19;break;case 17:e.prev=17,e.t0=e.catch(12);case 19:if(!M){e.next=32;break}return l=new FormData,o=Date.now()+M.name,l.append("name",o),l.append("file",M),c.photo=o,e.prev=25,e.next=28,y.a.post("/upload",l);case 28:e.next=32;break;case 30:e.prev=30,e.t1=e.catch(25);case 32:return e.prev=32,e.next=35,y.a.post("/posts",c);case 35:j=e.sent,window.location.replace("/post/"+j.data._id),e.next=41;break;case 39:e.prev=39,e.t2=e.catch(32);case 41:case"end":return e.stop()}}),e,null,[[12,17],[25,30],[32,39]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"write",children:[M&&Object(p.jsx)("img",{className:"writeImg",src:URL.createObjectURL(M),alt:""}),Object(p.jsxs)("form",{className:"writeForm",onSubmit:K,children:[Object(p.jsxs)("div",{className:"writeFormGroup",children:[Object(p.jsx)("label",{htmlFor:"fileInput",children:Object(p.jsx)("i",{className:"writeIcon fas fa-plus"})}),Object(p.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return Y(e.target.files[0])}}),Object(p.jsx)("input",{type:"text",placeholder:"Title",className:"writeInput",autoFocus:!0,onChange:function(e){return d(e.target.value)}})]}),Object(p.jsxs)("div",{className:"writeFormGroup2",children:[Object(p.jsx)("input",{type:"text",placeholder:"Author",className:"writeInputAuthor",autoFocus:!0,onChange:function(e){return v(e.target.value)}}),Object(p.jsx)("label",{className:"labelDate",children:" Date"}),Object(p.jsx)("input",{type:"date",id:"start",className:"writeDate",name:"trip-start",min:"1960-01-01",max:"2022-01-01",onChange:function(e){return S(e.target.value.toString())}})]}),Object(p.jsxs)("div",{className:"writeFormGroup2",children:[Object(p.jsx)("label",{for:"lang",className:"labelOption",children:"State"}),Object(p.jsxs)("select",{name:"languages",id:"lang",className:"writeOption",onChange:function(e){return U(e.target.value)},children:[Object(p.jsx)("option",{value:"proposal of thesis",children:"Proposal of thesis"}),Object(p.jsx)("option",{value:"Developing",children:"Developing"}),Object(p.jsx)("option",{value:"finished",children:"Finished"})]}),Object(p.jsx)("label",{for:"lang",className:"labelState",children:"Categorie"}),Object(p.jsx)("select",{name:"languages",id:"lang",className:"writeOption",onChange:function(e){return R(e.target.value)},children:s.map((function(e){return Object(p.jsx)("option",{className:"sidebarListItem",children:e.name})}))})]}),Object(p.jsx)("div",{className:"writeFormGroup",children:Object(p.jsx)("textarea",{placeholder:"Description...",type:"text",className:"writeInput2 writeText",onChange:function(e){return A(e.target.value)}})}),Object(p.jsxs)("div",{className:"writeFormGroup2",children:[Object(p.jsx)("input",{type:"text",placeholder:"Collaborator",className:"writeInputAuthor",autoFocus:!0,onChange:function(e){return J(e.target.value)}}),Object(p.jsxs)("div",{className:"pdf",children:[Object(p.jsx)("label",{htmlFor:"fileInput2",children:"PDF"}),Object(p.jsx)("label",{htmlFor:"fileInput2",children:Object(p.jsx)("i",{class:"pdfIcon fas fa-file-pdf"})}),Object(p.jsx)("input",{type:"file",className:"pdfIcon",id:"fileInput2",style:{display:"none"},onChange:function(e){return l(e.target.files[0])}}),i&&Object(p.jsx)("i",{class:"Check fas fa-check-circle"})]})]}),Object(p.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]})}var E=function(){var e=Object(a.useContext)(h).user;return Object(p.jsxs)(l.a,{children:[Object(p.jsx)(m,{}),Object(p.jsxs)(C.c,{children:[Object(p.jsx)(C.a,{exact:!0,path:"/",children:Object(p.jsx)(k,{})}),Object(p.jsx)(C.a,{path:"/login",children:e?Object(p.jsx)(k,{}):Object(p.jsx)(A,{})}),Object(p.jsx)(C.a,{path:"/write",children:e?Object(p.jsx)(U,{}):Object(p.jsx)(A,{})}),Object(p.jsx)(C.a,{path:"/settings",children:e?Object(p.jsx)(L,{}):Object(p.jsx)(A,{})}),Object(p.jsx)(C.a,{path:"/post/:postId",children:Object(p.jsx)(T,{})})]})]})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(O,{children:Object(p.jsx)(E,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.e53714a2.chunk.js.map