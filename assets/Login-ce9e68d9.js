import{j as e,a as i,N as l,c,G as d}from"./index-960eff3d.js";import{F as t,I as s,r as u}from"./controls-5b0ca7a1.js";import{r as a,m}from"./validators-4d9638eb.js";const x=m(12),h=m(100),p=o=>e.jsxs("form",{onSubmit:o.handleSubmit,className:"login__form form-login",children:[e.jsx("div",{className:"form-login__item",children:e.jsx(t,{validate:[a,h],component:s,type:"text",name:"email",placeholder:"E-mail",className:"form-login__input _input"})}),e.jsx("div",{className:"form-login__item",children:e.jsx(t,{validate:[a,x],component:s,type:"text",name:"password",placeholder:"password",className:"form-login__input _input"})}),e.jsxs("div",{className:"form-login__checkbox",children:[e.jsx(t,{component:"input",name:"rememberMe",type:"checkbox"}),e.jsx("label",{className:"form-login__label",children:"Remember me"})]}),o.error&&e.jsx("div",{className:"error",children:o.error}),e.jsx("div",{className:"form-login__button",children:e.jsx("button",{className:"_btn",children:"Submit"})})]});const g=o=>({id:o.auth.id}),_=o=>{const r=n=>n.id?e.jsx(l,{to:`/profile/${n.id}`}):e.jsx(o,{...n});return i(g,null)(r)},j=u({form:"login"})(p),f=o=>{const r=n=>{o.setAuthThunkCreator(n.email,n.password,n.rememberMe?n.rememberMe:!1)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"login",children:[e.jsx("h2",{className:"form-login__title",children:"Login"}),e.jsx(j,{onSubmit:r})]})})};let b=o=>({}),N={setAuthThunkCreator:d};const S=c(i(b,N),_)(f);export{S as default};
