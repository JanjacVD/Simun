import{j as r}from"./app-02d2a3df.js";import{u as i}from"./hook-85ef34ef.js";import{M as m,B as s}from"./MenuDetails-ddeeac94.js";import"./DetailsLayout-be06187b.js";import"./AuthenticatedLayout-9b606223.js";import"./ApplicationLogo-5285855e.js";import"./Dropdown-1c0dbc2f.js";import"./transition-043ae5b1.js";import"./moment-fbc5633a.js";import"./SecondaryButton-dd5942a4.js";import"./DangerButton-ed407efe.js";function _({items:e,...o}){const{t}=i();return r.jsxs(m,{routeBase:"menu-categories",...o,items:e,children:[r.jsx(s,{className:"mr-5",href:route("menu-items.index",{category_id:e.id}),children:t("messages.linked_item")}),r.jsx(s,{className:"mr-5",href:route("menu-sections.show",e.menu_section_id),children:t("messages.linked_section")})]})}export{_ as default};
