import{W as n,j as r}from"./app-58bb4d8c.js";import p from"./MenuForm-c826c60e.js";import{u}from"./hook-66f5ded9.js";import{I as d}from"./TextInput-cb39f436.js";import"./AuthenticatedLayout-091a9da9.js";import"./ApplicationLogo-c0778b43.js";import"./Dropdown-b0a21cb5.js";import"./transition-a0d04385.js";import"./InputLabel-98d555b7.js";import"./PrimaryButton-066468fb.js";function N({...t}){const{data:s,setData:a,post:i,reset:l}=n({name:{en:"",hr:""},img:null}),{t:m}=u();return r.jsxs(p,{title:"create_allergen",formProps:{encType:"multipart/form-data"},data:s,routeName:route("menu-allergens.store"),setData:a,reset:l,req:i,...t,children:[r.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"file_input",children:m("messages.upload_img")}),r.jsx("input",{className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400","aria-describedby":"file_input_help",id:"file_input",type:"file",onChange:e=>{var o;return a("img",e.target.files?(o=e==null?void 0:e.target)==null?void 0:o.files[0]:null)}}),r.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help",children:"SVG only."}),r.jsx(d,{message:t.errors.img,className:"mt-2"})]})}export{N as default};