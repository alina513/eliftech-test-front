"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[970],{8346:function(n,e,r){r.d(e,{Dx:function(){return o},iR:function(){return u},sZ:function(){return c}});var t=r(5861),a=r(4687),i=r.n(a),s=r(8),c=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("https://eliftech-test-back-vkh9.onrender.com/api/events/");case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a,c,u,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.event_id,t=e.fullname,a=e.email,c=e.birth,u=e.source,n.next=3,s.Z.post("https://eliftech-test-back-vkh9.onrender.com/api/members/",{event_id:r,fullname:t,email:a,birth:c,source:u});case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("https://eliftech-test-back-vkh9.onrender.com/api/members/");case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1970:function(n,e,r){r.r(e),r.d(e,{default:function(){return B}});var t,a,i,s,c=r(5861),u=r(9439),o=r(4687),p=r.n(o),d=r(168),l=r(5867),f=l.ZP.div(t||(t=(0,d.Z)(["\n  width: 200px;\n  border: 1px solid green;\n  border-radius: 12px;\n  padding: 10px;\n"]))),x=l.ZP.h2(a||(a=(0,d.Z)(["\n  font-size: 24px;\n"]))),h=l.ZP.p(i||(i=(0,d.Z)(["\n  font-size: 12px;\n"]))),v=r(184);function g(n){var e=n.participant;return(0,v.jsxs)(f,{children:[(0,v.jsx)(x,{children:e.fullname}),(0,v.jsx)(h,{children:e.email})]})}var m,Z,b,j,w,k,P,y=l.ZP.ul(s||(s=(0,d.Z)(["\n  width: 1200px;\n  padding: 20px;\n  // border: 1px solid green;\n  // border-radius: 12px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),C=function(n){var e=n.participants;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(y,{children:e.map((function(n){return(0,v.jsx)(g,{participant:n},n._id)}))})})},_=r(1087),z=(0,l.ZP)(_.rU)(m||(m=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  width: 300px;\n  height: 60px;\n\n  color: #121417;\n  font-size: 18px;\n  font-weight: 700;\n  background-color: #f4c550;\n  text-decoration: none;\n\n  border-radius: 12px;\n  &:hover,\n  &:focus {\n    background-color: #f4c8ba;\n  }\n"]))),I=l.ZP.div(Z||(Z=(0,d.Z)(["\n  display: block;\n"]))),H=l.ZP.div(b||(b=(0,d.Z)(["\n  padding: 30px;\n"]))),S=l.ZP.h2(j||(j=(0,d.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  font-weight: 600;\n"]))),D=l.ZP.label(w||(w=(0,d.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  font-weight: 600;\n  margin-right: 10px;\n"]))),F=l.ZP.input(k||(k=(0,d.Z)(["\n  margin-left: 10px;\n  border: 1px solid green;\n  padding: 5px;\n  border-radius: 15px;\n"]))),L=l.ZP.div(P||(P=(0,d.Z)([""]))),U=function(n){var e=n.onChangeInputParticipentsHandler;return(0,v.jsxs)(L,{children:[(0,v.jsx)(S,{children:"Sort participants"}),(0,v.jsxs)(D,{children:["by fullname",(0,v.jsx)(F,{onChange:function(n){return e(n,"fullname")}})]}),(0,v.jsxs)(D,{children:["by email",(0,v.jsx)(F,{onChange:function(n){return e(n,"email")}})]})]})};function E(n){var e=n.participants,r=n.onChangeInputParticipentsHandler;return(0,v.jsxs)(H,{children:[(0,v.jsx)(U,{onChangeInputParticipentsHandler:r}),e.length>0&&(0,v.jsxs)(I,{children:[(0,v.jsx)(C,{participants:e}),(0,v.jsx)(z,{to:"/",children:"Go to events"})]})]})}var G=r(8346),O=r(2791),R=r(5218),q=r(7689),A=r(1314);function B(){var n=(0,q.UO)().eventId,e=(0,O.useState)([]),r=(0,u.Z)(e,2),t=r[0],a=r[1],i=(0,O.useState)([]),s=(0,u.Z)(i,2),o=s[0],d=s[1],l=(0,O.useState)(!1),f=(0,u.Z)(l,2),x=f[0],h=f[1];(0,O.useEffect)((function(){var e=function(){var e=(0,c.Z)(p().mark((function e(){var r,t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,G.Dx)();case 4:r=e.sent,t=r.filter((function(e){return e.event_id===n})),a(t),d(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),R.ZP.error("Please, try loading page again");case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);return(0,v.jsxs)(v.Fragment,{children:[x&&(0,v.jsx)(A.a,{}),(0,v.jsx)(E,{participants:o,onChangeInputParticipentsHandler:function(n,e){var r=n.target.value.toLowerCase().trim();if(""!==r){var a=t.filter((function(n){return n[e].toLowerCase().includes(r)}));d(a)}else d(t)}}),(0,v.jsx)(R.x7,{})]})}}}]);
//# sourceMappingURL=970.b2584cc7.chunk.js.map