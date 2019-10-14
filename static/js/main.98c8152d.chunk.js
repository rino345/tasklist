(this.webpackJsonptasklist=this.webpackJsonptasklist||[]).push([[0],{101:function(t,e,a){},102:function(t,e,a){},103:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),s=a(23),l=a(22),o=a(56),u=a(65),d=a.n(u),m=a(66),h=(a(101),a(13)),b=a(10),p=a(16),f=a(17),k=a(18),v=(a(102),a(14)),j={taskList:[]};function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD":return function(t,e){var a={task:e.task,limit:null==e.limit?"":e.limit.toLocaleDateString()},n=t.taskList.slice();return n.unshift(a),{taskList:n}}(t,e);case"DELETE":return function(t,e){var a=t.taskList.slice();return a.splice(e.index,1),{taskList:a}}(t,e);case"UP":return function(t,e){var a,n=t.taskList;if(e.index>0){var i=n.slice(e.index,e.index+1);n.splice(e.index,1);var r=n.slice(0,e.index-1),c=n.slice(e.index-1,n.length);a=r.concat(i,c)}else a=t.taskList.slice();return{taskList:a}}(t,e);default:return t}}Object(s.c)(O);var E=a(139),y=a(70),L=a(19),g=a(147),x=a(140),T=a(148),C=a(137),A=a(134),D=function(t){function e(t){var a;return Object(h.a)(this,e),(a=Object(p.a)(this,Object(f.a)(e).call(this,t))).state={addTask:"",addTaskLimit:new Date},a.doChangeTask=a.doChangeTask.bind(Object(v.a)(a)),a.doChangeLimit=a.doChangeLimit.bind(Object(v.a)(a)),a.doAction=a.doAction.bind(Object(v.a)(a)),a}return Object(k.a)(e,t),Object(b.a)(e,[{key:"doChangeTask",value:function(t){this.setState({addTask:t.target.value})}},{key:"doChangeLimit",value:function(t){this.setState({addTaskLimit:t})}},{key:"doAction",value:function(t){t.preventDefault();var e,a,n=(e=this.state.addTask,a=this.state.addTaskLimit,{type:"ADD",task:e,limit:a});this.props.dispatch(n),this.setState({addTask:"",addTaskLimit:this.state.addTaskLimit})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.doAction},i.a.createElement(A.a,{maxWidth:"xs"},i.a.createElement(C.a,{container:!0,spacing:1},i.a.createElement(C.a,{item:!0,xs:12},i.a.createElement(T.a,{label:"New Task",variant:"outlined",onChange:this.doChangeTask,value:this.state.addTask,fullWidth:!0,required:!0})),i.a.createElement(C.a,{item:!0,xs:8},i.a.createElement(L.a,{utils:y.a},i.a.createElement(g.a,{disableToolbar:!0,label:"Limit",inputVariant:"outlined",invalidDateMessage:"",value:this.state.addTaskLimit,onChange:this.doChangeLimit,format:"yyyy/MM/dd"}))),i.a.createElement(C.a,{item:!0,xs:4},i.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary",startIcon:i.a.createElement(x.a,null)},"Add"))))))}}]),e}(n.Component),w=Object(l.b)((function(t){return t}))(D),S=a(141),M=function(t){function e(t){var a;return Object(h.a)(this,e),(a=Object(p.a)(this,Object(f.a)(e).call(this,t))).doAction=a.doAction.bind(Object(v.a)(a)),a}return Object(k.a)(e,t),Object(b.a)(e,[{key:"doAction",value:function(t){t.preventDefault();var e={type:"DELETE",index:this.props.index};this.props.dispatch(e)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{onClick:this.doAction},i.a.createElement(S.a,{variant:"contained",color:"secondary",size:"large"})))}}]),e}(n.Component),I=Object(l.b)((function(t){return t}))(M),J=a(143),N=a(142),P=function(t){function e(t){var a;return Object(h.a)(this,e),(a=Object(p.a)(this,Object(f.a)(e).call(this,t))).doAction=a.doAction.bind(Object(v.a)(a)),a}return Object(k.a)(e,t),Object(b.a)(e,[{key:"doAction",value:function(t){t.preventDefault();var e={type:"UP",index:this.props.index};this.props.dispatch(e)}},{key:"render",value:function(){return i.a.createElement(N.a,null,i.a.createElement(J.a,null,i.a.createElement(I,{index:this.props.index})),i.a.createElement(J.a,{onClick:this.doAction},this.props.data.task),i.a.createElement(J.a,null,this.props.data.limit))}}]),e}(n.Component),U=Object(l.b)((function(t){return t}))(P),W=a(144),q=a(145),z=function(t){function e(){return Object(h.a)(this,e),Object(p.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(k.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){var t=this.props.taskList.map((function(t,e){return i.a.createElement(U,{data:t,key:e,index:e})}));return i.a.createElement(W.a,null,i.a.createElement(q.a,null,t))}}]),e}(n.Component),B=Object(l.b)((function(t){return t}))(z),V=function(t){function e(){return Object(h.a)(this,e),Object(p.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(k.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{className:"App-name"},"TaskList"),i.a.createElement(w,null),i.a.createElement(B,null))}}]),e}(n.Component),F=Object(l.b)()(V),G=a(146),H=a(52),K=a(71),Q=Object(K.a)({palette:{primary:{main:"#00ff01"},secondary:{main:"#ff00ff"},error:{main:H.a[500]}}}),R={key:"taskList",storage:d.a},X=Object(o.a)(R,O),Y=Object(s.c)(X),Z=Object(o.b)(Y);c.a.render(i.a.createElement(G.a,{theme:Q},i.a.createElement(l.a,{store:Y},i.a.createElement(m.a,{loading:i.a.createElement("p",null,"loading..."),persistor:Z},i.a.createElement(F,null)))),document.getElementById("root"));e.default=Z},89:function(t,e,a){t.exports=a(103)}},[[89,1,2]]]);
//# sourceMappingURL=main.98c8152d.chunk.js.map