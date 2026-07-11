import { For, Show } from "solid-js";
import { Title } from "@solidjs/meta";

import { Page } from "~/components/Page";
import * as Dict from "~/i18n/program";
import { useTranslation, useTranslator } from "~/locale";

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

function SideEventCard(props: { event: Dict.ProgramSideEvent }) {
  const date = useTranslation(props.event.date);
  const title = useTranslation(props.event.title);
  const location = props.event.location
    ? useTranslation(props.event.location)
    : undefined;

  return (
    <article class="rounded-xl border border-primary-darker/30 bg-primary/5 p-4 dark:border-primary-lighter/30 dark:bg-primary/10">
      <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 class="font-semibold text-gray-950 dark:text-gray-50">{title()}</h3>
        <span class="text-sm font-medium tabular-nums text-primary-darker dark:text-primary-lighter">
          {date()}
        </span>
      </div>

      <Show when={location}>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {location!()}
        </p>
      </Show>

      <Show when={props.event.details?.length}>
        <div class="mt-2 space-y-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
          <For each={props.event.details}>
            {(detail) => {
              const translatedDetail = useTranslation(detail);
              return <p>{translatedDetail()}</p>;
            }}
          </For>
        </div>
      </Show>
    </article>
  );
}

export default function Program() {
  const t = useTranslator(Dict);

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
          </div>

          <Show when={Dict.sideEvents.length > 0}>
            <section class="mb-10">
              <h2 class="mb-4 text-lg font-bold text-gray-950 dark:text-gray-50">
                {t("OngoingActivities")}
              </h2>
              <div class="grid gap-4">
                <For each={Dict.sideEvents}>
                  {(event) => <SideEventCard event={event} />}
                </For>
              </div>
            </section>
          </Show>

          <div class="space-y-12">
            <For each={Dict.program}>
              {(day) => <DaySection day={day} />}
            </For>
          </div>
        </div>
      </Page>
    </>
  );
}