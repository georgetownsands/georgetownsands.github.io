(this.webpackJsonpgeorgetownsands=this.webpackJsonpgeorgetownsands||[]).push([[0],{83:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),s=(n(83),n(65)),o=n(9),d=n(26),l=n(51),j=n(129),u=n(134),m=n(136),h=n(130),b=n(127),p=n(45),x=n(124),g=n(25),O=n(64),f=n.n(O),v=n(131),w=n(132),I=n(133),N=100,y=n(60),k=n.n(y),C=Object(x.a)((function(e){return{root:{minWidth:275,justifyContent:"center",alignItems:"center",display:"flex",margin:e.spacing(1)},heading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.primary,marginLeft:10,marginRight:10},paper:{margin:e.spacing(1),padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,height:"100%"},grayPaper:{backgroundColor:k.a[200]},body:{minWidth:275,justifyContent:"left",alignItems:"left",display:"flex",marginLeft:20,marginRight:20},bodycentered:{minWidth:275,justifyContent:"center",alignItems:"center",display:"flex",marginLeft:20,marginRight:20},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},pos:{marginBottom:12},img:{border:"3px solid #555"},media:{width:"50%"}}})),S=n(2);function R(e){var t=e.sectionId,n=C();return Object(S.jsx)("div",{className:n.root,children:2===t&&Object(S.jsx)("div",{className:n.root,children:Object(S.jsx)("div",{className:n.root,children:2===t&&Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:n.root,children:Object(S.jsx)("h3",{children:"Contact us"})}),Object(S.jsx)("div",{className:n.body,children:"Email us at info @ moscaville.com"})]})})})})}var L=n(128),E=n(68),P=n(135),B=n(125),G=n(61),W=n.n(G),z=n(62),A=n.n(z),D=function(e,t){t?window.open("https://www.google.com/maps/dir/".concat("127 Georgetown Sands Rd, Duck, NC 27949","/").concat(e.address)):window.open("http://maps.google.com/?q=".concat(e.address))};function F(e){return Object(S.jsx)("div",{children:e&&e.areaItem.address&&Object(S.jsxs)(B.a,{children:[Object(S.jsx)(b.a,{"aria-label":"map",onClick:function(){D(e.areaItem,!1)},children:Object(S.jsx)(W.a,{})}),Object(S.jsx)(b.a,{"aria-label":"directions",onClick:function(){D(e.areaItem,!0)},children:Object(S.jsx)(A.a,{})})]})})}function T(e){var t=C();return Object(S.jsx)(L.a,{item:!0,xs:12,sm:6,md:3,children:Object(S.jsx)(E.a,{className:t.paper,children:Object(S.jsxs)(P.a,{p:1,children:[Object(S.jsx)(p.a,{variant:"h6",color:"textPrimary",children:Object(S.jsx)("a",{href:e.areaItem.webSite,target:"_blank",rel:"noreferrer",children:e.areaItem.name})}),Object(S.jsx)(p.a,{children:e.areaItem.description}),Object(S.jsx)(p.a,{children:e.areaItem.address}),Object(S.jsx)(p.a,{children:Object(S.jsx)("a",{href:"tel:"+e.areaItem.phoneNumber,children:e.areaItem.phoneNumber})}),Object(S.jsx)("div",{children:Object(S.jsx)(F,{areaItem:e.areaItem})})]})})})}function V(e){var t=C();return Object(S.jsx)(L.a,{item:!0,xs:12,children:Object(S.jsx)(E.a,{className:t.grayPaper,elevation:6,children:Object(S.jsxs)(P.a,{p:1,children:[Object(S.jsx)(p.a,{variant:"h6",color:"textPrimary",children:e.areaItem.name}),Object(S.jsx)(p.a,{children:e.areaItem.description})]})})})}var J=[{section:1,data:[{id:2,name:"Restaurants",detail:[{id:3,name:"",phoneNumber:"",address:"",description:"",webSite:""}]}]}];function M(e){var t=e.sectionId,n=e.searchValue,r=i.a.useState(!1),c=Object(d.a)(r,2),s=c[0],o=c[1],l=i.a.useState(J),j=Object(d.a)(l,2),u=j[0],m=j[1];return Object(a.useEffect)((function(){var e;s||(e=m,fetch("/data/area.json").then((function(e){return e.json()})).then((function(t){e(t)})),o(!0))}),[s]),Object(S.jsx)("div",{children:(5===t||6===t||7===t||8===t||t===N)&&u&&Object(S.jsx)("div",{children:u.map((function(e){return Object(S.jsx)("div",{children:e.data.filter((function(n){return e.section===t||t===N})).map((function(e){return Object(S.jsxs)("div",{children:[t!==N&&Object(S.jsx)(L.a,{container:!0,spacing:1,children:Object(S.jsx)(V,{areaItem:e})}),Object(S.jsx)(L.a,{container:!0,spacing:1,children:e.detail.filter((function(e){return function(e,t,n){var a=!1;switch(t){case N:if(n&&n.trim().length>2&&(n.trim().toLowerCase().split(" ").map((function(t){return a=a||t.length>0&&(e.name&&e.name.toLowerCase().indexOf(t)>=0||e.description&&e.description.toLowerCase().indexOf(t)>=0||e.searchWords&&e.searchWords.toLowerCase().indexOf(t)>=0)})),a))break;break;default:a=!0}return a}(e,t,n)})).map((function(e){return Object(S.jsx)(T,{areaItem:e},e.id)}))})]},e.id)}))},e.section)}))})})}var q=n(63),H=n.n(q);n(90);function _(e){var t=e.sectionId,n=C();return Object(S.jsx)("div",{className:n.root,children:0===t&&Object(S.jsxs)("div",{children:[Object(S.jsx)(E.a,{className:n.paper,children:"Georgetown Sands is an oceanside townhome community located at the edge of the town of Duck, NC within walking distance of great restaurants, shopping, Atlantic Ocean beach and Currituck Sound access. Relax and enjoy a variety of activities including walking, running, tennis, watersports, and memorable sunrises and sunsets."}),Object(S.jsx)(E.a,{className:n.paper,children:Object(S.jsx)(H.a,{className:n.media,items:[{original:"/images/georgetownsands.jpeg"},{original:"/images/GeorgetownSandsBeach.jpg"}]})}),Object(S.jsxs)(E.a,{className:n.paper,children:["Ammenities include:",Object(S.jsx)("div",{children:"community pool"}),Object(S.jsx)("div",{children:"tennis courts"}),Object(S.jsx)("div",{children:"convenient beach access"}),Object(S.jsx)("div",{children:"walking distance from Duck restaurants, shopping and much  more"})]})]})})}var K=Object(x.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({flexGrow:1},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(g.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(g.a)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{transition:e.transitions.create("width"),fontSize:"20px",width:"95%",padding:"5px 10px 10px 10px",marginRight:"5px",lineHeight:"120%",color:"inherit"},input:{width:"100%"}}})),Q=[{id:0,menuName:"Main"},{id:7,menuName:"Rent"},{id:5,menuName:"Restaurants"},{id:6,menuName:"Shopping"},{id:8,menuName:"Activities"},{id:N,menuName:"Search"},{id:2,menuName:"Contact"}];function U(){var e=K(),t=i.a.useState(null),n=Object(d.a)(t,2),r=n[0],c=n[1],s=i.a.useState(Q),o=Object(d.a)(s,1)[0],l=i.a.useState(0),x=Object(d.a)(l,2),g=x[0],O=x[1],y=i.a.useState(""),k=Object(d.a)(y,2),C=k[0],L=k[1],E=Boolean(r);Object(a.useEffect)((function(){if(g===N)B.focus();else P&&P.current.scrollIntoView()}),[g]);var P=Object(a.useRef)(null),B=Object(a.useRef)(null);return Object(S.jsxs)("div",{className:e.root,children:[Object(S.jsx)(j.a,{position:"sticky",children:Object(S.jsxs)(h.a,{children:[Object(S.jsx)(p.a,{variant:"h6",className:e.title,children:"Georgetown Sands"}),Object(S.jsxs)("div",{children:[Object(S.jsx)(b.a,{"aria-label":"menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(S.jsx)(f.a,{})}),Object(S.jsx)(u.a,{id:"menu-appbar",anchorEl:r,open:E,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},onClose:function(){c(null)},children:o.map((function(e){return Object(S.jsx)(m.a,{onClick:function(){return t=e.id,O(t),void c(null);var t},children:e.menuName},e.id)}))})]})]})}),Object(S.jsx)("div",{ref:P,children:g===N&&Object(S.jsx)(v.a,{className:e.root,variant:"outlined",children:Object(S.jsxs)(w.a,{children:[Object(S.jsx)(I.a,{title:"Search"}),Object(S.jsx)(p.a,{variant:"h5",color:"textPrimary",children:Object(S.jsx)("input",{className:e.inputInput,type:"text",placeholder:"Enter search word(s)...",onChange:function(e){L(e.target.value)},ref:function(e){B=e}})})]})})}),Object(S.jsx)("div",{className:e.root}),Object(S.jsx)(_,{sectionId:g}),Object(S.jsx)(R,{sectionId:g}),Object(S.jsx)(M,{sectionId:g,searchValue:C})]})}function X(){return Object(S.jsx)(s.a,{basename:"",children:Object(S.jsx)(o.a,{path:"/",component:U})})}var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(S.jsx)(X,{}),document.getElementById("root")),Y()}},[[95,1,2]]]);
//# sourceMappingURL=main.f17e0d4f.chunk.js.map