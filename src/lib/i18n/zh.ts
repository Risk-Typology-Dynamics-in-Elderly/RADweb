import type { Translation } from "./en"

const zh: Translation = {
  common: {
    placeholder: "[Placeholder]",
  },
  nav: {
    home: "首页",
    project: "项目",
    framework: "研究框架",
    dashboard: "仪表盘演示",
    team: "团队",
    progress: "进展",
    contact: "联系",
  },
  brand: {
    name: "RAD Research Group",
    tagline: "Risk and Aging Dynamics",
    footerName: "Risk and Aging Dynamics Research Group",
    footerTagline: "RAD — Risk and Aging Dynamics",
  },
  header: {
    toggleMenu: "切换菜单",
    languageLabel: "语言",
    switchTo: "切换到中文",
  },
  home: {
    hero: {
      eyebrow: "Risk and Aging Dynamics Research Group",
      title: "Understanding risk through the lens of aging.",
      body: "The RAD Research Group investigates the dynamics of risk as they unfold across the aging process — bridging theory, data, and applied analysis.",
      ctaPrimary: "Explore the project",
      ctaSecondary: "Get in touch",
    },
    feature: {
      project: {
        eyebrow: "The Project",
        title: "[placeholder]",
        body: "[placeholder]",
        link: "Read about the project",
      },
      framework: {
        eyebrow: "The Framework",
        title: "[placeholder]",
        body: "[placeholder]",
        link: "Explore the framework",
      },
      dashboard: {
        eyebrow: "The Dashboard",
        title: "[placeholder]",
        body: "[placeholder]",
        link: "View the dashboard demo",
      },
    },
    stats: {
      researchers: "研究人员",
      ongoingProject: "进行中的项目",
      established: "成立年份",
    },
    explore: {
      title: "探索研究组",
      team: "认识成员",
      progress: "查看里程碑",
      contact: "与我们联系",
    },
    figure: "图 {{n}}",
  },
  project: {
    eyebrow: "项目",
    title: "研究背景与目标",
    description:
      "RAD 研究团队工作背后的动机、范围与目标",
    background: "背景",
    backgroundDesc:"随着人口老龄化持续加深，" +
  "养老系统面临着识别复杂且不断变化风险的巨大挑战。" +
  "传统评估方法往往较为静态、碎片化，" +
  "难以全面反映老年人多维度的风险特征，" +
  "限制了早期干预和资源优化配置。" +
  "我们的研究致力于将人工智能与数据科学应用于社区养老，" +
  "通过数据驱动的方法提升风险识别能力，" +
  "为智慧养老和精准照护提供决策支持。",
    aim: "目标",
    aimDesc: "我们致力于构建一个可解释人工智能（Explainable AI, XAI）框架，" +
  "实现老年人的多维风险画像、动态风险分级与早期预警。" +
  "项目融合机器学习与人机协同决策机制，" +
  "将复杂的健康数据转化为可解释、可应用的风险洞察。" +
  "为医疗机构和养老服务机构提供科学的辅助决策支持，" +
  "助力实现更加主动、精准、高效的健康管理与照护服务。",
  },
  framework: {
    eyebrow: "Research Framework",
    title: "A Framework for Risk and Aging Dynamics",
    description:
      "An introductory, essay-style account of the conceptual framework guiding our research.",
    posted: "Posted",
    author: "Author",
    readTime: "Read time",
    postedValue: "June 2026",
    authorValue: "RAD Research Group",
    readTimeValue: "5 min",
    conclusion: "Our research follows a three-stage framework, progressing from multidimensional assessment to dynamic prediction and real-world deployment.",
    title1: "第一阶段：多维评估体系构建",
    desc1: "我们的研究首先构建一套面向老年人的标准化多维评估体系。 " +
  "在整合现有临床评估工具和功能评估量表的基础上， " +
  "我们开发并验证涵盖生理健康、心理状态、功能能力及环境因素的综合评估量表。 " +
  "通过大规模横断面数据采集， " +
  "该评估体系能够形成标准化风险画像， " +
  "并识别老年人群体的异质性特征。",
    title2:"第二阶段：动态风险分级",
    desc2: "在多维评估的基础上， " +
  "研究进一步引入纵向数据，刻画风险随时间的演化过程。 " +
  "结合机器学习与可解释人工智能技术， " +
  "系统实现风险等级动态更新、早期预警 " +
  "以及风险变化轨迹分析，为专业人员提供科学依据。",
    title3: "第三阶段：辅助决策与场景部署",
    desc3: "最终，研究成果将部署为面向医疗机构和养老服务机构的智能辅助决策平台。 " +
  "系统坚持人机协同理念， " +
  "由人工智能提供可解释的风险分析与建议， " +
  "专业人员负责最终决策， " +
  "并结合真实场景反馈持续优化模型。",
  },
  dashboard: {
    eyebrow: "Dashboard Demo",
    title: "Coming soon",
    description:
      "Our interactive dashboard is currently in preparation. Please check back later.",
    blankTitle: "Dashboard content will appear here.",
    blankBody: "Intentionally left blank for now.",
  },
  team: {
    eyebrow: "The Team",
    title: "People behind the RAD Research Group",
    description:
      "Researchers and students working on risk and aging dynamics.",
  },
  progress: {
    eyebrow: "Progress",
    title: "What the team has done",
    description:
      "A timeline of milestones and activities accomplished by the RAD Research Group.",
    status: {
      completed: "Completed",
      inProgress: "In progress",
      planned: "Planned",
    },
    milestones: {
      kickoff: {
        title: "第一阶段 · 研究规划",
        desc: "通过系统性文献综述，明确了项目总体研究目标、研究设计与理论框架， " +
              "界定了研究范围， " +
              "并提出了面向社区老年人的多维风险评估核心研究问题， " +
              "为后续量表开发、数据采集与模型构建奠定了理论基础。"
      },
       literature: {
          title: "第二阶段 · 多维评估框架构建",
          desc: "构建了一个整合生理健康、心理健康、功能能力和环境因素的多维评估框架。 " +
                "该框架作为后续数据采集与人工智能建模的理论基础， " +
                "为整个研究提供统一的概念结构和指标体系。"
       },
      formulation: {
          title: "第三阶段 · 评估量表开发",
          desc: "通过整合国际成熟的评估工具，优化测量构念， " +
                "并针对老年人群进行题项适配与本土化设计， " +
                 "开发综合评估量表。"
      },
      collection: {
          title: "第四阶段 · 预测试准备",
          desc: "通过问卷设计、抽样策略制定、调查员培训 " +
                "以及数据采集流程规范， " +
                "完成预测试的各项准备工作， " +
                "为正式研究实施奠定基础。"
      },
       pilot: {
          title: "第五阶段 · 预测试与量表优化",
          desc: "通过开展预测试和认知访谈， " +
                "评估各条目的可理解性与适用性， " +
                "并对评估量表进行优化和完善。"
       },
      validation: {
          title: "第六阶段 · 数据采集与验证",
          desc: "开展大规模社区数据采集， " +
                "并系统评估评估框架的信度与效度， " +
                "验证其科学性、稳定性和适用性， " +
                "为后续AI模型开发提供高质量数据基础。"
      },
      modeling: {
          title: "第七阶段 · AI建模与风险分型",
          desc: "开发基于人工智能的多维风险分型、动态风险预测和预警模型。"
      },
      release: {
          title: "第八阶段 · 仪表板与平台开发",
          desc: "开发交互式仪表板与Web平台， " +
                "实现评估结果可视化， " +
                "并为社区风险管理与决策提供支持。"
      },
      deployment: {
          title: "第九阶段 · 社区部署与效果评估",
          desc: "将平台部署至社区实际应用场景， " +
                "评估系统实施效果， " +
                "并基于真实世界反馈持续优化和完善整体系统。"
      }
    },
  },
  contact: {
    eyebrow: "联系我们",
    title: "取得联系",
    description: "我们欢迎研究合作、社区伙伴关系以及学术咨询。 " +
    "欢迎联系风险与老龄化动态（RAD）研究团队。",
    channels: {
      email: "邮箱",
      address: "地址",
      online: "线上",
      phone:"电话",
  },
    emailValue: "ianyiwen.zhu@mail.utoronto.ca",
    addressValue: "中国重庆\n团队成员分布于：多伦多、温哥华、波士顿、洛杉矶及重庆",
    onlineValue: "https://github.com/Risk-Typology-Dynamics-in-Elderly",
    phoneValue: "+1 437-350-9091",
  },
  footer: {
    contact: "Contact",
    copyright: "© {{year}} RAD Research Group. All rights reserved.",
  },
}

export default zh
