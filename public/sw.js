if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/3D/cv1.glb",revision:"88a4d210e8e7acb9f79b8c6318429e67"},{url:"/3D/theatreState.json",revision:"8d7e30d9de16aa8b0fb5be91ceac0ef3"},{url:"/_next/static/XVwy4IaiAVxW9BWSgYN0q/_buildManifest.js",revision:"eb6ffe218ba24563a1588de9e4692169"},{url:"/_next/static/XVwy4IaiAVxW9BWSgYN0q/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/175-cefe67f745cacb8f.js",revision:"cefe67f745cacb8f"},{url:"/_next/static/chunks/548-38f1de05a0954193.js",revision:"38f1de05a0954193"},{url:"/_next/static/chunks/69480c19-e090dd3dbee09795.js",revision:"e090dd3dbee09795"},{url:"/_next/static/chunks/878-3c8ef2230f8f907b.js",revision:"3c8ef2230f8f907b"},{url:"/_next/static/chunks/fb7d5399-866d77ca47a1b110.js",revision:"866d77ca47a1b110"},{url:"/_next/static/chunks/fde15935-fdb866e05804f2d1.js",revision:"fdb866e05804f2d1"},{url:"/_next/static/chunks/fea29d9f-2b531441a2448b04.js",revision:"2b531441a2448b04"},{url:"/_next/static/chunks/framework-e952fed463eb8e34.js",revision:"e952fed463eb8e34"},{url:"/_next/static/chunks/main-ba6ffe845c6dacf4.js",revision:"ba6ffe845c6dacf4"},{url:"/_next/static/chunks/pages/_app-36ed88d0aa3c6b0e.js",revision:"36ed88d0aa3c6b0e"},{url:"/_next/static/chunks/pages/_error-10090a8ee211d5fd.js",revision:"10090a8ee211d5fd"},{url:"/_next/static/chunks/pages/contact-5fe3a9b07839f92e.js",revision:"5fe3a9b07839f92e"},{url:"/_next/static/chunks/pages/index-2bdfb088da74ec39.js",revision:"2bdfb088da74ec39"},{url:"/_next/static/chunks/pages/projects-af077dee56bc04d4.js",revision:"af077dee56bc04d4"},{url:"/_next/static/chunks/pages/stats-3b12afc9f63efcf0.js",revision:"3b12afc9f63efcf0"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-38cee4c0e358b1a3.js",revision:"38cee4c0e358b1a3"},{url:"/_next/static/css/6479186bee7d9e7e.css",revision:"6479186bee7d9e7e"},{url:"/_next/static/css/987d8f13f0bcec66.css",revision:"987d8f13f0bcec66"},{url:"/_next/static/media/DrukWideBold.ae7b7882.ttf",revision:"ae7b7882"},{url:"/_next/static/media/FR.c660dca8.jpg",revision:"3990fed9257395f55c0edd34cff1af74"},{url:"/_next/static/media/Montserrat-Bold.17fb2958.ttf",revision:"17fb2958"},{url:"/_next/static/media/Montserrat-Medium.b6027326.ttf",revision:"b6027326"},{url:"/_next/static/media/Montserrat-Regular.e4d41a96.ttf",revision:"e4d41a96"},{url:"/_next/static/media/Montserrat-SemiBold.4f67549c.ttf",revision:"4f67549c"},{url:"/_next/static/media/UK.b6f5438e.jpg",revision:"f51ce772603b7e296ac9f7c70a9a2c02"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/DrukWideBold.ttf",revision:"2206d6cc490084998d531e8c1b2cbb4a"},{url:"/fonts/Montserrat-Bold.ttf",revision:"354dc625a35bef1b6ec00a79c6cfc0c8"},{url:"/fonts/Montserrat-Medium.ttf",revision:"ee130b491bf120cdb261d27ec29e2805"},{url:"/fonts/Montserrat-Regular.ttf",revision:"38712903602f88435ddddec98862f8b8"},{url:"/fonts/Montserrat-SemiBold.ttf",revision:"6e7bd3eacb1d1088e5063e375fc467aa"},{url:"/images/chassis.png",revision:"9e370ffe70838628e9d3147345c4afc2"},{url:"/images/portfolio.webp",revision:"5380c1ba5969ca15c7d57530d1a990b4"},{url:"/images/resume-en.png",revision:"bb320298a050678918527c0d5ab6bba0"},{url:"/images/resume-fr.png",revision:"9867c5ab1e17d945a24ee1570c08a2e1"},{url:"/locales/en-US/common.json",revision:"3d2f7983b0d1d28ce4f20ccd55db8a81"},{url:"/locales/fr/common.json",revision:"31f9472024391ca5c9136309bd427516"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
