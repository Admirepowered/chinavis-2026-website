import PhotoLST from "~/assets/keynote/lst.avif?inline";
import PhotoFJ from "~/assets/keynote/fj.avif?inline";

export interface KeynoteTalk {
  /** 报告人姓名 */
  speaker: string;
  /** 报告题目 */
  title: string;
  /** 报告时间，暂未确定可留空字符串 */
  time?: string;
  /** 报告地点 */
  location?: string;
  /** 主持人 */
  host?: string;
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
    location: string;
    host: string;
    abstract: string;
    bio: string;
  };
  talks: KeynoteTalk[];
}

const zh: KeynoteDict = {
  pageTitle: "主旨报告",
  labels: {
    speaker: "报告人",
    title: "题目",
    time: "时间",
    location: "地点",
    host: "主持人",
    abstract: "摘要",
    bio: "个人简介",
  },
  talks: [
    {
      speaker: "李树涛",
      title: "多模图像融合感知",
      time: "2026.7.20上午 9:30-10:15",
      location: "贵州厅",
      host: "王长波 华东师范大学",
      photo: PhotoLST,
      abstract:
        "多模图像智能融合感知旨在协同不同平台、不同传感器的图像信息，实现对物理世界更全面、更精准、更可靠的感知，在军事侦察、资源调查等国家关键战略领域具有重大应用需求，是世界大国科技竞争的制高点。本报告将介绍多模图像智能融合感知技术的基本原理、典型应用以及前沿挑战难题；系统阐述多模图像稀疏表示理论、时空谱智能高分融合成像方法以及多模图像智能融合识别技术等，以及相关成果在资源调查、环境保护、灾害监测等领域的应用情况，并展望了未来研究方向和发展趋势。",
      bio:
        "李树涛，中国科学院院士，教授、博士生导师，图像信息融合领域专家；现任长安大学校长、中国图像图形学会第九届副理事长。入选“长江学者”特聘教授、“高层次人才特殊支持计划”领军人才，IEEE 会士、中国图像图形学会会士。获国家自然科学二等奖 2 项、国家科学技术进步二等奖 2 项、全国创新争先奖、吴文俊人工智能杰出贡献奖、IEEE 地球科学与遥感协会（GRSS）大卫·兰德格里伯奖（全球每年 1 人）和 IEEE GRSS 最高影响力论文奖（全球每年 1 篇）等。担任 Information Fusion、IEEE Transactions on Geoscience and Remote Sensing（IEEE TGRS）、《中国图象图形学报》等期刊编委，获国家级教学成果二等奖、IEEE GRSS 教育奖等。\n",
    },
    {
      speaker: "费俊",
      title: "混合智能——数字艺术语境下的人机共创",
      time: "2026.7.22上午 9:00-10:00",
      location: "贵州厅",
      host: "张加万 天津大学",
      photo: PhotoFJ,
      abstract:
        "数字艺术中智能媒介的涌现模糊了创作者的边界。人工智能不同于传统工具，在新物质主义的启示下，人工智能科技可以被视为结合了多种意向性的客体，在与人类有效的合作模式下，有着涌现更高维意向性的潜力。讲者将“混合智能”概括为新主体的存在形式，并主张建立合作与对抗共存的动态关系。混合智能不仅重塑艺术创作范式，更指向未来人机关系的认知重构——在技术赋权下，艺术将成为探索智能边界、平衡工具理性与人文精神的关键场域。",
      bio:
        "费俊，中央美术学院设计学院艺术与科技方向教授、博士生导师，某集体 ART+TECH 创始人、创意总监，中国美术家协会数字艺术艺委会秘书长，AI 艺术创新联盟（AIAIA）轮值主席。\n" +
        "\n" +
        "1992 年毕业于中央美术学院版画专业并获得学士学位，2005 年毕业于美国阿尔弗雷德大学艺术与设计学院电子综合艺术专业并获得硕士学位。曾任 2023 年中央广播电视总台春节联欢晚会视觉总监、中央美术学院设计学院数码媒体工作室主任，并担任北京媒体艺术双年展、北京艺术与科技双年展联合策展人。\n" +
        "\n" +
        "他以艺术家、设计师和教育者的多重身份从事艺术与科技的研究、教育与实践。其艺术实践主要关注由虚拟场域与实体场域共同构建的混合场域叙事。艺术及设计作品曾在第 58 届威尼斯双年展中国馆等国内外展览和艺术节中展出，并获得亚洲艺术奖、德国 iF 设计奖、红点设计奖、德国设计奖特别奖和亚洲最具影响力设计大奖等荣誉。\n",
    },
  ],
};

const en: KeynoteDict = {
  pageTitle: "Keynote Speakers",
  labels: {
    speaker: "Speaker",
    title: "Title",
    time: "Time",
    location: "Location",
    host: "Host",
    abstract: "Abstract",
    bio: "Biography",
  },
  talks: [
    {
      speaker: "Shutao Li",
      title: "Multi-modal Image Fusion and Perception",
      time: "July 20, 2026, 9:30-10:15 AM",
      location: "Guizhou Hall",
      host: "Changbo Wang, East China Normal University",
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
    {
      speaker: "Jun Fei",
      title: "Hybrid Intelligence: Human–Machine Co-creation in the Context of Digital Art",
      time: "July 22, 2026, 9:00-10:00 AM",
      location: "Guizhou Hall",
      host: "Jiawan Zhang, Tianjin University",
      photo: PhotoFJ,
      abstract:
        "The emergence of intelligent media in digital art has blurred the boundaries of authorship. Unlike traditional tools, artificial intelligence, viewed through the lens of new materialism, can be understood as an entity integrating multiple intentionalities. Through effective collaboration with humans, it has the potential to give rise to higher-dimensional forms of intentionality. The speaker conceptualizes “hybrid intelligence” as a form of existence for new subjects and advocates a dynamic relationship in which collaboration and confrontation coexist. Hybrid intelligence not only reshapes the paradigm of artistic creation but also points toward a cognitive reconstruction of future human–machine relationships. Empowered by technology, art will become a crucial field for exploring the boundaries of intelligence and balancing instrumental rationality with the humanistic spirit.",
      bio:
        "Jun Fei is a professor and doctoral supervisor in the Art and Technology Program at the School of Design, Central Academy of Fine Arts (CAFA). He is the Founder and Creative Director of MOUJITI ART+TECH, Secretary-General of the Digital Art Committee of the China Artists Association, and Rotating Chairman of the AI Art Innovation Alliance (AIAIA).\n" +
        "\n" +
        "He received his bachelor’s degree from the Printmaking Department of the Central Academy of Fine Arts in 1992 and his MFA in Electronic Integrated Art from the School of Art and Design at Alfred University in the United States in 2005. He previously served as Visual Director of the 2023 CCTV Spring Festival Gala and Director of the Digital Media Studio at the School of Design, Central Academy of Fine Arts. He has also served as Co-curator of the Beijing Media Art Biennale and the Beijing Art and Technology Biennale.\n" +
        "\n" +
        "Working across the roles of artist, designer, and educator, Fei is dedicated to the research, education, and practice of art and technology. His artistic practice explores narratives within hybrid fields jointly constructed by virtual and physical spaces. His art and design works have been presented at exhibitions, museums, and festivals in China and internationally, including the China Pavilion at the 58th Venice Biennale. His honors include the Asian Art Award, the iF Design Award, the Red Dot Design Award, a Special Mention from the German Design Awards, and the Design for Asia Award.\n",
    },
  ],
};

export const keynoteDict: Record<"zh" | "en", KeynoteDict> = {zh, en};

export default keynoteDict;
