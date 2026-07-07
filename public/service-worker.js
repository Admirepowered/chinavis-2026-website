const VERSION = "media-v1";
const CACHE_PREFIX = "chinavis-2026-";
const MEDIA_CACHE = `${CACHE_PREFIX}media-${VERSION}`;

const scopePath = new URL(self.registration.scope).pathname.replace(/\/$/, "");

const isInScope = (url) => {
  if (!scopePath) return true;
  return url.pathname === scopePath || url.pathname.startsWith(`${scopePath}/`);
};

// 只缓存这些资源
const MEDIA_ASSET_RE =
  /\.(?:png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|otf|mp4|webm)$/i;

// 明确不缓存这些资源
const NEVER_CACHE_RE =
  /\.(?:html?|js|mjs|css|json|webmanifest|xml|txt)$/i;

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      // 删除旧的 chinavis-2026-* 缓存，只保留当前媒体缓存
      await Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== MEDIA_CACHE)
          .map((key) => caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // 只处理本站 /2026/ scope 下的资源
  if (url.origin !== self.location.origin) return;
  if (!isInScope(url)) return;

  // service-worker.js 自己永远不缓存
  if (url.pathname.endsWith("/service-worker.js")) {
    event.respondWith(fetch(request, {cache: "no-store"}));
    return;
  }

  // 页面、HTML、JS、CSS、JSON 全部不交给 SW 缓存
  // 这些请求会走浏览器/服务器默认逻辑
  if (
    request.mode === "navigate" ||
    request.destination === "document" ||
    NEVER_CACHE_RE.test(url.pathname)
  ) {
    return;
  }

  // 只缓存图片、字体、视频
  if (
    MEDIA_ASSET_RE.test(url.pathname) ||
    ["image", "font", "video"].includes(request.destination)
  ) {
    event.respondWith(cacheFirstAndUpdate(request));
  }
});

async function cacheFirstAndUpdate(request) {
  const cache = await caches.open(MEDIA_CACHE);

  const cached = await cache.match(request);
  if (cached) {
    // 后台更新缓存，不影响当前加载速度
    fetchAndUpdate(cache, request);
    return cached;
  }

  return fetchAndUpdate(cache, request);
}

async function fetchAndUpdate(cache, request) {
  const response = await fetch(request, {
    cache: "no-cache",
    redirect: "follow",
  });

  if (isCacheable(response)) {
    await cache.put(request, response.clone());
  }

  return response;
}

function isCacheable(response) {
  return response && response.ok && response.type === "basic";
}