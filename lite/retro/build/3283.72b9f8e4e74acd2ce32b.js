"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3283,486],{90486:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var n=o(55356),r=o(5768),a=o(18599),i=o(58918),s=o(18151);const c=[{id:"@jupyterlite/retro-application-extension:consoles",requires:[n.IConsoleTracker],autoStart:!0,activate:(e,t)=>{const o=r.PageConfig.getBaseUrl();t.widgetAdded.connect((async(e,t)=>{const{sessionContext:n}=t;if("consoles"===r.PageConfig.getOption("retroPage"))return;const a=n.path;window.open(`${o}retro/consoles?path=${a}`,"_blank"),t.dispose()}))}},{id:"@jupyterlite/retro-application-extension:docmanager",requires:[a.IDocumentManager],autoStart:!0,activate:(e,t)=>{const o=r.PageConfig.getBaseUrl(),n=t.open;t.open=(e,a="default",i,s)=>{if("_noref"===(null==s?void 0:s.ref))return void n.call(t,e,a,i,s);const c=".ipynb"===r.PathExt.extname(e)?"notebooks":"edit";window.open(`${o}retro/${c}?path=${e}`)}}},{id:"@jupyterlite/retro-application-extension:logo",autoStart:!0,activate:e=>{const t=r.PageConfig.getBaseUrl(),o=document.createElement("a");o.href=`${t}retro/tree`,o.target="_blank",o.rel="noopener noreferrer";const n=new s.Widget({node:o});i.liteWordmark.element({container:o,elementPosition:"center",padding:"2px 2px 2px 8px",height:"28px",width:"auto"}),n.id="jp-RetroLogo",e.shell.add(n,"top",{rank:0})}}]}}]);
//# sourceMappingURL=3283.72b9f8e4e74acd2ce32b.js.map