webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("div",{staticClass:"nav-wrapper blue"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("\n            Notes Manager\n        ")])],1)])])},staticRenderFns:[]},s={name:"app",components:{Navbar:a("VU/8")(null,i,!1,null,null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},l=a("VU/8")(s,o,!1,null,null,null).exports,r=a("/ocq"),c=a("kxiW"),d=a.n(c),u=(a("881v"),d.a.initializeApp({apiKey:"AIzaSyA1ojIWUvxgasLRHeBR5c9rcUBL4KpQJzI",authDomain:"vue-notemaster.firebaseapp.com",databaseURL:"https://vue-notemaster.firebaseio.com",projectId:"vue-notemaster",storageBucket:"vue-notemaster.appspot.com",messagingSenderId:"666859620773"}).firestore()),v={name:"dashboard",data:function(){return{notes:[]}},created:function(){var t=this;u.collection("notes").orderBy("type").get().then(function(e){e.forEach(function(e){console.log(e.data());var a={id:e.id,title:e.data().title,content:e.data().content,date:e.data().date,type:e.data().type};t.notes.push(a)})})}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("div",{staticClass:"row"},[a("h3",{staticClass:"center-align"},[t._v("Notes")]),t._v(" "),t._l(t.notes,function(e){return a("div",{key:e.id,staticClass:"card hoverable blue col m12"},[a("div",{staticClass:"card-content white-text"},[a("span",{staticClass:"card-title center-align"},[t._v(t._s(e.title))])]),t._v(" "),a("div",{staticClass:"card-action"},[a("div",{staticClass:"left"},[t._v(t._s(e.date))]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"chip"},[t._v(t._s(e.type))]),t._v(" "),a("router-link",{attrs:{to:{name:"view-note",params:{title:e.title}}}},[a("i",{staticClass:"fa fa-eye"})])],1)])])})],2),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[]},f=a("VU/8")(v,p,!1,null,null,null).exports,m={name:"edit-note",data:function(){return{title:null,type:null,content:null,date:null}},beforeRouteEnter:function(t,e,a){u.collection("notes").where("title","==",t.params.title).get().then(function(t){t.forEach(function(t){a(function(e){e.title=t.data().title,e.content=t.data().content,e.date=t.data().date,e.type=t.data().type})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;u.collection("notes").where("title","==",this.$.params.title).get().then(function(e){e.forEach(function(e){t.title=e.data().title,t.content=e.data().content,t.type=e.data().type,t.date=e.data().date})})},updateNote:function(){var t=this;u.collection("notes").where("title","==",this.$route.params.title).get().then(function(e){e.forEach(function(e){e.ref.update({title:t.title,content:t.content,type:t.type,date:new Date(Date.now()).toLocaleString()}).then(function(){t.$router.push({name:"view-note",params:{title:t.title}})})})})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit-note"}},[a("h3",{staticClass:"center-align"},[t._v("Edit Note")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updateNote(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"materialize-textarea",attrs:{required:""},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{type:"text",required:""},domProps:{value:t.type},on:{input:function(e){e.target.composing||(t.type=e.target.value)}}})])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Add Note")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},_=a("VU/8")(m,h,!1,null,null,null).exports;console.log(new Date(Date.now()).toLocaleString());var C={name:"new-note",data:function(){return{title:null,type:null,content:null,date:null}},methods:{saveNote:function(){var t=this;u.collection("notes").add({title:this.title,content:this.content,type:this.type,date:new Date(Date.now()).toLocaleString()}).then(function(e){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-note"}},[a("h3",[t._v("Add Note")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveNote(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),a("label",[t._v("Title")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"materialize-textarea",attrs:{required:""},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),a("label",[t._v("Content")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{type:"text",required:""},domProps:{value:t.type},on:{input:function(e){e.target.composing||(t.type=e.target.value)}}}),t._v(" "),a("label",[t._v("Type")])])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Add Note")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},w=a("VU/8")(C,g,!1,null,null,null).exports,y={name:"view-note",data:function(){return{title:null,type:null,content:null,date:null}},beforeRouteEnter:function(t,e,a){u.collection("notes").where("title","==",t.params.title).get().then(function(t){t.forEach(function(t){a(function(e){e.title=t.data().title,e.content=t.data().content,e.date=t.data().date,e.type=t.data().type})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;u.collection("notes").where("title","==",this.$.params.title).get().then(function(e){e.forEach(function(e){t.title=e.data().title,t.content=e.data().content,t.type=e.data().type,t.date=e.data().date})})},deleteNote:function(){var t=this;confirm("Are you sure to delete note?")&&u.collection("notes").where("title","==",this.$route.params.title).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"view-note"}},[a("h3",{staticClass:"center-align"},[t._v("View Notes")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m12"},[a("div",{staticClass:"card hoverable blue"},[a("div",{staticClass:"card-content  white-text"},[a("span",{staticClass:"card-title center-align"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"right-align"},[t._v(t._s(t.date))]),t._v(" "),a("p",[t._v(t._s(t.content))])]),t._v(" "),a("div",{staticClass:"card-action"},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"right"},[a("span",{staticClass:"arrow"},[a("i",{staticClass:"fa fa-arrow-circle-left fa-2x",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),a("i",{staticClass:"fa fa-trash fa-2x",on:{click:t.deleteNote}})],1),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-note",params:{title:t.title}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)])])])])},staticRenderFns:[]},x=a("VU/8")(y,b,!1,null,null,null).exports;n.a.use(r.a);var N=new r.a({routes:[{path:"/",name:"dashboard",component:f},{path:"/new",name:"new-note",component:w},{path:"/edit/:title",name:"edit-note",component:_},{path:"/:title",name:"view-note",component:x}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:N,components:{App:l},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.a61e3ea45bd296c4f54c.js.map