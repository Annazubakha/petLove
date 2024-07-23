import{u as k,_ as M,o as b,$ as P,a as v,c as S,j as e,I as m,M as _,a0 as F,g as f,B as N,b as $,x as z,a1 as A}from"./index-2e7eaf6e.js";import{f as L}from"./convertPetBirthday-dbe52991.js";import{p as B,a as D}from"./dog-emoji@2x-9838d210.js";const G=({birthday:t,category:s,comment:a,imgURL:n,name:r,sex:d,popularity:c,title:p,species:h,_id:i})=>{const j=k(M),[x,l]=b(),[w,o]=b(),u=P(),g=v(),I=S("bin"),y=u.pathname==="/profile",C=async()=>{try{await g(F(i)),await g(f())}catch{N.error("Something went wrong. Please try again.")}};return e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:`rounded-[16px] bg-my-white p-[24px] md:w-[342px] flex flex-col  ${y?"lg:w-[320px]":"lg:w-[363px]"}`,children:[e.jsx("img",{src:n,alt:"Pet's photo",className:"rounded-[16px] mb-[24px]"}),e.jsxs("div",{className:"relative mb-[8px]",children:[e.jsx("h1",{className:"font-bold leading-[1.25] text-my-black-second md:text-[18px]",children:p}),e.jsxs("p",{className:"absolute right-0 top-0 flex items-center gap-[4px] text-[14px] leading-[1.29] md:leading-[1.43]  ",children:[e.jsx(m,{id:"star",size:16,className:"stroke-[#FFC531] fill-[#FFC531]"})," ",c]})]}),e.jsxs("ul",{className:"flex text-[10px] leading-[1.4] tracking-[-0.02em] text-my-black  justify-between mb-[16px] ",children:[e.jsxs("li",{className:"notices_item_element",children:[e.jsx("span",{className:"notices_item_element_span",children:"Name"}),r]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Birthday"}),L(t)||""]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Sex"}),d]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Species"}),h]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Caterogy"}),s]})]}),e.jsx("p",{className:"mb-[24px] text-my-black-second text-[14px] leading-[1.29] tracking-[-0.02em] md:mb-[32px]",children:a}),e.jsxs("div",{className:"flex gap-[10px] md:mt-auto relative",children:[e.jsx("button",{onClick:j?o:l,className:`bg-my-yellow w-[231px]  rounded-[30px] flex items-center justify-center text-my-white text-[14px] leading-[1.29] tracking-[-0.03em] hover:bg-my-yellow-dark  lg:w-[257px]  ${y?"   h-[44px]":"  h-[46px] md:h-[48px]"}`,children:"Learn more"}),y?e.jsx("button",{type:"sumbit",onClick:C,className:` bg-my-yellow-light hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover rounded-full  flex items-center justify-center  ${y?"  w-[44px] h-[44px]":"absolute top-[12px] right-[12px] w-[32px] h-[32px]"}`,children:e.jsx(m,{id:"bin",size:I})}):e.jsx("button",{onClick:j?o:l,className:"bg-my-yellow-light w-[46px] h-[46px] rounded-[30px] flex items-center justify-center hover:bg-my-yellow-light-hover md:h-[48px] md:w-[48px]",children:e.jsx(m,{id:"heart",size:18,className:"fill-none stroke-my-yellow"})})]})]}),x&&e.jsx(_,{toggleModal:l,children:e.jsx(R,{})}),w&&e.jsx(_,{toggleModal:o,children:e.jsx(E,{birthday:t,comment:a,imgURL:n,name:r,sex:d,popularity:c,title:p,species:h,category:s,_id:i})})]})},R=()=>{const t=$(),s=()=>{t("/login")},a=()=>{t("/register")};return e.jsxs("div",{className:"px-[20px] py-[40px] flex flex-col items-center w-[335px] md:w-[466px] md:px-[60px] md:py-[60px]",children:[" ",e.jsx("div",{className:"h-[80px] w-[80px] rounded-[50%] bg-my-yellow-light flex items-center justify-center mb-[20px] ",children:e.jsx("picture",{children:e.jsx("img",{srcSet:`${B} 1x, ${D} 2x`,type:"image/png",alt:"Dog emoji"})})}),e.jsx("p",{className:"font-bold text-my-yellow text-[20px] leading-[1] tracking-[-0.03em] mb-[20px] md:text-[24px] md:leading-[1.17]",children:"Attention"}),e.jsx("p",{className:"text-[14px] leading-[1.29] tracking-[-0.02em] text-center mb-[24px]",children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),e.jsxs("div",{className:"flex gap-[8px]",children:[e.jsx("button",{onClick:s,className:`font-bold bg-my-yellow h-[42px] w-[137px] rounded-[30px] text-my-white text-[14px] leading-[1.29] tracking-[-0.03em] hover:bg-my-yellow-dark
          md:h-[48px] md:w-[140px] md:text-[16px] md:leading-[1.25] `,children:"Log In"}),e.jsx("button",{onClick:a,className:"font-bold h-[42px] w-[137px] rounded-[30px]  text-[14px] text-my-yellow bg-my-yellow-light leading-[1.29] tracking-[-0.03em] hover:bg-my-yellow-light-hover md:h-[48px] md:w-[140px] md:text-[16px] md:leading-[1.25]",children:"Registration"})]})]})},E=({birthday:t,category:s,comment:a,imgURL:n,name:r,sex:d,popularity:c,title:p,species:h,_id:i})=>{const x=k(z).some(g=>g._id===i),l=v(),w=async()=>{try{await l(A(i)),await l(f())}catch{N.error("Someting went wrong. Please, try again.")}},o=async()=>{try{await l(F(i)),await l(f())}catch{N.error("Someting went wrong. Please, try again.")}},u=()=>{x?o():w()};return e.jsxs("div",{className:"px-[28px] py-[40px] flex flex-col items-center w-[335px] md:w-[473px] md:px-[71px] md:py-[40px]",children:[" ",e.jsxs("div",{className:"relative mb-[20px] md:mb-[16px]",children:[e.jsx("img",{src:n,alt:"Pet's photo",className:"w-[120px] h-[120px] rounded-[50%] md:w-[150px] md:h-[150px]"}),e.jsx("p",{className:"absolute top-0 left-[-20px] h-[32px] bg-my-yellow-light text-my-yellow text-[14px] leading-[1.33] tracking-[-0.02em] rounded-[30px] px-[14px] py-[8px]",children:s})]}),e.jsx("p",{className:"font-bold  text-[16px] leading-[1.25]  mb-[10px] md:text-[18px] md:leading-[1.33]",children:p}),e.jsxs("div",{className:"mb-[24px]  text-[14px] leading-[1.43] flex gap-[4px] items-center md:mb-[20px]",children:[e.jsx(T,{popularity:c}),c]}),e.jsxs("ul",{className:"flex text-[10px] leading-[1.4] tracking-[-0.02em] text-my-black  justify-between mb-[18px] gap-[27px] ",children:[e.jsxs("li",{className:"notices_item_element",children:[e.jsx("span",{className:"notices_item_element_span",children:"Name"}),r]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Birthday"}),t]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Sex"}),d]}),e.jsxs("li",{className:"notices_item_element ",children:[e.jsx("span",{className:"notices_item_element_span",children:"Species"}),h]})]}),e.jsx("p",{className:"mb-[40px] text-my-black-second text-[14px] leading-[1.29] tracking-[-0.02em] ",children:a}),e.jsxs("div",{className:"flex gap-[10px]",children:[e.jsxs("button",{className:` flex items-center justify-center   bg-my-yellow h-[44px] w-[135px] rounded-[30px] text-my-white  leading-[1.25] tracking-[-0.03em] hover:bg-my-yellow-dark
          md:h-[48px] md:w-[160px] gap-[8px] ${x?"text-[14px]":"text-[16px]"}`,onClick:u,children:[x?"Remove from":"Add to",e.jsx(m,{id:"heart",size:18,className:`${x?"fill-none stroke-my-yellow-light":"fill-none stroke-my-white"}`})]}),e.jsx("a",{href:"mailto:11111@mail.com",className:" flex items-center justify-center h-[44px] w-[134px] rounded-[30px]  text-[16px] text-my-yellow bg-my-yellow-light leading-[1.29] tracking-[-0.03em] hover:bg-my-yellow-light-hover md:h-[48px] md:w-[160px] ",children:"Contact"})]})]})},T=({popularity:t})=>{const s=Math.min(t,5);return e.jsx("div",{className:"flex gap-[4px]",children:[...Array(5)].map((a,n)=>e.jsx(m,{id:"star",size:16,className:`${n<s?"stroke-[#FFC531] fill-[#FFC531]":"fill-my-black-5 stroke-my-black-5"}`},n))})};export{G as N};