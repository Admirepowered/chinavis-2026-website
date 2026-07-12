import { For, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { marked } from "marked";
import { topics, topicLabels, type Topic, type TopicGuest } from "~/i18n/topic";

function mdInline(text: string): string {
  return marked.parseInline(text, { async: false }) as string;
}
type Lang = "zh" | "en";

export default function TopicPage() {
  const params = useParams();
  const locale = (): Lang => (params.locale === "en" ? "en" : "zh");
  const L = () => topicLabels[locale()];

  return (
    <main class="topic-page mx-auto w-full max-w-5xl px-5 py-10 md:px-8 md:py-12">
      <Title>{L().pageTitle}</Title>

      {/* 页面标题（居中大标题） */}
      <h1 class="mb-10 text-center text-3xl font-bold text-neutral-900 dark:text-neutral-100 md:text-4xl">
        {L().pageTitle}
      </h1>

      <h2 class="mb-6 border-l-4 border-[var(--bar)] pl-3 text-2xl font-bold text-neutral-900 dark:text-neutral-100 md:text-[28px]">
        {L().directory}
      </h2>

      {/* 专题快速导航 */}
      <nav class="mb-12 flex flex-wrap gap-2">
        <For each={topics}>
          {(t) => (
            <a
              href={`#topic-${t.n}`}
              class="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[13px] text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 no-underline transition hover:border-[var(--bar)] hover:text-[var(--bar)]"
            >
              {L().topic}
              {t.n} · {t.title[locale()]}
            </a>
          )}
        </For>
      </nav>

      <div class="flex flex-col gap-20">
        <For each={topics}>
          {(t) => <TopicBlock topic={t} locale={locale()} labels={L()} />}
        </For>
      </div>

      <style>{`
        .topic-page { --bar: #008235; }
        .topic-body { text-align: justify; line-height: 1.85; }
        .topic-body a { color: inherit; text-decoration: underline; word-break: break-all; }
      `}</style>
    </main>
  );
}

function TopicBlock(props: {
  topic: Topic;
  locale: Lang;
  labels: (typeof topicLabels)["zh"];
}) {
  const t = props.topic;
  const loc = props.locale;
  const l = props.labels;

  return (
    <section id={`topic-${t.n}`} class="scroll-mt-24">
      {/* 专题标题 */}
      <h2 class="border-l-4 border-[var(--bar)] pl-3 text-xl font-bold text-neutral-900 dark:text-neutral-100 md:text-2xl">
        {l.topic}
        {t.n}：{t.title[loc]}
      </h2>

      {/* 时间 / 地点 / 主持人 */}
      <div class="mt-3 space-y-1 text-[14px] text-neutral-700 dark:text-neutral-300">
        <p>
          <span class="font-semibold text-neutral-900 dark:text-neutral-100">{l.time}：</span>
          {t.time[loc]}
          <span class="mx-2 text-neutral-300 dark:text-neutral-600">|</span>
          <span class="font-semibold text-neutral-900 dark:text-neutral-100">{l.location}：</span>
          {t.location[loc]}
        </p>
        <p>
          <span class="font-semibold text-neutral-900 dark:text-neutral-100">{l.host}：</span>
          {t.host.name}
          <Show when={t.host.affiliation}>
            <span class="text-neutral-500 dark:text-neutral-400">（{t.host.affiliation}）</span>
          </Show>
        </p>
      </div>

      {/* 嘉宾列表 */}
      <div class="mt-6 flex flex-col gap-8">
        <For each={t.guests}>
          {(g, i) => <GuestRow guest={g} index={i() + 1} labels={l} />}
        </For>
      </div>
    </section>
  );
}

function GuestRow(props: {
  guest: TopicGuest;
  index: number;
  labels: (typeof topicLabels)["zh"];
}) {
  const g = props.guest;
  const l = props.labels;
  return (
    <div class="flex gap-3 md:gap-4">
      <div class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--bar)] text-sm font-semibold text-white">
        {String(props.index).padStart(2, "0")}
      </div>

      <div class="min-w-0 flex-1">
        <Show when={g.photo}>
          <img
            src={g.photo}
            alt={g.name}
            class="float-right ml-4 mb-2 h-32 w-24 rounded-md object-cover object-top shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-700 md:h-36 md:w-28"
            loading="lazy"
          />
        </Show>

        {/* 报告人 + 单位 */}
        <p class="text-[15px] leading-relaxed">
          <span class="font-bold text-neutral-900 dark:text-neutral-100">{g.name} </span>
          <Show when={g.affiliation}>
            <span class="text-neutral-500 dark:text-neutral-400">　{g.affiliation}</span>
          </Show>
        </p>

        {/* 报告题目 */}
        <Show when={g.reportTitle}>
          <p class="mt-1.5 text-[15px] leading-relaxed">
            <span class="font-semibold text-neutral-900 dark:text-neutral-100">{l.reportTitle}：</span>
            <span class="font-medium">{g.reportTitle}</span>
          </p>
        </Show>

        {/* 论文作者 / 发表信息（前沿论文交流） */}
        <Show when={g.authors}>
          <p class="mt-1 text-[13px] text-neutral-600 dark:text-neutral-400">
            <span class="font-semibold">{l.authors}：</span>
            <span innerHTML={mdInline(g.authors!)} />
          </p>
        </Show>
        <Show when={g.venue}>
          <p class="mt-0.5 text-[13px] text-neutral-600 dark:text-neutral-400">
            <span class="font-semibold">{l.venue}：</span>
            {g.venue}
          </p>
        </Show>

        {/* 报告摘要 */}
        <Show when={g.abstract}>
          <p class="topic-body mt-2 text-[15px] text-neutral-900 dark:text-neutral-100">
            <span class="font-semibold">{l.abstract}：</span>
            <span innerHTML={mdInline(g.abstract!)} />
          </p>
        </Show>

        {/* 个人简介 */}
        <Show when={g.bio}>
          <p class="topic-body mt-2 text-[15px] text-neutral-900 dark:text-neutral-100">
            <span class="font-semibold">{l.bio}：</span>
            <span innerHTML={mdInline(g.bio!)} />
            <Show when={g.home}>
              {" "}
              <a href={g.home} target="_blank" rel="noreferrer">
                {g.home}
              </a>
            </Show>
          </p>
        </Show>

        <div class="clear-both" />
      </div>
    </div>
  );
}