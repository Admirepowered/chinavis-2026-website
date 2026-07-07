import { marked } from "marked";

import { Speaker } from "~/components/SpeakerInfo";

import PhotoArpitNarechania from "~/assets/cjkworkshop/Arpit_Narechania.avif?inline";
import PhotoDongyuLiu from "~/assets/cjkworkshop/Dongyu_Liu.avif?inline";
import PhotoHannyWijaya from "~/assets/cjkworkshop/Hanny_Wijaya.avif?inline";
import PhotoJoselynSim from "~/assets/cjkworkshop/Joselyn_Sim.avif?inline";
import PhotoLijieYao from "~/assets/cjkworkshop/Lijie_Yao.avif?inline";
import PhotoQuanLi from "~/assets/cjkworkshop/Quan_Li.avif?inline";
import PhotoXiaoyuZhang from "~/assets/cjkworkshop/Xiaoyu_Zhang.avif?inline";
import PhotoYalongYang from "~/assets/cjkworkshop/Yalong_Yang.avif?inline";
import PhotoYongWang from "~/assets/cjkworkshop/Yong_Wang.avif?inline";
import PhotoCQ from "~/assets/cjkworkshop/cq.avif?inline";
import PhotoYZQ from "~/assets/cjkworkshop/yzq.avif?inline";

export const zh = {
  PageTitle: "国际论坛 - ChinaVis 2026",
  Title: "ChinaVis 2026 国际论坛",
  Information: marked.parse(
    `
    ## 论坛信息

    ### 主题：多模态交互与AI驱动的可视化：重塑人机协同的边界

    随着多模态交互技术与人工智能的深度融合，数据可视化正从静态呈现走向动态、智能的协作系统。本论坛将聚焦于如何利用视觉、听觉、语言等多种交互通道，结合生成式AI与人本智能，突破传统可视化工具的局限，实现更自然、更高效的人机共创。议题涵盖生成式可视分析中的规划驱动交互、跨感官的社会感知艺术实践、面向文本密集型文档的知识组织，以及个体、团队与市场语境下的协同设计创新。我们将共同探讨可视化如何在AI时代激发新的创造力与决策力。

    - **时间：** 2026年7月19日上午9点-12点
    - **地点：** 贵州饭店新闻发布厅
    `.replace(/^    /gm, ""),
    { async: false }
  ),
  Organizers: "论坛主席",
  Program: marked.parse(
    `
    ## 论坛议程

    | 时间 | 议程 |
    |---|---|
    | **09:00-09:10** | 欢迎致辞（陈为，浙江大学） |
    | **09:10-10:30** | 分论坛1：欧美新加坡学者论坛 |
    | **10:30-10:50** | 茶歇 |
    | **10:50-12:00** | 分论坛2：内地与香港学者论坛 |
    `.replace(/^    /gm, ""),
    { async: false }
  ),
  SessionChair: "分论坛主席",
  Speakers: "报告嘉宾",
  Panelists: "专题讨论嘉宾",
};

export const en = {
  PageTitle: "International Forum - ChinaVis 2026",
  Title: "ChinaVis 2026 International Forum",
  Information: marked.parse(
    `
    ## Information

    ### Topic: Multimodal Interaction and AI-Driven Visualization: Reshaping the Boundaries of Human-Machine Collaboration

    With the deep integration of multimodal interaction technologies and artificial intelligence, data visualization is evolving from static presentation toward dynamic and intelligent collaborative systems. This forum focuses on how visual, auditory, language, and other interaction channels can be combined with generative AI and human-centered intelligence to move beyond the limitations of traditional visualization tools and enable more natural and efficient human-AI co-creation. Topics include plan-centric interaction in generative visual analytics, cross-sensory socially aware artistic practice, knowledge organization for text-dominant documents, and co-design innovation across individual, team, and market contexts. Together, we will discuss how visualization can inspire new creativity and decision-making in the AI era.

    - **Date:** July 19, 2026, 9:00 AM - 12:00 PM
    - **Location:** News Release Hall, Guizhou Hotel
    `.replace(/^    /gm, ""),
    { async: false }
  ),
  Organizers: "Organizers",
  Program: marked.parse(
    `
    ## Program

    | Time | Program |
    |---|---|
    | **09:00-09:10** | Welcome Remarks (Wei Chen, Zhejiang University) |
    | **09:10-10:30** | Session 1: Scholars from Europe, the Americas, and Singapore |
    | **10:30-10:50** | Coffee Break |
    | **10:50-12:00** | Session 2: Scholars from Mainland China and Hong Kong |
    `.replace(/^    /gm, ""),
    { async: false }
  ),
  SessionChair: "Session Chair",
  Speakers: "Speakers",
  Panelists: "Panelists",
};

export const sessions: {
  title: { zh: string; en: string };
  speakers: Speaker[];
}[] = [
  {
    title: { zh: "分论坛1：欧美新加坡学者论坛", en: "Session 1: Scholars from Europe, the Americas, and Singapore" },
    speakers: [
      {
        name: { zh: "Dongyu Liu", en: "Dongyu Liu" },
        affiliation: {
          zh: "University of California, Davis",
          en: "University of California, Davis",
        },
        description: {
          zh: "Dongyu Liu is an Assistant Professor of Computer Science at the University of California, Davis, where he directs the Visualization and Intelligence Augmentation (VIA) research group. His research lies at the intersection of data visualization, human-computer interaction, human-centered AI, and machine learning. He develops visualization-empowered human-AI teaming systems that help people understand complex data, steer intelligent algorithms, and make trustworthy data-driven decisions. His recent work focuses on generative visual analytics and human-AI interaction for time-varying data, with applications in healthcare and environmental sustainability. Before joining UC Davis, he was a postdoctoral associate at the MIT Schwarzman College of Computing. He received his Ph.D. in Computer Science and Engineering from the Hong Kong University of Science and Technology and his B.S. from Zhejiang University.",
          en: "Dongyu Liu is an Assistant Professor of Computer Science at the University of California, Davis, where he directs the Visualization and Intelligence Augmentation (VIA) research group. His research lies at the intersection of data visualization, human-computer interaction, human-centered AI, and machine learning. He develops visualization-empowered human-AI teaming systems that help people understand complex data, steer intelligent algorithms, and make trustworthy data-driven decisions. His recent work focuses on generative visual analytics and human-AI interaction for time-varying data, with applications in healthcare and environmental sustainability. Before joining UC Davis, he was a postdoctoral associate at the MIT Schwarzman College of Computing. He received his Ph.D. in Computer Science and Engineering from the Hong Kong University of Science and Technology and his B.S. from Zhejiang University.",
        },
        photo: PhotoDongyuLiu,
        talk: {
          zh: "Multimodal and Plan-Centric Interaction for Generative Visual Analytics",
          en: "Multimodal and Plan-Centric Interaction for Generative Visual Analytics",
        },
        abstract: {
          zh: "Large language models and generative AI are reshaping visual analytics and data analytics systems by enabling users to generate visualizations, summarize insights, automate workflows, and explore data through natural language. Yet effective analytics still depends on human judgment, especially when goals evolve, intermediate results require verification, or automated reasoning becomes ambiguous or misaligned. This talk presents human-centered interaction approaches for Generative Visual Analytics that make human intent and system reasoning more explicit, inspectable, and steerable. I will focus on two complementary directions: multimodal interaction for expressing analytic intent through language, visual selection, direct manipulation, and sketching; and plan-centric interaction for guiding AI-generated decomposition, execution, evaluation, and repair through inspectable and revisable analysis plans.",
          en: "Large language models and generative AI are reshaping visual analytics and data analytics systems by enabling users to generate visualizations, summarize insights, automate workflows, and explore data through natural language. Yet effective analytics still depends on human judgment, especially when goals evolve, intermediate results require verification, or automated reasoning becomes ambiguous or misaligned. This talk presents human-centered interaction approaches for Generative Visual Analytics that make human intent and system reasoning more explicit, inspectable, and steerable. I will focus on two complementary directions: multimodal interaction for expressing analytic intent through language, visual selection, direct manipulation, and sketching; and plan-centric interaction for guiding AI-generated decomposition, execution, evaluation, and repair through inspectable and revisable analysis plans.",
        },
      },
      {
        name: { zh: "Yalong Yang", en: "Yalong Yang" },
        affiliation: {
          zh: "Georgia Tech",
          en: "Georgia Tech",
        },
        description: {
          zh: "Yalong Yang is an Assistant Professor in the School of Interactive Computing at Georgia Tech. Before joining Georgia Tech, he spent two years at Virginia Tech as a faculty member. Prior to this, he was a Postdoctoral Fellow in the Visual Computing Group at Harvard University and received his Ph.D. from Human-Centred Computing Department, Monash University, Australia. His research focuses on VR/AR/MR/XR (spatial computing), Visualization (VIS), and Human-Computer Interaction (HCI). He regularly publishes in premier venues such as ACM CHI, ACM UIST, IEEE TVCG, IEEE VR, IEEE VIS, ISMAR, and EuroVis, with his work and his work has received three Best Paper Honorable Mention Awards: IEEE VIS 2016 & 2022, and ACM CHI 2021. He is an NSF CAREER Award recipient and was selected as a Google Research Scholar in 2025. He also actively serves the research communities by serving on organization and program committees for ACM CHI, IEEE VR, IEEE VIS, and ISMAR. More information is available at <a href='https://ivi.cc.gatech.edu/pi.html' target='_blank'>https://ivi.cc.gatech.edu/pi.html</a>.",
          en: "Yalong Yang is an Assistant Professor in the School of Interactive Computing at Georgia Tech. Before joining Georgia Tech, he spent two years at Virginia Tech as a faculty member. Prior to this, he was a Postdoctoral Fellow in the Visual Computing Group at Harvard University and received his Ph.D. from Human-Centred Computing Department, Monash University, Australia. His research focuses on VR/AR/MR/XR (spatial computing), Visualization (VIS), and Human-Computer Interaction (HCI). He regularly publishes in premier venues such as ACM CHI, ACM UIST, IEEE TVCG, IEEE VR, IEEE VIS, ISMAR, and EuroVis, with his work and his work has received three Best Paper Honorable Mention Awards: IEEE VIS 2016 & 2022, and ACM CHI 2021. He is an NSF CAREER Award recipient and was selected as a Google Research Scholar in 2025. He also actively serves the research communities by serving on organization and program committees for ACM CHI, IEEE VR, IEEE VIS, and ISMAR. More information is available at <a href='https://ivi.cc.gatech.edu/pi.html' target='_blank'>https://ivi.cc.gatech.edu/pi.html</a>.",
        },
        photo: PhotoYalongYang,
        talk: {
          zh: "Immersive Data Workspace: Visualizations and More",
          en: "Immersive Data Workspace: Visualizations and More",
        },
        abstract: {
          zh: "Data analysis has become a critical component of many modern professional workflows. Data-driven workflows are inherently complex, characterized by their iterative, interactive, and often prolonged nature. Analysts rely heavily on digital input and output systems to externalize information and augment human cognitive capacity. These systems serve as crucial intermediaries between raw data and meaningful insights, facilitating the exploration, manipulation, and interpretation of large datasets. The evolution of digital tools for data analysis has seen significant advancements in user interface design, from early command-line interfaces to sophisticated graphical environments, continuously adapting to better align with users’ mental models and improve overall efficiency. Immersive technologies are rapidly evolving toward becoming a mainstream computing environment, presenting significant potential for revolutionizing data analysis practices. Virtual/augmented reality (VR/AR) systems, capable of projecting interactive screens onto any surface or immersive graphics into any space around the user, offer unprecedented possibilities for data analysis. With VR/AR, users can spatially arrange numerous data-related artifacts and intuitively interact with data through body movements. In this talk, Yalong will introduce some of his work in exploring how to take advantage of those features to build novel and effective interactive systems in VR/AR.",
          en: "Data analysis has become a critical component of many modern professional workflows. Data-driven workflows are inherently complex, characterized by their iterative, interactive, and often prolonged nature. Analysts rely heavily on digital input and output systems to externalize information and augment human cognitive capacity. These systems serve as crucial intermediaries between raw data and meaningful insights, facilitating the exploration, manipulation, and interpretation of large datasets. The evolution of digital tools for data analysis has seen significant advancements in user interface design, from early command-line interfaces to sophisticated graphical environments, continuously adapting to better align with users’ mental models and improve overall efficiency. Immersive technologies are rapidly evolving toward becoming a mainstream computing environment, presenting significant potential for revolutionizing data analysis practices. Virtual/augmented reality (VR/AR) systems, capable of projecting interactive screens onto any surface or immersive graphics into any space around the user, offer unprecedented possibilities for data analysis. With VR/AR, users can spatially arrange numerous data-related artifacts and intuitively interact with data through body movements. In this talk, Yalong will introduce some of his work in exploring how to take advantage of those features to build novel and effective interactive systems in VR/AR.",
        },
      },
      {
        name: { zh: "Hanny Wijaya", en: "Hanny Wijaya" },
        affiliation: {
          zh: "University of Pécs, Hungary",
          en: "University of Pécs, Hungary",
        },
        description: {
          zh: "Hanny Wijaya is a Doctoral Researcher in Arts and Architecture at the Marcell Breuer Doctoral School, University of Pécs, Hungary. She is also a Central European Director of CEIDA (China Europe International Design Culture Association). Hanny has been awarded honorary titles as the Distinguished Professor from Hubei Institute of Fine Arts, China, as a recognition of her achievement in research. She is involved in many art and design projects both in academic and professional fields. Working actively on many collaborative and interdisciplinary projects, Hanny intertwines mostly with contemporary art, design, and culture. She has also published books and articles in international journals and proceedings while balancing her literature works with practice-based outcomes and exhibitions.",
          en: "Hanny Wijaya is a Doctoral Researcher in Arts and Architecture at the Marcell Breuer Doctoral School, University of Pécs, Hungary. She is also a Central European Director of CEIDA (China Europe International Design Culture Association). Hanny has been awarded honorary titles as the Distinguished Professor from Hubei Institute of Fine Arts, China, as a recognition of her achievement in research. She is involved in many art and design projects both in academic and professional fields. Working actively on many collaborative and interdisciplinary projects, Hanny intertwines mostly with contemporary art, design, and culture. She has also published books and articles in international journals and proceedings while balancing her literature works with practice-based outcomes and exhibitions.",
        },
        photo: PhotoHannyWijaya,
        talk: {
          zh: "Visual and Auditory Senses for Social Awareness in Artistic Practice",
          en: "Visual and Auditory Senses for Social Awareness in Artistic Practice",
        },
        abstract: {
          zh: "Focusing on the local area of Wuhan, the project emphasizes the importance of human senses in art and design education. From the perspective of design research and artistic practice, the use of technology can support the realization of a creative mindset and give an alternative solution to social issues. By analyzing the noise pollution specifically in the Tanhualin area, this project aimed to share awareness and offer a prototype solution for visitors in the area based on the human basic sensory system, such as the visual and auditory. The element of participatory art is also embedded in the project, in order to collect data and generate information for further development. The name Tanhualin has become the core aspect of historical knowledge and visual implementation.",
          en: "Focusing on the local area of Wuhan, the project emphasizes the importance of human senses in art and design education. From the perspective of design research and artistic practice, the use of technology can support the realization of a creative mindset and give an alternative solution to social issues. By analyzing the noise pollution specifically in the Tanhualin area, this project aimed to share awareness and offer a prototype solution for visitors in the area based on the human basic sensory system, such as the visual and auditory. The element of participatory art is also embedded in the project, in order to collect data and generate information for further development. The name Tanhualin has become the core aspect of historical knowledge and visual implementation.",
        },
      },
      {
        name: { zh: "Joselyn Sim", en: "Joselyn Sim" },
        affiliation: {
          zh: "LASALLE College of the Arts, University of the Arts Singapore",
          en: "LASALLE College of the Arts, University of the Arts Singapore",
        },
        description: {
          zh: "Joselyn is a design educator who ardently advocates for the seamless integration of design thinking into education. Her visionary approach to design has not only ignited her students' creativity but also propelled them into becoming influential trailblazers within Singapore's vibrant creative industries. Commencing her career at LASALLE in 2003, Joselyn embarked as a lecturer and coordinator for the MA Design Programme in the Faculty of Design. From 2007 to 2015, she was Programme Leader for the Design Communication programme at LASALLE. In this capacity, she orchestrated profound curriculum advancements and innovative pedagogical strategies, culminating in the programme's prestigious validation by Goldsmiths, University of London in 2012. Under Joselyn's astute guidance, the design communication programme achieved remarkable achievements in regional and international design arenas. Victories at prestigious competitions such as D&AD New Blood Awards, The Young Ones, Cannes Young Lions, Red Dot, RSA awards and The Crowbar Awards underscored the excellence she cultivated within her students. Joselyn's dedication extends beyond the classroom through her work on community projects like the Yellow Ribbon Project at Changi Women's Prison, where she developed courses to enhance incarcerated women's employability through creative skills. Before LASALLE, Joselyn's global perspective was honed through roles held in Hong Kong and Australia. As a Creative Head in a Hong Kong-based content provider specializing in global branding, her projects included award-winning portals for iconic brands like MTV Asia, Asia E!Online, CNET Asia, ELLE Hong Kong, etc. Joselyn's inquisitive mind fuels her ongoing research endeavours and presented her findings at regional conferences. Her research explorations interweave issues encompassing Design Education pedagogies, Advertising, and burgeoning Social Media trends in the context of Asia. Joselyn's academic contributions have materialised in the form of published papers and dynamic presentations.",
          en: "Joselyn is a design educator who ardently advocates for the seamless integration of design thinking into education. Her visionary approach to design has not only ignited her students' creativity but also propelled them into becoming influential trailblazers within Singapore's vibrant creative industries. Commencing her career at LASALLE in 2003, Joselyn embarked as a lecturer and coordinator for the MA Design Programme in the Faculty of Design. From 2007 to 2015, she was Programme Leader for the Design Communication programme at LASALLE. In this capacity, she orchestrated profound curriculum advancements and innovative pedagogical strategies, culminating in the programme's prestigious validation by Goldsmiths, University of London in 2012. Under Joselyn's astute guidance, the design communication programme achieved remarkable achievements in regional and international design arenas. Victories at prestigious competitions such as D&AD New Blood Awards, The Young Ones, Cannes Young Lions, Red Dot, RSA awards and The Crowbar Awards underscored the excellence she cultivated within her students. Joselyn's dedication extends beyond the classroom through her work on community projects like the Yellow Ribbon Project at Changi Women's Prison, where she developed courses to enhance incarcerated women's employability through creative skills. Before LASALLE, Joselyn's global perspective was honed through roles held in Hong Kong and Australia. As a Creative Head in a Hong Kong-based content provider specializing in global branding, her projects included award-winning portals for iconic brands like MTV Asia, Asia E!Online, CNET Asia, ELLE Hong Kong, etc. Joselyn's inquisitive mind fuels her ongoing research endeavours and presented her findings at regional conferences. Her research explorations interweave issues encompassing Design Education pedagogies, Advertising, and burgeoning Social Media trends in the context of Asia. Joselyn's academic contributions have materialised in the form of published papers and dynamic presentations.",
        },
        photo: PhotoJoselynSim,
        talk: {
          zh: "Designing Plural Visual Futures: Creativity, AI and Postgraduate Design Education",
          en: "Designing Plural Visual Futures: Creativity, AI and Postgraduate Design Education",
        },
        abstract: {
          zh: "The rapid convergence of artificial intelligence, visualization, and creative technologies is transforming how knowledge is generated, interpreted, and experienced. As AI increasingly shapes how we create and engage with visual information, visualization becomes more than a technical challenge. It becomes a design challenge that demands critical, ethical, and imaginative thinking. This presentation explores how postgraduate design education can serve as a laboratory for designing visual futures through interdisciplinary, research-led practice. Drawing on projects that span AI, speculative design, social innovation, systems design and emerging technologies, it presents how designers use visualization not only to communicate information but also to question assumptions, reveal hidden relationships, and imagine alternative futures. Rather than viewing AI as a replacement for creative practice, it positions designers as facilitators of new forms of visual thinking where design, technology, and human values come together to shape a more inclusive, meaningful, and responsible futures. It champions that the next generation of designers must move beyond producing visual artefacts to designing new ways of seeing, understanding, and engaging with increasingly intelligent systems.",
          en: "The rapid convergence of artificial intelligence, visualization, and creative technologies is transforming how knowledge is generated, interpreted, and experienced. As AI increasingly shapes how we create and engage with visual information, visualization becomes more than a technical challenge. It becomes a design challenge that demands critical, ethical, and imaginative thinking. This presentation explores how postgraduate design education can serve as a laboratory for designing visual futures through interdisciplinary, research-led practice. Drawing on projects that span AI, speculative design, social innovation, systems design and emerging technologies, it presents how designers use visualization not only to communicate information but also to question assumptions, reveal hidden relationships, and imagine alternative futures. Rather than viewing AI as a replacement for creative practice, it positions designers as facilitators of new forms of visual thinking where design, technology, and human values come together to shape a more inclusive, meaningful, and responsible futures. It champions that the next generation of designers must move beyond producing visual artefacts to designing new ways of seeing, understanding, and engaging with increasingly intelligent systems.",
        },
      },
      {
        name: { zh: "Yong Wang", en: "Yong Wang" },
        affiliation: {
          zh: "College of Computing and Data Science, Nanyang Technological University",
          en: "College of Computing and Data Science, Nanyang Technological University",
        },
        description: {
          zh: "Dr. Yong Wang is a tenure-track assistant professor at the College of Computing and Data Science, Nanyang Technological University, Singapore. Before that, he was an assistant professor at the School of Computing and Information Systems, Singapore Management University (SMU). He obtained his PhD degree from the Hong Kong University of Science and Technology. His research interests include data visualization, human-AI collaboration and human-computer interaction, with a particular focus on AI-powered data visualization and visual analytics for FinTech, quantum computing and education. He was recognized as the AI 2000 Most Influential Scholar Honorable Mention in Visualization in 2024 and 2025. He won the IEEE VGTC Significant New Researcher Award in 2025. His work has been published in premier venues of data visualization, HCI and data science (e.g., IEEE VIS, IEEE TVCG, ACM CHI, EuroVis, PacificVis and KDD), and has received multiple best paper and honorable mention awards at the top conferences including IEEE VIS, ACM CHI, ACM IUI.",
          en: "Dr. Yong Wang is a tenure-track assistant professor at the College of Computing and Data Science, Nanyang Technological University, Singapore. Before that, he was an assistant professor at the School of Computing and Information Systems, Singapore Management University (SMU). He obtained his PhD degree from the Hong Kong University of Science and Technology. His research interests include data visualization, human-AI collaboration and human-computer interaction, with a particular focus on AI-powered data visualization and visual analytics for FinTech, quantum computing and education. He was recognized as the AI 2000 Most Influential Scholar Honorable Mention in Visualization in 2024 and 2025. He won the IEEE VGTC Significant New Researcher Award in 2025. His work has been published in premier venues of data visualization, HCI and data science (e.g., IEEE VIS, IEEE TVCG, ACM CHI, EuroVis, PacificVis and KDD), and has received multiple best paper and honorable mention awards at the top conferences including IEEE VIS, ACM CHI, ACM IUI.",
        },
        photo: PhotoYongWang,
        talk: {
          zh: "Rethinking Data Visualization in the Age of AI",
          en: "Rethinking Data Visualization in the Age of AI",
        },
        abstract: {
          zh: "The rapid development of artificial intelligence (AI), especially large language models, is reshaping the research landscape of data visualization. In this talk, I will introduce our recent research on how AI can support both the development and use of visualizations, including visualization adaptation, interaction authoring, privacy preservation, and onboarding. Through these projects, I will further reflect on emerging research opportunities for rethinking data visualization in the age of AI.",
          en: "The rapid development of artificial intelligence (AI), especially large language models, is reshaping the research landscape of data visualization. In this talk, I will introduce our recent research on how AI can support both the development and use of visualizations, including visualization adaptation, interaction authoring, privacy preservation, and onboarding. Through these projects, I will further reflect on emerging research opportunities for rethinking data visualization in the age of AI.",
        },
      },
    ],
  },
  {
    title: { zh: "分论坛2：内地与香港学者论坛", en: "Session 2: Scholars from Mainland China and Hong Kong" },
    speakers: [
      {
        name: { zh: "Arpit Narechania", en: "Arpit Narechania" },
        affiliation: {
          zh: "Hong Kong University of Science and Technology",
          en: "Hong Kong University of Science and Technology",
        },
        description: {
          zh: "Arpit Narechania is an Assistant Professor in the Department of Computer Science and Engineering (CSE) at the Hong Kong University of Science and Technology (HKUST). He received his PhD in Computer Science from Georgia Institute of Technology, USA, and BS (B.Tech.) in Mechanical Engineering from Indian Institute of Technology (IIT) Mandi, India. He is the recipient of the 2025 IEEE VGTC Visualization Dissertation Award and the 2020 IIT Mandi Young Achiever Alumni Award. Arpit's main research interests are in visual analytics, human-computer interaction (HCI), and applied artificial intelligence (AI), where he builds interactive tools that enable humans and AI to work together. He has collaborated with industry leaders such as Alibaba, Adobe, Microsoft, Amazon, Biren Technology, and Ford Motor Company, leading interdisciplinary projects that have resulted in multiple patents, publications, product integrations, and open-source releases. For details, check out his homepage at <a href='https://narechania.com' target='_blank'>https://narechania.com</a>.",
          en: "Arpit Narechania is an Assistant Professor in the Department of Computer Science and Engineering (CSE) at the Hong Kong University of Science and Technology (HKUST). He received his PhD in Computer Science from Georgia Institute of Technology, USA, and BS (B.Tech.) in Mechanical Engineering from Indian Institute of Technology (IIT) Mandi, India. He is the recipient of the 2025 IEEE VGTC Visualization Dissertation Award and the 2020 IIT Mandi Young Achiever Alumni Award. Arpit's main research interests are in visual analytics, human-computer interaction (HCI), and applied artificial intelligence (AI), where he builds interactive tools that enable humans and AI to work together. He has collaborated with industry leaders such as Alibaba, Adobe, Microsoft, Amazon, Biren Technology, and Ford Motor Company, leading interdisciplinary projects that have resulted in multiple patents, publications, product integrations, and open-source releases. For details, check out his homepage at <a href='https://narechania.com' target='_blank'>https://narechania.com</a>.",
        },
        photo: PhotoArpitNarechania,
        talk: {
          zh: "Human-Centric AI Tools for Visual Analytics",
          en: "Human-Centric AI Tools for Visual Analytics",
        },
        abstract: {
          zh: "Given the scale and complexity of today’s datasets, analysts face a critical challenge: an overwhelming number of decisions. Choices about what to analyze, where to focus, when to act, how to proceed, and why certain paths are taken all shape both the process and the outcomes of analysis. In addition, while AI tools increasingly assist with these decisions, they can introduce new challenges—such as hallucinations, overconfident suggestions, and added temporal overhead for verification—ultimately increasing effort and contributing to biased interpretations, overlooked insights, and flawed conclusions. In this talk, I will showcase four visual analytics tools where AI-powered systems and human users help each other during analysis. In particular, these tools (1) guide everyday web users to shop online, (2) enable online readers to fact-check data-driven articles, (3) support mapmakers in auditing maps, and (4) empower coaches to better train players.",
          en: "Given the scale and complexity of today’s datasets, analysts face a critical challenge: an overwhelming number of decisions. Choices about what to analyze, where to focus, when to act, how to proceed, and why certain paths are taken all shape both the process and the outcomes of analysis. In addition, while AI tools increasingly assist with these decisions, they can introduce new challenges—such as hallucinations, overconfident suggestions, and added temporal overhead for verification—ultimately increasing effort and contributing to biased interpretations, overlooked insights, and flawed conclusions. In this talk, I will showcase four visual analytics tools where AI-powered systems and human users help each other during analysis. In particular, these tools (1) guide everyday web users to shop online, (2) enable online readers to fact-check data-driven articles, (3) support mapmakers in auditing maps, and (4) empower coaches to better train players.",
        },
      },
      {
        name: { zh: "Xiaoyu Zhang", en: "Xiaoyu Zhang" },
        affiliation: {
          zh: "City University of Hong Kong",
          en: "City University of Hong Kong",
        },
        description: {
          zh: "Xiaoyu Zhang is a tenure-track Assistant Professor at School of Creative Media, City University of Hong Kong. Her research interests lies broadly in data visualization, education technology, human-computer interaction (HCI), human-AI collaboration, and explainable AI. She particularly focuses on integrating data visualization and artificial intelligence (AI), especially natural language processing (NLP), to explore and exploit knowledge for varies applications in education, smart manufacturing, and human well-being. Xiaoyu directs the KnowVis lab at CityU and her work has been published at top-tier journals and conferences including International Journal of Artificial Intelligence in Education, IEEE TVCG, IEEE VIS, ACM CHI, ACM IUI, IEEE PacificVis, ACL. She also received the Honorable Mention Best Paper Award at IEEE VIS 2022 and has been granted multiple US patents. Xiaoyu also served on the organization committee of AI and the Future Factory at AI House Davos 2024, IEEE VIS 2023 (Workshop), ACM DIS 2026 & 2027 . Before joining CityU, Xiaoyu was a Postdoctoral Fellow at the ETH AI Center, ETH Zurich. She received her Ph.D. degree in Computer Science from University of California, Davis. In addition to her academic pursuits, Xiaoyu has profound industrial internship and collaboration experience with leading organizations such as Meta, Microsoft Research Asia, Bosch Research, Netease Games, EthonAI, and the US National Institute of Standards and Technology (NIST).",
          en: "Xiaoyu Zhang is a tenure-track Assistant Professor at School of Creative Media, City University of Hong Kong. Her research interests lies broadly in data visualization, education technology, human-computer interaction (HCI), human-AI collaboration, and explainable AI. She particularly focuses on integrating data visualization and artificial intelligence (AI), especially natural language processing (NLP), to explore and exploit knowledge for varies applications in education, smart manufacturing, and human well-being. Xiaoyu directs the KnowVis lab at CityU and her work has been published at top-tier journals and conferences including International Journal of Artificial Intelligence in Education, IEEE TVCG, IEEE VIS, ACM CHI, ACM IUI, IEEE PacificVis, ACL. She also received the Honorable Mention Best Paper Award at IEEE VIS 2022 and has been granted multiple US patents. Xiaoyu also served on the organization committee of AI and the Future Factory at AI House Davos 2024, IEEE VIS 2023 (Workshop), ACM DIS 2026 & 2027 . Before joining CityU, Xiaoyu was a Postdoctoral Fellow at the ETH AI Center, ETH Zurich. She received her Ph.D. degree in Computer Science from University of California, Davis. In addition to her academic pursuits, Xiaoyu has profound industrial internship and collaboration experience with leading organizations such as Meta, Microsoft Research Asia, Bosch Research, Netease Games, EthonAI, and the US National Institute of Standards and Technology (NIST).",
        },
        photo: PhotoXiaoyuZhang,
        talk: {
          zh: "Knowledge Organization and Visualization for Text-Dominant Multimodal Documents",
          en: "Knowledge Organization and Visualization for Text-Dominant Multimodal Documents",
        },
        abstract: {
          zh: "The management, integration, and presentation of knowledge from documents, human expertise, and embodied practice remain a big challenge in knowledge engineering. In this talk, I will share our research into structuring and visualizing such knowledge across science, education, and cultural heritage, focusing specifically on text-dominant multimodal data. Central to this approach is how we can leverage and extend standard ontologies to convert unstructured documents into coherent, interactive learning experiences where visualization serves as the primary bridge between raw data and structured cognitive spaces. In particular, I will discuss our work in document analysis, showing how domain ontologies map text structures and enable customizable summaries, as well as educational visualization, illustrating how knowledge-centric aids can be carefully moderated to enhance textbook reading and video lectures. I will also show how these semantic and interactive techniques scale to the digital humanities through our ongoing efforts to preserve and visualize the Hong Kong Martial Arts Archives. This talk offers a glimpse into my vision where visualization doesn't just display information, but actively transforms static data into living, dynamic experiences for complex human heritage.",
          en: "The management, integration, and presentation of knowledge from documents, human expertise, and embodied practice remain a big challenge in knowledge engineering. In this talk, I will share our research into structuring and visualizing such knowledge across science, education, and cultural heritage, focusing specifically on text-dominant multimodal data. Central to this approach is how we can leverage and extend standard ontologies to convert unstructured documents into coherent, interactive learning experiences where visualization serves as the primary bridge between raw data and structured cognitive spaces. In particular, I will discuss our work in document analysis, showing how domain ontologies map text structures and enable customizable summaries, as well as educational visualization, illustrating how knowledge-centric aids can be carefully moderated to enhance textbook reading and video lectures. I will also show how these semantic and interactive techniques scale to the digital humanities through our ongoing efforts to preserve and visualize the Hong Kong Martial Arts Archives. This talk offers a glimpse into my vision where visualization doesn't just display information, but actively transforms static data into living, dynamic experiences for complex human heritage.",
        },
      },
      {
        name: { zh: "Lijie Yao", en: "Lijie Yao" },
        affiliation: {
          zh: "Xi'an Jiaotong-Liverpool University",
          en: "Xi'an Jiaotong-Liverpool University",
        },
        description: {
          zh: "Dr. Lijie Yao is an Assistant Professor at Xi’an Jiaotong-Liverpool University (XJTLU). Her research interests include visualization in motion, AI-assisted data communication, and human-AI interaction. Her work has received the Double-Innovation Doctor Program Award from Jiangsu Province, the PhD Thesis Prize from ACM AFIHM, and a Research Award from Canada Mitacs Globalink. Part of her work on visualization in motion was applied in swimming races at the 2024 Paris Olympics. Before joining XJTLU, she was a postdoctoral and doctoral researcher at Inria and a visiting researcher at the University of Calgary. She holds a Ph.D. and an M.Sc. in Computer Science from University Paris-Saclay, an Ing. in Electrical Engineering and Automation from Polytech Lille, and a B.Eng. in Electronic Information Engineering from XIDIAN University. She has published more than 20 papers in venues including IEEE TVCG and IEEE VIS. She has served on the organizing and program committees of several international conferences, including IEEE VIS, ACM ETRA, ACM VINCI, and ChinaVis. For more information, please visit <a href='https://lijieyao.com' target='_blank'>https://lijieyao.com</a>.",
          en: "Dr. Lijie Yao is an Assistant Professor at Xi’an Jiaotong-Liverpool University (XJTLU). Her research interests include visualization in motion, AI-assisted data communication, and human-AI interaction. Her work has received the Double-Innovation Doctor Program Award from Jiangsu Province, the PhD Thesis Prize from ACM AFIHM, and a Research Award from Canada Mitacs Globalink. Part of her work on visualization in motion was applied in swimming races at the 2024 Paris Olympics. Before joining XJTLU, she was a postdoctoral and doctoral researcher at Inria and a visiting researcher at the University of Calgary. She holds a Ph.D. and an M.Sc. in Computer Science from University Paris-Saclay, an Ing. in Electrical Engineering and Automation from Polytech Lille, and a B.Eng. in Electronic Information Engineering from XIDIAN University. She has published more than 20 papers in venues including IEEE TVCG and IEEE VIS. She has served on the organizing and program committees of several international conferences, including IEEE VIS, ACM ETRA, ACM VINCI, and ChinaVis. For more information, please visit <a href='https://lijieyao.com' target='_blank'>https://lijieyao.com</a>.",
        },
        photo: PhotoLijieYao,
        talk: {
          zh: "Visualization in motion",
          en: "Visualization in motion",
        },
        abstract: {
          zh: "With advances in computing technologies, visualizations have moved from paper to interactive and mobile devices. As a result, the relationship between a visualization and its viewer is no longer necessarily stationary, but may instead involve relative motion. Motion characteristics and spatial factors are thus involved when interpreting visualizations. In such contexts, motion characteristics and spatial factors may play an important role in how visualizations are interpreted. Yet we still know relatively little about how motion characteristics affect visualization readability, how visualizations can be embedded in motion contexts, and how they should be designed for use under motion. In this talk, I will introduce our work on Visualization in Motion, in which we investigate how visualizations are perceived, embedded, designed, and experienced when they move relative to their viewers.",
          en: "With advances in computing technologies, visualizations have moved from paper to interactive and mobile devices. As a result, the relationship between a visualization and its viewer is no longer necessarily stationary, but may instead involve relative motion. Motion characteristics and spatial factors are thus involved when interpreting visualizations. In such contexts, motion characteristics and spatial factors may play an important role in how visualizations are interpreted. Yet we still know relatively little about how motion characteristics affect visualization readability, how visualizations can be embedded in motion contexts, and how they should be designed for use under motion. In this talk, I will introduce our work on Visualization in Motion, in which we investigate how visualizations are perceived, embedded, designed, and experienced when they move relative to their viewers.",
        },
      },
      {
        name: { zh: "Quan Li", en: "Quan Li" },
        affiliation: {
          zh: "ShanghaiTech University",
          en: "ShanghaiTech University",
        },
        description: {
          zh: "Quan Li is a Tenured Associate Professor in the School of Information Science and Technology and Co-Director of the Visual and Data Intelligence Center at ShanghaiTech University. He earned his Ph.D. in Computer Science and Engineering from The Hong Kong University of Science and Technology and conducts research at the intersection of artificial intelligence, visual analytics, explainable machine learning, and human-computer interaction. Dr. Li is an active contributor to the academic community: he serves on the Visualization and Visual Analytics Technical Committee of the China Society of Image and Graphics, sits on the program committees of leading conferences such as IEEE VIS, ACM CHI, IUI, UIST, and ChinaVis, and reviews regularly for top-tier venues including IEEE VIS, EuroVis, PacificVis, ACM CHI, CSCW, and TVCG. Prior to his current role, he held visiting research positions at the Georgia Institute of Technology and worked as a Senior Researcher in the AI Group at WeBank, as well as at NetEase Games. His work has appeared in premier journals and conference proceedings in visualization and HCI, such as IEEE VIS, EuroVis, ACM CHI, UIST, and TVCG, and he has led and participated in projects funded by the National Natural Science Foundation of China and the National Key Research and Development Program of China. For more information, please visit his homepage: <a href='https://faculty.sist.shanghaitech.edu.cn/liquan/' target='_blank'>https://faculty.sist.shanghaitech.edu.cn/liquan/</a>.",
          en: "Quan Li is a Tenured Associate Professor in the School of Information Science and Technology and Co-Director of the Visual and Data Intelligence Center at ShanghaiTech University. He earned his Ph.D. in Computer Science and Engineering from The Hong Kong University of Science and Technology and conducts research at the intersection of artificial intelligence, visual analytics, explainable machine learning, and human-computer interaction. Dr. Li is an active contributor to the academic community: he serves on the Visualization and Visual Analytics Technical Committee of the China Society of Image and Graphics, sits on the program committees of leading conferences such as IEEE VIS, ACM CHI, IUI, UIST, and ChinaVis, and reviews regularly for top-tier venues including IEEE VIS, EuroVis, PacificVis, ACM CHI, CSCW, and TVCG. Prior to his current role, he held visiting research positions at the Georgia Institute of Technology and worked as a Senior Researcher in the AI Group at WeBank, as well as at NetEase Games. His work has appeared in premier journals and conference proceedings in visualization and HCI, such as IEEE VIS, EuroVis, ACM CHI, UIST, and TVCG, and he has led and participated in projects funded by the National Natural Science Foundation of China and the National Key Research and Development Program of China. For more information, please visit his homepage: <a href='https://faculty.sist.shanghaitech.edu.cn/liquan/' target='_blank'>https://faculty.sist.shanghaitech.edu.cn/liquan/</a>.",
        },
        photo: PhotoQuanLi,
        talk: {
          zh: "Designing for Co-Creation Across Individual, Collaborative and Marketing Contexts",
          en: "Designing for Co-Creation Across Individual, Collaborative and Marketing Contexts",
        },
        abstract: {
          zh: "Co-creative AI faces a fundamental tension: the more powerfully it generates, the more it risks displacing the very human agency it aims to support. This talk confronts that tension across three distinct contexts—individual learning, collaborative design, and marketing-driven e-commerce. Through three interactive systems, we investigate how to balance automation with human agency and expertise. Our formative studies and user evaluations reveal that effective co-creation tools must do more than generate outputs; they must scaffold user processes, translate between diverse stakeholders through visual interfaces, and mediate communication. We demonstrate that thoughtfully designed AI assistance enhances creativity, usability, and trust while preserving essential human judgment. We conclude with cross-cutting design principles for building co-creative systems adaptable to domain-specific needs within a unified framework.",
          en: "Co-creative AI faces a fundamental tension: the more powerfully it generates, the more it risks displacing the very human agency it aims to support. This talk confronts that tension across three distinct contexts—individual learning, collaborative design, and marketing-driven e-commerce. Through three interactive systems, we investigate how to balance automation with human agency and expertise. Our formative studies and user evaluations reveal that effective co-creation tools must do more than generate outputs; they must scaffold user processes, translate between diverse stakeholders through visual interfaces, and mediate communication. We demonstrate that thoughtfully designed AI assistance enhances creativity, usability, and trust while preserving essential human judgment. We conclude with cross-cutting design principles for building co-creative systems adaptable to domain-specific needs within a unified framework.",
        },
      },
    ],
  },
];

export const organizers: Speaker[] = [
  {
    name: { zh: "陈晴", en: "Qing Chen" },
    affiliation: { zh: "同济大学", en: "Tongji University" },
    photo: PhotoCQ,
  },
  {
    name: { zh: "阳芷倩", en: "Zhiqian Yang" },
    affiliation: { zh: "湖北美术学院", en: "Hubei Institute of Fine Arts" },
    photo: PhotoYZQ,
  },
];

// Word 中未提供专题讨论、分论坛主席等信息，因此没有沿用旧版中日韩论坛的 panel 数据。
export const panel: {
  title: { zh: string; en: string };
  chair?: Speaker;
  speakers: Speaker[];
} | null = null;
