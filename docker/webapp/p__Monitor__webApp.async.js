(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{XaXn:function(e,t,a){"use strict";a.r(t);a("2qtc");var n=a("kLXV"),l=(a("bbsP"),a("/wGt")),s=(a("DjyN"),a("NUBc")),o=(a("IzEo"),a("bx4M")),i=(a("OaEy"),a("2fM7")),c=(a("/zsF"),a("PArb")),r=(a("14J3"),a("BMrR")),p=(a("P2fV"),a("NJEC")),d=(a("jCWc"),a("kPKH")),u=(a("+L6B"),a("2/Rp")),m=(a("Pwec"),a("CtXQ")),h=(a("+BJd"),a("mr32")),b=(a("bP8k"),a("gFTJ")),v=(a("miYZ"),a("tsqr")),A=a("2Taf"),y=a.n(A),E=a("vZ4D"),f=a.n(E),k=a("l4Ni"),g=a.n(k),w=a("ujKo"),S=a.n(w),C=a("MhPg"),x=a.n(C),W=(a("y8nQ"),a("Vl3Y")),T=(a("sRBo"),a("kaz8")),X=(a("5NDa"),a("5rEg")),D=a("q1tI"),Z=a.n(D),F=a("MuoO"),P=(a("Y2fQ"),a("+kNj")),z=a("Mz3c"),O=a("yahW"),Y=a("hbCE"),L=a("PlbF"),_=a("Y+p1"),K=a.n(_),N=a("aWA2"),B=a.n(N),M=a("f82a"),Q=a.n(M),J=a("AMvv"),I=a("P4xi"),R=a("6Hmz"),U=(Z.a.lazy(function(){return Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"3yow"))}),P["a"].Description,X["a"].Search,X["a"].TextArea,T["a"].Group,W["a"].Item),j=R["a"].YXJK_WebAppFX_RZPZ_YXXX.key,V=R["a"].YXJK_WebAppFX_CSPZ_CX.key,q=R["a"].YXJK_WebAppFX_SzAcl_CX.key,G=R["a"].YXJK_WebAppFX_BDLY_CX.key,H=R["a"].YXJK_WebAppFX_RZPZ_CX.key,$=R["a"].YXJK_WebAppFX_RZPZ_DEL.key,ee=["\u7f51\u7ad9","\u4ea4\u6613"],te=function(e){function t(){var e,a;y()(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return a=g()(this,(e=S()(t)).call.apply(e,[this].concat(l))),a.state={checkedList:ee,indeterminate:!0,div3:"none",div1:"block",div2:"none",div4:"none",div5:"none",checkAll:!1,visible:!1,Drawervisible:!1,plainOptions:[],WebAppUrl:"",mess:"",wv:"",WebName:"",WebTags:"",urltags:"",WebAppStatue:"",WebAppTotalAmount:0,startwv:"",TotalAmount:0,SXAmount:0,YCAmount:0,ZCAmount:0,KZFAmount:0,BQvisible:!1,AddBQvisible:"",noTitleKey:"service",name:"",type:"",status:"",app:"",XZcheckedList:"",YsplainOptions:[],UrlPlainOptions:[],webappmap:{}},a.Tags=function(){var e=a.props.dispatch;e({type:"webApp/Tagsfetch",payload:{app:null,type:null},callback:function(e){console.log("===e====11==",e),0==e.code?a.setState({plainOptions:e.data}):v["a"].error("\u67e5\u8be2\u6807\u7b7e\u6570\u636e\u5931\u8d25\uff01")}})},a.showDrawer=function(e,t){console.log("===url==",t),a.setState({Drawervisible:!0,WebAppUrl:t});var n=[];"acl"==e?(a.setState({mess:"\u8bbe\u7f6eACL"}),n.push(Z.a.createElement(z["a"],{url:t,key:Math.random()}))):"bdly"==e?(a.setState({mess:"\u672c\u5730\u8def\u7531"}),n.push(Z.a.createElement(O["a"],{url:t,key:Math.random()}))):"cspz"==e?(a.setState({mess:"\u53c2\u6570\u914d\u7f6e"}),n.push(Z.a.createElement(J["a"],{msg:"WebApp",url:t,key:Math.random()}))):"rzpz"==e?(a.setState({mess:"\u65e5\u5fd7\u914d\u7f6e"}),n.push(Z.a.createElement(Y["a"],{url:t,key:Math.random()}))):"yxxx"==e&&(a.setState({mess:"\u8fd0\u884c\u4fe1\u606f"}),n.push(Z.a.createElement(L["a"],{url:t,msg:"webapp",key:Math.random()}))),a.setState({info:n})},a.onClose=function(){a.setState({Drawervisible:!1})},a.showModal=function(e,t,n,l,s){a.setState({BQvisible:!0,name:e,type:t,status:n,app:l,optionsWithDisabled:s,XZcheckedList:s})},a.handleOk=function(e){a.setState({BQvisible:!1});var t=a.props,n=t.form.validateFieldsAndScroll,l=t.dispatch;n(function(e,t){var n=a.state.XZcheckedList;console.log("===optionsWithDisabled==",n),console.log("===values==",t),"undefined"===n||void 0==n||0==n.length?(console.log("-----"),l({type:"webApp/add",payload:{app:"app",type:"WebApp",name:a.state.name,value:" ",status:0,tags:t.checkbox?t.checkbox:[]},callback:function(e){0===e.code?v["a"].success("\u65b0\u589e\u6807\u7b7e\u6210\u529f\uff01"):v["a"].error("\u65b0\u589e\u6807\u7b7e\u5931\u8d25\uff01"),a.handleSearch()}})):l({type:"webApp/update",payload:{app:a.state.app,name:a.state.name,status:1*a.state.status,type:a.state.type,value:" ",tags:t.checkbox?t.checkbox:[]},callback:function(e){0===e.code?v["a"].success("\u4fee\u6539\u6807\u7b7e\u6210\u529f\uff01"):v["a"].error("\u4fee\u6539\u6807\u7b7e\u5931\u8d25\uff01"),a.handleSearch()}})})},a.handleCancel=function(e){console.log(e),a.setState({BQvisible:!1})},a.AddTagsshowModal=function(){a.setState({AddBQvisible:!0})},a.AddTagshandleOk=function(e){console.log(e),a.setState({AddBQvisible:!1});var t=a.props,n=t.form.validateFieldsAndScroll;t.dispatch;n(function(e,t){if(console.log("==values==",t),"undefined"!==t.AddCheckbox&&void 0!==t.AddCheckbox&&"null"!==t.AddCheckbox){var n=new Array;n=a.state.plainOptions,console.log("---this.state.plainOptions---",n),n.push(t.AddCheckbox),console.log("---ar---",n),a.setState({plainOptions:n})}else v["a"].error("\u8bf7\u586b\u5199\u65b0\u589e\u52a0\u7684\u6807\u7b7e\uff01")})},a.onChange=function(e){var t=a.props.dispatch,n=a.state.WebAppStatue;t({type:"webApp/fetch",payload:{currentPage:e,pageSize:5,status:""==a.state.WebAppStatue?null:a.state.WebAppStatue,name:""==a.state.WebName?null:a.state.WebName,tags:""==a.state.WebTags?null:a.state.WebTags},callback:function(){var e=a.props,t=(e.loading,e.webApp),l=t.data.datas.WebApp;console.log("------webApp---",t);var s=0;s=1===n?t.data.datas.YCAmount:2===n?t.data.datas.SXAmount:0===n?t.data.datas.ZCAmount:4===n?t.data.datas.KZFAmount:t.data.datas.TotalAmount,a.setState({wv:l,startwv:l,TotalAmount:s,WebAppTotalAmount:t.data.datas.TotalAmount,SXAmount:t.data.datas.SXAmount,YCAmount:t.data.datas.YCAmount,ZCAmount:t.data.datas.ZCAmount,KZFAmount:t.data.datas.KZFAmount})}})},a.AddTagshandleCancel=function(e){console.log(e),a.setState({AddBQvisible:!1})},a.handleSearch=function(e){e&&e.preventDefault();a.state.options;var t=a.props,n=(t.dispatch,t.form);new Array;n.validateFields(function(e,t){console.log("=====values===",t);var n=t.Allcheckbox,l=t.URL,s=a.props.dispatch;s({type:"webApp/fetch",payload:{currentPage:1,pageSize:5,status:""==a.state.WebAppStatue?null:a.state.WebAppStatue,tags:void 0==n||""==n?null:n.join(","),name:void 0==l||""==l?null:l},callback:function(e){var t=a.props,s=(t.loading,t.webApp);console.log("====webApp==",s),console.log("------e334---",e.data.WebApp),0===e.code?(console.log("====222===="),a.setState({WebName:void 0===l?"":l,WebTags:void 0===n?"":n.join(","),WebAppTotalAmount:e.data.TotalAmount,TotalAmount:e.data.TotalAmount,SXAmount:e.data.SXAmount,YCAmount:e.data.YCAmount,ZCAmount:e.data.ZCAmount,KZFAmount:e.data.KZFAmount,webappmap:e.data.WebApp},function(){console.log("====333====")}),v["a"].success("\u67e5\u8be2WebApp\u5217\u8868\u6210\u529f\uff01")):v["a"].error("\u67e5\u8be2WebApp\u5217\u8868\u5931\u8d25\uff01")}})})},a.TabQuery=function(e){console.log("===status===",e)},a.remove=function(e){console.log("=====url===",e);var t=a.props.dispatch;t({type:"webApp/removeWebApp",payload:{url:e},callback:function(e){console.log("=====e====",e),0===e.code?v["a"].success("\u5220\u9664\u6210\u529f\uff01"):v["a"].error("\u5220\u9664\u5931\u8d25\uff01"),a.handleSearch()}})},a.TabSwitch=function(e){console.log("===flag===",e);a.props.dispatch;-1===e?a.setState({div1:"block",div3:"none",div2:"none",div4:"none",div5:"none",WebAppStatue:""},function(){return a.handleSearch()}):2===e?a.setState({div1:"none",div2:"block",div3:"none",div4:"none",div5:"none",WebAppStatue:"2"},function(){return a.handleSearch()}):1===e?a.setState({div1:"none",div2:"none",div3:"block",div4:"none",div5:"none",WebAppStatue:"1"},function(){return a.handleSearch()}):0===e?a.setState({div1:"none",div2:"none",div3:"none",div4:"block",div5:"none",WebAppStatue:"0"},function(){return a.handleSearch()}):4===e&&a.setState({div1:"none",div2:"none",div4:"none",div3:"none",div5:"block",WebAppStatue:"4"},function(){return a.handleSearch()})},a}return x()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.props.dispatch;this.handleSearch(),this.Tags()}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.state,v=a.plainOptions,A=(a.UrlPlainOptions,a.webappmap);if(""==v);else for(var y=[],E=0;E<v.length;E++)y.push(Z.a.createElement(Option,{key:v[E]},v[E]));console.log("===webappmap===",A);var f=[{key:"service",tab:"WebAPP\u5217\u8868"}],k={service:Z.a.createElement("div",null,0===Object.keys(A).length?Z.a.createElement("div",{style:{textAlign:"center"}},"\u6682\u65e0\u6570\u636e"):Object.keys(A).map(function(t,a){console.log("===v475===",t);var n=A[t];return console.log("===webappservice==",n),Z.a.createElement(Z.a.Fragment,null,Z.a.createElement(b["a"],{column:4},Z.a.createElement(b["a"].Item,{label:"URL",span:2},Z.a.createElement("span",null,t)),Z.a.createElement(b["a"].Item,{label:"\u6807\u7b7e",span:2},Z.a.createElement("span",null," ",n.tag.map(function(e){return Z.a.createElement(h["a"],{color:"blue",key:e}," ",e," ")})),Z.a.createElement("a",{onClick:e.showModal.bind(e,t,n.type,n.status,n.app,n.tag)},Z.a.createElement(m["a"],{type:"edit"}))),Z.a.createElement(b["a"].Item,{label:"\u662f\u5426\u80fd\u591f\u8f6c\u53d1\u8bf7\u6c42",span:2},Z.a.createElement("span",null,n.gateway?"\u662f":"\u5426")),Z.a.createElement(b["a"].Item,{label:"\u72b6\u6001"},0===n.csstatus?Z.a.createElement("span",{style:{color:"#52c41a"}},"\u6b63\u5e38"):1===n.csstatus?Z.a.createElement("span",{style:{color:"#1890ff"}},"\u5ef6\u8fdf"):2===n.csstatus?Z.a.createElement("span",{style:{color:"#ff4d4f"}},"\u5931\u6548"):"")),Z.a.createElement(r["a"],{span:24,style:{marginTop:"24px"}},Z.a.createElement(d["a"],{span:4},Z.a.createElement(u["a"],{size:"small",type:"primary",disabled:0!==n.csstatus,onClick:function(a){a&&a.preventDefault(),I["a"].checkAuthAndExecute(e.props.dispatch,j,e.showDrawer.bind(e,"yxxx",t),[])}},"\u8fd0\u884c\u4fe1\u606f")),Z.a.createElement(d["a"],{span:4},Z.a.createElement(u["a"],{size:"small",type:"primary",disabled:0!==n.csstatus,onClick:function(a){a&&a.preventDefault(),I["a"].checkAuthAndExecute(e.props.dispatch,V,e.showDrawer.bind(e,"cspz",t),[])}},"\u53c2\u6570\u914d\u7f6e")),Z.a.createElement(d["a"],{span:4},Z.a.createElement(u["a"],{size:"small",type:"primary",disabled:0!==n.csstatus,onClick:function(a){a&&a.preventDefault(),I["a"].checkAuthAndExecute(e.props.dispatch,q,e.showDrawer.bind(e,"acl",t),[])}},"\u8bbe\u7f6eACL")),Z.a.createElement(d["a"],{span:4},Z.a.createElement(u["a"],{size:"small",type:"primary",disabled:0!==n.csstatus,onClick:function(a){a&&a.preventDefault(),I["a"].checkAuthAndExecute(e.props.dispatch,G,e.showDrawer.bind(e,"bdly",t),[])}},"\u672c\u5730\u8def\u7531")),Z.a.createElement(d["a"],{span:4},Z.a.createElement(u["a"],{size:"small",type:"primary",disabled:0!==n.csstatus,onClick:function(a){a&&a.preventDefault(),I["a"].checkAuthAndExecute(e.props.dispatch,H,e.showDrawer.bind(e,"rzpz",t),[])}},"\u65e5\u5fd7\u914d\u7f6e")),Z.a.createElement(d["a"],{span:4},Z.a.createElement(p["a"],{title:Z.a.createElement("div",null,Z.a.createElement("span",null,"\u60a8\u786e\u8ba4\u8981\u5220\u9664\uff1a"),Z.a.createElement("br",null),Z.a.createElement("span",null,t)),onConfirm:function(a){a&&a.preventDefault(),I["a"].checkAuthAndExecute(e.props.dispatch,$,e.remove.bind(e,t),[])},okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88"},Z.a.createElement(u["a"],{size:"small",type:"danger"},"\u5220    \u9664")))),Z.a.createElement(c["a"],null))}))},g=function(e){var t=e.title,a=e.value,n=e.bordered;return Z.a.createElement("div",{className:B.a.headerInfo},Z.a.createElement("span",null,t),Z.a.createElement("p",null,a),n&&Z.a.createElement("em",null))};return Z.a.createElement("div",null,Z.a.createElement(r["a"],{span:24},Z.a.createElement(o["a"],null,Z.a.createElement(W["a"],{layout:"inline"},Z.a.createElement(d["a"],{span:11},Z.a.createElement(U,{label:"\u6807\u7b7e"},t("Allcheckbox",{})(Z.a.createElement(i["a"],{mode:"tags",style:{width:"250px"},placeholder:"\u8bf7\u9009\u62e9\u6807\u7b7e\uff01",allowClear:!0},y)))),Z.a.createElement(d["a"],{span:11},Z.a.createElement(U,{label:"URL"},t("URL",{})(Z.a.createElement(X["a"],{placeholder:"\u8bf7\u8f93\u5165\u540d\u79f0\uff01",style:{width:"350px"}})))),Z.a.createElement(d["a"],{md:2,style:{marginTop:"4px"}},Z.a.createElement("span",null,Z.a.createElement(u["a"],{type:"primary",htmlType:"submit",onClick:this.handleSearch},"\u67e5\u8be2")))))),Z.a.createElement("div",{className:B.a.standardList,style:{marginTop:"24px"}},Z.a.createElement(o["a"],{bordered:!1},Z.a.createElement(r["a"],null,Z.a.createElement(d["a"],{onClick:this.TabSwitch.bind(this,-1),style:{width:"20%",cursor:"pointer"},xs:24},Z.a.createElement(g,{title:"WebApp\u603b\u6570",value:this.state.WebAppTotalAmount,bordered:!0}),Z.a.createElement("div",{style:{display:this.state.div1},className:Q.a.hx})),Z.a.createElement(d["a"],{onClick:this.TabSwitch.bind(this,2),style:{width:"20%",cursor:"pointer"},xs:24},Z.a.createElement(g,{title:"\u5931\u6548WebApp",value:this.state.SXAmount,bordered:!0}),Z.a.createElement("div",{style:{display:this.state.div2},className:Q.a.hx})),Z.a.createElement(d["a"],{onClick:this.TabSwitch.bind(this,1),style:{width:"20%",cursor:"pointer"},xs:24},Z.a.createElement(g,{title:"\u5ef6\u8fdfWebApp",value:this.state.YCAmount,bordered:!0}),Z.a.createElement("div",{style:{display:this.state.div3},className:Q.a.hx})),Z.a.createElement(d["a"],{onClick:this.TabSwitch.bind(this,0),style:{width:"20%",cursor:"pointer"},xs:24},Z.a.createElement(g,{title:"\u6b63\u5e38WebApp",value:this.state.ZCAmount,bordered:!0}),Z.a.createElement("div",{style:{display:this.state.div4},className:Q.a.hx})),Z.a.createElement(d["a"],{onClick:this.TabSwitch.bind(this,4),style:{width:"20%",cursor:"pointer"},xs:24},Z.a.createElement(g,{title:"\u53ef\u8f6c\u53d1",value:this.state.KZFAmount}),Z.a.createElement("div",{style:{display:this.state.div5},className:Q.a.hx}))))),Z.a.createElement(o["a"],{bordered:!1,style:{width:"100%",marginTop:"24px"},tabList:f},k[this.state.noTitleKey],Z.a.createElement(s["a"],{showQuickJumper:!0,defaultCurrent:1,style:{paddingTop:"24px",textAlign:"center"},defaultPageSize:5,total:this.state.TotalAmount,onChange:this.onChange.bind()})),Z.a.createElement(l["a"],{width:1100,closable:!0,onClose:this.onClose,visible:this.state.Drawervisible,title:Z.a.createElement("div",null,Z.a.createElement("span",{style:{color:"#1890FF"}},this.state.mess),"\uff1a",this.state.WebAppUrl)},Z.a.createElement("div",null,this.state.info)),Z.a.createElement(n["a"],{destroyOnClose:!0,title:"\u7f16\u8f91\u6807\u7b7e",visible:this.state.BQvisible,onOk:this.handleOk,onCancel:this.handleCancel},Z.a.createElement("div",{style:{display:"flex"}},Z.a.createElement(W["a"].Item,{label:"\u589e\u52a0\u65b0\u6807\u7b7e",style:{display:"flex"}},t("AddCheckbox",{})(Z.a.createElement(X["a"],null))),Z.a.createElement(u["a"],{style:{marginTop:"3px",marginLeft:"5%"},onClick:this.AddTagshandleOk,type:"primary"},"\u6dfb\u52a0\u65b0\u6807\u7b7e")),Z.a.createElement("div",null,Z.a.createElement(W["a"].Item,{label:"\u6807\u7b7e",style:{display:"flex"}},t("checkbox",{initialValue:this.state.XZcheckedList})(Z.a.createElement(T["a"].Group,{options:this.state.plainOptions,onChange:this.BQonChange}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return K()(e.value,t.value)?null:{data:e.value,value:e.value}}}]),t}(D["PureComponent"]);t["default"]=Object(F["connect"])(function(e){return e.ss})(W["a"].create()(te))}}]);