import PhotoLXY from "~/assets/course/lxy.avif";
import PhotoTJ from "~/assets/course/tj.avif";
import PhotoHZL from "~/assets/course/hzl.avif";

export const zh = {
  PageTitle: "课程 - ChinaVis 2026",
  Title: "课程信息",
  Schedule: "课程安排",
  Date: "日期：",
  Location: "地点：",
  Description: "课程描述",
  Speakers: "课程讲师",
};

export const en = {
  PageTitle: "Course - ChinaVis 2026",
  Title: "Course Information",
  Schedule: "Course Schedule",
  Date: "Date: ",
  Location: "Location: ",
  Description: "Description",
  Speakers: "Course Speakers",
};

export const courses: {
  id: string;
  title: { zh: string; en: string };
  date: { zh: string; en: string };
  location: { zh: string; en: string };
  description: { zh: string; en: string };
  speakers: {
    name: { zh: string; en: string };
    affiliation: { zh: string; en: string };
    photo: string;
    description: { zh: string; en: string };
  }[];
}[] = [
  {
    id: "decoding-nature-scientific-storytelling",
    title: {
      zh: "解码自然之美：用科学数据讲故事",
      en: "Decoding the Beauty of Nature: Telling Stories with Scientific Data",
    },
    date: {
      zh: "2026 年 7 月 19 日 上午 9:00 - 12:00",
      en: "July 19, 2026, 9:00 AM - 12:00 PM",
    },
    location: {
      zh: "贵州省贵阳市 贵州饭店 第四会议室",
      en: "Meeting Room 4, Guizhou Hotel, Guiyang, Guizhou",
    },
    description: {
      zh: "<p>科学可视化所处理的数据往往抽象、复杂、庞大，却承载着揭示自然规律的重要使命——从洋流运动到气候演变，从地理形态到生物结构，这些数据背后隐藏着宏大的自然之美。本次课程将探索如何将这些有趣的科学数据转化为清晰、美观、激发情感共鸣的数据叙事，帮助学员体验一个可视化设计的完整流程、助力科学的普及与传播。</p><p>本课程包含内容讲授、分组讨论与成果展示三个环节。在内容讲授环节，我们将介绍科学可视化的基本原理、编码策略及常用技术，以及叙事可视化的前沿进展，如叙事结构、视觉表达、修辞技巧等，帮助学员理解“讲好科学故事”的内在逻辑与技巧。在分组讨论环节，我们将结合近期热点（如霍尔木兹海峡争端、北极冰盖融化），提供科学数据集，学员们分组对数据、分析任务和科学问题进行头脑风暴，体验完整的可视化设计流程。在成果展示环节，学员们将汇报并分享自己的作品，探讨创作背后的心得体会。</p>",
      en: '<p>The data handled by scientific visualization is often abstract, complex, and massive, yet it carries the important mission of revealing the laws of nature—from ocean currents to climate evolution, from geographical formations to biological structures, a grand beauty of nature lies hidden behind these data. This course explores how to transform such fascinating scientific data into clear, beautiful, and emotionally resonant data narratives, helping participants experience a complete visualization design process and contribute to the popularization and communication of science.</p><p>This course consists of three parts: content lectures, group discussions, and results presentations. In the content lecture section, we will introduce the basic principles of scientific visualization, encoding strategies, and common techniques, as well as the frontier developments in narrative visualization, such as narrative structure, visual expression, and rhetorical techniques, helping participants understand the inherent logic and skills of "telling a good science story". In the group discussion section, drawing on recent hot topics (such as the Strait of Hormuz dispute and the melting of the Arctic ice cap), we will provide scientific datasets, and participants will brainstorm in groups about the data, analysis tasks, and scientific questions, experiencing the complete visualization design process. In the results presentation section, participants will report and share their own works, and discuss the insights gained behind their creations.</p>',
    },
    speakers: [
      {
        name: {
          zh: "蓝星宇",
          en: "Xingyu Lan",
        },
        affiliation: {
          zh: "复旦大学",
          en: "Fudan University",
        },
        photo: PhotoLXY,
        description: {
          zh: '蓝星宇，复旦大学新闻学院青年副研究员、计算与智能传播研究中心成员，上海市晨光学者，主要研究方向为信息可视化、用户体验、情感设计、AI的社会影响和传播等。学术研究曾获IEEE VIS最佳论文奖、最佳论文提名奖、ACM CHI最佳论文提名奖、IEEE PacificVis最佳论文奖、CSIG自然科学奖二等奖等；实践作品曾获中国数据内容大赛金奖、中国数据新闻大赛一等奖、中国数字人文开放数据创新研究大赛一等奖等。个人主页：<a href="https://olivialan.github.io/" target="_blank">https://olivialan.github.io/</a>。',
          en: 'Xingyu Lan is a Young Associate Researcher at the School of Journalism, Fudan University, a member of the Computational and Intelligent Communication Research Center, and a Shanghai Chenguang Scholar. Her main research interests include information visualization, user experience, emotional design, and the social impact and communication of AI. Her academic work has received the IEEE VIS Best Paper Award, Best Paper Honorable Mention, ACM CHI Best Paper Honorable Mention, IEEE PacificVis Best Paper Award, and the Second Prize of the CSIG Natural Science Award, among others. Her practical works have won the Gold Award of the China Data Content Competition, the First Prize of the China Data Journalism Competition, and the First Prize of the China Digital Humanities Open Data Innovation Research Competition, among others. For more information, please visit her personal homepage: <a href="https://olivialan.github.io/" target="_blank">https://olivialan.github.io/</a>.',
        },
      },
      {
        name: {
          zh: "陶钧",
          en: "Jun Tao",
        },
        affiliation: {
          zh: "中山大学",
          en: "Sun Yat-sen University",
        },
        photo: PhotoTJ,
        description: {
          zh: '陶钧，中山大学计算机学院及国家超级计算广州中心副教授，博士生导师。于2015年获得密歇根理工大学计算机科学专业博士学位，2015至2018年于圣母大学计算机科学与工程系任博士后研究员。其主要研究方向主要包括对大规模科学模拟数据的可视化，尤其是深度学习，信息论，优化方法，和交互探索方法在流场可视化方面的应用；以及对大规模科学数据的高性能分析方法的研究。个人主页：<a href="https://juntao.pro/" target="_blank">https://juntao.pro/</a>。',
          en: 'Jun Tao is an Associate Professor at Sun Yat-sen University and a Ph.D. supervisor. He obtained his Ph.D. in Computer Science from Michigan Technological University in 2015 and worked as a postdoctoral researcher in the Department of Computer Science and Engineering at the University of Notre Dame from 2015 to 2018. His main research interests include the visualization of large-scale scientific simulation data, especially the application of deep learning, information theory, optimization methods, and interactive exploration methods in flow field visualization, as well as the research of high-performance analysis methods for large-scale scientific data. His personal homepage is: <a href="https://juntao.pro/" target="_blank">https://juntao.pro/</a>.',
        },
      },
    ],
  },
  {
    id: "botanical-dyeing-traditional-color-atlas",
    title: {
      zh: "草木染章 色树观象——非遗印染技艺与中国传统色彩数据图谱构建",
      en: "Botanical Dyeing and Color-Tree Observation: Intangible Heritage Dyeing Crafts and Building a Data Atlas of Traditional Chinese Colors",
    },
    date: {
      zh: "2026 年 7 月 19 日 上午 9:00 - 12:00",
      en: "July 19, 2026, 9:00 AM - 12:00 PM",
    },
    location: {
      zh: "贵州省贵阳市 贵州饭店 第五会议室",
      en: "Meeting Room 5, Guizhou Hotel, Guiyang, Guizhou",
    },
    description: {
      zh: "<p>艺术可视化简单来说就是把看不见的抽象概念（像声音、数据、情感）变成看得见的艺术作品。本课程将非遗技艺、传统美学与数字数据研究交叉融合，以“观草木之色、传非遗之韵、构数据之谱”为教学主线，指导学员通过非遗印染技艺进行中国色彩数据图谱的手工制作。</p><p>课程分为理论讲授、实操体验、成果研讨三个环节。在理论讲授环节，将深度梳理中国传统草木染、型糊染、蜡染、扎染等经典非遗印染技艺体系，立足“色树观象”的东方传统美学思维，解析古人取色于自然、赋色于器物的造物智慧，理清青、赤、黄、白、黑五正色及间色的文化内涵、色彩体系与应用场景，挖掘传统色彩背后承载的礼制文化、民俗文化与艺术审美内核。在实践操作环节，学员通过沉浸式掌握传统印染手工技艺，自由构建中国传统色色彩树，亲身完成中国传统色彩艺术可视化的全流程创作。在成果研讨环节，学员将逐一展示个人创作作品，分享与讨论创作思路、实操感悟与心得体会。</p>",
      en: '<p>Art visualization, simply put, is about turning invisible abstract concepts (such as sound, data, and emotion) into visible works of art. This course integrates intangible cultural heritage crafts, traditional aesthetics, and digital data research, taking "observing the colors of plants, passing on the charm of intangible heritage, and building a spectrum of data" as its main teaching thread, guiding participants to hand-make a data atlas of Chinese colors through intangible heritage dyeing techniques.</p><p>The course is divided into three parts: theoretical lectures, hands-on experience, and results discussion. In the theoretical lecture section, it thoroughly reviews the classic intangible heritage dyeing systems of traditional China—such as botanical dyeing, paste-resist dyeing, batik, and tie-dyeing—and, grounded in the Eastern traditional aesthetic thinking of "observing phenomena through color trees", analyzes the ancients\' wisdom in drawing colors from nature and applying them to objects, clarifies the cultural connotations, color systems, and application scenarios of the five primary colors (blue/green, red, yellow, white, black) and their intermediate colors, and explores the ritual culture, folk culture, and artistic aesthetics carried behind traditional colors. In the hands-on session, participants will immersively master traditional dyeing handcraft techniques, freely construct a traditional Chinese color tree, and personally complete the entire creative process of visualizing traditional Chinese color art. In the results discussion section, participants will present their individual works one by one and share and discuss their creative ideas, hands-on reflections, and insights.</p>',
    },
    speakers: [
      {
        name: {
          zh: "黄竹兰",
          en: "Zhulan Huang",
        },
        affiliation: {
          zh: "贵阳学院",
          en: "Guiyang University",
        },
        photo: PhotoHZL,
        description: {
          zh: "黄竹兰，贵阳学院美术学院教授，中国工艺美术协会会员，主要研究方向是民族民间手工技艺、非遗传承及创新。“马尾绣进校园”微课入选2024年教育部“礼敬中华优秀传统文化”系列活动；国家一级出版社出版专著1部，参编“十三五”国家重点出版物出版规划项目1项，CSSCI发表专业学术论文5篇、作品2篇，拥有外观设计专利20余项。",
          en: 'Zhulan Huang is a Professor at the School of Fine Arts, Guiyang University, and a member of the China Arts and Crafts Association. Her main research interests are ethnic and folk handicraft techniques and the inheritance and innovation of intangible cultural heritage. Her micro-course "Horsetail Embroidery Enters Campus" was selected for the Ministry of Education\'s 2024 "Honoring China\'s Outstanding Traditional Culture" series of events. She has published one monograph with a first-tier national publisher, co-edited one project under the 13th Five-Year Plan national key publication program, published five professional academic papers and two works in CSSCI journals, and holds more than 20 design patents.',
        },
      },
    ],
  },
];