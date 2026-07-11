import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { Page } from "~/components/Page";
import * as Dict from "~/i18n/paper";
import { useTranslator } from "~/locale";

export default function Paper() {
  const t = useTranslator(Dict);

  return (
    <>
      <Title>{t("PageTitle")}</Title>

      <Page class="paper-page">
        <h1 class="paper-page__title">{t("Title")}</h1>

        <div class="paper-page__sessions">
          <For each={Dict.paperSessions}>
            {(session) => (
              <section class="paper-session">
                <div class="paper-session__heading">
                  <span
                    class="paper-session__marker"
                    aria-hidden="true"
                  />
                  <div
                    class="paper-session__title"
                    role="heading"
                    aria-level={2}
                  >
                    {t("Session")} {session.no}: {session.title}
                  </div>
                </div>
                <div class="paper-session__meta">
                  <div class="paper-session__meta-row">
                    <span class="paper-session__meta-label">
                      {t("Time")}：
                    </span>
                    <span>{session.time}</span>
                  </div>

                  <div class="paper-session__meta-row">
                    <span class="paper-session__meta-label">
                      {t("Location")}：
                    </span>
                    <span>{session.location}</span>
                  </div>

                  <div class="paper-session__meta-row">
                    <span class="paper-session__meta-label">
                      {t("Chair")}：
                    </span>
                    <span>{session.chair}</span>
                  </div>
                </div>

                <div class="paper-session__papers">
                  <For each={session.papers}>
                    {(paper, index) => (
                      <article
                        class="paper-item"
                        data-paper-id={paper.id}
                      >
                        <div class="paper-item__number" aria-hidden="true">
                          {String(index() + 1).padStart(2, "0")}
                        </div>

                        <div class="paper-item__content">
                          <div class="paper-item__line">
                            <span class="paper-item__label">
                              {t("PaperTitle")}：
                            </span>
                            <span>{paper.title}</span>
                          </div>

                          <div class="paper-item__line">
                            <span class="paper-item__label">
                              {t("Authors")}：
                            </span>
                            <span>{paper.authors.join(", ")}</span>
                          </div>
                        </div>
                      </article>
                    )}
                  </For>
                </div>
              </section>
            )}
          </For>
        </div>
      </Page>

      <style>{`
        .paper-page {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 36px 24px 80px;
        }

        .paper-page__title {
          margin: 0 0 54px;
          text-align: center;
          font-size: 32px;
          font-weight: 600;
          line-height: 1.3;
        }

        .paper-page__sessions {
          display: flex;
          flex-direction: column;
          gap: 72px;
        }

        .paper-session__heading {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .paper-session__marker {
          width: 8px;
          height: 36px;
          margin-top: 0;
          flex: 0 0 auto;
          background: var(--color-primary, #15803d);
        }

        .paper-session__title {
          min-width: 0;
          font-size: 25px;
          font-weight: 400;
          line-height: 1.35;
        }

        .paper-session__meta {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 14px 0 26px 29px;
          font-size: 15px;
          line-height: 1.6;
        }

        .paper-session__meta-row {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .paper-session__meta-label {
          flex: 0 0 auto;
          font-weight: 700;
        }

        .paper-session__papers {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-left: 29px;
        }

        .paper-item {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }

        .paper-item__number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          border-radius: 6px;
          background: var(--color-primary, #15803d);
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1;
        }

        .paper-item__content {
          min-width: 0;
          padding-top: 1px;
          font-size: 1rem;
          line-height: 1.65;
        }

        .paper-item__line + .paper-item__line {
          margin-top: 2px;
        }

        .paper-item__label {
          font-weight: 700;
        }

        @media (max-width: 640px) {
          .paper-page {
            padding: 24px 16px 56px;
          }

          .paper-page__title {
            margin-bottom: 38px;
            font-size: 26px;
          }
          .paper-session__title {
            font-size: 20px;
          }

          .paper-page__sessions {
            gap: 52px;
          }

          .paper-session__heading {
            gap: 14px;
          }

          .paper-session__marker {
            width: 7px;
            height: 38px;
          }

          .paper-session__meta {
            margin: 16px 0 24px 21px;
            gap: 10px;
          }

          .paper-session__papers {
            margin-left: 21px;
            gap: 24px;
          }

          .paper-item {
            gap: 12px;
          }

          .paper-item__number {
            width: 38px;
            height: 38px;
            flex-basis: 38px;
            border-radius: 5px;
          }
        }
      `}</style>
    </>
  );
}