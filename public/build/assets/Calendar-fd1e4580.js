import{r as l,j as t}from"./app-44858a89.js";import{u as w}from"./hook-2a30a38b.js";import{h as j}from"./moment-fbc5633a.js";const p=l.memo(function({disabledDates:u=[],disabledDays:h=[]}){const{currentLocale:c}=w(),s=new Date().getFullYear(),[r,m]=l.useState(new Date().getMonth());function D(e){return new Date(s,e+1,0).getDate()}const d=e=>{const a=e.currentTarget.value;m(n=>{const i=+a+n;return i<new Date().getMonth()?11:i>11?new Date().getMonth():i})};function g(e){let a=[];for(let n=1;n<=D(e);n++)a.push(new Date(s,e,n));return a}const f=l.useMemo(()=>g(r),[r]);function o(e){return h.includes(e.getDay())||u.some(a=>j(a).toDate().toDateString()===e.toDateString())}const v=[1,2,3,4,5,6,0];return t.jsxs("div",{className:"calendar-container",children:[t.jsxs("div",{className:"calendar",children:[t.jsxs("div",{className:"header",children:[t.jsx("button",{"aria-label":"Previous Month",title:"Previous Month",value:-1,onClick:d,children:"‹"}),t.jsxs("h3",{children:[new Intl.DateTimeFormat(c(),{month:"long"}).format(new Date(s,r))," ",s]}),t.jsx("button",{"aria-label":"Next Month",title:"Next Month",value:1,onClick:d,children:"›"})]}),t.jsxs("div",{className:"dates",children:[v.map(e=>t.jsx("div",{className:"col-"+e,children:new Intl.DateTimeFormat(c(),{weekday:"short"}).format(new Date(2022,7,e))},e)),f.map(e=>t.jsx("div",{"aria-describedby":o(e)?"disabled-info":void 0,"aria-disabled":o(e),className:"col-"+e.getDay()+(o(e)?" disabled-date":""),children:e.getDate()},e.getUTCDate()))]})]}),t.jsx("div",{id:"disabled-info",className:"sr-only",children:"Non-working day"})]})});export{p as default};
