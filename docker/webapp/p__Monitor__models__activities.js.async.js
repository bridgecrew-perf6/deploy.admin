(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{QI1U:function(e,t,a){"use strict";a.r(t);var s=a("p0pE"),n=a.n(s),r=a("d6i3"),c=a.n(r),i=a("dCQc");t["default"]={namespace:"activities",state:{list:[]},effects:{fetchList:c.a.mark(function e(t,a){var s,n,r;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=a.call,n=a.put,e.next=3,s(i["Yb"]);case 3:return r=e.sent,e.next=6,n({type:"saveList",payload:Array.isArray(r)?r:[]});case 6:case"end":return e.stop()}},e)})},reducers:{saveList:function(e,t){return n()({},e,{list:t.payload.datas})}}}}}]);