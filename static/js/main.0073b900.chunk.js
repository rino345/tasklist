(this.webpackJsonptasklist=this.webpackJsonptasklist||[]).push([[0],{84:function(t,e,a){t.exports=a(98)},96:function(t,e,a){},97:function(t,e,a){},98:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),s=a(23),l=a(22),o=a(53),u=a(61),d=a.n(u),m=a(62),b=(a(96),a(13)),h=a(10),p=a(14),k=a(15),f=a(16),j=(a(97),a(17)),E={taskList:[]};function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD":return function(t,e){var a={task:e.task,limit:e.limit.toLocaleDateString()},n=t.taskList.slice();return n.unshift(a),{taskList:n}}(t,e);case"DELETE":return function(t,e){var a=t.taskList.slice();return a.splice(e.index,1),{taskList:a}}(t,e);default:return t}}Object(s.c)(O);var v=a(134),y=a(66),L=a(19),g=a(141),T=a(135),C=a(143),x=a(132),A=a(129),D=function(t){function e(t){var a;return Object(b.a)(this,e),(a=Object(p.a)(this,Object(k.a)(e).call(this,t))).state={addTask:"",addTaskLimit:new Date},a.doChangeTask=a.doChangeTask.bind(Object(j.a)(a)),a.doChangeLimit=a.doChangeLimit.bind(Object(j.a)(a)),a.doAction=a.doAction.bind(Object(j.a)(a)),a}return Object(f.a)(e,t),Object(h.a)(e,[{key:"doChangeTask",value:function(t){this.setState({addTask:t.target.value})}},{key:"doChangeLimit",value:function(t){this.setState({addTaskLimit:t})}},{key:"doAction",value:function(t){t.preventDefault();var e,a,n=(e=this.state.addTask,a=this.state.addTaskLimit,{type:"ADD",task:e,limit:a});this.props.dispatch(n),this.setState({addTask:"",addTaskLimit:new Date})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.doAction},i.a.createElement(A.a,{maxWidth:"xs"},i.a.createElement(x.a,{container:!0,spacing:1},i.a.createElement(x.a,{item:!0,xs:12},i.a.createElement(C.a,{label:"New Task",variant:"outlined",onChange:this.doChangeTask,value:this.state.addTask,fullWidth:!0,required:!0})),i.a.createElement(x.a,{item:!0,xs:7},i.a.createElement(L.a,{utils:y.a},i.a.createElement(g.a,{disableToolbar:!0,label:"Limit",inputVariant:"outlined",value:this.state.addTaskLimit,onChange:this.doChangeLimit,format:"yyyy/MM/dd"}))),i.a.createElement(x.a,{item:!0,xs:5},i.a.createElement(v.a,{type:"submit",variant:"contained",color:"primary",size:"large",startIcon:i.a.createElement(T.a,null)},"Add"))))))}}]),e}(n.Component),w=Object(l.b)((function(t){return t}))(D),S=a(136),I=function(t){function e(t){var a;return Object(b.a)(this,e),(a=Object(p.a)(this,Object(k.a)(e).call(this,t))).state={delIndex:""},a.doAction=a.doAction.bind(Object(j.a)(a)),a}return Object(f.a)(e,t),Object(h.a)(e,[{key:"doAction",value:function(t){t.preventDefault();var e={type:"DELETE",index:this.props.index};this.props.dispatch(e),this.setState({delIndex:""})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{onClick:this.doAction},i.a.createElement(S.a,{variant:"contained",color:"action",size:"small"})))}}]),e}(n.Component),z=Object(l.b)((function(t){return t}))(I),J=a(138),M=a(137),N=function(t){function e(){return Object(b.a)(this,e),Object(p.a)(this,Object(k.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return i.a.createElement(M.a,null,i.a.createElement(J.a,null,i.a.createElement(z,{index:this.props.index})),i.a.createElement(J.a,null,this.props.data.limit),i.a.createElement(J.a,null,this.props.data.task))}}]),e}(n.Component),W=Object(l.b)((function(t){return t}))(N),q=a(139),B=a(140),V=function(t){function e(){return Object(b.a)(this,e),Object(p.a)(this,Object(k.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props.taskList.map((function(t,e){return i.a.createElement(W,{data:t,key:e,index:e})}));return i.a.createElement(q.a,null,i.a.createElement(B.a,null,t))}}]),e}(n.Component),F=Object(l.b)((function(t){return t}))(V),G=function(t){function e(){return Object(b.a)(this,e),Object(p.a)(this,Object(k.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{className:"App-name"},"TaskList"),i.a.createElement(w,null),i.a.createElement(F,null))}}]),e}(n.Component),H=Object(l.b)()(G),K={key:"taskList",storage:d.a},P=Object(o.a)(K,O),Q=Object(s.c)(P),R=Object(o.b)(Q);c.a.render(i.a.createElement(l.a,{store:Q},i.a.createElement(m.a,{loading:i.a.createElement("p",null,"loading..."),persistor:R},i.a.createElement(H,null))),document.getElementById("root"));e.default=R}},[[84,1,2]]]);
//# sourceMappingURL=main.0073b900.chunk.js.map