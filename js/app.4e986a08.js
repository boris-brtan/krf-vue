(function(e){function t(t){for(var r,a,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({donation:"donation",user:"user"}[e]||e)+"."+{donation:"0f2b32b5",user:"947dd86c"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={donation:1,user:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({donation:"donation",user:"user"}[e]||e)+"."+{donation:"ad3db9ae",user:"f7198c68"}[e]+".css",o=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2de2":function(e,t,n){"use strict";var r=n("f04d"),a=n.n(r);a.a},"312b":function(e,t,n){},"3ffe":function(e,t,n){"use strict";var r=n("312b"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isAuthed?n("md-app",[n("md-app-toolbar",{staticClass:"md-primary"},[e.menuVisible?e._e():n("md-button",{staticClass:"md-icon-button",on:{click:e.toggleMenu}},[n("md-icon",[e._v("menu")])],1),n("span",{staticClass:"md-title"},[e._v("Slovenské darovanie krvi")])],1),n("md-app-drawer",{attrs:{"md-active":e.menuVisible,"md-persistent":"full","md-swipeable":""},on:{"update:mdActive":function(t){e.menuVisible=t},"update:md-active":function(t){e.menuVisible=t},"md-opened":e.handleTransitionEnd,"md-closed":e.handleTransitionEnd}},[n("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[n("div",{staticClass:"md-toolbar-section-end"},[n("md-button",{staticClass:"md-icon-button md-dense",on:{click:e.toggleMenu}},[n("md-icon",[e._v("keyboard_arrow_left")])],1)],1)]),n("md-list",[n("md-list-item",{attrs:{to:"/"}},[n("md-icon",[e._v("list")]),n("span",{staticClass:"md-list-item-text"},[e._v("Odbery")])],1),n("md-list-item",{attrs:{to:"/user"}},[n("md-icon",[e._v("person")]),n("span",{staticClass:"md-list-item-text"},[e._v("User")])],1),n("md-list-item",{on:{click:e.clearAuth}},[n("md-icon",[e._v("power_settings_new")]),n("span",{staticClass:"md-list-item-text"},[e._v("Ohlásiť sa")])],1)],1)],1),n("md-app-content",[n("router-view")],1)],1):n("Auth")],1)},o=[],s=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"md-layout",attrs:{novalidate:""},on:{submit:function(e){e.preventDefault()}}},[n("md-dialog",{attrs:{"md-active":!e.isActivated}},[n("md-dialog-title",[e._v("Aktivácia")]),n("md-dialog-content",[n("md-field",{class:e.getValidationClass("user")},[n("label",{attrs:{for:"user"}},[e._v("Užívateľské číslo")]),n("md-input",{attrs:{name:"user",id:"user",disabled:e.sending},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),e.$v.user.required?e.$v.user.minlength?e._e():n("span",{staticClass:"md-error"},[e._v("Nesprávny formát čísla")]):n("span",{staticClass:"md-error"},[e._v("Užívateľské číslo je nutné zadať")])],1)],1),n("md-dialog-actions",[n("md-button",{staticClass:"md-primary",attrs:{type:"button",disabled:e.sending||e.$v.user.$invalid},on:{click:e.handleActivate}},[e._v(" Preskočiť ")]),n("md-button",{staticClass:"md-primary",attrs:{type:"button",disabled:e.sending||e.$v.user.$invalid}},[e._v(" Aktivovať ")])],1)],1),n("md-dialog",{attrs:{"md-active":e.isActivated&&!e.isAuthed}},[n("form",{staticClass:"md-layout",attrs:{novalidate:""},on:{submit:function(e){e.preventDefault()}}},[n("md-dialog-title",[e._v("Prihlásenie")]),n("md-dialog-content",[n("md-field",{class:e.getValidationClass("password")},[n("label",{attrs:{for:"password"}},[e._v("Heslo")]),n("md-input",{attrs:{name:"password",id:"password",type:"password",disabled:e.sending},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e.$v.password.required?e.$v.password.minlength?e._e():n("span",{staticClass:"md-error"},[e._v("Nesprávny formát hesla")]):n("span",{staticClass:"md-error"},[e._v("Heslo je nutné zadať")])],1)],1),n("md-dialog-actions",[n("md-button",{staticClass:"md-primary",attrs:{type:"button",disabled:e.sending||e.$v.password.$invalid},on:{click:e.handleLogin}},[e._v(" Prihlásiť sa ")])],1)],1)])],1)},u=[],c=n("1dce"),l=n("b5ae"),d=n("2f62"),p=n("0b26"),f=n.n(p);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={name:"Auth",mixins:[c["validationMixin"]],data:function(){return{user:null,password:null,sending:!1}},validations:{user:{required:l["required"],minLength:Object(l["minLength"])(10),maxLength:Object(l["maxLength"])(10)},password:{required:l["required"],minLength:Object(l["minLength"])(4)}},computed:Object(d["c"])(["isAuthed","isActivated","getDonations"]),methods:h({},Object(d["b"])(["activate","activated","login"]),{handleActivate:function(){this.activated(this.user)},handleLogin:function(){this.login({user:this.user,pass:f()(this.password)})},getValidationClass:function(e){var t=this.$v[e];if(t)return{"md-invalid":t.$invalid&&t.$dirty}}})},g=v,b=(n("3ffe"),n("2877")),w=Object(b["a"])(g,i,u,!1,null,"181f52d3",null),O=w.exports;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={name:"PersistentFull",components:{Auth:O},data:function(){return{menuVisible:!1}},methods:j({},Object(d["b"])(["clearAuth"]),{toggleMenu:function(){this.menuVisible=!this.menuVisible},handleTransitionEnd:function(){clearTimeout(this.drawerTimeout),this.drawerTimeout=setTimeout((function(){return window.dispatchEvent(new Event("resize"))}),100)}}),computed:Object(d["c"])(["isAuthed"])},P=k,x=(n("2de2"),Object(b["a"])(P,a,o,!1,null,"435cfd18",null)),D=x.exports,_=n("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var R=n("8c4f"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-list",e._l(e.getDonations,(function(t){return n("md-list-item",{key:t.Id,on:{click:function(n){return e.handleDonation(t.Id)}}},[n("span",{staticClass:"md-list-item-text"},[e._v(" "+e._s(t.Pracovisko)+" ")]),n("span",{staticClass:"md-list-item-text"},[e._v(" "+e._s(new Date(t.DatumOdberu).toLocaleDateString())+" ")]),n("span",{staticClass:"md-list-item-text"},[e._v(" "+e._s(t.TypOdberu)+" "),n("br"),e._v(" "+e._s(t.MnozstvoMl)+" ml ")])])})),1)},S=[],T=(n("3ca3"),n("ddb0"),n("96cf"),n("1da1"));function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $={name:"home",components:{},computed:Object(d["c"])(["getDonations","getToken","getSettings","getUserData","getUser","getPass"]),methods:E({},Object(d["b"])(["fetchDonations","fetchDonation","fetchDonationResult","fetchSettingsParams","fetchUserData","login"]),{handleDonation:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([this.fetchDonation({token:this.getToken,id:t}),this.fetchDonationResult({token:this.getToken,id:t})]);case 3:this.$router.push("/donation/"+t),e.next=13;break;case 6:return e.prev=6,e.t0=e["catch"](0),e.next=10,this.login({user:this.getUser,pass:this.getPass});case 10:return e.next=12,Promise.all([this.fetchDonation({token:this.getToken,id:t}),this.fetchDonationResult({token:this.getToken,id:t})]);case 12:this.$router.push("/donation/"+t);case 13:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}()}),mounted:function(){0===this.getSettings.length&&this.fetchSettingsParams(this.getToken),0===this.getDonations.length&&this.fetchDonations(this.getToken),null===this.getUserData.Meno&&this.fetchUserData(this.getToken)}},U=$,L=(n("972f"),Object(b["a"])(U,A,S,!1,null,"584d0dcb",null)),N=L.exports;r["default"].use(R["a"]);var K=[{path:"/",name:"donations",component:N},{path:"/user",name:"user",component:function(){return n.e("user").then(n.bind(null,"1511"))}},{path:"/donation/:id",name:"donation",component:function(){return n.e("donation").then(n.bind(null,"bbec"))}}],M=new R["a"]({mode:"hash",routes:K}),V=M,q=(n("99af"),"https://krv.roxor.cloud/API"),I={auth:{activate:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(q+"/Authentication/ActivateRequest",{method:"POST",headers:{evc:t},body:JSON.stringify({evc:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(q+"/Authentication/login",{headers:{evc:t,pin:n}});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},user:{home:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(q+"/darca/Vitajte",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),card:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(q+"/darca/PreukazDarcu",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),donations:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(q+"/darca/odber",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),donation:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(q+"/darca/odber/".concat(n),{headers:{"X-EKDToken":t}});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),donationResult:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(q+"/darca/odber/".concat(n,"/lvko"),{headers:{"X-EKDToken":t}});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),donationResultParam:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(q+"/darca/lvko/".concat(r,"/").concat(n),{headers:{"X-EKDToken":t}});case 2:return a=e.sent,e.next=5,a.json();case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},settings:{params:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(q+"/ciselniky/ParametreKO",{headers:{"X-EKDToken":t}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},F=I,X=function(){return{user:null,token:null,activated:!1,pass:null}},z=X(),B={getToken:function(e){return e.token},getActivated:function(e){return e.activated},getUser:function(e){return e.user},getPass:function(e){return e.pass},isAuthed:function(e){return B.isActivated(e)&&null!==e.token},isActivated:function(e){return e.activated&&null!==e.user}},J={activate:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,F.auth.activate(n);case 3:r("setActivated",n);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),activated:function(e,t){var n=e.commit;n("setActivated",t)},login:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.user,o=n.pass,e.next=4,F.auth.login(a,o);case 4:s=e.sent,r("setPass",o),r("setToken",s);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),clearAuth:function(e){var t=e.commit;t("clearAuth")}},H={setToken:function(e,t){return e.token=t},setPass:function(e,t){return e.pass=t},setActivated:function(e,t){return Object.assign(e,{user:t,activated:!0})},clearAuth:function(e){return Object.assign(e,X())}},Z={state:z,getters:B,actions:J,mutations:H};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W={TerminNasledOdberu:null,KrvnaSkupina:null,Fenotyp:null,FenotypAsString:null,Pohlavie:null,Meno:null,Priezvisko:null,RodneCislo:null,DomovskePracovisko:null,PocetOdberov:null,KrvnaSkupinaPopis:null,FenotypAsText:null,Poistovna:null,KrvnaSkupinaZaklad:null},Y={getUserData:function(e){return e}},ee={fetchUserData:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,F.user.home(n);case 4:return a=e.sent,e.next=7,F.user.card(n);case 7:o=e.sent,r("setUserData",Q({},a,{},o)),e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t,n){return e.apply(this,arguments)}return t}()},te={setUserData:function(e,t){return Object.assign(e,Q({},t))}},ne={state:W,getters:Y,actions:ee,mutations:te},re={info:{},result:[],param:[]},ae={getDonationInfo:function(e){return e.info},getDonationResult:function(e){return e.result},getDonationParam:function(e){return e.param}},oe={fetchDonation:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.token,o=n.id,e.next=4,F.user.donation(a,o);case 4:s=e.sent,r("setDonationInfo",s);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),fetchDonationResult:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.token,o=n.id,e.next=4,F.user.donationResult(a,o);case 4:s=e.sent,r("setResult",s);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),fetchDonationParam:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.token,o=n.id,s=n.paramId,e.next=4,F.user.donationResultParam(a,o,s);case 4:i=e.sent,r("setParam",i);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},se={setDonationInfo:function(e,t){e.info=t},setResult:function(e,t){return e.result=t},setParam:function(e,t){return e.param=t}},ie={state:re,getters:ae,actions:oe,mutations:se},ue={donations:[]},ce={getDonations:function(e){return e.donations}},le={fetchDonations:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,F.user.donations(n);case 3:a=e.sent,r("setDonations",a);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},de={setDonations:function(e,t){return e.donations=t}},pe={state:ue,getters:ce,actions:le,mutations:de},fe={params:[]},me={getSettings:function(e){return e.params}},he={fetchSettingsParams:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,F.settings.params(n);case 3:a=e.sent,r("setSettingsParams",a);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},ve={setSettingsParams:function(e,t){return e.params=t}},ge={state:fe,getters:me,actions:he,mutations:ve};r["default"].use(d["a"]);var be=new d["a"].Store({modules:{auth:Z,user:ne,donation:ie,donations:pe,settings:ge}}),we=n("43f9"),Oe=n.n(we);n("51de"),n("e094");r["default"].config.productionTip=!1,r["default"].use(Oe.a),window.onbeforeunload=function(){localStorage.state=JSON.stringify(be.state)},new r["default"]({router:V,store:be,render:function(e){return e(D)}}).$mount("#app")},"972f":function(e,t,n){"use strict";var r=n("d6c9"),a=n.n(r);a.a},d6c9:function(e,t,n){},f04d:function(e,t,n){}});
//# sourceMappingURL=app.4e986a08.js.map