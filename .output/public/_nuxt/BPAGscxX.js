import{E as P}from"./D9ibGUpq.js";import{E,_ as F}from"./CI9_5vxB.js";import{_ as L,r as d,c as x,a as t,b as o,t as l,w as n,q as v,p as i,F as h,v as b,y as A,o as m,x as y,d as j,n as z}from"./DrMq56Dq.js";import{a as R,_ as I}from"./DiTvScHJ.js";import{B as M,_ as S}from"./MOnXv9Le.js";import{B as c}from"./XKP4z_Py.js";import{_ as U}from"./DWXbos78.js";import{u as D,g as N}from"./B6e54FQF.js";import{g as T,s as K}from"./NBoPm9UZ.js";import"./B1conq21.js";import"./D5bjdxfg.js";import"./DFiujBeL.js";import"./BMjht7Yn.js";import"./BiFA8h_5.js";const q={class:"home-page"},G={class:"home-tabar tw-w-[100%] tw-bg-[#F8FFF8]"},H={class:"home-tabar-pc tw-flex tw-pt-[24px] tw-justify-between tw-items-center dd-container tw-mx-auto"},J={class:"home-tabar-left tw-w-[54%] max-lg:tw-mr-0 max-lg:tw-text-center max-lg:tw-w-[100%]"},O={class:"home-tabar-title tw-text-[#333333] dd-fs-84 tw-font-[400] tw-pb-[15px]"},Q={class:"home-tabar-title tw-text-[#333333] dd-fs-54 tw-font-[400]"},W={class:"download-app tw-pt-[25px]"},X={class:"tw-text-[18px]"},Y={class:"popover-download tw-flex tw-flex-col tw-items-center tw-justify-center"},Z={class:"text tw-text-[#4A4A4A] tw-text-[16px] tw-font-[500] tw-leading-[24px]"},tt={class:"home-tabar-list-pc tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 dd-container tw-transform tw-translate-y-[-75px] max-lg:tw-translate-y-0 tw-mx-auto"},et={class:"tabar-item-text dd-fs-34 tw-font-[700] tw-leading-[47.6px] tw-text-[#333]"},st={class:"tabar-item-right tw-flex tw-justify-between tw-items-center"},at=["src"],ot={class:"search-input lg:tw-h-[68px] max-lg:tw-h-[54px] tw-mt-[-11px] tw-mb-[68px] max-lg:tw-mb-[28px] dd-container tw-mx-auto max-lg:tw-mt-[28px]"},lt={class:"tw-flex tw-items-center"},nt={class:"max-md:tw-hidden"},rt={__name:"index",setup(wt){const p=d([]),w=d(""),k=d(),u=()=>{K(w.value)};D("getCategoryList",async()=>{var e;const a=await N();return p.value=((e=a.value)==null?void 0:e.data)||[],p.value});const $=a=>{const e=T(`/tag/${a}`);z(e)},r=d(!1),g=()=>{r.value=!0},_=()=>{r.value=!1},f=()=>{r.value=!0};return(a,e)=>{const C=P,V=E;return m(),x("div",q,[t("div",G,[t("div",H,[t("div",J,[t("p",O,l(a.$t("index.超慢跑超健康")),1),t("p",Q,l(a.$t("index.随时随地健康健美")),1),t("div",W,[o(V,{"popper-class":"download-app-popover",trigger:"manual",visible:i(r),"onUpdate:visible":e[0]||(e[0]=s=>v(r)?r.value=s:null),onMouseenter:g,onMouseleave:_,onClick:f,placement:"left-start"},{reference:n(()=>[o(c,{class:"download-app-btn tw-w-[166px] tw-h-[56px] max-lg:tw-mx-auto max-lg:tw-mb-[32px] tw-flex tw-items-center tw-justify-center",active:!0,onMouseenter:g,onMouseleave:_,onClick:f},{default:n(()=>[t("span",X,l(a.$t("index.下载APP")),1),o(C,{class:"tw-ml-[10px] tw-font-[500]"},{default:n(()=>e[2]||(e[2]=[t("img",{src:I,class:"tw-w-[18px]",alt:""},null,-1)])),_:1})]),_:1})]),default:n(()=>[t("div",Y,[e[3]||(e[3]=t("img",{src:F,class:"tw-w-[125px] tw-mb-[5px]",loading:"lazy",alt:""},null,-1)),t("div",Z,l(a.$t("index.扫码下载超慢跑")),1)])]),_:1},8,["visible"])])]),e[4]||(e[4]=t("img",{src:R,loading:"lazy",class:"tw-w-[36.1%] max-lg:tw-hidden"},null,-1))])]),t("div",tt,[i(p).length?(m(!0),x(h,{key:0},b(i(p),(s,B)=>(m(),x("div",{class:"tabar-item tw-relative tw-rounded-[24px] tw-pt-[32px] tw-pb-[4px] tw-pl-[16px] tw-pr-[10px]",key:B,style:y({backgroundImage:`url(${s==null?void 0:s.backGroup})`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPosition:"center"})},[t("div",et,l(s.name),1),t("div",st,[o(c,{style:y({background:s.buttonColor,borderColor:s.buttonColor}),class:"tw-w-[132px] tw-h-[46px] tw-rounded-[30px] tw-leading-[46px] max-md:tw-w-[98px] max-md:tw-h-[30px!important] max-md:tw-leading-[28px!important] max-xsm:tw-w-[78px] max-xsm:tw-h-[27px] max-sxm:tw-leading-[27px] dd-fs-20-12 max-xsm:tw-px-[8px] tw-text-center",active:!0,onClick:it=>$(s.alias)},{default:n(()=>[j(l(a.$t("home.点击查看")),1)]),_:2},1032,["style","onClick"]),t("img",{src:s.icon,class:"tw-w-[85px] max-lg:tw-w-[50px]",loading:"lazy"},null,8,at)])],4))),128)):(m(),x(h,{key:1},b(4,s=>t("div",{key:s,class:"tabar-item tw-relative tw-rounded-[24px] tw-pt-[32px] tw-pb-[4px] tw-pl-[16px] tw-pr-[10px] tw-bg-gray-100 tw-animate-pulse"},e[5]||(e[5]=[t("div",{class:"tw-h-[47.6px] tw-w-[150px] tw-bg-gray-200 tw-rounded"},null,-1),t("div",{class:"tw-flex tw-justify-between tw-items-center tw-mt-4"},[t("div",{class:"tw-w-[132px] tw-h-[46px] tw-bg-gray-200 tw-rounded-[30px]"}),t("div",{class:"tw-w-[85px] tw-h-[85px] tw-bg-gray-200 tw-rounded"})],-1)]))),64))]),t("div",ot,[o(M,{class:"tw-h-[100%]",modelValue:i(w),"onUpdate:modelValue":e[1]||(e[1]=s=>v(w)?w.value=s:null),placeholder:a.$t("index.请输入搜索内容"),onKeyup:A(u,["down"])},{append:n(()=>[o(c,{onClick:u,class:"max-lg:tw-h-[40px] lg:tw-h-[46px] tw-flex tw-items-center",active:!0},{default:n(()=>[t("div",lt,[e[6]||(e[6]=t("img",{class:"tw-w-[16px] tw-mr-[4px] max-md:tw-mr-[0]",src:S,alt:""},null,-1)),t("span",nt,l(a.$t("index.搜索")),1)])]),_:1})]),_:1},8,["modelValue","placeholder"])]),o(U,{ref_key:"homeBwListRef",ref:k,searchValue:i(w),class:"dd-container tw-mx-auto"},null,8,["searchValue"])])}}},$t=L(rt,[["__scopeId","data-v-1d828b93"]]);export{$t as default};
