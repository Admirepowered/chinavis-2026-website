export const zh = {
  PageTitle: "会议接收论文 - ChinaVis 2026",
  Title: "ChinaVis 2026 会议接收论文",
  Session: "Session",
  PaperTitle: "标题",
  Authors: "作者",
  Time: "时间",
  Location: "地点",
  Chair: "主持人",
};

export const en = {
  PageTitle: "Accepted Papers - ChinaVis 2026",
  Title: "ChinaVis 2026 Accepted Papers",
  Session: "Session",
  PaperTitle: "Title",
  Authors: "Authors",
  Time: "Time",
  Location: "Location",
  Chair: "Chair",
};

export interface AcceptedPaper {
  id: number;
  title: string;
  authors: string[];
}

export interface PaperSession {
  no: number;
  title: string;
  time: string;
  location: string;
  chair: string;
  papers: AcceptedPaper[];
}

export const paperSessions: PaperSession[] = [
  {
    no: 1,
    title: "Perception and Evaluation",
    time: "2026年7月20日 16:55–18:25",
    location: "第四会议室",
    chair: "侯伊涵，香港科技大学（广州）",
    papers: [
      {
        id: 1036,
        title: "When Contrast Is Not Enough: An Empirical Study of Dynamic Color Adaptation in FPS Games",
        authors: ["Zehong Ye", "Jingyu Wang", "Xiao Xie", "Lingyun Yu", "Lijie Yao"],
      },
      {
        id: 2557,
        title: "Effects of Model Fidelity and View Layout on Analytic Activities in Digital Twin",
        authors: ["Zhiyao Yang", "Yihan Hou", "Xingjia Hao", "Rongrong Chen", "Hai-Ning Liang", "Wei Zeng"],
      },
      {
        id: 6900,
        title: "Tangible Carbon Blocks: Data Physicalization for Everyday Carbon Emissions",
        authors: ["Jingyu Wang", "Jiahan Zhang", "Yu Liu", "Lingyun Yu", "Lijie Yao"],
      },
      {
        id: 3764,
        title: "Immersive Interface for Human-Swarm Interaction: Advancing Deployment and Swarm-Drone-Task Comprehension",
        authors: ["Le Liu", "Bohan Shen", "Lingyun Yu", "Kaixing Zhao"],
      },
    ],
  },
  {
    no: 2,
    title: "Visualization Authoring",
    time: "2026年7月20日 15:15–16:45",
    location: "第五会议室",
    chair: "曾琼，山东大学",
    papers: [
      {
        id: 7862,
        title: "RAGE-Vis: A Relation-Aware Generative Editing Interface for Natural Language-Based Chart Editing",
        authors: ["Ziyao Kang", "Yiping Sun", "Linxuan Tian", "Henghuan Qu", "Wei Zeng", "Jiazhi Xia"],
      },
      {
        id: 1618,
        title: "EviFlow-Vis: Evidence-Centered LLM-Assisted Text-to-Chart Authoring for Long-Document Reporting",
        authors: ["Zian Zhao", "Wei Zeng"],
      },
      {
        id: 6455,
        title: "FinChronicle: Interactive Generation and Refinement of Perspective-Linked Timelines from Financial Documents",
        authors: ["Bowen Jia", "Qiaoyun Huang", "Xiaoyue Huang", "Tong Lyu", "Xiping Wang", "Yanpeng Hu", "Changbo Wang", "Chenhui Li"],
      },
      {
        id: 7606,
        title: "A Multi-Agent Framework for User-Intent-Aware Semantic Diagram Generation",
        authors: ["Qianhui Li", "Jielin Feng", "Siming Chen"],
      },
      {
        id: 4867,
        title: "LivingSketches: Co-creation Platform for Children’s Visual Storytelling",
        authors: ["Mei Wang", "Lijie Yao", "Yu Liu", "Lingyun Yu"],
      },
    ],
  },
  {
    no: 3,
    title: "AI and Visualization",
    time: "2026年7月20日 13:30–15:00",
    location: "第五会议室",
    chair: "赵宇恒，复旦大学",
    papers: [
      {
        id: 7295,
        title: "RAG-ReconVis: Visual Analytics for Human-Guided Reconstruction of RAG Knowledge-Base Leakage",
        authors: ["Yunchao Wang", "Yingqi Pan", "Wenkang Hao", "Junhao Lan", "Guodao Sun"],
      },
      {
        id: 4208,
        title: "FootprintRAG: Visual Analytics for Evidence Context Refinement in RAG-based Scientific Literature Exploration",
        authors: ["Xingyu Liu", "Yu Dong", "Qizhen Yu", "Shiyu Cheng", "Zhe Wang", "Guan Li", "Guihua Shan", "Dong Tian", "Christy Jie Liang", "Quang Vinh Nguyen"],
      },
      {
        id: 4102,
        title: "LinguaLens: Visual Analytics for Shared-Context Branching Analysis in Stochastic LLM Generation",
        authors: ["Lucheng Cao", "Xinlei Liu", "Qingyang Zhu", "Hongxing Qin", "Chao Liu", "Haibo Hu"],
      },
      {
        id: 5356,
        title: "多元工业时序预测深度模型内部表征的细粒度可视分析",
        authors: ["Xinya Yao", "Ruixiao Liu", "Yingchao Fu", "Zhi Xu", "Wenjing Tian", "Lianen Ji"],
      },
      {
        id: 7594,
        title: "AUG-Scope: Alignment- and Uniformity-Guided Visual Diagnosis for Hybrid Graph Self-Supervised Learning Configurations",
        authors: ["Ying Tang", "Jiawei Tang", "Guodao Sun"],
      },
    ],
  },
  {
    no: 4,
    title: "Graph Visualization",
    time: "2026年7月20日 16:55–18:25",
    location: "第五会议室",
    chair: "宋思程，华东师范大学",
    papers: [
      {
        id: 6243,
        title: "NOVA: Knowledge-Augmented Visual Analysis for Automated Graph Layout Optimization",
        authors: ["Nuo Xu", "Tong Li", "Siyu Mao", "Chenze Li", "Qi Jiang", "Xueqian Zheng", "Yunchao Wang", "Guodao Sun", "Ronghua Liang"],
      },
      {
        id: 7187,
        title: "PrefKG: A Visual Interactive System for Aligning LLM-Based Knowledge Graph Extraction with Human Preferences",
        authors: ["Bin Li", "Yuming Ma", "Bo Meng", "Yu Su", "Dongyang He", "Yuewen Liu"],
      },
      {
        id: 8594,
        title: "CHCVis：多源文化遗产交叉验证交互式可视分析系统",
        authors: ["Haozhong Liu", "Anzhen Li", "Tianqi Wang", "Xiaoyan Gu", "Yixia Zheng", "Huiru Chen", "Huanghuang Deng", "Wei Zhang", "Yu Zhao"],
      },
      {
        id: 6341,
        title: "DiaViz: Systematic Visual Analytics Exploration of Clinical Diabetes Data via Graph-Based Representations",
        authors: ["Yuning Hu", "Jiawei Huang", "Zhentao Zheng", "Xinyuan Fu", "Menglin Feng", "Mimei Xu", "Zhongding Jiang", "Guodao Sun", "Chaoqing Xu"],
      },
    ],
  },
  {
    no: 5,
    title: "Text, Tabular, and Time Series Data",
    time: "2026年7月21日 08:30–10:00",
    location: "贵州厅3",
    chair: "夏旺，嘉兴大学",
    papers: [
      {
        id: 4586,
        title: "Line Chart Reverse Engineering via Differential Rendering",
        authors: ["Boyang Feng", "Jinchao Chen", "Guozheng Li", "Quanbao Yang", "Min Lu", "Xuefeng Li", "Weijiao Zhang", "Zhongkai Wang", "Chi Harold Liu"],
      },
      {
        id: 6306,
        title: "SemLinkLens: Semantic Linking and LLM-Driven Visual Analytics for Tabular Data Insights",
        authors: ["Jinchao Chen", "Guozheng Li", "Quanbao Yang", "Gerile Aodeng", "Yunshan Feng", "Xuefeng Li", "Weijiao Zhang", "Zhongkai Wang", "Chi Harold Liu"],
      },
      {
        id: 3737,
        title: "FloaView: A Visualization System for Stance Analysis of Multiple Answers to a Single Opinion-Oriented Question",
        authors: ["Yue Huang", "Shuai Chen", "Zhaoman Zhong"],
      },
      {
        id: 2028,
        title: "EvoInsight: Evolutionary Intent-Driven Exploratory Data Analysis with Contextual Enhancement",
        authors: ["Zhentao Zheng", "Qi Jiang", "Ziyu Huang", "Xueqian Zheng", "Yunchao Wang", "Jian Liu", "Guodao Sun", "Ronghua Liang"],
      },
      {
        id: 6154,
        title: "LexiVA: An Evidence-Aware Visual Analysis System for Multi-Dimensional Cultural Evolution of Chinese Lexicon",
        authors: ["Guangtao You", "Yingping Yang", "Yumeng Zhang", "Wenwen Li", "Yuxin Lei", "Jiazhou Chen"],
      },
    ],
  },
  {
    no: 6,
    title: "Geospatial Visualization",
    time: "2026年7月21日 08:30–10:00",
    location: "第五会议室",
    chair: "赵锂想，西交利物浦大学",
    papers: [
      {
        id: 6285,
        title: "Visual Analytics for Open-Loop Evaluation of End-to-End Autonomous Driving Models",
        authors: ["Xueyou Zhang", "Yunchao Wang", "Wang Xia", "Yicao Li", "Xueqian Zheng", "Qi Jiang", "Guodao Sun", "Ronghua Liang"],
      },
      {
        id: 9855,
        title: "ActSoon: Intelligent Aircraft Taxiing Scheduling through Integrated Spatio-Temporal Visual Analytics",
        authors: ["Luge Yang", "Guoqiang Wang", "Fengjie Wang", "Yimeng Wang", "Qipeng Wang", "Yong Wang", "Xiaolin Wen", "Min Zhu"],
      },
      {
        id: 2984,
        title: "MapSlides: A Geospatial Data-Driven Multi-Agent Framework for Story Map Slide Generation",
        authors: ["Jie Wang", "Dongliang Guo", "Haozhan Shi", "Tengda Xue"],
      },
      {
        id: 7202,
        title: "TPBSeer: Visual Analysis of Traffic Participant Behaviors at Intersections",
        authors: ["Wei Huang", "Guohong Zheng", "Yong Wang", "Haipeng Zeng"],
      },
    ],
  },
  {
    no: 7,
    title: "Scientific Visualization",
    time: "2026年7月21日 10:15–11:45",
    location: "第五会议室",
    chair: "韩俊，香港科技大学",
    papers: [
      {
        id: 2065,
        title: "面向生态流量调度仿真的动态可视化方法",
        authors: ["Yeheng Jiang", "Chenhui Li", "Changbo Wang"],
      },
      {
        id: 9565,
        title: "GeoVis: Geometry-Enhanced and Multi-View Fused Model for Precise LLM-Driven Aircraft Component Visualization",
        authors: ["Sipeng Deng", "De Xing", "Xiaorong Zhang", "Fang Wang", "Chunyang Su"],
      },
      {
        id: 5837,
        title: "A Direct Visualization Method for High-Order Flow Field Data Based on Virtual Subblocks in Reference Space",
        authors: ["JianHua Dong", "JiMing Lan", "Yang Chao", "Fang Wang", "ZhenXing He"],
      },
      {
        id: 2895,
        title: "MolMind: A Visual Analytics Framework for Bidirectional Semantic Interaction and Narrative Mechanisms",
        authors: ["Yingqi Yao", "Dongliang Guo", "Yujing Bao", "Tengda Xue", "Mengya Lv"],
      },
    ],
  },
  {
    no: 8,
    title: "Visualization Applications",
    time: "2026年7月20日 15:15–16:45",
    location: "第四会议室",
    chair: "李金城，北京师范大学",
    papers: [
      {
        id: 6747,
        title: "面向数字孪生场景的航空发动机剩余使用寿命可解释预测系统",
        authors: ["Xingkun Li", "Yadong Wu", "Hongying Zhang", "Yan Zhu", "Li Zhang", "Zhichao Yang", "Fupan Wang", "Guijuan Wang"],
      },
      {
        id: 1652,
        title: "RegimeFlow: State-aware Visual Analytics for Causal Analysis in Wastewater Treatment Processes",
        authors: ["Binyan Gao", "Qi Jiang", "Kaixing Du", "Haixia Wang", "Jie Lei", "Jian Liu", "Guodao Sun", "Ronghua Liang"],
      },
      {
        id: 5548,
        title: "HearTracker: Visual Analytics for Exploring Speech Encoding and Neural Response Patterns in Hearing Loss",
        authors: ["Yuning Hu", "Wenhai Peng", "Feiyang Gao", "Yangyang Zhou", "Yujun He", "Hairong Jin", "Zhili Zhang", "Wei Zhang", "Chaoqing Xu"],
      },
      {
        id: 5127,
        title: "基于可解释异质图学习的蛋白质组学多维关联可视分析系统",
        authors: ["Jianhao Zhang", "Yaqi Wang", "Wentao Chen", "Qipeng Wang", "Ziyi Deng", "Min Zhu"],
      },
      {
        id: 7729,
        title: "面向成品油管道工况演化的检索增强可视分析方法",
        authors: ["Ruixiao Liu", "Chao Liu", "Hao Zhang", "Meng Shao", "Haochong Li", "Lianen Ji"],
      },
    ],
  },
];