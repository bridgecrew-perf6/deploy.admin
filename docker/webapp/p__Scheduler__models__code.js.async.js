(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[80],{M13l:function(a,e,t){"use strict";t.r(e);var n=t("p0pE"),c=t.n(n),r=t("d6i3"),s=t.n(r),o=t("dCQc");e["default"]={namespace:"code",state:{data:{list:[],pagination:{}},console:[],spt:[]},effects:{fetch:s.a.mark(function a(e,t){var n,c,r,l,p,u;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,l=t.put,a.next=4,r(o["dc"],n);case 4:return p=a.sent,u={},0===p.code&&(u=p.data),a.next=9,l({type:"save",payload:Array.isArray(u)?u:[]});case 9:c&&c();case 10:case"end":return a.stop()}},a)}),list:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(o["dc"],n);case 4:l=a.sent,c(l);case 6:case"end":return a.stop()}},a)}),add:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(o["C"],n);case 4:l=a.sent,console.log("response====",l),c(l);case 7:case"end":return a.stop()}},a)}),set:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(o["Ld"],n);case 4:l=a.sent,c(l);case 6:case"end":return a.stop()}},a)}),remove:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(o["W"],n);case 4:l=a.sent,c(l);case 6:case"end":return a.stop()}},a)}),testCode:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,console.log("=====91====",n),a.next=5,r(o["ee"],n);case 5:l=a.sent,console.log("====93===",l),c(l);case 8:case"end":return a.stop()}},a)}),jshelp:s.a.mark(function a(e,t){var n,c,r,l;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.callback,c=e.payload,r=t.call,t.put,a.next=4,r(o["Nb"],c);case 4:l=a.sent,n&&n(l);case 6:case"end":return a.stop()}},a)}),TestScriptApi:s.a.mark(function a(e,t){var n,c,r,l,p,u,i,d;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return e.payload,e.callback,n=t.call,c=t.put,a.next=4,n(o["s"]);case 4:for(i in r=a.sent,l=[],p=Object.keys(r.datas),u=[],r.datas)l.push(r.datas[i]);for(d=0;d<l.length;d++)u.push("".concat(p[d],":").concat(l[d]));return console.log(u),a.next=13,c({type:"saveApi",payload:Array.isArray(u)?u:[]});case 13:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){return c()({},a,{data:e.payload})},saveConsole:function(a,e){return c()({},a,{console:e.payload})},saveApi:function(a,e){return c()({},a,{spt:e.payload})}}}}}]);