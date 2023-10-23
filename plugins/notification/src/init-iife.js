!function(){"use strict";var e=Object.defineProperty,n=(e,n,t)=>{if(!n.has(e))throw TypeError("Cannot "+t)},t=(e,t,i)=>(n(e,t,"read from private field"),i?i.call(e):t.get(e));function i(e,n=!1){return window.__TAURI_INTERNALS__.transformCallback(e,n)}((n,t)=>{for(var i in t)e(n,i,{get:t[i],enumerable:!0})})({},{Channel:()=>o,PluginListener:()=>s,addPluginListener:()=>a,convertFileSrc:()=>l,invoke:()=>c,transformCallback:()=>i});var r,o=class{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,((e,n,t)=>{if(n.has(e))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(e):n.set(e,t)})(this,r,(()=>{})),this.id=i((e=>{t(this,r).call(this,e)}))}set onmessage(e){var t,i,o,s;o=e,n(t=this,i=r,"write to private field"),s?s.call(t,o):i.set(t,o)}get onmessage(){return t(this,r)}toJSON(){return`__CHANNEL__:${this.id}`}};r=new WeakMap;var s=class{constructor(e,n,t){this.plugin=e,this.event=n,this.channelId=t}async unregister(){return c(`plugin:${this.plugin}|remove_listener`,{event:this.event,channelId:this.channelId})}};async function a(e,n,t){let i=new o;return i.onmessage=t,c(`plugin:${e}|register_listener`,{event:n,handler:i}).then((()=>new s(e,n,i.id)))}async function c(e,n={},t){return window.__TAURI_INTERNALS__.invoke(e,n,t)}function l(e,n="asset"){return window.__TAURI_INTERNALS__.convertFileSrc(e,n)}!function(){let e=!1,n="default";function t(n){e=!0,window.Notification.permission=n,e=!1}window.Notification=function(e,n){const t=n||{};!function(e){"object"==typeof e&&Object.freeze(e),c("plugin:notification|notify",{options:"string"==typeof e?{title:e}:e})}(Object.assign(t,{title:e}))},window.Notification.requestPermission=function(){return c("plugin:notification|request_permission").then((e=>(t("prompt"===e?"default":e),e)))},Object.defineProperty(window.Notification,"permission",{enumerable:!0,get:()=>n,set:t=>{if(!e)throw new Error("Readonly property");n=t}}),("default"!==window.Notification.permission?Promise.resolve("granted"===window.Notification.permission):c("plugin:notification|is_permission_granted")).then((function(e){t(null===e?"default":e?"granted":"denied")}))}()}();