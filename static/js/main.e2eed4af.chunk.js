(this["webpackJsonptask-app-react16"]=this["webpackJsonptask-app-react16"]||[]).push([[0],{59:function(e,a,t){e.exports=t(69)},64:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),o=(t(64),t(52)),i=t(51),m=t(25),s=t(95),u=t(114),d=t(98),f=t(100),k=t(101),E=Object(s.a)((function(e){return Object(u.a)({root:{flexGrow:1,paddingBottom:40},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),b=function(e){var a=E();return l.a.createElement("div",{className:a.root},l.a.createElement(d.a,{position:"static",color:"primary"},l.a.createElement(f.a,null,l.a.createElement(k.a,{variant:"h6"},e.userName,"'s Tasks App (",e.taskItems.filter((function(e){return!e.done})).length," tasks to do)"))))},g=t(112),p=t(102),h=t(48),T=t.n(h),O=Object(s.a)((function(e){return Object(u.a)({root:{flexGrow:1,paddingTop:20,paddingBottom:40,display:"flex"},button:{marginLeft:50}})})),v=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],c=t[1],o=O();return l.a.createElement("div",{className:o.root},l.a.createElement(g.a,{id:"standard-basic",label:"Add a task",type:"text",value:r,onChange:function(e){return c(e.target.value)}}),l.a.createElement(p.a,{variant:"contained",onClick:function(){e.callback(r),c("")},className:o.button,color:"default",startIcon:l.a.createElement(T.a,null)},"Add"))},j=function(e){return l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",checked:e.isChecked,onChange:function(a){return e.callback(a.target.checked)}}),l.a.createElement("label",{htmlFor:"form-check-label"},"Show ",e.description))},w=t(103),x=t(104),N=t(113),y=t(105),C=t(49),S=t.n(C),B=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{key:e.task.name},l.a.createElement(x.a,{component:"th",scope:"row"},e.task.name),l.a.createElement(x.a,{align:"right"},l.a.createElement(N.a,{defaultChecked:!0,color:"primary",value:"default",inputProps:{"aria-label":"checkbox with default color"},checked:e.task.done,onChange:function(){return e.toggleTask(e.task)}})),l.a.createElement(x.a,{align:"right"},l.a.createElement(y.a,{"aria-label":"delete",color:"secondary",onClick:function(){return e.deleteTask(e.task)}},l.a.createElement(S.a,null)))))},D=t(106),I=t(107),F=t(108),J=t(109),A=t(110),G=t(111),W=t(50),M=Object(W.a)({palette:{primary:{main:"#f44336"},secondary:{main:"#607d8b"}}}),L=Object(s.a)((function(e){return Object(u.a)({root:{paddingTop:40,paddingBottom:40},boldText:{fontWeight:"bolder"}})}));var P=function(){var e=Object(n.useState)("Mati"),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([{name:"Task one",done:!1},{name:"Task two",done:!1},{name:"Task three",done:!0},{name:"Task false",done:!1}]),s=Object(m.a)(c,2),u=s[0],d=s[1],f=Object(n.useState)(!0),k=Object(m.a)(f,2),E=k[0],g=k[1];Object(n.useEffect)((function(){var e=localStorage.getItem("tasks");null!=e?d(JSON.parse(e)):(r("Mati"),d([{name:"Task One",done:!1},{name:"Task Two",done:!1},{name:"Task Three",done:!0},{name:"Task Four",done:!1}]),g(!0))}),[]),Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(u))}),[u]);var p=function(e){d(u.map((function(a){return a.name===e.name?Object(o.a)({},a,{done:!a.done}):a})))},h=function(e){var a=u.map((function(e){return e.name})).indexOf(e.name),t=u.slice(0,a).concat(u.slice(a+1,u.length));d(t)},T=function(e){return u.filter((function(a){return a.done===e})).map((function(e){return l.a.createElement(B,{key:e.name,task:e,toggleTask:p,deleteTask:h})}))},O=L();return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,{theme:M},l.a.createElement(b,{userName:t,taskItems:u}),l.a.createElement(I.a,null,l.a.createElement(v,{callback:function(e){u.find((function(a){return a.name===e}))||d([].concat(Object(i.a)(u),[{name:e,done:!1}]))}}),l.a.createElement(F.a,{className:O.root},l.a.createElement(J.a,{"aria-label":"simple table"},l.a.createElement(A.a,null,l.a.createElement(w.a,null,l.a.createElement(x.a,{className:O.boldText},"Description"),l.a.createElement(x.a,{className:O.boldText,align:"right"},"Done"),l.a.createElement(x.a,{className:O.boldText,align:"right"},"Delete"))),l.a.createElement(G.a,null,T(!1))))),l.a.createElement(I.a,null,l.a.createElement("div",null,l.a.createElement(j,{description:"Completed Tasks",isChecked:E,callback:function(e){return g(e)}}))),l.a.createElement(I.a,null,E&&l.a.createElement(F.a,{className:O.root},l.a.createElement(J.a,{"aria-label":"simple table"},l.a.createElement(A.a,null,l.a.createElement(w.a,null,l.a.createElement(x.a,{className:O.boldText},"Description"),l.a.createElement(x.a,{className:O.boldText,align:"right"},"Done"),l.a.createElement(x.a,{className:O.boldText,align:"right"},"Delete"))),l.a.createElement(G.a,null,T(!0)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.e2eed4af.chunk.js.map