(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={container:"Contacts_container__1Vrgw",list:"Contacts_list__oFXMG",item:"Contacts_item__QZodr",number:"Contacts_number__2Z0y9",btnRemove:"Contacts_btnRemove__7wb74"}},function(e,t,n){e.exports={form:"Form_form__1OucY",inputContainer:"Form_inputContainer__1Y0dM",label:"Form_label__Q6wzt",btn:"Form_btn__3HDp7"}},,,,,,function(e,t,n){e.exports={container:"SearchForContacts_container__1LtF2",input:"SearchForContacts_input__6RheI",label:"SearchForContacts_label__38JpH"}},,,,function(e,t,n){e.exports={container:"Container_container__vzMCT"}},function(e,t,n){e.exports={title:"Section_title__2ayS8"}},function(e,t,n){},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=(n(21),n(13)),i=n.n(s),l=n(0);var u=function(e){var t=e.children;return Object(l.jsx)("div",{className:i.a.container,children:t})},b=n(16),j=n(5),m=n(6),d=n(24),h=n(14),O=n.n(h);var f=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{className:O.a.title,children:t}),n]})},_=n(8),p=n(3),x=n.n(p);var v=function(e){var t=e.onSubmit,n=Object(a.useState)({name:"",number:""}),c=Object(m.a)(n,2),r=c[0],o=c[1],s=Object(d.a)(),i=Object(d.a)(),u=function(e){var t=e.currentTarget,n=t.name,a=t.value;o((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(_.a)({},n,a))}))},b=function(){o({name:"",number:""})};return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),b()},className:x.a.form,children:[Object(l.jsxs)("div",{className:x.a.inputContainer,children:[Object(l.jsxs)("label",{htmlFor:s,className:x.a.label,children:["Name",Object(l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r.name,onChange:u,id:s,className:x.a.input})]}),Object(l.jsxs)("label",{htmlFor:i,className:x.a.label,children:["Phone",Object(l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:r.number,onChange:u,id:i,className:x.a.input})]})]}),Object(l.jsx)("button",{type:"submit",className:x.a.btn,children:"Add contact"})]})},C=n(2),N=n.n(C),g=function(e){var t=e.contacts,n=e.title,a=e.onDeleteContact,c=e.children;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:N.a.container,children:[Object(l.jsxs)("h2",{className:N.a.title,children:[n," "]}),c,Object(l.jsx)("ul",{className:N.a.list,children:t.map((function(e){var t=e.id,n=e.name,c=e.number;return Object(l.jsxs)("li",{className:N.a.item,children:[Object(l.jsx)("span",{className:N.a.marker}),Object(l.jsxs)("p",{className:N.a.name,children:[n,":"]}),Object(l.jsx)("p",{className:N.a.number,children:c}),Object(l.jsx)("button",{type:"button",className:N.a.btnRemove,onClick:function(){return a(t)},children:"Delete"})]},t)}))})]})})},S=n(9),F=n.n(S),w=function(e){var t=e.onChange,n=e.value,a=e.filterId,c=void 0===a?Object(d.a)():a;return Object(l.jsx)("div",{className:F.a.container,children:Object(l.jsxs)("label",{htmlFor:c,className:F.a.label,children:["Find contacts by name",Object(l.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:t,id:c,className:F.a.input})]})})},y=n(15),A=n.n(y);var z=function(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("Contacts")))&&void 0!==e?e:[]})),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(m.a)(r,2),s=o[0],i=o[1];Object(a.useEffect)((function(){localStorage.setItem("Contacts",JSON.stringify(n))}),[n]);var u=s.toLowerCase(),h=n.filter((function(e){return e.name.toLowerCase().includes(u)}));return Object(l.jsxs)(f,{className:A.a.container,title:"Phonebook",children:[Object(l.jsx)(v,{onSubmit:function(e){var t=Object(j.a)({id:Object(d.a)()},e),a=n.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}));a?alert("".concat(e.name," is already in contacts")):c((function(e){return[t].concat(Object(b.a)(e))}))}}),Object(l.jsx)(g,{contacts:h,title:"Contacts",onDeleteContact:function(e){c(n.filter((function(t){return t.id!==e})))},children:Object(l.jsx)(w,{onChange:function(e){i(e.currentTarget.value.toLowerCase())},value:s})})]})};var k=function(){return Object(l.jsx)(u,{children:Object(l.jsx)(z,{})})};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.4deab1c7.chunk.js.map