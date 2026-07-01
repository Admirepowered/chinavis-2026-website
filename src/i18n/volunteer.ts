import { marked } from "marked";

const fileLinkRenderer = new marked.Renderer();

function escapeHtmlAttribute(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  })[char]!);
}

fileLinkRenderer.link = function ({ href, title, tokens }) {
  const text = this.parser.parseInline(tokens);
  const titleAttr = title ? ` title="${escapeHtmlAttribute(title)}"` : "";
  const isFileLink = /\.(pdf|docx?|xlsx?)($|[?#])/i.test(href);
  const fileAttrs = isFileLink ? ' target="_blank" rel="noopener" download' : "";

  return `<a href="${escapeHtmlAttribute(href)}"${titleAttr}${fileAttrs}>${text}</a>`;
};

export const zh = {
  PageTitle: "志愿者 - ChinaVis 2026",
  Title: "ChinaVis 2026 学生志愿者入围名单公布通知",
  Content: marked.parse(
    `
    经个人申请、导师推荐及志愿者委员会综合评审，ChinaVis 2026 学生志愿者入围名单已初步确定，具体名单详见附件。

    **请入围同学注意以下事项：**

      1. 请于 2026 年 7 月 2 日 23:59（北京时间）前回复确认邮件，确认是否参加志愿服务工作。
      2. 请尽快扫描邮件附件中的二维码加入志愿者群，以便及时接收后续工作安排及培训通知，保持通讯畅通，确保信息及时传达。
      3. 如因特殊原因无法参加，请及时邮件告知志愿者委员会。

    如有疑问，请联系：chinavis_volunteer@163.com

    **入围名单下载：** [ChinaVis 2026学生志愿者入围名单.pdf](/2026/volunteer/volunteer_list.pdf)

    # ChinaVis 2026 志愿者征集

    ## 学生志愿者项目

    本届会议诚挚招募学生志愿者，为 ChinaVis 2026 大会提供支持。您的积极参与将显著提升全体参会者的会议体验。作为志愿者，您将第一时间掌握可视化与可视分析领域的前沿动态，近距离接触全球专家学者，拓展宝贵的学术人脉。同时，本项目致力于选拔认真负责、热情奉献的学生志愿者，为其提供难得的实践机会，助力会议顺利举办，共同营造高效、温馨的学术交流环境。

    有意向申请志愿者的同学，请前往 [https://www.wjx.cn/vm/Ok2D5wU.aspx](https://www.wjx.cn/vm/Ok2D5wU.aspx) 填写志愿者申请表，申请时需提交导师推荐意见（详见 [《ChinaVis 志愿者导师推荐表》](/2026/volunteer/rec_form_cn.docx)）。我们将根据您填写的资料进行资格审核与选拔，最终结果将通过邮件或电话通知入选者。

    入选志愿者的同学将享受专属注册费优惠；未入选者请按大会规定的注册类型缴纳费用。**请有意申请者耐心等待选拔结果公布后再行缴费。**

    如对申请事宜有任何疑问，请联系：chinavis_volunteer@163.com。

    ## 志愿者申请资格

    - 身体健康。
    - 具有较好的沟通和团队合作能力。
    - 国内外高校正式在校注册的本科生、研究生。
    - 责任心强、服从会务安排，在会议期间完成工作服务。
    - 学生志愿者必须为 CSIG 学生会员。

    ## 志愿者福利

    参与会议服务工作的学生志愿者将享有以下福利：

    - 第一时间了解可视化与可视分析研究的最新进展，近距离接触来自世界各地的专家学者，建立属于自己的学术网络。
    - 参与 ChinaVis 志愿者能力提升活动，提高组织沟通能力，团队合作能力。
    - 获得与可视化专业领域知名专家一起工作、沟通与交流的宝贵机会，成为后续参加 ChinaVis 会议工作岗位的重要后备力量。
    - 志愿者参会可享受会议注册折扣。
    - 提供志愿者专用服装、胸牌。
    - 获得官方授予的志愿者荣誉证书。

    ## 学生志愿者选拔条件

    我们的目标是打造一支专业、负责且可持续发展的志愿者团队。当申请人数超过限定名额时，将依据以下优先条件进行选拔：

    - 参加过 ChinaVis 往届会议。
    - 参加过 ChinaVis 往届会议并承担志愿者工作。
    - 参加过 IEEE VIS、EuroVis、IEEE PacificVis 等可视化国际会议。
    - 参加过 IEEE VIS、EuroVis、IEEE PacificVis 等可视化国际会议并承担志愿者工作。
    - 参加过其他会议/活动志愿者经验。
    - 后备 ChinaVis 举办地所属大学的申请者。
    - 博士、硕士研究生和本科生。

    注：

    - 本着鼓励广泛交流的原则，同一导师的申请者入选者不超过 2 人，同一学校的申请者入选者不超过 4 人。
    - 曾经参加过 ChinaVis 志愿者工作，评价不合格者，不予接收。
    - 最终解释权由志愿者委员会给出。

    ## 工作时间和地点

    时间：2026 年 7 月 19 日 - 7 月 22 日

    地点：贵州饭店国际会议中心

    地址：贵州省贵阳市云岩区北京路 66 号

    ## 志愿者申请时间节点

    志愿者申请截止时间：2026 年 6 月 28 日

    志愿者评审公布时间：2026 年 6 月 30 日

    所有截止时间均为北京时间 23:59。

    ## 志愿者主席

    **许　凯**　贵阳学院

    **王伽臣**　浙江大学
  `.replace(/^    /gm, ""),
    { async: false, renderer: fileLinkRenderer }
  ),
};

export const en = {
  PageTitle: "Volunteers - ChinaVis 2026",
  Title: "ChinaVis 2026 Student Volunteer Shortlist Announcement",
  Content: marked.parse(
    `
    After individual applications, supervisor recommendations, and comprehensive review by the volunteer committee, the ChinaVis 2026 student volunteer shortlist has been preliminarily confirmed. Please see the attachment for the full list.

    **Shortlisted students should note:**

     1. Please reply to the confirmation email by 23:59 (Beijing Time) on July 2, 2026 to confirm whether you will participate in the volunteer service.
     2. Please scan the QR code in the email attachment to join the volunteer group as soon as possible, so you can receive follow-up assignments and training notices in time. Keep communication channels open.
     3. If you cannot participate for special reasons, please inform the volunteer committee by email in time.

    For inquiries, contact: chinavis_volunteer@163.com.

    **Shortlist Download:** [ChinaVis 2026 Student Volunteer Shortlist PDF](/2026/volunteer/volunteer_list.pdf)

    # ChinaVis 2026 Volunteer Recruitment

    ## Student Volunteer Program

    We are calling for student volunteers for ChinaVis 2026. This program looks for reliable and responsible student volunteers to assist the conference organizers in providing better conference services. Student volunteers can obtain the latest research progress in visualization and visual analysis, and work with visualization scholars from all over the world.

    Students interested in applying for the volunteer position are invited to complete the volunteer application form at [https://www.wjx.cn/vm/mBK2953.aspx](https://www.wjx.cn/vm/mBK2953.aspx). A letter of recommendation from your supervisor is required during the application (please refer to the [template.docx](/2026/volunteer/rec_form_en.docx)). We will conduct a qualification review and selection based on the submitted information, and final results will be communicated via email or phone.

    Selected volunteers will receive a special discount on conference registration fees; those not selected should pay according to the registered fee category specified by the conference. **Applicants are kindly requested to wait for the announcement of selection results before making any payment.**

    For any inquiries regarding the application, please contact: chinavis_volunteer@163.com.

    ## Application Qualifications

    - Good physical condition.
    - Good communication abilities and teamwork skills.
    - Registered undergraduate and graduate students in domestic and foreign universities.
    - Strong responsibility for completing conference services well.
    - CSIG student members.

    ## Volunteer Benefits

    Student volunteers can receive the following benefits:

    - Obtain the latest research progress in visualization and visual analytics.
    - Improve organization skills, communication skills, and teamwork skills.
    - Work with well-known visualization scholars, and become a candidate staff member of the ChinaVis community.
    - Registration with discount fees.
    - Volunteer’s uniform and name tags.
    - Honorary certificates of volunteers from the conference.

    ## Qualifications for Selection

    We aim to establish a professional, responsible, and sustainable volunteer team. The following are the priority criteria for selection:

    - Participated in previous ChinaVis conferences.
    - Worked as a previous ChinaVis volunteer.
    - Participated in IEEE VIS, EuroVis, IEEE PacificVis, and other international visualization conferences.
    - Worked as a volunteer in IEEE VIS, EuroVis, IEEE PacificVis, and other international visualization conferences.
    - Volunteer experience in other conferences/activities.
    - Applicants from universities will hold subsequent ChinaVis conferences.
    - Doctoral students or postgraduate students are preferred.

    Notes:

    - To encourage communications, no more than 2 applicants from one supervisor and no more than 4 applicants from one university.
    - Those who have worked as ChinaVis volunteers with negative evaluations will not be accepted.
    - The volunteer committee reserves the right of final interpretation.

    ## Working Hours and Place

    Time: July 19 - July 22, 2026

    Venue: Guizhou International Conference Center, Guizhou Hotel

    Address: No. 66 Beijing Road, Yunyan District, Guiyang City, Guizhou Province, China.

    If you are interested in our program, please submit your volunteer application as soon as possible. The recruited volunteers will be notified by email or phone in time.

    Please register after confirming the result of your application. The volunteers will register with discount fees.

    ## Important Dates

    Application deadline: June 28, 2026

    Notice for Volunteer list: June 30, 2026

    All deadlines are at 23:59 Beijing Time.

    ## Volunteer Chairs

    **Kai Xu**, Guiyang University

    **Jiachen Wang**, Zhejiang University
  `.replace(/^    /gm, ""),
    { async: false, renderer: fileLinkRenderer }
  ),
};
