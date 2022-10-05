'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7d659df5b6155e2069eb6dc5b72e386c",
"index.html": "b5763ccaeb64de85dc53e2cb33d14359",
"/": "b5763ccaeb64de85dc53e2cb33d14359",
"main.dart.js": "893cb34d11d30d7ca9f2177874a539d0",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "efb3647885aa2121802aa6d54b36986b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4a27fdfd4dfad260c37e1bc12b531e7c",
"assets/AssetManifest.json": "46c80714504b2d5c89a26fc47aa004cf",
"assets/NOTICES": "cdaa767a4fdbb1dfc556f507ef39405b",
"assets/FontManifest.json": "c2a5943eac27d2fa23033ca3576e567c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "733024a37aeea6fd72efcf5acbbec3fa",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/Download-On-Play-Store.png": "a95f3337ed637e7716bcb70e4719b53d",
"assets/assets/images/pengkie_vendor_android_qr_code.jpg": "96e38aba56ec06f0b1408f30d596a111",
"assets/assets/images/pengkie_vendor_ios_qr_code.jpg": "b022b8f8cf03e6184ce52626708f4a04",
"assets/assets/images/pengkie_store_home_screen.png": "a2c1b0ddf1eb5507d2ed9ca91c9cd4c3",
"assets/assets/images/Download-On-App-Store.png": "e694be5ab42bd9b86c4ce44e59c268f8",
"assets/assets/images/pengkie_store_ios_qr_code.jpg": "a83540c46681ff265d3a00f63e8c4708",
"assets/assets/images/pengkie_vendor_home_screen.png": "7b6d99027e282ac919cd467263ce44d2",
"assets/assets/images/pengkie_store_play_store_qr_code.jpg": "ec75f2e78fe94e052d91eebeb8214fdf",
"assets/assets/fonts/FCIconic/FCIconic-Thin.ttf": "76668ec17ad02fd5d16174c170cfa366",
"assets/assets/fonts/FCIconic/FCIconic-ExtraLight.ttf": "0cb36ce8454114f12fd2a7d04c2ce0c1",
"assets/assets/fonts/FCIconic/FCIconic-ExtraBoldItalic.ttf": "8192b468f3f14718c2a65fb73d06972c",
"assets/assets/fonts/FCIconic/FCIconic-ThinItalic.ttf": "aee6dfde8f02d1e6c6387bae99c87de4",
"assets/assets/fonts/FCIconic/FCIconic-BoldItalic.ttf": "156706702125b373794e6bd93d5fa760",
"assets/assets/fonts/FCIconic/FCIconic-Black.ttf": "190bbc36697111e4b4933b6651b02843",
"assets/assets/fonts/FCIconic/FCIconic-Italic.ttf": "c240f99670fc0d02f52eec6b23afdb4b",
"assets/assets/fonts/FCIconic/FCIconic-ExtraBold.ttf": "805e5c6d3a6927feefc17360b0fb2c0e",
"assets/assets/fonts/FCIconic/FCIconic-Bold.ttf": "1bc37a3e7461767420c08582d3b63bbf",
"assets/assets/fonts/FCIconic/FCIconic-ExtraLightItalic.ttf": "a5fd6fd289a3e013e6b30b65f3a28721",
"assets/assets/fonts/FCIconic/FCIconic-BlackItalic.ttf": "0fa9ce3147678b2d0a8bf2b4fa8937a2",
"assets/assets/fonts/FCIconic/FCIconic-Regular.ttf": "48b6fd15aab92e7e75e3605e7684ed05",
"assets/assets/fonts/FCIconic/FCIconic-Light.ttf": "d116c26c9da583b338b3c5f5a89303bb",
"assets/assets/fonts/FCIconic/FCIconic-LightItalic.ttf": "921d97aa080ef4b11180567051729668",
"assets/assets/translations/th-TH.json": "8b1a4b2508410ff1bc6012ba2c9a7d43",
"assets/assets/translations/en-US.json": "0e5cec891e74c1fa9fde77dd48d4054b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
