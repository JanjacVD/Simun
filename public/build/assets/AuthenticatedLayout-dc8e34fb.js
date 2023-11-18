import{j as e,d as c,r as x}from"./app-c0a7504f.js";import{A as g}from"./ApplicationLogo-3513e425.js";import{D as d}from"./Dropdown-b3f042cd.js";import{u as m}from"./hook-45e5d221.js";function n({active:s=!1,className:i="",children:o,...a}){return e.jsx(c,{...a,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(s?"border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 ":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ")+i,children:o})}function t({active:s=!1,className:i="",children:o,...a}){return e.jsx(c,{...a,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${s?"border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${i}`,children:o})}function v({user:s,header:i,children:o}){const[a,l]=x.useState(!1),{t:r}=m();return e.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900",children:[e.jsxs("nav",{className:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(c,{href:"/",children:e.jsx(g,{className:"block h-7 w-auto fill-current text-gray-800 dark:text-gray-200"})})}),e.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[e.jsx(n,{href:route("dashboard"),active:route().current("dashboard"),children:r("messages.dashboard")}),e.jsx(n,{href:route("menu-sections.index"),active:route().current("menu-sections.index"),children:r("messages.sections")}),e.jsx(n,{href:route("menu-categories.index"),active:route().current("menu-categories.index"),children:r("messages.categories")}),e.jsx(n,{href:route("menu-items.index"),active:route().current("menu-items.index"),children:r("messages.items")})," ",e.jsx(n,{href:route("menu-allergens.index"),active:route().current("menu-allergens.index"),children:r("messages.allergens")}),s.is_superuser&&e.jsx(n,{href:route("user.list"),active:route().current("user.list"),children:r("messages.users")})]})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e.jsx("div",{className:"ml-3 relative",children:e.jsxs(d,{children:[e.jsx(d.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:[s.name,e.jsx("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(d.Content,{children:[e.jsx(d.Link,{href:route("profile.edit"),children:r("messages.profile")}),e.jsx(d.Link,{href:route("logout"),method:"post",as:"button",children:r("messages.logout")})]})]})})}),e.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>l(u=>!u),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:a?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:a?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(a?"block":"hidden")+" sm:hidden",children:[e.jsxs("div",{className:"pt-2 pb-3 space-y-1",children:[e.jsx(t,{href:route("dashboard"),active:route().current("dashboard"),children:r("messages.dashboard")}),e.jsx(t,{href:route("menu-sections.index"),active:route().current("menu-sections.index"),children:r("messages.sections")}),e.jsx(t,{href:route("menu-categories.index"),active:route().current("menu-categories.index"),children:r("messages.categories")}),e.jsx(t,{href:route("menu-items.index"),active:route().current("menu-items.index"),children:r("messages.items")}),e.jsx(t,{href:route("menu-allergens.index"),active:route().current("menu-allergens.index"),children:r("messages.allergens")}),s.is_superuser&&e.jsx(t,{href:route("user.list"),active:route().current("user.list"),children:r("messages.users")})]}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800 dark:text-gray-200",children:s.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:s.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(t,{href:route("profile.edit"),children:r("messages.profile")}),e.jsx(t,{method:"post",href:route("logout"),as:"button",children:r("messages.logout")})]})]})]})]}),i&&e.jsx("header",{className:"bg-white dark:bg-gray-800 shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:i})}),e.jsx("main",{children:o})]})}export{v as A};
