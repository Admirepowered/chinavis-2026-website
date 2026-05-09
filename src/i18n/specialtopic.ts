import { marked } from "marked";

export const zh = {
  PageTitle: "专题 - ChinaVis 2026",
  Title: "专题征题通知",
  Content: marked.parse(
    `
    ## 征集信息

    中国可视化与可视分析大会（ChinaVis）组织专题报告会，就当前可视化与可视分析领域研究的重要问题和新方向开展研讨。在过去几年中，大会组织的专题报告会涵盖可视化理论方法、交互技术、学科发展、教育科普，和人工智能、艺术设计等交叉学科，以及安全、时空、行业应用等各个方面。2026年将在过去选题的基础上，进一步深入和拓展方向，特别是数字人文、人工智能和可视化融合的内容。

    各专题报告会的时长为1小时30分钟。每个专题邀请4位相关专家讲者，每位演讲时间为20分钟；报告会还可邀请更多专家学者一起开展点评和讨论。每个专题报告会的预留讨论时间为10分钟。实际具体时间分配由各专题报告会调整。大会安排各专题报告会时间段为2026年7月20日下午及7月21日全天。

    在此我们公开征集ChinaVis 2026专题报告会的选题。有意向的申请人需提交包括专题题目、摘要和相关全部演讲或点评专家信息（姓名、工作单位、个人简介和照片）的文档。专题报告会特别鼓励可视化与可视分析的新领域、交叉领域的主题。主申请者本人不必要是报告会讲者，但提交专题申请信息前需要获演讲专家同意。每一位入选专题讲者需要和其他参会者同样进行会议注册，大会将授予讲者证书，并邀请参加相关招待宴会。提交申请材料（附件：<a href="/2026/specialtopic/info.docx" target="_blank">专题信息表.docx</a>）或咨询请发送电子邮件至chinavis.topic@gmail.com。

    ## 重要日期

    - 提交截止：2026 年 6 月 7 日 北京时间下午 11:59
    - 结果通知：2026 年 6 月 14 日 北京时间下午 11:59

    ## 联系人

    **陶　钧**　中山大学

    **王　昉**　中国空气动力研究与发展中心

    联系邮箱：chinavis.topic@gmail.com
  `.replace(/^    /gm, ""),
    { async: false }
  ),
};

export const en = {
  PageTitle: "Special Topics - ChinaVis 2026",
  Title: "Special Topics - Call for Proposals",
  Content: marked.parse(
    `
    ## Introduction

    The 13th China Visualization and Visual Analytics Conference (ChinaVis 2026) will be held in Hangzhou, China, 19 to 22 July 2026, hosted by China Society of Image and Graphics, Technical Committee on Visualization and Visual Analysis, Zhejiang University, Hangzhou Research Institute of AI and Holographic Technology, Hangzhou Dianzi University, China Academy of Art, Zhejiang University of Technology, Communication University of Zhejiang and Hangzhou City University with multiple sponsorships.

    The special topics at the ChinaVis conference are designed to discuss state-of-the-art research progress and key challenges in visualization and visual analytics. In the past ChinaVis conferences, the topics of special sessions included visualization theory and methods, interaction technology, discipline development, education and popular science, interdisciplinary fields such as artificial intelligence and art design, as well as safety, space-time, industry applications and other aspects. In 2026, based on the topics selected in the past, further in-depth and expanded directions will be carried out, especially in the content of digital humanity, artificial intelligence, and visualization integration.

    ## Special Topic Format

    Each special session is 90 minutes long. Each topic invites four invited speakers, with 20 minutes for each talk. The session may also invite additional experts and scholars for comments and discussion. Each special session reserves 10 minutes for discussion. The actual time allocation can be adjusted by each session. The conference will schedule special sessions on the afternoon of July 20 and throughout July 21, 2026.

    ## Proposal Information

    We are openly soliciting proposals for ChinaVis 2026 special sessions. Interested applicants should submit a document including the topic title, abstract, and information for all speakers or discussion experts, including name, affiliation, short bio, and profile photo. Special sessions particularly encourage topics in new areas and interdisciplinary directions of visualization and visual analytics. The main applicant does not need to be a session speaker, but should obtain consent from all invited speakers before submitting the proposal. Each selected speaker needs to register for the conference in the same way as other participants. The conference will award speaker certificates and invite speakers to related reception banquets.

    Please email proposal materials (Attachment: <a href="/2026/specialtopic/info.docx" target="_blank">Information Table of Special Topics</a>) or questions to chinavis.topic@gmail.com.

    ## Important Dates

    - Submission Deadline: June 7, 2026, 11:59 PM (Beijing Time)
    - Notification of Acceptance: June 14, 2026, 11:59 PM (Beijing Time)

    ## Chairs

    **Jun Tao**, Sun Yat-sen University

    **Fang Wang**, China Aerodynamics Research and Development Center

    Email: chinavis.topic@gmail.com
  `.replace(/^    /gm, ""),
    { async: false }
  ),
};
