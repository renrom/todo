(()=>{"use strict";var e={621:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),r=n.n(o),a=n(314),d=n.n(a)()(r());d.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n:root {\n\t--backgroundcolor-leftpanel: #d4e4e7;\n\t--backgrountcolor-rightpanel: #faf6f6;\n\t--rulercolor: #000053;\n\n\n}\n\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n\n\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: \"Roboto\", sans-serif;\n}\n\nol,\nul {\n\tlist-style: none;\n}\n\nblockquote,\nq {\n\tquotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: '';\n\tcontent: none;\n}\n\nh1 {\n\tfont-weight: 600;\n\tcolor: rgb(100, 98, 98);\n}\n\nhr {\n\tpadding-left: 10px;\n\tmargin-right: 20px;\n\tborder: 2px solid var(--rulercolor);\n\tborder-radius: 30px;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n.container {\n\n\tfont-weight: 400;\n\tdisplay: flex;\n\theight: 100%;\n\n}\n\n.left-container {\n\tpadding-left: 20px;\n\tpadding-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 40px;\n\tjustify-content: flex-start;\n\twidth: 300px;\n\tbackground-color: var(--backgroundcolor-leftpanel);\n\n}\n\n#avatarimage {\n\theight: 40px;\n\tborder-radius: 50%;\n\tborder: 2px solid #ff0000;\n}\n\n.lc-header {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 20px;\n}\n\n.right-container {\n\tpadding-top: 0px;\n\tbackground-color: var(--backgrountcolor-rightpanel);\n\twidth: 100%;\n\n}\n\n.btn-wrapper,\n.btn-projects {\n\tdisplay: flex;\n\tjustify-content: start;\n\tgap: 5px;\n\talign-items: center;\n\tfont-weight: 600;\n\tfont-size: 0.9rem;\n\n}\n\n.btn-container,\n.btn-projects {\n\tborder: 1px;\n\tbackground-color: var(--backgroundcolor-leftpanel);\n\tcursor: pointer;\n\tmargin-right: 30px;\n\ttransition: 0.3s;\n}\n\n#lc-todopanel-menu,\n#lc-projectpanel-menu {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5px;\n}\n\n.btn-image {\n\tfilter: invert(11%) sepia(87%) saturate(7464%) hue-rotate(0deg) brightness(92%) contrast(119%);\n\n}\n\n.lp-header {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.lp-btn {\n\tborder: 0;\n\tbackground-color: var(--backgroundcolor-leftpanel);\n\tcursor: pointer;\n}\n\n.btn-container:hover,\n.btn-projects:hover {\n\tbackground-color: #b4b4e4;\n\tborder-radius: 5px;\n}\n\n.formlayout,\n.addproject {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tgap: 15px;\n}\n\n#description,\n#projectname,\n#editprojectname {\n\tfont-size: 1rem;\n}\n.dialog-header,\n.dialog-project-header,\n.dialog-remove-project,\n.dialog-remove-todo\n\n {\n\ttext-align: center;\n\tfont-size: 1.4rem;\n\tfont-weight: 600;\n    color: #000053;\n\tmargin-bottom: 20px;\n}\n\n.dialog-row {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\t\n}\n\n.dialog-edit-bottom {\n\t\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.delete-project {\n\tpadding-top: 20px;\n}\n\n.dialog-btn,\n.removeyesno,\n.removeyesnotodo {\n\n\tdisplay: flex;\n\tpadding-top: 20px;\n\tjustify-content: flex-end;\n\tgap: 5px;\n}\n\n#addtodo,\n#addproject,\n#editproject,\n#removeproject,\n#removetodo {\n\tborder-radius: 15px;\n\tbox-shadow: 10px 10px 15px -10px rgba(0, 0, 0, 0.75);\n\tborder-color: 000053;\n\tmargin-left: 30%;\n\tmargin-top: 10%;\n\twidth: 350px;\n\tposition: absolute;\n}\n\n#removeproject,\n#removetodo {\n\tmargin-top: 30%;\n\n}\n#canceltodo,\n#cancelproject,\n#canceleditproject,\n#sureno,\n#surenotodo\n{\n\tbackground-color: rgb(233, 228, 228);\n\tcolor: lightslategrey;\n}\n\n#savetodo,\n#saveproject,\n#saveeditproject,\n#sureyes,\n#sureyestodo {\n\tbackground-color: green;\n\tcolor: lightcyan;\n}\n\n.dialog-btn>button,\n#sureyes,\n#sureno,\n#sureyestodo,\n#surenotodo {\n\tmargin-left: 20px;\n\tborder: 0;\n\tpadding: 10px 20px 10px 20px;\n\tcursor: pointer;\n\tfont-size: 1rem;\n\tfont-weight: 600;\n\tborder-radius: 6px;\n\ttransition-duration: 0.5s;\n}\n\n.dialog-btn>button:hover {\n\tbox-shadow: 0 12px 16px 0 rgba(71, 71, 71, 0.24), 0 17px 30px 0 rgba(0, 0, 0, 0.19);\n}\n\n.prio > label, .prio > input {\n\tcursor: pointer;\n\t\n}\n\n.dialog-row > input, \n.prio-row\n {\n\tborder-radius: 10px;\n\tbackground-color: #f0f0e7;\n\tborder: 0;\n\tpadding: 10px;\n\twidth: 100%;\n\t\n }\n\n .project-row {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder: 1px solid red;\n\tborder-radius: 10px;\n\tbackground-color: #f0f0e7;\n\tborder: 0;\n\tpadding: 10px;\n\n }\n\n#project {\n\tborder: 0;\n\tbackground-color: white;\n\tborder-radius: 5px;\n\tfont-size: 1rem;\n\tpadding: 10px;\n}\n\n fieldset {\n\twidth: 100%;\n\tmargin-right: 20px;\n }\n.prio-row {\n\tdisplay: flex;\n\tpadding: 10px;\n\tjustify-content: space-between;\n}\n\n#title  {\n\tfont-size: 1.5rem;\n\tborder-radius: 10px;\n\tbackground-color: #f0f0e7;\n\tborder: 0;\n\tpadding: 10px;\n\n\n}\n\n#headerimage {\n\twidth: 60px;\n}\n.right-container-header {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 2rem;\t\n\tgap: 30px;\n\tfont-weight: 600;\n\theight: 10%;\n\tbackground-color: white;\n\tborder-bottom: 2px solid #000053;\n\t\n}\n\n.right-container-body {\n\tmargin: 20px 0px 00px 20px;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(100px, 300px));\n\tgap: 60px;\n}\n\n.todoitem {\n\tbackground: linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\twidth: 300px;\n\tborder: 2px solid #000053;\n\tpadding: 10px;\n\tborder-radius: 5%;\n\tbox-shadow: 10px 10px 15px -10px rgba(0, 0, 0, 0.75);\t\n\tpadding: 20px 20px 20px 20px;\n}\n\n.todo-hr {\n\twidth: 80%;\n\tborder: 1px solid #000053;\n\talign-self: center;\n}\n.todo-header {\n\talign-self: center;\n\tfont-size: 1.5rem;\n\t\n}\n\n.btn-delete-todo,\n.btn-edit-todo,\n.btn-markDone {\n\theight: 40px;\n\tcursor: pointer;\n\ttransition: 0.5s;\n}\n\n.btn-delete-todo:hover,\n.btn-edit-todo:hover,\n#surenotodo:hover,\n#sureyestodo:hover,\n.btn-markDone:hover {\n\tbox-shadow: 0 12px 16px 0 rgba(71, 71, 71, 0.24), 0 17px 30px 0 rgba(0, 0, 0, 0.19);\n\n}\n\n.btn-todo-wrapper {\n\tmargin-top: 15px;\n\tdisplay: flex;\n\tjustify-content: start;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.btn-markDone {\n\tmargin-top: 15px;\n}\n.btn-todo-all {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n}",""]);const c=d},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(d[l]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);o&&d[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},d=[],c=0;c<e.length;c++){var l=e[c],i=o.base?l[0]+o.base:l[0],s=a[i]||0,u="".concat(i," ").concat(s);a[i]=s+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}d.push(u)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<a.length;d++){var c=n(a[d]);t[c].references--}for(var l=o(e,r),i=0;i<a.length;i++){var s=n(a[i]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},831:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return l.default}});var o=p(n(518)),r=p(n(948)),a=p(n(73)),d=p(n(186)),c=p(n(808)),l=p(n(775)),i=p(n(37)),s=p(n(910)),u=p(n(792));function p(e){return e&&e.__esModule?e:{default:e}}},311:(e,t)=>{function n(e){return 14+(e+64>>>9<<4)+1}function o(e,t){const n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function r(e,t,n,r,a,d){return o((c=o(o(t,e),o(r,d)))<<(l=a)|c>>>32-l,n);var c,l}function a(e,t,n,o,a,d,c){return r(t&n|~t&o,e,t,a,d,c)}function d(e,t,n,o,a,d,c){return r(t&o|n&~o,e,t,a,d,c)}function c(e,t,n,o,a,d,c){return r(t^n^o,e,t,a,d,c)}function l(e,t,n,o,a,d,c){return r(n^(t|~o),e,t,a,d,c)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){const t=[],n=32*e.length,o="0123456789abcdef";for(let r=0;r<n;r+=8){const n=e[r>>5]>>>r%32&255,a=parseInt(o.charAt(n>>>4&15)+o.charAt(15&n),16);t.push(a)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[n(t)-1]=t;let r=1732584193,i=-271733879,s=-1732584194,u=271733878;for(let t=0;t<e.length;t+=16){const n=r,p=i,f=s,m=u;r=a(r,i,s,u,e[t],7,-680876936),u=a(u,r,i,s,e[t+1],12,-389564586),s=a(s,u,r,i,e[t+2],17,606105819),i=a(i,s,u,r,e[t+3],22,-1044525330),r=a(r,i,s,u,e[t+4],7,-176418897),u=a(u,r,i,s,e[t+5],12,1200080426),s=a(s,u,r,i,e[t+6],17,-1473231341),i=a(i,s,u,r,e[t+7],22,-45705983),r=a(r,i,s,u,e[t+8],7,1770035416),u=a(u,r,i,s,e[t+9],12,-1958414417),s=a(s,u,r,i,e[t+10],17,-42063),i=a(i,s,u,r,e[t+11],22,-1990404162),r=a(r,i,s,u,e[t+12],7,1804603682),u=a(u,r,i,s,e[t+13],12,-40341101),s=a(s,u,r,i,e[t+14],17,-1502002290),i=a(i,s,u,r,e[t+15],22,1236535329),r=d(r,i,s,u,e[t+1],5,-165796510),u=d(u,r,i,s,e[t+6],9,-1069501632),s=d(s,u,r,i,e[t+11],14,643717713),i=d(i,s,u,r,e[t],20,-373897302),r=d(r,i,s,u,e[t+5],5,-701558691),u=d(u,r,i,s,e[t+10],9,38016083),s=d(s,u,r,i,e[t+15],14,-660478335),i=d(i,s,u,r,e[t+4],20,-405537848),r=d(r,i,s,u,e[t+9],5,568446438),u=d(u,r,i,s,e[t+14],9,-1019803690),s=d(s,u,r,i,e[t+3],14,-187363961),i=d(i,s,u,r,e[t+8],20,1163531501),r=d(r,i,s,u,e[t+13],5,-1444681467),u=d(u,r,i,s,e[t+2],9,-51403784),s=d(s,u,r,i,e[t+7],14,1735328473),i=d(i,s,u,r,e[t+12],20,-1926607734),r=c(r,i,s,u,e[t+5],4,-378558),u=c(u,r,i,s,e[t+8],11,-2022574463),s=c(s,u,r,i,e[t+11],16,1839030562),i=c(i,s,u,r,e[t+14],23,-35309556),r=c(r,i,s,u,e[t+1],4,-1530992060),u=c(u,r,i,s,e[t+4],11,1272893353),s=c(s,u,r,i,e[t+7],16,-155497632),i=c(i,s,u,r,e[t+10],23,-1094730640),r=c(r,i,s,u,e[t+13],4,681279174),u=c(u,r,i,s,e[t],11,-358537222),s=c(s,u,r,i,e[t+3],16,-722521979),i=c(i,s,u,r,e[t+6],23,76029189),r=c(r,i,s,u,e[t+9],4,-640364487),u=c(u,r,i,s,e[t+12],11,-421815835),s=c(s,u,r,i,e[t+15],16,530742520),i=c(i,s,u,r,e[t+2],23,-995338651),r=l(r,i,s,u,e[t],6,-198630844),u=l(u,r,i,s,e[t+7],10,1126891415),s=l(s,u,r,i,e[t+14],15,-1416354905),i=l(i,s,u,r,e[t+5],21,-57434055),r=l(r,i,s,u,e[t+12],6,1700485571),u=l(u,r,i,s,e[t+3],10,-1894986606),s=l(s,u,r,i,e[t+10],15,-1051523),i=l(i,s,u,r,e[t+1],21,-2054922799),r=l(r,i,s,u,e[t+8],6,1873313359),u=l(u,r,i,s,e[t+15],10,-30611744),s=l(s,u,r,i,e[t+6],15,-1560198380),i=l(i,s,u,r,e[t+13],21,1309151649),r=l(r,i,s,u,e[t+4],6,-145523070),u=l(u,r,i,s,e[t+11],10,-1120210379),s=l(s,u,r,i,e[t+2],15,718787259),i=l(i,s,u,r,e[t+9],21,-343485551),r=o(r,n),i=o(i,p),s=o(s,f),u=o(u,m)}return[r,i,s,u]}(function(e){if(0===e.length)return[];const t=8*e.length,o=new Uint32Array(n(t));for(let n=0;n<t;n+=8)o[n>>5]|=(255&e[n/8])<<n%32;return o}(e),8*e.length))}},140:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};t.default=n},808:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="00000000-0000-0000-0000-000000000000"},792:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(37))&&o.__esModule?o:{default:o};t.default=function(e){if(!(0,r.default)(e))throw TypeError("Invalid UUID");let t;const n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n}},656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},858:(e,t)=>{let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)};const o=new Uint8Array(16)},42:(e,t)=>{function n(e,t,n,o){switch(e){case 0:return t&n^~t&o;case 1:case 3:return t^n^o;case 2:return t&n^t&o^n&o}}function o(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){const t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const a=e.length/4+2,d=Math.ceil(a/16),c=new Array(d);for(let t=0;t<d;++t){const n=new Uint32Array(16);for(let o=0;o<16;++o)n[o]=e[64*t+4*o]<<24|e[64*t+4*o+1]<<16|e[64*t+4*o+2]<<8|e[64*t+4*o+3];c[t]=n}c[d-1][14]=8*(e.length-1)/Math.pow(2,32),c[d-1][14]=Math.floor(c[d-1][14]),c[d-1][15]=8*(e.length-1)&4294967295;for(let e=0;e<d;++e){const a=new Uint32Array(80);for(let t=0;t<16;++t)a[t]=c[e][t];for(let e=16;e<80;++e)a[e]=o(a[e-3]^a[e-8]^a[e-14]^a[e-16],1);let d=r[0],l=r[1],i=r[2],s=r[3],u=r[4];for(let e=0;e<80;++e){const r=Math.floor(e/20),c=o(d,5)+n(r,l,i,s)+u+t[r]+a[e]>>>0;u=s,s=i,i=o(l,30)>>>0,l=d,d=c}r[0]=r[0]+d>>>0,r[1]=r[1]+l>>>0,r[2]=r[2]+i>>>0,r[3]=r[3]+s>>>0,r[4]=r[4]+u>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}},910:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=d;var o,r=(o=n(37))&&o.__esModule?o:{default:o};const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function d(e,t=0){return a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]}t.default=function(e,t=0){const n=d(e,t);if(!(0,r.default)(n))throw TypeError("Stringified UUID is invalid");return n}},518:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(858))&&o.__esModule?o:{default:o},a=n(910);let d,c,l=0,i=0;t.default=function(e,t,n){let o=t&&n||0;const s=t||new Array(16);let u=(e=e||{}).node||d,p=void 0!==e.clockseq?e.clockseq:c;if(null==u||null==p){const t=e.random||(e.rng||r.default)();null==u&&(u=d=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==p&&(p=c=16383&(t[6]<<8|t[7]))}let f=void 0!==e.msecs?e.msecs:Date.now(),m=void 0!==e.nsecs?e.nsecs:i+1;const g=f-l+(m-i)/1e4;if(g<0&&void 0===e.clockseq&&(p=p+1&16383),(g<0||f>l)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=f,i=m,c=p,f+=122192928e5;const h=(1e4*(268435455&f)+m)%4294967296;s[o++]=h>>>24&255,s[o++]=h>>>16&255,s[o++]=h>>>8&255,s[o++]=255&h;const y=f/4294967296*1e4&268435455;s[o++]=y>>>8&255,s[o++]=255&y,s[o++]=y>>>24&15|16,s[o++]=y>>>16&255,s[o++]=p>>>8|128,s[o++]=255&p;for(let e=0;e<6;++e)s[o+e]=u[e];return t||(0,a.unsafeStringify)(s)}},948:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(25)),r=a(n(311));function a(e){return e&&e.__esModule?e:{default:e}}var d=(0,o.default)("v3",48,r.default);t.default=d},25:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,n){function o(e,o,d,c){var l;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof o&&(o=(0,a.default)(o)),16!==(null===(l=o)||void 0===l?void 0:l.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let i=new Uint8Array(16+e.length);if(i.set(o),i.set(e,o.length),i=n(i),i[6]=15&i[6]|t,i[8]=63&i[8]|128,d){c=c||0;for(let e=0;e<16;++e)d[c+e]=i[e];return d}return(0,r.unsafeStringify)(i)}try{o.name=e}catch(e){}return o.DNS=d,o.URL=c,o};var o,r=n(910),a=(o=n(792))&&o.__esModule?o:{default:o};const d="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=d;const c="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=c},73:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(140)),r=d(n(858)),a=n(910);function d(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){if(o.default.randomUUID&&!t&&!e)return o.default.randomUUID();const d=(e=e||{}).random||(e.rng||r.default)();if(d[6]=15&d[6]|64,d[8]=63&d[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=d[e];return t}return(0,a.unsafeStringify)(d)}},186:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(25)),r=a(n(42));function a(e){return e&&e.__esModule?e:{default:e}}var d=(0,o.default)("v5",80,r.default);t.default=d},37:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(656))&&o.__esModule?o:{default:o};t.default=function(e){return"string"==typeof e&&r.default.test(e)}},775:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(37))&&o.__esModule?o:{default:o};t.default=function(e){if(!(0,r.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{class e{constructor(e,t,n,o,r,a,d,c){this.title=e,this.description=t,this.duedate=n,this.priority=o,this.notes=r,this.finished=a,this.projectid=d,this.todoid=c}flipFinished(){this.finished?this.finished=!1:this.finished=!0}}class t{constructor(){}addItem(e,t){t.push(e),localStorage.setItem("todo",JSON.stringify(t))}removeItem(e,t){let n=t.filter((t=>t.todoid!==e));localStorage.setItem("todo",JSON.stringify(n))}loadToDoItems(){return JSON.parse(localStorage.getItem("todo"))}checkProjectId(e,t){return t.some((t=>t.projectid===e))}loadToDoItems(){return JSON.parse(localStorage.getItem("todo"))}saveToDoItems(e){localStorage.setItem("todo",JSON.stringify(e))}}class o{constructor(e,t){this.description=e,this.projectid=t}}class r{constructor(){}addItem(e,t){t.push(e),localStorage.setItem("projects",JSON.stringify(t))}removeItem(e,t){let n=t.filter((t=>t.projectid!==e));localStorage.setItem("projects",JSON.stringify(n))}loadProjects(){return JSON.parse(localStorage.getItem("projects"))}}const a=n.p+"03ff0422c6ac8de30b16.jpg",d=n.p+"1c59174103fba0f44c90.svg",c=n.p+"1d623bc9baf259497315.svg",l=n.p+"4e0f8ecf8285efb39e6a.svg",i=n.p+"642da2f9203fed7e99a0.svg",s=n.p+"a5d436577a527c008d9f.svg",u=n.p+"f5849afc9f32f8f347c2.svg";let p=new t,f=new r;class m{constructor(){}rightPanelHeader(e){const t=document.querySelector("#headerimage"),n=document.querySelector("#headertext");t.src=c,n.textContent=e}rightPanelBodyUpcoming(){p.loadToDoItems(),f.loadProjects(),document.querySelector(".right-container-body").innerHTML=""}rightPanelBody(e){let t="";const n=f.loadProjects();let o=document.querySelector(".right-container-body");o.innerHTML="",null===e&&(e=[]),e.forEach((e=>{const r=document.createElement("div");r.className="todoitem";const a=document.createElement("div");a.className="todo-header",a.textContent=e.title;const d=document.createElement("hr");d.className="todo-hr";const c=document.createElement("div");c.className="todo-description",c.textContent=e.description;const l=document.createElement("div");l.className="todo-duedate",l.textContent=e.duedate;const p=document.createElement("div");p.className="todo-priority",p.style.color="green","low"===e.priority&&(p.style.color="blue"),"high"===e.priority&&(p.style.color="orange"),p.textContent=e.priority;const f=document.createElement("div");f.className="todo-finished",e.finished?(t="ToDo is done",f.style.color="green"):(t="ToDo is not finished",f.style.color="red"),f.textContent=t;const m=document.createElement("div");m.className="btn-todo-all";const g=document.createElement("div");g.className="btn-todo-wrapper";const h=document.createElement("img");h.className="btn-delete-todo";const y=document.createElement("img");y.className="btn-edit-todo";const b=document.createElement("img");b.className="btn-markDone",b.src=u,h.src=i,y.src=s,b.addEventListener("click",(function(t){t.preventDefault(),v("marktododone",void 0,void 0,e.todoid)})),h.addEventListener("click",(function(t){t.preventDefault(),v("deletetodo",void 0,void 0,e.todoid)})),y.addEventListener("click",(function(t){t.preventDefault(),v("edittodo",void 0,void 0,e.todoid)})),g.appendChild(h),g.appendChild(y),m.appendChild(g),m.appendChild(b);const x=document.createElement("div");x.className="todo-project",x.textContent=n.find((t=>t.projectid===e.projectid)).description,r.appendChild(a),r.appendChild(d),r.appendChild(c),r.appendChild(l),r.appendChild(p),r.appendChild(f),r.appendChild(x),r.appendChild(m),o.appendChild(r)}))}rightPanelBodyToday(){const e=p.loadToDoItems(),t=(new Date).toISOString().substring(0,10);return e.filter((e=>e.duedate===t))}}const g=n(831);let h=new r,y=new t;function v(n,r,a,d){if("marktododone"===n){let e=y.loadToDoItems(),t=new m,n=e.find((e=>e.todoid===d));n.finished?n.finished=!1:n.finished=!0;let o=e.findIndex((e=>e.todoid===n.todoid));e[o].finished=n.finished,localStorage.setItem("todo",JSON.stringify(e)),t.rightPanelHeader("All ToDo's"),t.rightPanelBody(y.loadToDoItems())}if("upcoming"===n){let e=new t,n=new m;n.rightPanelHeader("All ToDo's"),n.rightPanelBody(e.loadToDoItems())}if("today"===n){new t;let e=new m;e.rightPanelHeader("All ToDo's for today"),e.rightPanelBody(e.rightPanelBodyToday())}if("deletetodo"===n){const e=document.querySelector("#removetodo"),t=document.querySelector("#sureyestodo");document.querySelector("#surenotodo");let n=new m,o=y.loadToDoItems();e.showModal(),t.addEventListener("click",(function(t){t.preventDefault(),y.removeItem(d,o),n.rightPanelHeader("All ToDo's"),n.rightPanelBody(y.loadToDoItems()),e.close()}))}if("editproject"===n){const e=document.querySelector("#saveeditproject"),t=document.querySelector("#canceleditproject"),n=document.querySelector(".delete-project"),o=document.querySelector("#editproject"),d=document.querySelector("#removeproject");let c=h.loadProjects();const l=document.querySelector(".delete-project"),s=document.createElement("img");new b,l.innerHTML="",s.src=i,s.style.height="30px",s.style.cursor="pointer",l.appendChild(s),document.querySelector("#editprojectname").value=a,o.showModal(),n.addEventListener("click",(function(e){e.preventDefault();const t=document.querySelector("#sureyes"),n=document.querySelector("#sureno"),a=new b;let l=y.loadToDoItems();d.showModal(),t.addEventListener("click",(function(e){e.preventDefault(),null===l&&(l=[]),y.checkProjectId(r,l)?alert("Sorry, there is still a ToDo to Do on this project!"):(h.removeItem(r,c),a.leftPanelProjects(h.loadProjects())),d.close(),o.close()}),{once:!0}),n.addEventListener("click",(function(e){e.preventDefault(),d.close(),o.close()}),{once:!0})}),{once:!0}),e.addEventListener("click",(function(e){e.preventDefault();const t=new b,n=document.querySelector("#editprojectname").value;let a=c.findIndex((e=>e.projectid===r));c[a].description=n,localStorage.setItem("projects",JSON.stringify(c)),o.close(),t.leftPanelProjects(h.loadProjects())}),{once:!0}),t.addEventListener("click",(e=>{e.preventDefault(),o.close()}),{once:!0})}if("addproject"===n){const e=document.querySelector("#saveproject"),t=document.querySelector("#cancelproject"),n=document.querySelector("#addproject"),r=h.loadProjects();n.showModal(),e.addEventListener("click",(function(e){e.preventDefault();const t=document.querySelector("#projectname").value;document.querySelector("#projectname").value="";const a=g.v4(),d=new b;let c=new o(t,a);h.addItem(c,r),n.close(),d.leftPanelProjects(h.loadProjects())}),{once:!0}),t.addEventListener("click",(e=>{e.preventDefault(),n.close()}),{once:!0})}if("edittodo"===n){const e=document.querySelector("#savetodo"),t=(document.querySelector("#canceltodo"),document.querySelector("#addtodo")),n=document.querySelector("#project"),o=h.loadProjects();n.innerHTML="";let r=new m,a=y.loadToDoItems(),c=a.findIndex((e=>e.todoid===d)),l=a[c];document.querySelector("#title").value=l.title,document.querySelector("#description").value=l.description,document.querySelector("#duedate").value=l.duedate;const i=document.getElementsByName("priority");"low"===l.priority&&(i[0].checked=!0),"medium"===l.priority&&(i[1].checked=!0),"high"===l.priority&&(i[2].checked=!0),o.forEach((e=>{let t=document.createElement("option");t.text=e.description,t.value=e.projectid,n.add(t)})),document.querySelector("#project").value=l.projectid,t.showModal(),e.addEventListener("click",(function(e){e.preventDefault(),a[c].title=document.querySelector("#title").value,a[c].description=document.querySelector("#description").value,a[c].duedate=document.querySelector("#duedate").value;const n=document.getElementsByName("priority");let o="";for(let e=0;e<n.length;e++)n[e].checked&&(o=n[e].value);a[c].priority=o,a[c].projectid=document.querySelector("#project").value,localStorage.setItem("todo",JSON.stringify(a)),t.close(),r.rightPanelHeader("All ToDo's"),r.rightPanelBody(y.loadToDoItems())}))}if("addtodo"===n){const t=document.querySelector("#savetodo"),n=document.querySelector("#canceltodo"),o=document.querySelector("#addtodo"),r=document.querySelector("#project"),a=h.loadProjects();let d=y.loadToDoItems();const c=g.v4();r.innerHTML="",null===d&&(d=[]),document.getElementsByName("priority")[1].checked=!0,a.forEach((e=>{let t=document.createElement("option");t.text=e.description,t.value=e.projectid,r.add(t)})),new Date,document.querySelector("#duedate").value=(new Date).toISOString().substring(0,10),o.showModal(),t.addEventListener("click",(function(t){t.preventDefault();const n=document.querySelector("#title").value;document.querySelector("#title").value="";const r=document.querySelector("#description").value;document.querySelector("#description").value="";const a=document.querySelector("#duedate").value,l=document.getElementsByName("priority");let i="";for(let e=0;e<l.length;e++)l[e].checked&&(i=l[e].value);const s=document.querySelector("#project").value;if(""===n)alert("Please add at least a title");else{const t=new e(n,r,a,i,"notes",!1,s,c);y.addItem(t,d);let l=new m;l.rightPanelHeader("All ToDo's"),l.rightPanelBody(y.loadToDoItems()),o.close()}}),{once:!0}),n.addEventListener("click",(e=>{e.preventDefault(),document.querySelector(".formlayout").reset(),o.close()}),{once:!0})}}class b{constructor(){}leftPanelAvatar(){const e=document.querySelector("#avatarimage"),t=document.querySelector("#avatartext");e.src=a;let n="";n=(new Date).getHours()<13?"Good morning ":"Good afternoon ",t.textContent=n+" Mr. Right"}leftPanelTodo(){const e=document.querySelector("#lc-todopanel-header"),t=document.createElement("h1"),n=document.createElement("hr");t.textContent="ToDo for You",e.appendChild(t),e.appendChild(n)}leftPanelProject(){const e=document.querySelector("#lc-projectpanel-header"),t=document.createElement("h1"),n=document.createElement("hr");t.textContent="Projects for You";const o=document.createElement("div"),r=document.createElement("button"),a=document.createElement("img");r.className="lp-btn",a.src=d,o.className="lp-header",r.appendChild(a),o.appendChild(t),o.appendChild(r),e.appendChild(o),e.appendChild(n),r.addEventListener("click",(function(){v("addproject")}))}leftPanelTodoMenu(){function e(e,t,n,o,r){let a=document.querySelector("#lc-todopanel-menu"),d=document.createElement("button"),c=document.createElement("div"),l=document.createElement("img"),i=document.createElement("span");d.className=e,c.className=t,l.src=r,l.className=n,i.innerText=o,c.appendChild(l),c.appendChild(i),d.appendChild(c),a.appendChild(d),d.addEventListener("click",(function(){v(this.className.split(" ")[0])}))}e("addtodo   btn-container","btn-wrapper","btn-image","Add ToDo",d),e("today     btn-container","btn-wrapper","btn-image","Today",c),e("upcoming  btn-container","btn-wrapper","btn-image","Upcoming",l)}leftPanelProjects(e){document.querySelector("#lc-projectpanel-menu").innerHTML="",e.forEach((e=>{!function(e,t,n,o){let r=document.querySelector("#lc-projectpanel-menu"),a=document.createElement("button");a.className="btn-projects",a.innerText=t,a.addEventListener("click",(function(e){e.preventDefault(),v("editproject",n,o)})),r.appendChild(a)}(0,e.description,e.projectid,e.description)}))}}var x=n(72),j=n.n(x),w=n(825),S=n.n(w),P=n(659),I=n.n(P),D=n(56),E=n.n(D),q=n(540),k=n.n(q),T=n(113),M=n.n(T),_=n(621),C={};C.styleTagTransform=M(),C.setAttributes=E(),C.insert=I().bind(null,"head"),C.domAPI=S(),C.insertStyleElement=k(),j()(_.A,C),_.A&&_.A.locals&&_.A.locals;let N=new t,O=(N.loadToDoItems(),new r),A=O.loadProjects();if(null===A){A=[];const e=n(831).v4();let t=new o("Default",e);O.addItem(t,A)}let U=new b,L=new m;U.leftPanelAvatar(),U.leftPanelTodo(),U.leftPanelProject(),U.leftPanelTodoMenu(),U.leftPanelProjects(A),L.rightPanelHeader("All ToDo's"),L.rightPanelBody(N.loadToDoItems())})()})();