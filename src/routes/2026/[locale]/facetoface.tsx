import { For } from "solid-js";
import { Title } from "@solidjs/meta";

import { useTranslation, useTranslator } from "~/locale";
import * as Dict from "~/i18n/facetoface";
import { Page } from "~/components/Page";

export default function FaceToFace() {
  const t = useTranslator(Dict);

  const eventTime = useTranslation(Dict.event.time);
  const eventLocation = useTranslation(Dict.event.location);

  return (
    <>
      <Title>{t("PageTitle")}</Title>

      <Page title={<span innerHTML={t("Title")}></span>}>
        <section>
          <h2>{t("Information")}</h2>
          <ul class="my-3 list-disc pl-6">
            <li>
              <b>{t("Time")}: </b> {eventTime()}
            </li>
            <li>
              <b>{t("Location")}: </b> {eventLocation()}
            </li>
            <li>
              <b>{t("Hosts")}:</b>{" "}
              <For each={Dict.event.hosts}>
                {(host, index) => {
                  const hostName = useTranslation(host.name);
                  const hostAffiliation = useTranslation(host.affiliation);

                  return (
                    <>
                      {index() > 0 ? t("HostSeparator") : ""}
                      {hostName()} · {hostAffiliation()}
                    </>
                  );
                }}
              </For>
            </li>
          </ul>
        </section>

        <section class="mt-8">
          <h2>{t("Reports")}</h2>
          <div class="mt-4 space-y-6">
            <For each={Dict.event.reports}>
              {(report, index) => {
                const reportTitle = useTranslation(report.title);
                const speakerName = useTranslation(report.speaker.name);
                const speakerAffiliation = useTranslation(
                  report.speaker.affiliation,
                );

                return (
                  <article class="border-b border-primary-darker pb-5 last:border-b-0">
                    <h4 class="text-lg font-bold leading-relaxed">
                      {index() + 1}. {reportTitle()}
                    </h4>
                    <p class="mt-2 leading-relaxed">
                      <b>{t("Speaker")}:</b> {speakerName()} ·{" "}
                      {speakerAffiliation()}
                    </p>
                  </article>
                );
              }}
            </For>
          </div>
        </section>
      </Page>
    </>
  );
}