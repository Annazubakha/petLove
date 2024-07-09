import{u as v,a as I,r as w,b as E,s as G,c as a,j as e,I as o,L as R,N as S,l as k,g as K,B as x,h as T}from"./index-455c7e51.js";import{T as J}from"./Title-6fcaa3a1.js";import{P as L}from"./PetDecorationTab-836df974.js";import{u as Y}from"./index.esm-7a25b8f9.js";import{o as z}from"./yup-10e4ca85.js";const F=()=>{var d,n;const i=v(),g=I(),[m,b]=w.useState(!1),h=E(G),y=()=>{b(r=>!r)},{register:p,handleSubmit:u,formState:{errors:s,dirtyFields:t}}=Y({resolver:z(T)}),N=async r=>{try{const f=await i(k(r));if(g("/profile"),await i(K()),f.error)throw new Error;x.success("Login successful.")}catch{x.error("The email or password is incorrect. Please, try again.")}},A=a("close-eye"),j=a("open-eye"),l=a("error"),c=a("success");return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:u(N),className:"flex flex-col gap-[10px] mb-[12px] md:gap-[16px] md:mb-[16px] ",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"email",...p("email"),placeholder:"Email",className:`${s.email?"border-my-red border-[1px] hover:border-my-red focus:border-my-red":t.email&&!s.email?"border-my-green border-[1px] hover:border-my-green focus:border-my-green":" "}`}),t.email&&!s.email?e.jsx(o,{id:"success",size:c,className:"absolute right-[12px] top-[12px]"}):"",e.jsx("p",{className:"input-error",children:(d=s.email)==null?void 0:d.message}),s.email?e.jsx(o,{id:"error",size:l,className:"absolute right-[12px] top-[12px]"}):" "]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:m?"text":"password",...p("password"),placeholder:"Password",className:`${s.password?"border-my-red border-[1px] hover:border-my-red focus:border-my-red":t.password&&!s.password?"border-my-green border-[1px] hover:border-my-green focus:border-my-green":" "}`}),t.password&&!s.password?e.jsx(o,{id:"success",size:c,className:"absolute right-[38px]  top-[12px]"}):"",e.jsx("p",{className:"input-error",children:(n=s.password)==null?void 0:n.message}),s.password?e.jsx(o,{id:"error",size:l,className:"absolute right-[38px] top-[12px]"}):" ",e.jsx("button",{type:"button",className:"absolute top-[12px] right-[12px] flex items-center justify-center md:top-[15px] md:right-[16px] ",onClick:y,children:m?e.jsx(o,{id:"open-eye",size:j}):e.jsx(o,{id:"close-eye",size:A})})]}),e.jsxs("button",{className:"bg-my-yellow  h-[42px] text-my-white rounded-[30px] text-[14px] font-bold leading-[1.29] mt-[30px] hover:bg-my-yellow-dark focus:bg-my-yellow-dark md:mt-[48px] md:h-[52px] md:text-[16px] md:leading-[1.25]",type:"submit",children:["LOG IN",h&&e.jsx(R,{size:10})]})]}),e.jsxs("p",{className:"text-[12px] leading-[1.17] text-center  text-my-black-50 md:text-[14px] md:leading-[1.43]",children:["Don't have an account?"," ",e.jsx(S,{to:"/register",className:"text-my-yellow font-bold hover:text-my-yellow-dark focus:text-my-yellow-dark underline",children:"Register"})]})]})},D="/petLove/assets/login-img_mobile@1x-2d6bada5.png",M="/petLove/assets/login-img_mobile@2x-3d1d889c.png",U="/petLove/assets/login-img_tablet@1x-981583e4.png",W="/petLove/assets/login-img_tablet@2x-f6ea6f87.png",B="/petLove/assets/login-img_desktop@1x-fab4d650.png",X="/petLove/assets/login-img_desktop@2x-fe706aaf.png",C="data:image/png;base64,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",O="/petLove/assets/dog-emoji@2x-17467a9f.png",P=()=>e.jsxs("div",{className:"container text-my-black lg:flex lg:gap-[32px]",children:[e.jsx(L,{Img1:D,Img2:M,Img3:U,Img4:W,Img5:B,Img6:X,name:"Rich",birthday:"21.09.2020",description:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!",petImg1:C,petImg2:O,className:"mb-[10px] md:mb-[16px] lg:mb-0"}),e.jsxs("div",{className:"px-[20px] py-[60px] md:px-[140px] md:py-[71px] lg:px-[84px] lg:py-[118px] lg:h-[654px] bg-my-white rounded-[30px] md:rounded-[60px]",children:[e.jsx(J,{children:"Log in"}),e.jsxs("p",{className:"mb-[24px] text-[14px] leading-[1.29] md:text-[18px] md:leading-[1.22] md:mb-[32px] ",children:["Welcome! Please enter your credentials to ",e.jsx("br",{className:"md:hidden"})," ","login to",e.jsx("br",{className:"hidden md:block"})," the platform:"]}),e.jsx(F,{})]})]});export{P as default};
