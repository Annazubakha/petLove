import{a as _,u as r,s as y,j as e,I as d,L as j,n as U,U as S,B as h,o as v,q as P,M as N,t as I,b as z,v as M,c as L,w as B,g as E,x as C,r as A}from"./index-bacc5177.js";import{o as D}from"./yup-2c05b5a6.js";import{u as F}from"./index.esm-623624ea.js";import{f as T}from"./convertPetBirthday-dbe52991.js";import{N as V}from"./Rating-a23f8eb5.js";import"./dog-emoji@2x-9838d210.js";const O=({user:s,toggleModal:l})=>{var m,f,b,w;const t=_(),x=r(y),{register:a,handleSubmit:g,formState:{errors:n}}=F({resolver:D(U)}),u=i=>{const o={};for(const c in i)i[c]!==null&&i[c]!==""&&(o[c]=i[c]);return o},p=async i=>{const o=u(i);try{await t(S(o)),h.success("Information was updated successful."),l()}catch{h.error("Something went wrong. Please, try again.")}};return e.jsxs("div",{className:"py-[40px] px-[20px] w-[335px] md:w-[480px] md:p-[50px] ",children:[e.jsx("p",{className:"font-bold text-[20px] mb-[20px] md:text-[18px] md:leading-[1.33]",children:"Edit information"}),e.jsx("div",{className:" flex  items-center justify-center  mb-[28px] md:mb-[12px]",children:s.avatar?e.jsx("img",{src:s.avatar,alt:"User's avatar",className:"h-[80px] w-[80px] rounded-[50%] md:h-[86px] md:w-[86px]"}):e.jsx("div",{className:"bg-my-yellow-light h-[80px] w-[80px] rounded-[50%] flex items-center justify-center  md:h-[86px] md:w-[86px]",children:e.jsx(d,{id:"user",size:40})})}),e.jsxs("form",{onSubmit:g(p),className:"flex flex-col gap-[10px]  md:gap-[14px]  ",children:[e.jsxs("div",{className:"relative flex  gap-[8px] md:mb-[4px]",children:[e.jsx("input",{type:"text",...a("avatar"),placeholder:"Avatar link",defaultValue:s.avatar||"",className:"truncate pr-[20px] md:h-[42px]"}),e.jsxs("button",{className:"bg-my-yellow-light flex gap-[8px] items-center justify-center h-[42px] min-w-[126px] rounded-[30px] text-[12px]  leading-[1.33]  hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover   md:text-[14px] md:leading-[1.29] md:h-[42px]",type:"submit",children:["Upload photo",e.jsx(d,{id:"update-user-photo",size:18})]}),e.jsx("p",{className:"input-error",children:(m=n.avatar)==null?void 0:m.message})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",...a("name"),defaultValue:s.name}),e.jsx("p",{className:"input-error",children:(f=n.name)==null?void 0:f.message})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"email",...a("email"),defaultValue:s.email}),e.jsx("p",{className:"input-error",children:(b=n.email)==null?void 0:b.message})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",...a("phone"),defaultValue:s.phone||"",placeholder:"Enter your phone"}),e.jsx("p",{className:"input-error",children:(w=n.phone)==null?void 0:w.message})]}),e.jsxs("button",{className:"bg-my-yellow  h-[42px] text-my-white rounded-[30px] text-[14px] font-bold leading-[1.29] mt-[11px] hover:bg-my-yellow-dark focus:bg-my-yellow-dark md:mt-[26px] md:h-[52px] md:text-[16px] md:leading-[1.25]",type:"submit",children:["Save",x&&e.jsx(j,{size:10})]})]})]})},$=({user:s})=>{const[l,t]=v(),[x,a]=v();return e.jsxs("div",{className:"lg:flex gap-[32px]",children:[e.jsxs("div",{className:"bg-my-white rounded-[30px] pt-[18px] px-[20px] pb-[40px] mb-[40px] md:p-[40px] md:mb-[32px] lg:w-[457px]",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"h-[38px] bg-my-yellow text-my-white text-[14px]tracking-[-0.03em] leading-[1.29] flex gap-[4px] rounded-[30px] px-[14px] items-center ",children:["User ",e.jsx(d,{id:"user-white",size:18})]}),e.jsx(k,{toggleIsModalEditUser:t})," "]}),e.jsxs("div",{className:" flex flex-col items-center justify-center gap-[8px] mb-[28px] md:mb-[20px]",children:[s.avatar?e.jsx("img",{src:s.avatar,alt:"User's avatar",className:"h-[94px] w-[94px] rounded-[50%] md:h-[110px] md:w-[110px]"}):e.jsx(k,{toggleIsModalEditUser:t}),e.jsx("button",{onClick:t,className:"text-[12px] tracking-[-0.02em] leading-[1.33] md:text-[14px] md:leading-[1.29] ",children:"Upload photo"})]}),e.jsx("p",{className:"font-bold leading-[1.25] mb-[20px] md:text-[18px] md:leading-[1.33]",children:"My information"}),e.jsxs("div",{className:"flex flex-col gap-[10px] text-[14px] leading-[1.29] tracking-[-0.03em] md:text-[16px] md:leading-[1.25] md:flex-row md:flex-wrap mad:gap-[14px]",children:[e.jsx("div",{className:"w-[100%] h-[42px] border-[1px] border-my-yellow rounded-[30px] pl-[12px] flex items-center md:w-[305px] md:pl-[16px] md:h-[52px] ",children:s.name}),e.jsx("div",{className:"w-[100%] h-[42px] border-[1px] border-my-yellow rounded-[30px] pl-[12px] flex items-center md:w-[305px] md:pl-[16px] md:h-[52px]",children:s.email}),e.jsx("div",{className:`w-[100%] h-[42px] border-[1px] rounded-[30px] pl-[12px] mb-[40px] flex items-center md:w-[305px] md:pl-[16px] md:h-[52px] ${s.phone?"border-my-yellow ":" border-my-black-15 "}`,children:s.phone||"+380"})]}),e.jsx(q,{}),e.jsx(P,{toggleIsModalLogOut:a})]}),l&&e.jsx(N,{toggleModal:t,children:e.jsx(O,{toggleModal:t,user:s})}),x&&e.jsx(N,{toggleModal:a,children:e.jsx(I,{toggleModal:a})}),e.jsx(G,{})]})},k=({toggleIsModalEditUser:s})=>e.jsx("button",{onClick:s,className:"bg-my-yellow-light h-[38px] w-[38px] rounded-[50%] flex items-center justify-center hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover",children:e.jsx(d,{id:"pencil",size:18})}),q=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between items-center mb-[20px]",children:[" ",e.jsx("p",{className:"font-bold leading-[1.25] md:text-[18px] md:leading-[1.33]",children:"My pets"}),e.jsx(H,{})]}),e.jsx(R,{})]}),H=()=>{const s=z(),l=()=>{s("/add-pet")};return e.jsxs("button",{onClick:l,className:"bg-my-yellow w-[103px] h-[38px] rounded-[30px] text-my-white text-[14px] leading-[1.29] tracking-[-0.03em] flex gap-[4px] items-center justify-center hover:bg-my-yellow-dark focus:bg-my-yellow-dark md:w-[118px] md:h-[40px]  ",children:["Add pet",e.jsx(d,{id:"plus",size:18})]})},R=()=>{var t;const s=r(M),l=r(y);return e.jsxs(e.Fragment,{children:[l&&e.jsx(j,{size:30}),s.pets.length===0?e.jsx("p",{className:"mb-[20px] md:text-[18px]",children:"You don't have any pets.."}):e.jsx("ul",{className:"flex flex-col gap-[14px] mb-[20px] md:flex-row md:flex-wrap lg:mb-[40px]",children:(t=s.pets)==null?void 0:t.map(x=>e.jsx(Y,{...x},x._id))})]})},Y=({name:s,title:l,imgURL:t,species:x,sex:a,birthday:g,_id:n})=>{const u=T(g),p=_(),m=async()=>{try{await p(B(n)),h.success("Pet was deleted successfully."),await p(E())}catch{h.error("Something went wrong. Please try again.")}};return e.jsxs("li",{className:" relative rounded-[20px]  p-[16px]  flex  gap-[14px] border-[1px] border-my-black-10 md:w-[305px] md:pt-[22px] md:px-[16px] md:pr-[27px] lg:w-full lg:p-[20px]",children:[e.jsx("img",{src:t,alt:"Pet's photo",className:"rounded-full h-[66px] w-[66px] md:h-[75px] md:w-[75px] lg:h-[90px] lg:w-[90px]"}),e.jsxs("div",{className:"relative",children:[e.jsx("h1",{className:"font-bold leading-[1.29] text-[14px] mb-[8px] text-my-black-second truncate md:mb-[12px]",children:l}),e.jsxs("ul",{className:"flex text-[12px] leading-[1.17] tracking-[-0.02em] text-my-black  flex-wrap gap-[10px]  ",children:[e.jsxs("li",{className:"notices_item_element",children:[e.jsx("span",{className:"notices_item_element_span",children:"Name"}),s]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Birthday"}),u]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Sex"}),a]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Species"}),x]})]})]}),e.jsx("button",{type:"sumbit",onClick:m,className:"absolute top-[12px] right-[12px] bg-my-yellow-light hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover rounded-full w-[32px] h-[32px] flex items-center justify-center ",children:e.jsx(d,{id:"bin",size:L("bin")})})]})},G=()=>{const s=r(C),l=r(y),[t,x]=A.useState("favorites");return e.jsxs(e.Fragment,{children:[l&&e.jsx(j,{size:30}),e.jsxs("div",{children:[e.jsx("div",{className:"flex gap-[10px] mb-[20px] text-14px] leading-[1.29] tracking-[-0.03em]",children:e.jsxs("button",{onClick:()=>x("favorites"),className:` h-[42px] w-[123px] flex items-center justify-center text-my-black bg-my-white  rounded-[30px] hover:bg-my-yellow-dark focus:bg-my-yellow-dark hover:text-my-white focus:text-my-white lg:h-[48px] lg:w-[142px] lg:mb-[32px] ${t==="favorites"?"bg-my-yellow-dark text-my-white":"text-my-black bg-my-white"}`,children:["My favorite pets"," "]})}),(s==null?void 0:s.length)===0?e.jsxs("p",{className:"text-[14px] text-center leading-[1.29] tracking-[-0.02em] md:text-[16px] ",children:["Oops,"," ",e.jsx("span",{className:"text-my-yellow mt-[60px]",children:"looks like there aren't any furries"})," ","on our adorable page yet. Do not worry! View your pets on the ''find your favorite pet'' page and add them to your favorites."]}):e.jsx("ul",{className:" flex flex-col  gap-[20px] md:flex-row md:flex-wrap  lg:gap-[24px] ",children:s==null?void 0:s.map(a=>e.jsx(V,{...a},a._id))})]})]})},ee=()=>{const s=r(M);return e.jsx("div",{className:"containerBig mb-[80px]",children:e.jsx($,{user:s})})};export{ee as default};
