import{$ as b,j as n,I as e,c as x}from"./index-bacc5177.js";import{u}from"./index.esm-623624ea.js";const g=({setKeyword:s,setPage:i})=>{const{register:t,handleSubmit:a,setValue:o,watch:l}=u(),c=l("query",""),r=b(),p=({query:m})=>{s(m),i(1)},d=()=>{o("query",""),s("")};return n.jsxs("form",{onSubmit:a(p),className:"relative",children:[n.jsx("input",{type:"text",className:r.pathname==="/news"?"bg-transparent h-[42px] md:h-[48px] md:w-[230px] ":"bg-my-white border-none placeholder:text-my-black md:w-[265px] lg:h-[48px]",placeholder:"Search",name:"query",...t("query")}),n.jsx("button",{type:"submit",className:r.pathname==="/news"?"absolute top-[12px] right-[12px] flex items-center justify-center md:top-[14px] ":"absolute top-[12px] right-[12px] flex items-center justify-center md:top-[14px]  ",children:n.jsx(e,{id:"search",size:18})}),c&&n.jsx("button",{className:"absolute top-[12px] right-[33px] flex items-center justify-center md:top-[14px] ",onClick:d,children:n.jsx(e,{size:18,id:"close",className:"stroke-my-black"})})]})},N=({setPage:s,totalPages:i,page:t})=>{const a=x("pagination-left"),o=x("pagination-right"),l=()=>{t!==i&&s(t+1)},c=()=>{s(t-1)},r=()=>{s(1)},p=()=>{s(i)},d=()=>i===t?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",className:"btn_pagination",disabled:!0,children:"..."}),n.jsxs("button",{type:"button",className:"btn_pagination_number",onClick:c,children:[t-1," "]}),n.jsxs("button",{type:"button",className:`btn_pagination_number ${t?"active":""}`,disabled:t===i,children:[t," "]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",className:`btn_pagination_number ${t?"active":""}`,onClick:c,disabled:t===1,children:[t," "]}),n.jsxs("button",{type:"button",className:"btn_pagination_number",onClick:l,disabled:t===i,children:[t+1," "]}),n.jsx("button",{type:"button",className:"btn_pagination",disabled:!0,children:"..."})]});return n.jsxs("div",{className:"flex gap-[11px] font-bold items-center justify-center md:gap-[24px]",children:[n.jsxs("div",{className:"flex gap-[6px] md:gap-[8px]",children:[n.jsxs("button",{className:"btn_pagination_double",disabled:t===1,onClick:r,children:[n.jsx(e,{id:"pagination-left",size:a,className:"icon_pagination"}),n.jsx(e,{id:"pagination-left",size:a,className:"icon_pagination absolute top-[9px] left-[4px] icon md:top-[9.5px] lg:top-[9px] "})]}),n.jsx("button",{className:"btn_pagination",onClick:c,disabled:t===1,children:n.jsx(e,{id:"pagination-left",size:a,className:"icon_pagination"})})]}),n.jsx("div",{className:"flex gap-[10px] ",children:d()}),n.jsxs("div",{className:"flex gap-[6px] md:gap-[8px]",children:[n.jsx("button",{className:"btn_pagination",onClick:l,disabled:i===t,children:n.jsx(e,{id:"pagination-right",size:o,className:"icon_pagination"})}),n.jsxs("button",{className:"btn_pagination_double ",onClick:p,disabled:i===t,children:[n.jsx(e,{id:"pagination-right",size:o,className:"icon_pagination"}),n.jsx(e,{id:"pagination-right",className:"icon_pagination absolute top-[9px] right-[4px] icon md:top-[9.5px] lg:top-[9px]",size:o})]})]})]})};export{N as P,g as S};
