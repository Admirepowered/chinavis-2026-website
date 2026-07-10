import { For, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { marked } from "marked";
import { keynoteDict, type KeynoteTalk } from "~/i18n/keynote";

// 行内渲染 Markdown（不套 <p>，便于和标签排在同一行；支持链接、强调等）
function mdInline(text: string): string {
  return marked.parseInline(text, { async: false }) as string;
}

export default function KeynotePage() {
  const params = useParams();
  const locale = () => (params.locale === "en" ? "en" : "zh");
  const dict = () => keynoteDict[locale()];

  return (
    <main class="keynote-page mx-auto w-full max-w-5xl px-5 py-10 md:px-8 md:py-12">
      <Title>{dict().pageTitle} · ChinaVis 2026</Title>

      <div class="flex flex-col gap-12">
        <For each={dict().talks}>
          {(talk) => <TalkBlock talk={talk} labels={dict().labels} />}
        </For>
      </div>

      {/* 竖条颜色：--bar；正文与标签统一为黑色 */}
      <style>{`
        .keynote-page { --bar: #008235; }
        .keynote-body { text-align: justify; text-indent: 2em; line-height: 1.9; }
        .keynote-body a { color: inherit; text-decoration: underline; word-break: break-all; }
      `}</style>
    </main>
  );
}

function TalkBlock(props: {
  talk: KeynoteTalk;
  labels: { speaker: string; title: string; time: string; abstract: string; bio: string };
}) {
  const t = props.talk;
  const l = props.labels;

  return (
    <article class="border-b border-neutral-200 pb-10 last:border-b-0">
      {/* 顶部：左侧信息栏 与 右侧头像 等高、顶端对齐 */}
      <div class="flex items-start justify-between gap-6">
        <div class="flex min-h-36 min-w-0 flex-1 flex-col justify-center gap-2 border-l-4 border-[var(--bar)] pl-4">
          <p>
            <span class="font-semibold text-neutral-900">{l.speaker}：</span>
            <span class="text-neutral-900">{t.speaker}</span>
          </p>
          <p>
            <span class="font-semibold text-neutral-900">{l.title}：</span>
            <span class="text-neutral-900">{t.title}</span>
          </p>
          <p>
            <span class="font-semibold text-neutral-900">{l.time}：</span>
            <span class="text-neutral-900">{t.time}</span>
          </p>
        </div>

        <Show when={t.photo}>
          <img
            src={t.photo}
            alt={t.speaker}
            class="h-36 w-auto shrink-0 rounded-md object-cover shadow-sm ring-1 ring-neutral-200"
            loading="lazy"
          />
        </Show>
      </div>

      {/* 摘要 */}
      <p class="keynote-body mt-6 text-[15px] text-neutral-900">
        <span class="font-semibold text-neutral-900">{l.abstract}：</span>
        <span innerHTML={mdInline(t.abstract)} />
      </p>

      {/* 个人简介 */}
      <p class="keynote-body mt-4 text-[15px] text-neutral-900">
        <span class="font-semibold text-neutral-900">{l.bio}：</span>
        <span innerHTML={mdInline(t.bio)} />
      </p>
    </article>
  );
}