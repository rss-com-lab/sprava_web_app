(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,eventName:"Event Title 1",location:"Event location",time:"00:00",description:"something about this event\nLorem ipsum dolor sit amet, et augue accommodare contentiones nam, quod insolens at est. His ut menandri antiopam dignissim. Animal maluisset sit te, ut vix case labitur. Iuvaret assueverit ad eum, id porro detraxit delicata has, nam ex causae expetenda."},{id:2,eventName:"Event Title 2",location:"Event location",time:"00:00",description:"something about this event\nLorem ipsum dolor sit amet, et augue accommodare contentiones nam, quod insolens at est. His ut menandri antiopam dignissim. Animal maluisset sit te, ut vix case labitur. Iuvaret assueverit ad eum, id porro detraxit delicata has, nam ex causae expetenda."},{id:3,eventName:"Event Title 3",location:"Event location",time:"00:00",description:"something about this event\nLorem ipsum dolor sit amet, et augue accommodare contentiones nam, quod insolens at est. His ut menandri antiopam dignissim. Animal maluisset sit te, ut vix case labitur. Iuvaret assueverit ad eum, id porro detraxit delicata has, nam ex causae expetenda."},{id:4,eventName:"Event Title 4",location:"Event location",time:"00:00",description:"something about this event\nLorem ipsum dolor sit amet, et augue accommodare contentiones nam, quod insolens at est. His ut menandri antiopam dignissim. Animal maluisset sit te, ut vix case labitur. Iuvaret assueverit ad eum, id porro detraxit delicata has, nam ex causae expetenda."},{id:5,eventName:"Event Title 5",location:"Event location",time:"00:00",description:"something about this event\nLorem ipsum dolor sit amet, et augue accommodare contentiones nam, quod insolens at est. His ut menandri antiopam dignissim. Animal maluisset sit te, ut vix case labitur. Iuvaret assueverit ad eum, id porro detraxit delicata has, nam ex causae expetenda."},{id:6,eventName:"Event Title 6",location:"Event location",time:"00:00",description:"something about this event\nLorem ipsum dolor sit amet, et augue accommodare contentiones nam, quod insolens at est. His ut menandri antiopam dignissim. Animal maluisset sit te, ut vix case labitur. Iuvaret assueverit ad eum, id porro detraxit delicata has, nam ex causae expetenda."},{id:7,eventName:"Event Title 7",location:"Event location",time:"00:00",description:"something about this event\nLorem ipsum dolor sit amet, et augue accommodare contentiones nam, quod insolens at est. His ut menandri antiopam dignissim. Animal maluisset sit te, ut vix case labitur. Iuvaret assueverit ad eum, id porro detraxit delicata has, nam ex causae expetenda."},{id:8,eventName:"Event Title 8",location:"Event location",time:"00:00",description:"something about this event\nLorem ipsum dolor sit amet, et augue accommodare contentiones nam, quod insolens at est. His ut menandri antiopam dignissim. Animal maluisset sit te, ut vix case labitur. Iuvaret assueverit ad eum, id porro detraxit delicata has, nam ex causae expetenda."},{id:9,eventName:"Event Title 9",location:"Event location",time:"00:00",description:"something about this event\nLorem ipsum dolor sit amet, et augue accommodare contentiones nam, quod insolens at est. His ut menandri antiopam dignissim. Animal maluisset sit te, ut vix case labitur. Iuvaret assueverit ad eum, id porro detraxit delicata has, nam ex causae expetenda."},{id:10,eventName:"Event Title 10",location:"Event location",time:"00:00",description:"something about this event\nLorem ipsum dolor sit amet, et augue accommodare contentiones nam, quod insolens at est. His ut menandri antiopam dignissim. Animal maluisset sit te, ut vix case labitur. Iuvaret assueverit ad eum, id porro detraxit delicata has, nam ex causae expetenda."}]},,,,,,,,,,,,,,function(e,t,n){e.exports=n(37)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(12),s=n.n(o),r=n(5),c=n(3),l=function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}},u="SHOW_ALL",d="SHOW_SAVED",m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{visibilityFilter:u},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return{visibilityFilter:t.filter};default:return e}},v=n(14),h=n.n(v),p=n(15),f=n(16),g=n(19),b=n(17),E=n(18),x=n(1),_=(n(29),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(g.a)(this,Object(b.a)(t).call(this,e))).toggleCheckboxChange=function(e){var t=n.props.handleCheckboxChange;n.setState(function(e){return{isChecked:!e.isChecked}}),t(e)},n.state={isChecked:e.isSaved},n.toggleCheckboxChange.bind(Object(x.a)(Object(x.a)(n))),n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.id,a=this.state.isChecked;return i.a.createElement("div",{className:"checkbox__container"},i.a.createElement("label",{htmlFor:n,className:"label__control"},i.a.createElement("input",{type:"checkbox",value:t,checked:a,onChange:this.toggleCheckboxChange,id:n}),t))}}]),t}(i.a.Component));function w(){for(var e=document.querySelectorAll("input[type=checkbox]:checked"),t=[],n=0;n<e.length;n+=1)t.push(e[n].id.replace(/\D+/g,""));localStorage.setItem("checkedEventList",t)}n(30);var k=function(e){var t=e.id,n=e.eventName,a=e.location,o=e.time,s=e.description,r=e.checkboxHidden;return i.a.createElement("div",{className:"events-section__event-container",id:t},i.a.createElement("div",{className:"events-section__event-data"},i.a.createElement("h4",{className:"event-data__event-header"},n),i.a.createElement("div",{className:"event-data__time-location"},i.a.createElement("div",{className:"event-data__event-location"},a),i.a.createElement("span",{className:"event-data__event-time"},o)),i.a.createElement("p",{className:"event-data__event-descr"},s)),i.a.createElement("div",{className:"events-section__event-checkbox"},i.a.createElement(_,{label:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",isSaved:r,handleCheckboxChange:w,id:h()("choose-event-".concat(t))})))},N=(n(31),function(e){var t=e.events;return i.a.createElement("div",{className:"events-section__event-list"},t.map(function(e){return i.a.createElement(k,{key:e.id,id:e.id,eventName:e.eventName,location:e.location,time:e.time,description:e.description,checkboxHidden:Boolean(e.disable)})}))}),I=n(6),L=function(e){switch(e){case u:var t=localStorage.getItem("checkedEventList")?localStorage.getItem("checkedEventList").split(",").map(function(e){return parseInt(e,10)}):[],n=[];return t.length>0&&(t.forEach(function(e){var t=I.find(function(t){return t.id===e});t.disable=!0,n.push(t)}),I.forEach(function(e){if(!n.find(function(t){return t.id===e.id})){var t=e;t.disable=!1,n.push(t)}}),n.sort(function(e,t){return e.id-t.id})),n;case d:var a=localStorage.getItem("checkedEventList")?localStorage.getItem("checkedEventList").split(",").map(function(e){return parseInt(e,10)}):[],i=[];return a.forEach(function(e){var t=I.find(function(t){return t.id===e});t.disable=!0,i.push(t)}),i;default:throw new Error("Unknown filter: ".concat(e))}},S=Object(c.b)(function(e){return{events:L(e.visibilityFilter)}},function(e){return{setVisibilityFilter:function(t){return e(l(t))}}})(N),C=(n(32),function(e){var t=e.onClick,n=e.children;return i.a.createElement("button",{type:"button",onClick:t},n)}),T=Object(c.b)(function(e,t){return{content:t.filter}},function(e,t){return{onClick:function(){return e(l(t.filter))}}})(C),A=(n(33),function(){return i.a.createElement("div",{className:"event-section__controlBtns"},i.a.createElement(T,{filter:u},"All"),i.a.createElement(T,{filter:d},"Saved"))}),y=(n(34),function(){return i.a.createElement("div",{className:"App"},i.a.createElement(A,null),i.a.createElement(S,null))}),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(35),n(36);var j=Object(r.b)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(i.a.createElement(c.a,{store:j},i.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sprava_web_app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/sprava_web_app","/service-worker.js");O?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):H(t,e)})}}()}],[[20,1,2]]]);
//# sourceMappingURL=main.9fd8c9e9.chunk.js.map