import { onMount, Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { Link, Meta, MetaProvider } from "@solidjs/meta";
import { FileRoutes } from "@solidjs/start/router";

import "./app.css";

import { Navbar } from "~/components/Navbar";
import { Teaser } from "~/components/Teaser";
import { Footer } from "~/components/Footer";
import { ScrollToTopButton } from "~/components/ScrollToTopButton";

export default function App() {
  onMount(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations()
        .then((registrations) => Promise.all(
          registrations
            .filter((registration) => new URL(registration.scope).pathname.startsWith("/2026/"))
            .map((registration) => registration.unregister())
        ))
        .catch((error) => console.warn("Service worker cleanup failed", error));
    }

    if ("caches" in window) {
      window.caches.keys()
        .then((keys) => Promise.all(
          keys
            .filter((key) => key.startsWith("chinavis-2026-"))
            .map((key) => window.caches.delete(key))
        ))
        .catch((error) => console.warn("Cache cleanup failed", error));
    }
  });

  return (
    <MetaProvider>
      <Link rel="icon" href="/2026/favicon.jpg" />
      <Link rel="manifest" href="/2026/manifest.webmanifest"></Link>
      <Meta name="theme-color" content="#000000"></Meta>
      <Router
        root={props => (
          <>
            <Suspense><Navbar /></Suspense>
            <Teaser />
            <Suspense>{props.children}</Suspense>
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
