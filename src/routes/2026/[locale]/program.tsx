import { For, Show } from "solid-js";
import { Title } from "@solidjs/meta";

import floorplan from "~/assets/program/floorplan.png";
import { Page } from "~/components/Page";
import * as Dict from "~/i18n/program";
import { useTranslation, useTranslator } from "~/locale";

import "./program.css";

function scrollToVenueMap() {
  const venueMap = document.getElementById("venue-map");
  if (!venueMap) return;

  const reduceMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  venueMap.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

const venueMapCopy = {
  title: { zh: "会场平面图", en: "Venue Floor Plan" },
  description: {
    zh: "平面图包含贵州省国际会议中心 -1F 与 1F 的主要会场。点击图片可打开原图查看细节。",
    en: "The floor plan shows the main venues on B1 and 1F of the Guizhou International Conference Center. Select the image to open the full-size version.",
  },
  openFullSize: { zh: "查看大图", en: "View full-size floor plan" },
  quickLink: { zh: "查看会场平面图", en: "View venue floor plan" },
  venues: {
    zh: "-1F：第三会议室、新闻发布厅；1F：贵州厅 1–3、第四会议室、第五会议室",
    en: "B1: Meeting Room 3 and Press Conference Hall; 1F: Guizhou Halls 1–3 and Meeting Rooms 4–5",
  },
  alt: {
    zh: "贵州省国际会议中心会场平面图，上半部分为负一层，标出第三会议室和新闻发布厅；下半部分为一层，标出贵州厅 1、2、3以及第四、第五会议室",
    en: "Venue floor plan of the Guizhou International Conference Center. The upper half shows B1 with Meeting Room 3 and the Press Conference Hall; the lower half shows 1F with Guizhou Halls 1, 2, and 3 and Meeting Rooms 4 and 5.",
  },
} satisfies Record<string, Dict.LocalizedText>;

function VenueMapSection() {
  const title = useTranslation(venueMapCopy.title);
  const description = useTranslation(venueMapCopy.description);
  const openFullSize = useTranslation(venueMapCopy.openFullSize);
  const venues = useTranslation(venueMapCopy.venues);
  const alt = useTranslation(venueMapCopy.alt);

  return (
    <section id="venue-map" class="scroll-mt-24">
      <div class="mb-4">
        <div class="flex items-center gap-3">
          <div
            class="h-8 w-1.5 rounded-full bg-primary-darker"
            aria-hidden="true"
          />
          <h2 class="text-xl font-bold text-gray-950 dark:text-gray-50 sm:text-2xl">
            {title()}
          </h2>
        </div>
        <p class="mt-2 pl-[18px] text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
          {description()}
        </p>
      </div>

      <figure class="program-floorplan-card mx-auto max-w-5xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <a
          href={floorplan}
          target="_blank"
          rel="noreferrer"
          class="block focus-visible:outline-none"
          aria-label={`${title()} — ${openFullSize()}`}
        >
          <div class="border-b border-gray-200 bg-white p-2 dark:border-gray-700 sm:p-4">
            <img
              src={floorplan}
              alt={alt()}
              class="program-floorplan-image h-auto w-full object-contain"
              width="940"
              height="1169"
              loading="lazy"
              decoding="async"
            />
          </div>
        </a>

        <figcaption class="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p class="text-sm leading-5 text-gray-600 dark:text-gray-300">
            {venues()}
          </p>
          <a
            href={floorplan}
            target="_blank"
            rel="noreferrer"
            class="shrink-0 text-xs font-semibold text-primary-darker underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-darker dark:text-primary-lighter dark:focus-visible:outline-primary-lighter"
          >
            {openFullSize()}
          </a>
        </figcaption>
      </figure>
    </section>
  );
}

const badgeClass: Record<Dict.ProgramSessionType, string> = {
  keynote: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200",
  panel: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200",
  topic: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
  paper: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200",
  course: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  challenge: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200",
  workshop: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200",
  activity: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  exhibition: "bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-200",
  break: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
};

function SessionContent(props: { session: Dict.ProgramSession }) {
  const title = useTranslation(props.session.title);
  const typeLabel = useTranslation(Dict.sessionTypeLabels[props.session.type]);

  return (
    <div class="py-3">
      <div class="flex flex-wrap items-start gap-2">
        <span
          class={`mt-0.5 inline-flex shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeClass[props.session.type]}`}
        >
          {typeLabel()}
        </span>
        <h3 class="min-w-0 flex-1 font-semibold leading-6 text-gray-950 dark:text-gray-50">
          {title()}
        </h3>
      </div>

      <Show when={props.session.details?.length}>
        <div class="mt-2 space-y-1.5 pl-0 text-sm leading-6 text-gray-600 dark:text-gray-300 md:pl-10">
          <For each={props.session.details}>
            {(detail) => {
              const translatedDetail = useTranslation(detail);
              return (
                <div class="whitespace-pre-line break-words">
                  {translatedDetail()}
                </div>
              );
            }}
          </For>
        </div>
      </Show>
    </div>
  );
}

function Venue(props: { session: Dict.ProgramSession }) {
  const location = props.session.location
    ? useTranslation(props.session.location)
    : undefined;

  return (
    <span class="text-sm leading-6 text-gray-600 dark:text-gray-300">
      {location ? location() : "—"}
    </span>
  );
}

function DesktopTimeSlot(props: { timeslot: Dict.ProgramTimeSlot }) {
  return (
    <For each={props.timeslot.sessions}>
      {(session, index) => (
        <tr
          classList={{
            "bg-amber-50/70 dark:bg-amber-950/10": session.type === "break",
          }}
        >
          <Show when={index() === 0}>
            <td
              rowSpan={props.timeslot.sessions.length}
              class="w-32 border-r border-b border-gray-200 px-4 py-4 align-top font-semibold tabular-nums text-gray-900 dark:border-gray-700 dark:text-gray-100"
            >
              {props.timeslot.time}
            </td>
          </Show>

          <td class="w-52 border-r border-b border-gray-200 px-4 py-3 align-top dark:border-gray-700">
            <Venue session={session} />
          </td>

          <td class="border-b border-gray-200 px-4 align-top dark:border-gray-700">
            <SessionContent session={session} />
          </td>
        </tr>
      )}
    </For>
  );
}

function DesktopDayTable(props: { day: Dict.ProgramDay }) {
  const t = useTranslator(Dict);

  return (
    <div class="hidden overflow-hidden rounded-xl border border-gray-200 shadow-sm dark:border-gray-700 md:block">
      <table class="w-full table-fixed border-collapse text-left">
        <thead class="bg-primary-darkest text-white">
          <tr>
            <th class="w-32 px-4 py-3 text-sm font-semibold">{t("Time")}</th>
            <th class="w-52 px-4 py-3 text-sm font-semibold">{t("Venue")}</th>
            <th class="px-4 py-3 text-sm font-semibold">{t("Session")}</th>
          </tr>
        </thead>
        <tbody>
          <For each={props.day.timeslots}>
            {(timeslot) => <DesktopTimeSlot timeslot={timeslot} />}
          </For>
        </tbody>
      </table>
    </div>
  );
}

function MobileDayList(props: { day: Dict.ProgramDay }) {
  const t = useTranslator(Dict);

  return (
    <div class="space-y-4 md:hidden">
      <For each={props.day.timeslots}>
        {(timeslot) => (
          <section class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div class="border-b border-gray-200 bg-primary-darkest px-4 py-2.5 font-semibold tabular-nums text-white dark:border-gray-700">
              {timeslot.time}
            </div>

            <div class="divide-y divide-gray-200 dark:divide-gray-700">
              <For each={timeslot.sessions}>
                {(session) => (
                  <article
                    class="px-4"
                    classList={{
                      "bg-amber-50/70 dark:bg-amber-950/10":
                        session.type === "break",
                    }}
                  >
                    <div class="pt-3 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {t("Venue")}
                    </div>
                    <Venue session={session} />
                    <SessionContent session={session} />
                  </article>
                )}
              </For>
            </div>
          </section>
        )}
      </For>
    </div>
  );
}

function DaySection(props: { day: Dict.ProgramDay }) {
  const date = useTranslation(props.day.date);

  return (
    <section id={props.day.id} class="scroll-mt-24">
      <div class="mb-4 flex items-center gap-3">
        <div class="h-8 w-1.5 rounded-full bg-primary-darker" aria-hidden="true" />
        <h2 class="text-xl font-bold text-gray-950 dark:text-gray-50 sm:text-2xl">
          {date()}
        </h2>
      </div>

      <DesktopDayTable day={props.day} />
      <MobileDayList day={props.day} />
    </section>
  );
}

function FinalProgramRows() {
  const t = useTranslator(Dict);

  return (
    <Show when={Dict.finalProgramRows.length > 0}>
      <div>
        <div class="hidden overflow-hidden rounded-xl border border-gray-200 shadow-sm dark:border-gray-700 md:block">
          <table class="w-full table-fixed border-collapse text-left">
            <tbody>
              <For each={Dict.finalProgramRows}>
                {(row) => {
                  const date = useTranslation(row.date);

                  return (
                    <tr>
                      <td class="w-32 border-r border-gray-200 px-4 py-4 align-top font-semibold tabular-nums text-gray-900 dark:border-gray-700 dark:text-gray-100">
                        {date()}
                      </td>
                      <td class="w-52 border-r border-gray-200 px-4 py-3 align-top dark:border-gray-700">
                        <Venue session={row.session} />
                      </td>
                      <td class="px-4 align-top">
                        <SessionContent session={row.session} />
                      </td>
                    </tr>
                  );
                }}
              </For>
            </tbody>
          </table>
        </div>

        <div class="space-y-4 md:hidden">
          <For each={Dict.finalProgramRows}>
            {(row) => {
              const date = useTranslation(row.date);

              return (
                <section class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                  <div class="border-b border-gray-200 bg-primary-darkest px-4 py-2.5 font-semibold tabular-nums text-white dark:border-gray-700">
                    {date()}
                  </div>
                  <article class="px-4">
                    <div class="pt-3 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {t("Venue")}
                    </div>
                    <Venue session={row.session} />
                    <SessionContent session={row.session} />
                  </article>
                </section>
              );
            }}
          </For>
        </div>
      </div>
    </Show>
  );
}

export default function Program() {
  const t = useTranslator(Dict);
  const venueMapQuickLink = useTranslation(venueMapCopy.quickLink);

  return (
    <>
      <Title>{t("PageTitle")}</Title>

      <Page class="program" title={t("Title")}>
        <div class="mx-auto max-w-6xl">
          <div class="mb-8 text-center">
            <p class="text-base text-gray-600 dark:text-gray-300">
              {t("Subtitle")}
            </p>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {t("ScheduleNote")}
            </p>
            <button
              type="button"
              aria-controls="venue-map"
              onClick={scrollToVenueMap}
              class="mt-4 inline-flex cursor-pointer items-center rounded-full border border-primary-darker/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary-darker transition hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker focus-visible:ring-offset-2 dark:border-primary-lighter/30 dark:bg-primary/10 dark:text-primary-lighter dark:hover:bg-primary/20"
            >
              {venueMapQuickLink()}
            </button>
          </div>

          <div class="space-y-12">
            <For each={Dict.program}>
              {(day) => <DaySection day={day} />}
            </For>
            <FinalProgramRows />
            <VenueMapSection />
          </div>
        </div>
      </Page>
    </>
  );
}