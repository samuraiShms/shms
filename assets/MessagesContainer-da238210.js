import{j as e,l as o,c,a as i,e as g,d as l,u as d,E as u}from"./index-960eff3d.js";import{r as x,m as _}from"./validators-4d9638eb.js";import{r as h,F as j,T as N}from"./controls-5b0ca7a1.js";import{r as v}from"./redirectToLogin-89f0e500.js";const M=s=>{const t="/messages/"+s.interlocutor.id;return e.jsx("div",{className:"messages__interlocutor",children:e.jsx(o,{className:"messages__link",to:t,children:s.interlocutor.text})})},b=s=>e.jsx("div",{className:"messages__item item-messages",children:e.jsx("div",{className:"item-messages__text",children:s.message.text})}),f=s=>{const t=a=>{s.addNewMessage(a.message,s.params.messagesId)};let m=s.params.messagesId;return e.jsxs("div",{className:"messages",children:[e.jsxs("div",{className:"messages__body",children:[e.jsx("div",{className:"messages__interlocutors",children:s.messages.interlocutorsData.map(a=>e.jsx(M,{interlocutor:a},a.id))}),e.jsx("div",{className:"messages__content",children:s.messages.messagesData[m].length?s.messages.messagesData[m].map(a=>e.jsx(b,{message:a},a.id)):e.jsx("p",{children:s.messages.messagesData[0]})})]}),e.jsx(w,{onSubmit:t})]})},F=_(15),p=s=>e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:t=>{s.handleSubmit(),s.reset("messagesForm"),t.preventDefault()},className:"messages__controls controls-messages",children:[e.jsx(j,{validate:[x,F],name:"message",component:N,type:"text",placeholder:"Enter new message",className:"controls-messages__item _input"}),e.jsx("button",{type:"submit",className:"controls-messages__button _btn",children:"Add message"})]})}),w=h({form:"messagesForm"})(p),D=s=>m=>{const a=g(),n=l(),r=d();return e.jsx(s,{...m,params:a,location:r,navigate:n})};let L=s=>({messages:s.messages});const C=c(i(L,{addNewMessage:u.addNewMessage}),D,v)(f);export{C as default};
