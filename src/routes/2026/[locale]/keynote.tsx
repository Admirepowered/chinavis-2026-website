import { For, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { marked } from "marked";

import { Page } from "~/components/Page";
import { keynoteDict, type KeynoteTalk } from "~/i18n/keynote";

function mdInline(text: string): string {
  return marked.parseInline(text, { async: false }) as string;
}

export default function KeynotePage() {
  const params = useParams();

  const locale = () => (params.locale === "en" ? "en" : "zh");
  const dict = () => keynoteDict[locale()];

  return (
    <>
      <Title>{dict().pageTitle} · ChinaVis 2026</Title>

      <Page title={dict().pageTitle}>
        <div class="keynote-page">
          <div class="flex flex-col gap-14">
            <For each={dict().talks}>
              {(talk) => (
                <TalkBlock
                  talk={talk}
                  labels={dict().labels}
                  locale={locale()}
                />
              )}
            </For>
          </div>

          <style>{`
            .keynote-page {
              --keynote-accent: #008235;
              /* 同时用于：① 报告人/题目… 标签相对竖条的偏移
                 ② 摘要/个人简介 的首行缩进
                 两者取同一个值，首行的「摘要：」便与上方标签对齐 */
              --keynote-inset: 2rem;
            }

            /* ---------- 顶部信息区 ---------- */
            .keynote-meta {
              position: relative;
              flex: 1 1 auto;
              min-width: 0;
              padding-left: var(--keynote-inset);
            }

            /* 绿色竖条：随信息区高度自动拉伸，不再是孤零零的一小段 */
            .keynote-meta__bar {
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              width: 6px;
              border-radius: 3px;
              background-color: var(--keynote-accent);
            }

            /* 用两列网格让所有「值」竖直对齐 */
            .keynote-meta__grid {
              display: grid;
              grid-template-columns: max-content minmax(0, 1fr);
              align-items: baseline;
              column-gap: 0.6rem;
              row-gap: 0.55rem;
            }

            .keynote-meta__label {
              font-weight: 600;
              color: #171717; /* neutral-900 */
              white-space: nowrap;
            }

            /* 中文标签分散对齐，让每一行的冒号都在同一竖线上 */
            .keynote-meta--zh .keynote-meta__label {
              text-align: justify;
              text-align-last: justify;
            }

            .keynote-meta__value {
              min-width: 0;
              color: #171717;
              overflow-wrap: anywhere;
            }

            .keynote-photo {
              align-self: flex-start;
            }

            /* ---------- 摘要 / 个人简介 ---------- */
            .keynote-body {
              /* 首行缩进：第一行的「摘要：」落在上方标签所在的竖线上；
                 回行文字顶到最左侧，与绿色竖条对齐 */
              text-indent: var(--keynote-inset);
              text-align: justify;
              line-height: 1.9;
              color: #171717;
            }

            .keynote-body__label {
              font-weight: 600;
            }

            .keynote-body a {
              color: var(--keynote-accent);
              text-decoration: underline;
              text-underline-offset: 2px;
              word-break: break-all;
            }
          `}</style>
        </div>
      </Page>
    </>
  );
}

function TalkBlock(props: {
  talk: KeynoteTalk;
  locale: "en" | "zh";
  labels: {
    speaker: string;
    title: string;
    time: string;
    location: string;
    host: string;
    abstract: string;
    bio: string;
  };
}) {
  const t = props.talk;
  const l = props.labels;

  return (
    <article class="border-b border-neutral-200 pb-10 last:border-b-0">
      <div class="flex items-center justify-between gap-6">
        <div
          class="keynote-meta"
          classList={{ "keynote-meta--zh": props.locale === "zh" }}
        >
          <span class="keynote-meta__bar" aria-hidden="true" />

          <div class="keynote-meta__grid">
            <span class="keynote-meta__label">{l.speaker}：</span>
            <span class="keynote-meta__value">{t.speaker}</span>

            <span class="keynote-meta__label">{l.title}：</span>
            <span class="keynote-meta__value">{t.title}</span>

            <Show when={t.time}>
              <span class="keynote-meta__label">{l.time}：</span>
              <span class="keynote-meta__value">{t.time}</span>
            </Show>

            <Show when={t.location}>
              <span class="keynote-meta__label">{l.location}：</span>
              <span class="keynote-meta__value">{t.location}</span>
            </Show>

            <Show when={t.host}>
              <span class="keynote-meta__label">{l.host}：</span>
              <span class="keynote-meta__value">{t.host}</span>
            </Show>
          </div>
        </div>

        <Show when={t.photo}>
          {(photo) => (
            <img
              src={photo()}
              alt={t.speaker}
              class="keynote-photo h-36 w-auto shrink-0 rounded-lg object-cover shadow-sm ring-1 ring-neutral-200"
              loading="lazy"
            />
          )}
        </Show>
      </div>

      <div class="keynote-body mt-6 text-[15px]">
        <span class="keynote-body__label">{l.abstract}：</span>
        <span innerHTML={mdInline(t.abstract)} />
      </div>

      <div class="keynote-body mt-4 text-[15px]">
        <span class="keynote-body__label">{l.bio}：</span>
        <span innerHTML={mdInline(t.bio)} />
      </div>
    </article>
  );
}
