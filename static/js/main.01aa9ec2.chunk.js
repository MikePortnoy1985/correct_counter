(this.webpackJsonpcorrect_counter=this.webpackJsonpcorrect_counter||[]).push([[0],{23:function(e,a,t){},33:function(e,a,t){e.exports=t(43)},38:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(11),l=t.n(c),u=(t(38),t(14)),o=t(58),s=t(63),i=t(62),m=t(61);t(23);var b=function(e){return n.a.createElement(o.a,{container:!0,direction:"column",justify:"space-between",alignItems:"center",spacing:3},n.a.createElement(o.a,{item:!0,key:"a",xs:12},e.error?e.error:n.a.createElement(s.a,null,n.a.createElement(i.a,{className:"label",label:"Counter",value:e.value===e.maxValue?"Maximum value reached":e.value,type:"text"}))),n.a.createElement(o.a,{item:!0,key:"b",xs:12,container:!0,direction:"row",justify:"center",alignItems:"center"},n.a.createElement(o.a,{item:!0,key:111,xs:3},n.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return e.countHandler()},disabled:!!(e.value<e.startValue||e.value===e.maxValue||e.error)},"Increse")),n.a.createElement(o.a,{item:!0,key:112,xs:3},n.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return e.reset()},disabled:!!(e.value<=e.startValue||e.error)},"Reset"))))};var v=function(e){return n.a.createElement(o.a,{container:!0,direction:"column",justify:"space-between",alignItems:"center",spacing:3},n.a.createElement(o.a,{item:!0,xs:12,key:11},n.a.createElement(s.a,{error:"Incorrect value"===e.error},n.a.createElement(i.a,{className:"label",label:"Max value",type:"number",value:e.maxValue,onChange:function(a){e.setMaxValue(Number.parseInt(a.currentTarget.value))}}))),n.a.createElement(o.a,{item:!0,xs:12,key:12},n.a.createElement(s.a,{error:"Incorrect value"===e.error},n.a.createElement(i.a,{className:"label",label:"Start value",type:"number",value:e.startValue,onChange:function(a){e.setStartValue(Number.parseInt(a.currentTarget.value))}}))),n.a.createElement(o.a,{item:!0,xs:12,key:1},n.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return e.setHandler()},disabled:e.disabled},"Set")))},f=t(60);var E=function(){var e=Object(r.useState)(0),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)(0),s=Object(u.a)(l,2),i=s[0],m=s[1],E=Object(r.useState)(0),d=Object(u.a)(E,2),p=d[0],x=d[1],y=Object(r.useState)('enter values and press "set"'),g=Object(u.a)(y,2),V=g[0],j=g[1],I=Object(r.useState)(!0),k=Object(u.a)(I,2),S=k[0],O=k[1];Object(r.useEffect)((function(){h()}),[i,p]),Object(r.useEffect)((function(){if(0===i){var e=localStorage.getItem("startValue");e&&m(+e)}}),[i]),Object(r.useEffect)((function(){if(0===p){var e=localStorage.getItem("maxValue");e&&x(+e),localStorage.clear()}}),[p]);var h=function(){i<0||i>0&&i===p||p<i?(j("Incorrect value"),O(!0)):(j('enter values and press "set"'),O(!1))};return n.a.createElement(o.a,{container:!0,style:{marginTop:"15vh"},spacing:10,direction:"row",justify:"center",alignItems:"center"},n.a.createElement(o.a,{item:!0,xs:3,key:1},n.a.createElement(f.a,{elevation:3},n.a.createElement(v,{setStartValue:m,setMaxValue:x,startValue:i,maxValue:p,setHandler:function(){i>=0&&p>i&&(c(i),j(""),localStorage.setItem("startValue",i+""),localStorage.setItem("maxValue",p+"")),O(!0)},errorHandler:h,disabled:S,setDisabled:O,error:V}))),n.a.createElement(o.a,{item:!0,xs:3,key:2},n.a.createElement(f.a,{elevation:3},n.a.createElement(b,{value:t,countHandler:function(){t<p&&c(t+1)},startValue:i,maxValue:p,reset:function(){c(i)},error:V}))))};l.a.render(n.a.createElement(E,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.01aa9ec2.chunk.js.map