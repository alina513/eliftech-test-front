"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[577],{8346:function(n,e,r){r.d(e,{Dx:function(){return u},iR:function(){return l},sZ:function(){return s}});var t=r(5861),i=r(7757),a=r.n(i),o=r(3016),s=function(){var n=(0,t.Z)(a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://eliftech-test-back-vkh9.onrender.com/api/events/");case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t,i,s,l,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.event_id,t=e.fullname,i=e.email,s=e.birth,l=e.source,n.next=3,o.Z.post("https://eliftech-test-back-vkh9.onrender.com/api/members/",{event_id:r,fullname:t,email:i,birth:s,source:l});case 3:return u=n.sent,n.abrupt("return",u.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://eliftech-test-back-vkh9.onrender.com/api/members/");case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4577:function(n,e,r){r.r(e),r.d(e,{default:function(){return rn}});var t,i,a,o,s,l,u=r(5861),c=r(9439),p=r(7757),d=r.n(p),x=r(2791),h=r(7948),f=r.n(h),m=r(1413),g=r(5705),v=r(8346),b=r(168),Z=r(5867),j=Z.ZP.button(t||(t=(0,b.Z)(["\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  height: 60px;\n\n  color: #121417;\n  font-size: 18px;\n  font-weight: 700;\n  cursor: pointer;\n\n  background-color: #f4c550;\n  border-radius: 12px;\n  &:hover,\n  &:focus {\n    background-color: #f4c8ba;\n  }\n"]))),y=Z.ZP.input(i||(i=(0,b.Z)(["\n  width: 100%;\n  height: 54px;\n  margin-bottom: 16px;\n  padding-left: 16px;\n\n  border: 1px solid rgba(18, 20, 23, 0.1);\n  border-radius: 12px;\n  outline: none;\n\n  &::placeholder {\n    font-size: 16px;\n    line-height: 1, 38;\n    color: #121417;\n  }\n"]))),w=Z.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),k=Z.ZP.label(o||(o=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-size: 16px;\n  font-family: Roboto, sans-serif;\n  line-height: 1, 38;\n  color: #121417;\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-family: Roboto, sans-serif;\n  line-height: 1, 38;\n  color: #121417;\n"]))),P=Z.ZP.div(s||(s=(0,b.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n"]))),_=r(5218),R=r(184),F=function(n){var e=n.event_id,r=n.closeModal,t=function(){var n=(0,u.Z)(d().mark((function n(t,i){var a;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.iR)((0,m.Z)({event_id:e},t));case 3:return a=n.sent,_.ZP.success("\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u043e!"),i.resetForm(),r(),n.abrupt("return",a);case 10:n.prev=10,n.t0=n.catch(0),_.ZP.error("\u0412\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0438\u043b\u0438 \u0444\u043e\u0440\u043c\u0443");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,r){return n.apply(this,arguments)}}();return(0,R.jsx)(w,{children:(0,R.jsx)(g.J9,{initialValues:{fullname:"",email:"",birth:"",source:""},validate:function(n){var e={};return n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(n.email)||(e.email="Invalid email address"):e.email="Required",e},onSubmit:t,children:function(n){var e=n.values,r=n.errors,t=n.touched,i=n.handleChange,a=n.handleBlur,o=n.handleSubmit;n.isSubmitting;return(0,R.jsxs)("form",{onSubmit:o,children:[(0,R.jsx)(k,{htmlFor:"fullname",children:"Full Name"}),(0,R.jsx)(y,{name:"fullname",onChange:i,onBlur:a,value:e.fullname,id:"fullname"}),(0,R.jsx)(k,{htmlFor:"email",children:"Email"}),(0,R.jsx)(y,{type:"email",name:"email",onChange:i,onBlur:a,value:e.email,id:"email"}),r.email&&t.email&&r.email,(0,R.jsx)(k,{htmlFor:"birth",children:"Date of birth"}),(0,R.jsx)(y,{name:"birth",onChange:i,onBlur:a,value:e.birth,id:"birth"}),(0,R.jsx)("div",{id:"source",children:"Where did you hear about this event?"}),(0,R.jsxs)(P,{role:"group","aria-labelledby":"source",children:[(0,R.jsxs)("label",{children:[(0,R.jsx)(g.gN,{type:"radio",name:"source",value:" Social media"}),"Social media"]}),(0,R.jsxs)("label",{children:[(0,R.jsx)(g.gN,{type:"radio",name:"source",value:"Friends"}),"Friends"]}),(0,R.jsxs)("label",{children:[(0,R.jsx)(g.gN,{type:"radio",name:"source",value:"Found myself"}),"Found myself"]})]}),(0,R.jsx)(j,{type:"submit",children:"Submit"})]})}})})},z=Z.ZP.div(l||(l=(0,b.Z)(["\n  padding: 64px 20px;\n  position: relative;\n"])));f().setAppElement("#modal");var S,C,M,O,A,B,N,E,I,q=function(n){var e=n.event_id,r=n.isOpenModalRegistration,t=n.setIsOpenModalRegistration;return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(f(),{isOpen:r,onRequestClose:function(){t(!1)},style:{overlay:{backgroundColor:"rgba(30, 66, 89, 0.4)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"40px",maxWidth:"566px",maxHeight:"600px",borderRadius:"30px"}},contentLabel:"More info modal",children:(0,R.jsx)(z,{children:(0,R.jsx)(F,{event_id:e,closeModal:t})})})})},D=r(1087),V=Z.ZP.div(S||(S=(0,b.Z)(["\n  width: 200px;\n  height: 150px;\n  border: 1px solid green;\n  border-radius: 12px;\n  padding: 5px 5px;\n"]))),W=Z.ZP.h2(C||(C=(0,b.Z)(["\n  font-size: 16px;\n  margin-top: 0px;\n"]))),H=Z.ZP.p(M||(M=(0,b.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  font-weight: 600;\n"]))),J=Z.ZP.p(O||(O=(0,b.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  font-weight: 600;\n"]))),L=Z.ZP.p(A||(A=(0,b.Z)(["\n  font-size: 12px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  padding: 0px;\n"]))),U=(0,Z.ZP)(D.rU)(B||(B=(0,b.Z)(["\ndisplay: flex;\nfont-size: 12px;\nmargin-top: 5px;\npadding: 0px 0px; \ncursor: pointer;\ncolor: blue;\nmargin- left: 3px;\n&:hover, : focus {color: red};\ntext-decoration: none;\n"]))),$=Z.ZP.button(N||(N=(0,b.Z)(["\ndisplay: flex;\nfont-size: 12px;\nmargin-top: 5px;\npadding: 0px 0px; \ncursor: pointer;\ncolor: blue;\nmargin- left: 3px;\n&:hover, : focus {color: red;};\nbackground-color: white;\nborder: none;\n"]))),G=Z.ZP.div(E||(E=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n"])));function K(n){var e=n.event,r=(0,x.useState)(!1),t=(0,c.Z)(r,2),i=t[0],a=t[1];return(0,R.jsxs)(V,{children:[(0,R.jsx)(W,{children:e.name}),(0,R.jsx)(L,{children:e.description}),(0,R.jsx)(J,{children:e.organizer}),(0,R.jsx)(H,{children:e.date}),(0,R.jsxs)(G,{children:[(0,R.jsx)($,{onClick:function(){a(!0)},children:"Register"}),(0,R.jsx)(U,{to:"/".concat(e._id),children:"View"})]}),(0,R.jsx)(q,{event_id:e._id,isOpenModalRegistration:i,setIsOpenModalRegistration:a})]})}var Q,T=Z.ZP.ul(I||(I=(0,b.Z)(["\n  width: 1200px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border: 1px solid green;\n  border-radius: 12px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),X=function(n){var e=n.events;return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(T,{children:e.map((function(n){return(0,R.jsx)(K,{event:n},n._id)}))})})},Y=Z.ZP.div(Q||(Q=(0,b.Z)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));function nn(n){var e=n.events;return(0,R.jsx)(Y,{children:e.length>0&&(0,R.jsx)(X,{events:e})})}var en=r(1314);function rn(){var n=(0,x.useState)([]),e=(0,c.Z)(n,2),r=e[0],t=e[1],i=(0,x.useState)(!1),a=(0,c.Z)(i,2),o=a[0],s=a[1];return(0,x.useEffect)((function(){var n=function(){var n=(0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,(0,v.sZ)();case 4:e=n.sent,t(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),_.ZP.error("Please, try loading page again");case 11:return n.prev=11,s(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,R.jsxs)(R.Fragment,{children:[o&&(0,R.jsx)(en.a,{}),(0,R.jsx)(nn,{events:r}),(0,R.jsx)(_.x7,{})]})}}}]);
//# sourceMappingURL=577.f3764e2a.chunk.js.map