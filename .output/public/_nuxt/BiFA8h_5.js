import{B as C,A as o,aE as g,aD as x,aJ as y,p as i,l as f,a1 as I,r as _,ag as z,aK as K,aL as b}from"./DrMq56Dq.js";import{u as S,o as O,S as E,p as N}from"./BMjht7Yn.js";const d=t=>Object.keys(t),p=Symbol(),c=_();function m(t,u=void 0){const a=f()?I(p,c):c;return t?o(()=>{var l,n;return(n=(l=a.value)==null?void 0:l[t])!=null?n:u}):a}function Z(t,u){const a=m(),l=C(t,o(()=>{var e;return((e=a.value)==null?void 0:e.namespace)||g})),n=S(o(()=>{var e;return(e=a.value)==null?void 0:e.locale})),r=x(o(()=>{var e;return((e=a.value)==null?void 0:e.zIndex)||y})),s=o(()=>{var e;return i(u)||((e=a.value)==null?void 0:e.size)||""});return j(o(()=>i(a)||{})),{ns:l,locale:n,zIndex:r,size:s}}const j=(t,u,a=!1)=>{var l;const n=!!f(),r=n?m():void 0,s=(l=void 0)!=null?l:n?z:void 0;if(!s)return;const e=o(()=>{const v=i(t);return r!=null&&r.value?k(r.value,v):v});return s(p,e),s(O,o(()=>e.value.locale)),s(K,o(()=>e.value.namespace)),s(b,o(()=>e.value.zIndex)),s(E,{size:o(()=>e.value.size||"")}),s(N,o(()=>({emptyValues:e.value.emptyValues,valueOnClear:e.value.valueOnClear}))),(a||!c.value)&&(c.value=e.value),e},k=(t,u)=>{const a=[...new Set([...d(t),...d(u)])],l={};for(const n of a)l[n]=u[n]!==void 0?u[n]:t[n];return l};export{m as a,Z as u};
