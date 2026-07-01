const CACHE_PREFIX = "chinavis-2026-";


self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(cleanupAndUnregister());
});

async function cleanupAndUnregister() {
  await cleanupCaches();
  await unregisterSelf();
  await reloadManagedClients();
}

async function cleanupCaches() {
  try {
    const cacheNames = await caches.keys();

    await Promise.allSettled(
      cacheNames
        .filter((cacheName) => cacheName.startsWith(CACHE_PREFIX))
        .map((cacheName) => caches.delete(cacheName))
    );
  } catch (error) {
    console.warn("[service-worker] Failed to clean caches:", error);
  }
}

async function unregisterSelf() {
  try {
    await self.registration.unregister();
  } catch (error) {
    console.warn("[service-worker] Failed to unregister:", error);
  }
}

async function reloadManagedClients() {
  try {
    const clients = await self.clients.matchAll({
      type: "window",
      includeUncontrolled: true,
    });

    const scopeUrl = new URL(self.registration.scope);

    await Promise.allSettled(
      clients.map(async (client) => {
        if (!client.url) return;

        const clientUrl = new URL(client.url);

        const isSameOrigin = clientUrl.origin === scopeUrl.origin;
        const isInScope = clientUrl.href.startsWith(scopeUrl.href);
        const alreadyReloaded = clientUrl.searchParams.has("sw-cleanup");

        if (!isSameOrigin || !isInScope || alreadyReloaded) return;

        clientUrl.searchParams.set("sw-cleanup", "1");

        await client.navigate(clientUrl.href);
      })
    );
  } catch (error) {
    console.warn("[service-worker] Failed to reload clients:", error);
  }
}