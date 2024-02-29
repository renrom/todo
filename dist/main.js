(()=>{"use strict";var n={621:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(601),r=e.n(o),a=e(314),i=e.n(a)()(r());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n:root {\n\t--backgroundcolor-leftpanel: #d4e4e7;\n\t--backgrountcolor-rightpanel: #faf6f6;\n\t--rulercolor: #000053;\n\n\n}\n\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n\n\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: \"Roboto\", sans-serif;\n}\n\nol,\nul {\n\tlist-style: none;\n}\n\nblockquote,\nq {\n\tquotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: '';\n\tcontent: none;\n}\n\nh1 {\n\tfont-weight: 600;\n\tcolor: rgb(100, 98, 98);\n}\n\nhr {\n\tpadding-left: 10px;\n\tmargin-right: 30px;\n\tborder: 2px solid var(--rulercolor);\n\tborder-radius: 30px;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n.container {\n\n\tfont-weight: 400;\n\tdisplay: flex;\n\theight: 100%;\n\n}\n\n.left-container {\n\tpadding-left: 20px;\n\tpadding-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 40px;\n\tjustify-content: flex-start;\n\twidth: 300px;\n\tbackground-color: var(--backgroundcolor-leftpanel);\n\n}\n\n#avatarimage {\n\theight: 40px;\n\tborder-radius: 50%;\n\tborder: 2px solid #ff0000;\n}\n\n.lc-header {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.right-container {\n\tpadding-top: 20px;\n\tbackground-color: var(--backgrountcolor-rightpanel);\n\twidth: 100%;\n\n}\n\n.btn-wrapper,\n.btn-projects {\n\tdisplay: flex;\n\tjustify-content: start;\n\tgap: 5px;\n\talign-items: center;\n\tfont-weight: 600;\n\tfont-size: 0.9rem;\n\n}\n\n.btn-container,\n.btn-projects {\n\tborder: 1px;\n\tbackground-color: var(--backgroundcolor-leftpanel);\n\tcursor: pointer;\n\tmargin-right: 30px;\n\ttransition: 0.3s;\n}\n\n#lc-todopanel-menu,\n#lc-projectpanel-menu {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5px;\n}\n\n.btn-image {\n\tfilter: invert(11%) sepia(87%) saturate(7464%) hue-rotate(0deg) brightness(92%) contrast(119%);\n\n}\n\n.btn-container:hover,\n.btn-projects:hover {\n\tbackground-color: #b4b4e4;\n\tborder-radius: 5px;\n}\n\n.formlayout {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tgap: 10px;\n}\n\n.dialog-header {\n\ttext-align: center;\n\tfont-size: 1.4rem;\n\tfont-weight: 600;\n\n\tmargin-bottom: 20px;\n}\n\n.dialog-row {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\n}\n\n.dialog-row>label {\n\twidth: 100px;\n\n}\n\n.dialog-btn {\n\tpadding-top: 20px;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tgap: 5px;\n}\n\n\n#addtodo {\n\tborder-radius: 15px;\n\tbox-shadow: 10px 10px 15px -10px rgba(0, 0, 0, 0.75);\n\tborder-color: rgb(4, 4, 68);\n\tmargin-left: 30%;\n\tmargin-top: 10%;\n\tposition: absolute;\n}\n\n#canceltodo {\n\tbackground-color: rgb(233, 228, 228);\n\tcolor: lightslategrey\n}\n\n#savetodo {\n\tbackground-color: green;\n\tcolor: lightcyan;\n\n}\n\n.dialog-btn>button {\n\tmargin-left: 20px;\n\tborder: 0;\n\tpadding: 10px 20px 10px 20px;\n\tcursor: pointer;\n\tfont-size: 0.8rem;\n\tfont-weight: 600;\n\tborder-radius: 6px;\n\ttransition-duration: 0.5s;\n}\n\n.dialog-btn>button:hover {\n\tbox-shadow: 0 12px 16px 0 rgba(71, 71, 71, 0.24),0 17px 30px 0 rgba(0,0,0,0.19);\n}\n\n",""]);const c=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],s=o.base?l[0]+o.base:l[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=e(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var l=o(n,r),s=0;s<a.length;s++){var d=e(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{class n{constructor(n,t,e,o,r,a,i,c){this.title=n,this.description=t,this.duedate=e,this.priority=o,this.notes=r,this.finished=a,this.projectid=i,this.todoid=c}flipFinished(){this.finished?this.finished=!1:this.finished=!0}}class t{constructor(){}addItem(n,t){t.push(n),localStorage.setItem("todo",JSON.stringify(t))}removeItem(n,t){let e=t.filter((t=>t.todoid!==n));localStorage.setItem("todo",JSON.stringify(e))}loadToDoItems(){return JSON.parse(localStorage.getItem("todo"))}checkProjectId(n,t){return t.some((t=>t.projectid===n))}loadToDoItems(){return JSON.parse(localStorage.getItem("todo"))}saveToDoItems(n){localStorage.setItem("todo",JSON.stringify(n))}}class o{constructor(n,t){this.description=n,this.projectid=t}}class r{constructor(){}addItem(n,t){t.push(n),localStorage.setItem("projects",JSON.stringify(t))}removeItem(n,t){let e=t.filter((t=>t.projectid!==n));localStorage.setItem("projects",JSON.stringify(e))}loadProjects(){return JSON.parse(localStorage.getItem("projects"))}}const a=e.p+"03ff0422c6ac8de30b16.jpg",i=e.p+"1c59174103fba0f44c90.svg",c=e.p+"1d623bc9baf259497315.svg",l=e.p+"4e0f8ecf8285efb39e6a.svg";let s=new r,d=new t;var p=e(72),u=e.n(p),f=e(825),m=e.n(f),g=e(659),h=e.n(g),b=e(56),v=e.n(b),y=e(540),x=e.n(y),w=e(113),j=e.n(w),S=e(621),T={};T.styleTagTransform=j(),T.setAttributes=v(),T.insert=h().bind(null,"head"),T.domAPI=m(),T.insertStyleElement=x(),u()(S.A,T),S.A&&S.A.locals&&S.A.locals;let I=(new t).loadToDoItems(),k=new r,P=k.loadProjects();if(null===P){P=[];let n=new o("Default",1);k.addItem(n,P)}null===I&&(I=[]);let q=new class{constructor(){}leftPanelAvatar(){const n=document.querySelector("#avatarimage"),t=document.querySelector("#avatartext");n.src=a;let e="";e=(new Date).getHours()<13?"Good morning ":"Good afternoon ",t.textContent=e+" Mr. Right"}leftPanelTodo(){const n=document.querySelector("#lc-todopanel-header"),t=document.createElement("h1"),e=document.createElement("hr");t.textContent="ToDo for You",n.appendChild(t),n.appendChild(e)}leftPanelProject(){const n=document.querySelector("#lc-projectpanel-header"),t=document.createElement("h1"),e=document.createElement("hr");t.textContent="Projects for You",n.appendChild(t),n.appendChild(e)}leftPanelTodoMenu(){function t(t,e,o,r,a){let i=document.querySelector("#lc-todopanel-menu"),c=document.createElement("button"),l=document.createElement("div"),p=document.createElement("img"),u=document.createElement("span");c.className=t,l.className=e,p.src=a,p.className=o,u.innerText=r,l.appendChild(p),l.appendChild(u),c.appendChild(l),i.appendChild(c),c.addEventListener("click",(function(){!function(t){if("addtodo"===t){const t=document.querySelector("#savetodo"),e=document.querySelector("#canceltodo"),o=document.querySelector("#addtodo"),r=document.querySelector("#project"),a=s.loadProjects();let i=d.loadToDoItems();null===i&&(i=[]),a.forEach((n=>{let t=document.createElement("option");t.text=n.description,t.value=n.projectid,r.add(t)})),o.showModal(),t.addEventListener("click",(function(t){t.preventDefault();const e=document.querySelector("#title").value,r=document.querySelector("#description").value,a=document.querySelector("#duedate").value,c=document.getElementsByName("priority");let l="";for(let n=0;n<c.length;n++)c[n].checked&&(l=c[n].value);const s=document.querySelector("#project").value,p=new n(e,r,a,l,"notes",!1,s,1);d.addItem(p,i),o.close()})),e.addEventListener("click",(n=>{n.preventDefault(),o.close()}))}}(this.className.split(" ")[0])}))}t("addtodo   btn-container","btn-wrapper","btn-image","Add ToDo",i),t("today     btn-container","btn-wrapper","btn-image","Today",c),t("upcoming  btn-container","btn-wrapper","btn-image","Upcoming",l),t("addproject  btn-container","btn-wrapper","btn-image","Add Project",i)}leftPanelProjects(n){n.forEach((n=>{!function(n,t){let e=document.querySelector("#lc-projectpanel-menu"),o=document.createElement("button");o.className="btn-projects",o.innerText=t,e.appendChild(o)}(0,n.description)}))}};q.leftPanelAvatar(),q.leftPanelTodo(),q.leftPanelProject(),q.leftPanelTodoMenu(),q.leftPanelProjects(P)})()})();