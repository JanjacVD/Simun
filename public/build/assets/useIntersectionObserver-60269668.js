import{r as e}from"./app-04a51ddf.js";const a=t=>{const[n,o]=e.useState(!1);return e.useEffect(()=>{const r={root:null,rootMargin:"0px",threshold:0},s=new IntersectionObserver(c=>{c.forEach(i=>{i.isIntersecting&&(o(!0),s.disconnect())})},r);return t!=null&&t.current&&s.observe(t==null?void 0:t.current),()=>{s.disconnect()}},[t]),n};export{a as u};
