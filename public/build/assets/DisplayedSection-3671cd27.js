import{j as i}from"./app-44858a89.js";import a from"./MenuItemUnit-2a88b65e.js";import"./hook-2a30a38b.js";import"./AllergenUnit-58896ff9.js";function l({section:o}){return o?i.jsx("div",{className:"displayed-section","aria-label":`Displayed Section: ${o.name}`,children:o.categories.sort((e,r)=>e.order-r.order).map(e=>i.jsxs("div",{className:"menu-category",children:[i.jsx("h2",{children:e.name}),e.items.sort((r,t)=>r.order-t.order).map(r=>i.jsx(a,{item:r},r.order))]},e.order))}):null}export{l as default};