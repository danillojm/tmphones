'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "49377fa02c6d65bb43bf3d35e38e5617",
"version.json": "bb13defa11cf5daa6678e0228d5c9b5b",
"index.html": "e7a48b45065c30bfcf499ec393140b9a",
"/": "e7a48b45065c30bfcf499ec393140b9a",
"main.dart.js": "2bad08b626e5d9cf40367e44fd7cccf9",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "76a410ff4ca2a4b23226363f1f8336d0",
".git/config": "dd91388f40b90c55444685901a59a3f8",
".git/objects/50/55bdc1a324239ac51c7252726bfc666f0473e6": "61ef5faf2a301786425541a69ab8eb2a",
".git/objects/68/1f2f5befc9130b24afaf30c819d8a7c257aac5": "c7be14b2e398e619cc931394763b724b",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/22888beb80ec2be8464fb862f7ec4f337585e7": "0cc3dc279c155f9723df9cacca584945",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9b/ac6f63118effb25e9a299000c4127ec6655152": "5d049216e17d19cb2c654e03f65f6acc",
".git/objects/04/2a2ed42fc41c6c677d9d9102b26ab2c5d0fd03": "8355cf27466c9cda319f19da72c2890f",
".git/objects/35/06ded56b77938ab89af36615fee6b01dd91232": "48c3241326dfef3daa34b06262d09630",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/51/0ecc54e17f27cf84e7e450663452d28439b9ed": "765c25a87a51a42f881fc3cc8794705f",
".git/objects/67/a925a6f5b6181318d6e957818076e3e136ebb5": "b0b7ef16c9ab388e851aa6647e7ee879",
".git/objects/5a/e3d0d96cb2d837872aca8024ab8913dec4546d": "d245512db1056df0458c25198822ac7a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/a3/80c2f110a8efda746ce0ede43622a075266783": "43406027c160d59604b2d5794c940049",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/be/985d5bb4b434872e8b6cb04aaa1d32a5df4562": "3f15129593cb30648484d18b5524adf6",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/9a7f0bd37060ff900d6e05e94102d5fec795bb": "112af681cbf4c9779039a84455b9eb31",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/29/97636d8e442d8be03c83e1563dcf06a6e2ee17": "6f1f253b8fd23ee8fa63444b35392c6a",
".git/objects/16/61fb6f73af8c716d41e88bf960e538b821fe25": "a3b9a3348318081a458ca4d21abcda9e",
".git/objects/89/20026b665d01ba2cfc25b3214a3f81d7e398b5": "695b74670899109e7a9f5e3c6eb3143e",
".git/objects/89/bd6fe1c0dff4b7cdf92ccb0000e82900b708dc": "1540685988b7c33709cac2835d93bfa0",
".git/objects/45/fd7a4d878c9674dc30ea19b060334a0fa52747": "65c77dcc209151b9e202b07f2cde2983",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/792b88903ef3ea0fbc0230c69e630801365496": "47cb6029c5884bd4a9bd3ed318f01222",
".git/objects/4c/98a4d2f01b937d60e6e655f774f1a4fb68495d": "3405fc191858dddd0405b788d1c9c4d9",
".git/objects/26/212b2f3f2492486404e62415517ac5ce974681": "1933f4f4b6662202b507b0759ae13c92",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/6bb221c00e9fdf7083dc86e166c360a3a63904": "0603b65ce0815fae0933844e727649cf",
".git/objects/9a/bfb232eda6dabac84d8d726c736210c064b17b": "5fe38aa163fdee1b73411dada95dcbfe",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/7d8f04285d566cd413cc4458b5a34f94f5fe4e": "9eb519accc1ef2b7ac03775309ea8773",
".git/objects/3f/17e27fa0d8d147b294319f27248cb19ede4517": "1df9baa559f4ea501cfb4749291bcf60",
".git/objects/5b/eac86bfc1bed7a274516c6a367a23d05813eab": "70a5d0fde5fa0155f5c4e2085f160562",
".git/objects/06/7536e9ea5d7e8a362a8a0221dee80afa959e6c": "0860d0ca78d87c879fbf40ab301e23e8",
".git/objects/99/60aa3f9a8e3bdcd52de442323a6a67301b6345": "bb895d5d621262253b69291efa9e4110",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/d2/c0ec9cdc3bbd2286bf7ec8f0a4729ab8ca21ae": "828fe6a58d66cd4a92e76de6c845d80f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a6/b6ce58b02912076f8353f4f9e2a58b68cfd164": "390818bddb5bea10855340b7ca393993",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e1/ff2e5e944ecbc22cb41f0fdf662d6ba7ccff70": "88c3f01a8bcfb1f3ff39755f6f45d7c4",
".git/objects/f7/c1ece10e5011ac6b032cca902eb5ab59499d44": "6ec339ada4591cfa1d726484bf181a3c",
".git/objects/f1/0e9534891d1fedac0a36f24272d1671f7cb980": "00f11f55d64257875b7c54692583117e",
".git/objects/79/26bb090e46af5a386af4e554c04bb3070ab9ad": "3bb47992a3305bda6fa3e2ca535f099e",
".git/objects/48/e1382122c53c61887e203706746b6b9e449689": "3c448a279e2cabc71119f71a9c2fab62",
".git/objects/70/b0804dbaef1068ee3f88c148dd4e70a07977f6": "a5799df58eaa6ca54841023c7bb5a11d",
".git/objects/84/49aad20bac13da6a6a1424324b6248207be8b5": "feee06bc081476680ac1ac8f457d8056",
".git/objects/23/6777702295886a2a7c061a9d9d048e29f5a767": "655140dafdd8bb411d4090703ff8e51b",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/e1240b6b8938886fd4f3c997a8c716a48ffe4b": "c6e6b6a0d7a364d7848de445a81e4a32",
".git/objects/15/e08753d406cffa8578b41dc09108131e6f71fb": "95e927bae20106a8f2babb92b5ebe40f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/13/6f12909f5c4061c14928654fd8ab965b71e6ef": "c7a0c4f33c2fc90e553cdea1a231bf84",
".git/objects/7f/b26a994faf154b756bef93d7cbbb6738be78e5": "a702d6b8dcba7f3bbbf09e1c1e0c047e",
".git/objects/7a/1bb22bacac0fd6e30bd404a119c984b5c94409": "099e6d83a9f3a19d292d385930e88df6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2114f3de767ff01b53f7336e3078e0f",
".git/logs/refs/heads/master": "d2114f3de767ff01b53f7336e3078e0f",
".git/logs/refs/remotes/origin/master": "29364a6a3d89cdc2b309de88157d7447",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "2c17e3bd4c8453f4801d8caff18961e3",
".git/refs/remotes/origin/master": "2c17e3bd4c8453f4801d8caff18961e3",
".git/index": "13ff776d21f09aadd299e031a35c7fd4",
".git/COMMIT_EDITMSG": "f7a12d2479fa610b122db158c0b14213",
"assets/AssetManifest.json": "9e83ce535007d0ecc152153933bababf",
"assets/NOTICES": "1850559efbf8cd0dfb85db86d46be419",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "a036e097227bb0a8a213a61443bfbf13",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "abcd9a171763dd02a1b1631ce48c3dbf",
"assets/fonts/MaterialIcons-Regular.otf": "3bdc71ff53401a1ab1c5094c40edc685",
"assets/assets/images/logowithtext.png": "954fb979bd2b0dfd1476b0758fd014cb",
"assets/assets/images/logo.png": "df0ec1f100c140c1a02e0d17a13d8ae7",
"assets/assets/images/logotiago.png": "02f926537b402bbe6f3cc23e871e342d",
"assets/assets/images/photo4.jpg": "28b8b952e3faf30125d56b8c5f47c532",
"assets/assets/images/photo5.jpg": "4415164461b5175e14d55b6f40470faa",
"assets/assets/images/photo6.jpg": "fcc4a2d57e985be46673cc5107ed39ef",
"assets/assets/images/photo2.jpg": "8b69cc14acbdd21b279403cbcfa37ac2",
"assets/assets/images/photo3.jpg": "e15fc31e4ed05eb4370c40f1e765131e",
"assets/assets/images/photo1.jpg": "8919c83cfb6ca5a6106c2841ae065056",
"assets/assets/icons/Logout.svg": "72e70359d58453211e79bb6997fe8b16",
"assets/assets/icons/BlogPost.svg": "1591f545f50891d42ea10d582104ed1e",
"assets/assets/icons/Comments.svg": "fe5526f5e201592904e18e0222463199",
"assets/assets/icons/Post.svg": "e6d121c4a6ec5cd00e9c56e647f5fe9b",
"assets/assets/icons/Bell.svg": "9bc59ab4b881ce8834756d6efb9727e4",
"assets/assets/icons/Dashboard.svg": "9fe5ff508d43a7ab5e9e04cb95460e82",
"assets/assets/icons/Pages.svg": "b6036bea7a2a60a8cd0807d1edc0abd0",
"assets/assets/icons/Setting.svg": "93dc419a0a2ee4ff7be14c7fabe39c0d",
"assets/assets/icons/Message.svg": "37140f65978e0b67dc31bd815c72af9f",
"assets/assets/icons/Facebook.svg": "e299329132035bb7434be11c853249e2",
"assets/assets/icons/Subscribers.svg": "b41a302e79395e32514c221029b7f035",
"assets/assets/icons/Dribbble.svg": "ada20573b623c94cc622b680ba937148",
"assets/assets/icons/Linkedin.svg": "4f2cc8c28af3049b543d44ac3d47628e",
"assets/assets/icons/Twitter.svg": "0776622b3e786189d271a58d6eaed86e",
"assets/assets/icons/Statistics.svg": "0853d0fbb5dce77eee9d45129b8c11c4",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
