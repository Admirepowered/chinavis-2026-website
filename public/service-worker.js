const CACHE_NAME = "chinavis-2026-static-v6";
const OLD_CACHE_PREFIX = "chinavis-2026-cache";

// 只缓存静态资源，不缓存 HTML 页面
const STATIC_FILE_RE =
  /\.(?:js|css|png|jpg|jpeg|gif|webp|svg|ico|woff2?|ttf|otf)$/i;

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      // 关键：清掉旧的 chinavis-2026-cache-v4 / v5 等缓存
      await Promise.all(
        keys.map((key) => {
          if (key.startsWith(OLD_CACHE_PREFIX) || key !== CACHE_NAME) {
            return caches.delete(key);
          }
        }),
      );

      if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable();
      }

      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (
    request.method !== "GET" ||
    !request.url.startsWith(self.location.origin)
  ) {
    return;
  }

  const url = new URL(request.url);

  // 关键：所有页面请求永远走网络，不读旧 HTML 缓存
  if (request.mode === "navigate") {
    event.respondWith(fetchFreshPage(event));
    return;
  }

  // service-worker.js 自己也不要被缓存
  if (url.pathname.endsWith("/service-worker.js")) {
    event.respondWith(fetch(request, {cache: "no-store"}));
    return;
  }

  // 静态资源可以缓存
  if (STATIC_FILE_RE.test(url.pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  event.respondWith(fetch(request, {cache: "no-cache"}));
});

async function fetchFreshPage(event) {
  try {
    const preloadResponse = await event.preloadResponse;
    if (preloadResponse) {
      return preloadResponse;
    }

    return await fetch(event.request, {
      cache: "no-store",
      redirect: "follow",
    });
  } catch (error) {
    return new Response("暂时无法连接到服务器。\n错误：" + error.message, {
      status: 503,
      statusText: "Service Unavailable",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  if (cached) {
    return cached;
  }

  const response = await fetch(request, {
    cache: "no-cache",
    redirect: "follow",
  });

  if (response.ok && response.type === "basic") {
    await cache.put(request, response.clone());
  }

  return response;
}