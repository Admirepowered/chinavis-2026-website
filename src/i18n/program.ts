export interface LocalizedText {
  zh: string;
  en: string;
}

export const zh = {
  PageTitle: "会议议程 - ChinaVis 2026",
  Title: "会议议程",
  Time: "时间",
  Venue: "地点",
  Session: "议程",
};

export const en = {
  PageTitle: "Program - ChinaVis 2026",
  Title: "Program",
  Time: "Time",
  Venue: "Venue",
  Session: "Program",
};

export type ProgramSessionType =
  | "keynote"
  | "panel"
  | "topic"
  | "paper"
  | "course"
  | "challenge"
  | "workshop"
  | "activity"
  | "exhibition"
  | "break";

export interface ProgramSession {
  type: ProgramSessionType;
  title: LocalizedText;
  location?: LocalizedText;
  details?: LocalizedText[];
}

export interface ProgramTimeSlot {
  time: string;
  sessions: ProgramSession[];
}

export interface ProgramDay {
  id: string;
  date: LocalizedText;
  timeslots: ProgramTimeSlot[];
}

export interface ProgramFinalRow {
  date: LocalizedText;
  session: ProgramSession;
}

export const sessionTypeLabels: Record<ProgramSessionType, LocalizedText> = {
  keynote: {zh: "主旨报告", en: "Keynote"},
  panel: {zh: "圆桌论坛", en: "Panel"},
  topic: {zh: "专题", en: "Topic"},
  paper: {zh: "论文", en: "Paper"},
  course: {zh: "课程", en: "Course"},
  challenge: {zh: "竞赛", en: "Challenge"},
  workshop: {zh: "论坛", en: "Forum"},
  activity: {zh: "活动", en: "Activity"},
  exhibition: {zh: "艺术", en: "Art"},
  break: {zh: "休息", en: "Break"},
};

export const program = [
  {
    "id": "2026-07-19",
    "date": {
      "zh": "2026 年 7 月 19 日（星期日）",
      "en": "Sunday, July 19, 2026"
    },
    "timeslots": [
      {
        time: "09:00–21:00",
        sessions: [
          {
            type: "activity",
            title: {
              zh: "会议签到以及现场注册",
              en: "Conference Registration and On-site Check-in",
            },
            location: {
              zh: "贵州省国际会议中心一号门大厅",
              en: "Entrance 1 Lobby, Guizhou International Conference Center",
            },
          },
        ],
      },
      {
        "time": "09:00–12:00",
        "sessions": [
          {
            "type": "workshop",
            "title": {
              "zh": "国际论坛：多模态交互与 AI 驱动的可视化：重塑人机协同的边界",
              "en": "International Forum: Multimodal Interaction and AI-Driven Visualization — Reshaping the Boundaries of Human–AI Collaboration"
            },
            "location": {
              "zh": "新闻发布厅",
              "en": "Press Conference Hall"
            },
            "details": [
              {
                "zh": "主持人：陈晴（同济大学）；阳芷倩（湖北美术学院）",
                "en": "Chairs: Qing Chen (Tongji University); Zhiqian Yang (Hubei Institute of Fine Arts)"
              },
              {
                "zh": "开场致辞：陈为（浙江大学）",
                "en": "Opening Remarks: Wei Chen (Zhejiang University)"
              }
            ]
          },
          {
            "type": "course",
            "title": {
              "zh": "课程 1：解码自然之美：用科学数据讲故事",
              "en": "Course 1: Decoding the Beauty of Nature: Storytelling with Scientific Data"
            },
            "location": {
              "zh": "第四会议室",
              "en": "Meeting Room 4"
            },
            "details": [
              {
                "zh": "主持人：王长波（华东师范大学）",
                "en": "Chair: Changbo Wang (East China Normal University)"
              },
              {
                "zh": "主讲人：蓝星宇（复旦大学）；陶钧（中山大学）",
                "en": "Instructors: Xingyu Lan (Fudan University); Jun Tao (Sun Yat-sen University)"
              }
            ]
          },
          {
            "type": "course",
            "title": {
              "zh": "课程 2：草木染章 色树观象——非遗印染技艺与中国传统色彩数据图谱构建",
              "en": "Course 2: Botanical Dyeing and Color Mapping — Intangible-Cultural-Heritage Dyeing and a Data Atlas of Traditional Chinese Colors"
            },
            "location": {
              "zh": "第五会议室",
              "en": "Meeting Room 5"
            },
            "details": [
              {
                "zh": "主持人：吕燕茹（北京工商大学）",
                "en": "Chair: Yanru Lv (Beijing Technology and Business University)"
              },
              {
                "zh": "主讲人：黄竹兰（贵阳学院）",
                "en": "Instructor: Zhulan Huang (Guiyang University)"
              }
            ]
          },
          {
            "type": "workshop",
            "title": {
              "zh": "博士生论坛",
              "en": "Doctoral Colloquium"
            },
            "location": {
              "zh": "贵阳学院数字科技大楼 11 楼 1102",
              "en": "Room 1102, 11F, Digital Technology Building, Guiyang University"
            },
            "details": [
              {
                "zh": "主持人：陶煜波（浙江大学）；李晨辉（华东师范大学）",
                "en": "Chairs: Yubo Tao (Zhejiang University); Chenhui Li (East China Normal University)"
              },
              {
                "zh": "点评专家：孙国道（浙江工业大学）；李杰（天津大学）；马昱欣（南方科技大学）",
                "en": "Discussants: Guodao Sun (Zhejiang University of Technology); Jie Li (Tianjin University); Yuxin Ma (Southern University of Science and Technology)"
              }
            ]
          }
        ]
      },
      {
        "time": "14:00–17:30",
        "sessions": [
          {
            "type": "activity",
            "title": {
              "zh": "可视化与可视分析专委会全体会议（内部）",
              "en": "Plenary Meeting of the Technical Committee on Visualization and Visual Analytics (Internal)"
            },
            "location": {
              "zh": "新闻发布厅",
              "en": "Press Conference Hall"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "2026-07-20",
    "date": {
      "zh": "2026 年 7 月 20 日（星期一）",
      "en": "Monday, July 20, 2026"
    },
    "timeslots": [
      {
        "time": "09:00–09:30",
        "sessions": [
          {
            "type": "activity",
            "title": {
              "zh": "开幕式",
              "en": "Opening Ceremony"
            },
            "location": {
              "zh": "贵州厅",
              "en": "Guizhou Hall"
            }
          }
        ]
      },
      {
        "time": "09:30–10:15",
        "sessions": [
          {
            "type": "keynote",
            "title": {
              "zh": "主旨报告 1：多模图像融合感知",
              "en": "Keynote 1: Multimodal Image Fusion and Perception"
            },
            "location": {
              "zh": "贵州厅",
              "en": "Guizhou Hall"
            },
            "details": [
              {
                "zh": "报告人：李树涛（长安大学）",
                "en": "Speaker: Shutao Li (Chang'an University)"
              }
            ]
          }
        ]
      },
      {
        "time": "10:15–10:30",
        "sessions": [
          {
            "type": "break",
            "title": {
              "zh": "合影 & 茶歇",
              "en": "Group Photo & Coffee Break"
            }
          }
        ]
      },
      {
        "time": "10:30–11:15",
        "sessions": [
          {
            "type": "panel",
            "title": {
              "zh": "圆桌论坛 1：智能时代的可视化征程",
              "en": "Panel 1: The Visualization Journey in the Intelligent Era"
            },
            "location": {
              "zh": "贵州厅",
              "en": "Guizhou Hall"
            },
            "details": [
              {
                "zh": "主持人：单桂华（中国科学院计算机网络信息中心）",
                "en": "Chair: Guihua Shan (Computer Network Information Center, Chinese Academy of Sciences)"
              },
              {
                "zh": "嘉宾：屈华民（香港科技大学）；崔辰州（中国科学院国家天文台）；董军宇（中国海洋大学）；王建（国家对地观测科学数据中心副主任）；赵国辉（中国科学院寒区旱区环境与工程研究所）",
                "en": "Panelists: Huamin Qu (Hong Kong University of Science and Technology); Chenzhou Cui (National Astronomical Observatories, Chinese Academy of Sciences); Junyu Dong (Ocean University of China); Jian Wang (Deputy Director, National Earth Observation Data Center); Guohui Zhao (Cold and Arid Regions Environmental and Engineering Research Institute, Chinese Academy of Sciences)"
              }
            ]
          }
        ]
      },
      {
        "time": "11:15–12:00",
        "sessions": [
          {
            "type": "paper",
            "title": {
              "zh": "论文速览 & 海报速览",
              "en": "Paper & Poster Fast Forward"
            },
            "location": {
              "zh": "贵州厅",
              "en": "Guizhou Hall"
            }
          }
        ]
      },
      {
        "time": "13:30–18:25",
        "sessions": [
          {
            "type": "challenge",
            "title": {
              "zh": "数据可视化竞赛与颁奖",
              "en": "Data Visualization Contest and Award Ceremony"
            },
            "location": {
              "zh": "贵州厅 1+2",
              "en": "Guizhou Hall 1+2"
            },
            "details": [
              {
                "zh": "主持人：张慧杰（东北师范大学）；徐进（杭州师范大学）；韩俊（香港科技大学）",
                "en": "Chairs: Huijie Zhang (Northeast Normal University); Jin Xu (Hangzhou Normal University); Jun Han (The Hong Kong University of Science and Technology)"
              }
            ]
          }
        ]
      },
      {
        "time": "13:30–15:00",
        "sessions": [
          {
            "type": "topic",
            "title": {
              "zh": "专题 1：海洋复杂可视计算系统",
              "en": "Topic 1: Visual Computing Systems for Complex Ocean Environments"
            },
            "location": {
              "zh": "贵州厅 3",
              "en": "Guizhou Hall 3"
            },
            "details": [
              {
                "zh": "主持人：解翠（中国海洋大学）",
                "en": "Chair: Cui Xie (Ocean University of China)"
              },
              {
                "zh": "嘉宾：刘健（南方海洋实验室）；张斌（中国科学院海洋研究所）；陶钧（中山大学）；曾琼（山东大学）",
                "en": "Speakers: Jian Liu (Southern Marine Science and Engineering Guangdong Laboratory (Zhuhai)); Bin Zhang (Institute of Oceanology, Chinese Academy of Sciences); Jun Tao (Sun Yat-sen University); Qiong Zeng (Shandong University)"
              }
            ]
          }
        ]
      },
      {
        "time": "13:30–14:30",
        "sessions": [
          {
            "type": "topic",
            "title": {
              "zh": "专题 2：数智时代的文化遗产可视化与艺术设计",
              "en": "Topic 2: Cultural Heritage Visualization and Art Design in the Digital Intelligence Era"
            },
            "location": {
              "zh": "第四会议室",
              "en": "Meeting Room 4"
            },
            "details": [
              {
                "zh": "主持人：陈晴（同济大学）",
                "en": "Chair: Qing Chen (Tongji University)"
              },
              {
                "zh": "嘉宾：李谦升（上海大学）；于健（广州美术学院）；龙娟娟（江南大学）；黄竹兰（贵阳学院）",
                "en": "Speakers: Qiansheng Li (Shanghai University); Jian Yu (Guangzhou Academy of Fine Arts); Juanjuan Long (Jiangnan University); Zhulan Huang (Guiyang University)"
              }
            ]
          }
        ]
      },
      {
        "time": "14:30–15:00",
        "sessions": [
          {
            "type": "activity",
            "title": {
              "zh": "艺术项目开幕式",
              "en": "Art Project Opening Ceremony"
            },
            "location": {
              "zh": "第三会议室",
              "en": "Meeting Room 3"
            },
            "details": [
              {
                "zh": "主持人：李谦升（上海大学）",
                "en": "Chair: Qiansheng Li (Shanghai University)"
              }
            ]
          }
        ]
      },
      {
        "time": "13:30–15:00",
        "sessions": [
          {
            "type": "paper",
            "title": {
              "zh": "论文报告 Session 1：AI and Visualization",
              "en": "Paper Session 1: AI and Visualization"
            },
            "location": {
              "zh": "第五会议室",
              "en": "Meeting Room 5"
            },
            "details": [
              {
                "zh": "主持人：赵宇恒（复旦大学）",
                "en": "Chair: Yuheng Zhao (Fudan University)"
              },
              {
                "zh": "1. RAG-ReconVis: Visual Analytics for Human-Guided Reconstruction of RAG Knowledge-Base Leakage\n   Authors: Yunchao Wang, Yingqi Pan, Wenkang Hao, Junhao Lan, Guodao Sun\n2. FootprintRAG: Visual Analytics for Evidence Context Refinement in RAG-based Scientific Literature Exploration\n   Authors: Xingyu Liu, Yu Dong, Qizhen Yu, Shiyu Cheng, Zhe Wang, Guan Li, Guihua Shan, Dong Tian, Christy Jie Liang, Quang Vinh Nguyen\n3. LinguaLens: Visual Analytics for Shared-Context Branching Analysis in Stochastic LLM Generation\n   Authors: Lucheng Cao, Xinlei Liu, Qingyang Zhu, Hongxing Qin, Chao Liu, Haibo Hu\n4. 多元工业时序预测深度模型内部表征的细粒度可视分析\n   Authors: Xinya Yao, Ruixiao Liu, Yingchao Fu, Zhi Xu, Wenjing Tian, Lianen Ji\n5. AUG-Scope: Alignment- and Uniformity-Guided Visual Diagnosis for Hybrid Graph Self-Supervised Learning Configurations\n   Authors: Ying Tang, Jiawei Tang, Guodao Sun",
                "en": "1. RAG-ReconVis: Visual Analytics for Human-Guided Reconstruction of RAG Knowledge-Base Leakage\n   Authors: Yunchao Wang, Yingqi Pan, Wenkang Hao, Junhao Lan, Guodao Sun\n2. FootprintRAG: Visual Analytics for Evidence Context Refinement in RAG-based Scientific Literature Exploration\n   Authors: Xingyu Liu, Yu Dong, Qizhen Yu, Shiyu Cheng, Zhe Wang, Guan Li, Guihua Shan, Dong Tian, Christy Jie Liang, Quang Vinh Nguyen\n3. LinguaLens: Visual Analytics for Shared-Context Branching Analysis in Stochastic LLM Generation\n   Authors: Lucheng Cao, Xinlei Liu, Qingyang Zhu, Hongxing Qin, Chao Liu, Haibo Hu\n4. Fine-Grained Visual Analysis of Internal Representations in Deep Models for Multivariate Industrial Time-Series Forecasting\n   Authors: Xinya Yao, Ruixiao Liu, Yingchao Fu, Zhi Xu, Wenjing Tian, Lianen Ji\n5. AUG-Scope: Alignment- and Uniformity-Guided Visual Diagnosis for Hybrid Graph Self-Supervised Learning Configurations\n   Authors: Ying Tang, Jiawei Tang, Guodao Sun"
              }
            ]
          }
        ]
      },
      {
        "time": "15:00–15:15",
        "sessions": [
          {
            "type": "break",
            "title": {
              "zh": "茶歇",
              "en": "Coffee Break"
            }
          }
        ]
      },
      {
        "time": "15:15–16:45",
        "sessions": [
          {
            "type": "topic",
            "title": {
              "zh": "专题 3：智能制造与可视化",
              "en": "Topic 3: Intelligent Manufacturing and Visualization"
            },
            "location": {
              "zh": "贵州厅 3",
              "en": "Guizhou Hall 3"
            },
            "details": [
              {
                "zh": "主持人：韩俊（香港科技大学）",
                "en": "Chair: Jun Han (The Hong Kong University of Science and Technology)"
              },
              {
                "zh": "嘉宾：吕琳（山东大学）；高廷红（贵州大学）；施道龙（林泉电机）；邢德（中国空气动力研究与发展中心）",
                "en": "Speakers: Lin Lv (Shandong University); Tinghong Gao (Guizhou University); Daolong Shi (Linquan Electric Machinery); De Xing (China Aerodynamics Research and Development Center)"
              }
            ]
          },
          {
            "type": "paper",
            "title": {
              "zh": "论文报告 Session 2：Visualization Applications",
              "en": "Paper Session 2: Visualization Applications"
            },
            "location": {
              "zh": "第四会议室",
              "en": "Meeting Room 4"
            },
            "details": [
              {
                "zh": "主持人：李金城（北京师范大学）",
                "en": "Chair: Jincheng Li (Beijing Normal University)"
              },
              {
                "zh": "1. 面向数字孪生场景的航空发动机剩余使用寿命可解释预测系统\n   Authors: Xingkun Li, Yadong Wu, Hongying Zhang, Yan Zhu, Li Zhang, Zhichao Yang, Fupan Wang, Guijuan Wang\n2. RegimeFlow: State-Aware Visual Analytics for Causal Analysis in Wastewater Treatment Processes\n   Authors: Binyan Gao, Qi Jiang, Kaixing Du, Haixia Wang, Jie Lei, Jian Liu, Guodao Sun, Ronghua Liang\n3. HearTracker: Visual Analytics for Exploring Speech Encoding and Neural Response Patterns in Hearing Loss\n   Authors: Yuning Hu, Wenhai Peng, Feiyang Gao, Yangyang Zhou, Yujun He, Hairong Jin, Zhili Zhang, Wei Zhang, Chaoqing Xu\n4. 基于可解释异质图学习的蛋白质组学多维关联可视分析系统\n   Authors: Jianhao Zhang, Yaqi Wang, Wentao Chen, Qipeng Wang, Ziyi Deng, Min Zhu\n5. 面向成品油管道工况演化的检索增强可视分析方法\n   Authors: Ruixiao Liu, Chao Liu, Hao Zhang, Meng Shao, Haochong Li, Lianen Ji",
                "en": "1. An Interpretable Prediction System for Aero-Engine Remaining Useful Life in Digital-Twin Scenarios\n   Authors: Xingkun Li, Yadong Wu, Hongying Zhang, Yan Zhu, Li Zhang, Zhichao Yang, Fupan Wang, Guijuan Wang\n2. RegimeFlow: State-Aware Visual Analytics for Causal Analysis in Wastewater Treatment Processes\n   Authors: Binyan Gao, Qi Jiang, Kaixing Du, Haixia Wang, Jie Lei, Jian Liu, Guodao Sun, Ronghua Liang\n3. HearTracker: Visual Analytics for Exploring Speech Encoding and Neural Response Patterns in Hearing Loss\n   Authors: Yuning Hu, Wenhai Peng, Feiyang Gao, Yangyang Zhou, Yujun He, Hairong Jin, Zhili Zhang, Wei Zhang, Chaoqing Xu\n4. A Visual Analytics System for Multidimensional Associations in Proteomics Based on Interpretable Heterogeneous Graph Learning\n   Authors: Jianhao Zhang, Yaqi Wang, Wentao Chen, Qipeng Wang, Ziyi Deng, Min Zhu\n5. A Retrieval-Augmented Visual Analytics Approach for Operational-State Evolution in Refined-Oil Pipelines\n   Authors: Ruixiao Liu, Chao Liu, Hao Zhang, Meng Shao, Haochong Li, Lianen Ji"
              }
            ]
          },
          {
            "type": "paper",
            "title": {
              "zh": "论文报告 Session 3：Visualization Authoring",
              "en": "Paper Session 3: Visualization Authoring"
            },
            "location": {
              "zh": "第五会议室",
              "en": "Meeting Room 5"
            },
            "details": [
              {
                "zh": "主持人：曾琼（山东大学）",
                "en": "Chair: Qiong Zeng (Shandong University)"
              },
              {
                "zh": "1. RAGE-Vis: A Relation-Aware Generative Editing Interface for Natural Language-Based Chart Editing\n   Authors: Ziyao Kang, Yiping Sun, Linxuan Tian, Henghuan Qu, Wei Zeng, Jiazhi Xia\n2. EviFlow-Vis: Evidence-Centered LLM-Assisted Text-to-Chart Authoring for Long-Document Reporting\n   Authors: Zian Zhao, Wei Zeng\n3. FinChronicle: Interactive Generation and Refinement of Perspective-Linked Timelines from Financial Documents\n   Authors: Bowen Jia, Qiaoyun Huang, Xiaoyue Huang, Tong Lyu, Xiping Wang, Yanpeng Hu, Changbo Wang, Chenhui Li\n4. A Multi-Agent Framework for User-Intent-Aware Semantic Diagram Generation\n   Authors: Qianhui Li, Jielin Feng, Siming Chen\n5. LivingSketches: Co-creation Platform for Children’s Visual Storytelling\n   Authors: Mei Wang, Lijie Yao, Yu Liu, Lingyun Yu",
                "en": "1. RAGE-Vis: A Relation-Aware Generative Editing Interface for Natural Language-Based Chart Editing\n   Authors: Ziyao Kang, Yiping Sun, Linxuan Tian, Henghuan Qu, Wei Zeng, Jiazhi Xia\n2. EviFlow-Vis: Evidence-Centered LLM-Assisted Text-to-Chart Authoring for Long-Document Reporting\n   Authors: Zian Zhao, Wei Zeng\n3. FinChronicle: Interactive Generation and Refinement of Perspective-Linked Timelines from Financial Documents\n   Authors: Bowen Jia, Qiaoyun Huang, Xiaoyue Huang, Tong Lyu, Xiping Wang, Yanpeng Hu, Changbo Wang, Chenhui Li\n4. A Multi-Agent Framework for User-Intent-Aware Semantic Diagram Generation\n   Authors: Qianhui Li, Jielin Feng, Siming Chen\n5. LivingSketches: Co-creation Platform for Children’s Visual Storytelling\n   Authors: Mei Wang, Lijie Yao, Yu Liu, Lingyun Yu"
              }
            ]
          }
        ]
      },
      {
        "time": "16:55–18:25",
        "sessions": [
          {
            "type": "topic",
            "title": {
              "zh": "专题 4：沉浸式可视化",
              "en": "Topic 4: Immersive Visualization"
            },
            "location": {
              "zh": "贵州厅 3",
              "en": "Guizhou Hall 3"
            },
            "details": [
              {
                "zh": "主持人：曾伟（香港科技大学（广州））",
                "en": "Chair: Wei Zeng (The Hong Kong University of Science and Technology (Guangzhou))"
              },
              {
                "zh": "嘉宾：俞凌云（西交利物浦大学）；刘日晨（中国人民大学）；李静雅（北京交通大学）；赵凯星（西北工业大学）",
                "en": "Speakers: Lingyun Yu (Xi'an Jiaotong-Liverpool University); Richen Liu (Renmin University of China); Jingya Li (Beijing Jiaotong University); Kaixing Zhao (Northwestern Polytechnical University)"
              }
            ]
          },
          {
            "type": "paper",
            "title": {
              "zh": "论文报告 Session 4：Perception and Evaluation",
              "en": "Paper Session 4: Perception and Evaluation"
            },
            "location": {
              "zh": "第四会议室",
              "en": "Meeting Room 4"
            },
            "details": [
              {
                "zh": "主持人：侯伊涵（香港科技大学（广州））",
                "en": "Chair: Yihan Hou (The Hong Kong University of Science and Technology (Guangzhou))"
              },
              {
                "zh": "1. When Contrast Is Not Enough: An Empirical Study of Dynamic Color Adaptation in FPS Games\n   Authors: Zehong Ye, Jingyu Wang, Xiao Xie, Lingyun Yu, Lijie Yao\n2. Effects of Model Fidelity and View Layout on Analytic Activities in Digital Twin\n   Authors: Zhiyao Yang, Yihan Hou, Xingjia Hao, Rongrong Chen, Hai-Ning Liang, Wei Zeng\n3. Tangible Carbon Blocks: Data Physicalization for Everyday Carbon Emissions\n   Authors: Jingyu Wang, Jiahan Zhang, Yu Liu, Lingyun Yu, Lijie Yao\n4. Immersive Interface for Human-Swarm Interaction: Advancing Deployment and Swarm-Drone-Task Comprehension\n   Authors: Le Liu, Bohan Shen, Lingyun Yu, Kaixing Zhao",
                "en": "1. When Contrast Is Not Enough: An Empirical Study of Dynamic Color Adaptation in FPS Games\n   Authors: Zehong Ye, Jingyu Wang, Xiao Xie, Lingyun Yu, Lijie Yao\n2. Effects of Model Fidelity and View Layout on Analytic Activities in Digital Twin\n   Authors: Zhiyao Yang, Yihan Hou, Xingjia Hao, Rongrong Chen, Hai-Ning Liang, Wei Zeng\n3. Tangible Carbon Blocks: Data Physicalization for Everyday Carbon Emissions\n   Authors: Jingyu Wang, Jiahan Zhang, Yu Liu, Lingyun Yu, Lijie Yao\n4. Immersive Interface for Human-Swarm Interaction: Advancing Deployment and Swarm-Drone-Task Comprehension\n   Authors: Le Liu, Bohan Shen, Lingyun Yu, Kaixing Zhao"
              }
            ]
          },
          {
            "type": "paper",
            "title": {
              "zh": "论文报告 Session 5：Graph Visualization",
              "en": "Paper Session 5: Graph Visualization"
            },
            "location": {
              "zh": "第五会议室",
              "en": "Meeting Room 5"
            },
            "details": [
              {
                "zh": "主持人：宋思程（华东师范大学）",
                "en": "Chair: Sicheng Song (East China Normal University)"
              },
              {
                "zh": "1. NOVA: Knowledge-Augmented Visual Analysis for Automated Graph Layout Optimization\n   Authors: Nuo Xu, Tong Li, Siyu Mao, Chenze Li, Qi Jiang, Xueqian Zheng, Yunchao Wang, Guodao Sun, Ronghua Liang\n2. PrefKG: A Visual Interactive System for Aligning LLM-Based Knowledge Graph Extraction with Human Preferences\n   Authors: Bin Li, Yuming Ma, Bo Meng, Yu Su, Dongyang He, Yuewen Liu\n3. CHCVis：多源文化遗产交叉验证交互式可视分析系统\n   Authors: Haozhong Liu, Anzhen Li, Tianqi Wang, Xiaoyan Gu, Yixia Zheng, Huiru Chen, Huanghuang Deng, Wei Zhang, Yu Zhao\n4. DiaViz: Systematic Visual Analytics Exploration of Clinical Diabetes Data via Graph-Based Representations\n   Authors: Yuning Hu, Jiawei Huang, Zhentao Zheng, Xinyuan Fu, Menglin Feng, Mimei Xu, Zhongding Jiang, Guodao Sun, Chaoqing Xu",
                "en": "1. NOVA: Knowledge-Augmented Visual Analysis for Automated Graph Layout Optimization\n   Authors: Nuo Xu, Tong Li, Siyu Mao, Chenze Li, Qi Jiang, Xueqian Zheng, Yunchao Wang, Guodao Sun, Ronghua Liang\n2. PrefKG: A Visual Interactive System for Aligning LLM-Based Knowledge Graph Extraction with Human Preferences\n   Authors: Bin Li, Yuming Ma, Bo Meng, Yu Su, Dongyang He, Yuewen Liu\n3. CHCVis: An Interactive Visual Analytics System for Cross-Validation of Multi-Source Cultural Heritage Data\n   Authors: Haozhong Liu, Anzhen Li, Tianqi Wang, Xiaoyan Gu, Yixia Zheng, Huiru Chen, Huanghuang Deng, Wei Zhang, Yu Zhao\n4. DiaViz: Systematic Visual Analytics Exploration of Clinical Diabetes Data via Graph-Based Representations\n   Authors: Yuning Hu, Jiawei Huang, Zhentao Zheng, Xinyuan Fu, Menglin Feng, Mimei Xu, Zhongding Jiang, Guodao Sun, Chaoqing Xu"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "2026-07-21",
    "date": {
      "zh": "2026 年 7 月 21 日（星期二）",
      "en": "Tuesday, July 21, 2026"
    },
    "timeslots": [
      {
        "time": "08:30–10:00",
        "sessions": [
          {
            "type": "topic",
            "title": {
              "zh": "专题 5：青年学者成长经验分享",
              "en": "Topic 5: Career Development Experience Sharing for Early-Career Scholars"
            },
            "location": {
              "zh": "贵州厅 1+2",
              "en": "Guizhou Hall 1+2"
            },
            "details": [
              {
                "zh": "主持人：李晨辉（华东师范大学）",
                "en": "Chair: Chenhui Li (East China Normal University)"
              },
              {
                "zh": "嘉宾：刘子鹏（北京航空航天大学）；杨维铠（香港科技大学（广州））；王叙萌（南开大学）；宋思程（华东师范大学）；吴绍武（贵州财经大学）",
                "en": "Speakers: Zipeng Liu (Beihang University); Weikai Yang (The Hong Kong University of Science and Technology (Guangzhou)); Xumeng Wang (Nankai University); Sicheng Song (East China Normal University); Shaowu Wu (Guizhou University of Finance and Economics)"
              }
            ]
          },
          {
            "type": "paper",
            "title": {
              "zh": "论文报告 Session 6：Text, Tabular, and Time Series Data",
              "en": "Paper Session 6: Text, Tabular, and Time Series Data"
            },
            "location": {
              "zh": "贵州厅 3",
              "en": "Guizhou Hall 3"
            },
            "details": [
              {
                "zh": "主持人：夏旺（嘉兴大学）",
                "en": "Chair: Wang Xia (Jiaxing University)"
              },
              {
                "zh": "1. Line Chart Reverse Engineering via Differential Rendering\n   Authors: Boyang Feng, Jinchao Chen, Guozheng Li, Quanbao Yang, Min Lu, Xuefeng Li, Weijiao Zhang, Zhongkai Wang, Chi Harold Liu\n2. SemLinkLens: Semantic Linking and LLM-Driven Visual Analytics for Tabular Data Insights\n   Authors: Jinchao Chen, Guozheng Li, Quanbao Yang, Gerile Aodeng, Yunshan Feng, Xuefeng Li, Weijiao Zhang, Zhongkai Wang, Chi Harold Liu\n3. FloaView: A Visualization System for Stance Analysis of Multiple Answers to a Single Opinion-Oriented Question\n   Authors: Yue Huang, Shuai Chen, Zhaoman Zhong\n4. EvoInsight: Evolutionary Intent-Driven Exploratory Data Analysis with Contextual Enhancement\n   Authors: Zhentao Zheng, Qi Jiang, Ziyu Huang, Xueqian Zheng, Yunchao Wang, Jian Liu, Guodao Sun, Ronghua Liang\n5. LexiVA: An Evidence-Aware Visual Analysis System for Multi-Dimensional Cultural Evolution of Chinese Lexicon\n   Authors: Guangtao You, Yingping Yang, Yumeng Zhang, Wenwen Li, Yuxin Lei, Jiazhou Chen",
                "en": "1. Line Chart Reverse Engineering via Differential Rendering\n   Authors: Boyang Feng, Jinchao Chen, Guozheng Li, Quanbao Yang, Min Lu, Xuefeng Li, Weijiao Zhang, Zhongkai Wang, Chi Harold Liu\n2. SemLinkLens: Semantic Linking and LLM-Driven Visual Analytics for Tabular Data Insights\n   Authors: Jinchao Chen, Guozheng Li, Quanbao Yang, Gerile Aodeng, Yunshan Feng, Xuefeng Li, Weijiao Zhang, Zhongkai Wang, Chi Harold Liu\n3. FloaView: A Visualization System for Stance Analysis of Multiple Answers to a Single Opinion-Oriented Question\n   Authors: Yue Huang, Shuai Chen, Zhaoman Zhong\n4. EvoInsight: Evolutionary Intent-Driven Exploratory Data Analysis with Contextual Enhancement\n   Authors: Zhentao Zheng, Qi Jiang, Ziyu Huang, Xueqian Zheng, Yunchao Wang, Jian Liu, Guodao Sun, Ronghua Liang\n5. LexiVA: An Evidence-Aware Visual Analysis System for Multi-Dimensional Cultural Evolution of Chinese Lexicon\n   Authors: Guangtao You, Yingping Yang, Yumeng Zhang, Wenwen Li, Yuxin Lei, Jiazhou Chen"
              }
            ]
          },
          {
            "type": "exhibition",
            "title": {
              "zh": "艺术家讲座",
              "en": "Artist Talks"
            },
            "location": {
              "zh": "第四会议室",
              "en": "Meeting Room 4"
            },
            "details": [
              {
                "zh": "主持人：龙娟娟（江南大学）",
                "en": "Chair: Juanjuan Long (Jiangnan University)"
              },
              {
                "zh": "嘉宾：门澍（中国美术学院）；张儒赫（鲁迅美术学院）；谢继武（内蒙古师范大学）",
                "en": "Speakers: Shu Men (China Academy of Art); Ruhe Zhang (Lu Xun Academy of Fine Arts); Jiwu Xie (Inner Mongolia Normal University)"
              }
            ]
          },
          {
            "type": "paper",
            "title": {
              "zh": "论文报告 Session 7：Geospatial Visualization",
              "en": "Paper Session 7: Geospatial Visualization"
            },
            "location": {
              "zh": "第五会议室",
              "en": "Meeting Room 5"
            },
            "details": [
              {
                "zh": "主持人：赵锂想（西交利物浦大学）",
                "en": "Chair: Lixiang Zhao (Xi'an Jiaotong-Liverpool University)"
              },
              {
                "zh": "1. Visual Analytics for Open-Loop Evaluation of End-to-End Autonomous Driving Models\n   Authors: Xueyou Zhang, Yunchao Wang, Wang Xia, Yicao Li, Xueqian Zheng, Qi Jiang, Guodao Sun, Ronghua Liang\n2. ActSoon: Intelligent Aircraft Taxiing Scheduling through Integrated Spatio-Temporal Visual Analytics\n   Authors: Luge Yang, Guoqiang Wang, Fengjie Wang, Yimeng Wang, Qipeng Wang, Yong Wang, Xiaolin Wen, Min Zhu\n3. MapSlides: A Geospatial Data-Driven Multi-Agent Framework for Story Map Slide Generation\n   Authors: Jie Wang, Dongliang Guo, Haozhan Shi, Tengda Xue\n4. TPBSeer: Visual Analysis of Traffic Participant Behaviors at Intersections\n   Authors: Wei Huang, Guohong Zheng, Yong Wang, Haipeng Zeng",
                "en": "1. Visual Analytics for Open-Loop Evaluation of End-to-End Autonomous Driving Models\n   Authors: Xueyou Zhang, Yunchao Wang, Wang Xia, Yicao Li, Xueqian Zheng, Qi Jiang, Guodao Sun, Ronghua Liang\n2. ActSoon: Intelligent Aircraft Taxiing Scheduling through Integrated Spatio-Temporal Visual Analytics\n   Authors: Luge Yang, Guoqiang Wang, Fengjie Wang, Yimeng Wang, Qipeng Wang, Yong Wang, Xiaolin Wen, Min Zhu\n3. MapSlides: A Geospatial Data-Driven Multi-Agent Framework for Story Map Slide Generation\n   Authors: Jie Wang, Dongliang Guo, Haozhan Shi, Tengda Xue\n4. TPBSeer: Visual Analysis of Traffic Participant Behaviors at Intersections\n   Authors: Wei Huang, Guohong Zheng, Yong Wang, Haipeng Zeng"
              }
            ]
          }
        ]
      },
      {
        "time": "10:00–10:15",
        "sessions": [
          {
            "type": "break",
            "title": {
              "zh": "茶歇",
              "en": "Coffee Break"
            }
          }
        ]
      },
      {
        "time": "10:15–11:45",
        "sessions": [
          {
            "type": "topic",
            "title": {
              "zh": "专题 6：可视分析与智能协同决策",
              "en": "Topic 6: Visual Analytics and Intelligent Collaborative Decision-Making"
            },
            "location": {
              "zh": "贵州厅 1+2",
              "en": "Guizhou Hall 1+2"
            },
            "details": [
              {
                "zh": "主持人：马昱欣（南方科技大学）",
                "en": "Chair: Yuxin Ma (Southern University of Science and Technology)"
              },
              {
                "zh": "嘉宾：陈思明（复旦大学）；邓紫坤（华南理工大学）；李权（上海科技大学）；邓达臻（浙江大学）",
                "en": "Speakers: Siming Chen (Fudan University); Zikun Deng (South China University of Technology); Quan Li (ShanghaiTech University); Dazhen Deng (Zhejiang University)"
              }
            ]
          },
          {
            "type": "topic",
            "title": {
              "zh": "专题 7：数据要素 × 可视化",
              "en": "Topic 7: Data Elements × Visualization"
            },
            "location": {
              "zh": "贵州厅 3",
              "en": "Guizhou Hall 3"
            },
            "details": [
              {
                "zh": "主持人：秦红星（重庆大学）",
                "en": "Chair: Hongxing Qin (Chongqing University)"
              },
              {
                "zh": "嘉宾：陈希（广东省数据要素产业协会）；高明（华东师范大学）；涂著刚（贵阳高新数通信息有限公司）；刘军（贵州大数据产业集团）；邹赛（贵州大学）",
                "en": "Speakers: Xi Chen (Guangdong Data Elements Industry Association); Ming Gao (East China Normal University); Zhugang Tu (Guiyang High-Tech Shutong Information Co., Ltd.); Jun Liu (Guizhou Big Data Industry Group); Sai Zou (Guizhou University)"
              }
            ]
          },
          {
            "type": "topic",
            "title": {
              "zh": "专题 8：科学可视化",
              "en": "Topic 8: Scientific Visualization"
            },
            "location": {
              "zh": "第四会议室",
              "en": "Meeting Room 4"
            },
            "details": [
              {
                "zh": "主持人：陈帅（江苏海洋大学）",
                "en": "Chair: Shuai Chen (Jiangsu Ocean University)"
              },
              {
                "zh": "嘉宾：刘乐（西北工业大学）；周亮（北京大学）；李观（中国科学院计算机网络信息中心）；颜琳（爱荷华州立大学）",
                "en": "Speakers: Le Liu (Northwestern Polytechnical University); Liang Zhou (Peking University); Guan Li (Computer Network Information Center, Chinese Academy of Sciences); Lin Yan (Iowa State University)"
              }
            ]
          },
          {
            "type": "paper",
            "title": {
              "zh": "论文报告 Session 8：Scientific Visualization",
              "en": "Paper Session 8: Scientific Visualization"
            },
            "location": {
              "zh": "第五会议室",
              "en": "Meeting Room 5"
            },
            "details": [
              {
                "zh": "主持人：韩俊（香港科技大学）",
                "en": "Chair: Jun Han (The Hong Kong University of Science and Technology)"
              },
              {
                "zh": "1. 面向生态流量调度仿真的动态可视化方法\n   Authors: Yeheng Jiang, Chenhui Li, Changbo Wang\n2. GeoVis: Geometry-Enhanced and Multi-View Fused Model for Precise LLM-Driven Aircraft Component Visualization\n   Authors: Sipeng Deng, De Xing, Xiaorong Zhang, Fang Wang, Chunyang Su\n3. A Direct Visualization Method for High-Order Flow Field Data Based on Virtual Subblocks in Reference Space\n   Authors: JianHua Dong, JiMing Lan, Yang Chao, Fang Wang, ZhenXing He\n4. MolMind: A Visual Analytics Framework for Bidirectional Semantic Interaction and Narrative Mechanisms\n   Authors: Yingqi Yao, Dongliang Guo, Yujing Bao, Tengda Xue, Mengya Lv",
                "en": "1. A Dynamic Visualization Method for Ecological Flow Scheduling Simulation\n   Authors: Yeheng Jiang, Chenhui Li, Changbo Wang\n2. GeoVis: Geometry-Enhanced and Multi-View Fused Model for Precise LLM-Driven Aircraft Component Visualization\n   Authors: Sipeng Deng, De Xing, Xiaorong Zhang, Fang Wang, Chunyang Su\n3. A Direct Visualization Method for High-Order Flow Field Data Based on Virtual Subblocks in Reference Space\n   Authors: JianHua Dong, JiMing Lan, Yang Chao, Fang Wang, ZhenXing He\n4. MolMind: A Visual Analytics Framework for Bidirectional Semantic Interaction and Narrative Mechanisms\n   Authors: Yingqi Yao, Dongliang Guo, Yujing Bao, Tengda Xue, Mengya Lv"
              }
            ]
          }
        ]
      },
      {
        "time": "13:30–15:00",
        "sessions": [
          {
            "type": "activity",
            "title": {
              "zh": "校企面对面",
              "en": "University–Industry Meetup"
            },
            "location": {
              "zh": "贵州厅 1+2",
              "en": "Guizhou Hall 1+2"
            },
            "details": [
              {
                "zh": "主持人：李权（上海科技大学）；胡海波（重庆大学）",
                "en": "Chairs: Quan Li (ShanghaiTech University); Haibo Hu (Chongqing University)"
              },
              {
                zh: "嘉宾：闻啸（阿里云计算有限公司）；丁治宇（华为技术有限公司）；徐科（南京大学）",
                en: "Speakers: Xiao Wen (Alibaba Cloud Computing Co., Ltd.); Zhiyu Ding (Huawei Technologies Co., Ltd.); Ke Xu (Nanjing University)"
              }
            ]
          },
          {
            "type": "topic",
            "title": {
              "zh": "专题 9：前沿论文交流 A",
              "en": "Topic 9: Frontier Research Forum A"
            },
            "location": {
              "zh": "贵州厅 3",
              "en": "Guizhou Hall 3"
            },
            "details": [
              {
                "zh": "主持人：李杰（天津大学）",
                "en": "Chair: Jie Li (Tianjin University)"
              },
              {
                "zh": "嘉宾：蒋明蔚（华东师范大学）；孙一平（中南大学）；杨一航（复旦大学）；周云帆（浙江大学）；侯硕伟（中国人民大学）；陈昕悦（北京大学）；叶铧远（香港科技大学）；于泽华（中山大学）；周起帆（浙江大学）",
                "en": "Speakers: Mingwei Jiang (East China Normal University); Yiping Sun (Central South University); Yihang Yang (Fudan University); Yunfan Zhou (Zhejiang University); Shuowei Hou (Renmin University of China); Xinyue Chen (Peking University); Huayuan Ye (The Hong Kong University of Science and Technology); Zehua Yu (Sun Yat-sen University); Qifan Zhou (Zhejiang University)"
              }
            ]
          },
          {
            "type": "topic",
            "title": {
              "zh": "专题 10：人文数据分析与可视化",
              "en": "Topic 10: Humanities Data Analysis and Visualization"
            },
            "location": {
              "zh": "第四会议室",
              "en": "Meeting Room 4"
            },
            "details": [
              {
                "zh": "主持人：蓝星宇（复旦大学）",
                "en": "Chair: Xingyu Lan (Fudan University)"
              },
              {
                "zh": "嘉宾：刘昊（同济大学）；曹芳芳（河南大学）；徐娴（香港岭南大学）；王桂娟（西南科技大学）；赵林畅（贵阳学院）",
                "en": "Speakers: Hao Liu (Tongji University); Fangfang Cao (Henan University); Xian Xu (Lingnan University); Guijuan Wang (Southwest University of Science and Technology); Linchang Zhao (Guiyang University)"
              }
            ]
          },
          {
            "type": "topic",
            "title": {
              "zh": "专题 11：可视化行业应用",
              "en": "Topic 11: Visualization Applications in Industry"
            },
            "location": {
              "zh": "第五会议室",
              "en": "Meeting Room 5"
            },
            "details": [
              {
                "zh": "主持人：曾海鹏（中山大学）",
                "en": "Chair: Haipeng Zeng (Sun Yat-sen University)"
              },
              {
                "zh": "嘉宾：蒲剑苏（电子科技大学）；翁荻（浙江大学）；谢亚坤（西南交通大学）；郭漩（郑州大学）",
                "en": "Speakers: Jiansu Pu (University of Electronic Science and Technology of China); Di Weng (Zhejiang University); Yakun Xie (Southwest Jiaotong University); Xuan Guo (Zhengzhou University)"
              }
            ]
          }
        ]
      },
      {
        "time": "15:00–15:15",
        "sessions": [
          {
            "type": "break",
            "title": {
              "zh": "茶歇",
              "en": "Coffee Break"
            }
          }
        ]
      },
      {
        "time": "15:15–16:45",
        "sessions": [
          {
            "type": "activity",
            "title": {
              "zh": "校企面对面",
              "en": "University–Industry Meetup"
            },
            "location": {
              "zh": "贵州厅 1+2",
              "en": "Guizhou Hall 1+2"
            },
            "details": [
              {
                "zh": "主持人：李权（上海科技大学）；胡海波（重庆大学）",
                "en": "Chairs: Quan Li (ShanghaiTech University); Haibo Hu (Chongqing University)"
              },
              {
                zh: "嘉宾：孙建国（广州开得联智能科技有限公司）；陈晴（同济大学）；蔡蕾（北京亦心科技有限公司）",
                en: "Speakers: Jianguo Sun (Guangzhou Kindlink Intelligent Technology Co., Ltd.); Qing Chen (Tongji University); Lei Cai (Beijing Yixin Technology Co., Ltd.)"
              }
            ]
          },
          {
            "type": "topic",
            "title": {
              "zh": "专题 12：前沿论文交流 B",
              "en": "Topic 12: Frontier Research Forum B"
            },
            "location": {
              "zh": "贵州厅 3",
              "en": "Guizhou Hall 3"
            },
            "details": [
              {
                "zh": "主持人：李泽宇（中国传媒大学）",
                "en": "Chair: Zeyu Li (Communication University of China)"
              },
              {
                "zh": "嘉宾：王芬（复旦大学）；沈之洋（清华大学）；崔晋宁（中国人民大学）；罗旭（中国人民大学）；古晓燕（浙江大学）；马驰腾（北京大学）；张炜晗（中山大学）；李振（天津大学）",
                "en": "Speakers: Fen Wang (Fudan University); Zhiyang Shen (Tsinghua University); Jinning Cui (Renmin University of China); Xu Luo (Renmin University of China); Xiaoyan Gu (Zhejiang University); Chiteng Ma (Peking University); Weihan Zhang (Sun Yat-sen University); Zhen Li (Tianjin University)"
              }
            ]
          }
        ]
      },
      {
        "time": "16:45–21:45",
        "sessions": [
          {
            "type": "activity",
            "title": {
              "zh": "红色教育活动",
              "en": "Revolutionary Heritage Education Activity"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "2026-07-22",
    "date": {
      "zh": "2026 年 7 月 22 日（星期三）",
      "en": "Wednesday, July 22, 2026"
    },
    "timeslots": [
      {
        "time": "09:00–10:00",
        "sessions": [
          {
            "type": "keynote",
            "title": {
              "zh": "主旨报告 2：混合智能——数字艺术语境下的人机共创",
              "en": "Keynote 2: Hybrid Intelligence—Human–Machine Co-Creation in Digital Art"
            },
            "location": {
              "zh": "贵州厅",
              "en": "Guizhou Hall"
            },
            "details": [
              {
                "zh": "报告人：费俊（中央美术学院）",
                "en": "Speaker: Jun Fei (Central Academy of Fine Arts)"
              }
            ]
          }
        ]
      },
      {
        "time": "10:00–10:10",
        "sessions": [
          {
            "type": "break",
            "title": {
              "zh": "茶歇",
              "en": "Coffee Break"
            }
          }
        ]
      },
      {
        "time": "10:10–11:00",
        "sessions": [
          {
            "type": "panel",
            "title": {
              "zh": "圆桌论坛 2：青年学者在智能时代可视化发展中的机遇与挑战",
              "en": "Panel 2: Opportunities and Challenges for Young Scholars in Visualization in the Intelligent Era"
            },
            "location": {
              "zh": "贵州厅",
              "en": "Guizhou Hall"
            },
            "details": [
              {
                "zh": "主持人：陈思明（复旦大学）",
                "en": "Chair: Siming Chen (Fudan University)"
              },
              {
                "zh": "嘉宾：陶钧（中山大学）；龙娟娟（江南大学）；王勇（南洋理工大学）；刘乐（西北工业大学）；邓紫坤（华南理工大学）",
                "en": "Panelists: Jun Tao (Sun Yat-sen University); Juanjuan Long (Jiangnan University); Yong Wang (Nanyang Technological University); Le Liu (Northwestern Polytechnical University); Zikun Deng (South China University of Technology)"
              }
            ]
          }
        ]
      },
      {
        "time": "11:00–12:00",
        "sessions": [
          {
            "type": "activity",
            "title": {
              "zh": "闭幕式",
              "en": "Closing Ceremony"
            },
            "location": {
              "zh": "贵州厅",
              "en": "Guizhou Hall"
            }
          }
        ]
      }
    ]
  }
] satisfies ProgramDay[];

export const finalProgramRows = [
  {
    "date": {
      "zh": "07.18–07.22",
      "en": "July 18–22, 2026"
    },
    "session": {
      "type": "exhibition",
      "title": {
        "zh": "艺术展：数智林城，绿韵可视",
        "en": "Art Exhibition: Digital Intelligence in the Forest City, Green Rhythms Visualized"
      },
      "location": {
        "zh": "第三会议室",
        "en": "Meeting Room 3"
      }
    }
  }
] satisfies ProgramFinalRow[];