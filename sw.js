/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["css/app.css","01371a44229f753eb3eefa67326e68b4"],["img/bb/cover.jpg","dcf0a3be8f0afc3cf702060230499f92"],["img/bed.svg","1ce1f74a6b92b23dbcc3495e53ec7022"],["img/couch.svg","6c101fce7a3f3ef3215cc88558b5b1ab"],["img/glass.svg","45ba40ec15b801d600c14872ab765f4e"],["img/icons/192x192.png","521a11d0b725cd11f18606a08c54a27e"],["img/left-arrow.svg","980db1db178aa015ba7fa1b3e30cd5f1"],["img/light-porte.svg","f40d285a75705a52790f2b4abf6dc4d7"],["img/light-window.svg","f9b2d314ae5e247814ac13a7d749cc8b"],["img/panda.svg","25f35b43d5dbd5f6de397e9650f38b71"],["img/plug.svg","cfbc744a511aa855884da5f72e661b00"],["img/simpsons/cover.jpg","ad41b8c1ec48dc477637de88ef04b559"],["img/sopranos/cover.jpg","7305200eed7d88b24de3bf2ff91c17c2"],["img/sv/cover.jpg","978cb48d867eeb8e142d267aef09e21f"],["index.html","5fe37b6fda338f6ce4815ef1fa6ed22c"],["js/app.js","4f85f2fe5d9f27e62d861235fc84d1b8"],["js/controller/devices.js","64b222f6284df96b05aa6ee275878f94"],["js/controller/posts.js","5d8a9d99d19458a763d08c324437033e"],["js/controller/rooms.js","73af5696371676ff59c3033c4026a778"],["js/directives/sound.js","64d75cfc863c83c48a5782b1dbaf49d9"],["js/filter/filters.js","e4869355823f1cbbadb228db4e0b52df"],["js/helpers.js","1f7de36fe932a6d6919009026338395d"],["js/services/postApi.js","bc96c4dd2dae8fcb45623f980d98a7a4"],["js/services/rooms.js","0022e4e37f91677938f99c6d280448a0"],["libs/angular-route.js","b84900794538a21a4c589fd0b0900a62"],["libs/angular.js","338db4826dcbc337102c071a5eb93a21"],["libs/blur.js","ca9c75b445c03c1db270f305b7f3f4c5"],["libs/jquery.js","32015dd42e9582a80a84736f5d9a44d7"],["partials/angular.js","338db4826dcbc337102c071a5eb93a21"],["partials/article.html","0c60e06e1fa08dfb83ac1736757e47ba"],["partials/home.html","e710dd18d9c88980b4b243af8cb31846"],["partials/posts.html","23c1835ac2eb46b602be2e8e9a0c21ac"],["partials/tpl-lightaction.html","68b329da9893e34099c7d8ad5cb9c940"],["sounds/bb/A_man_provides.wav","8831a6d02c6639d2dd849fd24afe6685"],["sounds/bb/Better_Call_Saul.wav","d5eb6c73c0a607b49e4ced812c0f0f9c"],["sounds/bb/I'm_the_danger.wav","6772137c512947fe6e7fd206c6874980"],["sounds/bb/I'm_the_one_who_knocks.wav","1ec48163a89360ded3276110e2d7d611"],["sounds/bb/Now_say_my_name.wav","68b0ea9ad2b306bba9be08c395fd44a6"],["sounds/bb/Yeah_Bitch!.wav","7cadb33d10a9af9f87bab971ea594ba8"],["sounds/bb/You're_god_damn_right.wav","a6fb389a326905ce852541098a61d662"],["sounds/bb/dbbs.wav","3b9dc7da7bf774593c85c4e48c703d34"],["sounds/simpsons/dacodac.mp3","72fb92f0fc6246a76a1317f40d3e7956"],["sounds/simpsons/doh.mp3","08008bd7a3290be162aab95b50ca17ac"],["sounds/simpsons/et-bien-moi-aussi.mp3","c2ff5fb4414ff5351c737ad71c9efc04"],["sounds/simpsons/ici-homer-simpsons.mp3","02cbc12e81f18297e4723894c3e392fc"],["sounds/simpsons/je-vais-le-dire-a-la-police.mp3","ece0f0ca210d65d47d050baf78cd00fe"],["sounds/simpsons/on-se-revera-au-tribunal.mp3","9af29aba19c5144a192d7b4512cd35c0"],["sounds/simpsons/qui-c-est.mp3","faf465515bd69facc7ac0e2a1dbe6ff5"],["sounds/simpsons/you tried.mp3","006ea8f3512e8c0e8be70fea739a855a"],["sounds/sv/aviato.mp3","26827829c3d8472bbfa822866f1e3bfd"],["sounds/sv/clowns.wav","719d2f367a7c750267399b2155795c9c"],["sounds/sv/eat-the-fish.wav","52c40b29cc363fdc55d386d702f591da"],["sounds/sv/lets-pivot.mp3","4c567beda7f83052b17a9d51cbd2fa9d"],["sounds/sv/pied-piper.wav","09a039799af4c61bf15595fcd05ebfef"],["sounds/sv/tell-something.wav","1e4c7b9ecb8fd833ac02a763a584cc1d"],["sounds/sv/this-pied-piper.wav","5dfa3b0e6bb4cfb1a51d937d35870356"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







