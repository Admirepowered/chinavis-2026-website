import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { Link, Meta, MetaProvider } from "@solidjs/meta";
import { FileRoutes } from "@solidjs/start/router";

import "./app.css";

import { Navbar } from "~/components/Navbar";
import { Teaser } from "~/components/Teaser";
import { Footer } from "~/components/Footer";
import { ScrollToTopButton } from "~/components/ScrollToTopButton";

export default function App() {
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
