import{j as s}from"./app-44858a89.js";import{u as m}from"./hook-2a30a38b.js";import{M as n,B as c}from"./MenuDetails-b35a8c7a.js";import"./DetailsLayout-b885ef5f.js";import"./AuthenticatedLayout-634ff230.js";import"./ApplicationLogo-4cf24ba3.js";import"./Dropdown-ab8066c4.js";import"./transition-b07e4132.js";import"./moment-fbc5633a.js";import"./SecondaryButton-b92b94ff.js";import"./DangerButton-9ef84821.js";function B({items:e,...a}){const{t:r,currentLocale:o}=m(),t=o();return s.jsxs(n,{routeBase:"menu-items",...a,items:e,children:[s.jsxs("p",{className:"p-3",children:[r("messages.item_allergens")," :"," ",e.allergens.map(i=>i.name[t]+", ")]})," ",s.jsxs("p",{className:"p-3",children:[r("messages.desc_en")," : ",e.description.en]})," ",s.jsxs("p",{className:"p-3",children:[r("messages.desc_hr")," : ",e.description.hr]}),s.jsxs("p",{className:"p-3",children:[r("messages.price")," : ",e.price.toFixed(2)," €"]}),s.jsx(c,{className:"m-3",href:route("menu-categories.show",e.menu_category_id),children:r("messages.linked_cat")})]})}export{B as default};
