import{$ as n,j as e}from"./index-bacc5177.js";const y=({className:t,Img1:s,Img2:x,Img3:a,Img4:i,Img5:l,Img6:c,name:p,birthday:m,description:o,petImg2:d,petImg1:r})=>{const h=n();return e.jsxs("div",{className:"relative",children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1280px)",srcSet:`${l} 1x, ${c} 2x`,type:"image/png"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${a} 1x, ${i} 2x`,type:"image/png"}),e.jsx("img",{className:t,srcSet:`${s} 1x, ${x} 2x`,type:"image/png",alt:"Content photo"})]}),h.pathname==="/add-pet"?" ":e.jsx(g,{name:p,birthday:m,description:o,petImg1:r,petImg2:d})]})},g=({name:t,birthday:s,description:x,petImg1:a,petImg2:i})=>{const l=n();return e.jsxs("div",{className:`hidden absolute bottom-[32px] left-[32px] w-[294px] h-[121px] bg-my-white rounded-[20px] p-[16px] text-[12px] tracking-[-0.02em] gap-[8px] leading-[1.17] lg:bottom-[97px] lg:left-[64px] ${l.pathname==="/home"?"md:hidden":"md:flex"}`,children:[e.jsx("div",{className:"h-[60px] w-[60px] bg-my-yellow-light flex items-center justify-center rounded-full",children:e.jsx("img",{className:"",srcSet:`${a} 1x, ${i} 2x`,type:"image/png",alt:"Pet emoji"})}),e.jsxs("div",{className:"flex flex-col gap-[8px] w-[194px] mt-[3px]",children:[e.jsxs("div",{className:" flex items-center justify-between",children:[e.jsx("p",{className:"text-my-yellow text-[16px] leading-[1.25] font-bold",children:t}),e.jsxs("p",{children:[e.jsx("span",{className:"text-my-black-50",children:"Birthday:"})," ",s]})]}),e.jsx("p",{className:"text-my-black-80 ",children:x})]})]})};export{y as P};
