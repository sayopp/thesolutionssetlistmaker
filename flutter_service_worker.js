'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "280631f56e3d163aaeb66a8739ea8d40",
"assets/NOTICES": "18cd7b67470910bbb8dfd47fcd785e53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "7ecc5b9f57791549604de7d6e215c383",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f59cd37aa5124b5d4a3a3181423568f",
"/": "8f59cd37aa5124b5d4a3a3181423568f",
"main.dart.js": "6e063ce67b3e408d27cb8376693e5120",
"manifest.json": "dd3cd2254dd7fd2f6351159ab8377a49",
"thesolutionssetlistmaker/.git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
"thesolutionssetlistmaker/.git/config": "da770d9bfe4fd3e0c15da73d94fbf915",
"thesolutionssetlistmaker/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"thesolutionssetlistmaker/.git/FETCH_HEAD": "43a43817963c04078696d5aa7c749596",
"thesolutionssetlistmaker/.git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
"thesolutionssetlistmaker/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"thesolutionssetlistmaker/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"thesolutionssetlistmaker/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"thesolutionssetlistmaker/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"thesolutionssetlistmaker/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"thesolutionssetlistmaker/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"thesolutionssetlistmaker/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"thesolutionssetlistmaker/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"thesolutionssetlistmaker/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"thesolutionssetlistmaker/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"thesolutionssetlistmaker/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"thesolutionssetlistmaker/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"thesolutionssetlistmaker/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"thesolutionssetlistmaker/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"thesolutionssetlistmaker/.git/index": "4d171a8cecf0bd4b87fd673af6afae37",
"thesolutionssetlistmaker/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"thesolutionssetlistmaker/.git/logs/HEAD": "cbee52d5cb374b61abd37bda51b2204d",
"thesolutionssetlistmaker/.git/logs/refs/heads/gh-pages": "cbee52d5cb374b61abd37bda51b2204d",
"thesolutionssetlistmaker/.git/logs/refs/remotes/origin/gh-pages": "2a0384781d2a68e1677c94239d0b9f9e",
"thesolutionssetlistmaker/.git/logs/refs/remotes/origin/HEAD": "60ca3e34ea0177caccb585070f471a47",
"thesolutionssetlistmaker/.git/objects/34/88f9d13b10d8c9f25aea3f3396ff4bafd50181": "f98493984583e87d3bb25767cb318615",
"thesolutionssetlistmaker/.git/objects/37/049efc3136d558a74a2c04d322dbadc27001b9": "9ab608caff1b705e10b72ac003fbcbdb",
"thesolutionssetlistmaker/.git/objects/4b/b7c6872b38162e1834a7004f2fdda6fe5503df": "c30193110b61422809aaf5b784c31a5b",
"thesolutionssetlistmaker/.git/objects/59/ddab902e056c89691476ff75258689be9c713d": "732c8b11b946a361d820f7409c393f6b",
"thesolutionssetlistmaker/.git/objects/71/06bfb2e0171cabc1a61015c4012df3871913a1": "9b477ee6b5699f926555fd9aa78bd5e0",
"thesolutionssetlistmaker/.git/objects/85/4595ca198a0f00494732cdb17914c361f6180e": "39e3261a2a590b397b5956a2dafc347c",
"thesolutionssetlistmaker/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"thesolutionssetlistmaker/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"thesolutionssetlistmaker/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"thesolutionssetlistmaker/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"thesolutionssetlistmaker/.git/objects/d0/3b8de58854cd8e86e8899d681fc1a16e8fd252": "50c1a43f7e8be42b4db44db47c59f1f6",
"thesolutionssetlistmaker/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"thesolutionssetlistmaker/.git/objects/eb/09fdf5e4ea0bc4f129c389c7100483922cae12": "78fc1095a87246be9884ca29aedc2f34",
"thesolutionssetlistmaker/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"thesolutionssetlistmaker/.git/objects/f1/e223c12250c7836a43aac1f83a7e693aa4e214": "1c8687112f74b2e256d322f920a42740",
"thesolutionssetlistmaker/.git/objects/fe/2489211496efcd261e20d1dbf5a9aacf7471ae": "bb751fc32f0d4b92cd862760f504b192",
"thesolutionssetlistmaker/.git/refs/heads/gh-pages": "93b9b458315b32017f56f5b293610203",
"thesolutionssetlistmaker/.git/refs/remotes/origin/gh-pages": "93b9b458315b32017f56f5b293610203",
"thesolutionssetlistmaker/.git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
"thesolutionssetlistmaker/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"thesolutionssetlistmaker/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"thesolutionssetlistmaker/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"thesolutionssetlistmaker/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"thesolutionssetlistmaker/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"thesolutionssetlistmaker/index.html": "c1d1575ea3e34d7656d31c0b0cdbcad4",
"thesolutionssetlistmaker/manifest.json": "dd3cd2254dd7fd2f6351159ab8377a49",
"version.json": "4c6b41f7a9207e6614d16d38b331d30f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
