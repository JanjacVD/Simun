import{W as p,j as t}from"./app-a3629bac.js";import d from"./MenuForm-f31b8645.js";import{u as g}from"./hook-5229268a.js";import{I as c}from"./TextInput-6f8db91a.js";import"./AuthenticatedLayout-d69482b7.js";import"./ApplicationLogo-7553e69e.js";import"./Dropdown-4b87fa6c.js";import"./transition-e9e8be0c.js";import"./InputLabel-2dd68172.js";import"./PrimaryButton-95125923.js";function E({items:r,...a}){const{data:s,setData:o,post:i,reset:l}=p({...r,img:null}),{t:n}=g(),m=e=>{e.preventDefault(),i(route("menu-allergens.update",r.id))};return t.jsxs(d,{title:"edit_section",formProps:{encType:"multipart/form-data",onSubmit:m},data:s,routeName:route("menu-allergens.update",r.id),setData:o,reset:l,req:i,...a,children:[t.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"file_input",children:n("messages.upload_img")}),t.jsx("input",{className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400","aria-describedby":"file_input_help",id:"file_input",type:"file",onChange:e=>o(u=>({...u,img:e.target.files?e.target.files[0]:null}))}),t.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help",children:"SVG only."}),t.jsx(c,{message:a.errors.img,className:"mt-2"})]})}export{E as default};