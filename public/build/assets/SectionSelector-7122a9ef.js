import{r as i,j as a}from"./app-44858a89.js";import{u}from"./useWindowWidth-6abc0510.js";function f({categories:s,selectedSection:o,setSelectedSection:t}){const n=u(),[d,l]=i.useState(!1),c=r=>{n>800?t(Number(r.currentTarget.value)):(r.currentTarget.classList.contains("selected")||t(Number(r.currentTarget.value)),l(e=>!e)),console.log(r.currentTarget.value)};return a.jsx("div",{className:(d?"dropdown-displayed ":"")+"category-selector",children:s.sort((r,e)=>r.order-e.order).map(r=>a.jsxs("button",{onClick:c,value:r.order,className:o===r.order?"selected":"","aria-current":o===r.order?"page":void 0,"aria-label":"Set menu section to:"+r.name,children:[r.name,a.jsx("span",{children:"🠋"})]},r.order))})}export{f as default};
