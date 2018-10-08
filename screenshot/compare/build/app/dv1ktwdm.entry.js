/*! Built with http://stenciljs.com */
const{h:t}=window.App;class e{constructor(){this.mismatchedPixels=null}navToId(t){t.preventDefault(),t.stopPropagation()}render(){const e=this.diff,i="number"==typeof this.mismatchedPixels,s=i?this.mismatchedPixels/(e.width*e.deviceScaleFactor*(e.height*e.deviceScaleFactor)):null;let a="";return i?this.mismatchedPixels>0&&(a="has-mismatch"):a="not-calculated",[t("p",{class:"test-path"},e.testPath),t("dl",null,t("div",null,t("dt",null,"Diff"),t("dd",null,t("a",{href:"#diff-"+e.id,onClick:this.navToId.bind(this)},e.id))),t("div",{class:a},t("dt",null,"Mismatched Pixels"),t("dd",null,i?this.mismatchedPixels:"--")),t("div",{class:a},t("dt",null,"Mismatched Ratio"),t("dd",null,i?s.toFixed(4):"--")),t("div",null,t("dt",null,"Device"),t("dd",null,e.device)),t("div",null,t("dt",null,"Width"),t("dd",null,e.width)),t("div",null,t("dt",null,"Height"),t("dd",null,e.height)),t("div",null,t("dt",null,"Device Scale Factor"),t("dd",null,e.deviceScaleFactor)),t("div",{class:"desc"},t("dt",null,"Description"),t("dd",null,e.desc)))]}static get is(){return"compare-analysis"}static get encapsulation(){return"shadow"}static get properties(){return{diff:{type:"Any",attr:"diff"},mismatchedPixels:{type:Number,attr:"mismatched-pixels"}}}static get style(){return".test-path{margin-top:0;padding-top:0;font-size:10px;color:var(--analysis-data-color)}dl{padding:0;margin:0;font-size:var(--analysis-data-font-size);line-height:28px}div{display:-webkit-box;display:-ms-flexbox;display:flex;width:260px}dt{display:inline;-webkit-box-flex:2;-ms-flex:2;flex:2;font-weight:500}dd{display:inline;-webkit-box-flex:1;-ms-flex:1;flex:1;color:var(--analysis-data-color)}.desc,.desc dt{display:block}.desc dd{display:block;margin:0;line-height:22px}.not-calculated dd{color:#ccc}.has-mismatch dd{color:#ff6200}p{padding-top:14px;font-size:var(--analysis-data-font-size)}a{color:var(--analysis-data-color)}a:hover{text-decoration:none}"}}class i{render(){if(!this.diffs||0===this.diffs.length||!this.filter)return;const e=this.diffs.reduce((t,e)=>(t.some(t=>t.value===e.device)||t.push({text:e.device,value:e.device}),t),[{text:"All Devices",value:""}]);return t("section",null,t("div",{class:"showing"},"Showing ",this.diffs.filter(t=>t.show).length),t("div",{class:"search"},t("input",{type:"search",onInput:t=>{this.filterChange.emit({search:t.target.value})},value:this.filter.search||""})),e.length>1?t("div",{class:"device"},t("select",{onInput:t=>{this.filterChange.emit({device:t.target.value})}},e.map(e=>t("option",{key:e.value,selected:e.value===this.filter.device,value:e.value},e.text)))):null,t("div",{class:"mismatch"},t("select",{onInput:t=>{this.filterChange.emit({mismatch:t.target.value})}},t("option",{value:"",selected:""===this.filter.mismatch},"> 0"),t("option",{value:"100",selected:"100"===this.filter.mismatch},"> 100"),t("option",{value:"250",selected:"250"===this.filter.mismatch},"> 250"),t("option",{value:"500",selected:"500"===this.filter.mismatch},"> 500"),t("option",{value:"1000",selected:"1000"===this.filter.mismatch},"> 1,000"),t("option",{value:"2500",selected:"2500"===this.filter.mismatch},"> 2,500"),t("option",{value:"5000",selected:"5000"===this.filter.mismatch},"> 5,000"),t("option",{value:"10000",selected:"10000"===this.filter.mismatch},"> 10,000"),t("option",{value:"all",selected:"all"===this.filter.mismatch},"All Screenshots"))))}static get is(){return"compare-filter"}static get encapsulation(){return"shadow"}static get properties(){return{diffs:{type:"Any",attr:"diffs"},filter:{type:"Any",attr:"filter"}}}static get events(){return[{name:"filterChange",method:"filterChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"input,select{font-size:10px}.showing{font-size:12px;white-space:nowrap;margin:17px 8px 0 0;color:var(--analysis-data-color)}section{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.device,.mismatch,.search{margin:13px 8px 0 0}"}}class s{constructor(){this.repo=null}logoClick(t){t.preventDefault(),t.stopPropagation(),document.querySelector(".scroll-y").scrollTop=0}render(){return[this.repo?t("nav",{class:"breadcrumbs"},t("a",{href:this.repo.orgUrl},this.repo.orgUrl),t("a",{href:this.repo.repoUrl},this.repo.repoName),t("a",{href:this.repo.commitsUrl},"commits")):null,t("header",null,t("div",{class:"logo"},t("a",{href:"#",onClick:this.logoClick.bind(this)},t("img",{src:this.appSrcUrl+"/assets/logo.png"}))),t("compare-filter",{diffs:this.diffs,filter:this.filter}))]}static get is(){return"compare-header"}static get encapsulation(){return"shadow"}static get properties(){return{appSrcUrl:{type:String,attr:"app-src-url"},diffs:{type:"Any",attr:"diffs"},filter:{type:"Any",attr:"filter"},repo:{type:"Any",attr:"repo"}}}static get style(){return":host{background:#fff;-webkit-box-shadow:var(--header-box-shadow);box-shadow:var(--header-box-shadow)}nav{padding:4px}nav a{font-size:14px;text-decoration:none;color:var(--breadcrumb-color);display:inline-block;padding:0 4px}nav a:hover{text-decoration:underline}header{display:-webkit-box;display:-ms-flexbox;display:flex;width:calc(100% - 115px);padding:8px}img{width:174px;height:32px}.logo{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:7px}compare-filter{-webkit-box-flex:1;-ms-flex:1;flex:1}h1{margin:0;padding:0;font-size:18px}"}}function a(t,e){return`screenshot_mismatch_${t}_${e}`}var l=function(t,e,i,s,a,l){l||(l={});for(var n=void 0===l.threshold?.1:l.threshold,d=35215*n*n,u=0,f=0;f<a;f++)for(var g=0;g<s;g++){var p=4*(f*s+g);if(c(t,e,p,p)>d)l.includeAA||!r(t,g,f,s,a,e)&&!r(e,g,f,s,a,t)?(i&&m(i,p,255,0,0),u++):i&&m(i,p,255,255,0);else if(i){var v=o(h(o((y=t)[(w=p)+0],A=y[w+3]/255),o(y[w+1],A),o(y[w+2],A)),.1);m(i,p,v,v,v)}}var y,w,A;return u};function r(t,e,i,s,a,l){for(var h,n,d,o,m=Math.max(e-1,0),u=Math.max(i-1,0),f=Math.min(e+1,s-1),g=Math.min(i+1,a-1),p=4*(i*s+e),v=0,y=0,w=0,A=0,S=0,C=m;C<=f;C++)for(var b=u;b<=g;b++)if(C!==e||b!==i){var x=c(t,t,p,4*(b*s+C),!0);if(0===x?v++:x<0?w++:x>0&&y++,v>2)return!1;l&&(x<A&&(A=x,h=C,n=b),x>S&&(S=x,d=C,o=b))}return!l||0!==w&&0!==y&&(!r(t,h,n,s,a)&&!r(l,h,n,s,a)||!r(t,d,o,s,a)&&!r(l,d,o,s,a))}function c(t,e,i,s,a){var l=t[i+3]/255,r=e[s+3]/255,c=o(t[i+0],l),m=o(t[i+1],l),u=o(t[i+2],l),f=o(e[s+0],r),g=o(e[s+1],r),p=o(e[s+2],r),v=h(c,m,u)-h(f,g,p);if(a)return v;var y=n(c,m,u)-n(f,g,p),w=d(c,m,u)-d(f,g,p);return.5053*v*v+.299*y*y+.1957*w*w}function h(t,e,i){return.29889531*t+.58662247*e+.11448223*i}function n(t,e,i){return.59597799*t-.2741761*e-.32180189*i}function d(t,e,i){return.21147017*t-.52261711*e+.31114694*i}function o(t,e){return 255+(t-255)*e}function m(t,e,i,s,a){t[e+0]=i,t[e+1]=s,t[e+2]=a,t[e+3]=255}function u(t,e,i){if(g.has(e))return void i(g.get(e));if(f.has(e))return void f.get(e).push(i);f.set(e,[i]);const s=document.createElement("script");s.src=`${t}screenshot_${e}.js`,document.head.appendChild(s)}window.loadScreenshot=((t,e)=>{const i=f.get(t);i&&(i.forEach(t=>t(e)),f.delete(t)),g.set(t,e)});const f=new Map,g=new Map;class p{constructor(){this.imageASrc="",this.imageBSrc="",this.imagesLoaded=new Set,this.isImageALoaded=!1,this.isImageBLoaded=!1,this.initializeCalculateMismatch=!1,this.hasCalculatedMismatch=!1}componentWillLoad(){this.loadScreenshots()}componentWillUpdate(){this.loadScreenshots()}loadScreenshots(){if(this.show)return this.diff.identical?(this.imageASrc=this.imagesUrl+this.diff.imageA,void(this.imageBSrc=this.imagesUrl+this.diff.imageB)):void(this.initializeCalculateMismatch||(this.imageAClass="is-loading",this.imageBClass="is-loading",this.canvasClass="is-loading",this.initializeCalculateMismatch=!0,null!=this.jsonpUrl?(null!=this.diff.imageA&&u(this.jsonpUrl,this.diff.imageA,t=>{this.imageASrc=t}),null!=this.diff.imageB&&u(this.jsonpUrl,this.diff.imageB,t=>{this.imageBSrc=t})):(this.imageASrc=this.imagesUrl+this.diff.imageA,this.imageBSrc=this.imagesUrl+this.diff.imageB)))}async compareImages(){const t=this.diff;this.isImageALoaded&&this.isImageBLoaded&&!this.hasCalculatedMismatch&&(this.hasCalculatedMismatch=!0,t.mismatchedPixels=await function(t,e,i,s,a){const r=document.createElement("canvas");r.width=s,r.height=a;const c=document.createElement("canvas");c.width=s,c.height=a;const h=r.getContext("2d");h.drawImage(t,0,0);const n=c.getContext("2d");n.drawImage(e,0,0);const d=document.createElement("canvas").getContext("2d");d.drawImage(t,0,0),d.getImageData(0,0,s,a);const o=h.getImageData(0,0,s,a).data,m=n.getImageData(0,0,s,a).data,u=i.getContext("2d"),f=u.createImageData(s,r.height),g=l(o,m,f.data,s,a,{threshold:.1});return u.putImageData(f,0,0),g}(this.imageA,this.imageB,this.canvas,Math.round(t.width*t.deviceScaleFactor),Math.round(t.height*t.deviceScaleFactor)),this.canvasClass="has-loaded",function(e,i,s){const l=a(t.imageA,t.imageB);localStorage.setItem(l,String(s))}(0,0,t.mismatchedPixels),this.compareLoaded.emit(t))}render(){const e=this.diff,i={width:e.width+"px",height:e.height+"px"};return[t("compare-cell",null,t("img",{src:this.imageASrc,class:this.imageAClass,style:i,onLoad:this.diff.identical?null:()=>{this.isImageALoaded=!0,this.imageAClass="has-loaded",this.compareImages()},ref:t=>this.imageA=t})),t("compare-cell",null,t("img",{src:this.imageBSrc,class:this.imageBClass,style:i,onLoad:this.diff.identical?null:()=>{this.isImageBLoaded=!0,this.imageBClass="has-loaded",this.compareImages()},ref:t=>this.imageB=t})),t("compare-cell",null,this.diff.identical?t("img",{style:i,src:this.imageASrc}):t("canvas",{width:Math.round(e.width*e.deviceScaleFactor),height:Math.round(e.height*e.deviceScaleFactor),class:this.canvasClass,style:i,ref:t=>this.canvas=t})),t("compare-cell",null,t("compare-analysis",{mismatchedPixels:this.diff.mismatchedPixels,diff:this.diff}))]}static get is(){return"compare-row"}static get properties(){return{canvasClass:{state:!0},diff:{type:"Any",attr:"diff"},elm:{elementRef:!0},imageAClass:{state:!0},imageASrc:{state:!0},imageBClass:{state:!0},imageBSrc:{state:!0},imagesUrl:{type:String,attr:"images-url"},jsonpUrl:{type:String,attr:"jsonp-url"},show:{type:Boolean,attr:"show"}}}static get events(){return[{name:"compareLoaded",method:"compareLoaded",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"compare-row canvas,compare-row img{-webkit-box-shadow:var(--screenshot-box-shadow);box-shadow:var(--screenshot-box-shadow);border-radius:var(--screenshot-border-radius)}.is-loading{visibility:hidden}"}}class v{render(){if(!this.a||!this.b)return;let e=0;this.a.screenshots.forEach(t=>{t.width>e&&(e=t.width)});const i={width:(e+=8)+"px"};return[t("th-cell",null,t("div",{style:i},this.a.message)),t("th-cell",null,t("div",{style:i},this.b.message)),t("th-cell",null,t("div",{style:i},"Diff")),t("th-cell",{class:"analysis"},t("div",null,"Analysis"))]}static get is(){return"compare-thead"}static get encapsulation(){return"shadow"}static get properties(){return{a:{type:"Any",attr:"a"},b:{type:"Any",attr:"b"}}}static get style(){return":host{display:-webkit-box;display:-ms-flexbox;display:flex}th-cell{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:500;font-size:12px}th-cell div{padding-left:12px}.analysis div{width:262px}"}}class y{constructor(){this.appSrcUrl="",this.imagesUrl="/data/images/",this.buildsUrl="/data/builds/",this.jsonpUrl=null,this.diffs=[]}async componentWillLoad(){this.match&&this.match.params.buildIdA&&this.match.params.buildIdB&&await this.loadBuilds(this.match.params.buildIdA,this.match.params.buildIdB),this.a&&this.b&&(this.filter=function(){const t={},e=location.hash.replace("#","");return""!==e&&e.split(";").forEach(e=>{const i=e.split("-");t[i[0]]=!(i.length>1)||i[1]}),t}(),this.diffs=function(t,e,i){const s=t.screenshots.map(t=>({id:t.id,desc:t.desc,testPath:t.testPath,imageA:t.image,imageUrlA:`${i}${t.image}`,imageB:null,imageUrlB:null,imageDiff:null,identical:!1,mismatchedPixels:null,width:t.width,height:t.height,deviceScaleFactor:t.deviceScaleFactor,device:t.device||t.userAgent,show:!1}));return e.screenshots.forEach(t=>{let e=s.find(e=>e.id===t.id);e?(e.imageB=t.image,e.imageUrlB=`${i}${t.image}`):s.push(e={id:t.id,desc:t.desc,testPath:t.testPath,imageA:null,imageUrlA:null,imageB:t.image,imageUrlB:`${i}${t.image}`,imageDiff:null,identical:!1,mismatchedPixels:null,width:t.width,height:t.height,deviceScaleFactor:t.deviceScaleFactor,device:t.device||t.userAgent,show:!1})}),s.forEach(t=>{t.identical=t.imageUrlA===t.imageUrlB,t.identical?t.mismatchedPixels=0:function(e,i){const s=a(t.imageA,t.imageB);localStorage.getItem(s)}()}),s}(this.a,this.b,this.imagesUrl),this.updateDiffs())}async loadBuilds(t,e){const i=`${this.buildsUrl}${t}.json`,s=`${this.buildsUrl}${e}.json`,a=await Promise.all([fetch(i),fetch(s)]),l=await a[0],r=await a[1];l.ok&&(this.a=await a[0].json()),r.ok&&(this.b=await a[1].json())}filterChange(t){this.filter=function(e,i){const s=Object.assign({},e,t.detail),a=Object.keys(s),l=[];return a.map(t=>{const e=s[t];!0===e?l.push(t):null!=e&&""!==e&&l.push(t+"-"+e)}),window.location.hash=l.sort().join(";"),s}(this.filter),this.updateDiffs()}compareLoaded(t){const e=t.detail,i=this.diffs.find(t=>t.id===e.id);i&&(i.mismatchedPixels=e.mismatchedPixels),this.updateDiffs()}updateDiffs(){var t;this.diffs=(t=this.filter,this.diffs.map(e=>(e=Object.assign({},e),function(t,e){const i=!t.device||t.device===e.device,s=!t.search||e.desc.includes(t.search);let a=!0;return t.mismatch?null!=e.mismatchedPixels&&"all"!==t.mismatch&&(a=parseInt(t.mismatch,10)<e.mismatchedPixels):a=e.mismatchedPixels>0||null==e.mismatchedPixels,e.show=i&&s&&a,e}(t,e))).sort((t,e)=>t.mismatchedPixels>e.mismatchedPixels?-1:t.mismatchedPixels<e.mismatchedPixels?1:t.desc.toLowerCase()<e.desc.toLowerCase()?-1:t.desc.toLowerCase()>e.desc.toLowerCase()?1:t.device.toLowerCase()<e.device.toLowerCase()?-1:t.device.toLowerCase()>e.device.toLowerCase()?1:0))}render(){return[t("compare-header",{diffs:this.diffs,filter:this.filter,appSrcUrl:this.appSrcUrl}),t("section",{class:"scroll-x"},t("compare-thead",{a:this.a,b:this.b}),t("section",{class:"scroll-y"},t("compare-table",null,t("compare-tbody",null,this.diffs.map(e=>t("compare-row",{key:e.id,id:"d-"+e.id,show:e.show,hidden:!e.show,imagesUrl:this.imagesUrl,jsonpUrl:this.jsonpUrl,diff:e}))))))]}static get is(){return"screenshot-compare"}static get properties(){return{a:{type:"Any",attr:"a",mutable:!0},appSrcUrl:{type:String,attr:"app-src-url"},b:{type:"Any",attr:"b",mutable:!0},buildsUrl:{type:String,attr:"builds-url"},diffs:{state:!0},filter:{state:!0},imagesUrl:{type:String,attr:"images-url"},jsonpUrl:{type:String,attr:"jsonp-url"},match:{type:"Any",attr:"match"}}}static get listeners(){return[{name:"filterChange",method:"filterChange"},{name:"compareLoaded",method:"compareLoaded"}]}}export{e as CompareAnalysis,i as CompareFilter,s as CompareHeader,p as CompareRow,v as CompareThead,y as ScreenshotCompare};