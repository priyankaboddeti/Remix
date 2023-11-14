import{d as z,e as Y}from"/build/_shared/chunk-3ZKWV7SQ.js";import{a as Q}from"/build/_shared/chunk-OXCD42SC.js";import{a as N,b as B,d as h,f as P}from"/build/_shared/chunk-NORES4WK.js";import{a as E,b as O,h as F,i as q,l as g,m as C,n as L,o as S,p as y,q as M,r as _,s as $,v as I,x as A,y as m}from"/build/_shared/chunk-G2CXSP6I.js";import{c}from"/build/_shared/chunk-MEPKJ2VW.js";var W="/build/_assets/favicon-5FIZBM2K.svg";var G="/build/_assets/reset-GJUKTO6O.css";var Z="/build/_assets/app-DOF2H6SQ.css";var U=c(E());var u=c(m());function x({children:e,heading:t,id:r="aside"}){return(0,u.jsxs)("div",{"aria-modal":!0,className:"overlay",id:r,role:"dialog",children:[(0,u.jsx)("button",{className:"close-outside",onClick:()=>{history.go(-1),window.location.hash=""}}),(0,u.jsxs)("aside",{children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:t}),(0,u.jsx)(ae,{})]}),(0,u.jsx)("main",{children:e})]})]})}function ae(){return(0,u.jsx)("a",{className:"close",href:"#",onChange:()=>history.go(-1),children:"\xD7"})}var f=c(m());function K({menu:e,shop:t}){return(0,f.jsx)("footer",{className:"footer",children:(0,f.jsx)(ne,{menu:e,primaryDomainUrl:t.primaryDomain.url})})}function ne({menu:e,primaryDomainUrl:t}){let{publicStoreDomain:r}=b();return(0,f.jsx)("nav",{className:"footer-menu",role:"navigation",children:(e||se).items.map(o=>{if(!o.url)return null;let d=o.url.includes("myshopify.com")||o.url.includes(r)||o.url.includes(t)?new URL(o.url).pathname:o.url;return!d.startsWith("/")?(0,f.jsx)("a",{href:d,rel:"noopener noreferrer",target:"_blank",children:o.title},o.id):(0,f.jsx)(g,{end:!0,prefetch:"intent",style:de,to:d,children:o.title},o.id)})})}var se={id:"gid://shopify/Menu/199655620664",items:[{id:"gid://shopify/MenuItem/461633060920",resourceId:"gid://shopify/ShopPolicy/23358046264",tags:[],title:"Privacy Policy",type:"SHOP_POLICY",url:"/policies/privacy-policy",items:[]},{id:"gid://shopify/MenuItem/461633093688",resourceId:"gid://shopify/ShopPolicy/23358013496",tags:[],title:"Refund Policy",type:"SHOP_POLICY",url:"/policies/refund-policy",items:[]},{id:"gid://shopify/MenuItem/461633126456",resourceId:"gid://shopify/ShopPolicy/23358111800",tags:[],title:"Shipping Policy",type:"SHOP_POLICY",url:"/policies/shipping-policy",items:[]},{id:"gid://shopify/MenuItem/461633159224",resourceId:"gid://shopify/ShopPolicy/23358079032",tags:[],title:"Terms of Service",type:"SHOP_POLICY",url:"/policies/terms-of-service",items:[]}]};function de({isActive:e,isPending:t}){return{fontWeight:e?"bold":void 0,color:t?"grey":"white"}}var V=c(E());var s=c(m());function J({header:e,isLoggedIn:t,cart:r}){let{shop:o,menu:d}=e;return(0,s.jsxs)("header",{className:"header",children:[(0,s.jsx)(g,{prefetch:"intent",to:"/",style:w,end:!0,children:(0,s.jsx)("strong",{children:o.name})}),(0,s.jsx)(R,{menu:d,viewport:"desktop",primaryDomainUrl:e.shop.primaryDomain.url}),(0,s.jsx)(le,{isLoggedIn:t,cart:r})]})}function R({menu:e,primaryDomainUrl:t,viewport:r}){let{publicStoreDomain:o}=b(),d=`header-menu-${r}`;function p(l){r==="mobile"&&(l.preventDefault(),window.location.href=l.currentTarget.href)}return(0,s.jsxs)("nav",{className:d,role:"navigation",children:[r==="mobile"&&(0,s.jsx)(g,{end:!0,onClick:p,prefetch:"intent",style:w,to:"/",children:"Home"}),(e||pe).items.map(l=>{if(!l.url)return null;let v=l.url.includes("myshopify.com")||l.url.includes(o)||l.url.includes(t)?new URL(l.url).pathname:l.url;return(0,s.jsx)(g,{className:"header-menu-item",end:!0,onClick:p,prefetch:"intent",style:w,to:v,children:l.title},l.id)})]})}function le({isLoggedIn:e,cart:t}){return(0,s.jsxs)("nav",{className:"header-ctas",role:"navigation",children:[(0,s.jsx)(ce,{}),(0,s.jsx)(g,{prefetch:"intent",to:"/account",style:w,children:e?"Account":"Sign in"}),(0,s.jsx)(me,{}),(0,s.jsx)(ue,{cart:t})]})}function ce(){return(0,s.jsx)("a",{className:"header-menu-mobile-toggle",href:"#mobile-menu-aside",children:(0,s.jsx)("h3",{children:"\u2630"})})}function me(){return(0,s.jsx)("a",{href:"#search-aside",children:"Search"})}function D({count:e}){return(0,s.jsxs)("a",{href:"#cart-aside",children:["Cart ",e]})}function ue({cart:e}){return(0,s.jsx)(V.Suspense,{fallback:(0,s.jsx)(D,{count:0}),children:(0,s.jsx)(y,{resolve:e,children:t=>t?(0,s.jsx)(D,{count:t.totalQuantity||0}):(0,s.jsx)(D,{count:0})})})}var pe={id:"gid://shopify/Menu/199655587896",items:[{id:"gid://shopify/MenuItem/461609500728",resourceId:null,tags:[],title:"Collections",type:"HTTP",url:"/collections",items:[]},{id:"gid://shopify/MenuItem/461609533496",resourceId:null,tags:[],title:"Blog",type:"HTTP",url:"/blogs/journal",items:[]},{id:"gid://shopify/MenuItem/461609566264",resourceId:null,tags:[],title:"Policies",type:"HTTP",url:"/policies",items:[]},{id:"gid://shopify/MenuItem/461609599032",resourceId:"gid://shopify/Page/92591030328",tags:[],title:"About",type:"PAGE",url:"/pages/about",items:[]}]};function w({isActive:e,isPending:t}){return{fontWeight:e?"bold":void 0,color:t?"grey":"black"}}var i=c(m());function ee({layout:e,cart:t}){let r=Boolean(t?.lines?.nodes?.length||0),d=`cart-main ${t&&Boolean(t.discountCodes.filter(p=>p.applicable).length)?"with-discount":""}`;return(0,i.jsxs)("div",{className:d,children:[(0,i.jsx)(ke,{hidden:r,layout:e}),(0,i.jsx)(ge,{cart:t,layout:e})]})}function ge({layout:e,cart:t}){let r=!!t&&t.totalQuantity>0;return(0,i.jsxs)("div",{className:"cart-details",children:[(0,i.jsx)(he,{lines:t?.lines,layout:e}),r&&(0,i.jsxs)(be,{cost:t.cost,layout:e,children:[(0,i.jsx)(Ce,{discountCodes:t.discountCodes}),(0,i.jsx)(ye,{checkoutUrl:t.checkoutUrl})]})]})}function he({lines:e,layout:t}){return e?(0,i.jsx)("div",{"aria-labelledby":"cart-lines",children:(0,i.jsx)("ul",{children:e.nodes.map(r=>(0,i.jsx)(fe,{line:r,layout:t},r.id))})}):null}function fe({layout:e,line:t}){let{id:r,merchandise:o}=t,{product:d,title:p,image:l,selectedOptions:v}=o,H=Q(d.handle,v);return(0,i.jsxs)("li",{className:"cart-line",children:[l&&(0,i.jsx)(B,{alt:p,aspectRatio:"1/1",data:l,height:100,loading:"lazy",width:100}),(0,i.jsxs)("div",{children:[(0,i.jsx)(C,{prefetch:"intent",to:H,onClick:()=>{e==="aside"&&(window.location.href=H)},children:(0,i.jsx)("p",{children:(0,i.jsx)("strong",{children:d.title})})}),(0,i.jsx)(we,{line:t,as:"span"}),(0,i.jsx)("ul",{children:v.map(k=>(0,i.jsx)("li",{children:(0,i.jsxs)("small",{children:[k.name,": ",k.value]})},k.name))}),(0,i.jsx)(xe,{line:t})]})]},r)}function ye({checkoutUrl:e}){return e?(0,i.jsxs)("div",{children:[(0,i.jsx)("a",{href:e,target:"_self",children:(0,i.jsx)("p",{children:"Continue to Checkout \u2192"})}),(0,i.jsx)("br",{})]}):null}function be({cost:e,layout:t,children:r=null}){return(0,i.jsxs)("div",{"aria-labelledby":"cart-summary",className:t==="page"?"cart-summary-page":"cart-summary-aside",children:[(0,i.jsx)("h4",{children:"Totals"}),(0,i.jsxs)("dl",{className:"cart-subtotal",children:[(0,i.jsx)("dt",{children:"Subtotal"}),(0,i.jsx)("dd",{children:e?.subtotalAmount?.amount?(0,i.jsx)(N,{data:e?.subtotalAmount}):"-"})]}),r]})}function ve({lineIds:e}){return(0,i.jsx)(h,{route:"/cart",action:h.ACTIONS.LinesRemove,inputs:{lineIds:e},children:(0,i.jsx)("button",{type:"submit",children:"Remove"})})}function xe({line:e}){if(!e||typeof e?.quantity>"u")return null;let{id:t,quantity:r}=e,o=Number(Math.max(0,r-1).toFixed(0)),d=Number((r+1).toFixed(0));return(0,i.jsxs)("div",{className:"cart-line-quantiy",children:[(0,i.jsxs)("small",{children:["Quantity: ",r," \xA0\xA0"]}),(0,i.jsx)(j,{lines:[{id:t,quantity:o}],children:(0,i.jsx)("button",{"aria-label":"Decrease quantity",disabled:r<=1,name:"decrease-quantity",value:o,children:(0,i.jsx)("span",{children:"\u2212 "})})}),"\xA0",(0,i.jsx)(j,{lines:[{id:t,quantity:d}],children:(0,i.jsx)("button",{"aria-label":"Increase quantity",name:"increase-quantity",value:d,children:(0,i.jsx)("span",{children:"+"})})}),"\xA0",(0,i.jsx)(ve,{lineIds:[t]})]})}function we({line:e,priceType:t="regular",...r}){if(!e?.cost?.amountPerQuantity||!e?.cost?.totalAmount)return null;let o=t==="regular"?e.cost.totalAmount:e.cost.compareAtAmountPerQuantity;return o==null?null:(0,i.jsx)("div",{children:(0,i.jsx)(N,{withoutTrailingZeros:!0,...r,data:o})})}function ke({hidden:e=!1,layout:t="aside"}){return(0,i.jsxs)("div",{hidden:e,children:[(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Looks like you haven\u2019t added anything yet, let\u2019s get you started!"}),(0,i.jsx)("br",{}),(0,i.jsx)(C,{to:"/collections",onClick:()=>{t==="aside"&&(window.location.href="/collections")},children:"Continue shopping \u2192"})]})}function Ce({discountCodes:e}){let t=e?.filter(r=>r.applicable)?.map(({code:r})=>r)||[];return(0,i.jsxs)("div",{children:[(0,i.jsx)("dl",{hidden:!t.length,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("dt",{children:"Discount(s)"}),(0,i.jsx)(X,{children:(0,i.jsxs)("div",{className:"cart-discount",children:[(0,i.jsx)("code",{children:t?.join(", ")}),"\xA0",(0,i.jsx)("button",{children:"Remove"})]})})]})}),(0,i.jsx)(X,{discountCodes:t,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"text",name:"discountCode",placeholder:"Discount code"}),"\xA0",(0,i.jsx)("button",{type:"submit",children:"Apply"})]})})]})}function X({discountCodes:e,children:t}){return(0,i.jsx)(h,{route:"/cart",action:h.ACTIONS.DiscountCodesUpdate,inputs:{discountCodes:e||[]},children:t})}function j({children:e,lines:t}){return(0,i.jsx)(h,{route:"/cart",action:h.ACTIONS.LinesUpdate,inputs:{lines:t},children:e})}var n=c(m());function T({cart:e,children:t=null,footer:r,header:o,isLoggedIn:d}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Le,{cart:e}),(0,n.jsx)(Se,{}),(0,n.jsx)(Me,{menu:o.menu,shop:o.shop}),(0,n.jsx)(J,{header:o,cart:e,isLoggedIn:d}),(0,n.jsx)("main",{children:t}),(0,n.jsx)(U.Suspense,{children:(0,n.jsx)(y,{resolve:r,children:p=>(0,n.jsx)(K,{menu:p.menu,shop:o.shop})})})]})}function Le({cart:e}){return(0,n.jsx)(x,{id:"cart-aside",heading:"CART",children:(0,n.jsx)(U.Suspense,{fallback:(0,n.jsx)("p",{children:"Loading cart ..."}),children:(0,n.jsx)(y,{resolve:e,children:t=>(0,n.jsx)(ee,{cart:t,layout:"aside"})})})})}function Se(){return(0,n.jsx)(x,{id:"search-aside",heading:"SEARCH",children:(0,n.jsxs)("div",{className:"predictive-search",children:[(0,n.jsx)("br",{}),(0,n.jsx)(z,{children:({fetchResults:e,inputRef:t})=>(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{name:"q",onChange:e,onFocus:e,placeholder:"Search",ref:t,type:"search"}),"\xA0",(0,n.jsx)("button",{type:"submit",children:"Search"})]})}),(0,n.jsx)(Y,{})]})})}function Me({menu:e,shop:t}){return(0,n.jsx)(x,{id:"mobile-menu-aside",heading:"MENU",children:(0,n.jsx)(R,{menu:e,viewport:"mobile",primaryDomainUrl:t.primaryDomain.url})})}var a=c(m()),tt=({formMethod:e,currentUrl:t,nextUrl:r})=>!!(e&&e!=="GET"||t.toString()===r.toString());function it(){return[{rel:"stylesheet",href:G},{rel:"stylesheet",href:Z},{rel:"preconnect",href:"https://cdn.shopify.com"},{rel:"preconnect",href:"https://shop.app"},{rel:"icon",type:"image/svg+xml",href:W}]}var b=()=>{let[e]=_();return e?.data};function Ie(){let e=P(),t=$();return(0,a.jsxs)("html",{lang:"en",children:[(0,a.jsxs)("head",{children:[(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,a.jsx)(S,{}),(0,a.jsx)(L,{})]}),(0,a.jsxs)("body",{children:[(0,a.jsx)(T,{...t,children:(0,a.jsx)(q,{})}),(0,a.jsx)(A,{nonce:e}),(0,a.jsx)(M,{nonce:e}),(0,a.jsx)(I,{nonce:e})]})]})}function rt(){let e=F(),t=b(),r=P(),o="Unknown error",d=500;return O(e)?(o=e?.data?.message??e.data,d=e.status):e instanceof Error&&(o=e.message),(0,a.jsxs)("html",{lang:"en",children:[(0,a.jsxs)("head",{children:[(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,a.jsx)(S,{}),(0,a.jsx)(L,{})]}),(0,a.jsxs)("body",{children:[(0,a.jsx)(T,{...t,children:(0,a.jsxs)("div",{className:"route-error",children:[(0,a.jsx)("h1",{children:"Oops"}),(0,a.jsx)("h2",{children:d}),o&&(0,a.jsx)("fieldset",{children:(0,a.jsx)("pre",{children:o})})]})}),(0,a.jsx)(A,{nonce:r}),(0,a.jsx)(M,{nonce:r}),(0,a.jsx)(I,{nonce:r})]})]})}var te=`#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
`,ot=`#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${te}
`,at=`#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${te}
`;export{ee as a,tt as b,it as c,b as d,Ie as e,rt as f};

