type LocalizedText = {
  zh: string;
  en: string;
};

export interface Person {
  name: LocalizedText;
  affiliation: LocalizedText;
}

export interface Report {
  title: LocalizedText;
  speaker: Person;
}

interface FaceToFaceEvent {
  time: LocalizedText;
  location: LocalizedText;
  hosts: Person[];
  reports: Report[];
}

export const zh = {
  PageTitle: "校企面对面 - ChinaVis 2026",
  Title: "ChinaVis 2026 校企面对面",
  Information: "具体流程",
  Time: "时间",
  Location: "地点",
  Hosts: "主持人",
  Reports: "具体安排",
  Speaker: "报告人",
  HostSeparator: "；",
};

export const en = {
  PageTitle: "University–Industry Face-to-Face - ChinaVis 2026",
  Title: "ChinaVis 2026 University–Industry Face-to-Face",
  Information: "Procedures",
  Time: "Time",
  Location: "Location",
  Hosts: "Hosts",
  Reports: "Talks",
  Speaker: "Speaker",
  HostSeparator: "; ",
};

export const event: FaceToFaceEvent = {
  time: {
    zh: "2026 年 7 月 21 日 13:30-16:45",
    en: "13:30-16:45, July 21, 2026",
  },
  location: {
    zh: "贵州厅 1+2",
    en: "Guizhou Hall 1+2",
  },
  hosts: [
    {
      name: {
        zh: "李权",
        en: "Quan Li",
      },
      affiliation: {
        zh: "上海科技大学",
        en: "ShanghaiTech University",
      },
    },
    {
      name: {
        zh: "胡海波",
        en: "Haibo Hu",
      },
      affiliation: {
        zh: "重庆大学",
        en: "Chongqing University",
      },
    },
  ],
  reports: [
    {
      title: {
        zh: "被拉平的壁垒与不变的判断：AI 时代可视化的价值重心",
        en: "Flattened Barriers and Enduring Judgment: The Center of Value for Visualization in the AI Era",
      },
      speaker: {
        name: {
          zh: "闻啸",
          en: "Xiao Wen",
        },
        affiliation: {
          zh: "资深技术总监，阿里云 DataV 智能可视化产品线负责人",
          en: "Senior Technical Director and Head of the Alibaba Cloud DataV Intelligent Visualization Product Line",
        },
      },
    },
    {
      title: {
        zh: "基于鸿蒙 A2UI 协议的小艺生成式 UI 解决方案",
        en: "Xiaoyi Generative UI Solution Based on the HarmonyOS A2UI Protocol",
      },
      speaker: {
        name: {
          zh: "丁治宇",
          en: "Zhiyu Ding",
        },
        affiliation: {
          zh: "华为资深技术专家",
          en: "Senior Technical Expert, Huawei",
        },
      },
    },
    {
      title: {
        zh: "面向工业数据智能的可视分析：从语义增强到上下文感知决策",
        en: "Visual Analytics for Industrial Data Intelligence: From Semantic Augmentation to Context-Aware Decision-Making",
      },
      speaker: {
        name: {
          zh: "徐科",
          en: "Ke Xu",
        },
        affiliation: {
          zh: "南京大学智能科学与技术学院准聘副教授",
          en: "Tenure-Track Associate Professor, School of Intelligence Science and Technology, Nanjing University",
        },
      },
    },
    {
      title: {
        zh: "高校数字孪生场景建设实践与落地应用分析",
        en: "Practices and Applied Analysis of Digital-Twin Scenario Development for Universities",
      },
      speaker: {
        name: {
          zh: "孙建国",
          en: "Jianguo Sun",
        },
        affiliation: {
          zh: "广州开得联智能科技联合创始人、数字孪生事业部负责人",
          en: "Co-founder of Guangzhou Kaidelian Intelligent Technology and Head of its Digital Twin Division",
        },
      },
    },
    {
      title: {
        zh: "《信息可视化》产学研融合实践",
        en: "Industry–Academia–Research Integration in Information Visualization",
      },
      speaker: {
        name: {
          zh: "陈晴",
          en: "Qing Chen",
        },
        affiliation: {
          zh: "同济大学设计创意学院副教授",
          en: "Associate Professor, College of Design and Innovation, Tongji University",
        },
      },
    },
    {
      title: {
        zh: "人工智能时代的数字艺术创作与产教融合",
        en: "Digital Art Creation and Industry–Education Integration in the AI Era",
      },
      speaker: {
        name: {
          zh: "蔡蕾",
          en: "Lei Cai",
        },
        affiliation: {
          zh: "北京亦心科技有限公司",
          en: "Beijing Yixin Technology Co., Ltd.",
        },
      },
    },
  ],
};