import{j as t}from"./app-58bb4d8c.js";import{u as o}from"./hook-66f5ded9.js";import{M as m,B as s}from"./MenuDetails-0962adbf.js";import"./DetailsLayout-3dba20d0.js";import"./AuthenticatedLayout-091a9da9.js";import"./ApplicationLogo-c0778b43.js";import"./Dropdown-b0a21cb5.js";import"./transition-a0d04385.js";import"./SecondaryButton-65dc46f7.js";import"./DangerButton-5b29f292.js";function j({items:e,...i}){const{t:r}=o();return t.jsxs(m,{routeBase:"menu-sections",...i,items:e,children:[t.jsx(s,{className:"mr-5",href:route("menu-sections.edit",e.id),children:r("messages.edit")}),t.jsx(s,{className:"mr-5",href:route("menu-categories.index",{section_id:e.id}),children:r("messages.linked_cat")})]})}export{j as default};