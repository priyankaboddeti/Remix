import{a as R,b as k,c as S}from"/build/_shared/chunk-NORES4WK.js";import{a as b,f,j as m,k as v,m as o,u as g,y}from"/build/_shared/chunk-G2CXSP6I.js";import{c as h}from"/build/_shared/chunk-MEPKJ2VW.js";var a=h(b()),e=h(y()),N=[{type:"queries",items:[]},{type:"products",items:[]},{type:"collections",items:[]},{type:"pages",items:[]},{type:"articles",items:[]}];function O({searchTerm:n}){let t=(0,a.useRef)(null);return(0,a.useEffect)(()=>{function s(r){r.key==="k"&&r.metaKey&&(r.preventDefault(),t.current?.focus()),r.key==="Escape"&&t.current?.blur()}return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[]),(0,e.jsxs)(m,{method:"get",children:[(0,e.jsx)("input",{defaultValue:n,name:"q",placeholder:"Search\u2026",ref:t,type:"search"}),"\xA0",(0,e.jsx)("button",{type:"submit",children:"Search"})]})}function G({results:n}){if(!n)return null;let t=Object.keys(n);return(0,e.jsx)("div",{children:n&&t.map(s=>{let r=n[s];if(r.nodes[0]?.__typename==="Page"){let c=r;return r.nodes.length?(0,e.jsx)(E,{pages:c},"pages"):null}if(r.nodes[0]?.__typename==="Product"){let c=r;return r.nodes.length?(0,e.jsx)(q,{products:c},"products"):null}if(r.nodes[0]?.__typename==="Article"){let c=r;return r.nodes.length?(0,e.jsx)(_,{articles:c},"articles"):null}return null})})}function q({products:n}){return(0,e.jsxs)("div",{className:"search-result",children:[(0,e.jsx)("h2",{children:"Products"}),(0,e.jsx)(S,{connection:n,children:({nodes:t,isLoading:s,NextLink:r,PreviousLink:c})=>{let i=t.map(u=>(0,e.jsx)("div",{className:"search-results-item",children:(0,e.jsx)(o,{prefetch:"intent",to:`/products/${u.handle}`,children:(0,e.jsx)("span",{children:u.title})})},u.id));return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{children:(0,e.jsx)(c,{children:s?"Loading...":(0,e.jsx)("span",{children:"\u2191 Load previous"})})}),(0,e.jsxs)("div",{children:[i,(0,e.jsx)("br",{})]}),(0,e.jsx)("div",{children:(0,e.jsx)(r,{children:s?"Loading...":(0,e.jsx)("span",{children:"Load more \u2193"})})})]})}}),(0,e.jsx)("br",{})]})}function E({pages:n}){return(0,e.jsxs)("div",{className:"search-result",children:[(0,e.jsx)("h2",{children:"Pages"}),(0,e.jsx)("div",{children:n?.nodes?.map(t=>(0,e.jsx)("div",{className:"search-results-item",children:(0,e.jsx)(o,{prefetch:"intent",to:`/pages/${t.handle}`,children:t.title})},t.id))}),(0,e.jsx)("br",{})]})}function _({articles:n}){return(0,e.jsxs)("div",{className:"search-result",children:[(0,e.jsx)("h2",{children:"Articles"}),(0,e.jsx)("div",{children:n?.nodes?.map(t=>(0,e.jsx)("div",{className:"search-results-item",children:(0,e.jsx)(o,{prefetch:"intent",to:`/blog/${t.handle}`,children:t.title})},t.id))}),(0,e.jsx)("br",{})]})}function U(){return(0,e.jsx)("p",{children:"No results, try a different search."})}function M({action:n,children:t,className:s="predictive-search-form",method:r="POST",...c}){let i=f(),u=g(),l=(0,a.useRef)(null);function P(d){let p=n??"/api/predictive-search",L=i.locale?`/${i.locale}${p}`:p,T=d.target.value||"";u.submit({q:T,limit:"6"},{method:r,action:L})}return(0,a.useEffect)(()=>{l?.current?.setAttribute("type","search")},[]),(0,e.jsx)(u.Form,{...c,className:s,onSubmit:d=>{d.preventDefault(),d.stopPropagation(),!(!l?.current||l.current.value==="")&&l.current.blur()},children:t({fetchResults:P,inputRef:l,fetcher:u})})}function V(){let{results:n,totalResults:t,searchInputRef:s,searchTerm:r}=I();function c(i){s.current&&(s.current.blur(),s.current.value="",window.location.href=i.currentTarget.href)}return t?(0,e.jsxs)("div",{className:"predictive-search-results",children:[(0,e.jsx)("div",{children:n.map(({type:i,items:u})=>(0,e.jsx)(C,{goToSearchResult:c,items:u,searchTerm:r,type:i},i))}),r.current&&(0,e.jsx)(o,{onClick:c,to:`/search?q=${r.current}`,children:(0,e.jsxs)("p",{children:["View all results for ",(0,e.jsx)("q",{children:r.current}),"\xA0 \u2192"]})})]}):(0,e.jsx)(A,{searchTerm:r})}function A({searchTerm:n}){return n.current?(0,e.jsxs)("p",{children:["No results found for ",(0,e.jsx)("q",{children:n.current})]}):null}function C({goToSearchResult:n,items:t,searchTerm:s,type:r}){let c=r==="queries",i=`/search?q=${s.current}&type=${w(r)}`;return(0,e.jsxs)("div",{className:"predictive-search-result",children:[(0,e.jsx)(o,{prefetch:"intent",to:i,onClick:n,children:(0,e.jsx)("h5",{children:c?"Suggestions":r})}),(0,e.jsx)("ul",{children:t.map(u=>(0,e.jsx)(F,{goToSearchResult:n,item:u},u.id))})]},r)}function F({goToSearchResult:n,item:t}){return(0,e.jsx)("li",{className:"predictive-search-result-item",children:(0,e.jsxs)(o,{onClick:n,to:t.url,children:[t.image?.url&&(0,e.jsx)(k,{alt:t.image.altText??"",src:t.image.url,width:50,height:50}),(0,e.jsxs)("div",{children:[t.styledTitle?(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:t.styledTitle}}):(0,e.jsx)("span",{children:t.title}),t?.price&&(0,e.jsx)("small",{children:(0,e.jsx)(R,{data:t.price})})]})]})},t.id)}function I(){let n=v(),t=(0,a.useRef)(""),s=(0,a.useRef)(null),r=n.find(i=>i.data?.searchResults);r?.state==="loading"&&(t.current=r.formData?.get("q")||"");let c=r?.data?.searchResults||{results:N,totalResults:0};return(0,a.useEffect)(()=>{s.current||(s.current=document.querySelector('input[type="search"]'))},[]),{...c,searchInputRef:s,searchTerm:t}}function w(n){let t={articles:"ARTICLE",collections:"COLLECTION",pages:"PAGE",products:"PRODUCT",queries:"QUERY"};return typeof n=="string"?t[n]:n.map(s=>t[s]).join(",")}export{O as a,G as b,U as c,M as d,V as e};

