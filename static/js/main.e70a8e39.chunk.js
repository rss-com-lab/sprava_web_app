(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(55)},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(20),r=n.n(c),o=n(21),s=n(1),l=n(4),u=n(6),d=(n(33),function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}}),m="SHOW_ALL",h="SHOW_SAVED";function v(e){return{type:"ITEMS_IS_LOADING",isLoading:e}}var f={filter:m},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return Object(u.a)({},e,{filter:t.filter});default:return e}};var E=Object(s.c)({visibilityFilter:_,items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_FETCH_DATA_SUCCESS":return t.items;default:return e}},itemsHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_HAS_ERRORED":return t.hasErrored;default:return e}},itemsIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_IS_LOADING":return t.isLoading;default:return e}}}),p=n(7),g=n(8),b=n(10),k=n(9),y=n(11),w=n(23),O=n.n(w),S=n(2),N=(n(45),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(b.a)(this,Object(k.a)(t).call(this,e))).toggleCheckboxChange=function(e){var t=n.props.handleCheckboxChange;n.setState(function(e){return{isChecked:!e.isChecked}}),t(e)},n.state={isChecked:e.isSaved},n.toggleCheckboxChange.bind(Object(S.a)(Object(S.a)(n))),n}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.id,a=this.state.isChecked;return i.a.createElement("div",{className:"checkbox__container"},i.a.createElement("label",{htmlFor:n,className:"label__control option"},i.a.createElement("input",{type:"checkbox",className:"check__input",value:t,checked:a,onChange:this.toggleCheckboxChange,id:n}),i.a.createElement("span",{className:"check__box"})))}}]),t}(i.a.Component));function j(){for(var e=document.querySelectorAll("input[type=checkbox]:checked"),t=[],n=0;n<e.length;n+=1)t.push(e[n].id);localStorage.setItem("checkedEventList",t)}n(46);var C=function(e){var t,n,a,c=e.img,r=e.title,o=e.schedule,s=e.link,l=e.isEventSave,u=e.id;return i.a.createElement("div",{className:"events-section__event-container"},i.a.createElement("h4",{className:"event-data__event-header"},O()(r)),i.a.createElement("div",{className:"events-section__event-data"},i.a.createElement("div",{className:"events-section__event-img"},i.a.createElement("img",{src:"http://spravafestival.by/".concat(c),alt:"".concat(r," preview")})),i.a.createElement("div",{className:"events-sevtion__schedule"},Object.keys(o).map(function(e){return i.a.createElement("div",{className:"events-section__event-params"},i.a.createElement("h5",{className:"events-section__event-location"},o[e].point),i.a.createElement("p",{className:"events-section__time"},o[e].timeStart,"-",o[e].timeEnd))}))),i.a.createElement("div",{className:"event-data__group-link-container"},i.a.createElement("a",{href:s,target:"blank",title:(t=r,n="<br/>",a=" ",t.split(n).join(a)),className:"event-data__group-link"},"\u0421\u0430\u0439\u0442 \u0433\u0440\u0443\u043f\u043f\u044b")),i.a.createElement("div",{className:"events-section__event-checkbox"},i.a.createElement(N,{label:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",isSaved:l,id:u,handleCheckboxChange:j})))},I=(n(47),function(){return i.a.createElement("div",{className:"loading__animation-elements-container"},i.a.createElement("div",{className:"loading__animation-element last-element"}),i.a.createElement("div",{className:"loading__animation-element central-element"}),i.a.createElement("div",{className:"loading__animation-element main-element"}),i.a.createElement("div",{className:"loading__animation-element central-element"}),i.a.createElement("div",{className:"loading__animation-element last-element"}))}),T=(n(48),function(){return i.a.createElement("div",{className:"request-field__container"},i.a.createElement("h2",{className:"request-field__massage"},"Oooops something go wrong :("))}),L=(n(49),function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchData)("https://cors-anywhere.herokuapp.com/http://spravafestival.by/api/music")}},{key:"render",value:function(){var e=this.props,t=e.events,n=e.hasErrored,a=e.isLoading;return n?i.a.createElement(T,null):a?i.a.createElement(I,null):i.a.createElement("div",{className:"events-section__event-list-container",id:"event-list"},i.a.createElement("div",{className:"events-section__first-day-events",style:Object.keys(t).filter(function(e){return"4 \u0410\u0412\u0413\u0423\u0421\u0422\u0410"===t[e].date}).length>0?{display:"block"}:{display:"none"}},i.a.createElement("h5",{className:"events-section__day-title"},"4 \u0410\u0412\u0413\u0423\u0421\u0422\u0410"),i.a.createElement("div",{className:"events-section__first-day-events-list"},Object.keys(t).filter(function(e){return"4 \u0410\u0412\u0413\u0423\u0421\u0422\u0410"===t[e].date}).map(function(e){return i.a.createElement(C,{key:t[e].id.match(/^\d+/)[0]+t[e].id.match(/\d+$/)[0],img:t[e].img,title:t[e].title,schedule:t[e].schedule,link:t[e].link,id:t[e].id,isEventSave:Boolean(t[e].checked)})}))),i.a.createElement("div",{className:"events-section__secound-day-events",style:Object.keys(t).filter(function(e){return"5 \u0410\u0412\u0413\u0423\u0421\u0422\u0410"===t[e].date}).length>0?{display:"block"}:{display:"none"}},i.a.createElement("h5",{className:"events-section__day-title"},"5 \u0410\u0412\u0413\u0423\u0421\u0422\u0410"),i.a.createElement("div",{className:"events-section__secound-day-events-list"},Object.keys(t).filter(function(e){return"5 \u0410\u0412\u0413\u0423\u0421\u0422\u0410"===t[e].date}).map(function(e){return i.a.createElement(C,{key:t[e].id.match(/^\d+/)[0]+t[e].id.match(/\d+$/)[0],img:t[e].img,title:t[e].title,schedule:t[e].schedule,link:t[e].link,id:t[e].id,isEventSave:Boolean(t[e].checked)})}))))}}]),t}(i.a.Component)),A=function(e,t){var n,a=localStorage.getItem("checkedEventList")?localStorage.getItem("checkedEventList").split(","):[],i=[];switch(0===Object.entries(t).length&&t.constructor===Object||(n=Object(u.a)({},t),Object.keys(n).forEach(function(e){Object.keys(n[e].items).forEach(function(t){var a=Object(u.a)({},n[e].items[t]);a.date=n[e].date,a.id="".concat(t,"/date-").concat(a.date.split("")[0]),a.checked=!1,i.push(a)})}),a.length>0&&i.length>0&&a.forEach(function(e){i.find(function(t){return t.id===e}).checked=!0})),e){case m:return i;case h:return i.filter(function(e){return!0===e.checked});default:throw new Error("Unknown filter: ".concat(e))}},x=Object(l.b)(function(e){return{events:A(e.visibilityFilter.filter,e.items),items:e.items,hasErrored:e.itemsHasErrored,isLoading:e.itemsIsLoading}},function(e){return{setVisibilityFilter:function(t){return e(d(t))},fetchData:function(t){return e(function(e){return function(t){t(v(!0)),window.fetch(e,{cache:"default"}).then(function(e){if(!e.ok)throw Error(e.statusText);return t(v(!1)),e}).then(function(e){return e.json()}).then(function(e){return t(function(e){return{type:"ITEMS_FETCH_DATA_SUCCESS",items:e}}(e))}).catch(function(){return t({type:"ITEMS_HAS_ERRORED",hasErrored:!0})})}}(t))}}})(L),D=(n(50),function(e){var t=e.active,n=e.onClick,a=e.children;return i.a.createElement("button",{type:"button",onClick:n,disabled:t,className:"controlBtns__switcher-btn"},a)}),R=Object(l.b)(function(e,t){return{active:t.filter===e.visibilityFilter.filter}},function(e,t){return{onClick:function(){return e(d(t.filter))}}})(D),F=(n(51),function(){return i.a.createElement("div",{className:"event-section__controlBtns"},i.a.createElement(R,{filter:m},"All"),i.a.createElement(R,{filter:h},"Saved"))}),W=(n(52),function(){return i.a.createElement("div",{className:"App"},i.a.createElement(F,null),i.a.createElement(x,null))}),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(53),n(54);var M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,U=Object(s.e)(E,M(Object(s.a)(o.a)));r.a.render(i.a.createElement(l.a,{store:U},i.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sprava_web_app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/sprava_web_app","/service-worker.js");B?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):H(t,e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.e70a8e39.chunk.js.map