"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5383,6017],{45383:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(5768),n=a(18833);const s="@jupyterlite/pyolite-kernel-extension:kernel",i=[{id:s,autoStart:!0,requires:[n.IKernelSpecs],activate:(e,t)=>{const n=l.PageConfig.getBaseUrl(),i=JSON.parse(l.PageConfig.getOption("litePluginSettings")||"{}")[s]||{},r=i.pyodideUrl||"https://cdn.jsdelivr.net/pyodide/v0.19.0/full/pyodide.js",p=l.URLExt.parse(r).href,o=(i.pipliteUrls||[]).map((e=>l.URLExt.parse(e).href)),d=!!i.disablePyPIFallback;t.register({spec:{name:"python",display_name:"Pyolite",language:"python",argv:[],spec:{argv:[],env:{},display_name:"Pyolite",language:"python",interrupt_mode:"message",metadata:{}},resources:{"logo-32x32":"TODO","logo-64x64":l.URLExt.join(n,"/kernelspecs/python.png")}},create:async e=>{const{PyoliteKernel:t}=await Promise.all([a.e(3315),a.e(6465)]).then(a.bind(a,66465));return new t({...e,pyodideUrl:p,pipliteUrls:o,disablePyPIFallback:d})}})}}]}}]);
//# sourceMappingURL=5383.3552191efcf4760902ac.js.map