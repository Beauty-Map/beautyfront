import{ay as s,aq as o,ak as r,ad as n}from"./entry.BtNxfFXi.js";import{u}from"./useSanctumAuth.Qc_IFDeV.js";const d=s(()=>{const e=o(),{isAuthenticated:a}=u();if(a.value===!1)return;const t=e.redirect.onGuestOnly;if(t===!1)throw r({statusCode:403});return n(t,{replace:!0})});export{d as default};
