(this.webpackJsonpcorrect_counter=this.webpackJsonpcorrect_counter||[]).push([[0],{31:function(e,a,t){},46:function(e,a,t){e.exports=t(55)},51:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(7),c=t.n(l),u=(t(51),t(22)),o=t(95),i=t(96);t(31);var s=function(e){var a=e.startValue,t=e.maxValue,r=e.value,l=e.error,c=e.countHandler,u=e.reset;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,l||n.a.createElement(o.a,{variant:"outlined",label:"Counter",value:r===t?"Maximum value reached":r,type:"text"})),n.a.createElement("div",null,n.a.createElement(i.a,{style:{marginRight:"20px"},variant:"contained",color:"primary",onClick:function(){return c()},disableRipple:!0,disabled:!!(r<a||r===t||l)},"Increase"),n.a.createElement(i.a,{variant:"contained",color:"primary",onClick:function(){return u()},disableRipple:!0,disabled:!!(r<=a||l)},"Reset")))},m=t(91),d=Object(m.a)({textField:{backgroundColor:"white",borderRadius:"4px"}});var p=function(e){var a=e.startValue,t=e.maxValue,r=e.disabled,l=e.error,c=e.setStartValue,u=e.setMaxValue,s=e.setHandler,m=e.localStorageHandler,p=d();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{className:p.textField,variant:"outlined",error:"Incorrect value"===l,label:"Max value",type:"number",value:t,onChange:function(e){u(Number.parseInt(e.currentTarget.value))}}),n.a.createElement(o.a,{className:p.textField,variant:"outlined",error:"Incorrect value"===l,label:"Start value",type:"number",value:a,onChange:function(e){c(Number.parseInt(e.currentTarget.value))}}),n.a.createElement(i.a,{disableRipple:!0,variant:"contained",color:"primary",onClick:function(){s(),m()},disabled:r},"Set"))},b=t(92),v=t(94),g=t(90),f=t(93),x=t(41),E=Object(x.a)({palette:{primary:{main:"#101E5A"},background:{paper:"#5D80B6",default:"#acbdd3"}}}),h=Object(m.a)({grid:{height:"250px",marginTop:"15vh"},paper:{width:"300px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}});var j=function(){var e=Object(r.useState)(0),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)(0),o=Object(u.a)(c,2),i=o[0],m=o[1],d=Object(r.useState)(0),x=Object(u.a)(d,2),j=x[0],S=x[1],V=Object(r.useState)('enter values and press "set"'),y=Object(u.a)(V,2),O=y[0],I=y[1],k=Object(r.useState)(!0),C=Object(u.a)(k,2),N=C[0],H=C[1];Object(r.useEffect)((function(){R(),w()}),[i,j]);var R=function(){i<0||i>0&&i===j||j<i?(I("Incorrect value"),H(!0)):(I('enter values and press "set"'),H(0===j&&0===i))},w=function(){if(0===i&&0===j){var e=localStorage.getItem("startValue"),a=localStorage.getItem("maxValue");e&&m(+e),a&&S(+a),localStorage.clear()}},F=h();return n.a.createElement(b.a,{theme:E},n.a.createElement(f.a,null),n.a.createElement(v.a,{container:!0,className:F.grid,spacing:5,direction:"row",justify:"center",alignItems:"stretch"},n.a.createElement(v.a,{item:!0,xs:3,key:1},n.a.createElement(g.a,{className:F.paper,elevation:3},n.a.createElement(p,{setStartValue:m,setMaxValue:S,startValue:i,maxValue:j,setHandler:function(){i>=0&&j>i&&(l(i),I("")),H(!0)},localStorageHandler:function(){localStorage.setItem("startValue",i+""),localStorage.setItem("maxValue",j+"")},disabled:N,error:O}))),n.a.createElement(v.a,{item:!0,xs:3,key:2},n.a.createElement(g.a,{className:F.paper,elevation:3},n.a.createElement(s,{value:t,countHandler:function(){t<j&&l(t+1)},startValue:i,maxValue:j,reset:function(){l(i)},error:O})))))};c.a.render(n.a.createElement(j,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c40a0aac.chunk.js.map