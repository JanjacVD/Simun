import{r as n,j as e}from"./app-44858a89.js";import{b as m}from"./index-86755b00.js";import{u as c}from"./hook-2a30a38b.js";import d from"./SectionSelector-7122a9ef.js";import p from"./DisplayedSection-3671cd27.js";import{G as l}from"./GuestLayoutContainer-5ca28e30.js";import x from"./MenuHead-388ebde3.js";import"./useWindowWidth-6abc0510.js";import"./MenuItemUnit-2a88b65e.js";import"./AllergenUnit-58896ff9.js";import"./Map-741a3367.js";import"./ApplicationLogo-4cf24ba3.js";function k({menu:t}){var r;const{t:i}=c(),[s,o]=n.useState(((r=t.data[0])==null?void 0:r.order)||0);return e.jsxs(l,{children:[e.jsx(x,{}),e.jsxs("section",{id:"menu",children:[e.jsxs("div",{className:"first-block info-block",children:[e.jsx("div",{className:"info",children:e.jsx("h1",{children:i("labels.menu")})}),e.jsx(m.LazyLoadImage,{src:"/storage/page-images/menu.webp",alt:"Shrimp spaghetti",title:"Shrimp spaghetti"})]}),e.jsxs("div",{className:"menu-container",children:[e.jsx(d,{categories:t.data,selectedSection:s,setSelectedSection:o}),e.jsx(p,{section:t.data.find(a=>a.order===s)})]})]})]})}export{k as default};