import{j as e,I as p,b as l,z as d,L as h,u as g,A as j,C as N,D as _,r as x,E as u,B as f,F as b}from"./index-786eae28.js";import{T as y}from"./Title-7cb4b864.js";import{S as P,P as w}from"./Pagination-ae7f6058.js";import"./index.esm-7206e101.js";const k=({birthday:s,category:n,comment:a,imgURL:t,name:c,sex:i,popularity:o,title:m,species:r})=>e.jsxs("li",{className:"rounded-[16px] bg-my-white p-[24px]  ",children:[e.jsx("img",{src:t,alt:"Pet's photo",className:"rounded-[16px] mb-[24px]"}),e.jsxs("div",{className:"relative mb-[8px]",children:[e.jsx("h1",{className:"font-bold leading-[1.25] text-my-black-second ",children:m}),e.jsxs("p",{className:"absolute right-[24px] top-0 flex gap-[4px] text-[14px] leading-[1.29]",children:[e.jsx(p,{id:"star",size:16})," ",o]})]}),e.jsxs("ul",{className:"flex text-[10px] leading-[1.4] tracking-[-0.02em] text-my-black  justify-between mb-[16px]",children:[e.jsxs("li",{className:"notices_item_element",children:[e.jsx("span",{className:"notices_item_element_span",children:"Name"}),c]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Birthday"}),s]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Sex"}),i]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Species"}),r]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Caterogy"}),n]})]}),e.jsx("p",{className:"mb-[24px] text-my-black-second text-[14px] leading-[1.29] tracking-[-0.02em]",children:a}),e.jsxs("div",{className:"flex gap-[10px]",children:[e.jsx("button",{children:"Learn more"}),e.jsx("button",{className:"",children:"Fav"})]})]}),v=({notices:s})=>{const n=l(d);return console.log(s),e.jsxs(e.Fragment,{children:[n&&e.jsx(h,{size:30}),e.jsx("ul",{className:" flex flex-col",children:s==null?void 0:s.map(a=>e.jsx(k,{...a},a._id))})]})},T=()=>{const s=g(),n=l(d),a=l(j),t=l(N);console.log(t);const c=l(_),[i,o]=x.useState("");x.useEffect(()=>{(async()=>{try{await s(u({keyword:i,page:a})).unwrap()}catch{f.error("Something went wrong. Please, reload the page.")}})()},[s,i,a]);const m=r=>{s(b({page:r}))};return e.jsxs("div",{className:"containerBig relative pb-[40px] md:pb-[80px]  ",children:[e.jsx(y,{children:"Find your favorite pet"}),e.jsx(P,{setKeyword:o}),(t==null?void 0:t.length)>0?e.jsxs(e.Fragment,{children:[e.jsx(v,{notices:t}),c!==1&&e.jsx(w,{setPage:m,totalPages:c,page:a})]}):n?"":e.jsx("p",{className:"text-[14px] text-center md:text-[28px] mt-[20px] ",children:"There aren't any news according to your query. Please, try another one."})]})};export{T as default};
