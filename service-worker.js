if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),f={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"322a716d08ef3f96fb59b2aa755c8059"},{url:"main.css",revision:"6b212ecc8491856a4c0ab45b268e7f4e"},{url:"main.js",revision:"d00a8027317143f8a7c7846b52883391"},{url:"main.js.LICENSE.txt",revision:"b114cc85da504a772f040e3f40f8e46a"}],{})}));