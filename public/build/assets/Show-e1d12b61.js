import{j as r}from"./app-09f8c525.js";import{u as i}from"./hook-8fee3756.js";import{M as m,B as s}from"./MenuDetails-ce36c550.js";import"./DetailsLayout-ffa2c3e2.js";import"./AuthenticatedLayout-16d6a6e3.js";import"./ApplicationLogo-0a697f22.js";import"./Dropdown-bad42f6a.js";import"./transition-7014a3b1.js";import"./moment-fbc5633a.js";import"./SecondaryButton-fc6a3ffd.js";import"./DangerButton-936ac617.js";function _({items:e,...o}){const{t}=i();return r.jsxs(m,{routeBase:"menu-categories",...o,items:e,children:[r.jsx(s,{className:"mr-5",href:route("menu-items.index",{category_id:e.id}),children:t("messages.linked_item")}),r.jsx(s,{className:"mr-5",href:route("menu-sections.show",e.menu_section_id),children:t("messages.linked_section")})]})}export{_ as default};