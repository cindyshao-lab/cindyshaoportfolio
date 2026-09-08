document.getElementById("year").textContent = String(new Date().getFullYear());

const revealTargets = document.querySelectorAll(".about");

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

revealTargets.forEach((el) => observer.observe(el));

// 关于我定位时，教育/工作经历整段立刻可见，不做滚动逐步显现
function showExperienceSection() {
  const experience = document.querySelector(".experience");
  if (!experience) return;
  experience.classList.remove("reveal");
  experience.classList.add("is-visible");
}

showExperienceSection();

document.querySelectorAll('a[href="#about"]').forEach((link) => {
  link.addEventListener("click", () => {
    showExperienceSection();
  });
});

window.addEventListener("hashchange", () => {
  if (location.hash === "#about" || location.hash === "#experience") {
    showExperienceSection();
  }
});

const projects = {
  jellytoken: {
    layout: "jellytoken",
    cover: {
      title: "大模型聚合平台设计",
      role: "负责品牌设计+交互+UI视觉一体化落地",
      features: [
        {
          icon: "brand",
          title: "品牌视觉资产搭建",
          body: "搭建品牌视觉体系，输出 Logo、官网及全链路 UI，塑造科技人文产品气质。",
        },
        {
          icon: "speed",
          title: "设计研发交付效能升级",
          body: "落地 Vibe‑Coding 交付，打通设计研发，降低沟通成本，提速产品迭代。",
        },
      ],
    },
    thinking: {
      eyebrow: "大模型聚合平台全案设计",
      title: "设计思考和实际工作流",
      painsTitle: "用户痛点（目标用户：开发者、企业采购人员）",
      pains: [
        "多模型对接需维护多套密钥，接口改造成本高",
        "用量账单分散，开销难以统一管控",
        "模型稳定性参差不齐，自建容灾切换工作量大",
      ],
      goalsTitle: "设计目标",
      goals: [
        "输出核心价值：一套 Key 调用全品类大模型",
        "构建科技柔和品牌视觉，打造 IP 符号",
        "简化接入认知，引导注册试用",
      ],
      workflowTitle: "项目真实工作流",
      workflow: [
        {
          step: "01",
          title: "信息架构｜Vibe Coding 交互稿",
          desc: "直出代码，打通设计研发。",
        },
        {
          step: "02",
          title: "品牌 LOGO 设计",
          desc: "提炼基因，建立识别符号。",
        },
        {
          step: "03",
          title: "网站首页风格确立",
          desc: "定义全站视觉基调。",
        },
        {
          step: "04",
          title: "全站 UI 设计｜Vibe Coding 交付",
          desc: "高保真落地，保障体验一致。",
        },
      ],
    },
    logo: {
      eyebrow: "大模型聚合平台全案设计",
      title: "品牌 Logo 创作思路与图形推演",
      image: "assets/jellytoken-logo-board.png?v=6",
      imageAlt: "JellyToken 品牌 Logo 创作思路与图形推演",
      centeredFigure: true,
    },
    logoSchemes: {
      eyebrow: "大模型聚合平台全案设计",
      title: "Logo 方案探索",
      image: "assets/jellytoken-logo-schemes.png?v=3",
      imageAlt: "Logo 方案探索：方案1字母T与方案2果冻块形象",
      centeredFigure: true,
    },
    logoMascot: {
      eyebrow: "大模型聚合平台全案设计",
      title: "品牌 Logo 定稿与 IP 形象",
      image: "assets/jellytoken-logo-mascot.png?v=1",
      imageAlt: "JellyToken Logo 定稿与果冻块 IP 形象",
      centeredFigure: true,
    },
    logoMotion: {
      eyebrow: "大模型聚合平台全案设计",
      title: "动态化动画",
      body: "制作了动画，可应用于欢迎、加载、反馈等场景，在不干扰功能的前提下，强化品牌的趣味性与记忆点。",
      clips: [
        {
          src: "assets/jellytoken-logo-hi.gif?v=2",
          alt: "JellyToken Logo 问好动画",
        },
        {
          src: "assets/jellytoken-logo-coding.gif?v=1",
          alt: "JellyToken Logo 编程动画",
        },
      ],
    },
    homepageStyle: {
      eyebrow: "大模型聚合平台全案设计",
      title: "首页网站风格确立",
      image: "assets/jellytoken-homepage-style.png?v=1",
      imageAlt: "JellyToken 官网首页视觉风格稿",
      points: [
        {
          icon: "extract",
          title: "网站文案叙事梳理",
          body: "梳理首页文案叙事逻辑，简化技术话术，把产品价值转化成易懂的卖点；优先传递「一套 Key 调用全品类大模型」，快速建立用户对产品的认知。",
        },
        {
          icon: "tone",
          title: "首页视觉风格推导",
          body: "基于品牌内核与 Logo 视觉语言，延伸、定义整套网站首页视觉体系，让页面视觉与品牌符号保持统一。",
        },
      ],
    },
    homepageFull: {
      eyebrow: "大模型聚合平台全案设计",
      title: "首页网站风格确立",
      image: "assets/jellytoken-homepage-full.png?v=1",
      imageAlt: "JellyToken 官网首页完整视觉稿",
      url: "jellytoken.ai",
    },
    vibeCoding: {
      eyebrow: "大模型聚合平台全案设计",
      title: "交互设计 | Vibe Coding 工程化交付创新",
      image: "assets/jellytoken-vibe-coding.png?v=1",
      imageAlt: "Vibe Coding 代码与 JellyToken 模型超市界面对照",
      figureAfterModules: true,
      modulesIntro: "覆盖以下核心模块完成全部交互设计与交付。",
      modules: [
        {
          title: "密钥管理",
          items: ["多密钥创建", "密钥状态管理", "模型级限流"],
        },
        {
          title: "数据统计",
          items: [],
        },
        {
          title: "转账管理",
          items: [],
        },
        {
          title: "模型超市",
          items: ["模型展示", "模型详情"],
        },
        {
          title: "通知机制",
          items: [],
        },
        {
          title: "账号注册 / 登录",
          items: [],
        },
        {
          title: "个人中心",
          items: ["账号管理", "安全设置"],
        },
        {
          title: "实名认证",
          items: [],
        },
        {
          title: "财务管理",
          items: ["额度管理", "充值", "发票"],
        },
      ],
    },
    uiSpec: {
      eyebrow: "大模型聚合平台全案设计",
      title: "全站视觉 vibe coding 输出",
      body: "基于品牌设计基调，我们将视觉语言延展至全站，实现从设计到开发的高效协同，构建统一、可复用的产品体验。",
      video: "assets/jellytoken-site-demo.mp4",
      videoLabel: "JellyToken 全站视觉演示",
    },
  },
  manju: {
    layout: "manju",
    cover: {
      title: "漫剧生成平台",
      role: "产品全站视觉设计、核心链路交互优化",
      pageClass: "manju-cover-page",
      background:
        "面向内容创作者，提供真人影视剧、实拍视频的 AI 漫剧转绘能力。支持将中文真人视频，一键完成人物风格改写、语种翻译、台词与字幕置换，输出海外适配的漫剧成片；同时内置无限画布创作模块，支持可视化编排漫剧镜头与故事分镜。",
    },
    pages: [
      {
        type: "upgrade",
        eyebrow: "AI漫剧生成平台",
        title: "视觉升级：从问题诊断到竞品约束",
        problems: {
          title: "旧版（白-橙色）现存问题",
          bullets: [
            "浅色背景下，视频、画布画面被白色底色抢夺视觉权重，创作者难以专注审视画面内容；",
            "橙色偏向工具、活力感，缺少漫剧创作所需要的沉浸、故事、艺术氛围感；",
            "和集团「元境」品牌视觉体系割裂，没有复用集团品牌识别。",
          ],
        },
        constraints: {
          title: "竞品分析输出设计约束",
          body: "调研 AIGC 视频、漫剧与画布创作类产品后发现：暗色界面已是行业主流。",
          bullets: [
            "降低背景干扰，突出视频预览、画布素材与 AI 结果；",
            "长时编辑场景下，暗色页面比浅色更不易造成视觉疲劳；",
            "强化漫剧叙事产品所需的沉浸与故事氛围；",
            "调研的 17 款竞品均采用「暗色主题 + 小面积高亮色」模式；",
            "约 90% 竞品采用四栏专业编辑布局：左资产 / 中画布 / 右属性 / 底时间轴。",
          ],
        },
        figures: [
          {
            image: "assets/manju-old-ui-shot.png?v=4",
            imageAlt: "白橙旧版界面截图",
            caption: "图：现在的白-橙界面",
          },
          {
            image: "assets/manju-competitors.jpg?v=2",
            imageAlt: "漫剧竞品分析对照表",
            caption: "竞品分析对照表",
          },
        ],
      },
      {
        type: "scheme",
        eyebrow: "AI漫剧生成平台",
        title: "视觉升级：方案发散与选型",
        accent: "控制变量的设计探索",
        headers: ["电光绿（归档备用）", "元境紫（最终选定）"],
        rows: [
          {
            label: "主视觉",
            cells: [
              "电光绿霓虹主色 + 波点肌理",
              "集团品牌色「元境紫」+ 玻璃拟态、紫色受光光影",
            ],
          },
          {
            label: "气质",
            cells: ["AI 算力、潮流前卫", "艺术沉浸，契合漫剧故事创作"],
          },
          {
            label: "优势",
            cells: ["视觉冲击强，开发性能成本低", "承接集团品牌资产，品牌识别统一"],
          },
          {
            label: "局限",
            cells: ["与元境品牌体系脱节", "玻璃拟态实现复杂，需做性能兼容打磨"],
          },
        ],
        conclusion:
          "两套暗色方案交互、组件体系高度同源，均可满足深色沉浸体验。综合集团品牌对齐 + 漫剧艺术创作调性，选用元境紫；电光绿完整归档，作为后续辅助色储备。",
      },
      {
        type: "method",
        eyebrow: "AI漫剧生成平台",
        title: "优先打磨核心页面",
        accent: "设计方法：基线锚定法",
        body: "优先打磨高价值核心页面，输出完整视觉范式；再从中推导组件、色彩与排版规则，铺展到全站，避免一次性铺开导致风格漂移。",
        steps: [
          {
            step: "01",
            title: "核心页面精细设计（MasterGo）",
            body: "聚焦高频四页：软件首页、关键帧页、无限画布-项目列表、无限画布-详情页。",
          },
          {
            step: "02",
            title: "冻结视觉基线",
            body: "定义品牌色应用、卡片、按钮、弹窗、画布容器、层级阴影与排版节奏，形成全站约束。",
          },
          {
            step: "03",
            title: "AI 辅助落地（Vibe Coding）",
            body: "以视觉基线为约束，将规范、组件规则与页面结构通过精准提示词交给 AI 生成前端代码，承接大批量重复工作。",
          },
        ],
        image: "assets/manju-core-shots.png?v=2",
        imageAlt: "核心页面设计方法与界面示意",
      },
      {
        type: "split-features",
        eyebrow: "AI漫剧生成平台",
        title: "Vibe Coding 设计直出落地 + 系统化 UI 规范沉淀",
        images: [
          {
            image: "assets/manju-vibe-spec.png?v=6",
            imageAlt: "AI 漫剧生成平台设计规范沉淀",
          },
          {
            image: "assets/manju-vibe-code.jpg?v=1",
            imageAlt: "Vibe Coding 设计直出工程落地",
          },
        ],
        features: [
          {
            icon: "extract",
            accent: "blue",
            title: "设计直出，所见即所得",
            body: "借助Vibe Coding实时生成可交互的网页预览，在真实环境中校验光影层次与动效细节，快速迭代修正，确保最终视觉成品与设计意图高度一致，减少反复调试损耗。",
          },
          {
            icon: "system",
            accent: "purple",
            title: "智能沉淀，构建标准化体系",
            body: "利用AI工具自动扫描代码，批量梳理全站组件、样式定义、间距与色值规范，将零散的设计资产转化为可复用的工程化资源，显著降低后续开发与迭代的沟通和维护成本。",
          },
        ],
      },
      {
        type: "compare",
        eyebrow: "AI漫剧生成平台",
        title: "模块交互优化",
        before: {
          image: "assets/manju-episode-before.jpg?v=3",
          imageAlt: "原剧管理优化前",
          label: "优化前",
        },
        after: {
          image: "assets/manju-episode-after.jpg?v=1",
          imageAlt: "原剧管理优化后",
          label: "优化后",
        },
        heading: "原剧管理：全流程进度可视化",
        body: "重构项目状态流转的可视化表达，将抽象的制作节点转化为直观的进度看板。实现从策划到交付的全链路状态实时同步，消除信息盲区，让创作进度一目了然，协作更高效。",
      },
      {
        type: "compare",
        eyebrow: "AI漫剧生成平台",
        title: "模块交互优化① 资产管理",
        before: {
          image: "assets/manju-assets-before.jpg?v=3",
          imageAlt: "资产管理优化前",
          label: "优化前",
        },
        after: {
          image: "assets/manju-assets-after.jpg?v=2",
          imageAlt: "资产管理优化后",
          label: "优化后",
        },
        heading: "资产管理：信息层级与功能优化",
        body: "重塑素材详情卡片的信息架构，精简冗余功能入口，强化图片、提示词与多造型等关键信息层级；优化预览交互与合并能力，提升素材管理与绘制效率。",
      },
      {
        type: "figure",
        flush: true,
        eyebrow: "AI漫剧生成平台",
        title: "模块交互优化② 关键帧生成",
        image: "assets/manju-bleed-keyframe.png?v=6",
        imageAlt: "模块交互优化② 关键帧生成",
      },
      {
        type: "reflect",
        eyebrow: "AI漫剧生成平台",
        title: "项目收获与思考",
        body: "通过 AI 漫剧生成平台完整项目实践，不仅落地一套 AI 时代设计开发闭环工作流，也深度理解 AIGC 视频漫剧产品的业务特性：",
        items: [
          {
            label: "业务层面",
            body: "理解 AI 视频转绘、跨语种内容生成、无限分镜画布等漫剧产品核心能力，创作者的真实工作链路与使用痛点；",
          },
          {
            label: "设计层面",
            body: "暗色沉浸体系对于 AIGC 生成类产品的价值，掌握「锚点定调」基线驱动的设计方法，规避大规模改版的风格漂移；",
          },
          {
            label: "协作层面",
            body: "探索 Vibe Coding 可交互原型交付、AI 辅助规范提取、智能验收的新型产研协作模式；",
          },
          {
            label: "局限反思",
            body: "AIGC 任务存在大量异步等待、异常失败场景，提示词用法和算法优化等方面仍有大量优化空间。",
          },
        ],
      },
    ],
  },
  boyu: {
    layout: "boyu",
    intro: {
      title: "元境博域 · 藏品图鉴",
      body: "元境博域是阿里巴巴旗下专注于文旅元宇宙的云游戏服务平台，通过实时互动云渲染技术提供数字化解决方案，推动文化遗产数字化与文旅产业升级。与国内多家博物院、博物馆签署了合作协议并且是独家授权合作。",
      highlights: [
        {
          accent: "blue",
          title: "沉浸交互体验",
        },
        {
          accent: "gold",
          title: "游戏化叙事",
        },
      ],
    },
    proposition: {
      eyebrow: "藏品图鉴设计",
      title: "背景与设计命题",
      rows: [
        {
          label: "世界观要素",
          tags: ["轩辕镜", "藏品", "博域", "未来"],
        },
        {
          label: "视觉概念提炼",
          tags: ["中国古风", "文明史诗感", "科技感"],
        },
      ],
      conclusion: {
        questionLabel: "命题:",
        question: "如何设计一个适合博域文化<br />同时带有游戏趣味性的藏品图鉴?",
        goal: "目的增加用户粘性.促活跃.",
        painLabel: "用户痛点:",
        pain: "有主题、有套系、特殊藏品等较多层级",
      },
    },
    worldview: {
      eyebrow: "藏品图鉴设计",
      title: "设计底层世界观 | 文明复兴·时空碎片",
      body: "轩辕镜穿透时间，生产复刻数字化文物；<br />萃取文物内封存的时代记忆，得到本源能量「记忆之尘」；<br />将能量铸造为世界流通货币。<br />使用者化身时空拾遗者，不断打捞遗失的文明碎片，于虚实边界重构人类文明记忆拼图。",
      diagram: "assets/boyu-worldview-flow.jpg?v=1",
      diagramAlt: "轩辕镜生产文物，萃取为记忆之尘，再铸造为记忆之尘钱币",
      quote: [
        "我认为,我不仅是在设计界面，更是在创造一个让用户愿意沉浸其中的精神场域。",
        "从「轩辕镜」中窥见未来，在「文明碎片」中重塑自我，这是设计赋予产品的灵魂。",
      ],
    },
    oldIdeas: {
      eyebrow: "元境博域 · 藏品图鉴",
      title: "我试过哪些旧思路",
      lead: "我先后试了几套方案：",
      schemes: [
        {
          title: "网格画册‑树形目录",
          body: "仿文件夹式档案柜结构，上手简单、信息容量大，开发成本低、兼容性佳。",
          cons: "缺乏叙事氛围感，层级深，藏品需 3‑4 次点击访问，返回路径长，易造成操作疲劳、用户流失。",
          image: "assets/boyu-scheme-grid.jpg?v=1",
          imageAlt: "网格画册式文物图鉴示意",
        },
        {
          title: "时间轴画卷方案",
          body: "仿帛书长卷，横向无限滚动，文物卡片沿时间轨道排布，搭配时代纹样。",
          prosLabel: "优点：",
          pros: "历史叙事氛围浓厚，可感知时代脉络；国风科技融合契合文博调性，网页开发成本可控。",
          consLabel: "缺点：",
          cons: "跨时代检索不便，仅支持顺时间流浏览；不支持地域、主题维度分类，仍存在层级过深问题。",
          image: "assets/boyu-scheme-scroll.jpg?v=2",
          imageAlt: "时间轴画卷方案示意",
        },
      ],
    },
    metaphor: {
      eyebrow: "元境博域 · 藏品图鉴",
      title: "最后我找到我的比喻——时空碎片・透视放映厅方案",
      upgrades: [
        {
          accent: "blue",
          title: "结构优化重构",
          body: "合并冗余的二、三级信息层级，降低认知负荷。",
        },
        {
          accent: "orange",
          title: "形态升级：透视美学与粒子律动",
          body: "运用3D画册式透视卡片设计，结合动态悬浮粒子动效，打破传统平面视觉限制，营造出虚实交错的科技质感与空间纵深感。",
        },
        {
          accent: "purple",
          title: "体验升级：沉浸式时空放映",
          body: "定制化「放映式」转场动效，模拟时空碎片的穿梭与重组，将界面切换转化为叙事的一部分，强化「文明重现」的沉浸体验。",
        },
      ],
      image: "assets/boyu-metaphor-gallery.jpg?v=4",
      imageAlt: "时空碎片・透视放映厅方案界面示意",
    },
    implementation: {
      eyebrow: "元境博域 · 藏品图鉴",
      title: "落地成 UI 和动效",
      body: "透视只是轻度倾斜，保证手机上文字依然好读；粒子动效克制，不会抢藏品本身的风头。胶片框作为卡片容器，既承载藏品图、名字、年代，也承接 hover 时粒子流动的小动画。",
      image: "assets/boyu-ui-showcase.png?v=2",
      imageAlt: "藏品图鉴 UI 落地界面展示",
      video: "assets/boyu-activation.mp4",
      videoLabel: "激活图鉴交互演示",
    },
    closing: {
      eyebrow: "元境博域 · 藏品图鉴",
      title: "收尾价值",
      body: "数字「已收集 XX 件」、发行中等标签依然存在。但它藏在放映厅的氛围里面，增加了游戏趣味性。用户一边能快速读到统计信息，一边获得了收集类产品特有的期待感；文博不再是一份冷冰冰的清单，而是一段可以漫步的微型时空。",
    },
  },
  pingbao: {
    layout: "pingbao",
    pages: [
      {
        type: "split",
        eyebrow: "投前流程产品体验优化",
        title: "项目背景",
        sections: [
          {
            title: "业务期望",
            body: "平保代是平安保险代理的持牌代理机构。期望提高资产管理规模、获得保险业务线的销售利润。",
          },
          {
            title: "险种类型和特性",
            tags: ["投连险：非保本保息 相对稳健", "年金险：类似长期储蓄 收益稳定", "保障险：意外险、医疗险、重疾险、寿险、财产险"],
          },
          {
            title: "团队情况",
            body: "业务团队初建且主要为远程线上合作较多；产品团队归在设计团队，所以设计有了更多的困难和机遇。",
          },
        ],
        conversion: {
          title: "产品现状：原保险产品的转化数据",
          headers: [
            "流程起点：单品页点击立即投资",
            "陆金宝<br>(1148人)",
            "保险资管-金色人生<br>(2395人)",
            "投连-国华节节高<br>(3389人)",
            "年金-国华真爱年金<br>(155人)",
          ],
          rows: [
            {
              label: "投前告知点击确认",
              cells: ["100%", "89.99%", "74.74%", "61.29%"],
            },
            {
              label: "输入金额并点击确认",
              cells: [
                "90.33%",
                "82.88%",
                { value: "98.82%", rowspan: 2 },
                { value: "100%", rowspan: 2 },
              ],
            },
            {
              label: "投资确认页-曝光",
              cells: ["97.78%", "99.95%"],
            },
            {
              label: "投资确认页-勾选协议",
              cells: [
                "94.08%",
                { value: "90.05%", rowspan: 2 },
                { value: "36.8%", alert: true },
                { value: "20%", alert: true },
              ],
            },
            {
              label: "投资确认页-点击立即购买",
              cells: ["99.16%", "93.05%", "73.68%"],
            },
            {
              label: "投资完成页",
              cells: ["99.47%", "99.45%", "96.35%", "42.86%"],
            },
            {
              label: "整体转化率",
              summary: true,
              cells: [
                "80.31%",
                "60.65%",
                { value: "21.04%", alert: true },
                { value: "3.87%", alert: true },
              ],
            },
          ],
          caption: "😭 不尽人意的转化数据",
        },
      },
      {
        type: "figure",
        eyebrow: "投前流程产品体验优化",
        title: "在该项目里我负责的事情",
        image: "assets/pingbao-role.jpg?v=5",
        imageAlt: "用研、产品概念与交互设计职责",
      },
      {
        type: "figure",
        eyebrow: "投前流程产品体验优化",
        title: "用研：用户路径和关注点以及竞品投前流程对比",
        image: "assets/pingbao-research.png?v=7",
        imageAlt: "用户关注点、购买路径与竞品流程对比",
      },
      {
        type: "table",
        eyebrow: "投前流程产品体验优化",
        title: "用研结论",
        headers: ["需改善环节", "改善问题及解决路线", "竞品情况"],
        rows: [
          {
            label: "KYC问卷",
            rowspan: 2,
            issue:
              "<strong>[现状]</strong><ol><li>购买平保代产品，用户需授权获取平台 KYC；</li><li>陆基金在授权后，还需要手动确认答案并补充两道题；</li><li>使用一户通支付，则需要做一次平安银行 KYC。</li></ol>",
            competitor:
              "<strong>[蚂蚁、理财通]</strong> 全程只做一次 KYC，跨持牌主体投资时用户无感知。（蚂蚁靠联盟链技术实现集团内共享，理财通靠用户签约协议共享集团内共享，在投资流程授权，无需单独点击）",
          },
          {
            issue: "<strong>[现状]</strong> 购买不同银行理财子、信托产品时，用户需要多次做 KYC 问卷。",
            competitor:
              "<strong>[蚂蚁]</strong> 尚未上架引流模式理财子产品，信托产品靠用户签署协议同步，需点击一次；<br><strong>[理财通]</strong> 尚未上架引流模式理财子产品。",
          },
          {
            label: "个人信息同步",
            issue:
              "<strong>[现状]</strong> 目前仅可同步实名认证信息，在一户通、陆基金、平保代、保险资管、信托、理财子都需要单独补充职业、主旨等各类信息。",
            competitor: "<strong>[蚂蚁、理财通]</strong> 跨持牌主体投资时用户无感知（通过用户授权完成）。",
          },
          {
            label: "合格投资者认证",
            issue:
              "<strong>[现状]</strong> 在陆基金买私募资管、各家信托，需分别上传符合其要求的合格投资者认证材料。",
            competitor: "<strong>[蚂蚁]</strong> 各类金融资产总额可用于自动认证合格投资者（部分解决方案）。",
          },
        ],
      },
      {
        type: "figure",
        eyebrow: "投前流程产品体验优化",
        title: "场景链路分析、推导设计目标",
        image: "assets/pingbao-goals.png?v=3",
        imageAlt: "原流程问题点与设计目标推导",
      },
      {
        type: "figure",
        eyebrow: "投前流程产品体验优化",
        title: "产品详情页：研究产品特性，将偏理财的保险在设计和产品营销方式上讲故事",
        image: "assets/pingbao-detail-page.jpg?v=2",
        imageAlt: "产品详情页优化前后对比",
        fillBleed: true,
      },
      {
        type: "figure",
        eyebrow: "投前流程产品体验优化",
        title: "对比产品 — 自选新功能设计",
        image: "assets/pingbao-compare.jpg?v=2",
        imageAlt: "自选与对比功能设计",
        fillBleed: true,
      },
      {
        type: "figure",
        eyebrow: "投前流程产品体验优化",
        title: "流程链路：投前协议的体验优化",
        image: "assets/pingbao-flow.jpg?v=2",
        imageAlt: "投前协议与流程链路优化",
      },
      {
        type: "figure",
        eyebrow: "投前流程产品体验优化",
        title: "投保页优化",
        image: "assets/pingbao-apply.jpg?v=2",
        imageAlt: "投保页优化前后对比",
      },
      {
        type: "figure",
        eyebrow: "投前流程产品体验优化",
        title: "投保页优化：信息模块与方案编辑",
        lead: "自动带入陆金所已有信息，支持被保人列表与当前页修改投保方案；底部置底操作栏承载价格与确认投保。",
        image: "assets/pingbao-apply-detail.jpg?v=2",
        imageAlt: "投保人、被保人与方案模块细节",
      },
      {
        type: "figure",
        eyebrow: "保险业务购买前产品体验升级",
        title: "单品页模版",
        image: "assets/pingbao-template.jpg?v=1",
        imageAlt: "单品页标准模版与试算模块",
      },
      {
        type: "figure",
        eyebrow: "保险业务购买前产品体验升级",
        title: "原型展示：为谁投保与投保方案",
        image: "assets/pingbao-prototype.jpg?v=1",
        imageAlt: "为谁投保与保障方案原型",
      },
      {
        type: "figure",
        eyebrow: "保险业务购买前产品体验升级",
        title: "原型展示：支持 1 人与多人投保",
        image: "assets/pingbao-prototype-apply.jpg?v=1",
        imageAlt: "单人及多人投保方案原型",
      },
      {
        type: "results",
        eyebrow: "保险业务购买前产品体验升级",
        title: "项目成果",
        panels: {
          left: {
            title: "平安保代业务线搭建流程和模板",
            subtitle: "页面模板",
            bullets: [
              "标准投保流程",
              "单品页和投保页面模板(年金和保障险)",
              "投保试算配置",
            ],
            footer: "流程链路：优化了新客老客的投资和保险流程，减少了操作步骤，提升了用户使用体验",
          },
          topRight: {
            title: "接入上线新产品效率提升约50%",
            before: "全周期约50天，开发周期26天左右",
            after: "全周期约27-33天，开发周期16天左右",
            note: "投保试算未配置化的情况下，开发周期3-14天，缩短近一半",
          },
          bottomRight: {
            body: "新版上线后一个月保险产品销量环比提升一倍多。",
          },
        },
      },
    ],
  },
  tmall: {
    layout: "tmall",
    pages: [
      { image: "assets/tmall-01.png?v=2", imageAlt: "天猫海外收银台封面" },
      { image: "assets/tmall-02.jpg?v=2", imageAlt: "项目背景" },
      { image: "assets/tmall-03.jpg?v=2", imageAlt: "发现问题思考解决方法" },
      { image: "assets/tmall-04.png?v=2", imageAlt: "项目迭代" },
      { image: "assets/tmall-05.jpg?v=2", imageAlt: "天猫海外收银台体验大事记" },
      { image: "assets/tmall-06.png?v=2", imageAlt: "了解海淘用户和其支付习惯" },
      { image: "assets/tmall-07.jpg?v=2", imageAlt: "用户画像分类和支付经验总结" },
      { image: "assets/tmall-08.jpg?v=2", imageAlt: "用户研究与问卷数据分析" },
      { image: "assets/tmall-09.jpg?v=2", imageAlt: "设计原则策略" },
      { image: "assets/tmall-10.png?v=2", imageAlt: "新用户绑卡页面优化1" },
      { image: "assets/tmall-11.png?v=2", imageAlt: "新用户银行卡支付页面优化2" },
      { image: "assets/tmall-12.png?v=2", imageAlt: "敢付敢赔服务" },
      { image: "assets/tmall-13.jpg?v=2", imageAlt: "支付渠道优化" },
      { image: "assets/tmall-14.png?v=2", imageAlt: "最终方案" },
      { image: "assets/tmall-15.jpg?v=2", imageAlt: "收银台前置到购物车" },
      { image: "assets/tmall-16.jpg?v=2", imageAlt: "项目成果与客户第一奖项" },
    ],
  },
  guifan: {
    layout: "guifan",
    pages: [
      { image: "assets/guifan-02.jpg", imageAlt: "设计策略 N-1-N" },
      { image: "assets/guifan-12.jpg", imageAlt: "立项计划 · 项目背景" },
      { image: "assets/guifan-04.jpg", imageAlt: "剥离业务之后，设计的价值应该是什么" },
      { image: "assets/guifan-01.jpg", imageAlt: "横向盘点整个技术公线正在 run 的近 54 个产品" },
      { image: "assets/guifan-03.jpg", imageAlt: "设计方案" },
      { image: "assets/guifan-05.jpg", imageAlt: "分析原信息架构问题" },
      { image: "assets/guifan-13.jpg", imageAlt: "设计策略 · 样板间" },
      { image: "assets/guifan-06.jpg", imageAlt: "设计方案" },
      { image: "assets/guifan-14.jpg", imageAlt: "分子和场景组件 · Design Token 职责梳理" },
      { image: "assets/guifan-10.jpg", imageAlt: "关于 Design Token" },
      { image: "assets/guifan-19.jpg", imageAlt: "关于 Design Token：落地设计层与代码层" },
      { image: "assets/guifan-07.jpg", imageAlt: "关于 Design Token" },
      { image: "assets/guifan-16.jpg", imageAlt: "Design Token 实践详情" },
      { image: "assets/guifan-17.jpg", imageAlt: "设计规范补充展示" },
      { image: "assets/guifan-18.jpg", imageAlt: "导航部分展示补充" },
      { image: "assets/guifan-09.jpg", imageAlt: "试点成果" },
    ],
  },
  teambition: {
    layout: "teambition",
    pages: [
      { type: "image", image: "assets/teambition-01.jpg?v=2", imageAlt: "在 Teambition 的项目 · 产品设计" },
      { type: "image", image: "assets/teambition-02.jpg?v=2", imageAlt: "Teambition 产品矩阵" },
      { type: "image", image: "assets/teambition-03.jpg?v=2", imageAlt: "Teambition web" },
      { type: "image", image: "assets/teambition-04.jpg?v=2", imageAlt: "Teambition iOS" },
      {
        type: "system",
        eyebrow: "Teambition项目",
        title: "设计系统搭建：TB-DLS → Clarity Design",
        note: "初代设计规范构建｜2016-2017",
        items: [
          {
            num: "01",
            title: "业务扩张下的设计困境",
            body: "多产品线与多端视觉交互迥异，导致用户体验断层，研发还原度难以保障，品牌形象模糊。亟需统一的设计语言规范。",
          },
          {
            num: "02",
            title: "协作效率低下",
            body: "缺乏统一规范导致重复造轮子，大量时间消耗在细节对齐，迭代周期长。",
          },
          {
            num: "03",
            title: "设计资产流失",
            body: "优质设计模式与规范散落，缺乏沉淀复用，新人上手难，一致性难保障。",
          },
        ],
      },
      {
        type: "output",
        title: "产出内容",
        linkLabel: "Clarity Design",
        linkUrl: "https://design.teambition.com/",
        image: "assets/teambition-clarity-shot.jpg?v=1",
        imageAlt: "Clarity Design 设计系统站点界面",
      },
      { type: "image", image: "assets/teambition-05.jpg?v=2", imageAlt: "TB DLS" },
      {
        type: "reflect",
        title: "成果与反思：项目价值与个人成长",
        outcomesTitle: "项目核心成果",
        outcomes: [
          {
            title: "协作效率跃升",
            body: "显著减少产研重复劳动与沟通成本，将产品迭代周期缩短 30%，实现从需求到上线的高效流转，极大提升了团队响应速度。",
          },
          {
            title: "体验一致性重塑",
            body: "统一多端多产品线的视觉规范与交互逻辑，消除用户跨产品的认知负担，有效提升了品牌辨识度与产品易用性。",
          },
          {
            title: "设计资产标准化沉淀",
            body: "将优质设计模式固化为可复用的组件库、业务模板与设计规范，大幅降低新功能研发成本，为团队持续创新筑牢了坚实的基础。",
          },
          {
            title: "构建设计语言基石",
            body: "初代 TB-DLS 的实践验证了系统化设计的可行性，为后续 Clarity Design 体系的建立提供了关键的经验。",
          },
        ],
        insightsTitle: "深度认知沉淀",
        insights: [
          {
            num: "01",
            title: "务实落地优先",
            body: "设计系统需扎根业务解决实际问题，落地性优先于理论完美，脱离场景的规范只是空中楼阁。",
          },
          {
            num: "02",
            title: "产研协同桥梁",
            body: "它不仅是组件库，更是产研的通用语言，消除理解偏差，实现从设计到开发的无缝衔接与高效复刻。",
          },
          {
            num: "03",
            title: "体验基线治理",
            body: "统一基线是多产品体验一致的关键，既保障品牌识别度，又避免重复造轮子，提升研发效率。",
          },
          {
            num: "04",
            title: "持续迭代生长",
            body: "设计系统是活的生态，需随业务、技术与用户需求动态演进，而非一次性交付的静态产物。",
          },
        ],
      },
    ],
  },
  global: {
    layout: "global",
    pages: [
      { image: "assets/global-23.jpg?v=2", imageAlt: "全球化设计封面 · 个人总结" },
      { image: "assets/global-03.jpg", imageAlt: "Frame 78" },
      { image: "assets/global-08.jpg", imageAlt: "Frame 82" },
      { image: "assets/global-13.jpg", imageAlt: "Frame 83" },
      { image: "assets/global-10.jpg", imageAlt: "Frame 84" },
      { image: "assets/global-04.jpg", imageAlt: "Frame 85" },
      { image: "assets/global-02.jpg", imageAlt: "Frame 86" },
      { image: "assets/global-12.jpg", imageAlt: "Frame 87" },
      { image: "assets/global-11.jpg", imageAlt: "Frame 88" },
      { image: "assets/global-14.jpg", imageAlt: "Frame 89" },
      { image: "assets/global-15.jpg", imageAlt: "Frame 90" },
      { image: "assets/global-27.jpg", imageAlt: "Frame 91" },
      { image: "assets/global-05.jpg", imageAlt: "Frame 92" },
      { image: "assets/global-01.jpg", imageAlt: "Frame 93" },
      { image: "assets/global-16.jpg", imageAlt: "Frame 94" },
      { image: "assets/global-17.jpg", imageAlt: "Frame 95" },
      { image: "assets/global-18.jpg", imageAlt: "Frame 96" },
      { image: "assets/global-19.jpg", imageAlt: "Frame 97" },
      { image: "assets/global-20.jpg", imageAlt: "Frame 98" },
      { image: "assets/global-06.jpg", imageAlt: "Frame 108" },
      { image: "assets/global-30.jpg", imageAlt: "Frame 109" },
      { image: "assets/global-28.jpg", imageAlt: "Frame 110" },
      { image: "assets/global-29.jpg", imageAlt: "Frame 111" },
      { image: "assets/global-24.jpg", imageAlt: "Frame 70" },
      { image: "assets/global-26.jpg", imageAlt: "Frame 71" },
      { image: "assets/global-07.jpg", imageAlt: "Frame 112" },
      { image: "assets/global-21.jpg", imageAlt: "Frame 113" },
      { image: "assets/global-25.jpg", imageAlt: "Frame 75" },
      { image: "assets/global-09.jpg", imageAlt: "Frame 76" },
      { image: "assets/global-31.jpg", imageAlt: "Frame 117" },
      { image: "assets/global-22.jpg", imageAlt: "Frame 118" },
    ],
  },
  more: {
    layout: "more",
    pages: [
      { image: "assets/more-01.jpg?v=2", imageAlt: "蚂蚁设计黑客马拉松「未来Z计划」设计大赛 · 一等奖" },
      { image: "assets/more-02.jpg?v=2", imageAlt: "跨境游项目的视觉设计 · 机场头图方案" },
      { image: "assets/more-03.png?v=1", imageAlt: "游戏UI图标设计" },
      { image: "assets/more-04.png?v=1", imageAlt: "游戏UI · 背包御魂界面" },
    ],
  },
};

const overlay = document.getElementById("projectOverlay");
const overlayBody = document.getElementById("projectOverlayBody");
const overlayClose = document.getElementById("projectOverlayClose");
let lastFocus = null;

function featureIcon(type) {
  if (type === "speed") {
    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/>
      <path d="M12 12l4.2-3.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="1.4" fill="currentColor"/>
    </svg>`;
  }
  if (type === "extract") {
    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="10.5" height="10.5" rx="2.2" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="15.2" cy="15.2" r="4.6" stroke="currentColor" stroke-width="1.6"/>
    </svg>`;
  }
  if (type === "tone") {
    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2.2 2.4"/>
      <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="12" cy="12" r="1.6" fill="currentColor"/>
    </svg>`;
  }
  if (type === "check") {
    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/>
      <path d="M8.2 12.2l2.4 2.4 5.2-5.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }
  if (type === "system") {
    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9.2" y="3.8" width="5.6" height="5.6" rx="1.1" transform="rotate(45 12 6.6)" stroke="currentColor" stroke-width="1.5"/>
      <rect x="3.8" y="9.2" width="5.6" height="5.6" rx="1.1" transform="rotate(45 6.6 12)" stroke="currentColor" stroke-width="1.5"/>
      <rect x="14.6" y="9.2" width="5.6" height="5.6" rx="1.1" transform="rotate(45 17.4 12)" stroke="currentColor" stroke-width="1.5"/>
      <rect x="9.2" y="14.6" width="5.6" height="5.6" rx="1.1" transform="rotate(45 12 17.4)" stroke="currentColor" stroke-width="1.5"/>
    </svg>`;
  }
  return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" stroke="currentColor" stroke-width="1.6"/>
    <circle cx="8.2" cy="8.2" r="1.3" fill="currentColor"/>
  </svg>`;
}

function renderCoverPage(data) {
  const features = data.features || [];
  const cards = features
    .map(
      (feature) => `
      <article class="detail-feature-card${feature.accent ? ` accent-${feature.accent}` : ""}">
        <div class="detail-feature-icon">${featureIcon(feature.icon)}</div>
        <h3>${feature.title}</h3>
        <p>${feature.body}</p>
      </article>`
    )
    .join("");

  const background = data.background
    ? `<div class="detail-bg-block">
          <h3>项目背景</h3>
          <p>${data.background}</p>
        </div>`
    : "";

  const right = features.length
    ? `<div class="detail-cover-right">${cards}</div>`
    : "";

  return `
    <div class="detail-cover-page detail-text-surface${features.length ? "" : " is-single"}${data.pageClass ? ` ${data.pageClass}` : ""}">
      <div class="detail-cover-left">
        <h2 class="detail-cover-title" id="projectDetailTitle">${data.title}</h2>
        <p class="detail-role">${data.role}</p>
        ${background}
      </div>
      ${right}
    </div>
  `;
}

function renderThinkingPage(data) {
  const pains = data.pains.map((item) => `<li>${item}</li>`).join("");
  const goals = data.goals.map((item) => `<li>${item}</li>`).join("");
  const workflow = data.workflow
    .map(
      (step, index) => `
      <li class="detail-step">
        <div class="detail-step-index">
          <span class="detail-step-num">${step.step}</span>
          ${index < data.workflow.length - 1 ? '<span class="detail-step-line" aria-hidden="true"></span>' : ""}
        </div>
        <div class="detail-step-copy">
          <h4>${step.title}</h4>
          <p>${step.desc}</p>
        </div>
      </li>`
    )
    .join("");

  return `
    <div class="detail-thinking-page detail-text-surface">
      <header class="detail-thinking-header">
        <p class="detail-eyebrow">${data.eyebrow}</p>
        <h2 class="detail-thinking-title">${data.title}</h2>
      </header>
      <div class="detail-thinking-grid">
        <section>
          <h3 class="detail-accent-title">${data.painsTitle}</h3>
          <ul>${pains}</ul>
        </section>
        <section>
          <h3 class="detail-accent-title">${data.goalsTitle}</h3>
          <ul>${goals}</ul>
        </section>
      </div>
      <section class="detail-workflow">
        <h3>${data.workflowTitle}</h3>
        <ol class="detail-step-bar">${workflow}</ol>
      </section>
    </div>
  `;
}

function renderLogoPage(data) {
  const accent = data.accent
    ? `<p class="detail-logo-accent">${data.accent}</p>`
    : "";
  const modules = Array.isArray(data.modules) && data.modules.length
    ? `
      <section class="detail-module-block" aria-label="交互模块范围">
        <p class="detail-module-intro">${data.modulesIntro || ""}</p>
        <div class="detail-module-list">
          ${data.modules
            .map((mod) => {
              const items =
                mod.items && mod.items.length
                  ? `<span class="detail-module-items">${mod.items.join(" · ")}</span>`
                  : "";
              return `
                <div class="detail-module-row">
                  <span class="detail-module-name">${mod.title}</span>
                  ${items}
                </div>`;
            })
            .join("")}
        </div>
      </section>`
    : "";
  const figure = `
      <figure class="detail-logo-figure${data.figureAfterModules ? " is-after-copy" : ""}">
        <img src="${data.image}" alt="${data.imageAlt}" />
      </figure>`;
  return `
    <div class="detail-logo-page${data.centeredFigure ? " detail-logo-board-page" : ""}">
      <header class="detail-thinking-header">
        <p class="detail-eyebrow">${data.eyebrow}</p>
        <h2 class="detail-thinking-title">${data.title}</h2>
        ${accent}
      </header>
      ${data.figureAfterModules ? `${modules}${figure}` : `${figure}${modules}`}
    </div>
  `;
}

function renderLogoMotionPage(data) {
  const clips = (data.clips || [])
    .map(
      (clip) => `
      <figure class="detail-logo-motion-card">
        <img src="${clip.src}" alt="${clip.alt}" />
      </figure>`
    )
    .join("");
  const body = data.body
    ? `<p class="detail-logo-motion-body">${data.body}</p>`
    : "";

  return `
    <div class="detail-logo-page detail-logo-motion-page">
      <header class="detail-thinking-header">
        <p class="detail-eyebrow">${data.eyebrow}</p>
        <h2 class="detail-thinking-title">${data.title}</h2>
        ${body}
      </header>
      <div class="detail-logo-motion-stage" aria-label="动态化动画">
        ${clips}
      </div>
    </div>
  `;
}

function renderHomepageStylePage(data) {
  const points = (data.points || [])
    .map(
      (point) => `
      <article class="detail-style-point">
        <div class="detail-feature-icon">${featureIcon(point.icon)}</div>
        <div>
          <h3>${point.title}</h3>
          <p>${point.body}</p>
        </div>
      </article>`
    )
    .join("");

  return `
    <div class="detail-style-page">
      <div class="detail-style-left">
        <header class="detail-thinking-header">
          <p class="detail-eyebrow">${data.eyebrow}</p>
          <h2 class="detail-thinking-title">${data.title}</h2>
        </header>
        <div class="detail-style-points">${points}</div>
      </div>
      <figure class="detail-style-figure">
        <img src="${data.image}" alt="${data.imageAlt}" />
      </figure>
    </div>
  `;
}

function renderBrowserFramePage(data) {
  const url = data.url || "jellytoken.ai";
  return `
    <div class="detail-browser-page">
      <header class="detail-thinking-header">
        <p class="detail-eyebrow">${data.eyebrow || ""}</p>
        <h2 class="detail-thinking-title">${data.title}</h2>
      </header>
      <div class="detail-browser-shell">
        <div class="detail-browser-frame">
          <div class="detail-browser-chrome" aria-hidden="true">
            <div class="detail-browser-dots">
              <span></span><span></span><span></span>
            </div>
            <div class="detail-browser-url">
              <span class="detail-browser-lock" aria-hidden="true"></span>
              <span>${url}</span>
            </div>
          </div>
          <div class="detail-browser-viewport">
            <img src="${data.image}" alt="${data.imageAlt || ""}" />
          </div>
        </div>
        <p class="detail-browser-hint">可以滚动查看哦~</p>
      </div>
    </div>
  `;
}

function renderUiSpecPage(data) {
  const point = data.point;
  const pointCard = point
    ? `<article class="detail-style-point">
            <div class="detail-feature-icon">${featureIcon(point.icon)}</div>
            <div>
              <h3>${point.title}</h3>
              <p>${point.body}</p>
            </div>
          </article>`
    : "";
  return `
    <div class="detail-ui-spec-page">
      <header class="detail-thinking-header detail-ui-spec-header">
        <p class="detail-eyebrow">${data.eyebrow}</p>
        <h2 class="detail-thinking-title">${data.title}</h2>
      </header>
      <p class="detail-ui-spec-body">${data.body}</p>
      ${pointCard}
      <div class="detail-ui-spec-media">
        <div class="detail-ui-spec-video-wrap">
          <video
            src="${data.video}"
            aria-label="${data.videoLabel}"
            autoplay
            muted
            loop
            playsinline
            controls
          ></video>
        </div>
      </div>
    </div>
  `;
}

function renderDefaultPage(data) {
  const sections = (data.sections || [])
    .map((section) => {
      const bullets = section.bullets
        ? `<ul>${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : "";
      const body = section.body ? `<p>${section.body}</p>` : "";
      return `<section class="detail-section"><h3>${section.title}</h3>${body}${bullets}</section>`;
    })
    .join("");

  return `
    <div class="detail-hero">
      <p class="detail-tag">${data.tag || ""}</p>
      <h2 class="detail-title" id="projectDetailTitle">${data.title}</h2>
      <p class="detail-subtitle">${data.subtitle || ""}</p>
      <div class="detail-cover ${data.coverClass || ""}" aria-hidden="true"></div>
    </div>
    ${sections}
  `;
}


function renderManjuHeader(page, titleId) {
  const accent = page.accent
    ? `<p class="detail-logo-accent">${page.accent}</p>`
    : "";
  const idAttr = titleId ? ` id="${titleId}"` : "";
  return `
    <header class="detail-thinking-header">
      <p class="detail-eyebrow">${page.eyebrow || ""}</p>
      <h2 class="detail-thinking-title"${idAttr}>${page.title}</h2>
      ${accent}
    </header>`;
}

function renderManjuPage(page) {
  if (page.type === "bleed") {
    return `
      <section class="manju-bleed-page">
        <figure class="manju-bleed-slide">
          <img src="${page.image}" alt="${page.imageAlt || ""}" />
        </figure>
      </section>`;
  }

  const header = renderManjuHeader(page);
  if (page.type === "upgrade") {
    const problemsBullets = (page.problems?.bullets || [])
      .map((item) => `<li>${item}</li>`)
      .join("");
    const constraintsBullets = (page.constraints?.bullets || [])
      .map((item) => `<li>${item}</li>`)
      .join("");
    const figures = (page.figures || [])
      .map(
        (fig) => `
        <figure class="manju-figure manju-upgrade-figure">
          <img src="${fig.image}" alt="${fig.imageAlt || ""}" />
          ${fig.caption ? `<figcaption>${fig.caption}</figcaption>` : ""}
        </figure>`
      )
      .join("");
    return `
      <section class="manju-page manju-upgrade-page">
        ${header}
        <div class="manju-upgrade-panels">
          <div class="manju-panel">
            <h3>${page.problems?.title || ""}</h3>
            <ul>${problemsBullets}</ul>
          </div>
          <div class="manju-panel">
            <h3>${page.constraints?.title || ""}</h3>
            ${page.constraints?.body ? `<p class="manju-lead">${page.constraints.body}</p>` : ""}
            <ul>${constraintsBullets}</ul>
            ${page.constraints?.note ? `<p class="manju-note">${page.constraints.note}</p>` : ""}
          </div>
        </div>
        <div class="manju-upgrade-figures">${figures}</div>
      </section>`;
  }

  if (page.type === "split") {
    const bullets = (page.bullets || []).map((item) => `<li>${item}</li>`).join("");
    return `
      <section class="manju-page">
        ${header}
        <div class="manju-split">
          <div class="manju-panel">
            <h3>${page.panelTitle}</h3>
            <ul>${bullets}</ul>
          </div>
          <figure class="manju-figure">
            <img src="${page.image}" alt="${page.imageAlt || ""}" />
            ${page.caption ? `<figcaption>${page.caption}</figcaption>` : ""}
          </figure>
        </div>
      </section>`;
  }

  if (page.type === "constraints") {
    const bullets = (page.bullets || []).map((item) => `<li>${item}</li>`).join("");
    return `
      <section class="manju-page">
        ${header}
        <div class="manju-constraints">
          <div class="manju-panel">
            <h3>${page.panelTitle}</h3>
            <p class="manju-lead">${page.body || ""}</p>
            <ul>${bullets}</ul>
            ${page.note ? `<p class="manju-note">${page.note}</p>` : ""}
          </div>
          <figure class="manju-figure manju-figure-tall">
            <img src="${page.image}" alt="${page.imageAlt || ""}" />
            ${page.caption ? `<figcaption>${page.caption}</figcaption>` : ""}
          </figure>
        </div>
      </section>`;
  }

  if (page.type === "scheme") {
    const head = (page.headers || [])
      .map((item, i) => `<th class="${i === 1 ? "is-selected" : ""}">${item}</th>`)
      .join("");
    const rows = (page.rows || [])
      .map((row) => {
        const cells = row.cells
          .map((cell, i) => `<td class="${i === 1 ? "is-selected" : ""}">${cell}</td>`)
          .join("");
        return `<tr><th scope="row">${row.label}</th>${cells}</tr>`;
      })
      .join("");
    return `
      <section class="manju-page detail-text-surface">
        ${header}
        <div class="manju-scheme-wrap">
          <table class="manju-scheme-table">
            <thead><tr><th></th>${head}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
          <div class="manju-conclusion">
            <p class="manju-conclusion-label">选型结论</p>
            <p>${page.conclusion}</p>
          </div>
        </div>
      </section>`;
  }

  if (page.type === "method") {
    const steps = (page.steps || [])
      .map(
        (step) => `
        <article class="manju-step-card">
          <p class="manju-step-num">${step.step}</p>
          <h3>${step.title}</h3>
          <p>${step.body}</p>
        </article>`
      )
      .join("");
    return `
      <section class="manju-page">
        ${header}
        <p class="manju-lead">${page.body || ""}</p>
        <div class="manju-method-grid">${steps}</div>
        <figure class="manju-figure manju-figure-wide">
          <img src="${page.image}" alt="${page.imageAlt || ""}" />
        </figure>
      </section>`;
  }

  if (page.type === "compare") {
    return `
      <section class="manju-page manju-compare-page">
        ${header}
        <div class="manju-compare-grid">
          <figure class="manju-compare-figure">
            <img src="${page.before.image}" alt="${page.before.imageAlt || ""}" />
            <figcaption>${page.before.label || "优化前"}</figcaption>
          </figure>
          <figure class="manju-compare-figure is-after">
            <img src="${page.after.image}" alt="${page.after.imageAlt || ""}" />
            <figcaption>${page.after.label || "优化后"}</figcaption>
          </figure>
        </div>
        <div class="manju-module-copy">
          <h3>${page.heading || ""}</h3>
          <p>${page.body || ""}</p>
        </div>
      </section>`;
  }

  if (page.type === "figure") {
    if (page.flush) {
      return `
      <section class="manju-page manju-figure-page">
        ${header}
        <figure class="manju-bleed-slide manju-figure-flush">
          <img src="${page.image}" alt="${page.imageAlt || ""}" />
        </figure>
      </section>`;
    }
    return `
      <section class="manju-page">
        ${header}
        <figure class="manju-figure manju-figure-wide">
          <img src="${page.image}" alt="${page.imageAlt || ""}" />
        </figure>
      </section>`;
  }

  if (page.type === "split-features") {
    const cards = (page.features || [])
      .map(
        (feature) => `
        <article class="detail-feature-card${feature.accent ? ` accent-${feature.accent}` : ""}">
          <div class="detail-feature-icon">${featureIcon(feature.icon)}</div>
          <h3>${feature.title}</h3>
          <p>${feature.body}</p>
        </article>`
      )
      .join("");

    if (page.images && page.images.length >= 2) {
      const [spec, code] = page.images;
      return `
      <section class="manju-page manju-vibe-page">
        ${header}
        <div class="manju-vibe-layout">
          <figure class="manju-vibe-spec">
            <img src="${spec.image}" alt="${spec.imageAlt || ""}" />
          </figure>
          <div class="manju-vibe-side">
            <figure class="manju-vibe-code">
              <img src="${code.image}" alt="${code.imageAlt || ""}" />
            </figure>
            <div class="manju-feature-stack">${cards}</div>
          </div>
        </div>
        ${page.caption ? `<p class="manju-pair-caption">${page.caption}</p>` : ""}
      </section>`;
    }

    const media =
      page.images && page.images.length
        ? `<div class="manju-pair-figures">
            ${page.images
              .map(
                (fig) => `
              <figure class="manju-pair-figure">
                <img src="${fig.image}" alt="${fig.imageAlt || ""}" />
              </figure>`
              )
              .join("")}
          </div>
          ${page.caption ? `<p class="manju-pair-caption">${page.caption}</p>` : ""}`
        : `<figure class="manju-figure">
            <img src="${page.image}" alt="${page.imageAlt || ""}" />
            ${page.caption ? `<figcaption>${page.caption}</figcaption>` : ""}
          </figure>`;
    return `
      <section class="manju-page">
        ${header}
        <div class="manju-split manju-split-features">
          <div class="manju-split-media">${media}</div>
          <div class="manju-feature-stack">${cards}</div>
        </div>
      </section>`;
  }

  if (page.type === "module") {
    return `
      <section class="manju-page">
        ${header}
        <div class="manju-module-copy">
          <h3>${page.heading}</h3>
          <p>${page.body}</p>
        </div>
        <figure class="manju-figure manju-figure-wide">
          <img src="${page.image}" alt="${page.imageAlt || ""}" />
        </figure>
      </section>`;
  }

  if (page.type === "reflect") {
    const items = (page.items || [])
      .map(
        (item) => `
        <article class="manju-reflect-card">
          <h3>${item.label}</h3>
          <p>${item.body}</p>
        </article>`
      )
      .join("");
    return `
      <section class="manju-page manju-reflect-page detail-text-surface">
        ${header}
        <p class="manju-lead">${page.body || ""}</p>
        <div class="manju-reflect-grid">${items}</div>
      </section>`;
  }

  if (page.type === "loop") {
    const cards = (page.cards || [])
      .map(
        (card) => `
        <article class="manju-step-card">
          <p class="manju-step-num">${card.step}</p>
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>`
      )
      .join("");
    return `
      <section class="manju-page detail-text-surface">
        ${header}
        <p class="manju-lead">${page.body || ""}</p>
        <div class="manju-method-grid">${cards}</div>
      </section>`;
  }

  return "";
}

function renderManjuProject(data) {
  const pages = data.pages || [];
  const pagesHtml = pages
    .map((page, index) => {
      const html = renderManjuPage(page);
      if (index === 0) return html;
      const prev = pages[index - 1];
      const tight =
        page.type === "bleed" && prev.type === "bleed"
          ? " manju-bleed-divider"
          : "";
      return `<div class="detail-page-divider${tight}" aria-hidden="true"></div>${html}`;
    })
    .join("");
  return `
    <div class="detail-scroll-stack">
      ${renderCoverPage(data.cover)}
      <div class="detail-page-divider" aria-hidden="true"></div>
      ${pagesHtml}
    </div>`;
}


function renderBoyuIntroPage(data) {
  const cards = (data.highlights || [])
    .map(
      (item) => `
      <article class="detail-feature-card accent-${item.accent || "blue"} boyu-highlight-card">
        <h3>${item.title}</h3>
      </article>`
    )
    .join("");

  return `
    <div class="detail-cover-page boyu-intro-page detail-text-surface">
      <div class="detail-cover-left">
        <h2 class="detail-cover-title" id="projectDetailTitle">${data.title}</h2>
        <p class="boyu-intro-body">${data.body}</p>
      </div>
      <div class="detail-cover-right boyu-highlight-stack">${cards}</div>
    </div>`;
}

function renderBoyuPropositionPage(data) {
  const rows = (data.rows || [])
    .map(
      (row) => `
      <div class="boyu-prop-row">
        <p class="boyu-prop-label">${row.label}</p>
        <div class="boyu-prop-tags">
          ${(row.tags || [])
            .map((tag) => `<span class="boyu-prop-tag">${tag}</span>`)
            .join("")}
        </div>
      </div>`
    )
    .join("");

  return `
    <section class="boyu-page boyu-proposition-page detail-text-surface">
      <header class="detail-thinking-header">
        <p class="detail-eyebrow">${data.eyebrow}</p>
        <h2 class="detail-thinking-title">${data.title}</h2>
      </header>
      <div class="boyu-prop-layout">
        <div class="boyu-prop-copy">
          <p class="boyu-prop-conclusion">
            <strong class="boyu-prop-label-inline">${data.conclusion?.questionLabel || "命题:"}</strong><span class="boyu-prop-text">${data.conclusion?.question || ""}</span>
          </p>
          ${data.conclusion?.goal ? `<p class="boyu-prop-goal">${data.conclusion.goal}</p>` : ""}
          ${
            data.conclusion?.pain
              ? `<p class="boyu-prop-pain"><strong class="boyu-prop-label-inline">${data.conclusion.painLabel || "用户痛点:"}</strong><span class="boyu-prop-text"> ${data.conclusion.pain}</span></p>`
              : ""
          }
        </div>
        <div class="boyu-prop-panel">${rows}</div>
      </div>
    </section>`;
}

function renderBoyuWorldviewPage(data) {
  const quotes = Array.isArray(data.quote) ? data.quote : [data.quote].filter(Boolean);
  const quoteHtml = quotes
    .map((line, i) =>
      i === 0
        ? `<p class="boyu-worldview-aside-text is-lead"><span class="boyu-worldview-aside-mark" aria-hidden="true"></span>${line}</p>`
        : `<p class="boyu-worldview-aside-text">${line}</p>`
    )
    .join("");

  return `
    <section class="boyu-page boyu-worldview-page">
      <div class="boyu-worldview-layout">
        <div class="boyu-worldview-main">
          <header class="detail-thinking-header">
            <p class="detail-eyebrow">${data.eyebrow}</p>
            <h2 class="detail-thinking-title">${data.title}</h2>
          </header>
          <p class="manju-lead boyu-worldview-lead">${data.body}</p>
          <figure class="boyu-worldview-diagram">
            <img src="${data.diagram}" alt="${data.diagramAlt || ""}" />
          </figure>
        </div>
        <aside class="boyu-worldview-aside" aria-label="设计思考">
          ${quoteHtml}
        </aside>
      </div>
    </section>`;
}

function renderBoyuOldIdeasPage(data) {
  const schemes = (data.schemes || [])
    .map((scheme) => {
      const copy = `
        <div class="boyu-scheme-copy">
          <h3>${scheme.title}</h3>
          <p>${scheme.body}</p>
          ${scheme.pros ? `<p class="boyu-scheme-pros"><span>${scheme.prosLabel || "优点"}</span>${scheme.pros}</p>` : ""}
          ${scheme.cons ? `<p class="boyu-scheme-cons"><span>${scheme.consLabel || "缺点"}</span>${scheme.cons}</p>` : ""}
        </div>`;
      const media = scheme.image
        ? `<figure class="boyu-scheme-figure">
            <img src="${scheme.image}" alt="${scheme.imageAlt || ""}" />
          </figure>`
        : "";
      return `
      <article class="boyu-scheme-card${scheme.image ? " has-media" : ""}">
        ${copy}
        ${media}
      </article>`;
    })
    .join("");

  return `
    <section class="boyu-page">
      <header class="detail-thinking-header">
        <p class="detail-eyebrow">${data.eyebrow}</p>
        <h2 class="detail-thinking-title">${data.title}</h2>
      </header>
      <p class="manju-lead">${data.lead}</p>
      <div class="boyu-scheme-list">${schemes}</div>
    </section>`;
}

function renderBoyuMetaphorPage(data) {
  const upgrades = (data.upgrades || [])
    .map(
      (item) => `
      <article class="boyu-upgrade-card accent-${item.accent || "blue"}">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>`
    )
    .join("");
  const figure = data.image
    ? `<figure class="boyu-metaphor-figure">
        <img src="${data.image}" alt="${data.imageAlt || ""}" />
      </figure>`
    : "";

  return `
    <section class="boyu-page boyu-metaphor-page">
      <header class="detail-thinking-header">
        <p class="detail-eyebrow">${data.eyebrow}</p>
        <h2 class="detail-thinking-title">${data.title}</h2>
      </header>
      <div class="boyu-metaphor-split">
        <div class="boyu-upgrade-list">${upgrades}</div>
        ${figure}
      </div>
    </section>`;
}

function renderBoyuTextPage(data) {
  const figure = data.image
    ? `<figure class="boyu-showcase-figure">
        <img src="${data.image}" alt="${data.imageAlt || ""}" />
      </figure>`
    : "";
  const video = data.video
    ? `<div class="boyu-video-wrap">
        <video
          src="${data.video}"
          aria-label="${data.videoLabel || ""}"
          autoplay
          muted
          loop
          playsinline
          controls
        ></video>
      </div>`
    : "";
  return `
    <section class="boyu-page boyu-implementation-page${data.video || data.image ? "" : " detail-text-surface"}">
      <header class="detail-thinking-header">
        <p class="detail-eyebrow">${data.eyebrow}</p>
        <h2 class="detail-thinking-title">${data.title}</h2>
      </header>
      <p class="boyu-text-body">${data.body}</p>
      ${video}
      ${figure}
    </section>`;
}

function renderBoyuProject(data) {
  return `
    <div class="detail-scroll-stack">
      ${renderBoyuIntroPage(data.intro)}
      <div class="detail-page-divider" aria-hidden="true"></div>
      ${renderBoyuPropositionPage(data.proposition)}
      <div class="detail-page-divider" aria-hidden="true"></div>
      ${renderBoyuWorldviewPage(data.worldview)}
      <div class="detail-page-divider" aria-hidden="true"></div>
      ${renderBoyuOldIdeasPage(data.oldIdeas)}
      <div class="detail-page-divider" aria-hidden="true"></div>
      ${renderBoyuMetaphorPage(data.metaphor)}
      <div class="detail-page-divider" aria-hidden="true"></div>
      ${renderBoyuTextPage(data.implementation)}
      <div class="detail-page-divider" aria-hidden="true"></div>
      ${renderBoyuTextPage(data.closing)}
    </div>`;
}


function renderPingbaoPage(page, isFirst = false) {
  const header = `
    <header class="detail-thinking-header">
      <p class="detail-eyebrow">${page.eyebrow || ""}</p>
      <h2 class="detail-thinking-title"${isFirst ? ' id="projectDetailTitle"' : ""}>${page.title}</h2>
    </header>`;
  const lead = page.lead ? `<p class="manju-lead">${page.lead}</p>` : "";

  if (page.type === "split") {
    const sections = (page.sections || [])
      .map((section) => {
        const tags = section.tags
          ? `<div class="pingbao-tag-list">${section.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`
          : "";
        return `
        <div class="pingbao-section-block">
          <h3>${section.title}</h3>
          ${section.body ? `<p>${section.body}</p>` : ""}
          ${tags}
        </div>`;
      })
      .join("");
    const bullets = page.bullets
      ? `<ul class="boyu-metaphor-list">${page.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : "";
    const panel = page.sections
      ? `<div class="pingbao-panel">${sections}</div>`
      : `<div class="pingbao-panel">
          ${page.panelTitle ? `<h3>${page.panelTitle}</h3>` : ""}
          ${bullets}
          ${page.note ? `<p class="manju-note">${page.note}</p>` : ""}
        </div>`;

    let side = "";
    if (page.conversion) {
      const conv = page.conversion;
      const head = (conv.headers || [])
        .map((item) => `<th scope="col">${item}</th>`)
        .join("");
      const rows = (conv.rows || [])
        .map((row) => {
          const cells = (row.cells || [])
            .map((cell) => {
              if (typeof cell === "string") {
                return `<td>${cell}</td>`;
              }
              const cls = cell.alert ? ' class="is-alert"' : "";
              const span = cell.rowspan ? ` rowspan="${cell.rowspan}"` : "";
              return `<td${cls}${span}>${cell.value}</td>`;
            })
            .join("");
          return `<tr${row.summary ? ' class="is-summary"' : ""}><th scope="row">${row.label}</th>${cells}</tr>`;
        })
        .join("");
      side = `
        <div class="pingbao-conversion">
          <h3>${conv.title}</h3>
          <div class="pingbao-table-wrap">
            <table class="pingbao-conversion-table">
              <thead><tr>${head}</tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
          ${conv.caption ? `<p class="pingbao-conversion-caption">${conv.caption}</p>` : ""}
        </div>`;
    } else {
      side = `
        <figure class="pingbao-figure${page.imageTall ? " pingbao-figure-tall" : ""}">
          <img src="${page.image}" alt="${page.imageAlt || ""}" />
          ${page.caption ? `<figcaption>${page.caption}</figcaption>` : ""}
        </figure>`;
    }

    return `
      <section class="pingbao-page detail-text-surface">
        ${header}
        ${lead}
        <div class="pingbao-split">
          ${panel}
          ${side}
        </div>
      </section>`;
  }

  if (page.type === "results") {
    const panels = page.panels || {};
    const left = panels.left || {};
    const topRight = panels.topRight || {};
    const bottomRight = panels.bottomRight || {};
    const leftBullets = (left.bullets || [])
      .map((item) => `<li>${item}</li>`)
      .join("");
    return `
      <section class="pingbao-page detail-text-surface">
        ${header}
        <div class="pingbao-results-layout">
          <article class="pingbao-result-panel is-left">
            <h3>${left.title || ""}</h3>
            ${left.subtitle ? `<p class="pingbao-result-subtitle">${left.subtitle}</p>` : ""}
            ${leftBullets ? `<ul class="pingbao-result-list">${leftBullets}</ul>` : ""}
            ${left.footer ? `<p class="pingbao-result-footer">${left.footer}</p>` : ""}
          </article>
          <div class="pingbao-results-right">
            <article class="pingbao-result-panel is-top">
              <h3>${topRight.title || ""}</h3>
              <p>Before：${topRight.before || ""}</p>
              <p>After：${topRight.after || ""}</p>
              ${topRight.note ? `<p class="pingbao-result-note">${topRight.note}</p>` : ""}
            </article>
            <article class="pingbao-result-panel is-bottom">
              <p class="pingbao-result-highlight">${bottomRight.body || ""}</p>
            </article>
          </div>
        </div>
      </section>`;
  }

  if (page.type === "table") {
    const head = (page.headers || [])
      .map((item) => `<th scope="col">${item}</th>`)
      .join("");
    const rows = (page.rows || [])
      .map((row) => {
        const label = row.label
          ? `<th scope="row"${row.rowspan ? ` rowspan="${row.rowspan}"` : ""}>${row.label}</th>`
          : "";
        return `
        <tr>
          ${label}
          <td>${row.issue || ""}</td>
          <td>${row.competitor || ""}</td>
        </tr>`;
      })
      .join("");
    return `
      <section class="pingbao-page detail-text-surface">
        ${header}
        <div class="pingbao-table-wrap">
          <table class="pingbao-table">
            <thead><tr>${head}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </section>`;
  }

  return `
    <section class="pingbao-page${page.fillBleed ? " is-bleed" : ""}">
      ${page.fillBleed ? "" : header}
      ${page.fillBleed ? "" : lead}
      <figure class="pingbao-figure pingbao-figure-wide${page.fillBleed ? " is-bleed" : ""}${page.imageTall ? " pingbao-figure-tall" : ""}">
        <img src="${page.image}" alt="${page.imageAlt || ""}" loading="eager" decoding="async" />
        ${page.caption ? `<figcaption>${page.caption}</figcaption>` : ""}
      </figure>
    </section>`;
}

function renderPingbaoProject(data) {
  const pages = (data.pages || [])
    .map((page, index) => renderPingbaoPage(page, index === 0))
    .join('<div class="detail-page-divider" aria-hidden="true"></div>');
  return `
    <div class="detail-scroll-stack">
      ${pages}
    </div>`;
}

function renderTmallProject(data) {
  const fullBleed =
    data.layout === "guifan" ||
    data.layout === "more" ||
    data.layout === "global";
  const stackClass = fullBleed ? "tmall-stack guifan-stack" : "tmall-stack";
  const pages = (data.pages || [])
    .map(
      (page, index) => `
      <section class="tmall-page"${index === 0 ? ' id="projectDetailTitle"' : ""}>
        <figure class="tmall-slide">
          <img src="${page.image}" alt="${page.imageAlt || ""}" />
        </figure>
      </section>`
    )
    .join(
      fullBleed
        ? ""
        : '<div class="detail-page-divider" aria-hidden="true"></div>'
    );
  return `<div class="detail-scroll-stack ${stackClass}">${pages}</div>`;
}

function renderTeambitionSystemPage(page) {
  const items = (page.items || [])
    .map(
      (item) => `
      <li class="tb-system-item">
        <p class="tb-system-num">${item.num}</p>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </li>`
    )
    .join("");
  return `
    <section class="tb-system-page">
      <header class="detail-thinking-header">
        <p class="detail-eyebrow">${page.eyebrow || ""}</p>
        <h2 class="detail-thinking-title">${page.title || ""}</h2>
        ${page.note ? `<p class="tb-system-note">${page.note}</p>` : ""}
      </header>
      <ol class="tb-system-list">${items}</ol>
    </section>`;
}

function renderTeambitionOutputPage(page) {
  const link = page.linkUrl
    ? `<p class="tb-output-link"><a href="${page.linkUrl}" target="_blank" rel="noopener noreferrer">${page.linkLabel || "Clarity Design"}：${page.linkUrl}</a></p>`
    : "";
  return `
    <section class="tb-output-page">
      <header class="detail-thinking-header">
        <h2 class="detail-thinking-title">${page.title || ""}</h2>
        ${link}
      </header>
      <figure class="tb-output-figure">
        <img src="${page.image}" alt="${page.imageAlt || ""}" />
      </figure>
    </section>`;
}

function renderTeambitionReflectPage(page) {
  const outcomes = (page.outcomes || [])
    .map(
      (item) => `
      <article class="tb-reflect-outcome">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>`
    )
    .join("");
  const insights = (page.insights || [])
    .map(
      (item) => `
      <li class="tb-reflect-insight">
        <p class="tb-reflect-num">${item.num}</p>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </li>`
    )
    .join("");
  return `
    <section class="tb-reflect-page">
      <header class="detail-thinking-header">
        <h2 class="detail-thinking-title">${page.title || ""}</h2>
      </header>
      <div class="tb-reflect-block">
        <h3 class="tb-reflect-section-title">${page.outcomesTitle || ""}</h3>
        <div class="tb-reflect-outcomes">${outcomes}</div>
      </div>
      <div class="tb-reflect-block">
        <h3 class="tb-reflect-section-title">${page.insightsTitle || ""}</h3>
        <ol class="tb-reflect-insights">${insights}</ol>
      </div>
    </section>`;
}

function renderTeambitionProject(data) {
  const pages = data.pages || [];
  const isImage = (page) => !page.type || page.type === "image";
  const pagesHtml = pages
    .map((page, index) => {
      let html = "";
      if (page.type === "system") {
        html = renderTeambitionSystemPage(page);
      } else if (page.type === "output") {
        html = renderTeambitionOutputPage(page);
      } else if (page.type === "reflect") {
        html = renderTeambitionReflectPage(page);
      } else {
        html = `
      <section class="tmall-page"${index === 0 ? ' id="projectDetailTitle"' : ""}>
        <figure class="tmall-slide">
          <img src="${page.image}" alt="${page.imageAlt || ""}" />
        </figure>
      </section>`;
      }
      if (index === 0) return html;
      const prev = pages[index - 1];
      const tight = isImage(page) && isImage(prev) ? " manju-bleed-divider" : "";
      return `<div class="detail-page-divider${tight}" aria-hidden="true"></div>${html}`;
    })
    .join("");
  return `
    <div class="detail-scroll-stack tmall-stack guifan-stack tb-stack">
      ${pagesHtml}
    </div>`;
}

function renderProject(id) {
  const data = projects[id];
  if (!data) return "";

  if (data.layout === "jellytoken") {
    return `
      <div class="detail-scroll-stack">
        ${renderCoverPage(data.cover)}
        <div class="detail-page-divider" aria-hidden="true"></div>
        ${renderThinkingPage(data.thinking)}
        <div class="detail-page-divider" aria-hidden="true"></div>
        ${renderLogoPage(data.logo)}
        <div class="detail-page-divider" aria-hidden="true"></div>
        ${renderLogoPage(data.logoSchemes)}
        <div class="detail-page-divider" aria-hidden="true"></div>
        ${renderLogoPage(data.logoMascot)}
        <div class="detail-page-divider" aria-hidden="true"></div>
        ${renderLogoMotionPage(data.logoMotion)}
        <div class="detail-page-divider" aria-hidden="true"></div>
        ${renderHomepageStylePage(data.homepageStyle)}
        <div class="detail-page-divider" aria-hidden="true"></div>
        ${renderBrowserFramePage(data.homepageFull)}
        <div class="detail-page-divider" aria-hidden="true"></div>
        ${renderLogoPage(data.vibeCoding)}
        <div class="detail-page-divider" aria-hidden="true"></div>
        ${renderUiSpecPage(data.uiSpec)}
      </div>
    `;
  }

  if (data.layout === "manju") {
    return renderManjuProject(data);
  }

  if (data.layout === "boyu") {
    return renderBoyuProject(data);
  }

  if (data.layout === "pingbao") {
    return renderPingbaoProject(data);
  }

  if (data.layout === "teambition") {
    return renderTeambitionProject(data);
  }

  if (
    data.layout === "tmall" ||
    data.layout === "guifan" ||
    data.layout === "more" ||
    data.layout === "global"
  ) {
    return renderTmallProject(data);
  }

  return renderDefaultPage(data);
}

let overlayGeneration = 0;
let overlaySurfaceObserver = null;

const OVERLAY_PAGE_SELECTOR = [
  ".detail-text-surface",
  ".detail-logo-page",
  ".detail-style-page",
  ".detail-ui-spec-page",
  ".detail-browser-page",
  ".manju-page",
  ".manju-bleed-page",
  ".boyu-page",
  ".pingbao-page",
].join(", ");

function setOverlayMediaView(isMedia) {
  const panel = overlay?.querySelector(".project-overlay-panel");
  panel?.classList.toggle("is-media-view", Boolean(isMedia));
}

function setOverlayIntroChrome(isIntro) {
  const panel = overlay?.querySelector(".project-overlay-panel");
  panel?.classList.toggle("is-intro-chrome", Boolean(isIntro));
}

function stopOverlaySurfaceWatch() {
  overlaySurfaceObserver?.disconnect();
  overlaySurfaceObserver = null;
  setOverlayMediaView(false);
  setOverlayIntroChrome(false);
}

function startOverlaySurfaceWatch() {
  stopOverlaySurfaceWatch();
  const panel = overlay?.querySelector(".project-overlay-panel");
  if (!panel || !overlayBody) return;

  const pages = [...overlayBody.querySelectorAll(OVERLAY_PAGE_SELECTOR)];
  if (!pages.length) return;

  const ratios = new Map();
  const applySurface = (best) => {
    if (!best) return;
    const isText = best.classList.contains("detail-text-surface");
    const isIntro =
      best.classList.contains("manju-cover-page") ||
      best.classList.contains("boyu-intro-page");
    setOverlayMediaView(!isText);
    setOverlayIntroChrome(isIntro);
  };

  overlaySurfaceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        ratios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
      });
      let best = null;
      let bestRatio = 0;
      pages.forEach((page) => {
        const ratio = ratios.get(page) || 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = page;
        }
      });
      applySurface(best);
    },
    {
      root: panel,
      threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
    }
  );

  pages.forEach((page) => overlaySurfaceObserver.observe(page));
  applySurface(pages[0]);
}

function resetDetailScroll() {
  const panel = overlay?.querySelector(".project-overlay-panel");
  if (panel) panel.scrollTop = 0;
  if (overlayBody) overlayBody.scrollTop = 0;
  const firstPage =
    overlayBody?.querySelector("#projectDetailTitle") ||
    overlayBody?.querySelector(
      ".detail-cover-page, .detail-thinking-page, .manju-page, .boyu-page, .pingbao-page, .tmall-page, .tb-system-page, section"
    );
  if (firstPage && typeof firstPage.scrollIntoView === "function") {
    firstPage.scrollIntoView({ block: "start", behavior: "auto" });
  }
  if (panel) panel.scrollTop = 0;
}

function openProject(id) {
  if (!projects[id] || !overlay || !overlayBody) return;
  const gen = ++overlayGeneration;
  lastFocus = document.activeElement;
  overlayBody.innerHTML = renderProject(id);
  enhanceDetailImages(overlayBody);
  resetDetailScroll();
  startOverlaySurfaceWatch();
  overlay.hidden = false;
  overlay.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => {
    if (gen !== overlayGeneration) return;
    resetDetailScroll();
    overlay.classList.add("is-open");
    requestAnimationFrame(() => {
      if (gen !== overlayGeneration) return;
      resetDetailScroll();
      startOverlaySurfaceWatch();
    });
  });
  // 图片加载后仍保持在第一页，避免被撑开后停在中间
  overlayBody.querySelectorAll("img").forEach((img) => {
    if (img.complete) return;
    img.addEventListener(
      "load",
      () => {
        if (gen !== overlayGeneration) return;
        resetDetailScroll();
      },
      { once: true }
    );
  });
  document.body.classList.add("overlay-open");
  overlayClose?.focus({ preventScroll: true });
}

function closeProject() {
  if (!overlay) return;
  const gen = overlayGeneration;
  closeImageLightbox();
  stopOverlaySurfaceWatch();
  overlay.classList.remove("is-open");
  document.body.classList.remove("overlay-open");
  overlay.setAttribute("aria-hidden", "true");

  const finish = () => {
    if (gen !== overlayGeneration) return;
    overlay.hidden = true;
    overlayBody.innerHTML = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  overlay.addEventListener("transitionend", finish, { once: true });
  setTimeout(finish, 320);
}

function enhanceDetailImages(root) {
  if (!root) return;
  root.querySelectorAll("img").forEach((img) => {
    if (img.dataset.lightboxReady === "1") return;
    img.dataset.lightboxReady = "1";
    img.setAttribute("tabindex", "0");
    img.setAttribute("role", "button");
    const label = img.getAttribute("alt")?.trim();
    img.setAttribute("aria-label", label ? `查看原图：${label}` : "查看原图");
  });
}

const lightbox = document.getElementById("imageLightbox");
const lightboxImg = document.getElementById("imageLightboxImg");
const lightboxClose = document.getElementById("imageLightboxClose");
let lightboxLastFocus = null;

function openImageLightbox(src, alt = "") {
  if (!lightbox || !lightboxImg || !src) return;
  lightboxLastFocus = document.activeElement;
  lightboxImg.src = src;
  lightboxImg.alt = alt || "原图预览";
  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  requestAnimationFrame(() => lightbox.classList.add("is-open"));
  lightboxClose?.focus();
}

function closeImageLightbox() {
  if (!lightbox || !lightbox.classList.contains("is-open")) {
    if (lightbox) {
      lightbox.hidden = true;
      lightbox.setAttribute("aria-hidden", "true");
      lightbox.classList.remove("is-open");
      if (lightboxImg) lightboxImg.removeAttribute("src");
    }
    document.body.classList.remove("lightbox-open");
    return;
  }
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  const finish = () => {
    lightbox.hidden = true;
    if (lightboxImg) {
      lightboxImg.removeAttribute("src");
      lightboxImg.alt = "";
    }
    if (lightboxLastFocus && typeof lightboxLastFocus.focus === "function") {
      lightboxLastFocus.focus();
    }
  };
  lightbox.addEventListener("transitionend", finish, { once: true });
  setTimeout(finish, 220);
}

overlayBody?.addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (!img || !overlayBody.contains(img)) return;
  event.preventDefault();
  event.stopPropagation();
  openImageLightbox(img.currentSrc || img.src, img.alt || "");
});

overlayBody?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const img = event.target.closest("img");
  if (!img || !overlayBody.contains(img)) return;
  event.preventDefault();
  openImageLightbox(img.currentSrc || img.src, img.alt || "");
});

lightboxClose?.addEventListener("click", (event) => {
  event.stopPropagation();
  closeImageLightbox();
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox || event.target === lightboxImg) {
    closeImageLightbox();
  }
});

document.querySelectorAll("[data-project]").forEach((el) => {
  const open = (event) => {
    const id = el.getAttribute("data-project");
    if (!id) return;
    event.preventDefault();
    openProject(id);
  };

  el.addEventListener("click", open);
  el.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") open(event);
  });
});

overlayClose?.addEventListener("click", closeProject);

overlay?.addEventListener("click", (event) => {
  if (event.target === overlay) closeProject();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (lightbox?.classList.contains("is-open")) {
    closeImageLightbox();
    return;
  }
  if (overlay?.classList.contains("is-open")) {
    closeProject();
  }
});