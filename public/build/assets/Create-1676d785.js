import{W as n,j as r}from"./app-c84003dc.js";import p from"./MenuForm-08478bbf.js";import{u}from"./hook-cb0ca87c.js";import{I as d}from"./TextInput-8efaad1f.js";import"./AuthenticatedLayout-7021f284.js";import"./ApplicationLogo-ac195a2d.js";import"./Dropdown-7273d057.js";import"./transition-a4b892e0.js";import"./InputLabel-da0d5ed9.js";import"./PrimaryButton-0889d5c3.js";function N({...t}){const{data:s,setData:a,post:i,reset:l}=n({name:{en:"",hr:""},img:null}),{t:m}=u();return r.jsxs(p,{title:"create_allergen",formProps:{encType:"multipart/form-data"},data:s,routeName:route("menu-allergens.store"),setData:a,reset:l,req:i,...t,children:[r.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"file_input",children:m("messages.upload_img")}),r.jsx("input",{className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400","aria-describedby":"file_input_help",id:"file_input",type:"file",onChange:e=>{var o;return a("img",e.target.files?(o=e==null?void 0:e.target)==null?void 0:o.files[0]:null)}}),r.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help",children:"SVG only."}),r.jsx(d,{message:t.errors.img,className:"mt-2"})]})}export{N as default};