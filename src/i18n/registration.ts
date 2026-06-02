import { marked } from "marked";

export const zh = {
  PageTitle: "注册 - ChinaVis 2026",
  Title: "会议注册",
  Content: marked.parse(
    `
    ## 注册二维码及链接

    <img src="{{ qrcodeImage }}" alt="注册二维码" style="width: 200px; height: 200px; display: block; margin: 0 auto;" />
    <p style="text-align: center; text-indent: 0; margin-top: 0">扫描二维码注册</p>

    **会议注册通道：** [ChinaVis 2026 会议注册](https://meeting.csig.org.cn/exh/default2/baoming?fair_id=395&role_id=22)
    
    **会议通知下载：** <a href="/2026/registration/announcement.pdf" target="_blank">点击下载</a>

    ## 会议注册方式

    二维码注册：扫描官方发布的会议注册二维码进入报名系统。

    官网通道注册：登录 2026 ChinaVis 官方会议网站指定注册入口在线填报缴费。

    现场报到注册：7 月 20 日—7 月 22 日，在会议指定报到地点现场办理注册。

    说明：官方注册网址、注册二维码统一在会议官网、学会公众号、正式通知同步发布。

    ## 注册时间节点

    早鸟价提前注册：即日起至 6 月 30 日 23:59 截止（最优惠价格，推荐优先选择）。

    常规正常注册：7 月 1 日—7 月 19 日。

    现场注册：7 月 20 日—7 月 22 日（价格最高，不建议选择）。

    ## 注册身份说明

    会员：特指中国图像图形学会（CSIG）正式会员。非会员建议提前入会，选择可视化与可视分析专委会、由专委会委员推荐，获取会员号后享受会员优惠价注册。

    学生注册：全日制在校本科生、研究生，需核验学生身份。

    普通注册：在职教师、科研人员、企业参会人员等非学生身份。

    志愿者注册：仅限 CSIG 学生会员，须先在官网志愿者通道（[https://chinavis.org/2026/zh/volunteer](https://chinavis.org/2026/zh/volunteer)）登记审批，取得志愿者资格后方可注册；志愿者仅限早鸟时段注册。

    论文作者注册要求：每篇会议论文至少 1 名作者须选择非学生全程注册，不接受单日注册；会员、非会员均可作为有效作者注册身份。

    ## 注册费用标准（单位：元/人）

    <div class="registration">
      <table>
        <thead>
          <tr>
            <td rowspan="2">注册类型</td>
            <td colspan="2">早鸟注册<br />（截至 6 月 30 日 23:59）</td>
            <td colspan="2">常规注册<br />（7 月 1 日 - 7 月 19 日）</td>
            <td colspan="2">现场注册<br />（7 月 20 日 - 7 月 22 日）</td>
            <td colspan="2">单日注册<br />（参加其中一天）</td>
          </tr>
          <tr>
            <td>会员</td>
            <td>非会员</td>
            <td>会员</td>
            <td>非会员</td>
            <td>会员</td>
            <td>非会员</td>
            <td>会员</td>
            <td>非会员</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>学生注册</td>
            <td>1400 元</td>
            <td>1800 元</td>
            <td>1800 元</td>
            <td>2300 元</td>
            <td>2000 元</td>
            <td>2500 元</td>
            <td>1100 元</td>
            <td>1400 元</td>
          </tr>
          <tr>
            <td>普通注册</td>
            <td>2200 元</td>
            <td>2800 元</td>
            <td>2800 元</td>
            <td>3500 元</td>
            <td>3000 元</td>
            <td>3800 元</td>
            <td>1200 元</td>
            <td>1500 元</td>
          </tr>
          <tr>
            <td>志愿者注册</td>
            <td>700 元</td>
            <td>不开放</td>
            <td>不开放</td>
            <td>不开放</td>
            <td>不开放</td>
            <td>不开放</td>
            <td>不开放</td>
            <td>不开放</td>
          </tr>
        </tbody>
      </table>
    </div>

    ## 团体注册优惠政策

    一次性 10 人及以上可申请团体注册，每人统一减免 100 元。

    团体优惠适用范围：仅限早鸟注册、常规注册，现场注册不享受团体减免。

    办理方式：统一填报团体报名信息表，发送至官方邮箱：chinavis2026_reg@163.com 预约报名。

    团体不分学生/普通、会员/非会员类别，均按统一标准减免；实行统一归集、集中开票。

    团体报名截止时间：6 月 28 日，便于会务提前统筹安排。

    ## 参会注册所含权益

    全程注册：含会议入场、会议资料、论坛与报告等资源。

    ## 退费政策

    会议举行前 30 日以前申请退费，可免手续费；会议举行前 15-30 日（含）申请退费，扣除 30% 手续费；会议举行前 7-15 日（含）申请退费，扣除 50% 手续费；会议举行前 7 日（含）内申请退费或未参加会议不予退款。

    退费申请审核通过后，开具的电子发票将作废，请勿使用。退费将在会后开始办理，手续费开会务费发票。

    ## 注意事项

    1. 会议注册费电子发票统一发送到注册人邮箱，如需纸质发票可在会议现场领取。
    2. 有关于注册的任何问题请发邮件至 chinavis2026_reg@163.com 咨询。
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};


export const en = {
  PageTitle: "Registration - ChinaVis 2026",
  Title: "Conference Registration",
  Content: marked.parse(
    `
    ## Registration QR Code and Link

    <img src="{{ qrcodeImage }}" alt="Registration QR Code" style="width: 200px; height: 200px; display: block; margin: 0 auto;" />
    <p style="text-align: center; text-indent: 0; margin-top: 0">Scan QR Code to Register</p>

    **Conference Registration Portal:** [ChinaVis 2026 Conference Registration](https://meeting.csig.org.cn/exh/default2/baoming?fair_id=395&role_id=22)
    
    **Conference Notice Download:** <a href="/2026/registration/announcement.pdf" target="_blank">Download</a>

    ## Registration Methods

    QR code registration: Scan the official conference registration QR code to enter the registration system.

    Website registration: Visit the designated registration portal on the official ChinaVis 2026 conference website to complete the registration form and payment online.

    On-site registration: Register on site at the designated conference check-in venue from July 20 to July 22.

    Note: The official registration URL and QR code will be released simultaneously on the conference website, the CSIG official WeChat account, and the official conference notice.

    ## Registration Timeline

    Early-bird registration: From now until June 30, 23:59. This is the most favorable rate and is recommended.

    Regular registration: July 1 to July 19.

    On-site registration: July 20 to July 22. This is the highest rate and is not recommended.

    ## Registration Categories

    Member: Refers specifically to official members of the China Society of Image and Graphics (CSIG). Non-members are advised to apply for membership in advance, select the Visualization and Visual Analytics Technical Committee, choose recommendation by a committee member, and register at the member rate after obtaining a membership number.

    Student Registration: Full-time undergraduate and graduate students. Student status verification is required.

    Regular Registration: Non-student participants, including faculty members, researchers, and industry participants.

    Volunteer Registration: Open only to CSIG student members. Volunteers must first register for approval through the official volunteer portal ([https://chinavis.org/2026/en/volunteer](https://chinavis.org/2026/en/volunteer)), obtain volunteer qualification, and then complete conference registration. Volunteer registration is available only during the early-bird period.

    Paper Author Registration Requirement: Each conference paper must have at least one author registered for full non-student registration. Single-day registration is not accepted for this requirement. Both members and non-members may serve as valid author registrants.

    ## Registration Fees (Unit: RMB/person)

    <div class="registration">
      <table>
        <thead>
          <tr>
            <td rowspan="2">Registration Type</td>
            <td colspan="2">Early-bird Registration<br />(Until June 30, 23:59)</td>
            <td colspan="2">Regular Registration<br />(July 1 - July 19)</td>
            <td colspan="2">On-site Registration<br />(July 20 - July 22)</td>
            <td colspan="2">Single-day Registration<br />(Attend one day only)</td>
          </tr>
          <tr>
            <td>Member</td>
            <td>Non-member</td>
            <td>Member</td>
            <td>Non-member</td>
            <td>Member</td>
            <td>Non-member</td>
            <td>Member</td>
            <td>Non-member</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Student Registration</td>
            <td>RMB 1400</td>
            <td>RMB 1800</td>
            <td>RMB 1800</td>
            <td>RMB 2300</td>
            <td>RMB 2000</td>
            <td>RMB 2500</td>
            <td>RMB 1100</td>
            <td>RMB 1400</td>
          </tr>
          <tr>
            <td>Regular Registration</td>
            <td>RMB 2200</td>
            <td>RMB 2800</td>
            <td>RMB 2800</td>
            <td>RMB 3500</td>
            <td>RMB 3000</td>
            <td>RMB 3800</td>
            <td>RMB 1200</td>
            <td>RMB 1500</td>
          </tr>
          <tr>
            <td>Volunteer Registration</td>
            <td>RMB 700</td>
            <td>Not available</td>
            <td>Not available</td>
            <td>Not available</td>
            <td>Not available</td>
            <td>Not available</td>
            <td>Not available</td>
            <td>Not available</td>
          </tr>
        </tbody>
      </table>
    </div>

    ## Group Registration Discount Policy

    Group registration is available for one-time registrations of 10 or more participants, with a uniform discount of RMB 100 per person.

    The group discount applies only to early-bird registration and regular registration. It does not apply to on-site registration.

    Application method: Complete the group registration information form and send it to the official email address chinavis2026_reg@163.com for reservation.

    The group discount applies uniformly regardless of student/regular or member/non-member category. Group registrations will be consolidated and invoiced centrally.

    Group registration deadline: June 28, to facilitate conference planning and coordination.

    ## Registration Benefits

    Full registration includes conference admission, conference materials, forums, talks, and related conference resources.

    ## Refund Policy

    Refund applications submitted 30 days or more before the conference are free of handling fees; applications submitted 15-30 days before the conference, inclusive, will be charged a 30% handling fee; applications submitted 7-15 days before the conference, inclusive, will be charged a 50% handling fee; applications submitted within 7 days before the conference, inclusive, or non-attendance will not be refunded.

    After refund applications are approved, the issued electronic invoice will be voided and should not be used. Refunds will be processed after the conference, and handling fees will be invoiced as conference service fees.

    ## Important Notes

    1. Electronic invoices for conference registration fees will be sent to the registrant's email address. Paper invoices can be collected at the conference venue if needed.
    2. For any questions regarding registration, please email chinavis2026_reg@163.com.
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};
