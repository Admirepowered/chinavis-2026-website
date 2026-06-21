import { Navigate } from "@solidjs/router";

import { useLocale } from "~/locale";

export default function PaperSessions() {
  const locale = useLocale();

  return <Navigate href={`/2026/${locale()}/callforpaper`} />;
}
