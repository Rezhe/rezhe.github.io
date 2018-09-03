"use strict";var precacheConfig=[["/lab/fwbp/en/404.html","96de717a25bcb0642e506ee9925bb119"],["/lab/fwbp/en/about/index.html","b052b95cbd850427e44277e0f89702e7"],["/lab/fwbp/en/apple-touch-icon.png","e2aaf5b4d4171c06f429ca27259576e8"],["/lab/fwbp/en/assets/svg/amsfcn.svg","d15b5d60e285ccb73925958cae31155f"],["/lab/fwbp/en/configuration.html","7568f497cecc4215da9c38ebc1beadd5"],["/lab/fwbp/en/creating-themes.html","86fd8298c84feac3a4ce383efabc9b62"],["/lab/fwbp/en/custom-color-scheme.html","84344c23f760fa913e7221f139ad4693"],["/lab/fwbp/en/custom-css.html","dd50184536db85d1708e981f25618a99"],["/lab/fwbp/en/custom-heading-background.html","593e2f56e446341321acffca5011ab57"],["/lab/fwbp/en/custom-heading-image.html","13e28127b3cb49cb509b30989d134868"],["/lab/fwbp/en/custom-html-markups.html","61f83990f2327e89a0643b10f1b7f8c0"],["/lab/fwbp/en/customizing-styles.html","73025f822190630e83d85942be5dca48"],["/lab/fwbp/en/deployment-methods.html","d685416df26a906ac568f6909b51d50c"],["/lab/fwbp/en/external-link-post.html","cb7aae48e20a9a6f1cf30a5b5e822e42"],["/lab/fwbp/en/favicon.png","6b2bfc716ab75777835aba937279c45a"],["/lab/fwbp/en/favicon.svg","b00db3f26d90a60fba73841ce5525fbd"],["/lab/fwbp/en/getting-started.html","80118f9df8b20f4d414a825e84e9ebbb"],["/lab/fwbp/en/github-pages-setup.html","34aa908c847165b1993b9a0e3c24dab3"],["/lab/fwbp/en/index.html","3096f02cf5502ad9c27310c8af16034f"],["/lab/fwbp/en/logo.png","17e4dc558556df9e4b44bbe6397ebbfc"],["/lab/fwbp/en/markdown-features-test.html","5a67915a849969abeb319b3504f68d17"],["/lab/fwbp/en/markup-example.html","86331b98670b718423e1550fa0a6d502"],["/lab/fwbp/en/mask-icon.svg","f410e111ad3dc3eced7d2353d098af33"],["/lab/fwbp/en/news/index.html","a1756d7701e9e5b8dd6dc1447be16e5f"],["/lab/fwbp/en/open-graph.html","a98b11cfc5345a63b1ba45ea2ebe1614"],["/lab/fwbp/en/svg-post-title.html","a7063f4e0693fb169e971839dd7796d1"],["/lab/fwbp/en/syntax-highlighting.html","9f711754aa291cc93e11ad21aa492f55"],["/lab/fwbp/en/theme-curtana.html","b79f7751a392cf2c8ec540cabff99198"],["/lab/fwbp/en/themes.html","97761e4967cdb4c79616e85d0760aced"],["/lab/fwbp/en/welcome.html","03821efdcbf317d39e758f59f8203c1b"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return fetch(e.request)}))}});