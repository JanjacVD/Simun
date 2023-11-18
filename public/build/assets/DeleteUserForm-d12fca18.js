import{c as p,r as u,b as nt,R as oe,j as v,W as rt}from"./app-c0a7504f.js";import{D as Ee}from"./DangerButton-cc0fee39.js";import{T as ot,I as lt}from"./TextInput-005aa49c.js";import{I as at}from"./InputLabel-0fc988ce.js";import{l as Z,s as B,a as N,u as k,b as de,D as x,X as $,o as E,c as fe,y as P,p as it,f as Te,T as ut,d as Se,S as ye,C as st,e as K,t as te}from"./transition-123e98b9.js";import{S as ct}from"./SecondaryButton-f8edee20.js";var be;let O=(be=p.useId)!=null?be:function(){let e=Z(),[t,n]=p.useState(e?()=>B.nextId():null);return N(()=>{t===null&&n(B.nextId())},[t]),t!=null?""+t:void 0};function Pe(e){return B.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),Le=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Le||{}),dt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(dt||{});function ft(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var De=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(De||{});function mt(e,t=0){var n;return e===((n=Pe(e))==null?void 0:n.body)?!1:k(t,{0(){return e.matches(le)},1(){let r=e;for(;r!==null;){if(r.matches(le))return!0;r=r.parentElement}return!1}})}var pt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(pt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function M(e){e==null||e.focus({preventScroll:!0})}let vt=["textarea","input"].join(",");function gt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,vt))!=null?n:!1}function ht(e,t=n=>n){return e.slice().sort((n,r)=>{let a=t(n),l=t(r);if(a===null||l===null)return 0;let o=a.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function z(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:a=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?ht(e):e:ft(e);a.length>0&&o.length>1&&(o=o.filter(m=>!a.includes(m))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},d=0,f=o.length,g;do{if(d>=f||d+f<=0)return 0;let m=s+d;if(t&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}g=o[m],g==null||g.focus(c),d+=i}while(g!==l.activeElement);return t&6&&gt(g)&&g.select(),2}function X(e,t,n){let r=de(t);u.useEffect(()=>{function a(l){r.current(l)}return document.addEventListener(e,a,n),()=>document.removeEventListener(e,a,n)},[e,n])}function Fe(e,t,n){let r=de(t);u.useEffect(()=>{function a(l){r.current(l)}return window.addEventListener(e,a,n),()=>window.removeEventListener(e,a,n)},[e,n])}function wt(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function a(o,i){if(!r.current||o.defaultPrevented)return;let s=i(o);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let c=function d(f){return typeof f=="function"?d(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let d of c){if(d===null)continue;let f=d instanceof HTMLElement?d:d.current;if(f!=null&&f.contains(s)||o.composed&&o.composedPath().includes(f))return}return!mt(s,De.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let l=u.useRef(null);X("pointerdown",o=>{var i,s;r.current&&(l.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),X("mousedown",o=>{var i,s;r.current&&(l.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),X("click",o=>{l.current&&(a(o,()=>l.current),l.current=null)},!0),X("touchend",o=>a(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Fe("blur",o=>a(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Et(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&yt(n)?!1:r}function yt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let bt="div";var J=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(J||{});function xt(e,t){let{features:n=1,...r}=e,a={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return $({ourProps:a,theirProps:r,slot:{},defaultTag:bt,name:"Hidden"})}let ae=x(xt);var Ce=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ce||{});function me(e,t){let n=u.useRef([]),r=E(e);u.useEffect(()=>{let a=[...n.current];for(let[l,o]of t.entries())if(n.current[l]!==o){let i=r(t,a);return n.current=t,i}},[r,...t])}function $t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function U(...e){return u.useMemo(()=>Pe(...e),[...e])}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Tt(){let e=u.useRef(0);return Fe("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Me(e,t,n,r){let a=de(n);u.useEffect(()=>{e=e??window;function l(o){a.current(o)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function St(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ne(e){let t=E(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,fe(()=>{n.current&&t()})}),[t])}function Re(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Pt="div";var Ae=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ae||{});function Lt(e,t){let n=u.useRef(null),r=P(n,t),{initialFocus:a,containers:l,features:o=30,...i}=e;Z()||(o=1);let s=U(n);Ct({ownerDocument:s},!!(o&16));let c=Mt({ownerDocument:s,container:n,initialFocus:a},!!(o&2));Nt({ownerDocument:s,container:n,containers:l,previousActiveElement:c},!!(o&8));let d=Tt(),f=E(h=>{let T=n.current;T&&(L=>L())(()=>{k(d.current,{[H.Forwards]:()=>{z(T,F.First,{skipElements:[h.relatedTarget]})},[H.Backwards]:()=>{z(T,F.Last,{skipElements:[h.relatedTarget]})}})})}),g=it(),m=u.useRef(!1),R={ref:r,onKeyDown(h){h.key=="Tab"&&(m.current=!0,g.requestAnimationFrame(()=>{m.current=!1}))},onBlur(h){let T=Re(l);n.current instanceof HTMLElement&&T.add(n.current);let L=h.relatedTarget;L instanceof HTMLElement&&L.dataset.headlessuiFocusGuard!=="true"&&(ke(T,L)||(m.current?z(n.current,k(d.current,{[H.Forwards]:()=>F.Next,[H.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&M(h.target)))}};return p.createElement(p.Fragment,null,!!(o&4)&&p.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:J.Focusable}),$({ourProps:R,theirProps:i,defaultTag:Pt,name:"FocusTrap"}),!!(o&4)&&p.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:J.Focusable}))}let Dt=x(Lt),j=Object.assign(Dt,{features:Ae}),D=[];St(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Ft(e=!0){let t=u.useRef(D.slice());return me(([n],[r])=>{r===!0&&n===!1&&fe(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=D.slice())},[e,D,t]),E(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Ct({ownerDocument:e},t){let n=Ft(t);me(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&M(n())},[t]),Ne(()=>{t&&M(n())})}function Mt({ownerDocument:e,container:t,initialFocus:n},r){let a=u.useRef(null),l=Te();return me(()=>{if(!r)return;let o=t.current;o&&fe(()=>{if(!l.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){a.current=i;return}}else if(o.contains(i)){a.current=i;return}n!=null&&n.current?M(n.current):z(o,F.First)===Le.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=e==null?void 0:e.activeElement})},[r]),a}function Nt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},a){let l=Te();Me(e==null?void 0:e.defaultView,"focus",o=>{if(!a||!l.current)return;let i=Re(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let c=o.target;c&&c instanceof HTMLElement?ke(i,c)?(r.current=c,M(c)):(o.preventDefault(),o.stopPropagation(),M(s)):M(r.current)},!0)}function ke(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Oe=u.createContext(!1);function Rt(){return u.useContext(Oe)}function ie(e){return p.createElement(Oe.Provider,{value:e.force},e.children)}function At(e){let t=Rt(),n=u.useContext(je),r=U(e),[a,l]=u.useState(()=>{if(!t&&n!==null||B.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{a!==null&&(r!=null&&r.body.contains(a)||r==null||r.body.appendChild(a))},[a,r]),u.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),a}let kt=u.Fragment;function Ot(e,t){let n=e,r=u.useRef(null),a=P(ut(d=>{r.current=d}),t),l=U(r),o=At(r),[i]=u.useState(()=>{var d;return B.isServer?null:(d=l==null?void 0:l.createElement("div"))!=null?d:null}),s=u.useContext(ue),c=Z();return N(()=>{!o||!i||o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i))},[o,i]),N(()=>{if(i&&s)return s.register(i)},[s,i]),Ne(()=>{var d;!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((d=o.parentElement)==null||d.removeChild(o)))}),c?!o||!i?null:nt.createPortal($({ourProps:{ref:a},theirProps:n,defaultTag:kt,name:"Portal"}),i):null}let jt=u.Fragment,je=u.createContext(null);function It(e,t){let{target:n,...r}=e,a={ref:P(t)};return p.createElement(je.Provider,{value:n},$({ourProps:a,theirProps:r,defaultTag:jt,name:"Popover.Group"}))}let ue=u.createContext(null);function Ht(){let e=u.useContext(ue),t=u.useRef([]),n=E(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=E(l=>{let o=t.current.indexOf(l);o!==-1&&t.current.splice(o,1),e&&e.unregister(l)}),a=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:l}){return p.createElement(ue.Provider,{value:a},l)},[a])]}let Bt=x(Ot),Ut=x(It),se=Object.assign(Bt,{Group:Ut}),Ie=u.createContext(null);function He(){let e=u.useContext(Ie);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,He),t}return e}function Wt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=E(l=>(t(o=>[...o,l]),()=>t(o=>{let i=o.slice(),s=i.indexOf(l);return s!==-1&&i.splice(s,1),i}))),a=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(Ie.Provider,{value:a},n.children)},[t])]}let _t="p";function Vt(e,t){let n=O(),{id:r=`headlessui-description-${n}`,...a}=e,l=He(),o=P(t);N(()=>l.register(r),[r,l.register]);let i={ref:o,...l.props,id:r};return $({ourProps:i,theirProps:a,slot:l.slot||{},defaultTag:_t,name:l.name||"Description"})}let Yt=x(Vt),Gt=Object.assign(Yt,{}),pe=u.createContext(()=>{});pe.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function qt(){return u.useContext(pe)}function Kt({children:e,onUpdate:t,type:n,element:r,enabled:a}){let l=qt(),o=E((...i)=>{t==null||t(...i),l(...i)});return N(()=>{let i=a===void 0||a===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,a]),p.createElement(pe.Provider,{value:o},e)}function Xt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const zt=typeof Object.is=="function"?Object.is:Xt,{useState:Jt,useEffect:Qt,useLayoutEffect:Zt,useDebugValue:en}=oe;function tn(e,t,n){const r=t(),[{inst:a},l]=Jt({inst:{value:r,getSnapshot:t}});return Zt(()=>{a.value=r,a.getSnapshot=t,ne(a)&&l({inst:a})},[e,r,t]),Qt(()=>(ne(a)&&l({inst:a}),e(()=>{ne(a)&&l({inst:a})})),[e]),en(r),r}function ne(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!zt(n,r)}catch{return!0}}function nn(e,t,n){return t()}const rn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",on=!rn,ln=on?nn:tn,an="useSyncExternalStore"in oe?(e=>e.useSyncExternalStore)(oe):ln;function un(e){return an(e.subscribe,e.getSnapshot,e.getSnapshot)}function sn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(a){return r.add(a),()=>r.delete(a)},dispatch(a,...l){let o=t[a].call(n,...l);o&&(n=o,r.forEach(i=>i()))}}}function cn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,a=r.clientWidth-r.offsetWidth,l=e-a;n.style(r,"paddingRight",`${l}px`)}}}function dn(){if(!$t())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function a(l){return r.containers.flatMap(o=>o()).some(o=>o.contains(l))}n.microTask(()=>{if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=Se();o.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>o.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),c=t.querySelector(s);c&&!a(c)&&(l=c)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!a(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}}function fn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function mn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=sn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Se(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:mn(n)},a=[dn(),cn(),fn()];a.forEach(({before:l})=>l==null?void 0:l(r)),a.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!r||!a&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function pn(e,t,n){let r=un(C),a=e?r.get(e):void 0,l=a?a.count>0:!1;return N(()=>{if(!(!e||!t))return C.dispatch("PUSH",e,n),()=>C.dispatch("POP",e,n)},[t,e]),l}let re=new Map,I=new Map;function xe(e,t=!0){N(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function a(){var o;if(!r)return;let i=(o=I.get(r))!=null?o:1;if(i===1?I.delete(r):I.set(r,i-1),i!==1)return;let s=re.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,re.delete(r))}let l=(n=I.get(r))!=null?n:0;return I.set(r,l+1),l!==0||(re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),a},[e,t])}function vn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let a=u.useRef((r=n==null?void 0:n.current)!=null?r:null),l=U(a),o=E(()=>{var i;let s=[];for(let c of e)c!==null&&(c instanceof HTMLElement?s.push(c):"current"in c&&c.current instanceof HTMLElement&&s.push(c.current));if(t!=null&&t.current)for(let c of t.current)s.push(c);for(let c of(i=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?i:[])c!==document.body&&c!==document.head&&c instanceof HTMLElement&&c.id!=="headlessui-portal-root"&&(c.contains(a.current)||s.some(d=>c.contains(d))||s.push(c));return s});return{resolveContainers:o,contains:E(i=>o().some(s=>s.contains(i))),mainTreeNodeRef:a,MainTreeNode:u.useMemo(()=>function(){return n!=null?null:p.createElement(ae,{features:J.Hidden,ref:a})},[a,n])}}var gn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(gn||{}),hn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(hn||{});let wn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Q=u.createContext(null);Q.displayName="DialogContext";function W(e){let t=u.useContext(Q);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function En(e,t,n=()=>[document.body]){pn(e,t,r=>{var a;return{containers:[...(a=r.containers)!=null?a:[],n]}})}function yn(e,t){return k(t.type,wn,e,t)}let bn="div",xn=ye.RenderStrategy|ye.Static;function $n(e,t){var n;let r=O(),{id:a=`headlessui-dialog-${r}`,open:l,onClose:o,initialFocus:i,__demoMode:s=!1,...c}=e,[d,f]=u.useState(0),g=st();l===void 0&&g!==null&&(l=(g&K.Open)===K.Open);let m=u.useRef(null),R=P(m,t),h=U(m),T=e.hasOwnProperty("open")||g!==null,L=e.hasOwnProperty("onClose");if(!T&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!T)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let y=l?0:1,[_,Be]=u.useReducer(yn,{titleId:null,descriptionId:null,panelRef:u.createRef()}),A=E(()=>o(!1)),ve=E(w=>Be({type:0,id:w})),V=Z()?s?!1:y===0:!1,Y=d>1,ge=u.useContext(Q)!==null,[Ue,We]=Ht(),{resolveContainers:ee,mainTreeNodeRef:G,MainTreeNode:_e}=vn({portals:Ue,defaultContainers:[(n=_.panelRef.current)!=null?n:m.current]}),Ve=Y?"parent":"leaf",he=g!==null?(g&K.Closing)===K.Closing:!1,Ye=(()=>ge||he?!1:V)(),Ge=u.useCallback(()=>{var w,S;return(S=Array.from((w=h==null?void 0:h.querySelectorAll("body > *"))!=null?w:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(G.current)&&b instanceof HTMLElement))!=null?S:null},[G]);xe(Ge,Ye);let qe=(()=>Y?!0:V)(),Ke=u.useCallback(()=>{var w,S;return(S=Array.from((w=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(b=>b.contains(G.current)&&b instanceof HTMLElement))!=null?S:null},[G]);xe(Ke,qe);let Xe=(()=>!(!V||Y))();wt(ee,A,Xe);let ze=(()=>!(Y||y!==0))();Me(h==null?void 0:h.defaultView,"keydown",w=>{ze&&(w.defaultPrevented||w.key===Ce.Escape&&(w.preventDefault(),w.stopPropagation(),A()))});let Je=(()=>!(he||y!==0||ge))();En(h,Je,ee),u.useEffect(()=>{if(y!==0||!m.current)return;let w=new ResizeObserver(S=>{for(let b of S){let q=b.target.getBoundingClientRect();q.x===0&&q.y===0&&q.width===0&&q.height===0&&A()}});return w.observe(m.current),()=>w.disconnect()},[y,m,A]);let[Qe,Ze]=Wt(),et=u.useMemo(()=>[{dialogState:y,close:A,setTitleId:ve},_],[y,_,A,ve]),we=u.useMemo(()=>({open:y===0}),[y]),tt={ref:R,id:a,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":_.titleId,"aria-describedby":Qe};return p.createElement(Kt,{type:"Dialog",enabled:y===0,element:m,onUpdate:E((w,S)=>{S==="Dialog"&&k(w,{[ce.Add]:()=>f(b=>b+1),[ce.Remove]:()=>f(b=>b-1)})})},p.createElement(ie,{force:!0},p.createElement(se,null,p.createElement(Q.Provider,{value:et},p.createElement(se.Group,{target:m},p.createElement(ie,{force:!1},p.createElement(Ze,{slot:we,name:"Dialog.Description"},p.createElement(j,{initialFocus:i,containers:ee,features:V?k(Ve,{parent:j.features.RestoreFocus,leaf:j.features.All&~j.features.FocusLock}):j.features.None},p.createElement(We,null,$({ourProps:tt,theirProps:c,slot:we,defaultTag:bn,features:xn,visible:y===0,name:"Dialog"}))))))))),p.createElement(_e,null))}let Tn="div";function Sn(e,t){let n=O(),{id:r=`headlessui-dialog-overlay-${n}`,...a}=e,[{dialogState:l,close:o}]=W("Dialog.Overlay"),i=P(t),s=E(d=>{if(d.target===d.currentTarget){if(Et(d.currentTarget))return d.preventDefault();d.preventDefault(),d.stopPropagation(),o()}}),c=u.useMemo(()=>({open:l===0}),[l]);return $({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:a,slot:c,defaultTag:Tn,name:"Dialog.Overlay"})}let Pn="div";function Ln(e,t){let n=O(),{id:r=`headlessui-dialog-backdrop-${n}`,...a}=e,[{dialogState:l},o]=W("Dialog.Backdrop"),i=P(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:l===0}),[l]);return p.createElement(ie,{force:!0},p.createElement(se,null,$({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:a,slot:s,defaultTag:Pn,name:"Dialog.Backdrop"})))}let Dn="div";function Fn(e,t){let n=O(),{id:r=`headlessui-dialog-panel-${n}`,...a}=e,[{dialogState:l},o]=W("Dialog.Panel"),i=P(t,o.panelRef),s=u.useMemo(()=>({open:l===0}),[l]),c=E(d=>{d.stopPropagation()});return $({ourProps:{ref:i,id:r,onClick:c},theirProps:a,slot:s,defaultTag:Dn,name:"Dialog.Panel"})}let Cn="h2";function Mn(e,t){let n=O(),{id:r=`headlessui-dialog-title-${n}`,...a}=e,[{dialogState:l,setTitleId:o}]=W("Dialog.Title"),i=P(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:l===0}),[l]);return $({ourProps:{ref:i,id:r},theirProps:a,slot:s,defaultTag:Cn,name:"Dialog.Title"})}let Nn=x($n),Rn=x(Ln),An=x(Fn),kn=x(Sn),On=x(Mn),$e=Object.assign(Nn,{Backdrop:Rn,Panel:An,Overlay:kn,Title:On,Description:Gt});function jn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:a=()=>{}}){const l=()=>{r&&a()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return v.jsx(te,{show:t,as:u.Fragment,leave:"duration-200",children:v.jsxs($e,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[v.jsx(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:v.jsx("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),v.jsx(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:v.jsx($e.Panel,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${o}`,children:e})})]})})}function Vn({className:e=""}){const[t,n]=u.useState(!1),r=u.useRef(),{data:a,setData:l,delete:o,processing:i,reset:s,errors:c}=rt({password:""}),d=()=>{n(!0)},f=m=>{m.preventDefault(),o(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>g(),onError:()=>{var R;return(R=r.current)==null?void 0:R.focus()},onFinish:()=>s()})},g=()=>{n(!1),s()};return v.jsxs("section",{className:`space-y-6 ${e}`,children:[v.jsxs("header",{children:[v.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Delete Account"}),v.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),v.jsx(Ee,{onClick:d,children:"Delete Account"}),v.jsx(jn,{show:t,onClose:g,children:v.jsxs("form",{onSubmit:f,className:"p-6",children:[v.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Are you sure you want to delete your account?"}),v.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),v.jsxs("div",{className:"mt-6",children:[v.jsx(at,{htmlFor:"password",value:"Password",className:"sr-only"}),v.jsx(ot,{id:"password",type:"password",name:"password",ref:r,value:a.password,onChange:m=>l("password",m.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),v.jsx(lt,{message:c.password,className:"mt-2"})]}),v.jsxs("div",{className:"mt-6 flex justify-end",children:[v.jsx(ct,{onClick:g,children:"Cancel"}),v.jsx(Ee,{className:"ml-3",disabled:i,children:"Delete Account"})]})]})})]})}export{Vn as default};
