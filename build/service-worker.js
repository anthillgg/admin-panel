"use strict";var precacheConfig=[["/index.html","67648c7e022a0e87700269263a7badb1"],["/static/css/main.54f6ae0a.css","5c80fe14efda1e45312725f56f14c6ca"],["/static/js/main.287fa605.js","13c0391e1908963ffb90cea3259bc7f8"],["/static/media/fa-brands-400.921f1150.woff2","921f1150167369cf4c400135a4905728"],["/static/media/fa-brands-400.9d56249d.woff","9d56249d09070f656a1c52e566448f0d"],["/static/media/fa-brands-400.ab673bac.ttf","ab673bac3a9e36cb1d4e54777c413fe3"],["/static/media/fa-brands-400.c862e94c.svg","c862e94cbef741d18838774587e3c49d"],["/static/media/fa-brands-400.f2594ef6.eot","f2594ef62455697f61dc99862c19afba"],["/static/media/fa-regular-400.491a96d8.eot","491a96d8188670aff6f5e8ae4e29ed6a"],["/static/media/fa-regular-400.4f8bb287.woff","4f8bb28722068f7b666582a39c7035b8"],["/static/media/fa-regular-400.b5a61b22.svg","b5a61b229c9c92a6ac21f5b0e3c6e9f1"],["/static/media/fa-regular-400.cf6008d3.woff2","cf6008d396082c09c3dd4907de9f3941"],["/static/media/fa-regular-400.e6ff1c5d.ttf","e6ff1c5d13b7786272782029310c3615"],["/static/media/fa-solid-900.1d220cf9.svg","1d220cf9da36861171fa90d3c164f4d3"],["/static/media/fa-solid-900.1dc5b6dd.woff2","1dc5b6dd4bf409a6f919be38603f76a0"],["/static/media/fa-solid-900.20b351a6.eot","20b351a6af2d523589fd193785e7d7f0"],["/static/media/fa-solid-900.63726a69.ttf","63726a69fa60cb67459140ccaf679f96"],["/static/media/fa-solid-900.997f6b18.woff","997f6b1819184c54248de33c81b7bb0c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});