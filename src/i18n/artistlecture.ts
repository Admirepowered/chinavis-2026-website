import type {Speaker} from "~/components/SpeakerInfo";

import PhotoMenShu from "~/assets/artistlecture/ms.avif?inline";
import PhotoZhangRuhe from "~/assets/artistlecture/zrh.avif?inline";
import PhotoXieJiwu from "~/assets/artistlecture/xjw.avif?inline";

type LocalizedText = {
  zh: string;
  en: string;
};

interface ArtistLecture {
  n: number;
  title: LocalizedText;
  location: LocalizedText;
  time: LocalizedText;
  host: {
    name: LocalizedText;
    affiliation: LocalizedText;
  };
  guests: Speaker[];
}

export const zh = {
  PageTitle: "艺术家讲座 - ChinaVis 2026",
  Title: "ChinaVis 2026 艺术家讲座",
  Information: "讲座信息",
  Topic: "主题",
  Time: "时间",
  Location: "地点",
  Host: "主持人",
  GuestLectures: "嘉宾讲座",
};

export const en = {
  PageTitle: "Artist Lectures - ChinaVis 2026",
  Title: "ChinaVis 2026 Artist Lectures",
  Information: "Lecture Information",
  Topic: "Topic",
  Time: "Time",
  Location: "Location",
  Host: "Host",
  GuestLectures: "Guest Lectures",
};

export const lecture: ArtistLecture = {
  n: 6,
  title: {
    zh: "艺术讲座及艺术作品速览",
    en: "Art Lectures and Artwork Showcase",
  },
  location: {
    zh: "第四会议室",
    en: "Meeting Room 4",
  },
  time: {
    zh: "2026 年 7 月 21 日 8:30-10:00",
    en: "8:30-10:00, July 21, 2026",
  },
  host: {
    name: {
      zh: "龙娟娟",
      en: "Juanjuan Long",
    },
    affiliation: {
      zh: "江南大学",
      en: "Jiangnan University",
    },
  },
  guests: [
    {
      name: {
        zh: "门澍",
        en: "Shu Men",
      },
      affiliation: {
        zh: "中国美术学院",
        en: "China Academy of Art",
      },
      talk: {
        zh: "声・器・锡：一件可视化作品背后的非遗转译实验",
        en: "Sound, Tools, and Tin: An Intangible Cultural Heritage Translation Experiment Behind a Visualization Artwork",
      },
      abstract: {
        zh: "本次分享围绕展览交互可视化作品《锡 Tin》，展开以声音交互为核心的永康锡雕非遗活化实践复盘。作品提取传统锡雕全套工具击打声响完成编曲，依据工具声效节奏对应生成独立动态图形，搭建沉浸式空间视听系统。依托实物工具触发交互机制，观众自主操作即可自由组合音画元素，形成随机合奏，实现打锡工艺流程的时空叠合表达。分享将从非遗声音资源数字化转译、感官交互叙事、手工艺当代展陈创新三个维度，剖析数字交互如何重构传统锡雕的观赏逻辑，为传统手工艺活态传承提供新媒体创作实践参考。",
        en: "This presentation reviews the activation of Yongkang tin carving as intangible cultural heritage through <i>Tin</i>, an exhibition-oriented interactive visualization artwork centered on sound interaction. The work samples the striking sounds of a complete set of traditional tin-carving tools and turns them into a musical composition. Independent motion graphics are generated according to the rhythms and acoustic characteristics of the tools, forming an immersive spatial audiovisual system. Physical tools serve as interaction triggers, allowing visitors to freely combine visual and sonic elements through hands-on operation and create improvised ensembles, thereby overlaying different moments and spaces of the tin-smithing process. The presentation examines how digital interaction can reconstruct the viewing logic of traditional tin carving from three perspectives: the digital translation of intangible-cultural-heritage sound resources, sensory interactive storytelling, and innovation in contemporary craft exhibition. It offers a new-media practice reference for the living transmission of traditional crafts.",
      },
      description: {
        zh: "门澍，本科与硕士阶段均就读于中国美术学院视觉传播学院内容谱系工作室，长期深耕系统化视觉创作，创作方向聚焦平面设计、界面交互以及跨媒介数字多媒体设计。依托工作室以内容叙事为核心的研究体系，持续探索静态平面语言与动态数字媒介的融合表达，擅长挖掘信息内核，将抽象概念、文本数据转化为兼具逻辑性与艺术性的完整视觉方案。持续参与国内外专业设计赛事与艺术展览，积累多项行业认可成果：斩获白金创意国际大学生平面设计大赛金奖、铜奖，深圳新锐设计奖、2025 澳门设计大奖、NewOne Awards 视觉传达毕业设计专项奖项；作品成功入围极具含金量的 2025 Tokyo TDC 东京字体设计奖。同时多件作品受邀参展，例如 2025 Design360 年度数字媒体、2026 Design360 年度实验设计，持续在商业设计、实验数字视觉领域双向实践，兼顾艺术表达、用户体验与项目落地性。",
        en: "Shu Men completed both undergraduate and master's studies at the Content Genealogy Studio, School of Visual Communication, China Academy of Art. Men has long focused on systematic visual creation, with work spanning graphic design, interface interaction, and cross-media digital multimedia design. Building on the studio's content-narrative research system, Men continues to explore the integration of static graphic language and dynamic digital media, with particular strength in identifying the core of information and transforming abstract concepts and textual data into coherent visual solutions that combine logic and artistry. Men has participated extensively in professional design competitions and art exhibitions in China and abroad. Recognitions include gold and bronze awards in the Platinum Originality International University Students Graphic Design Competition, the Shenzhen Emerging Design Award, the 2025 Macau Design Award, and a visual-communication graduation-design award at the NewOne Awards. Men was also shortlisted for the 2025 Tokyo TDC Annual Awards. Multiple works have been invited to exhibitions including Design360 Annual Digital Media 2025 and Design360 Annual Experimental Design 2026, reflecting an ongoing practice across commercial design and experimental digital visual work that balances artistic expression, user experience, and practical implementation.",
      },
      photo: PhotoMenShu,
    },
    {
      name: {
        zh: "张儒赫",
        en: "Ruhe Zhang",
      },
      affiliation: {
        zh: "鲁迅美术学院，副教授",
        en: "LuXun Academy of Fine Arts, Associate Professor",
      },
      talk: {
        zh: "生成式人工智能辅助下的中国古籍信息可视化设计",
        en: "Generative-AI-Assisted Information Visualization Design for Chinese Ancient Books",
      },
      abstract: {
        zh: "传统古籍与图像文献的传播方式正逐渐由完整阅读转向碎片化消费，图像局部、人物形象与文化符号成为公众接触地域文化的重要入口。然而，碎片化传播在提升传播效率的同时，也使图像内部的人物、器物、行为与场景等信息被割裂，削弱了用户对画面整体叙事及信息关联的理解。报告以包括贵州地区重要文献在内的中国古籍为研究对象，从信息交互可视化设计视角出发，将文本、图像、声音等视为由人物、器物、行为、场景等多维信息共同构成的艺术可视化系统，提出面向古籍传播的信息交互设计方法。研究综合运用图像分割、语义标注、可视化表达与交互设计等方法，构建图像语义档案及交互式可视化网站平台，帮助用户建立从局部细节到整体画面的认知路径。重点探讨信息交互可视化设计如何通过重构信息内部的数据关联，提升古籍传播的吸引力和理解力，为数字人文背景下文化遗产的数字传播提供新的设计思路与实践路径。",
        en: "The dissemination of traditional Chinese books and pictorial documents is gradually shifting from complete reading toward fragmented consumption. Image details, human figures, and cultural symbols have become important entry points through which the public encounters regional culture. While fragmented communication improves efficiency, it can also separate information about people, objects, actions, and scenes within an image, weakening users' understanding of the overall narrative and the relationships among its elements. Taking Chinese ancient books, including important documents related to Guizhou, as its research objects, this presentation approaches the topic from the perspective of interactive information-visualization design. It treats text, images, and sound as an artistic visualization system composed of multidimensional information about people, objects, actions, and scenes, and proposes an information-interaction design method for the communication of ancient books. By combining image segmentation, semantic annotation, visual representation, and interaction design, the research builds image-semantic archives and an interactive visualization web platform that helps users develop a cognitive path from local details to the complete picture. The presentation focuses on how interactive information visualization can improve the appeal and comprehensibility of ancient-book communication by reconstructing internal data relationships, offering new design ideas and practical approaches for the digital dissemination of cultural heritage in the context of digital humanities.",
      },
      description: {
        zh: "张儒赫，鲁迅美术学院中英数字媒体（数字媒体）艺术学院副教授，硕士生导师，主研信息可视化设计。本、硕分别毕业于中央美术学院、伦敦艺术大学，博士在读，芬兰阿尔托大学访问学者。中国图像图形学学会可视化与可视分析专委会委员，西安平面设计师协会会员，辽宁省美术家协会会员。参与2008年北京奥运会“金镶玉”奖牌设计、北京奥运会开闭幕式舞台和道具设计。作品入选中华人民共和国第十二届运动会吉祥物十佳作品，并参与中华人民共和国第十二届运动会宣传画设计。担任国家艺术基金2025年度传播交流推广项目特邀策展人。获第六届全国数字创意教学技能大赛一等奖、第十二届全国美术作品展览获奖提名、红点奖品牌与传达奖、Hiiibrand Awards字体编排金奖、虎啸奖金奖、金犊奖年度全场大奖等。“十四五”普通高等教育本科/高职国家级规划教材建设，多篇论文发表于中文核心期刊、SCI国际期刊等。",
        en: "Ruhe Zhang is an associate professor and master's supervisor at the Sino-British Digital Media Art School of LuXun Academy of Fine Arts, with a primary research focus on information-visualization design. Zhang received undergraduate and master's degrees from the Central Academy of Fine Arts and University of the Arts London respectively, is currently pursuing a doctorate, and has been a visiting scholar at Aalto University in Finland. Zhang serves on the Visualization and Visual Analytics Technical Committee of the China Society of Image and Graphics, and is a member of the Xi'an Graphic Designers Association and the Liaoning Artists Association. Zhang participated in the design of the 'Gold Inlaid with Jade' medals for the 2008 Beijing Olympic Games, as well as stage and prop design for the opening and closing ceremonies. Zhang's work was selected among the top ten mascot proposals for the 12th National Games of China, and Zhang also participated in the Games' poster design. Zhang served as an invited curator for a 2025 National Arts Fund communication and promotion project. Awards include first prize in the 6th National Digital Creative Teaching Skills Competition, an award nomination at the 12th National Exhibition of Fine Arts, a Red Dot Award: Brands & Communication Design, a gold award for typography at the Hiiibrand Awards, a gold award at the Tiger Roar Awards, and the Grand Prix of the Year at the Young Times Awards. Zhang has contributed to national-level planned textbooks for undergraduate and higher-vocational education during China's 14th Five-Year Plan period, and has published multiple papers in Chinese core journals and international SCI-indexed journals.",
      },
      photo: PhotoZhangRuhe,
    },
    {
      name: {
        zh: "谢继武",
        en: "Jiwu Xie",
      },
      affiliation: {
        zh: "内蒙古师范大学设计学院，副教授",
        en: "School of Design, Inner Mongolia Normal University, Associate Professor",
      },
      talk: {
        zh: "北疆智韵：区域文化从数字到数智的转化与应用转译",
        en: "Smart Rhythms of the Northern Frontier: Transforming and Translating Regional Culture from Digitalization to Digital Intelligence",
      },
      abstract: {
        zh: "该主题聚焦内蒙古区域非遗服饰文化依托生成式人工智能AIGC的数智化实践，重点解决民族地区垂直领域生成图像特征准确性问题。案例通过北疆智韵的数据搜集、模型训练与平台构建，探讨AIGC技术在民族非遗文化保护、传承与创新应用，构建符合民族地区区域数据的AIGC典型性应用模式。以提供精准化、多样化的AIGC服务，构建基于北疆文化特征训练的有自主产权的人工智能平台，服务于北疆文旅文博产业创新、文化艺术教育领域、服装服饰创新、设计创新、动漫影视游戏产业等领域，促进区域的生产力提升与产业发展。",
        en: "This presentation focuses on digital-intelligence practices that use generative artificial intelligence and AIGC to support the intangible cultural heritage of regional dress in Inner Mongolia, with particular attention to improving the accuracy of generated visual characteristics in specialized ethnic-minority domains. Through the data collection, model training, and platform development of the Smart Rhythms of the Northern Frontier project, the case study explores the use of AIGC in the protection, transmission, and innovative application of ethnic intangible cultural heritage, and develops a representative AIGC application model aligned with regional data from ethnic-minority areas. The project aims to provide accurate and diverse AIGC services and to build an independently owned artificial-intelligence platform trained on the cultural characteristics of China's northern frontier. The platform supports innovation in cultural tourism and museums, culture and arts education, apparel and accessories, design, animation, film, television, and games, thereby contributing to regional productivity and industrial development.",
      },
      description: {
        zh: "谢继武，副教授，博士，内蒙古师范大学设计学院艺术与科技系主任、澳大利亚迪肯大学访问学者。兼任内蒙古动漫学会会长，内蒙古人工智能学会数智文旅专委会副主任。近年来聚焦信息可视化与可视分析、人工智能创新应用交叉学科领域方向研究。著有《数智化民族服饰创新》等专著与教材4部；主持教育部协同育人项2项；主持中央引导地方科技发展资金项目、省部级教育规划课题、哲社课题等10余项；作为主要参与人完成国家艺术基金项目2项；中外合作办学研究项目课题1项；发表论文10余篇，指导学生在设计作品在全国高校数字艺术设计大赛、学院奖等各类设计大赛中获奖60余项。",
        en: "Jiwu Xie is an associate professor with a doctorate, head of the Department of Art and Technology at the School of Design, Inner Mongolia Normal University, and a visiting scholar at Deakin University in Australia. Xie also serves as president of the Inner Mongolia Animation Society and deputy director of the Digital-Intelligence Cultural Tourism Committee of the Inner Mongolia Artificial Intelligence Society. In recent years, Xie's interdisciplinary research has focused on information visualization and visual analytics, together with innovative applications of artificial intelligence. Xie has authored four monographs and textbooks, including <i>Innovation in Digitally Intelligent Ethnic Apparel</i>; led two Ministry of Education industry-university collaborative education projects; and directed more than ten projects supported by central funds for local science and technology development, as well as provincial and ministerial education-planning and philosophy-and-social-science programs. Xie has also been a principal participant in two National Arts Fund projects and one research project on Chinese-foreign cooperative education, published more than ten papers, and supervised students whose design works have received more than sixty awards in competitions including the National College Digital Art & Design Awards and the Academy Awards.",
      },
      photo: PhotoXieJiwu,
    },
  ],
};