/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{a as e}from"./chunk-f5f83825.js";class n{render(){return t("stencil-router",{class:"full-screen"},t("stencil-route",{url:"/:buildIdA/:buildIdB",component:"screenshot-compare",class:"full-screen"}),t("stencil-route",{url:"/",component:"screenshot-lookup",exact:!0,class:"full-screen"}))}static get is(){return"app-root"}}var o="/",r="./",i=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function s(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function a(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function c(t){return t&&t.sensitive?"":"i"}function l(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var o=[],r=0;r<t.length;r++)o.push(l(t[r],e,n).source);return new RegExp("(?:"+o.join("|")+")",c(n))}(t,e,n):function(t,e,n){return function(t,e,n){for(var i=(n=n||{}).strict,a=!1!==n.end,l=s(n.delimiter||o),h=n.delimiters||r,u=[].concat(n.endsWith||[]).map(s).concat("$").join("|"),p="",f=!1,d=0;d<t.length;d++){var y=t[d];if("string"==typeof y)p+=s(y),f=d===t.length-1&&h.indexOf(y[y.length-1])>-1;else{var m=s(y.prefix||""),g=y.repeat?"(?:"+y.pattern+")(?:"+m+"(?:"+y.pattern+"))*":y.pattern;e&&e.push(y),p+=y.optional?y.partial?m+"("+g+")?":"(?:"+m+"("+g+"))?":m+"("+g+")"}}return a?(i||(p+="(?:"+l+")?"),p+="$"===u?"$":"(?="+u+")"):(i||(p+="(?:"+l+"(?="+u+"))?"),f||(p+="(?="+l+"|"+u+")")),new RegExp("^"+p,c(n))}(function(t,e){for(var n,c=[],l=0,h=0,u="",p=e&&e.delimiter||o,f=e&&e.delimiters||r,d=!1;null!==(n=i.exec(t));){var y=n[0],m=n[1],g=n.index;if(u+=t.slice(h,g),h=g+y.length,m)u+=m[1],d=!0;else{var w="",v=t[h],b=n[2],x=n[3],O=n[4],P=n[5];if(!d&&u.length){var A=u.length-1;f.indexOf(u[A])>-1&&(w=u[A],u=u.slice(0,A))}u&&(c.push(u),u="",d=!1);var k=w||p,E=x||O;c.push({name:b||l++,prefix:w,delimiter:k,optional:"?"===P||"*"===P,repeat:"+"===P||"*"===P,partial:""!==w&&void 0!==v&&v!==w,pattern:E?a(E):"[^"+s(k)+"]+?"})}}return(u||h<t.length)&&c.push(u+t.substr(h)),c}(t,n),e,n)}(t,e,n)}function h(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}function u(t,e){return h(t,e)?t.substr(e.length):t}function p(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function f(t){return"/"===t.charAt(0)?t:"/"+t}function d(t){return"/"===t.charAt(0)?t.substr(1):t}function y(t){const{pathname:e,search:n,hash:o}=t;let r=e||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:`?${n}`),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:`#${o}`),r}function m(t){return"/"===t.charAt(0)}function g(t){return Math.random().toString(36).substr(2,t)}function w(t,e){for(let n=e,o=n+1,r=t.length;o<r;n+=1,o+=1)t[n]=t[o];t.pop()}function v(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(function(t,n){return v(t,e[n])});const n=typeof t;if(n!==typeof e)return!1;if("object"===n){const n=t.valueOf(),o=e.valueOf();if(n!==t||o!==e)return v(n,o);const r=Object.keys(t),i=Object.keys(e);return r.length===i.length&&r.every(function(n){return v(t[n],e[n])})}return!1}function b(t,e,n,o){let r;"string"==typeof t?void 0!==(r=function(t){let e=t||"/",n="",o="";const r=e.indexOf("#");-1!==r&&(o=e.substr(r),e=e.substr(0,r));const i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o,query:{},key:""}}(t)).state&&(r.state=e):((r=Object.assign({pathname:""},t)).search&&"?"!==r.search.charAt(0)&&(r.search="?"+r.search),r.hash&&"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash),void 0!==e&&void 0===r.state&&(r.state=e));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}var i;return r.key=n,o?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=function(t,e=""){const n=t&&t.split("/")||[];let o=e&&e.split("/")||[];const r=t&&m(t),i=e&&m(e),s=r||i;if(t&&m(t)?o=n:n.length&&(o.pop(),o=o.concat(n)),!o.length)return"/";let a;if(o.length){const t=o[o.length-1];a="."===t||".."===t||""===t}else a=!1;let c=0;for(let t=o.length;t>=0;t--){const e=o[t];"."===e?w(o,t):".."===e?(w(o,t),c++):c&&(w(o,t),c--)}if(!s)for(;c--;c)o.unshift("..");!s||""===o[0]||o[0]&&m(o[0])||o.unshift("");let l=o.join("/");return a&&"/"!==l.substr(-1)&&(l+="/"),l}(r.pathname,o.pathname)):r.pathname=o.pathname:r.pathname||(r.pathname="/"),r.query=(i=r.search||"")?(/^[?#]/.test(i)?i.slice(1):i).split("&").reduce((t,e)=>{let[n,o]=e.split("=");return t[n]=o?decodeURIComponent(o.replace(/\+/g," ")):"",t},{}):{},r}const x={},O=1e4;let P=0;function A(t,e){for(var n,o,r=null,i=!1,s=!1,a=arguments.length;a-- >2;)E.push(arguments[a]);for(;E.length>0;){var c=E.pop();if(c&&void 0!==c.pop)for(a=c.length;a--;)E.push(c[a]);else"boolean"==typeof c&&(c=null),(s="function"!=typeof t)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(s=!1)),s&&i?r[r.length-1].vtext+=c:null===r?r=[s?{vtext:c}:c]:r.push(s?{vtext:c}:c),i=s}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(a in e.class)e.class[a]&&E.push(a);e.class=E.join(" "),E.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,r||[],T):{vtag:t,vchildren:r,vtext:void 0,vattrs:e,vkey:n,vname:o,w:void 0,g:!1}}function k(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}Object.setPrototypeOf||Array;var E=[],T={forEach:function(t,e){t.forEach(function(t,n,o){return e(k(t),n,o)})},map:function(t,e){return t.map(function(t,n,o){return function(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}(e(k(t),n,o))})}};function S(t,e){return A("context-consumer",{subscribe:t,renderer:e})}var j=function(t,e){void 0===e&&(e=S);var n=new Map,o={historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:()=>{}};function r(t,e){Array.isArray(t)?t.slice().forEach(function(t){e[t]=o[t]}):e[t]=Object.assign({},o),e.forceUpdate()}function i(t){return function(e){n.has(e)||(n.set(e,t),r(t,e))}}function s(t,e){return i(e)(t),function(){n.delete(t)}}return{Provider:function(t,e){return o=t.state,n.forEach(r),e},Consumer:function(t,n){return e(s,n[0])},wrapConsumer:function(t,e){var n=t.is;return function(t){var o=t.children,r=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&(n[o[r]]=t[o[r]])}return n}(t,["children"]);return A(n,Object.assign({ref:i(e)},r),o)}},injectProps:function(t,e){var n=null,o=Object.keys(t.properties).find(function(e){return 1==t.properties[e].elementRef});if(null==o)throw new Error("Please ensure that your Component "+t.is+' has an attribute with an "@Element" decorator. This is required to be able to inject properties.');var r=t.prototype.componentWillLoad;t.prototype.componentWillLoad=function(){if(n=s(this[o],e),r)return r.bind(this)()};var i=t.prototype.componentDidUnload;t.prototype.componentDidUnload=function(){if(n(),i)return i.bind(this)()}}}}(),R=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((o=o.apply(t,e||[])).next())})};class U{constructor(){this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const e=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!e)return this.previousMatch=this.match,this.match=function(t,e={}){"string"==typeof e&&(e={path:e});const{path:n="/",exact:o=!1,strict:r=!1}=e,{re:i,keys:s}=function(t,e){const n=`${e.end}${e.strict}`,o=x[n]||(x[n]={}),r=JSON.stringify(t);if(o[r])return o[r];const i=[],s={re:l(t,i,e),keys:i};return P<O&&(o[r]=s,P+=1),s}(n,{end:o,strict:r}),a=i.exec(t);if(!a)return null;const[c,...h]=a,u=t===c;return o&&!u?null:{path:n,url:"/"===n&&""===c?"/":c,isExact:u,params:s.reduce((t,e,n)=>(t[e.name]=h[n],t),{})}}(t.pathname,{path:this.url,exact:this.exact,strict:!0})}componentDidUpdate(){return R(this,void 0,void 0,function*(){let t={};var e,n;this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):!this.match||(n=this.previousMatch,null==(e=this.match)&&null==n||null!=n&&e&&n&&e.path===n.path&&e.url===n.url&&v(e.params,n.params))||!this.routeViewsUpdated||this.routeViewsUpdated(t)})}render(){if(!this.match||!this.history)return null;const e=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},e,{component:this.component})):this.component?t(this.component,Object.assign({},e)):void 0}static get is(){return"stencil-route"}static get properties(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group",reflectToAttr:!0},history:{type:"Any",attr:"history"},historyType:{type:String,attr:"history-type"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{type:"Any",attr:"match",mutable:!0},routeRender:{type:"Any",attr:"route-render"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}}static get style(){return"stencil-route.inactive{display:none}"}}function L(t,...e){t||console.error(...e)}function C(t,...e){t||console.warn(...e)}j.injectProps(U,["location","history","historyType","routeViewsUpdated"]);const M=()=>{let t,e=[];return{setPrompt:e=>(C(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,n,o,r)=>{if(null!=t){const i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):(C(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==i)}else r(!0)},appendListener:t=>{let n=!0;const o=(...e)=>{n&&t(...e)};return e.push(o),()=>{n=!1,e=e.filter(t=>t!==o)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},H=!("undefined"==typeof window||!window.document||!window.document.createElement),I=(t,e,n)=>t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n),$=(t,e,n)=>t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n),N=(t,e)=>e(window.confirm(t)),_=t=>{var e=window[t],n="__storage_test__";try{return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==e.length}},q=(t="scrollPositions")=>{let e=new Map;if(_("sessionStorage")){const n=window.sessionStorage.getItem(t);e=n?new Map(JSON.parse(n)):e}function n(t,n){if(e.set(t,n),_("sessionStorage")){const t=[];e.forEach((e,n)=>{t.push([n,e])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(t))}}return"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:n,get:function(t){return e.get(t)},has:function(t){return e.has(t)},capture:function(t){n(t,[window.scrollX,window.scrollY])}}},D=()=>{try{return window.history.state||{}}catch(t){return{}}},V={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+d(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:d,decodePath:f},slash:{encodePath:f,decodePath:f}},B=()=>{const t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},W=t=>{const e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};var Y=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((o=o.apply(t,e||[])).next())})};function F(t,e){const n=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:n})}const J={browser:(t={})=>{L(H,"Browser history needs a DOM");const e=window.history,n=(()=>{const t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history})(),o=!(()=>-1===window.navigator.userAgent.indexOf("Trident"))(),r=q(),i=null!=t.forceRefresh&&t.forceRefresh,s=null!=t.getUserConfirmation?t.getUserConfirmation:N,a=null!=t.keyLength?t.keyLength:6,c=t.basename?p(f(t.basename)):"",l=t=>{t=t||{};const{key:e,state:n}=t,{pathname:o,search:r,hash:i}=window.location;let s=o+r+i;return C(!c||h(s,c),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+s+'" to begin with "'+c+'".'),c&&(s=u(s,c)),b(s,n,e||g(a))},d=M(),m=t=>{r.capture(U.location.key),Object.assign(U,t),U.location.scrollPosition=r.get(U.location.key),U.length=e.length,d.notifyListeners(U.location,U.action)},w=t=>{(t=>void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS"))(t)||O(l(t.state))},v=()=>{O(l(D()))};let x=!1;const O=t=>{if(x)x=!1,m();else{const e="POP";d.confirmTransitionTo(t,e,s,n=>{n?m({action:e,location:t}):P(t)})}},P=t=>{let e=k.indexOf(U.location.key);-1===e&&(e=0);let n=k.indexOf(t.key);-1===n&&(n=0);const o=e-n;o&&(x=!0,T(o))},A=l(D());let k=[A.key];const E=t=>c+y(t),T=t=>{e.go(t)};let S=0;const j=t=>{1===(S+=t)?(I(window,"popstate",w),o&&I(window,"hashchange",v)):0===S&&($(window,"popstate",w),o&&$(window,"hashchange",v))};let R=!1;const U={length:e.length,action:"POP",location:A,createHref:E,push:(t,o)=>{C(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const r=b(t,o,g(a),U.location);d.confirmTransitionTo(r,"PUSH",s,t=>{if(!t)return;const o=E(r),{key:s,state:a}=r;if(n)if(e.pushState({key:s,state:a},void 0,o),i)window.location.href=o;else{const t=k.indexOf(U.location.key),e=k.slice(0,-1===t?0:t+1);e.push(r.key),k=e,m({action:"PUSH",location:r})}else C(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=o})},replace:(t,o)=>{C(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const r=b(t,o,g(a),U.location);d.confirmTransitionTo(r,"REPLACE",s,t=>{if(!t)return;const o=E(r),{key:s,state:a}=r;if(n)if(e.replaceState({key:s,state:a},void 0,o),i)window.location.replace(o);else{const t=k.indexOf(U.location.key);-1!==t&&(k[t]=r.key),m({action:"REPLACE",location:r})}else C(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(o)})},go:T,goBack:()=>T(-1),goForward:()=>T(1),block:(t="")=>{const e=d.setPrompt(t);return R||(j(1),R=!0),()=>(R&&(R=!1,j(-1)),e())},listen:t=>{const e=d.appendListener(t);return j(1),()=>{j(-1),e()}}};return U},hash:(t={})=>{L(H,"Hash history needs a DOM");const e=window.history,n=(()=>-1===window.navigator.userAgent.indexOf("Firefox"))(),o=null!=t.keyLength?t.keyLength:6,{getUserConfirmation:r=N,hashType:i="slash"}=t,s=t.basename?p(f(t.basename)):"",{encodePath:a,decodePath:c}=V[i],l=()=>{let t=c(B());return C(!s||h(t,s),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+s+'".'),s&&(t=u(t,s)),b(t,void 0,g(o))},d=M(),m=t=>{Object.assign(q,t),q.length=e.length,d.notifyListeners(q.location,q.action)};let w=!1,x=null;const O=()=>{const t=B(),e=a(t);if(t!==e)W(e);else{const t=l(),e=q.location;if(!w&&function(n,o){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&v(e.state,t.state)}())return;if(x===y(t))return;x=null,P(t)}},P=t=>{if(w)w=!1,m();else{const e="POP";d.confirmTransitionTo(t,e,r,n=>{n?m({action:e,location:t}):A(t)})}},A=t=>{let e=S.lastIndexOf(y(q.location));-1===e&&(e=0);let n=S.lastIndexOf(y(t));-1===n&&(n=0);const o=e-n;o&&(w=!0,j(o))},k=B(),E=a(k);k!==E&&W(E);const T=l();let S=[y(T)];const j=t=>{C(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)};let R=0;const U=t=>{1===(R+=t)?I(window,"hashchange",O):0===R&&$(window,"hashchange",O)};let _=!1;const q={length:e.length,action:"POP",location:T,createHref:t=>"#"+a(s+y(t)),push:(t,e)=>{C(void 0===e,"Hash history cannot push state; it is ignored");const n=b(t,void 0,g(o),q.location);d.confirmTransitionTo(n,"PUSH",r,t=>{if(!t)return;const e=y(n),o=a(s+e);if(B()!==o){x=e,(t=>window.location.hash=t)(o);const t=S.lastIndexOf(y(q.location)),r=S.slice(0,-1===t?0:t+1);r.push(e),S=r,m({action:"PUSH",location:n})}else C(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),m()})},replace:(t,e)=>{C(void 0===e,"Hash history cannot replace state; it is ignored");const n=b(t,void 0,g(o),q.location);d.confirmTransitionTo(n,"REPLACE",r,t=>{if(!t)return;const e=y(n),o=a(s+e);B()!==o&&(x=e,W(o));const r=S.indexOf(y(q.location));-1!==r&&(S[r]=e),m({action:"REPLACE",location:n})})},go:j,goBack:()=>j(-1),goForward:()=>j(1),block:(t="")=>{const e=d.setPrompt(t);return _||(U(1),_=!0),()=>(_&&(_=!1,U(-1)),e())},listen:t=>{const e=d.appendListener(t);return U(1),()=>{U(-1),e()}}};return q}};class Q{constructor(){this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=((t={})=>{this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)})}componentWillLoad(){this.history=J[this.historyType](),this.history.listen(t=>Y(this,void 0,void 0,function*(){t=F(t,this.root),this.location=t})),this.location=F(this.history.location,this.root)}scrollTo(t){if(null!=t&&!this.isServer&&this.history)return"POP"===this.history.action&&Array.isArray(this.history.location.scrollPosition)?this.queue.write(()=>{this.history&&this.history.location&&Array.isArray(this.history.location.scrollPosition)&&window.scrollTo(this.history.location.scrollPosition[0],this.history.location.scrollPosition[1])}):this.queue.write(()=>{window.scrollTo(0,t)})}render(){if(this.location&&this.history)return t(j.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},t("slot",null))}static get is(){return"stencil-router"}static get properties(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},isServer:{context:"isServer"},location:{state:!0},queue:{context:"queue"},root:{type:String,attr:"root"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},titleSuffix:{type:String,attr:"title-suffix"}}}}export{n as AppRoot,U as StencilRoute,Q as StencilRouter};