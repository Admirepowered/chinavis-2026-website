import { marked } from "marked";

export const zh = {
  PageTitle: "报告模板 - ChinaVis 2026",
  Title: "报告模板",
  Content: marked.parse(
    `
会议报告模板下载：
<a href="/2026/templates/ChinaVis2026_presentation_templat.pptx" target="_blank">大会报告演讲PPT模板.pptx</a>
    `.replace(/^ /gm, ""),
    { async: false }
  ),
};

export const en = {
  PageTitle: "Presentation Template - ChinaVis 2026",
  Title: "Presentation Template",
  Content: marked.parse(
    `
Presentation template download:
<a href="/2026/templates/ChinaVis2026_presentation_templat.pptx" target="_blank">ChinaVis 2026 Presentation Template.pptx</a>
    `.replace(/^ /gm, ""),
    { async: false }
  ),
};