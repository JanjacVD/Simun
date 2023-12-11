import{j as e,a as v,_ as y}from"./app-44858a89.js";import{A as N}from"./AuthenticatedLayout-634ff230.js";import{I as i}from"./InputLabel-996966e0.js";import{T as d,I as n}from"./TextInput-d3f6225f.js";import{u as k}from"./hook-2a30a38b.js";import{P as _}from"./PrimaryButton-f8ee8d97.js";import"./ApplicationLogo-4cf24ba3.js";import"./Dropdown-ab8066c4.js";import"./transition-b07e4132.js";function P({auth:o,errors:t,routeName:c,data:a,req:u,reset:x,setData:m,children:g,parentResult:l,formProps:h,title:p}){const{t:r,currentLocale:b}=k(),j=b(),f=s=>{s.preventDefault(),u(c,{onSuccess:()=>{y.success(r("messages.sent")),x()}})};return e.jsxs(N,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:r("messages."+p)}),children:[e.jsx(v,{title:"Dashboard"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800  shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{onSubmit:f,...h,children:[e.jsxs("div",{className:"mb-5",children:[e.jsx(i,{htmlFor:"name_en",value:r("messages.name_en")}),e.jsx(d,{required:!0,id:"name_en",type:"text",name:"text_en",value:a.name.en,className:"mt-1 block w-full",isFocused:!0,onChange:s=>m("name",{...a.name,en:s.target.value})}),e.jsx(n,{message:t["name.en"],className:"mt-2"})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx(i,{htmlFor:"name_hr",value:r("messages.name_hr")}),e.jsx(d,{required:!0,id:"name_hr",type:"text",name:"name_hr",value:a.name.hr,className:"mt-1 block w-full",isFocused:!0,onChange:s=>m("name",{...a.name,hr:s.target.value})}),e.jsx(n,{message:t.name,className:"mt-2"})]}),g,l&&e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"parentClass",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Select an option"}),e.jsx("select",{required:!0,defaultValue:a.parent_id,id:"parentClass",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:s=>m("parent_id",s.target.value),children:l.map(s=>e.jsx("option",{value:s.id,children:s.name[j]},s.id))}),e.jsx(n,{message:t.parent_id,className:"mt-2"})]}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(_,{className:"ml-4",disabled:!a.name.en||!a.name.hr,children:r("messages.save")})})]})})})})})]})}export{P as default};
