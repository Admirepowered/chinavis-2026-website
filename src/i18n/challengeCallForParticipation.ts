import { marked } from "marked";

export const zh = {
  PageTitle: "可视化竞赛 - ChinaVis 2026",
  Title: "数据可视化竞赛征稿通知",
  Content: marked.parse(
    `
    ## 数据可视化竞赛简介

    数据可视化竞赛是中国可视化与可视分析大会的一个重要环节。竞赛邀请研究人员、开发人员、学生和爱好者使用他们最有效的可视化与可视分析技术和工具来完成数据分析以及可视化任务。竞赛旨在帮助研究人员、开发人员、学生和爱好者评估他们的技术和工具在解决复杂问题中的有效性、新颖性和艺术性，并促进我国可视化与可视分析相关研究与应用的发展与进步。
    
    ## 数据可视化竞赛内容
    
    本次数据可视化竞赛提供两个赛道，参赛选手可以选择其中的对应赛题进行比赛。每个赛道单独设定评委成员。
    
    ### 赛道1：数据可视化挑战赛
    
    #### 赛题 I：数据可视分析与人文创意赛
    
    京剧作为中国传统戏曲艺术的重要代表，融合了文学、表演、音乐、美术与历史文化等多重元素，承载着丰富的人物塑造、叙事结构与文化表达。大量京剧剧本不仅记录了经典舞台艺术的演化过程，也反映了不同时代背景下的社会观念、价值体系与审美特征。随着数字化整理工作的推进，京剧剧本文本数据的规模与完整性不断提升，为传统戏曲的计算分析与可视化研究提供了新的契机。
    
    本赛题基于京剧剧本数据集，鼓励参赛者结合自然语言处理、复杂网络分析、时序分析与可视化等方法，从人物关系、主题表达、叙事结构以及版本演化等多个角度，对京剧剧本展开系统分析与可视化探索。参赛者不仅需要关注单一剧本内部的文本结构与艺术特征，还需通过跨剧本、跨来源、跨流派的比较分析，挖掘京剧剧本之间潜在的结构规律、文化关联与演化趋势。
    
    大赛数据集包括跨来源、跨流派的京剧数据。此外，参赛者可结合历史文献、演出资料、戏曲音视频、角色行当知识或其他开放数据，以提升分析深度与研究价值。大赛鼓励选手在确保数据准确性的基础上，融合人工智能与可视化创新方法，推动京剧数据研究从传统文本解读迈向数据驱动的人文智能分析新范式，为中国优秀传统文化的数字化保护、学术研究与国际传播提供新的可能。
    
    请参赛者任选以下任务中的一个完成。
    
    **任务一：京剧数据可视分析挑战赛**
    
    - 基于剧本中角色的性别、年龄、身份、性格描述及唱念做打等表演提示，推断未标注角色的行当归属（如生、旦、净、丑及其细分支），并分析角色特征与行当分类之间的典型对应模式。进一步结合剧本创作年代或历史时期背景，利用数据分析和可视化等手段，探究不同时期角色-行当对应关系的变化规律（建议文字不超过800字，图片不超过5张）。
    - 请识别剧本中主要角色之间的互动关系，构建角色关系网络，并分析不同剧目（历史戏、家庭戏、公案戏等）中的角色关系网络结构特征（建议文字不超过800字，图片不超过5张）。
    - 请从剧本中提取核心主题，分析不同剧本的主题构成及其组合方式。通过跨剧本比较，总结主题表达的共性与差异，探讨是否存在具有代表性的主题组合模式及其特征（建议文字不超过800字，图片不超过5张）。
    - 请基于剧本中表演形式的标记以及剧本内容等对剧本的叙事结构进行系统分析，识别剧情发展中的关键阶段，刻画剧情起伏与节奏变化。进一步比较不同剧本在叙事结构上的差异，总结典型叙事模式及其结构特征（建议文字不超过800字，图片不超过5张）。
    - 请在前述分析基础上，综合角色关系、主题结构与叙事结构，系统分析三者之间的关联机制与差异特征。例如，探讨特定角色关系如何承载和推动主题表达，主题结构如何影响叙事策略与剧情组织，以及不同叙事方式又如何重塑角色关系的呈现与演化。通过构建可交互的可视分析系统，探索人物关系、主题表达与叙事方式之间是否存在典型的关联模式、协同演化规律或稳定结构特征。（建议文字不超过800字，图片不超过5张）
    
    **任务二：「戏韵千秋」京剧人文可视化创意赛**
    
    以“京剧文化的数字传承与智能表达”为主题，邀请参赛选手基于大赛提供的京剧剧本文本数据集或自选扩展数据集开展相关分析与创意设计，并在规定时间内完成作品。
    
    **提供数据：详细信息请见赛题I数据集。**
    
    #### 赛题 II：科学可视化挑战赛
    
    探索宇宙大尺度结构的形成是现代天体物理学的核心课题。[Nyx](https://amrex-astro.github.io/Nyx/) 是一款基于 AMReX 框架开发的并行自适应网格细化（AMR）宇宙学模拟代码。Nyx 宇宙学模拟程序以可压缩流体力学与暗物质 N 体模拟为核心，用于模拟宇宙演化过程，重点研究星系际介质以及莱曼阿尔法森林等天文现象。与显式追踪活动星系核粒子程序不同，Nyx 采用自适应网格加密技术，在计算自引力的同时，精准求解高密度区域的欧拉流体动力学过程。其模拟产生的低密度气体填充着星系间的巨大空隙，是理解暗能量、暗物质和宇宙热演化历史的主要观测手段。
    
    Nyx 数据集中的每个时间步的数据都以小端字节序(little-endian)和float32保存的文件。数据按列优先顺序存储，即先存储 z 轴数据，然后是 y 轴数据，最后是 x 轴数据。请基于提供的 Nyx 数据集完成以下任务。
    
    - 采用体数据渲染技术，并设计合适的传递函数和光照效果，展示宇宙演化中密度信息的变化（建议文字不超过800字，图片不超过5张）。
    - 基于可视化图像结果，归纳宇宙密度的演化特征，总结宇宙结构形成、星系际介质演化的核心规律，阐释可视化技术在宇宙学数据分析中的应用价值（建议文字不超过800字，图片不超过5张）。
    - 宇宙密度时序统计特征分析：早期宇宙物质分布相对均匀，密度数值高度集中于均值区间。在100个演化时间步长的暗物质引力持续作用下，宇宙物质不断聚集坍缩，整体呈现显著的“团块化”特征，密度数值波动幅度持续增大，逐步形成极端低密度宇宙空洞与极端高密度结构峰值的两极分化分布。自主统计每个时间步长的气体密度数据，构建密度对数直方图，量化追踪全域密度分布随时间的演化偏移规律（建议文字不超过800字，图片不超过5张）。
    - 相空间交互式刷选可视分析：搭建联动式交互可视分析仪表盘，实现基于相空间的筛选分析功能。支持用户在统计直方图中自定义框选特定密度区间，例如筛选占比1%的极高密度区间。系统可实时联动三维空间视图，快速渲染匹配该密度阈值的物理单元格数据，直观验证直方图高密度尾部数据与宇宙网节点致密结构的对应关系，实现统计特征与空间物理结构的双向关联分析（建议文字不超过800字，图片不超过5张）。
    
    **提供数据：详细信息请见赛题II数据集。**
    
    **<span style="color: #de0000; font-weight: 700">注：本赛道数据集为指定数据集，请勿使用自选数据集。</span>**
    
    ### 赛道2：艺术可视化竞赛
    
    艺术可视化竞赛是中国可视化与可视分析大会的一个重要环节，与可视分析挑战赛共同构成大会的数据可视化竞赛，旨在促进中国艺术可视化创作与研究的交流合作，推进人才培养。艺术可视化竞赛指定主题范围，邀请国内外学习艺术、设计及可视化的高校学生，运用自己最擅长的表现手法，在规定期限内完成艺术可视化创作。竞赛设置一系列的奖项，颁发给优秀、新颖的创作作品。
    
    竞赛对于表现手法不做限定，旨在鼓励学生最大程度的发挥想象和自由创意。艺术可视化作品要求基于真实数据，并提供原始数据片段作为评价参考。作品评估的标准在于参赛队是否能够通过视觉或听觉形式有效表现一个以数据为依据的艺术思想、观点或者概念。
    
    提交的可视化作品中允许包含由人工智能生成的内容，鼓励利用新的智能化、数字化技术探索和推动可视化创作流程与呈现形式的新方法。但请注意，作者需对人工智能生成的内容进行明确标记说明。评审委员会将会对生成内容与主题的相关性及是否违反法律、道德和公共秩序进行评估。
    
    #### 年度主题：数智林城，绿韵可视
    
    本次艺术项目主题为“数智林城，绿韵可视”。在数字经济与生态文明协同发展的时代，艺术与科技的融合成为解锁城市魅力的新钥匙，二者相辅相成，让冰冷的数据拥有温度，让生态的肌理可被看见、可被感知。在此背景下，数据既是“中国数谷”的核心动能，也是林城生态的鲜活注脚，通过可视化的艺术手法，可将贵阳的算力数据、生态数据转化为兼具科技感与自然美的视觉作品，彰显“含绿量”与“含新量”的共生之美。
    
    贵阳作为“中国数谷”，是“东数西算”工程的关键枢纽，智算占比超98%，海量数据在此汇聚、流转；同时，它也是被绿意包裹的“林城”，喀斯特地貌与森林植被交相辉映，生态文明建设成效显著，是展示数智科技与生态自然融合的绝佳载体。贵阳的生态底蕴与数字实力，是“数智林城，绿韵可视”这一主题的生动诠释，其作为西南数字经济创新基地与全国生态休闲旅游目的地的双重定位，使其成为推动可视化艺术、数字科技与生态文明深度融合的前沿阵地。同时，作为黔中经济区核心城市，贵阳承载着数字时代生态创新与绿色发展的重要使命。我们的目标是依托贵阳的独特优势，打造一个数字智能、生态美学与创意艺术相结合的平台，通过共同创造，展现数字时代生态与科技共生的无限可能。
    
    2026年第十三届中国可视化与可视分析大会艺术项目（ChinaVISAP'26）学生竞赛，现面向全国各高校在读学生（本科生、研究生均可）发起招募。本次竞赛诚邀各位热爱可视化艺术设计、富有创意的学生积极参与，展现可视化领域的青春视角与多元探索。本次学生竞赛紧扣年度主题“数智林城，绿韵可视”，要求参赛学生在该主题范围内，自主选择相关数据集进行艺术可视化创作。竞赛不限制创作表现手法，鼓励同学们充分发挥想象力与创造力，大胆突破、自由创作，通过多样化的可视化形式，呈现对“数智林城，绿韵可视”的理解与诠释，展现当代学生在可视化领域的探索热情与精彩创意。
    
    该赛道作品将由国内艺术可视化专家团进行评审，评价原则是，参赛队是否能够通过视觉、听觉等艺术形式，有效表现以自选数据为依据的艺术思想、观点或者概念。
    
    ## 参赛须知
    
    ### 报名须知
    
    欢迎全国普通高等学校（含高职）和科研院所的师生和研究人员、企事业单位的开发人员和设计师、以及可视化与可视分析的爱好者、艺术家等参与竞赛。参赛者以组队的方式报名参赛：
    
    - **赛道1：** 每队参赛者不能超过6人，外加1-2名指导老师；
    - **赛道2：** 每队参赛者不能超过4人，外加1-2名指导老师。
    
    队名规则：“单位-队长姓名”或“爱好者队-队长姓名”。例如：“天津大学-张三”、“爱好者队-李四”。每个参赛队排名第一的参赛者为队长，负责沟通事宜。非科研院所、企事业单位等单位名称请填写“爱好者队”（爱好者队表示参赛者是以个人身份组建的参赛队伍）。
    
    ### 报名方式
    
    - 竞赛采取线上报名方式，报名入口：**即将发布**。
    - 报名信息包括：通讯 Email，队名，参赛人员（队长、队员、指导老师）、手机号、Email、单位（学校学院等）、职称（学历年级等）。
    - 获奖证书署名按报名顺序印刷，学生在前，指导老师在后。
    - 一个Email只能注册一个参赛队伍，参赛队伍编号唯一，并与通讯Email绑定。
    - 忘记编号可在提交页面根据所填Email查询，请务必记住参赛的通讯Email。
    
    ### 作品提交方式
    
    竞赛作品提交采取线上提交方式，请点击提交入口链接进行作品提交，尽量避免在截止日期高峰期提交作品。
    
    **提交入口：**
    
    **赛道1作品提交链接：** **（待更新）**
    
    **赛道2作品提交链接：** **（待更新）**
    
    - 提交信息包括：参赛队伍编号、作品赛道及主题、作品名称、作品摘要（100字）以及作品提交内容。
    - 如更新作品，请用同一参赛编号再次提交作品即可，以同一参赛编号最后一次提交的同队名作品为准。作品名称以最后一次提交和作品说明文档为准。
    - 建议参考往年优秀作品，具体见“历届挑战赛优秀作品回顾”；也可以参考IEEE VIS Conference组织的IEEE VAST Challenge 的入选作品，作品库见：[http://cs.umd.edu/hcil/varepository/benchmarks.php](http://cs.umd.edu/hcil/varepository/benchmarks.php)。
    
    ### 作品提交材料要求
    
    #### 赛道1
    
      1. **作品说明文档：** 赛道1要求参赛者根据组织方提供的文档推荐模板，用图文并茂的方式介绍作品，以 Word 或 PDF 格式提交。
      2. **视频：** 赛道1要求参赛者制作带解说视频，围绕作品解释其可视分析流程，视频总长度不超过5分钟，视频数量1个，限 MP4 格式，视频大小严格要求控制在50MB以内。
      3. **作品代表性图片：** 请提供高清版本1张，限 JPG 格式，多图请拼接，图片大小不超过20MB。
    
    #### 赛道2
    
    1. **作品解读（评审用）：**
        - 1份，限 PDF 文件，<10MB。
        - 对参赛作品的必要创作解读或解说，包括原始数据的说明、作品截图及解读。
    2. **作品文件（评审用）：**
        - 作品视频或解说视频，务必提供在线链接。
        - 代表性作品图片1张，图像格式作品限制 *.jpg / *.png 类型，单张图片<20MB。
    3. **作品高清文件下载链接（展览用）：**
        - 包括全部作品高清文件、作品解读。
        - 建议百度云，确保评审期内链接有效。
        - 视频格式作品限制 *.mp4 / *.mov / *.avi 类型，<50MB。
        - 图像格式作品限制 *.jpg / *.png 类型，单张图片<20MB。
        - 只需提交电子版，无需邮寄。
    
    ## 评审规则
    
    所有参赛作品将同时提交给可视分析专家、领域专家、可视化相关的艺术家进行综合评审，评审将重点评价参赛作品的主题导向和应用价值，以及参赛作品在交互设计、数据利用程度、社会效益、分析思路与方法等方面的有效性、新颖性和艺术性。
    
    所有符合资格的团队在活动截止日期前所提交的作品将会得到评审。对于任何在截止日期之后提交的作品竞赛组织方将不予以评审，同时，主办方不对任何因电脑、互联网、移动网络故障而造成的参赛作品损坏、缺失、提交延时等后果承担责任。
    
    ## 作品等级设置
    
    竞赛委员会主席将根据专家评审结果，按比例评选出多项精彩作品。在ChinaVis 2026大会上，将为所有入选参赛队颁发等级证书，部分入选参赛队将被邀请在大会竞赛环节做现场报告。
    
    ## 重要时间节点
    
    以下时间均指北京时间日末23：59。
    
    - 网上报名截止时间：**2026年6月7日**
    - 作品提交截止时间：
      - 赛道1（数据可视化挑战赛）：**2026年6月20日**
      - 赛道2（艺术可视化竞赛）：**2026年6月10日**
    - 评审结果公布时间：**2026年7月2日**
    
    ## 作品说明文档推荐模板和数据集下载
    
    1. **赛道1-I：数据可视分析与人文创意赛**
        - 作品文档答卷模板：<a href="/2026/challenge/1-I_answerSheet.docx" target="_blank">Download</a>
        - 数据下载链接：<a href="/2026/challenge/1-I_opera_dataset.zip" target="_blank">Download</a>
    2. **赛道1-II：科学可视化挑战赛**
        - 作品文档答卷模板：<a href="/2026/challenge/1-II_answerSheet.docx" target="_blank">Download</a>
        - 数据下载链接：<a href="/2026/challenge/1-IINyx_dataset.zip" target="_blank">Download</a>
    3. **赛道2：艺术可视化竞赛**
        - 自备数据集，并提供原始数据片段作为评价参考。
    
    ## 其它说明
    
    1. 参赛作品不得违反国家相关法律法规，不得侵犯任何第三方知识产权或者其他权利。作品如引起知识产权异议和纠纷，其责任由参赛者承担；
    2. 参赛者可以使用开源或商业数据分析与可视化软件，例如：[DataV](https://data.aliyun.com/visual/datav)、[Tableau](https://www.tableau.com/)、R 和 Excel 等等，鼓励参赛者使用软件开发工具设计并实现自己的可视分析方案或艺术可视化作品，常见的可视化开发工具有 [D3](https://d3js.org/)、[ECharts](https://echarts.apache.org/zh/index.html)、[AntV](https://antv.alipay.com) 和 Processing 等等。请参赛者在作品说明文档中明确写出使用的开发工具和使用的开源或商业软件；
    3. 入选参赛队至少要有1人注册ChinaVis 2026；
    4. 赛道1入选参赛队要求将自己的参赛作品制作为海报，并参加 ChinaVis 2026 的海报张贴环节，具体要求参照海报环节，赛道2（艺术可视化赛道）的入选作品将参加艺术项目展览；
    5. 参赛作品的知识产权归参赛者所有。大会组织方有权将参赛作品、作品相关资料、参赛团队信息用于宣传品、授权媒体发布、官方网站浏览及下载、展览（含巡展）等活动项目；
    6. 参赛作品已经提交后，不得更改参赛者姓名及顺序。
    
    ## 可视化竞赛委员会
    
    **张慧杰**　东北师范大学
    
    **徐　进**　杭州师范大学
    
    **陈　静**　南京大学
    
    **张俊杰**　香港科技大学（广州）
    
    **韩　俊**　香港科技大学
    
    ## 历届挑战赛回顾
    
    - [2025年数据可视分析挑战赛](https://chinavis.org/2025/zh/challenge)
    - [2024年数据可视分析挑战赛](https://chinavis.org/2024/challenge.html)
    - [2023年数据可视分析挑战赛](http://chinavis.org/2023/challenge.html)
    - [2022年数据可视分析挑战赛](http://chinavis.org/2022/challenge.html)
    - [2021年数据可视分析挑战赛](http://chinavis.org/2021/challenge.html)
    - [2020年数据可视分析挑战赛](http://chinavis.org/2020/challenge.html)
    - [2019年数据可视分析挑战赛](http://chinavis.org/2019/challenge.html)
    - [2018年数据可视分析挑战赛](http://chinavis.org/2018/challenge.html)
    
    更多信息可访问历史网站：[http://chinavis.org/history.html](http://chinavis.org/history.html)
    `.replace(/^    /gm, ""),
    { async: false }
  ),
};

export const en = {
  PageTitle: "Data Challenge - ChinaVis 2026",
  Title: "Data Challenge - Call for Participation",
  Content: marked.parse(
    `
    ## Data Visualization Competition Introduction

    The Data Visualization Competition is an important part of the China Visualization and Visual Analytics Conference. The competition invites researchers, developers, students, and enthusiasts to use their most effective visualization and Visual Analytics techniques/tools to accomplish data analysis as well as visualization tasks. The competition aims to evaluate the effectiveness, novelty, and artistry of their techniques and tools in solving complex problems, and promote the development and advancement of research and applications related to visualization and Visual Analytics in China.
    
    ## Data Visualization Competition Content
    
    The Data Visualization Competition offers two tracks, of which the participants can choose the corresponding topic to compete. Each track has its own judges.
    
    ### Track 1: Data Visualization Challenge
    
    #### I: Data Visual Analytics and Humanities & Creativity Competition
    
    Peking Opera (Jingju), as an important representative of traditional Chinese performing arts, integrates multiple elements including literature, performance, music, fine arts, and historical culture, carrying rich character development, narrative structures, and cultural expressions. A large number of Peking Opera scripts not only record the evolution process of classical stage art but also reflect social concepts, value systems, and aesthetic characteristics across different historical periods. With the advancement of digital preservation efforts, the scale and completeness of Peking Opera script text data continue to improve, providing new opportunities for computational analysis and visualization research of traditional opera.
    
    This task is based on a Peking Opera script dataset and encourages participants to combine natural language processing, complex network analysis, temporal analysis, and visualization methods to conduct systematic analysis and visual exploration of Peking Opera scripts from multiple perspectives including character relationships, thematic expression, narrative structure, and version evolution. Participants should not only focus on the textual structure and artistic features within individual scripts but also conduct cross-script, cross-source, and cross-genre comparative analysis to uncover potential structural patterns, cultural connections, and evolutionary trends among Peking Opera scripts.
    
    The competition dataset includes Peking Opera data across different sources and genres. Additionally, participants may incorporate historical documents, performance materials, opera audio/video recordings, role type (hangdang) knowledge, or other open data to enhance analysis depth and research value. The competition encourages participants, while ensuring data accuracy, to integrate artificial intelligence and innovative visualization methods, promoting Peking Opera data research from traditional text interpretation toward data-driven humanities and intelligent analysis paradigms, and providing new possibilities for the digital preservation, academic research, and international dissemination of outstanding traditional Chinese culture.
    
    Participants may choose one of the following tasks to complete.
    
    **Task One: Peking Opera Visual Analytics Competition**
    
    - Based on characters' gender, age, identity, personality descriptions, and performance cues (singing, recitation, acting, combat) in the scripts, infer the unlabeled role types (hangdang) of characters (such as Sheng, Dan, Jing, Chou and their subcategories), and analyze typical correspondence patterns between character features and role type classifications. Further, combined with the script creation period or historical background, use data analysis and visualization methods to explore the changing patterns of character-role type correspondence across different periods (recommended text: no more than 800 words; images: no more than 5).
    - Identify interaction relationships among major characters in the scripts, construct character relationship networks, and analyze the structural characteristics of character relationship networks in different types of plays (historical plays, family plays, court case plays, etc.) (recommended text: no more than 800 words; images: no more than 5).
    - Extract core themes from the scripts, analyze the thematic composition and combination patterns of different scripts. Through cross-script comparison, summarize the commonalities and differences in thematic expression, and explore whether there are representative thematic combination patterns and their characteristics (recommended text: no more than 800 words; images: no more than 5).
    - Based on performance form markers and script content, conduct systematic analysis of the narrative structure of scripts, identify key stages in plot development, and characterize plot fluctuations and pacing changes. Further compare differences in narrative structure among different scripts, and summarize typical narrative patterns and their structural characteristics (recommended text: no more than 800 words; images: no more than 5).
    - Building upon the above analyses, comprehensively analyze the association mechanisms and differential characteristics among character relationships, thematic structure, and narrative structure. For example, explore how specific character relationships carry and drive thematic expression, how thematic structure influences narrative strategies and plot organization, and how different narrative approaches reshape the presentation and evolution of character relationships. By constructing an interactive visual analytics system, explore whether there are typical association patterns, co-evolutionary laws, or stable structural characteristics among character relationships, thematic expression, and narrative approaches (recommended text: no more than 800 words; images: no more than 5).
    
    **Task Two: 「Opera Rhyme, Millennia of Heritage」 Peking Opera Visualization Creativity Competition**
    
    With the theme "Digital Heritage and Intelligent Expression of Peking Opera Culture," this task invites participants to conduct relevant analysis and creative design based on the Peking Opera script text dataset provided by the competition or self-selected extended datasets, and to complete their works within the specified timeframe.
    
    **Provided Data: For detailed information, please refer to Track 1-I Data.**
    
    #### II: Scientific Visualization Challenge
    
    Exploring the formation of large-scale cosmic structures is a core topic in modern astrophysics. [Nyx](https://amrex-astro.github.io/Nyx/) is a parallel adaptive mesh refinement (AMR) cosmological simulation code developed based on the AMReX framework. The Nyx cosmological simulation program uses compressible hydrodynamics and dark matter N-body simulation as its core to simulate cosmic evolution processes, with a focus on studying the intergalactic medium and Lyman-alpha forest phenomena. Unlike programs that explicitly track active galactic nucleus particles, Nyx employs adaptive mesh refinement technology to accurately solve Eulerian fluid dynamics processes in high-density regions while computing self-gravity. The low-density gas produced by its simulations fills the vast voids between galaxies and serves as the primary observational means for understanding dark energy, dark matter, and the thermal history of the universe.
    
    Each timestep in the Nyx dataset is stored as a file encoded in little-endian byte order and saved in float32 format. The data are stored in column-major order: values along the z-axis are stored first, followed by the y-axis, and finally the x-axis. Please complete the following tasks based on the provided Nyx dataset.
    
    - Employ volume data rendering techniques, and design appropriate transfer functions and lighting effects to demonstrate the changes in density information during cosmic evolution (recommended text: no more than 800 words; images: no more than 5).
    - Based on visualization image results, summarize the evolutionary characteristics of cosmic density, elucidate the core laws of cosmic structure formation and intergalactic medium evolution, and explain the application value of visualization technology in cosmological data analysis (recommended text: no more than 800 words; images: no more than 5).
    - Cosmic Density Temporal Statistical Feature Analysis: In the early universe, matter distribution was relatively uniform, with density values highly concentrated around the mean. Under the continuous gravitational influence of dark matter over 100 evolution time steps, cosmic matter continuously aggregates and collapses, showing a significant "clumping" characteristic overall, with the fluctuation amplitude of density values continuously increasing, gradually forming a polarized distribution of extreme low-density cosmic voids and extreme high-density structure peaks. Independently calculate the gas density data for each time step, construct logarithmic density histograms, and quantitatively track the evolutionary shift patterns of the global density distribution over time (recommended text: no more than 800 words; images: no more than 5).
    - Phase Space Interactive Brushing Visual Analytics: Build a linked interactive visual analytics dashboard to implement phase space-based filtering and analysis functions. Support users in custom box-selection of specific density intervals in statistical histograms, such as filtering the top 1% highest density interval. The system should be able to link in real-time with the 3D spatial view, quickly render physical cell data matching the density threshold, visually verify the correspondence between high-density tail data in histograms and the dense structures of cosmic web nodes, and achieve bidirectional associative analysis between statistical features and spatial physical structures (recommended text: no more than 800 words; images: no more than 5).
    
    **Provided Data: For detailed information, please refer to Track 1-II Data.**
    
    **<span style="color: #de0000; font-weight: 700">Note: The dataset for this track is designated. Please do not use self-selected datasets.</span>**
    
    ### Track 2: Art Visualization Competition
    
    The Art Visualization Competition is an important component of the China Visualization and Visual Analytics Conference, together with the Visual Analytics Challenge constituting the conference's Data Visualization Competition. It aims to promote exchange and cooperation in art visualization creation and research in China, and to advance talent cultivation. The Art Visualization Competition specifies a theme scope and invites domestic and international university students studying art, design, and visualization to use their most proficient expressive techniques to complete art visualization creations within a specified period. The competition sets up a series of awards to be presented to outstanding and innovative works.
    
    The competition places no restrictions on expressive techniques, aiming to encourage students to maximize their imagination and creative freedom. Art visualization works must be based on real data, and original data excerpts should be provided as evaluation references. The evaluation criterion is whether the participating team can effectively express a data-based artistic idea, viewpoint, or concept through visual or auditory forms.
    
    Submitted visualization works may contain AI-generated content. The use of new intelligent and digital technologies to explore and promote new methods in visualization creation processes and presentation forms is encouraged. However, please note that authors must clearly label and explain AI-generated content. The review committee will evaluate the relevance of generated content to the theme and whether it violates laws, ethics, and public order.
    
    #### Annual Theme: Digital Intelligence in the Forest City, Green Rhyme Visualized
    
    The theme for this year's art project is "Digital Intelligence in the Forest City, Green Rhyme Visualized." In an era of synergistic development between the digital economy and ecological civilization, the fusion of art and technology has become a new key to unlocking urban charm. The two complement each other, giving cold data warmth and making ecological textures visible and perceptible. Against this backdrop, data serves as both the core driving force of the "China Data Valley" and a vivid annotation of the forest city's ecology. Through visualization art techniques, Guiyang's computing power data and ecological data can be transformed into visual works that combine technological sophistication with natural beauty, showcasing the symbiotic beauty of "green content" and "innovation content."
    
    As the "China Data Valley," Guiyang is a key hub in the "East Data West Computing" initiative, with intelligent computing accounting for over 98%. Massive data converges and flows here. At the same time, it is also a "Forest City" enveloped in greenery, where karst landforms and forest vegetation complement each other, and ecological civilization construction has achieved remarkable results. It is an excellent vehicle for showcasing the integration of digital intelligence technology and ecological nature. Guiyang's ecological foundation and digital strength vividly interpret the theme "Digital Intelligence in the Forest City, Green Rhyme Visualized." Its dual positioning as a digital economy innovation base in Southwest China and a national ecological leisure tourism destination makes it a frontier position for promoting the deep integration of visualization art, digital technology, and ecological civilization. At the same time, as the core city of the Central Guizhou Economic Zone, Guiyang carries the important mission of ecological innovation and green development in the digital age. Our goal is to rely on Guiyang's unique advantages to create a platform combining digital intelligence, ecological aesthetics, and creative art, and through co-creation, showcase the infinite possibilities of the symbiosis between ecology and technology in the digital age.
    
    The 2026 13th China Visualization and Visual Analytics Conference Art Project (ChinaVISAP'26) Student Competition is now recruiting students currently enrolled in universities nationwide (both undergraduates and graduate students are eligible). This competition sincerely invites all students who love visualization art and design and are full of creativity to actively participate, showcasing the youthful perspective and diverse exploration in the visualization field. This student competition closely follows the annual theme "Digital Intelligence in the Forest City, Green Rhyme Visualized," requiring participating students to independently select relevant datasets within this theme scope for art visualization creation. The competition places no restrictions on creative expressive techniques, encouraging students to fully utilize their imagination and creativity, boldly break through and freely create, presenting their understanding and interpretation of "Digital Intelligence in the Forest City, Green Rhyme Visualized" through diverse visualization forms, and showcasing contemporary students' enthusiasm for exploration and wonderful creativity in the visualization field.
    
    Works in this track will be reviewed by a panel of domestic art visualization experts. The evaluation principle is whether the participating team can effectively express a data-based artistic idea, viewpoint, or concept through visual, auditory, and other art forms.
    
    ## Participation Guidelines
    
    ### Registration Information
    
    Faculty, students, and researchers from national universities (including vocational colleges) and research institutes, developers and designers from enterprises and institutions, as well as visualization and visual analytics enthusiasts and artists are welcome to participate in the competition. Participants must register as teams.
    
    - **Track 1:** Each team may have no more than 6 participants, plus 1-2 advisors;
    - **Track 2:** Each team may have no more than 4 participants, plus 1-2 advisors.
    
    Team naming convention: "Institution-Team Leader Name" or "Enthusiast Team-Team Leader Name." For example: "Tianjin University-Zhang San," "Enthusiast Team-Li Si." The first-ranked participant in each team is the team leader, responsible for communication matters. For non-research institute or enterprise institution names, please fill in "Enthusiast Team" (Enthusiast Team indicates that participants have formed a team in their personal capacity).
    
    ### Registration Method
    
    - The competition adopts online registration. Registration portal: **Coming soon**.
    - Registration information includes: Contact Email, Team Name, Participants (Team Leader, Members, Advisors), Phone Number, Email, Institution (School/College, etc.), Title (Degree/Year, etc.).
    - Award certificates will be printed according to the registration order, with students listed first, followed by advisors.
    - One Email can only register one team. The team number is unique and bound to the contact Email.
    - If you forget your number, you can query it on the submission page using the registered Email. Please be sure to remember your contact Email.
    
    ### Work Submission Method
    
    Competition works must be submitted online. Please click the submission portal link to submit your work. Avoid submitting during peak hours near the deadline.
    
    **Submission portals:**
    
    **Track 1 work submission link:** (To be updated)
    **Track 2 work submission link:** (To be updated)
    
    - Submission information includes: Team number, competition track and theme, work title, work abstract (100 words), and work submission content.
    - To update your work, please resubmit using the same team number. The last submission under the same team number and team name will be considered final. The work title will be based on the last submission and work description document.
    - It is recommended to refer to previous outstanding works. For details, please see "Review of Past Challenge Outstanding Works." You may also refer to selected works from the IEEE VAST Challenge organized by the IEEE VIS Conference. The work repository can be found at: [http://cs.umd.edu/hcil/varepository/benchmarks.php](http://cs.umd.edu/hcil/varepository/benchmarks.php). 
    
    ### Work Submission Material Requirements
    
    #### Track 1
    
    1. **Work Description Document:** Track 1 requires participants to use the recommended template provided by the organizers to introduce their work in an illustrated manner, submitted in Word or PDF format.
    2. **Video:** Track 1 requires participants to produce a video with narration, explaining their visual analytics process. Total video length should not exceed 5 minutes, 1 video only, limited to MP4 format, and video size must be strictly controlled within 50MB.
    3. **Representative Work Image:** Please provide 1 high-definition version, limited to JPG format. For multiple images, please stitch them together. Image size should not exceed 20MB.
    
    #### Track 2
    
    1. **Work Interpretation (for review):**
        - 1 file, limited to PDF format, < 10MB.
        - Necessary creative interpretation or explanation of the work, including original data description, work screenshots, and interpretation.
    2. **Work File (for review):**
        - Work video or explanatory video. Please provide an online link.
        - 1 representative work image, limited to *.jpg / *.png format, single image < 20MB.
    3. **High-Definition Work File Download Link (for exhibition):**
        - Includes all high-definition work files and work interpretation.
        - Baidu Netdisk is recommended. Ensure the link remains valid during the review period.
        - Video format works limited to *.mp4 / *.mov / *.avi types, < 50MB.
        - Image format works limited to *.jpg / *.png types, single image < 20MB.
        - Only electronic versions need to be submitted; no mailing is required.
    
    ## Judging Rules
    
    All entries will be submitted to both visual analysis experts, domain experts, and visualization-related artists for comprehensive evaluation. The evaluation will focus on evaluating the thematic orientation and application value of the entries, as well as the effectiveness, novelty and artistry of the entries in terms of interaction design, degree of data utilization, social benefits, analytical ideas and methods, etc.
    
    Entries submitted by all eligible teams by the event deadline will be judged. The competition organizers will not evaluate any entries submitted after the deadline, and the organizers will not be held responsible for any damage, missing entries, or delayed submissions due to computer, Internet, or mobile network failures.
    
    ## Awards
    
    The chairman of the competition committee will select a number of exciting entries in proportion to the results of expert evaluation. At the ChinaVis 2026 conference, award certificates will be presented to all winning teams, and some of the winning teams will be invited to make on-site presentations at the competition session of the conference.
    
    ## Important Time Points
    
    China Standard Time 23:59, (UTC+8).
    
    - Deadline for online registration: **June 7, 2026**.
    - Deadline for submission of entries:
        - Track 1 (Data Visualization Challenge): **June 20, 2026**.
        - Track 2 (Art Visualization): **June 10, 2026**.
    - Announcement date for judging results: **July 02, 2026**.
    
    ## Documentation Templates and Dataset Download
    
    1. **Track 1-I: Data Visual Analytics and Humanities & Creativity Competition**
        - Work document answer template: <a href="/2026/challenge/1-I_answerSheet.docx" target="_blank">Download</a>
        - Data download link: <a href="/2026/challenge/1-I_opera_dataset.zip" target="_blank">Download</a>
    2. **Track 1-II: Scientific Visualization Challenge**
        - Work document answer template: <a href="/2026/challenge/1-II_answerSheet.docx" target="_blank">Download</a>
        - Data download link: <a href="/2026/challenge/1-IINyx_dataset.zip" target="_blank">Download</a>
    3. **Track 2: Art Visualization Competition**
        - Self-provided datasets, with original data excerpts provided as evaluation references.
    
    ## Others
    
    1. Entries must not violate relevant national laws and regulations, and must not infringe on any third party intellectual property rights or other rights. If the work gives rise to intellectual property objections and disputes, the responsibility shall be borne by the participant.
    2. Participants may use open source or commercial data analysis and visualization software, such as [DataV](https://data.aliyun.com/visual/datav), [Tableau](https://www.tableau.com/), R and Excel, etc. Participants are encouraged to use software development tools to design and implement their own visual analysis solutions or artistic visualization works. Common visualization development tools include [D3](https://d3js.org/), [ECharts](https://echarts.apache.org/zh/index.html), [AntV](https://antv.alipay.com), and Processing, etc. Participants are requested to clearly state the development tools used and the open-source or commercial software used in the documentation of the work.
    3. The winning team must have at least one person registered with ChinaVis 2026.
    4. Winning teams are required to make their entries into posters and participate in the poster session of ChinaVis 2026, with specific requirements referring to the poster session.
    5. The intellectual property rights of the entries belong to the participants. The organizers of the conference have the right to use the entries, work-related materials, and team information for promotional materials, authorized media releases, official website browsing and downloading, exhibitions (including roving exhibitions), and other activities.
    6. Names and order of participants cannot be changed after the entries have been submitted.
    
    ## Organizing Committee Of The Visualization Competition
    
    **Zhang Huijie**, Northeast Normal University
    
    **Xu Jin**, Hangzhou Normal University
    
    **Chen Jing**, Nanjing University
    
    **Zhang Junjie**, Hong Kong University of Science and Technology (Guangzhou)
    
    **Han Jun**, Hong Kong University of Science and Technology
    
    ## Previous Challenges Review
    
    - [2025 Data Visual Analytics Challenge](https://chinavis.org/2025/zh/challenge)
    - [2024 Data Visual Analytics Challenge](https://chinavis.org/2024/challenge.html)
    - [2023 Data Visual Analytics Challenge](http://chinavis.org/2023/challenge.html)
    - [2022 Data Visual Analytics Challenge](http://chinavis.org/2022/challenge.html)
    - [2021 Data Visual Analytics Challenge](http://chinavis.org/2021/challenge.html)
    - [2020 Data Visual Analytics Challenge](http://chinavis.org/2020/challenge.html)
    - [2019 Data Visual Analytics Challenge](http://chinavis.org/2019/challenge.html)
    - [2018 Data Visual Analytics Challenge](http://chinavis.org/2018/challenge.html)
    
    For more information, please visit the historical website: [http://chinavis.org/history.html](http://chinavis.org/history.html)

    `.replace(/^    /gm, ""),
    { async: false }
  ),
};
