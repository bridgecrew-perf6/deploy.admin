(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{"8yED":function(e,a,n){"use strict";n.r(a);var t=n("p0pE"),c=n.n(t),r=n("d6i3"),s=n.n(r),p=n("dCQc");a["default"]={namespace:"yxxx",state:{data:{list:[],pagination:{}}},effects:{fetch:s.a.mark(function e(a,n){var t,c,r,o;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.payload,c=n.call,r=n.put,e.next=4,c(p["pd"],t);case 4:return o=e.sent,e.next=7,r({type:"save",payload:o});case 7:case"end":return e.stop()}},e)}),WebAppFetch:s.a.mark(function e(a,n){var t,c,r,o;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.payload,c=a.callback,r=n.call,n.put,e.next=4,r(p["nd"],t);case 4:o=e.sent,c(o);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return console.log("====action===",a),c()({},e,{data:a.payload})}}}}}]);