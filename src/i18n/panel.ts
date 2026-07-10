import shanguihua from "~/assets/panel/shanguihua.avif";
import liuligang from "~/assets/panel/liuligang.avif";
import cuichenzhou from "~/assets/panel/cuichenzhou.avif";
import dongjunyu from "~/assets/panel/dongjunyu.avif";
import zoushiyang from "~/assets/panel/zoushiyang.avif";
import panjunting from "~/assets/panel/panjunting.avif";
import zhaoguohui from "~/assets/panel/zhaoguohui.avif";
// 圆桌论坛 2
import chensiming from "~/assets/panel/chensiming.avif";
import taojun from "~/assets/panel/taojun.avif";
import longjuanjuan from "~/assets/panel/longjuanjuan.avif";
import wangyong from "~/assets/panel/wangyong.avif";
import liule from "~/assets/panel/liule.avif";
import dengzikun from "~/assets/panel/dengzikun.avif";

export interface Localized {
  zh: string;
  en: string;
}

export interface PanelPerson {
  /** 姓名 */
  name: string;
  /** 单位 / 职称 */
  affiliation: string;
  /** 个人简介（原始语言，支持 Markdown） */
  bio: string;
  /** 头像：从 ~/assets/panel 导入的资源 URL（打包后由 Vite 解析） */
  photo: string;
}

export interface Panel {
  id: string;
  title: Localized;
  time: Localized;
  location: Localized;
  intro: Localized;
  host: PanelPerson;
  guests: PanelPerson[];
}

export const panelLabels: Record<"zh" | "en", {
  time: string; location: string; intro: string; host: string; guests: string; pageTitle: string;
}> = {
  "zh": {
    "time": "时间",
    "location": "地点",
    "intro": "论坛简介",
    "host": "主持人",
    "guests": "特邀嘉宾",
    "pageTitle": "圆桌论坛"
  },
  "en": {
    "time": "Time",
    "location": "Venue",
    "intro": "Overview",
    "host": "Moderator",
    "guests": "Panelists",
    "pageTitle": "Panels"
  }
};

export const panels: Panel[] = [
  {
    "id": "panel1",
    "title": {
      "zh": "圆桌论坛 1：智能时代的可视化征程",
      "en": "Panel 1: The Journey of Visualization in the Intelligent Era"
    },
    "time": {
      "zh": "2026 年 7 月 20 日 10:30 - 11:15",
      "en": "10:30 - 11:15, July 20, 2026"
    },
    "location": {
      "zh": "贵州厅",
      "en": "Guizhou Hall"
    },
    "intro": {
      "zh": "本论坛汇聚多学科科学家，围绕可视化在各领域的需求与挑战展开对话。从天体物理到海洋生态，从高能物理到农业可持续，从几何建模到遥感大数据——这些领域虽迥然不同，却共同面临海量、高维、多源数据的分析难题，也共同依赖可视化作为连接数据与认知的关键桥梁。论坛聚焦各领域可视化需求、现有工具痛点及未来能力愿景，旨在为可视化研究者与领域科学家搭建跨界交流平台，促进双向理解与协同创新。",
      "en": "This panel brings together scientists from multiple disciplines to discuss the needs and challenges of visualization across diverse fields. From astrophysics to marine ecology, from high-energy physics to sustainable agriculture, from geometric modeling to remote-sensing big data—these fields differ greatly, yet all confront the challenge of analyzing massive, high-dimensional, multi-source data, and all rely on visualization as a crucial bridge between data and cognition. Focusing on each field's visualization needs, the pain points of current tools, and a vision for future capabilities, the panel aims to build a cross-disciplinary platform for visualization researchers and domain scientists, fostering mutual understanding and collaborative innovation."
    },
    "host": {
      "name": "单桂华",
      "affiliation": "研究员，中国科学院计算机网络信息中心",
      "bio": "单桂华，中国科学院计算机网络信息中心研究员，博士生导师，先进交互部主任，主要研究方向大数据分析、可视化与智能交互等，近年承担国家重点研发计划课题、国家重大科技基础设施项目、基础加强课题、中科院重点部署和院长基金项目等，曾获部级科技进步奖一等奖。主持研发 GPVis 可视化框架软件，支撑国家/地方重大工程建设，如国家重大科技基础设施-地球系统数值模拟装置、上海天文馆（全球最大天文馆）-天文数字实验室、中科院先导 A 地球大数据科学工程等。",
      "photo": shanguihua
    },
    "guests": [
      // {
      //   "name": "刘利刚",
      //   "affiliation": "中国科学技术大学教授，国家杰青",
      //   "bio": "刘利刚，中国科学技术大学教授，博士生导师，从事计算机图形学、三维视觉及 CAD 方向研究。曾获国家自然基金委“杰出青年”项目资助。曾获中国计算机图形学杰出奖，Siggraph Asia 时间检验奖、陆增镛 CAD&CG 高科技奖一等奖等奖项。任 ACM TOG、CAGD 等国际期刊编委、中国工业与应用数学学会几何设计与计算专业委员会主任、国际几何建模与处理协会指导委员会委员、亚洲图形学协会副主席。",
      //   "photo": liuligang
      // },
      {
        "name": "崔辰州",
        "affiliation": "研究员，中国科学院国家天文台",
        "bio": "崔辰州，中国科学院国家天文台研究员，博士生导师，国家天文科学数据中心常务副主任，中国虚拟天文台研究计划负责人，中国天文学会信息化工作委员会主任，曾任国际天文学联合会（IAU）数据与文献委员会主席、国际虚拟天文台联盟主席。主要研究方向为天文信息学、虚拟天文台、人工智能、云计算、大数据、数据驱动的科普教育。",
        "photo": cuichenzhou
      },
      {
        "name": "董军宇",
        "affiliation": "教授，中国海洋大学",
        "bio": "董军宇，中国海洋大学信息科学与工程学部部长，教授、博士生导师，海洋动力-物理环境与智能感知全国重点实验室副主任。入选国家高层次人才计划科技创新领军人才，获聘英国 Leverhulme 基金会客座教授、国际计算机学会（ACM）青岛分会主席，入选全球前 2% 顶尖科学家、计算机科学领域最佳科学家，是国际期刊 Intelligent Marine Technology and Systems 创始主编。主持研发了“寒冰”北极海冰大模型并面向全球公开发布，研发的高分辨率水下光学三维成像模组已成功实现产业化，在南水北调工程、港口码头、海上风电、核电站及珊瑚生态监测等领域广泛应用。",
        "photo": dongjunyu
      },
      {
        "name": "邹士阳",
        "affiliation": "研究员，北京应用物理与计算数学研究所（九所-激光物理）",
        "bio": "邹士阳，北京应用物理与计算数学研究所研究员，现任国家重大科技专项副总设计师。长期从事惯性约束聚变与高能量密度物理研究，提出多角度辐射流测量研究内爆驱动不对称性的新方法，建立相关理论框架，并提出衡量聚变点火能的新判据。曾策划并与团队完成神光系列装置上黑腔、内爆和激光等离子体不稳定性等千余发实验，推动我国激光聚变研究阶段目标实现。在 Nature Physics、Physical Review Letters、Nuclear Fusion 等期刊发表论文 100 余篇，多次受邀在 IFSA 等会议作报告，并兼任全国计算物理学会常委理事、《计算物理》副主编等职。",
        "photo": zoushiyang
      },
      {
        "name": "潘君廷",
        "affiliation": "研究员，中国农业科学院农业资源与农业区划研究所",
        "bio": "潘君廷，中国农业科学院农业资源与农业区划研究所研究员，博士生导师，主要从事农业废弃物生物转化研究，研究兴趣主要集中于农业废弃物厌氧消化提质增效、好氧堆肥快速腐殖化、生物基高值材料制备应用和生物能源高效利用等领域。主持国家科技重大专项、国家自然科学基金等项目 10 余项，以第一或通讯作者在 Trends in Biotechnology、Renewable & Sustainable Energy Reviews 等领域知名期刊发表论文 50 余篇，第一完成人授权国内外发明专利 10 余件。",
        "photo": panjunting
      },
      {
        "name": "赵国辉",
        "affiliation": "高级工程师，中国科学院西北生态环境资源研究院",
        "bio": "赵国辉，中国科学院西北生态环境资源研究院高级工程师，主要从事时空大数据关键技术研发工作，建立了地学大数据制备生产的方法体系，在数据融合计算与自动化生产制备方面取得系统性成果，满足了时空耦合模拟、大数据计算分析的动态需求，主持完成国家、省部级等研究课题 10 余项，授权国内外发明专利 9 项，开发软件 30 余套，发表学术论文 20 余篇。",
        "photo": zhaoguohui
      }
    ]
  },
  {
    "id": "panel2",
    "title": {
      "zh": "圆桌论坛 2：青年学者在智能时代可视化发展中的机遇与挑战",
      "en": "Panel 2: Opportunities and Challenges for Young Scholars in Visualization in the Intelligent Era"
    },
    "time": {
      "zh": "2026 年 7 月 22 日 10:10 - 11:00",
      "en": "10:10 - 11:00, July 22, 2026"
    },
    "location": {
      "zh": "贵州厅",
      "en": "Guizhou Hall"
    },
    "intro": {
      "zh": "大模型与生成式人工智能正深刻重塑可视化研究的问题、方法与评价方式：一方面，自动图表生成、智能分析 Agent 等技术引发了“可视化研究向何处去”的追问；另一方面，AI4Science、人机协同分析、大模型驱动的可视分析等新方向，也为青年学者打开了前所未有的研究空间。机遇与焦虑并存，正是这一代研究者的真实处境。本论坛邀请活跃在科研一线的青年学者，围绕研究选题与定位、能力储备、跨学科合作、学术生涯规划及产学研路径等话题展开对话，分享各自在技术变革中的探索与思考，旨在帮助青年研究者找准定位、把握机遇，共同探讨可视化学科在智能时代的新增长点。",
      "en": "Large models and generative AI are profoundly reshaping the questions, methods, and evaluation of visualization research. On one hand, technologies such as automatic chart generation and intelligent analysis agents raise the question of where visualization research is headed; on the other, new directions—AI4Science, human-AI collaborative analysis, and large-model-driven visual analytics—open unprecedented research space for young scholars. Opportunity and anxiety coexist, which is the real situation of this generation of researchers. This panel invites young scholars active on the research front line to discuss research topic selection and positioning, capability building, interdisciplinary collaboration, academic career planning, and industry-academia-research pathways, sharing their explorations amid technological change, and aiming to help young researchers find their footing, seize opportunities, and jointly explore new growth points for the visualization discipline in the intelligent era."
    },
    "host": {
      "name": "陈思明",
      "affiliation": "青年研究员，复旦大学",
      "bio": "陈思明，复旦大学大数据学院青年研究员，博士生导师，上海市高层次引进人才，复旦大学可视分析与智能决策实验室（FDUVIS）负责人。曾任德国弗劳恩霍夫智能分析和信息系统研究所（Fraunhofer IAIS）研究员与德国波恩大学的博士后研究员，复旦学士（2011）、北大博士（2017）。从事大数据可视化、可视分析与人智协同的研究，主要研究方向包括：大模型驱动的可视分析及故事叙述、主动式数据分析智能体、3D 沉浸式可视化等，应用于智能教育、人文智能、智能电力、舆情分析等方向。共发表国际学术论文 100 余篇，其中在 IEEE VIS、IEEE TVCG、ACM CHI、CSCW 等顶级国际可视化与人智协同会议以及期刊（CCF A）上发表 50 余篇文章，获得各类最佳论文/海报/提名奖十余次（包括 ACM CHI、IEEE PacificVis TVCG 最佳论文提名奖等，获奖率 3-5%），获得 AI2000 国际可视化研究领域 2014-2024 十年最具影响力学者提名奖（全球 100 名），作为第一主编出版《大数据可视化与可视分析》教材。主持国家级项目、省部级项目与企业联合项目十余项。担任 IEEE Computer Graphics & Applications (CG&A) 国际期刊副主编、IEEE PacificVis 论文主席、中国可视化大会论文主席等。",
      "photo": chensiming
    },
    "guests": [
      {
        "name": "陶钧",
        "affiliation": "副教授，中山大学计算机学院 / 国家超级计算广州中心",
        "bio": "陶钧，中山大学计算机学院及国家超级计算广州中心副教授，博士生导师。主要研究方向为大规模科学数据可视化及其在促进科学发现上的应用，尤其是基于深度学习、语义表示、优化方法的科学数据交互式探索分析方法，以及对大规模科学数据的高性能分析方法的研究。在可视化领域顶级会议 IEEE VIS、期刊 TVCG 发表论文 20 余篇。主持国自然、某工程重点课题等国家级项目/子课题 6 项，广东省重点领域研发子课题 1 项，参与各类重点研发多项；获广东省科技进步特等奖 1 项，中国电子学会、测绘学会、地理信息产业协会等国家一级学会科技进步一等奖 3 项。",
        "photo": taojun
      },
      {
        "name": "龙娟娟",
        "affiliation": "副教授，江南大学数字科技与创意设计学院",
        "bio": "龙娟娟，CSIG 中国图象图形学学会可视化与可视分析专委会副秘书长，ChinaVis 中国可视化与可视分析大会艺术项目资深主席，CCF 中国计算机学会人文智能委员会执委。主要从事数据信息可视化、数字媒体艺术、交互设计、视觉设计、AIGC 视觉艺术研究。信息设计作品发表于 Gestalten 出版社出版的 Data Flow；设计和指导作品入选 2021 IEEE VISAP 艺术展览、IEEE PacificVis Visual Data Storytelling，获中国数据可视化创作大赛金奖、中国可视化与可视分析大会艺术竞赛金奖、中国数据内容大赛最佳大屏交互金奖、大数据应用创新大赛二等奖、紫金奖江苏文化创意设计大赛铜奖、“漫游澳门 X 狮舞丝路”AIGC 短片漫游艺境奖等。",
        "photo": longjuanjuan
      },
      {
        "name": "王勇",
        "affiliation": "助理教授，南洋理工大学",
        "bio": "Dr. Yong Wang is a tenure-track assistant professor at the College of Computing and Data Science, Nanyang Technological University, Singapore. Before that, he was an assistant professor at the School of Computing and Information Systems, Singapore Management University (SMU). He obtained his PhD degree from the Hong Kong University of Science and Technology. His research interests include data visualization, human-AI collaboration and human-computer interaction, with a particular focus on AI-powered data visualization and visual analytics for FinTech, quantum computing and education. He was recognized as the AI 2000 Most Influential Scholar Honorable Mention in Visualization in 2024 and 2025. He won the IEEE VGTC Significant New Researcher Award in 2025. His work has been published in premier venues of data visualization, HCI and data science (e.g., IEEE VIS, IEEE TVCG, ACM CHI, EuroVis, PacificVis and KDD), and has received multiple best paper and honorable mention awards at the top conferences including IEEE VIS, ACM CHI, ACM IUI.",
        "photo": wangyong
      },
      {
        "name": "刘乐",
        "affiliation": "副教授，西北工业大学",
        "bio": "刘乐，西北工业大学副教授，空天地海一体化大数据应用技术国家工程实验室可视互动研究方向负责人。入选陕西省青年人才项目、陕西省高校青年创新团队。刘乐获美国克莱姆森大学博士学位，曾先后在美国德州农工大学、迈阿密大学及内布拉斯加大学林肯分校从事访问学者与博士后研究工作。长期开展可视互动、视觉认知与人工智能交叉领域研究，在 IEEE TVCG、IEEE VIS、AAAI、IJCV 等期刊和会议上发表论文 30 余篇，主持国家自然科学基金面上、青年等项目。指导学生获得中国国际大学生创新大赛全国银奖。研究成果应用于智能电网建设、无人集群控制、自然灾害预警、智慧农业等重要领域，团队获国内外创新创业奖项 10 余项。",
        "photo": liule
      },
      {
        "name": "邓紫坤",
        "affiliation": "副教授，华南理工大学软件学院",
        "bio": "邓紫坤，华南理工大学软件学院副教授，博士生导师，大数据与智能机器人教育部重点实验室和亚热带建筑与城市科学全国重点实验室固定研究人员。2023 年于浙江大学 CAD&CG 全国重点实验室取得博士学位，研究兴趣集中在可视化与可视分析、图形学、人工智能、人机交互等，以及相关技术在智慧城市、数字孪生、工业软件等方面的应用。主持或参与国家自然科学基金项目、国家重点研发计划项目、广东省自然科学基金项目等。成果在 IEEE TVCG、CVMJ、IEEE VIS、ACM CHI 等高水平期刊会议发表论文近 20 篇，包括 CVMJ 亮点论文、ESI 热点论文及《计算机辅助设计与图形学学报》封面论文，获 PacificVis 最佳论文荣誉提名、广东省教学成果一等奖、陆增镛 CAD&CG 高科技奖三等奖及凌迪图形学学者奖励，并通过京东科技、阿里巴巴、金山办公落地应用。",
        "photo": dengzikun
      }
    ]
  }
];

export default panels;
