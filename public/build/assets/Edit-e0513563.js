import{W as p,j as t}from"./app-c84003dc.js";import d from"./MenuForm-08478bbf.js";import{u as g}from"./hook-cb0ca87c.js";import{I as c}from"./TextInput-8efaad1f.js";import"./AuthenticatedLayout-7021f284.js";import"./ApplicationLogo-ac195a2d.js";import"./Dropdown-7273d057.js";import"./transition-a4b892e0.js";import"./InputLabel-da0d5ed9.js";import"./PrimaryButton-0889d5c3.js";function E({items:r,...a}){const{data:s,setData:o,post:i,reset:l}=p({...r,img:null}),{t:n}=g(),m=e=>{e.preventDefault(),i(route("menu-allergens.update",r.id))};return t.jsxs(d,{title:"edit_section",formProps:{encType:"multipart/form-data",onSubmit:m},data:s,routeName:route("menu-allergens.update",r.id),setData:o,reset:l,req:i,...a,children:[t.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"file_input",children:n("messages.upload_img")}),t.jsx("input",{className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400","aria-describedby":"file_input_help",id:"file_input",type:"file",onChange:e=>o(u=>({...u,img:e.target.files?e.target.files[0]:null}))}),t.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help",children:"SVG only."}),t.jsx(c,{message:a.errors.img,className:"mt-2"})]})}export{E as default};