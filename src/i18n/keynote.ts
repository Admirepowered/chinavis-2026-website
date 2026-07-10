import PhotoLST from "~/assets/keynote/lst.avif?inline";

export interface KeynoteTalk {
  /** 报告人姓名 */
  speaker: string;
  /** 报告题目 */
  title: string;
  /** 报告时间，暂未确定可留空字符串 */
  time?: string;
  /** 头像路径（放在 public/ 下，注意 baseURL 为 /2026/） */
  photo?: string;
  /** 摘要，支持 Markdown（会用 marked 渲染） */
  abstract: string;
  /** 个人简介，支持 Markdown */
  bio: string;
}

export interface KeynoteDict {
  /** 页面主标题 */
  pageTitle: string;
  /** 各字段的标签文案 */
  labels: {
    speaker: string;
    title: string;
    time: string;
    abstract: string;
    bio: string;
  };
  talks: KeynoteTalk[];
}

const zh: KeynoteDict = {
  pageTitle: "特邀报告",
  labels: {
    speaker: "报告人",
    title: "题目",
    time: "时间",
    abstract: "摘要",
    bio: "个人简介",
  },
  talks: [
    {
      speaker: "李树涛",
      title: "多模图像融合感知",
      time: "",
      photo: PhotoLST,
      abstract:
        "多模图像智能融合感知旨在协同不同平台、不同传感器的图像信息，实现对物理世界更全面、更精准、更可靠的感知，在军事侦察、资源调查等国家关键战略领域具有重大应用需求，是世界大国科技竞争的制高点。本报告将介绍多模图像智能融合感知技术的基本原理、典型应用以及前沿挑战难题；系统阐述多模图像稀疏表示理论、时空谱智能高分融合成像方法以及多模图像智能融合识别技术等，以及相关成果在资源调查、环境保护、灾害监测等领域的应用情况，并展望了未来研究方向和发展趋势。",
      bio:
        "李树涛，中国科学院院士，教授、博士生导师，图像信息融合领域专家；现任长安大学校长、中国图像图形学会第九届副理事长。入选“长江学者”特聘教授、“高层次人才特殊支持计划”领军人才，IEEE 会士、中国图像图形学会会士。获国家自然科学二等奖 2 项、国家科学技术进步二等奖 2 项、全国创新争先奖、吴文俊人工智能杰出贡献奖、IEEE 地球科学与遥感协会（GRSS）大卫·兰德格里伯奖（全球每年 1 人）和 IEEE GRSS 最高影响力论文奖（全球每年 1 篇）等。担任 Information Fusion、IEEE Transactions on Geoscience and Remote Sensing（IEEE TGRS）、《中国图象图形学报》等期刊编委，获国家级教学成果二等奖、IEEE GRSS 教育奖等。\n",
    },
  ],
};

const en: KeynoteDict = {
  pageTitle: "Keynote Speakers",
  labels: {
    speaker: "Speaker",
    title: "Title",
    time: "Time",
    abstract: "Abstract",
    bio: "Biography",
  },
  talks: [
    {
      speaker: "Shutao Li",
      title: "Multi-modal Image Fusion and Perception",
      time: "",
      photo: PhotoLST,
      abstract:
        "Intelligent multi-modal image fusion and perception aims to collaboratively integrate image information from different platforms and sensors, achieving a more comprehensive, accurate, and reliable perception of the physical world. It has significant application demand in national strategic fields such as military reconnaissance and resource surveying, and represents a commanding height in the technological competition among major powers. This talk introduces the basic principles, typical applications, and frontier challenges of intelligent multi-modal image fusion and perception. It systematically presents the theory of multi-modal image sparse representation, spatial-temporal-spectral intelligent high-resolution fusion imaging methods, and intelligent multi-modal image fusion recognition techniques, together with their applications in resource surveying, environmental protection, disaster monitoring, and other fields, and offers an outlook on future research directions and development trends.",
      bio:
        "Shutao Li is an Academician of the Chinese Academy of Sciences, a professor and doctoral supervisor, and a leading expert in image information fusion. He currently serves as President of Chang’an University and Vice President of the Ninth Council of the China Society of Image and Graphics (CSIG). He has been selected as a Changjiang Scholar Distinguished Professor and a Leading Talent under the National Special Support Program for High-Level Talents. He is also a Fellow of the IEEE and a Fellow of the China Society of Image and Graphics.\n" +
        "\n" +
        "Professor Li has received two Second Prizes of the State Natural Science Award, two Second Prizes of the State Scientific and Technological Progress Award, the National Innovation Excellence Award, the Wu Wenjun Outstanding Contribution Award for Artificial Intelligence, the IEEE Geoscience and Remote Sensing Society (GRSS) David Landgrebe Award—presented annually to one recipient worldwide—and the IEEE GRSS Highest Impact Paper Award—presented annually to one paper worldwide, among other honors.\n" +
        "\n" +
        "He serves on the editorial boards of *Information Fusion*, *IEEE Transactions on Geoscience and Remote Sensing* (*IEEE TGRS*), and the *Journal of Image and Graphics*. His honors in education include the Second Prize of the National Teaching Achievement Award and the IEEE GRSS Education Award.\n",
    },
  ],
};

export const keynoteDict: Record<"zh" | "en", KeynoteDict> = {zh, en};

export default keynoteDict;
