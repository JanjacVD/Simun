import{j as s}from"./app-c0a7504f.js";import{u as c}from"./hook-45e5d221.js";import{M as i,B as m}from"./MenuDetails-b402813f.js";import"./DetailsLayout-621eb096.js";import"./AuthenticatedLayout-dc8e34fb.js";import"./ApplicationLogo-3513e425.js";import"./Dropdown-b3f042cd.js";import"./transition-123e98b9.js";import"./SecondaryButton-f8edee20.js";import"./DangerButton-cc0fee39.js";function N({items:e,...a}){const{t:r,currentLocale:o}=c(),t=o();return s.jsxs(i,{routeBase:"menu-items",...a,items:e,children:[s.jsxs("p",{className:"p-3",children:[r("messages.item_allergens")," :"," ",e.allergens.map(n=>n.name[t]+", ")]})," ",s.jsxs("p",{className:"p-3",children:[r("messages.desc_en")," : ",e.description.en]})," ",s.jsxs("p",{className:"p-3",children:[r("messages.desc_hr")," : ",e.description.hr]}),s.jsxs("p",{className:"p-3",children:[r("messages.price")," : ",e.price.toFixed(2)," €"]}),s.jsx(m,{className:"m-3",href:route("menu-categories.show",e.menu_category_id),children:r("messages.linked_cat")})]})}export{N as default};
