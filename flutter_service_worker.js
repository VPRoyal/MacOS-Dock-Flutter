'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1e5052885e4c40a2cc70c7b35f82ab30",
".git/config": "16b2744c49af339012a4de5478196b9a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fca5f0b91fbf7b7451bc04ea479a951d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "72d671ba138787a9f7877fc5c0bed1d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad8b8e69b3d2d8475d468275ea23b9bc",
".git/logs/refs/heads/main": "f1bf1d959de945b5ad5e646baf021681",
".git/logs/refs/remotes/origin/main": "cfc18c223573e424de7160aa34a051d3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/da017b36ff9f9058dc4f85fe6a69ca85521d03": "bbc5d0bba1320a55c9eff38bfe490319",
".git/objects/18/66a6615316f51de68c7dc2cbf7f1d220c6e7f8": "d4fd02299accea6cca745f50ee7d390b",
".git/objects/18/910aedc87495c656dcbb37a8503a9d4e0a431a": "e9f03de690d855b4921a94bc7fc98973",
".git/objects/1b/198be7a7be1d1bb15b2e39ce621896d4c968db": "da8960ecbb855020c3006f77a2aea9a5",
".git/objects/1d/8cb223ac9c8018d729917825a09aeaa579eb09": "32999f5b89e074907b1db72a6461de58",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/6ab4c58a3e6a81e1e2451ea82c2d32f013eb07": "c117e5d8168a5db7b6edfd1c47a0f6da",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/0abde4d8f90ae3bc054ca574cc2f1eb8d769d5": "e4e818a49c7b5bac3334d09c8f405754",
".git/objects/29/53132e156d90623e57cd8dac88f9123fe1cd8f": "f683b29d92d78d46a8619631319af51f",
".git/objects/2a/bae8be863103f294b4bc4770d62cab994ad501": "35fe12e6bf23633c29b8e1659b94f5c8",
".git/objects/36/7228ed97f46d408c9d8c45ecfdd68e7b7f8e2c": "fa73dfce818cb0794aa4b2ee974fd298",
".git/objects/38/4d080ebdbee81bc5e2831697e22caef8abbcda": "30f074cbccb807e845e7af9e3a54c675",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/12416ebac8a7db29e2dae6c2079e2a7efbde69": "10a108e3972b5019d9b03625ba9754ae",
".git/objects/53/ea8f120f644ce33f15d6f08307ead777bbbf75": "189bb0a9a881fe7d66334724f3fcca1f",
".git/objects/57/d128923930fdbf0b1e54216eb6ed1d283924fe": "69663ffd0d39207e8055ed014e44212b",
".git/objects/5f/1fa991224c12628312c37a6ee1f808a6712a23": "40a9dc97a973e5719dd34c902ff5b46e",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/80ed974a791f583591b832333db7198e7f6f58": "5bb7743172164865b4e9427018703096",
".git/objects/66/f352399c95c2ab2706ae70af0a2fff6780bfe5": "8193dcfa71159f52d89f66ebade0666b",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/631b3a0cca60383b5a310110f0ef0a98933c23": "e2cf4d6681fde02b53682c42441f44b9",
".git/objects/70/a77463ccb7336c42d28fa82291ab1c8ac92b42": "74c476c7fe1fff778c298203eeb64132",
".git/objects/72/12463cd417423ce9258da0527cf5da0923ce45": "d2956fff23fb2dd9eda208b4db8382b7",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/78/1eb44b20c4f3981cf029c69b483b254b6233b8": "59c8b06016cac2c71ef149a3c48c003e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/0cba2034dcd86466c65ae5b16d551cfe76430f": "0a37123e5c52c2d59baf361854efe92c",
".git/objects/8f/9fba667750c616587572022b75915bfbeba279": "a0c7aff3547d031c1c9cac70f423b542",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/95/8f9467ee452391e8685d4f1f8475754fda2b33": "000a19808a0ea37be395bcb4c391a515",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9e/302a1bc2b6d7d71d322b77634dbe2d4204b81c": "5474db16339238b8e942f6783283e95f",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/a9/71f676fc6408c2057e58f8a8200e0f1b0064ed": "1a53298804493e5b0980a0f380044390",
".git/objects/aa/e3667fd51d7bf7403e1eb870223f5a0eb94238": "cd1991eb04da6091b24fb3f88e3162af",
".git/objects/ab/ea426e3aa2b25f10c5ac0992c17bdfbcce8a87": "2edca64bbe0404a21bd6d9ccfe3a8931",
".git/objects/ad/db08fe6fc5862c0222542aab25402c47590f31": "767b2f24ffa5b500e761fb634aeb311c",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/adc9d6a2d62e0e293fa316146c6fd03189165a": "4daecfcef6fc6824101ff06214d998e1",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/ae3d88b9e85723282c462f3de0e71bf59a0147": "51f61ac55a99d7c2294ca7a2d6da9cd0",
".git/objects/b5/d69419d3d40e3c0f014d0af9910121c7a5e213": "b889386c925d3a6c007cc43126788569",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/37451bac8b20a083ac5e544ef33e0c54e06363": "d16697831a0ad2e2ac82c82a0c662cc3",
".git/objects/bb/3e4df05dd3f6d0d26be97809e12acf9b2708a0": "18266e699ad3f0386d0e7a446b3228a9",
".git/objects/bc/e1a87e1a706b2ab8a54d768c6e01a3a1051a2f": "241a6706c64060e47a01413f2cfa7cfa",
".git/objects/be/6b91bf30028245059ee3984ba4ea1069b5a690": "0647efc937bdcaac5f4feab0da707135",
".git/objects/c2/cfd4f5f82b29b228a7e9da5dbc810cb5952a3d": "c1e1e7cfb0497df61843a3b59fdf71d7",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/ed691b044b11a1c7ee16df6d584024039c8d56": "7596de85f733c6f454fc1f4b72971358",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/5d569fa381b8e935bf25cabef4939110ec8ba5": "cdc6cc4b844c989ed4a10da5f3561ffc",
".git/objects/ca/d36f69d636bf86b508f983963ff720455240e7": "085eca2d5f9f89559230d84151c61221",
".git/objects/d3/585df3e35d44959bfa817fe7f021aa4f19fb48": "ed4dc6226096b4d596ed84d186adaaee",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/03daa2938cf6f6ba96bb9064dd88a824d97246": "c0507cebd47cbf36527da2a512a64f3c",
".git/objects/d6/5c85001206bfa51dd7ea0b25b17b296dd70599": "645b107b1ec3d7d2c0e5bfee1f77e8b2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/de/87d4d84d65325a332d89ec66dc518a95003da8": "29efdfb4dfdfe47abc1e096a66050c6f",
".git/objects/e0/63938f39218dfdc8c5950d59f06782a7857728": "c8feaff79c1e7e65b1521410249dbca8",
".git/objects/e8/f548d891ac3896d5029158139d1aad8248f8f9": "23ed65029c7bd2af2cd4932736fb6bd4",
".git/objects/e9/c7e0179f5599723e9f1c9338a4fcdf6fc62843": "a643d1f2926a71f0500d54be1d80927b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ef/8a9824897926e972d2c963df4d4653f8f53f58": "518d2b174025f540f25dd400757052d0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/e81b2ec6752f6f4daa351749064edf5b24e039": "71a3cf0cf596604df399af08912d9839",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fd/16be7efaf4b968d7bb4b0d4a447156bc6f139e": "8f7c6fcc92133d0ad29116d9c872c2a0",
".git/objects/fd/f6e81b478e0f27d95e20d26ba3ace456105619": "bf32d95bc8b691a70891a3b9e0202d5f",
".git/objects/fe/3c624982c9998464fa07f0b0c968bad8da8f56": "7fb4f75bdaf4f9d19a49b7ff2a38cfc5",
".git/ORIG_HEAD": "1a9fdb094d50bbd0e0a619ed59b55b45",
".git/refs/heads/main": "762a723843cfeb50fe265a07c6600128",
".git/refs/remotes/origin/main": "762a723843cfeb50fe265a07c6600128",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "52afe9838475864a0b575996cfdc1844",
"assets/NOTICES": "8348f2f11e2783c9702845c2f435f011",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "85c423fffa7639930380803d1e622b37",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"/": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"main.dart.js": "67302aaf656f34550d1af0da0c415919",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"README.md": "bf87bb675ccdba28a95f87e13535dd00",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
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
