(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{85:function(e,t,n){},86:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var o=n(0),d=n.n(o),c=n(32),a=n.n(c),i=(n(85),n(86),n(15)),r=n(13),u=n(144);var s=n(149),l=n(148),j=n(147),p=n(150),b=n(145),f=n(154),O=n(153),x=n(143),h=n(152),m=n(71),T=n.n(m),k=n(138),g=n(151),v=n(70),C=n.n(v);function y(e){var t=Object(o.useState)(e),n=Object(r.a)(t,2),d=n[0],c=n[1];return[d,function(e){c(e.target.value)},function(){c("")}]}var S=n(2);function w(e){var t=y(e.task),n=Object(r.a)(t,2),o=n[0],d=n[1];return Object(S.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.updateTodo(e.id,o)},style:{width:"75%"},children:Object(S.jsx)("input",{value:o,onChange:d,autoFocus:!0,style:{border:"none",outline:"none",fontSize:"1rem",backgroundColor:"rgba(0,0,0,0.1)",height:"40px",width:"100%",marginLeft:"-10px",paddingLeft:"10px",borderRadius:"5px"}})})}function D(e){return Object(S.jsx)(p.a,{children:Object(S.jsx)(k.a,{spacing:.5,children:e.todos.map((function(t){return Object(S.jsx)(g.a,{elevation:3,children:Object(S.jsxs)(b.a,{secondaryAction:Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(h.a,{"aria-label":"edit",onClick:function(){return e.updateTodo(t.id)},children:Object(S.jsx)(C.a,{})}),Object(S.jsx)(h.a,{"aria-label":"delete",onClick:function(){return e.deleteTodo(t.id)},children:Object(S.jsx)(T.a,{})})]}),children:[Object(S.jsx)(O.a,{children:Object(S.jsx)(x.a,{tabIndex:-1,checked:t.completed,onClick:function(){return e.completeTodo(t.id)}})}),t.update?Object(S.jsx)(w,{task:t.task,id:t.id,updateTodo:e.updateTodo}):Object(S.jsx)(f.a,{style:{textDecoration:t.completed?"line-through":""},children:t.task})]})})}))})})}var F=n(141);function L(e){var t=y(""),n=Object(r.a)(t,3),o=n[0],d=n[1],c=n[2];return Object(S.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.addTodo(o),c("")},children:Object(S.jsx)(F.a,{value:o,fullWidth:!0,onChange:d,placeholder:"Add ToDo item",style:{marginBottom:"10px"}})})}function A(){var e=function(e){var t=Object(o.useState)(e),n=Object(r.a)(t,2),d=n[0],c=n[1];return{todos:d,addTodo:function(e){c([].concat(Object(i.a)(d),[{id:Object(u.a)(),task:e,completed:!1,update:!1}]))},deleteTodo:function(e){c(d.filter((function(t){return t.id!==e})))},completeTodo:function(e){var t=d.map((function(t){return t.id===e?{id:t.id,task:t.task,completed:!t.completed,update:t.update}:t}));c(t)},updateTodo:function(e,t){var n=d.map((function(n){return n.id===e?{id:n.id,task:t||n.task,completed:n.completed,update:!n.update}:n}));c(n)}}}([{id:1,task:"Clean House",completed:!0,update:!1},{id:2,task:"Take shower",completed:!1,update:!1},{id:3,task:"Walk dog",completed:!0,update:!1}]),t=e.todos,n=e.addTodo,d=e.deleteTodo,c=e.completeTodo,a=e.updateTodo;return Object(S.jsxs)(j.a,{container:!0,justifyContent:"center",sx:{margin:"2rem"},children:[Object(S.jsx)(s.a,{children:Object(S.jsx)(l.a,{children:"TO DO REACT HOOK"})}),Object(S.jsxs)(j.a,{item:!0,sx:{width:"40%"},children:[Object(S.jsx)(L,{addTodo:n}),Object(S.jsx)(D,{todos:t,deleteTodo:d,completeTodo:c,updateTodo:a})]})]})}var B=function(){return Object(S.jsx)(A,{})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,155)).then((function(t){var n=t.getCLS,o=t.getFID,d=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),d(e),c(e),a(e)}))};a.a.render(Object(S.jsx)(d.a.StrictMode,{children:Object(S.jsx)(B,{})}),document.getElementById("root")),I()}},[[93,1,2]]]);
//# sourceMappingURL=main.ee3e11cd.chunk.js.map