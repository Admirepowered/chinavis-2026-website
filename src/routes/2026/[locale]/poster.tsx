import { Navigate } from "@solidjs/router";

import { useLocale } from "~/locale";

export default function Poster() {
  const locale = useLocale();

  return <Navigate href={`/2026/${locale()}/callforposter`} />;
}
