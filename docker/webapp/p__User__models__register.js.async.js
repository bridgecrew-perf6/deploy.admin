(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[86],{"0Fdr":function(e,a,t){"use strict";t.r(a);var n=t("p0pE"),r=t.n(n),c=t("d6i3"),o=t.n(c),s=t("7DNP"),u=t("dCQc"),l=t("34ay"),i=t("HZnN"),d=t("axUw");a["default"]={namespace:"register",state:{data:{}},effects:{target:o.a.mark(function e(a,t){var n,r,c,s,l;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,t.put,e.next=4,c(u["Rc"],n);case 4:s=e.sent,l={},0===s.code&&(l=s.data,r(l));case 7:case"end":return e.stop()}},e)}),getConfig:o.a.mark(function e(a,t){var n,r,c,s,l;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,t.put,e.next=4,c(u["rd"],n);case 4:s=e.sent,l={},0===s.code&&(l=s.data,r(l));case 7:case"end":return e.stop()}},e)}),setPassword:o.a.mark(function e(a,t){var n,r,c,s;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,t.put,console.log(n),e.next=5,c(u["Ud"],n);case 5:s=e.sent,r(s);case 7:case"end":return e.stop()}},e)}),login:o.a.mark(function e(a,t){var n,r,c,i,p,w,f,g,x,b,h,k,y,v,m;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,i=t.put,e.next=4,c(u["y"],n);case 4:return p=e.sent,console.log("=======29====",p),w=p.data,console.log("====response31===",w),e.next=10,i({type:"changeLoginStatus",payload:w});case 10:if(200!==w.code){e.next=30;break}if(f=w.loginuser,g=w.logintoken,x=w.loginrole,b=w.loginroleId,h=w.txFlag,Object(l["d"])(f,g,x,b,h),k=new URL(window.location.href),y=Object(d["a"])(),v=y.redirect,!v){e.next=25;break}if(m=new URL(v),m.origin!==k.origin){e.next=23;break}v=v.substr(k.origin.length),v.match(/^\/.*#/)&&(v=v.substr(v.indexOf("#")+1)),e.next=25;break;case 23:return window.location.href=v,e.abrupt("return");case 25:return e.next=27,i(s["routerRedux"].replace(v||"/"));case 27:window.location.reload(),e.next=31;break;case 30:r(w);case 31:case"end":return e.stop()}},e)}),submit:o.a.mark(function e(a,t){var n,r,c,s;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,c=t.put,e.next=4,r(u["ob"],n);case 4:return s=e.sent,e.next=7,c({type:"registerHandle",payload:s});case 7:case"end":return e.stop()}},e)}),getRandom:o.a.mark(function e(a,t){var n,r,c,s;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,t.put,e.next=4,c(u["yb"],n);case 4:s=e.sent,r(s);case 6:case"end":return e.stop()}},e)})},reducers:{registerHandle:function(e,a){var t=a.payload;return Object(l["c"])("user"),Object(i["b"])(),r()({},e,{data:t})},save:function(e,a){return r()({},e,{data:a.payload})},changeLoginStatus:function(e,a){var t=a.payload;return r()({},e,{status:t.code,type:"account"})}}}}}]);