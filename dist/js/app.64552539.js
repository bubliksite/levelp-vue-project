(function(e){function t(t){for(var n,i,u=t[0],c=t[1],a=t[2],d=0,p=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,a||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=r("b1e0"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.users?r("div",{staticClass:"card"},[r("h1",[e._v("Level UP. Final Vue Project")]),r("Info",{attrs:{user:e.users[e.currentId-1]}}),r("div",{staticClass:"card__steps"},e._l(e.users,(function(t){return r("div",{key:t.id,staticClass:"step",class:{active:t.id===e.currentId,prev:t.id<e.currentId,next:t.id>e.currentId},on:{click:function(r){return e.changeIndex(t.id)}}},[r("div",{staticClass:"step__number"},[e._v(e._s(t.id))]),r("div",{staticClass:"step__title"},[e._v(e._s(t.username))])])})),0),r("div",{staticClass:"footer"},[r("div",{staticClass:"card__buttons"},[r("button",{staticClass:"outline",attrs:{disabled:1===e.currentId,type:"button"},on:{click:e.pressBack}},[r("div",[r("BIconArrowLeftCircle",{attrs:{"font-size":"1.4rem"}}),e._v(" "),r("span",[e._v("Back")])],1)]),r("button",{attrs:{type:"button"},on:{click:e.pressForward}},[r("div",[r("span",[e._v(e._s(e.currentId===e.users.length?"Again":"Forward"))]),e.currentId===e.users.length?r("BIconArrowRepeat",{attrs:{"font-size":"1.4rem"}}):r("BIconArrowRightCircle",{attrs:{"font-size":"1.4rem"}})],1)])]),r("div",{staticClass:"card__random"},[r("BIconShuffle",{on:{click:e.pressRandom}})],1)])],1):e._e()},i=[],u=r("5530"),c=r("2f62"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"info"},[r("ul",[r("li",[r("span",[r("BIconHash")],1),r("p",[e._v(e._s(e.user.id))])]),r("li",{staticClass:"person"},[r("span",[r("BIconPerson")],1),e._v(e._s(e.user.name)+" ")]),r("li",[r("span",[r("BIconGeoAlt")],1),r("p",[e._v(e._s(e.user.address.city))])])]),r("ul",[r("li",[r("span",[r("BIconEnvelope")],1),r("a",{attrs:{href:"mailto:"+e.user.email}},[e._v(e._s(e.user.email))])]),r("li",[r("span",[r("BIconTelephone")],1),r("a",{attrs:{href:"tel:"+e.user.phone}},[e._v(e._s(e.user.phone))])]),r("li",[r("span",[r("BIconGlobe")],1),r("a",{attrs:{href:e.user.website}},[e._v(e._s(e.user.website))])])])])},l=[],d={name:"Info",props:{user:Object}},p=d,f=r("2877"),h=Object(f["a"])(p,a,l,!1,null,"187a8e54",null),v=h.exports,_={name:"App",components:{Info:v},data:function(){return{currentId:1}},computed:Object(u["a"])({},Object(c["b"])({users:function(e){return e.users}})),mounted:function(){this.$store.dispatch("getUsers")},methods:{changeIndex:function(e){this.currentId=e},pressBack:function(){this.currentId>1&&(this.currentId-=1)},pressForward:function(){this.currentId<this.users.length?this.currentId+=1:this.currentId===this.users.length&&(this.currentId=1)},pressRandom:function(){this.currentId=Math.floor(10*Math.random()/2+1),console.log(this.currentId)}}},b=_,m=Object(f["a"])(b,o,i,!1,null,null,null),I=m.exports;r("d3b7"),r("fb6a");n["a"].use(c["a"]);var g="https://jsonplaceholder.typicode.com/users",y=new c["a"].Store({state:{users:null,isLoading:!1,error:null},mutations:{getUsersStart:function(e){e.isLoading=!0,e.users=null},getUsersSuccess:function(e,t){e.isLoading=!1,e.users=t}},actions:{getUsers:function(e){return new Promise((function(){e.commit("getUsersStart"),fetch(g).then((function(t){t.json().then((function(t){return e.commit("getUsersSuccess",t.slice(0,5))}))}))}))}},modules:{}});r("f843");n["a"].config.productionTip=!1,n["a"].use(s["a"]),new n["a"]({store:y,render:function(e){return e(I)}}).$mount("#app")},f843:function(e,t,r){}});
//# sourceMappingURL=app.64552539.js.map