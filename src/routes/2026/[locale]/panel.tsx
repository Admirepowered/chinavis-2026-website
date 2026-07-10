import {For, Show} from "solid-js";
import {useParams} from "@solidjs/router";
import {Title} from "@solidjs/meta";
import {marked} from "marked";
import {panels, panelLabels, type Panel, type PanelPerson} from "~/i18n/panel";

function mdInline(text: string): string {
  return marked.parseInline(text, {async: false}) as string;
}

type Lang = "zh" | "en";

export default function PanelPage() {
  const params = useParams();
  const locale = (): Lang => (params.locale === "en" ? "en" : "zh");
  const L = () => panelLabels[locale()];

  return (
    <main class="panel-page mx-auto w-full max-w-5xl px-5 py-10 md:px-8 md:py-12">
      <Title>{L().pageTitle} · ChinaVis 2026</Title>

      <div class="flex flex-col gap-20">
        <For each={panels}>
          {(panel) => <PanelBlock panel={panel} locale={locale()} labels={L()}/>}
        </For>
      </div>

      <style>{`
        .panel-page { --bar: #008235; }
        .panel-bio { text-align: justify; line-height: 1.85; }
        .panel-bio a { color: inherit; text-decoration: underline; word-break: break-all; }
      `}</style>
    </main>
  );
}

/** 通用小标题：绿色竖条 + 加粗黑字 */
function SectionHeading(props: { children: any; size?: "lg" | "md" }) {
  const big = props.size === "lg";
  return (
    <h2
      class={
        "border-l-4 border-[var(--bar)] pl-3 font-bold text-neutral-900 " +
        (big ? "text-2xl md:text-[28px]" : "text-xl")
      }
    >
      {props.children}
    </h2>
  );
}

function PanelBlock(props: {
  panel: Panel;
  locale: Lang;
  labels: (typeof panelLabels)["zh"];
}) {
  const p = props.panel;
  const loc = props.locale;
  const l = props.labels;

  return (
    <section>
      {/* 论坛标题 */}
      <SectionHeading size="lg">{p.title[loc]}</SectionHeading>

      {/* 时间 / 地点 */}
      <div class="mt-4 space-y-1 text-[15px] text-neutral-800">
        <p>
          <span class="font-semibold">{l.time}：</span>
          <span>{p.time[loc]}</span>
        </p>
        <p>
          <span class="font-semibold">{l.location}：</span>
          <span>{p.location[loc]}</span>
        </p>
      </div>

      {/* 论坛简介 */}
      <div class="mt-8">
        <SectionHeading>{l.intro}</SectionHeading>
        <p class="panel-bio mt-3 text-[15px] text-neutral-900">{p.intro[loc]}</p>
      </div>

      {/* 主持人 */}
      <div class="mt-8">
        <SectionHeading>{l.host}</SectionHeading>
        <div class="mt-4">
          <PersonRow person={p.host}/>
        </div>
      </div>

      {/* 特邀嘉宾 */}
      <div class="mt-8">
        <SectionHeading>{l.guests}</SectionHeading>
        <div class="mt-5 flex flex-col gap-7">
          <For each={p.guests}>
            {(guest, i) => <PersonRow person={guest} index={i() + 1}/>}
          </For>
        </div>
      </div>
    </section>
  );
}

/**
 * 单个人物行：可选编号徽标 + 圆形头像（右侧浮动，简介环绕）+ 姓名/单位/简介。
 * 不传 index 时用于主持人（不显示编号）。
 */
function PersonRow(props: { person: PanelPerson; index?: number }) {
  const person = props.person;
  return (
    <div class="flex gap-3 md:gap-4">
      <Show when={props.index !== undefined}>
        <div
          class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--bar)] text-sm font-semibold text-white">
          {String(props.index).padStart(2, "0")}
        </div>
      </Show>

      <div class="min-w-0 flex-1">
        <Show when={person.photo}>
          <img
            src={person.photo}
            alt={person.name}
            class="float-right ml-4 mb-2 h-32 w-24 rounded-md object-cover object-top shadow-sm ring-1 ring-neutral-200 md:h-36 md:w-28"
            loading="lazy"
          />
        </Show>

        <p class="text-[15px] leading-relaxed">
          <span class="font-bold text-neutral-900">{person.name} </span>
          <Show when={person.affiliation}>
            <span class="text-neutral-500">　{person.affiliation}</span>
          </Show>
        </p>

        <p
          class="panel-bio mt-1.5 text-[15px] text-neutral-900"
          innerHTML={mdInline(person.bio)}
        />

        <div class="clear-both"/>
      </div>
    </div>
  );
}
