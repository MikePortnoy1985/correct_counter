(this.webpackJsonpcorrect_counter=this.webpackJsonpcorrect_counter||[]).push([[0],{23:function(e,t,a){},33:function(e,t,a){e.exports=a(43)},38:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),c=a.n(l),u=(a(38),a(14)),o=a(58),i=a(64),s=a(63),m=a(62);a(23);var d=function(e){return n.a.createElement(o.a,{container:!0,justify:"space-around"},n.a.createElement(o.a,{item:!0,key:"a",style:{width:"260px",height:"190px",textAlign:"center",verticalAlign:"center"}},e.error?e.error:n.a.createElement(i.a,null,n.a.createElement(s.a,{className:"label",label:"Counter",value:e.value===e.maxValue?"Maximum value reached":e.value,style:{margin:"20px"},type:"text"}))),n.a.createElement(o.a,{item:!0,key:"b"},n.a.createElement(o.a,{container:!0},n.a.createElement(o.a,{item:!0,key:1,style:{marginRight:"20px"}},n.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return e.countHandler()},disabled:!!(e.value<e.startValue||e.value===e.maxValue||e.error)},"Increse")),n.a.createElement(o.a,{item:!0,key:2},n.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return e.reset()},disabled:!!(e.value<=e.startValue||e.error)},"Reset")))))};var b=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},n.a.createElement(i.a,{error:"Incorrect value"===e.error},n.a.createElement(s.a,{className:"label",label:"Max value",type:"number",style:{margin:"20px"},value:e.maxValue,onChange:function(t){e.setMaxValue(Number.parseInt(t.currentTarget.value)),e.errorHandler(),e.setDisabled(!1)}})),n.a.createElement(i.a,{error:"Incorrect value"===e.error},n.a.createElement(s.a,{className:"label",label:"Start value",type:"number",style:{margin:"20px"},value:e.startValue,onChange:function(t){e.setStartValue(Number.parseInt(t.currentTarget.value)),e.errorHandler()}})),n.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return e.setter()},disabled:e.disabled},"Set")))},f=a(60),p=a(61);var v=function(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(0),i=Object(u.a)(c,2),s=i[0],m=i[1],v=Object(r.useState)(0),g=Object(u.a)(v,2),E=g[0],x=g[1],y=Object(r.useState)('enter values and press "set"'),V=Object(u.a)(y,2),j=V[0],h=V[1],O=Object(r.useState)(!0),S=Object(u.a)(O,2),k=S[0],I=S[1];Object(r.useEffect)((function(){C()}),[s]),Object(r.useEffect)((function(){C()}),[E]),Object(r.useEffect)((function(){if(0===s){var e=localStorage.getItem("startValue");e&&m(+e)}}),[s]),Object(r.useEffect)((function(){if(0===E){var e=localStorage.getItem("maxValue");e&&x(+e),localStorage.clear()}}),[E]);var C=function(){s<0||s>0&&s===E||E<s?(h("Incorrect value"),I(!0)):(h('enter values and press "set"'),I(!1))};return n.a.createElement(f.a,null,n.a.createElement(o.a,{container:!0,style:{marginTop:"10%"},spacing:10,direction:"row",justify:"center",alignItems:"center"},n.a.createElement(o.a,{item:!0,key:1},n.a.createElement(p.a,{style:{backgroundColor:"#06BAC5",padding:"20px",width:"300px",height:"250px"},elevation:3},n.a.createElement(b,{setStartValue:m,setMaxValue:x,startValue:s,maxValue:E,setter:function(){s>=0&&E>s&&(l(s),h(""),localStorage.setItem("startValue",s+""),localStorage.setItem("maxValue",E+"")),I(!0)},errorHandler:C,disabled:k,setDisabled:I,error:j}))),n.a.createElement(o.a,{item:!0,key:2},n.a.createElement(p.a,{style:{backgroundColor:"#06BAC5",padding:"20px",width:"300px",height:"250px"},elevation:3},n.a.createElement(d,{value:a,countHandler:function(){a<E&&l(a+1)},startValue:s,maxValue:E,reset:function(){l(s)},error:j})))))};c.a.render(n.a.createElement(v,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.774572ad.chunk.js.map