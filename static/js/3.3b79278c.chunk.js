(this.webpackJsonpvinex=this.webpackJsonpvinex||[]).push([[3],{747:function(e,a,t){"use strict";t.r(a);var s=t(5),c=t(1),l=t(739),r=t(371),i=t(8),n=t(20),o=t.p+"static/media/reg-bg.072f9069.jpg",d=t(11),j=t(33),u=t(78),b=t(3),m=t(0);a.default=Object(i.b)((function(e){return{errorMessage:e.auth.errorMessage,successMessage:e.auth.successMessage,showLoading:e.auth.showLoading}}))((function(e){var a=Object(n.o)(),t=Object(c.useState)(""),h=Object(s.a)(t,2),g=h[0],v=h[1],x=Object(c.useState)(""),O=Object(s.a)(x,2),p=O[0],f=O[1],N=Object(c.useState)(!1),w=Object(s.a)(N,2),y=w[0],M=w[1],k=Object(c.useState)(""),_=Object(s.a)(k,2),C=_[0],S=_[1],q=Object(i.c)(),L=Object(i.d)((function(e){return e.auth})),A=Object(i.d)((function(e){return e.auth.lang})),E=new u.a;return Object(c.useEffect)((function(){E.getDashboardLogo().then((function(e){var a;if(e&&null!==(a=e.data)&&void 0!==a&&a.data){var t,s,c,l;S(null===(t=e.data)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.dashboard_logo);var r=document.createElement("link");r.rel="icon",r.href=null===(c=e.data)||void 0===c||null===(l=c.data)||void 0===l?void 0:l.dashboard_logo,r.type="image/x-icon";var i=document.querySelector("link[rel='icon']");i&&document.head.removeChild(i),document.head.appendChild(r)}}))}),[]),Object(m.jsxs)("div",{className:"login-wrapper ".concat(A),children:[Object(m.jsxs)("div",{className:"login-aside-left position-relative",style:{backgroundImage:"url("+o+")"},children:[Object(m.jsx)("div",{className:"login-logo position-absolute",style:{width:"22rem",left:"50%",top:"35%",transform:"translate(-50%, -40%)"},children:Object(m.jsx)("img",{src:C,alt:"logo",className:"w-100"})}),Object(m.jsxs)("div",{className:"login-description",children:[Object(m.jsxs)("h3",{className:"text-white",children:[b.a[A].text," \u270c\ufe0f"]}),Object(m.jsx)("div",{className:"mt-2",children:Object(m.jsx)("a",{href:"/",className:"text-white",children:"\xa9 2023 Leap"})})]})]}),Object(m.jsx)("div",{className:"login-aside-right",children:Object(m.jsx)("div",{className:"row m-0 justify-content-center h-100 align-items-center",children:Object(m.jsx)("div",{className:"col-xl-6 col-xxl-8",children:Object(m.jsx)("div",{className:"authincation-content",children:Object(m.jsx)("div",{className:"row no-gutters",children:Object(m.jsx)("div",{className:"col-xl-12",children:Object(m.jsxs)("div",{className:"auth-form",children:[Object(m.jsx)("div",{className:" mb-3",children:Object(m.jsx)("h2",{className:"text-primary",children:b.a[A].welcome_back})}),Object(m.jsx)("h4",{className:" mb-4 ",children:b.a[A].sign_text}),e.errorMessage&&Object(m.jsx)("div",{className:"text-danger",children:e.errorMessage}),e.successMessage&&Object(m.jsx)("div",{className:"bg-green-300 text-green-900 border border-green-900 p-1 my-2",children:e.successMessage}),Object(m.jsxs)(d.AvForm,{onValidSubmit:function(e){e.preventDefault(),q(Object(j.m)(!0)),q(Object(j.n)(g,p,a))},className:"login-form",children:[Object(m.jsxs)(l.a,{children:[Object(m.jsx)(r.a,{md:12,className:"form-group mb-2",children:Object(m.jsx)(d.AvField,{label:b.a[A].email,name:"email",type:"email",value:g,errorMessage:"Please Enter a Valid Value",validate:{required:{value:!0,errorMessage:b.a[A].field_required}},placeholder:b.a[A].email,onChange:function(e){return v(e.target.value)}})}),Object(m.jsxs)(r.a,{md:12,className:"form-group position-relative",children:[Object(m.jsx)(d.AvField,{label:b.a[A].password,name:"password",type:y?"text":"password",value:p,errorMessage:"Please enter a valid password",validate:{required:{value:!0,errorMessage:b.a[A].field_required}},placeholder:b.a[A].password,onChange:function(e){return f(e.target.value)}}),y?Object(m.jsx)("i",{className:"la la-eye-slash position-absolute",style:{top:"50%",right:"en"===A?"8%":"auto",left:"ar"===A?"8%":"auto"},onClick:function(){return M(!1)}}):Object(m.jsx)("i",{className:"la la-eye position-absolute",style:{top:"50%",right:"en"===A?"8%":"auto",left:"ar"===A?"8%":"auto"},onClick:function(){return M(!0)}})]})]}),Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:null===L||void 0===L?void 0:L.showLoading,children:b.a[A].sign_in})})]})]})})})})})})})]})}))}}]);
//# sourceMappingURL=3.3b79278c.chunk.js.map