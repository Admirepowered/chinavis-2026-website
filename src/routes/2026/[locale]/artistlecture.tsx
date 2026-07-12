import { For } from "solid-js";
import { Title } from "@solidjs/meta";

import { useTranslation, useTranslator } from "~/locale";
import * as Dict from "~/i18n/artistlecture";

import { Page } from "~/components/Page";
import { SpeakerInfo } from "~/components/SpeakerInfo";

import "./cjkworkshop.css";

export default function ArtistLecture() {
  const t = useTranslator(Dict);

  const lectureTitle = useTranslation(Dict.lecture.title);
  const lectureTime = useTranslation(Dict.lecture.time);
  const lectureLocation = useTranslation(Dict.lecture.location);
  const hostName = useTranslation(Dict.lecture.host.name);
  const hostAffiliation = useTranslation(Dict.lecture.host.affiliation);

  return (
    <>
      <Title>{t("PageTitle")}</Title>

      <Page
        class="cjkworkshop"
        title={<span innerHTML={t("Title")}></span>}
      >
        <section>
          <h2>{t("Information")}</h2>

          <ul class="my-3 list-disc pl-6">
            <li>
              <b>{t("Time")}:</b> {lectureTime()}
            </li>
            <li>
              <b>{t("Location")}:</b> {lectureLocation()}
            </li>
            <li>
              <b>{t("Host")}:</b> {hostName()} · {hostAffiliation()}
            </li>
          </ul>
        </section>

        <section class="mt-8">
          <h2>{t("GuestLectures")}</h2>

          <div class="space-y-10">
            <For each={Dict.lecture.guests}>
              {(speaker) => <SpeakerInfo speaker={speaker} />}
            </For>
          </div>
        </section>
      </Page>
    </>
  );
}