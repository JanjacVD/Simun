import{W as p,j as t}from"./app-04a51ddf.js";import d from"./MenuForm-85ed1c6f.js";import{u as g}from"./hook-213802a0.js";import{I as c}from"./TextInput-c8f3bd85.js";import"./AuthenticatedLayout-0e120d93.js";import"./ApplicationLogo-f4931609.js";import"./Dropdown-a0fa09ef.js";import"./transition-8a6e6493.js";import"./InputLabel-eb0a0f80.js";import"./PrimaryButton-04fe27cb.js";function E({items:r,...a}){const{data:s,setData:o,post:i,reset:l}=p({...r,img:null}),{t:n}=g(),m=e=>{e.preventDefault(),i(route("menu-allergens.update",r.id))};return t.jsxs(d,{title:"edit_section",formProps:{encType:"multipart/form-data",onSubmit:m},data:s,routeName:route("menu-allergens.update",r.id),setData:o,reset:l,req:i,...a,children:[t.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"file_input",children:n("messages.upload_img")}),t.jsx("input",{className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400","aria-describedby":"file_input_help",id:"file_input",type:"file",onChange:e=>o(u=>({...u,img:e.target.files?e.target.files[0]:null}))}),t.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help",children:"SVG only."}),t.jsx(c,{message:a.errors.img,className:"mt-2"})]})}export{E as default};