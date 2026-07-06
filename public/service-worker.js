const VERSION = "v8";
const CACHE_PREFIX = "chinavis-2026-";
const STATIC_CACHE = `${CACHE_PREFIX}static-${VERSION}`;

const scopePath = new URL(self.registration.scope).pathname.replace(/\/$/, "");
const isInScope = (url) => {
  if (!scopePath) return true;
  return url.pathname === scopePath || url.pathname.startsWith(`${scopePath}/`);
};

const APP_ASSET_RE = /\.(?:js|mjs|css|wasm|json|webmanifest)$/i;
const MEDIA_ASSET_RE =
  /\.(?:png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|otf|mp4|webm)$/i;

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== STATIC_CACHE)
          .map((key) => caches.delete(key)),
      );

      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;
  if (!isInScope(url)) return;

  // 视频/音频的 Range 请求不要自己缓存，直接交给浏览器和 HTTP cache。
  if (request.headers.has("range")) return;

  // Service Worker 自己永远不缓存。
  if (url.pathname.endsWith("/service-worker.js")) {
    event.respondWith(fetch(request, { cache: "no-store" }));
    return;
  }

  // 页面导航永远走网络，防止旧 HTML / 旧路由状态。
  if (request.mode === "navigate" || request.destination === "document") {
    event.respondWith(fetchPage(request));
    return;
  }

  // JS/CSS/manifest：优先网络，失败再回缓存。
  if (APP_ASSET_RE.test(url.pathname)) {
    event.respondWith(networkFirst(request));
    return;
  }

  // 图片、字体、首页背景图、视频资源：优先缓存，同时后台更新。
  if (
    MEDIA_ASSET_RE.test(url.pathname) ||
    ["image", "font", "video"].includes(request.destination)
  ) {
    event.respondWith(cacheFirstAndUpdate(request));
  }
});

async function fetchPage(request) {
  try {
    return await fetch(request, {
      cache: "no-store",
      redirect: "follow",
    });
  } catch (error) {
    return new Response("暂时无法连接到服务器，请刷新后重试。", {
      status: 503,
      statusText: "Service Unavailable",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}

async function networkFirst(request) {
  const cache = await caches.open(STATIC_CACHE);

  try {
    const response = await fetch(request, {
      cache: "no-cache",
      redirect: "follow",
    });

    if (isCacheable(response)) {
      await cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw error;
  }
}

async function cacheFirstAndUpdate(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);

  const updatePromise = fetch(request, {
    cache: "no-cache",
    redirect: "follow",
  })
    .then(async (response) => {
      if (isCacheable(response)) {
        await cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => undefined);

  return cached || (await updatePromise) || Response.error();
}

function isCacheable(response) {
  return response && response.ok && response.type === "basic";
}