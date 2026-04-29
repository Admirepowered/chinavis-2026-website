import PhotoCW from "~/assets/committee/cw.avif?inline";
import PhotoZJW from "~/assets/committee/zjw.avif?inline";
import PhotoLH from "~/assets/committee/lh.avif?inline";
import PhotoGTH from "~/assets/committee/gth.avif?inline";
import PhotoOWH from "~/assets/committee/owh.avif?inline";
import PhotoZF from "~/assets/committee/zf.avif?inline";
import PhotoHZL from "~/assets/committee/hzl.avif?inline";
import PhotoZYH from "~/assets/committee/zyh.avif?inline";
import PhotoWXM from "~/assets/committee/wxm.avif?inline";
import PhotoLLY from "~/assets/committee/lly.avif?inline";
import PhotoSXY from "~/assets/committee/sxy.avif?inline";
import PhotoZJM from "~/assets/committee/zjm.avif?inline";
import PhotoHS from "~/assets/committee/hs.avif?inline";
import PhotoZMF from "~/assets/committee/zmf.avif?inline";
import PhotoZQ from "~/assets/committee/zq.avif?inline";
import PhotoWXH from "~/assets/committee/wxh.avif?inline";
import PhotoLM from "~/assets/committee/lm.avif?inline";
import PhotoLGZ from "~/assets/committee/lgz.avif?inline";
import PhotoHH from "~/assets/committee/hh.avif?inline";
import PhotoLJing from "~/assets/committee/ljing.avif?inline";
import PhotoLYI from "~/assets/committee/lyi.avif?inline";
import PhotoDXJ from "~/assets/committee/dxj.avif?inline";
import PhotoLYII from "~/assets/committee/lyii.avif?inline";
import PhotoXK from "~/assets/committee/xk.avif?inline";
import PhotoWJC from "~/assets/committee/wjc.avif?inline";
import PhotoLYH from "~/assets/committee/lyh.avif?inline";
import PhotoCSJ from "~/assets/committee/csj.avif?inline";
import PhotoLQS from "~/assets/committee/lqs.avif?inline";
import PhotoTJ from "~/assets/committee/tj.avif?inline";
import PhotoWF from "~/assets/committee/wf.avif?inline";
import PhotoLL from "~/assets/committee/ll.avif?inline";
import PhotoWCS from "~/assets/committee/wcs.avif?inline";
import PhotoCXJ from "~/assets/committee/cxj.avif?inline";
import PhotoZY from "~/assets/committee/zy.avif?inline";
import PhotoZYU from "~/assets/committee/zyu.avif?inline";
import PhotoZJL from "~/assets/committee/zjl.avif?inline";
import PhotoCH from "~/assets/committee/ch.avif?inline";
import PhotoYZQ from "~/assets/committee/yzq.avif?inline";
import PhotoYWK from "~/assets/committee/ywk.avif?inline";
import PhotoLCH from "~/assets/committee/lch.avif?inline";
import PhotoLRC from "~/assets/committee/lrc.avif?inline";
import PhotoHHB from "~/assets/committee/hhb.avif?inline";
import PhotoZHJ from "~/assets/committee/zhj.avif?inline";
import PhotoCSM from "~/assets/committee/csm.avif?inline";
import PhotoYLY from "~/assets/committee/yly.avif?inline";
import PhotoZW from "~/assets/committee/zw.avif?inline";
import PhotoLF from "~/assets/committee/lf.avif?inline";
import PhotoLFU from "~/assets/committee/lfu.avif?inline";
import PhotoHKD from "~/assets/committee/hkd.avif?inline";
import PhotoHYJ from "~/assets/committee/hyj.avif?inline";
import PhotoOYBC from "~/assets/committee/oybc.avif?inline";
import PhotoZLC from "~/assets/committee/zlc.avif?inline";
import PhotoLVJ from "~/assets/committee/lvj.avif?inline";
import PhotoST from "~/assets/committee/st.avif?inline";
import PhotoLS from "~/assets/committee/ls.avif?inline";
import PhotoCG from "~/assets/committee/cg.avif?inline";
import PhotoSW from "~/assets/committee/sw.avif?inline";
import PhotoDZH from "~/assets/committee/dzh.avif?inline";

export const zh = {
  PageTitle: "委员会成员 - ChinaVis 2026",
};

export const en = {
  PageTitle: "Committee Members - ChinaVis 2026",
};

export const committee: {
  role: { zh: string; en: string };
  members: {
    name: { zh: string; en: string };
    affiliation: { zh: string; en: string };
    photo: string;
  }[];
}[] = [
  {
    role: { zh: "大会主席", en: "General Chairs" },
    members: [
      {
        name: { zh: "张加万", en: "Jiawan Zhang" },
        affiliation: { zh: "天津大学", en: "Tianjin University" },
        photo: PhotoZJW,
      },
      {
        name: { zh: "陈为", en: "Wei Chen" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoCW,
      },
    ],
  },
  {
    role: { zh: "组织委员会主席", en: "Organizing Committee Chairs" },
    members: [
      {
        name: { zh: "龙浩", en: "Hao Long" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoLH,
      },
      {
        name: { zh: "高廷红", en: "Tinghong Gao" },
        affiliation: { zh: "贵州大学", en: "Guizhou University" },
        photo: PhotoGTH,
      },
      {
        name: { zh: "欧卫华", en: "Weihua Ou" },
        affiliation: { zh: "贵州师范大学", en: "Guizhou Normal University" },
        photo: PhotoOWH,
      },
    ],
  },
  {
    role: { zh: "宣传主席", en: "Publicity Chairs" },
    members: [
      {
        name: { zh: "赵凡", en: "Fan Zhao" },
        affiliation: {
          zh: "中国科学院新疆理化技术研究所",
          en: "Xinjiang Technical Institute of Physics and Chemistry, CAS",
        },
        photo: PhotoZF,
      },
      {
        name: { zh: "黄竹兰", en: "Zhulan Huang" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoHZL,
      },
    ],
  },
  {
    role: { zh: "宣传委员", en: "Publicity Committee Members" },
    members: [
      {
        name: { zh: "张雨禾", en: "Yuhe Zhang" },
        affiliation: { zh: "西北大学", en: "Northwest University" },
        photo: PhotoZYH,
      },
      {
        name: { zh: "王叙萌", en: "Xumeng Wang" },
        affiliation: { zh: "南开大学", en: "Nankai University" },
        photo: PhotoWXM,
      },
      {
        name: { zh: "刘丽艳", en: "Liyan Liu" },
        affiliation: {
          zh: "湖南工商大学",
          en: "Hunan University of Technology and Business",
        },
        photo: PhotoLLY,
      },
      {
        name: { zh: "史晓颖", en: "Xiaoying Shi" },
        affiliation: {
          zh: "杭州电子科技大学",
          en: "Hangzhou Dianzi University",
        },
        photo: PhotoSXY,
      },
      {
        name: { zh: "张锦明", en: "Jinming Zhang" },
        affiliation: {
          zh: "信息工程大学",
          en: "Information Engineering University",
        },
        photo: PhotoZJM,
      },
      {
        name: { zh: "黄嵩", en: "Song Huang" },
        affiliation: { zh: "新格科技", en: "Thinkgo Technology" },
        photo: PhotoHS,
      },
      {
        name: { zh: "朱闽峰", en: "Minfeng Zhu" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoZMF,
      },
      {
        name: { zh: "曾琼", en: "Qiong Zeng" },
        affiliation: { zh: "山东大学", en: "Shandong University" },
        photo: PhotoZQ,
      },
      {
        name: { zh: "王晓慧", en: "Xiaohui Wang" },
        affiliation: {
          zh: "北京科技大学",
          en: "University of Science and Technology Beijing",
        },
        photo: PhotoWXH,
      },
      {
        name: { zh: "陆旻", en: "Min Lu" },
        affiliation: { zh: "深圳大学", en: "Shenzhen University" },
        photo: PhotoLM,
      },
      {
        name: { zh: "李国政", en: "Guozheng Li" },
        affiliation: {
          zh: "北京理工大学",
          en: "Beijing Institute of Technology",
        },
        photo: PhotoLGZ,
      },
    ],
  },
  {
    role: { zh: "网站主席", en: "Website Chairs" },
    members: [
      {
        name: { zh: "黄辉", en: "Hui Huang" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoHH,
      },
      {
        name: { zh: "廖竞", en: "Jing Liao" },
        affiliation: {
          zh: "西南科技大学",
          en: "Southwest University of Science and Technology",
        },
        photo: PhotoLJing,
      },
    ],
  },
  {
    role: { zh: "赞助主席", en: "Sponsor Chairs" },
    members: [
      {
        name: { zh: "李毅", en: "Yi Li" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoLYI,
      },
      {
        name: { zh: "董笑菊", en: "Xiaoju Dong" },
        affiliation: {
          zh: "上海交通大学",
          en: "Shanghai Jiao Tong University",
        },
        photo: PhotoDXJ,
      },
    ],
  },
  {
    role: { zh: "财务主席", en: "Finance Chair" },
    members: [
      {
        name: { zh: "李艺", en: "Yi Li" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoLYII,
      },
    ],
  },
  {
    role: { zh: "志愿者主席", en: "Volunteer Chairs" },
    members: [
      {
        name: { zh: "许凯", en: "Kai Xu" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoXK,
      },
      {
        name: { zh: "王伽臣", en: "Jiachen Wang" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoWJC,
      },
    ],
  },
  {
    role: { zh: "艺术项目主席", en: "Arts Program Chairs" },
    members: [
      {
        name: { zh: "刘益红", en: "Yihong Liu" },
        affiliation: { zh: "中国美术学院", en: "China Academy of Art" },
        photo: PhotoLYH,
      },
      {
        name: { zh: "蔡淑娟", en: "Shujuan Cai" },
        affiliation: {
          zh: "南京艺术学院",
          en: "Nanjing University of the Arts",
        },
        photo: PhotoCSJ,
      },
      {
        name: { zh: "李谦升", en: "Qiansheng Li" },
        affiliation: { zh: "上海大学", en: "Shanghai University" },
        photo: PhotoLQS,
      },
    ],
  },
  {
    role: { zh: "专题主席", en: "Symposium Chairs" },
    members: [
      {
        name: { zh: "陶钧", en: "Jun Tao" },
        affiliation: { zh: "中山大学", en: "Sun Yat-sen University" },
        photo: PhotoTJ,
      },
      {
        name: { zh: "王昉", en: "Fang Wang" },
        affiliation: {
          zh: "中国空气动力研究所",
          en: "China Aerodynamics Research Center",
        },
        photo: PhotoWF,
      },
    ],
  },
  {
    role: { zh: "专题委员", en: "Symposium Committee Members" },
    members: [
      {
        name: { zh: "刘乐", en: "Le Liu" },
        affiliation: {
          zh: "西北工业大学",
          en: "Northwestern Polytechnical University",
        },
        photo: PhotoLL,
      },
      {
        name: { zh: "王长松", en: "Changsong Wang" },
        affiliation: { zh: "北京大学", en: "Peking University" },
        photo: PhotoWCS,
      },
      {
        name: { zh: "陈晓皎", en: "Xiaojiao Chen" },
        affiliation: { zh: "浙江大学", en: "Zhejiang University" },
        photo: PhotoCXJ,
      },
      {
        name: { zh: "张怡", en: "Yi Zhang" },
        affiliation: { zh: "天津大学", en: "Tianjin University" },
        photo: PhotoZY,
      },
      {
        name: { zh: "张宇", en: "Yu Zhang" },
        affiliation: {
          zh: "华为技术有限公司",
          en: "Huawei",
        },
        photo: PhotoZYU,
      },
      {
        name: { zh: "左家莉", en: "Jiali Zuo" },
        affiliation: { zh: "江西师范大学", en: "Jiangxi Normal University" },
        photo: PhotoZJL,
      },
      {
        name: { zh: "陈皓", en: "Hao Chen" },
        affiliation: {
          zh: "南京艺术学院",
          en: "Nanjing University of the Arts",
        },
        photo: PhotoCH,
      },
      {
        name: { zh: "阳芷倩", en: "Zhiqian Yang" },
        affiliation: { zh: "湖北美术学院", en: "Hubei Institute of Fine Arts" },
        photo: PhotoYZQ,
      },
      {
        name: { zh: "杨维凯", en: "Weikai Yang" },
        affiliation: {
          zh: "香港科技大学（广州）",
          en: "Hong Kong University of Science and Technology (Guangzhou)",
        },
        photo: PhotoYWK,
      },
      {
        name: { zh: "李晨辉", en: "Chenhui Li" },
        affiliation: { zh: "华东师范大学", en: "East China Normal University" },
        photo: PhotoLCH,
      },
      {
        name: { zh: "刘日晨", en: "Richen Liu" },
        affiliation: { zh: "南京师范大学", en: "Nanjing Normal University" },
        photo: PhotoLRC,
      },
    ],
  },
  {
    role: {
      zh: "工业与行业应用委员会主席",
      en: "Industry and Application Committee Chair",
    },
    members: [
      {
        name: { zh: "胡海波", en: "Haibo Hu" },
        affiliation: { zh: "重庆大学", en: "Chongqing University" },
        photo: PhotoHHB,
      },
    ],
  },
  {
    role: { zh: "可视分析竞赛主席", en: "Data Challenge Chair" },
    members: [
      {
        name: { zh: "张慧杰", en: "Huijie Zhang" },
        affiliation: { zh: "东北师范大学", en: "Northeast Normal University" },
        photo: PhotoZHJ,
      },
    ],
  },
  {
    role: { zh: "论文主席", en: "Paper Chairs" },
    members: [
      {
        name: { zh: "陈思明", en: "Siming Chen" },
        affiliation: { zh: "复旦大学", en: "Fudan University" },
        photo: PhotoCSM,
      },
      {
        name: { zh: "俞凌云", en: "Lingyun Yu" },
        affiliation: {
          zh: "西交利物浦大学",
          en: "Xi'an Jiaotong-Liverpool University",
        },
        photo: PhotoYLY,
      },
      {
        name: { zh: "曾伟", en: "Wei Zeng" },
        affiliation: {
          zh: "香港科技大学（广州）",
          en: "Hong Kong University of Science and Technology (Guangzhou)",
        },
        photo: PhotoZW,
      },
    ],
  },
  {
    role: { zh: "组织委员会委员", en: "Organizing Committee Members" },
    members: [
      {
        name: { zh: "李飞", en: "Fei Li" },
        affiliation: {
          zh: "贵州省文物考古研究所",
          en: "Guizhou Provincial Institute of Cultural Relics and Archaeology",
        },
        photo: PhotoLF,
      },
      {
        name: { zh: "李甫", en: "Fu Li" },
        affiliation: {
          zh: "贵州省博物馆",
          en: "Guizhou Provincial Museum",
        },
        photo: PhotoLFU,
      },
      {
        name: { zh: "何凯迪", en: "Kaidi He" },
        affiliation: {
          zh: "云景文旅科技有限公司",
          en: "Yunjing Cultural Tourism Technology Co., Ltd.",
        },
        photo: PhotoHKD,
      },
      {
        name: { zh: "霍雨佳", en: "Yujia Huo" },
        affiliation: { zh: "贵州民族大学", en: "Guizhou Minzu University" },
        photo: PhotoHYJ,
      },
      {
        name: { zh: "欧阳柏成", en: "Baicheng Ouyang" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoOYBC,
      },
      {
        name: { zh: "赵林畅", en: "Linchang Zhao" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoZLC,
      },
      {
        name: { zh: "吕健", en: "Jian Lv" },
        affiliation: { zh: "贵州大学", en: "Guizhou University" },
        photo: PhotoLVJ,
      },
      {
        name: { zh: "宋滔", en: "Tao Song" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoST,
      },
      {
        name: { zh: "刘松", en: "Song Liu" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoLS,
      },
      {
        name: { zh: "陈刚", en: "Gang Chen" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoCG,
      },
      {
        name: { zh: "孙武", en: "Wu Sun" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoSW,
      },
      {
        name: { zh: "丁泽华", en: "Zehua Ding" },
        affiliation: { zh: "贵阳学院", en: "Guiyang University" },
        photo: PhotoDZH,
      },
    ],
  },
];
