/*! Built with http://stenciljs.com */
const{h:t}=window.App;class e{constructor(){this.a="",this.b=""}onSubmit(t){t.preventDefault(),t.stopPropagation();const e=this.a.trim().toLowerCase(),o=this.b.trim().toLowerCase();e&&o&&(window.location.href=`/${e}/${o}`)}render(){return[t("header",null,t("div",{class:"logo"},t("a",{href:"/"},t("img",{src:"/assets/logo.png"})))),t("section",null,t("form",{onSubmit:this.onSubmit.bind(this)},t("div",null,t("input",{onInput:t=>this.a=t.target.value})),t("div",null,t("input",{onInput:t=>this.b=t.target.value})),t("div",null,t("button",{type:"submit"},"Compare Screenshots"))))]}static get is(){return"screenshot-lookup"}static get encapsulation(){return"shadow"}static get style(){return"header.sc-screenshot-lookup{padding:8px;background:#fff;-webkit-box-shadow:var(--header-box-shadow);box-shadow:var(--header-box-shadow)}img.sc-screenshot-lookup{width:174px;height:32px}.logo.sc-screenshot-lookup{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:7px}h1.sc-screenshot-lookup{margin:0;padding:0;font-size:18px}form.sc-screenshot-lookup{width:160px;margin:40px auto}form.sc-screenshot-lookup   div.sc-screenshot-lookup{margin:10px}input.sc-screenshot-lookup{width:100%}"}}export{e as ScreenshotLookup};