import{at as s,al as o,ae as r,a7 as n}from"./entry.BZBDKKIU.js";import{u}from"./useSanctumAuth.D_ZKC7qp.js";const f=s(()=>{const e=o(),{isAuthenticated:a}=u();if(a.value===!1)return;const t=e.redirect.onGuestOnly;if(t===!1)throw r({statusCode:403});return n(t,{replace:!0})});export{f as default};