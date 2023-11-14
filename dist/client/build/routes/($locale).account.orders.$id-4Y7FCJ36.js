import{a as r,b as p}from"/build/_shared/chunk-NORES4WK.js";import{m as i,s,y as c}from"/build/_shared/chunk-G2CXSP6I.js";import{c as d}from"/build/_shared/chunk-MEPKJ2VW.js";var t=d(c()),m=({data:e})=>[{title:`Order ${e?.order?.name}`}];function u(){let{order:e,lineItems:l,discountValue:o,discountPercentage:a}=s();return(0,t.jsxs)("div",{className:"account-order",children:[(0,t.jsxs)("h2",{children:["Order ",e.name]}),(0,t.jsxs)("p",{children:["Placed on ",new Date(e.processedAt).toDateString()]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"col",children:"Product"}),(0,t.jsx)("th",{scope:"col",children:"Price"}),(0,t.jsx)("th",{scope:"col",children:"Quantity"}),(0,t.jsx)("th",{scope:"col",children:"Total"})]})}),(0,t.jsx)("tbody",{children:l.map((n,h)=>(0,t.jsx)(g,{lineItem:n},h))}),(0,t.jsxs)("tfoot",{children:[(o&&o.amount||a)&&(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",colSpan:3,children:(0,t.jsx)("p",{children:"Discounts"})}),(0,t.jsx)("th",{scope:"row",children:(0,t.jsx)("p",{children:"Discounts"})}),(0,t.jsx)("td",{children:a?(0,t.jsxs)("span",{children:["-",a,"% OFF"]}):o&&(0,t.jsx)(r,{data:o})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",colSpan:3,children:(0,t.jsx)("p",{children:"Subtotal"})}),(0,t.jsx)("th",{scope:"row",children:(0,t.jsx)("p",{children:"Subtotal"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r,{data:e.subtotalPriceV2})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",colSpan:3,children:"Tax"}),(0,t.jsx)("th",{scope:"row",children:(0,t.jsx)("p",{children:"Tax"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r,{data:e.totalTaxV2})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",colSpan:3,children:"Total"}),(0,t.jsx)("th",{scope:"row",children:(0,t.jsx)("p",{children:"Total"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r,{data:e.totalPriceV2})})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Shipping Address"}),e?.shippingAddress?(0,t.jsxs)("address",{children:[(0,t.jsxs)("p",{children:[e.shippingAddress.firstName&&e.shippingAddress.firstName+" ",e.shippingAddress.lastName]}),e?.shippingAddress?.formatted?e.shippingAddress.formatted.map(n=>(0,t.jsx)("p",{children:n},n)):(0,t.jsx)(t.Fragment,{})]}):(0,t.jsx)("p",{children:"No shipping address defined"}),(0,t.jsx)("h3",{children:"Status"}),(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:e.fulfillmentStatus})})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:(0,t.jsx)("a",{target:"_blank",href:e.statusUrl,rel:"noreferrer",children:"View Order Status \u2192"})})]})}function g({lineItem:e}){return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)("div",{children:[(0,t.jsx)(i,{to:`/products/${e.variant.product.handle}`,children:e?.variant?.image&&(0,t.jsx)("div",{children:(0,t.jsx)(p,{data:e.variant.image,width:96,height:96})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:e.title}),(0,t.jsx)("small",{children:e.variant.title})]})]})}),(0,t.jsx)("td",{children:(0,t.jsx)(r,{data:e.variant.price})}),(0,t.jsx)("td",{children:e.quantity}),(0,t.jsx)("td",{children:(0,t.jsx)(r,{data:e.discountedTotalPrice})})]},e.variant.id)}export{u as default,m as meta};

