webpackJsonp([1],{0:function(e,t,n){n("j1ja"),e.exports=n("NHnr")},"9/wK":function(e,t){},AP5l:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("j1ja");var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"app"},i,!1,function(e){n("To9+")},null,null).exports,d=n("/ocq"),r=n("//Fk"),s=n.n(r),l=n("9cP5"),c={name:"index",data:function(){return{modalHidden:!1,fullScreen:"fullScreen",treeHeight:"400px",titleDetail:"",titleDetailHidden:!1,reFresh:!0,chartData:{},dataLength:0,chartDataByDown:[],chartDataByUp:[],childLevelNum:1,treeMenuHidden:!1,menuList:"",offseTop:0,offseBottom:0,offsetLeft:0,offsetRight:0,direction:"t2b",moreFlag:"点击更多",reFreshMore:!1,limitCount:4,loading:!1}},components:{VoBasic:l.VoBasic},created:function(){this.loadApi()},mounted:function(){},methods:{loadInit:function(){var e=this;setTimeout(function(){for(var t=document.getElementsByClassName("treeBasic"),n=e.chartData,a=0;a<n.length;a++){if(t[a].oncontextmenu=function(e){e.preventDefault()},t[a].addEventListener("contextmenu",function(t){if("点击更多"==t.target.innerText)return!1;e.mouseRightHandle(t)}),t[a].addEventListener("click",function(t){"点击更多"==t.target.innerText&&e.clickMoreHandle(t)}),document.querySelectorAll("table .title").forEach(function(t,n){t.addEventListener("mouseover",function(t){""==t.target.innerText||e.treeMenuHidden||(e.titleDetail=t.target.innerText,e.offseTop=t.clientY+"px",e.offsetLeft=t.clientX+"px",setTimeout(function(){e.titleDetailHidden=!0},500))})}),document.querySelectorAll("table .title").forEach(function(t,n){t.addEventListener("mouseout",function(t){e.treeMenuHidden||(e.titleDetail="",e.offseTop=0,e.offsetLeft=0,e.titleDetailHidden=!1)})}),a==t.length-1)return!1;var i=document.createElement("div"),o=document.createElement("i");"b2t"==e.direction?i.classList.add("treeLineB2t"):i.classList.add("treeLine"),i.classList.add("treeLine"),i.innerHTML=n[a].amount_data[0],o.classList.add("treeLineArrow"),t[a].append(i),t[a].append(o)}},300)},loadApi:function(){var e=this;e.requestHttp.AJXAGET("../static/json/path_sample.json",{},function(t){e.chartData=t.shortestPath,e.dataLength=t.shortestPath.length,e.chartData.length>e.limitCount&&(e.chartData[2].aliasName="点击更多"),e.loadInit()})},mouseRightHandle:function(e){this.menuList=e.target.parentNode.dataset.source,this.offseTop=e.clientY+"px",this.offsetLeft=e.clientX+"px",this.treeMenuHidden=!0},bottomNodeHandle:function(e){var t=this,n=JSON.parse(e.menuList);if("b2t"==t.direction&&(t.direction="t2b",t.chartData.map(function(e,t){e.children=[]})),t.treeMenuHidden=!1,"更多"==n.name)return!1;var a="../static/json/down_samples.json";n.parentId>0&&(a="../static/json/down_samples1.json"),t.requestHttp.AJXAGET(a,{id:n.start_node},function(e){t.fnLispChartDataByAdd(t.chartData,e.down,n)})},topNodeHandle:function(e){var t=this,n=JSON.parse(e.menuList);if("t2b"==t.direction&&(t.direction="b2t",t.chartData.map(function(e,t){e.children=[]})),t.treeMenuHidden=!1,"更多"==n.name)return!1;var a="../static/json/up_samples.json";n.parentId>0&&(a="../static/json/up_samples1.json"),t.requestHttp.AJXAGET(a,{id:n.start_node},function(e){t.fnLispChartDataByAdd(t.chartData,e.up,n)})},menuHiddenHandle:function(e){var t=JSON.parse(e.menuList);this.fnLispChartDataByDel(this.chartData,t),this.treeMenuHidden=!1},fnLispChartDataByAdd:function(e,t,n){var a=this;if(a.chartDataByDown=t,void 0==n.parentId)e.map(function(e,t){e.start_node==n.start_node&&0==e.children.length&&(a.childLevelNum++,e.children=a.chartDataByDown,e.children.push({name:"更多",nodeLevel:a.childLevelNum,parent_node:e.start_node,children:[]}),a.refreshHandle())});else if(n.parentId>0)e.filter(function(e,i){e.start_node==n.parent_node&&e.children.length>0?a.fnLispChartDataByAdd(e.children,t,n):e.start_node==n.start_node&&0==e.children.length&&(a.childLevelNum++,e.children=a.chartDataByDown,e.children.push({name:"更多",nodeLevel:a.childLevelNum,parent_node:e.start_node,children:[]}),a.refreshHandle())})},fnLispChartDataByDel:function(e,t){var n=this;if(0==e.length)return!1;e.filter(function(e,a){e.start_node==t.parent_node&&e.children.length>0?(n.childLevelNum=n.childLevelNum-1,e.children=[],n.refreshHandle()):e.children.length>0&&n.fnLispChartDataByDel(e.children,t)})},clickMoreHandle:function(){this.reFreshMore=!0,this.refreshHandle()},triggerMenuHandle:function(){this.treeMenuHidden=!1},refreshHandle:function(){var e=this;e.reFresh=!1,e.modalHidden=!0,e.titleDetailHidden=!1;new s.a(function(t,n){setTimeout(function(){e.reFresh=!0,e.loadInit(),t()},300)}).then(function(t){setTimeout(function(){e.modalHidden=!1},1e3)})},clickFullScreenHandle:function(){"fullScreen"==this.fullScreen?(this.fullScreen="fullScreenNon",this.treeHeight=window.screen.height+"px"):(this.fullScreen="fullScreen",this.treeHeight="400px")}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-container",style:{height:e.treeHeight}},[e.modalHidden?n("div",{staticClass:"modal",style:{height:e.treeHeight}}):e._e(),e._v(" "),n("div",{staticClass:"fullScreenContainer"},[n("div",{class:e.fullScreen,on:{click:function(t){return e.clickFullScreenHandle()}}})]),e._v(" "),e.modalHidden?n("div",{staticClass:"el-loading-spinner"},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])]):e._e(),e._v(" "),e.reFresh?n("div",{ref:"treeHorizontal",staticClass:"tree-horizontal",on:{click:function(t){return e.triggerMenuHandle()}}},e._l(e.chartData,function(t,a){return n("div",{key:t.id},[0==a||a+1==e.dataLength?n("vo-basic",{ref:"treeNode",refInFor:!0,attrs:{data:t,direction:e.direction,chartClass:"treeNode treeBasic",toggleCollapse:!1}}):e.reFreshMore?e.reFreshMore?n("vo-basic",{ref:"treeNode",refInFor:!0,attrs:{data:t,direction:e.direction,chartClass:"treeNodeByElse treeBasic",toggleCollapse:!1}}):e._e():[a==e.limitCount/2&&e.dataLength>e.limitCount?n("vo-basic",{ref:"treeNode",refInFor:!0,attrs:{nodeTitle:"aliasName",data:t,direction:e.direction,chartClass:"treeNodeByElse treeBasic fontColor"}}):a!=e.limitCount/2&&a<e.limitCount&&e.dataLength>e.limitCount?n("vo-basic",{ref:"treeNode",refInFor:!0,attrs:{data:t,direction:e.direction,chartClass:"treeNodeByElse treeBasic",toggleCollapse:!1}}):e._e()]],2)}),0):e._e(),e._v(" "),e.treeMenuHidden?n("div",{staticClass:"dealDetails",style:{top:e.offseTop,left:e.offsetLeft},attrs:{data:e.menuList}},[n("div",{on:{click:function(t){return e.userDetailHandle()}}},[e._v("账号详情")]),e._v(" "),n("div",{on:{click:function(t){return e.topNodeHandle(e.$data)}}},[e._v("上游交易对手")]),e._v(" "),n("div",{on:{click:function(t){return e.bottomNodeHandle(e.$data)}}},[e._v("下游交易对手")]),e._v(" "),n("div",{on:{click:function(t){return e.viewMoreHandle()}}},[e._v("查看更多")]),e._v(" "),n("div",{on:{click:function(t){return e.reverseSortHandle()}}},[e._v("倒序排列")]),e._v(" "),n("div",{on:{click:function(t){return e.menuHiddenHandle(e.$data)}}},[e._v("隐藏")])]):e._e(),e._v(" "),e.titleDetailHidden&&e.offseTop>0?n("div",{staticClass:"titleDetail",style:{top:e.offseTop,left:e.offsetLeft}},[n("div",{staticStyle:{padding:"10px"}},[e._v(e._s(e.titleDetail))])]):e._e()])},staticRenderFns:[]};var h=n("VU/8")(c,u,!1,function(e){n("9/wK")},null,null).exports,f=n("bOdI"),p=n.n(f),m=n("nnYn"),v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"dialog"}},[t("div",{staticClass:"border"},[t("div",{staticStyle:{width:"100%",height:"20px"}},[t("div",{staticClass:"closeImg",on:{click:this.closeDialog}},[this._v("x")])]),this._v(" "),t("div",{staticClass:"message"},[this._v("账号详情信息")])])])},staticRenderFns:[]};var D=n("VU/8")({name:"dialog",data:function(){return{}},methods:{closeDialog:function(){this.$emit("closeDialog",!1)}}},v,!1,function(e){n("NQz7")},"data-v-2ee06263",null).exports,H={name:"relationChart",data:function(){return{addChartData:"",addNodeData:[],addLinksData:[],chartData:"",chartDataLength:0,treeMenuHidden:!1,netchart:"",offsetTop:0,offsetLeft:0,menuList:"",chartByInitID:[],showMore:!1,showDialog:!1,total:4}},components:{NetChart:m.NetChart,Dialog:D},created:function(){this.loadApi("initload")},mounted:function(){},methods:{loadApi:function(e){var t=this;t.requestHttp.AJXAGET("../static/json/relationPath.json",{},function(e){var n=[],a=[],i=120,o={nodes:e.nodes,links:e.links};t.chartDataLength=e.nodes.length,e.nodes.length>5&&!t.showMore?(o.nodes.map(function(e,a){if(a>3&&20==e.radius)return!1;t.chartByInitID.push(e.id),2==a&&n.push({id:"more_"+e.id,user:"more_"+e.user,label:"点击展开",radius:20,type:"more",nodeType:"path",x:i,y:250}),n.push({id:e.id,user:e.user,label:e.label,radius:e.radius,type:e.type,nodeType:e.nodeType,x:i,y:250}),i+=100}),n.map(function(e,t){if(t==n.length-1)return!1;var i=o.links.filter(function(t,n){if(e.id==t.from)return t});a.push({id:e.id,from:e.id,to:n[t+1].id,shares_perc:0==i.length?"":i[0].shares_perc,nodeType:e.nodeType})}),t.chartData={nodes:n,links:a}):(o.nodes.map(function(e,t){n.push({id:e.id,user:e.user,label:e.label,radius:e.radius,type:e.type,nodeType:e.nodeType,x:i,y:250}),i+=100}),t.addNodeData.length>0&&t.addLinksData.length>0&&(t.addNodeData.forEach(function(e,t){n.push(e)}),t.addLinksData.forEach(function(t,n){e.links.push(t)})),t.chartData={nodes:n,links:e.links}),t.loadChart()})},loadChart:function(){var e=this;e.netchart=new m.NetChart(p()({container:document.getElementById("tree-horizontal"),area:{height:600},data:{preloaded:e.chartData},navigation:{initialNodes:e.chartByInitID},interaction:{resizing:{enabled:!1},zooming:{zoomExtent:[.1,2],autoZoomExtent:[.1,1]}},style:{node:{display:"image",imageCropping:!0},nodeStyleFunction:this.nodeStyle,linkStyleFunction:this.linkStyle},toolbar:{enabled:!1,zoomOut:!0,zoomControl:!1},credits:{enabled:!1},events:{onRightClick:function(t,n){n.clickNode&&"点击展开"!=n.clickNode.data.label?(this.treeMenuHidden=!0,e.menuList=t,e.menuShowHandle(t)):(n.clickLink,this.treeMenuHidden=!1,e.menuHideHandle()),e.preventDefault(t)},onClick:function(t,n){n.clickNode&&"点击展开"==n.clickNode.data.label?(e.showMore=!0,e.loadApi("reload")):n.clickNode&&"more"==t.clickNode.data.type&&"up"==t.clickNode.data.nodeType?e.clickUpMoreChildHandle(t,n):n.clickNode&&"more"==t.clickNode.data.type&&"down"==t.clickNode.data.nodeType?e.clickDownMoreChildHandle():(this.treeMenuHidden=!1,e.menuHideHandle()),t.clickLink&&e.userDetailHandle()}}},"interaction",{selection:{lockNodesOnMove:!1}}))},topNodeHandle:function(){var e=this;e.requestHttp.AJXAGET("../static/json/up.json",{},function(t){var n=t.total,a=e.menuList;(t={nodes:t.nodes,links:t.links}).nodes.map(function(t,n){e.addNodeData.push(t)}),t.links.map(function(t,n){e.addLinksData.push(t)}),n>e.total&&(t.nodes.push({id:"more_"+a.clickNode.id,user:"more_user_"+a.clickNode.id,label:"更多",radius:20,type:"more",nodeType:"up"}),t.links.push({id:"more_"+a.clickNode.id,from:a.clickNode.id,to:"more_"+a.clickNode.id,shares_perc:"",nodeType:"up"})),e.netchart.addData(t),e.menuHideHandle()})},bottomNodeHandle:function(){var e=this;e.requestHttp.AJXAGET("../static/json/down.json",{},function(t){(t={nodes:t.nodes,links:t.links}).nodes.map(function(t,n){e.addNodeData.push(t)}),t.links.map(function(t,n){e.addLinksData.push(t)}),e.netchart.addData(t),e.menuHideHandle()})},clickUpMoreChildHandle:function(e,t){var n=this,a=this;a.requestHttp.AJXAGET("../static/json/up?pageNo=2.json",{},function(t){n.netchart.removeData({nodes:[{id:e.clickNode.id}]}),(t={nodes:t.nodes,links:t.links}).nodes.map(function(e,t){a.addNodeData.push(e)}),t.links.map(function(e,t){a.addLinksData.push(e)}),a.netchart.addData(t),a.menuHideHandle()})},clickDownMoreChildHandle:function(e,t){var n=this,a=this;a.requestHttp.AJXAGET("../static/json/down?pageNo=2.json",{},function(t){n.netchart.removeData({nodes:[{id:e.clickNode.id}]}),(t={nodes:t.nodes,links:t.links}).nodes.map(function(e,t){a.addNodeData.push(e)}),t.links.map(function(e,t){a.addLinksData.push(e)}),a.netchart.addData(t),a.menuHideHandle()})},nodeStyle:function(e){35==e.data.radius&&"more"!=e.data.type&&"path"==e.data.nodeType?e.image="../static/"+e.data.nodeType+"_"+e.data.type+"_max.png":20==e.data.radius&&"more"!=e.data.type&&"path"==e.data.nodeType?e.image="../static/"+e.data.nodeType+"_"+e.data.type+"_min.png":e.image="../static/"+e.data.nodeType+"_"+e.data.type+".png",e.label=e.data.label,e.radius=e.data.radius,e.data.color&&(e.labelStyle.textStyle.font="18px Comic Sans")},linkStyle:function(e){e.radius=1,e.label=e.data.shares_perc,e.labelStyle.backgroundStyle={fillColor:"#f9f9f9"},"up"==e.data.nodeType?(e.fromDecoration="arrow",e.fillColor="#FBCB56"):"down"==e.data.nodeType?(e.toDecoration="arrow",e.fillColor="#9BB5FB"):e.toDecoration="arrow"},menuHideHandle:function(){this.$refs.dealDetails.style.display="none",this.$refs.dealDetails.style.left="0px",this.$refs.dealDetails.style.top="0px"},menuShowHandle:function(e){this.menuList=e,this.$refs.dealDetails.style.display="block",this.$refs.dealDetails.style.left=e.pageX+"px",this.$refs.dealDetails.style.top=e.pageY+"px"},userDetailHandle:function(){this.showDialog=!0,this.menuHideHandle()},closeHandle:function(e){this.showDialog=e},menuHiddenHandle:function(e){var t=e.menuList;this.netchart.removeData({nodes:[{id:t.clickNode.id}]})},preventDefault:function(e){e.preventDefault()}}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-container"},[n("div",{ref:"treeHorizontal",attrs:{id:"tree-horizontal"}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.treeMenuHidden,expression:"treeMenuHidden"}],ref:"dealDetails",staticClass:"dealDetails",attrs:{data:e.menuList}},[n("div",{on:{click:function(t){return e.userDetailHandle()}}},[e._v("账号详情")]),e._v(" "),n("div",{on:{click:function(t){return e.topNodeHandle()}}},[e._v("上游交易对手")]),e._v(" "),n("div",{on:{click:function(t){return e.bottomNodeHandle()}}},[e._v("下游交易对手")])]),e._v(" "),e.showDialog?n("Dialog",{on:{closeDialog:e.closeHandle}}):e._e()],1)},staticRenderFns:[]};var y=n("VU/8")(H,g,!1,function(e){n("AP5l")},null,null).exports;a.a.use(d.a);var _=new d.a({routes:[{path:"/",name:"index",component:h},{path:"/relationChart",name:"relationChart",component:y}]}),k=n("NYxO");a.a.use(k.a);new k.a.Store({state:{user:{id:0,account:""},loading:!1},actions:{},mutations:{}});var N=n("mtWM"),C=n.n(N),L=(n("wZRx"),n("OdCE"),{headers:{"Content-Type":"application/json"},timeout:2e4}),T={AJXAGET:function(e,t,n){C.a.get(e,t,L).then(function(e){n(e.data)}).catch(function(e){console.log(e)})},AJXAPOST:function(e,t,n){C.a.post(e,t,L).then(function(e){n(e.data)}).catch(function(e){console.log(e)})}};C.a.defaults.withCredentials=!0,a.a.config.productionTip=!1,a.a.prototype.requestHttp=T,new a.a({el:"#app",router:_,template:"<App/>",components:{App:o}})},NQz7:function(e,t){},OdCE:function(e,t){},"To9+":function(e,t){},wZRx:function(e,t){}},[0]);