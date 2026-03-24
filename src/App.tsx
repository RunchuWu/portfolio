import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Briefcase, 
  Heart, 
  FileText, 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail,
  Instagram,
  ChevronRight,
  Globe,
  X
} from "lucide-react";

// --- Types ---
type Section = "home" | "work" | "life" | "resume" | "project-detail";
type Language = "en" | "zh";

interface Project {
  id: number;
  title: Record<Language, string>;
  category: Record<Language, string>;
  description: Record<Language, string>;
  details: Record<Language, string[]>;
  image: string;
  link: string;
}

interface LifeItem {
  id: number;
  title: Record<Language, string>;
  type: "photo" | "thought" | "hobby";
  content: Record<Language, string>;
  image?: string;
  images?: string[];
}

// --- Data Dictionaries ---

const t = {
  en: {
    nav: { home: "Home", work: "Work", life: "Life", resume: "Resume" },
    hero: {
      title1: "Hi, I'm Runchu! I build ",
      title2: "fun & impactful",
      title3: " AI products. ✨",
      p1: "Welcome to my digital playground! 👋 I'm currently studying at Duke University, juggling life as an AI Product Manager and a Full-stack Developer. My absolute favorite thing to do? Turning messy, complex user needs into sleek, elegant technical solutions.",
      p2: "Whether I'm brainstorming wild product strategies or brewing coffee to write that first line of code, I'm all about taking bold ideas from 0 to 1. I just love building tools that actually make people's lives a little bit better (and more fun!). 🚀",
      viewWork: "Check Out My Work",
      aboutMe: "More About Me",
      focusTitle: "Currently Tinkering With",
      focusDesc: "The sweet spot where AI, product strategy, and full-stack magic collide!"
    },
    work: {
      subtitle: "Selected Work",
      title: "Some cool stuff I've poured my heart (and lots of coffee) into. 💻"
    },
    life: {
      subtitle: "Life & Thoughts",
      title: "What keeps me sane and inspired away from the keyboard. ☕️",
      categories: {
        music: "Music",
        sports: "Sports",
        education: "Education & Social Work"
      }
    },
    resume: {
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      download: "My Resume"
    },
    footer: {
      title: "Let's build something awesome together!",
      subtitle: "Always down to chat about cool ideas, new opportunities, or just debate the best coffee brewing methods.",
      contact: "Say Hello",
      built: "Built with ❤️, ☕️ & AI"
    }
  },
  zh: {
    nav: { home: "首页", work: "作品", life: "生活", resume: "简历" },
    hero: {
      title1: "嗨！我是润初，热衷于打造",
      title2: "好玩又有温度",
      title3: "的 AI 产品。✨",
      p1: "欢迎来到我的数字小宇宙！👋 我目前在杜克大学“修炼”，平时是个在 AI 产品经理和全栈开发者之间反复横跳的斜杠青年。我最爱干的事儿，就是把那些让人头疼的复杂需求，变成丝滑优雅的代码和产品。",
      p2: "不管是脑洞大开的产品策略，还是熬夜敲出的第一行代码，我都乐在其中！我超级享受那种把天马行空的灵感从 0 到 1 变成现实的成就感，希望能做出真正让人眼前一亮的好工具。🚀",
      viewWork: "来看看我的作品吧",
      aboutMe: "再多了解我一点",
      focusTitle: "最近在折腾啥？",
      focusDesc: "在 AI、产品汪和程序猿的奇妙交汇点疯狂试探！"
    },
    work: {
      subtitle: "得意之作",
      title: "那些让我掉过头发，但也无比骄傲的项目。💻"
    },
    life: {
      subtitle: "生活与碎碎念",
      title: "离开键盘后，那些让我满血复活的日常。☕️",
      categories: {
        music: "音乐",
        sports: "运动",
        education: "教育与公益"
      }
    },
    resume: {
      experience: "打怪升级经历 (实习)",
      projects: "折腾过的项目",
      education: "教育背景",
      skills: "技能树",
      download: "PDF 简历"
    },
    footer: {
      title: "准备好一起搞点大事情了吗？",
      subtitle: "随时欢迎来找我聊天！不管是聊新机会、有趣的合作，还是单纯交流哪家的咖啡最好喝，我都随时奉陪。",
      contact: "和我打个招呼吧",
      built: "用 ❤️、☕️ 和 AI 强力驱动"
    }
  }
};

const cvData = {
  en: {
    name: "Runchu Wu",
    role: "AI Product Manager & Full-stack Developer",
    contact: {
      email: "rw312@duke.edu",
      github: "github.com/RunchuWu"
    },
    experience: [
      { 
        company: "Liberata - Early-stage Academic Publishing SaaS", 
        role: "Full-stack Engineer Intern", 
        period: "Aug 2025 - Dec 2025", 
        location: "Durham, USA", 
        desc: [
          "Spearheaded the full-stack development of the ORCID OAuth 2.0 module. Basically, I built the secure front door for authors and reviewers to log in seamlessly.",
          "Architected a user behavior session tracking system from scratch. Modeled 5 key event types so our product team could finally see what users were actually doing!",
          "Crafted a buttery-smooth literature browsing experience using Next.js and Tailwind CSS, while collaborating with an awesome 30+ person cross-functional team."
        ] 
      },
      { 
        company: "Dreame Technology (mysolvex.ai)", 
        role: "AI Product Manager Intern", 
        period: "May 2025 - Aug 2025", 
        location: "Suzhou, China", 
        desc: [
          "Drove the 0-to-1 launch of the PDF Smart Parsing feature! Wrote the PRDs, mapped out user journeys, and worked super closely with design and engineering to make it happen.",
          "The feature was a massive hit—attracting over 50% of our users within just two weeks of launch, with people asking an average of 3+ follow-up questions per session.",
          "Actively shaped the future product roadmap by leading requirement reviews and doing deep-dive competitive analysis for our upcoming character interaction features."
        ] 
      }
    ],
    projects: [
      { 
        name: "AI Tarot Reader (mystarot.online)", 
        role: "Founder & Independent Developer", 
        period: "Jan 2025 - May 2025", 
        location: "Suzhou, China",
        desc: [
          "Noticed young people needed a better outlet for their emotions, so I wore all the hats—user research, UI design, full-stack dev, and marketing—to launch this passion project.",
          "Built the whole platform using the OpenAI API, Next.js, and Supabase. It features distinct AI personas and speaks multiple languages!",
          "Designed a clever archiving feature that turned a one-off tarot reading into a sticky, long-term emotional diary. It even won provincial funding!"
        ] 
      }
    ],
    education: [
      { 
        school: "Duke University", 
        degree: "B.S. in Applied Mathematics and Computational Science (CS Track)", 
        period: "2023 - 2027", 
        location: "Durham, USA",
        details: "GPA: 3.78/4.00 (Dean's List with Distinction, Top 10%). Core courses: AI Product Management, Software Engineering, HCI, Algorithms & Data Structures." 
      }
    ],
    skills: {
      Product: "User Research, PRD Writing, Competitive Analysis, Requirement Review & Cross-team Alignment",
      Tech: "TypeScript, JavaScript, Python, Next.js, React, Tailwind CSS",
      Backend: "PostgreSQL, Supabase, RESTful API, OAuth 2.0, Row-Level Security (RLS)",
      Tools: "Figma, Notion, Git/GitHub, Canva, PowerPoint / Google Slides",
      Languages: "Chinese (Native), English (Working), Spanish (Conversational)"
    }
  },
  zh: {
    name: "伍润初",
    role: "AI 产品经理 & 全栈开发者",
    contact: {
      email: "rw312@duke.edu",
      github: "github.com/RunchuWu"
    },
    experience: [
      { 
        company: "Liberata - 早期学术出版 SaaS 创业公司", 
        role: "全栈工程师实习生", 
        period: "2025.08 - 2025.12", 
        location: "美国 达勒姆", 
        desc: [
          "从零到一主导了 ORCID OAuth 2.0 身份认证模块的全栈开发。简单来说，就是给平台造了一扇既安全又丝滑的“防盗门”，让学者们登录体验拉满！",
          "从头搭建了用户行为 Session 追踪系统，对 5 类核心事件进行建模，终于让产品团队看清了用户到底在页面上干啥，数据底座稳稳的。",
          "用 Next.js + Tailwind CSS 撸出了一个丝滑的文献浏览前端体验，还在 30 多人的跨职能大团队里混得风生水起，高效协作。"
        ] 
      },
      { 
        company: "追觅科技 Dreame (mysolvex.ai)", 
        role: "AI 产品经理实习生", 
        period: "2025.05 - 2025.08", 
        location: "中国 苏州", 
        desc: [
          "带头冲锋，搞定了 PDF 智能解析功能从 0 到 1 的落地！写 PRD、画用户旅程图，天天跟设计和研发小哥们“相爱相杀”，硬是把这个核心功能按时肝上线了。",
          "上线后直接爆单！两周内吸引了超过一半的用户来玩，大家平均还会追问 3 轮以上，一跃成为平台最受欢迎的功能之一。",
          "深度参与了书中人物互动功能的需求评审，靠着精准的竞品分析，成功把这个好玩的功能塞进了下一版本的核心路线图里。"
        ] 
      }
    ],
    projects: [
      { 
        name: "大学生创新创业项目 · AI 塔罗师 (mystarot.online)", 
        role: "创始人 & 独立开发者", 
        period: "2025.01 - 2025.05", 
        location: "中国 苏州",
        desc: [
          "敏锐地察觉到现在的年轻人太需要一个情绪树洞了，于是我直接化身“六边形战士”——包揽了调研、设计、开发到运营，亲手把这个项目孵化了出来。",
          "靠着 OpenAI API + Next.js + Supabase，一个人撸完了全栈开发，做出了一个支持多语言、还会根据不同人格跟你聊天的 AI 塔罗师。",
          "最得意的是设计了一个存档功能，把一次性的算命变成了大家爱不释手的情绪日记，不仅留存率蹭蹭涨，还顺手拿了个省级创新创业项目资助！"
        ] 
      }
    ],
    education: [
      { 
        school: "杜克大学", 
        degree: "应用数学与计算科学（计算机科学方向）学士", 
        period: "2023 - 2027", 
        location: "美国 达勒姆",
        details: "GPA 3.78/4.00，入选院长优异名单（前 10%）。核心课程：AI 产品管理、软件工程、人机交互、算法与数据结构。" 
      }
    ],
    skills: {
      "产品与策略": "用户调研、PRD 撰写、竞品分析、需求评审与跨团队对齐",
      "编程语言与框架": "TypeScript、JavaScript、Python、Next.js、React、Tailwind CSS",
      "数据库与后端": "PostgreSQL、Supabase、RESTful API、OAuth 2.0、Row-Level Security (RLS)",
      "工具": "Figma，Notion，Git/GitHub，Canva，PowerPoint / Google Slides / Figma Slides",
      "语言": "中文（母语）、英文（工作语言）、西班牙语（日常交流）"
    }
  }
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: { en: "Liberata", zh: "Liberata" },
    category: { en: "Full-stack Engineering", zh: "全栈开发" },
    description: { 
      en: "Early-stage Academic Publishing SaaS platform.", 
      zh: "早期学术出版 SaaS 创业平台。" 
    },
    details: {
      en: [
        "Spearheaded the full-stack development of the ORCID OAuth 2.0 module, building a secure and seamless login experience for authors and reviewers.",
        "Architected a user behavior session tracking system from scratch, modeling 5 key event types to provide actionable data for the product team.",
        "Crafted a smooth literature browsing experience using Next.js and Tailwind CSS, collaborating closely with a 30+ cross-functional team."
      ],
      zh: [
        "从零到一主导了 ORCID OAuth 2.0 身份认证模块的全栈开发，为平台筑起了学术公信力的第一道防线，让学者的登录体验既安全又顺畅。",
        "搭建了用户行为 Session 追踪系统，对 5 类核心事件进行建模，为产品团队提供了极具价值的审稿行为分析数据底座。",
        "使用 Next.js + Tailwind CSS 打造了丝滑的文献浏览前端体验，并在 30+ 人的跨职能团队中高效协作。"
      ]
    },
    image: "https://api.microlink.io/?url=https://liberata.info/&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://liberata.info/"
  },
  {
    id: 2,
    title: { en: "Solvi.ai (Dreame)", zh: "Solvi.ai (追觅科技)" },
    category: { en: "AI Product Management", zh: "AI 产品管理" },
    description: { 
      en: "Smart PDF Parsing feature taken from 0 to 1.", 
      zh: "从 0 到 1 打造的 PDF 智能解析核心功能。" 
    },
    details: {
      en: [
        "Drove the 0-to-1 launch of the PDF Smart Parsing feature. I crafted the PRDs, mapped out user journeys, and collaborated closely with design and engineering to bring it to life.",
        "The feature was a hit! It attracted over 50% of our users within two weeks of launch, with users averaging over 3 follow-up questions per session.",
        "Actively shaped the future product roadmap by leading requirement reviews and competitive analysis for upcoming character interaction features."
      ],
      zh: [
        "带头冲锋，完成了 PDF 智能解析功能从 0 到 1 的落地！从撰写 PRD 到梳理用户旅程，我与设计、研发团队紧密配合，确保了这个核心功能按时上线。",
        "功能上线后大受欢迎，两周内吸引了超半数用户使用，平均追问超过 3 轮，一跃成为平台使用率最高的功能之一。",
        "深度参与书中人物互动功能的需求评审，通过精准的竞品分析，成功推动该功能纳入下一版本的核心路线图。"
      ]
    },
    image: "https://api.microlink.io/?url=https://mysolvex.ai/&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://mysolvex.ai/"
  },
  {
    id: 3,
    title: { en: "AI Tarot Reader", zh: "AI 塔罗师" },
    category: { en: "Full-stack & Product", zh: "全栈开发 & 产品" },
    description: { 
      en: "A multi-role AI Tarot system and emotional diary.", 
      zh: "结合多角色 AI 与情绪日记的塔罗牌系统。" 
    },
    details: {
      en: [
        "Spotted a unique opportunity in how young people express their emotions. I wore multiple hats—from user research and UI design to full-stack development and launch.",
        "Built the entire platform using OpenAI API, Next.js, and Supabase, featuring distinct AI personas and multi-language support.",
        "Designed a clever archiving feature that turned a one-time tarot reading into a sticky, long-term emotional diary, winning provincial funding along the way!"
      ],
      zh: [
        "捕捉到了年轻一代无处安放的倾诉欲，于是我化身“全能选手”——包揽了用户调研、产品设计、全栈开发到上线运营的全部工作，亲手孵化了这个项目。",
        "基于 OpenAI API + Next.js + Supabase 独立完成了全栈开发，打造了一个支持多语言、拥有差异化人格的 AI 塔罗师系统。",
        "巧妙设计了存档记录功能，将一次性的占卜体验转化为可持续的情绪日记，不仅大幅提升了用户留存，还成功拿下了省级创新创业项目资助！"
      ]
    },
    image: "https://api.microlink.io/?url=https://mystarot.online/&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://mystarot.online/"
  },
  {
    id: 4,
    title: { en: "Something Brewing...", zh: "敬请期待..." },
    category: { en: "Future Project", zh: "未来项目" },
    description: { 
      en: "I'm always tinkering with new ideas. Stay tuned for what's next!", 
      zh: "我总是在捣鼓一些新点子。敬请期待我的下一个作品！" 
    },
    details: {
      en: [
        "Currently exploring new technologies and brainstorming fresh product ideas.",
        "Whether it's a new AI tool, a fun side project, or a deep dive into a new framework, I'm always building.",
        "Check back soon to see what I've been working on!"
      ],
      zh: [
        "目前正在探索新技术，并进行新产品理念的头脑风暴。",
        "无论是一个新的 AI 工具、一个有趣的业余项目，还是对新框架的深入研究，我都在不断构建。",
        "请随时回来看看我的最新进展！"
      ]
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    link: "#"
  }
];

interface LifeCategory {
  id: string;
  items: LifeItem[];
}

const LIFE_DATA: Record<string, LifeCategory> = {
  music: {
    id: "music",
    items: [
      {
        id: 1,
        title: { en: "Piano", zh: "钢琴" },
        type: "hobby",
        content: { en: "Playing piano brings me peace.", zh: "弹钢琴让我感到平静。" },
        images: ["/piano.jpeg"]
      },
      {
        id: 2,
        title: { en: "Guitar", zh: "吉他" },
        type: "hobby",
        content: { en: "Strumming some tunes on my guitar.", zh: "用吉他弹奏一些曲调。" },
        images: ["/guitar.jpeg"]
      },
      {
        id: 3,
        title: { en: "Choir", zh: "合唱团" },
        type: "hobby",
        content: { en: "Singing with the choir.", zh: "在合唱团唱歌。" },
        images: ["/choir1.jpeg", "/choir2.jpeg"]
      }
    ]
  },
  sports: {
    id: "sports",
    items: [
      {
        id: 4,
        title: { en: "Tennis", zh: "网球" },
        type: "hobby",
        content: { en: "Tennis since 8.", zh: "8岁开始打网球。" },
        images: ["/tennis1.png", "/tennis2.png"]
      }
    ]
  },
  education: {
    id: "education",
    items: [
      {
        id: 5,
        title: { en: "Education & Social Work", zh: "教育与社会工作" },
        type: "hobby",
        content: { en: "Volunteer teaching and crisis center responding.", zh: "志愿支教和危机中心响应工作。" },
        images: [
          "/education1.jpeg", 
          "/education2.png", 
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2500&auto=format&fit=crop", 
          "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2500&auto=format&fit=crop"
        ]
      }
    ]
  }
};

// --- Components ---

const Navbar = ({ activeSection, setSection, lang, setLang }: { activeSection: Section, setSection: (s: Section) => void, lang: Language, setLang: (l: Language) => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF9]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => setSection("home")}
          className="font-serif italic text-xl tracking-tight hover:opacity-70 transition-opacity"
        >
          {lang === 'en' ? 'Runchu.' : '润初.'}
        </button>
        <div className="flex gap-6 md:gap-8 items-center">
          {(["work", "life", "resume"] as Section[]).map((s) => (
            <button
              key={s}
              onClick={() => setSection(s)}
              className={`text-xs md:text-sm uppercase tracking-widest font-medium transition-colors ${
                activeSection === s ? "text-black" : "text-black/40 hover:text-black"
              }`}
            >
              {t[lang].nav[s as keyof typeof t.en.nav]}
            </button>
          ))}
          <div className="w-[1px] h-4 bg-black/10 mx-2"></div>
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-1 text-xs font-medium text-black/60 hover:text-black transition-colors uppercase tracking-wider"
          >
            <Globe size={14} />
            {lang === 'en' ? '中' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ setSection, lang }: { setSection: (s: Section) => void, lang: Language }) => {
  const content = t[lang].hero;
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
            {content.title1}<span className="italic">{content.title2}</span>{content.title3}
          </h1>
          <div className="space-y-6 text-lg text-black/60 max-w-md mb-10 leading-relaxed">
            <p>{content.p1}</p>
            <p>{content.p2}</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setSection("work")}
              className="px-8 py-4 bg-black text-white rounded-full text-sm font-medium hover:bg-black/80 transition-all hover:scale-105 flex items-center gap-2"
            >
              {content.viewWork} <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => setSection("life")}
              className="px-8 py-4 border border-black/10 rounded-full text-sm font-medium hover:bg-black/5 transition-all"
            >
              {content.aboutMe}
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square md:aspect-[4/5] bg-stone-100 rounded-3xl overflow-hidden group shadow-2xl"
        >
          <img 
            src="/profile.png" 
            alt="Runchu Wu"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
            }}
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF9]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-xs uppercase tracking-widest font-bold mb-1">{content.focusTitle}</p>
            <p className="text-sm italic font-serif">{content.focusDesc}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WorkSection = ({ lang, setSection, setSelectedProject }: { lang: Language, setSection: (s: Section) => void, setSelectedProject: (id: number) => void }) => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-black/30 mb-2">{t[lang].work.subtitle}</h2>
        <p className="text-3xl font-serif italic">{t[lang].work.title}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {PROJECTS.map((project, idx) => {
          const isClickable = project.link !== "#";
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col bg-white border border-black/5 rounded-3xl p-4 transition-all duration-500 group hover:shadow-lg ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
              onClick={() => {
                if (isClickable) {
                  setSelectedProject(project.id);
                  setSection("project-detail");
                }
              }}
            >
              <div className="aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={project.image} 
                  alt={project.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-black font-medium"
                  >
                    <span>{project.title[lang]}</span>
                    {isClickable && <ArrowRight size={18} />}
                  </motion.div>
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-black/40 mb-1">{project.category[lang]}</p>
                    <h3 className="text-xl font-medium">{project.title[lang]}</h3>
                  </div>
                </div>
                <p className="text-sm text-black/60 mb-2">{project.description[lang]}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const ProjectDetail = ({ lang, projectId, setSection }: { lang: Language, projectId: number | null, setSection: (s: Section) => void }) => {
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <section className="py-32 px-6 max-w-3xl mx-auto text-center">
        <p>Project not found.</p>
        <button onClick={() => setSection("work")} className="mt-4 underline">Back to Work</button>
      </section>
    );
  }

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <button 
        onClick={() => setSection("work")}
        className="mb-12 flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors"
      >
        <ArrowRight size={16} className="rotate-180" />
        {lang === 'en' ? 'Back to Projects' : '返回项目'}
      </button>

      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-black/40 mb-4">{project.category[lang]}</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">{project.title[lang]}</h1>
        <p className="text-xl text-black/60 leading-relaxed">{project.description[lang]}</p>
      </div>

      <div className="aspect-video bg-stone-100 rounded-3xl overflow-hidden mb-16 border border-black/5">
        <img 
          src={project.image} 
          alt={project.title[lang]}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-serif mb-4">{lang === 'en' ? 'Background & Context' : '背景与上下文'}</h2>
              <p className="text-black/70 leading-relaxed">
                {lang === 'en' 
                  ? 'Detailed background context will be added here. This section will explain the "why" behind the project, the initial problem statement, and the overall goals.'
                  : '详细的背景信息将在这里添加。本节将解释项目背后的“原因”、最初的问题陈述以及总体目标。'}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">{lang === 'en' ? 'My Role & Challenges' : '我的角色与挑战'}</h2>
              <p className="text-black/70 leading-relaxed mb-4">
                {lang === 'en'
                  ? 'Information about my specific role and the challenges faced during the project will be detailed here.'
                  : '关于我在项目中的具体角色以及面临的挑战的信息将在这里详细说明。'}
              </p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-black/70 leading-relaxed">
                {project.details[lang].map((detail, i) => (
                  <li key={i} className="pl-1">{detail}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">{lang === 'en' ? 'The Work & Process' : '工作与过程'}</h2>
              <p className="text-black/70 leading-relaxed">
                {lang === 'en'
                  ? 'A deep dive into the actual work done, the process followed, and the technical or design decisions made.'
                  : '深入探讨实际完成的工作、遵循的流程以及做出的技术或设计决策。'}
              </p>
              {/* Placeholder for future screenshots/videos */}
              <div className="mt-8 p-8 bg-stone-50 border border-black/5 rounded-2xl text-center text-black/40 text-sm">
                [ {lang === 'en' ? 'Screenshots / Videos will be placed here' : '截图 / 视频将放置在这里'} ]
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">{lang === 'en' ? 'Results & Impact' : '结果与影响'}</h2>
              <p className="text-black/70 leading-relaxed">
                {lang === 'en'
                  ? 'The final outcomes, metrics, user feedback, and overall impact of the project.'
                  : '项目的最终成果、指标、用户反馈以及整体影响。'}
              </p>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-32 p-6 bg-stone-50 rounded-2xl border border-black/5">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-6 text-black/40">{lang === 'en' ? 'Project Info' : '项目信息'}</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-black/50 mb-1">{lang === 'en' ? 'Role' : '角色'}</p>
                  <p className="text-sm font-medium">Full-stack Developer / Product Manager</p>
                </div>
                <div>
                  <p className="text-xs text-black/50 mb-1">{lang === 'en' ? 'Timeline' : '时间线'}</p>
                  <p className="text-sm font-medium">2025</p>
                </div>
                <div>
                  <p className="text-xs text-black/50 mb-1">{lang === 'en' ? 'Link' : '链接'}</p>
                  {project.link !== "#" ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-sm font-medium underline hover:text-black/60 transition-colors inline-flex items-center gap-1"
                    >
                      {lang === 'en' ? 'Visit Live Site' : '访问线上网站'} <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-black/40 italic">
                      {lang === 'en' ? 'Coming Soon' : '敬请期待'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type CollageItem = 
  | { id: string; type: 'image'; src: string; alt: string; caption: { en: string; zh: string }; wrapperClass?: string; imageClass?: string }
  | { id: string; type: 'text'; emojis: string; content: { en: string; zh: string }; wrapperClass?: string };

const COLLAGE_ITEMS: CollageItem[] = [
  // Row 1: Image, Text, Image
  { id: 'img1', type: 'image', src: '/piano.jpeg', alt: 'Piano', caption: { en: '@ Piano', zh: '@ 钢琴' } },
  { id: 'txt1', type: 'text', emojis: '# 🎹 # 🎵 # ✨', content: { en: '<- Playing piano brings me peace. I also love strumming some tunes on my guitar. ->', zh: '<- 弹钢琴让我感到平静。我也喜欢用吉他弹奏一些曲调。->' } },
  { id: 'img2', type: 'image', src: '/guitar.jpeg', alt: 'Guitar', caption: { en: '@ Guitar', zh: '@ 吉他' } },
  
  // Row 2: Image, Image, Text
  { id: 'img3', type: 'image', src: '/choir1.jpeg', alt: 'Choir', caption: { en: '@ Choir', zh: '@ 合唱团' } },
  { id: 'img4', type: 'image', src: '/choir2.jpeg', alt: 'Choir', caption: { en: '@ Choir', zh: '@ 合唱团' } },
  { id: 'txt_choir', type: 'text', emojis: '# 🎤 # 🎶 # 👯‍♀️', content: { en: '<- Singing with the choir is always a blast.', zh: '<- 和合唱团一起唱歌总是很开心。' } },

  // Row 3: Text, Image, Image
  { id: 'txt2', type: 'text', emojis: '# 🎾 # 🏃‍♀️ # 💦', content: { en: 'Tennis since 8. Love the sweat and energy on the court. ->', zh: '8岁开始打网球。热爱球场上的汗水与活力。->' } },
  { id: 'img5', type: 'image', src: '/tennis1.png', alt: 'Tennis', caption: { en: '@ Tennis', zh: '@ 网球' } },
  { id: 'img6', type: 'image', src: '/tennis2.png', alt: 'Tennis', caption: { en: '@ Tennis', zh: '@ 网球' } },

  // Row 4: Image, Text, Image
  { id: 'img7', type: 'image', src: '/education1.jpeg', alt: 'Education', caption: { en: '@ Volunteer', zh: '@ 志愿服务' } },
  { id: 'txt3', type: 'text', emojis: '# 📚 # 🤝 # 💡', content: { en: '<- Volunteer teaching and crisis center responding. Giving back to the community. ->', zh: '<- 志愿支教和危机中心响应工作。回馈社区。->' } },
  { id: 'img8', type: 'image', src: '/education2.png', alt: 'Education', caption: { en: '@ Social Work', zh: '@ 社会工作' } },

  // Row 5: Image, Image, Text
  { id: 'img9', type: 'image', src: '/crisis1.jpeg', alt: 'Crisis Center', caption: { en: '@ Crisis Center', zh: '@ 危机中心' } },
  { id: 'img10', type: 'image', src: '/crisis2.jpeg', alt: 'Support', caption: { en: '@ Support', zh: '@ 支持' } },
  { id: 'txt4', type: 'text', emojis: '# 💜 # 🫂 # 🕊️', content: { en: '<- Supporting survivors of domestic violence and sexual assault at the crisis center.', zh: '<- 在危机中心为家庭暴力和性侵犯的幸存者提供支持。' } },
];

const LifeSection = ({ lang }: { lang: Language }) => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-black/30 mb-4">{t[lang].life.subtitle}</h2>
        <p className="text-3xl md:text-4xl font-serif italic max-w-2xl mx-auto leading-relaxed">{t[lang].life.title}</p>
      </div>

      {/* Collage Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        {COLLAGE_ITEMS.map((item) => {
          if (item.type === 'image') {
            return (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col gap-3 ${item.wrapperClass || ''}`}
              >
                <div className={`relative w-full overflow-hidden rounded-[2rem] shadow-sm ${item.imageClass || ''}`}>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-auto block rounded-[2rem]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-center text-sm font-medium text-black/60">{item.caption[lang]}</p>
              </motion.div>
            );
          }

          return (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`bg-white rounded-[2rem] p-8 flex flex-col justify-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-black/[0.02] ${item.wrapperClass || ''}`}
            >
              <div className="text-xl md:text-2xl mb-6 text-center tracking-wider">{item.emojis}</div>
              <p className="text-base md:text-lg leading-relaxed text-black/80 font-medium">{item.content[lang]}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const ResumeSection = ({ lang }: { lang: Language }) => {
  const cv = cvData[lang];
  const labels = t[lang].resume;

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="bg-white border border-black/5 p-8 md:p-16 rounded-3xl shadow-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 border-b border-black/5 pb-8">
          <div>
            <h2 className="text-4xl font-serif mb-2">{cv.name}</h2>
            <p className="text-black/50 tracking-widest uppercase text-xs font-medium mb-4">{cv.role}</p>
            <div className="flex flex-wrap gap-4 text-sm text-black/60">
              <a href={`mailto:${cv.contact.email}`} className="flex items-center gap-1 hover:text-black transition-colors"><Mail size={14}/> {cv.contact.email}</a>
              <span className="flex items-center gap-1"><Briefcase size={14}/> {cv.contact.phone}</span>
              <a href={`https://${cv.contact.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-black transition-colors"><Github size={14}/> {cv.contact.github}</a>
            </div>
          </div>
          <button className="px-4 py-2 bg-stone-50 border border-black/10 rounded-full hover:bg-stone-100 transition-colors flex items-center gap-2 text-sm font-medium">
            <FileText size={16} /> {labels.download}
          </button>
        </div>

        <div className="space-y-16">
          {/* Education */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-8 text-black/30 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-black/10"></div>
              {labels.education}
            </h3>
            <div className="space-y-6">
              {cv.education.map((edu, i) => (
                <div key={i}>
                  <div className="flex flex-col md:flex-row justify-between items-baseline mb-1">
                    <h4 className="font-medium text-lg">{edu.school}</h4>
                    <span className="text-sm font-mono text-black/40">{edu.period} | {edu.location}</span>
                  </div>
                  <p className="text-sm text-black/80 font-medium mb-2">{edu.degree}</p>
                  <p className="text-sm text-black/60 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-8 text-black/30 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-black/10"></div>
              {labels.experience}
            </h3>
            <div className="space-y-10">
              {cv.experience.map((exp, i) => (
                <div key={i} className="relative pl-5 border-l border-black/10">
                  <div className="absolute w-2.5 h-2.5 bg-black rounded-full -left-[5.5px] top-1.5 ring-4 ring-white" />
                  <div className="flex flex-col md:flex-row justify-between items-baseline mb-1">
                    <h4 className="font-medium text-lg">{exp.company}</h4>
                    <span className="text-sm font-mono text-black/40">{exp.period} | {exp.location}</span>
                  </div>
                  <p className="text-sm text-black/80 font-medium mb-3">{exp.role}</p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-black/60 leading-relaxed">
                    {exp.desc.map((d, j) => <li key={j} className="pl-1">{d}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-8 text-black/30 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-black/10"></div>
              {labels.projects}
            </h3>
            <div className="space-y-10">
              {cv.projects.map((proj, i) => (
                <div key={i} className="relative pl-5 border-l border-black/10">
                  <div className="absolute w-2.5 h-2.5 bg-black rounded-full -left-[5.5px] top-1.5 ring-4 ring-white" />
                  <div className="flex flex-col md:flex-row justify-between items-baseline mb-1">
                    <h4 className="font-medium text-lg">{proj.name}</h4>
                    <span className="text-sm font-mono text-black/40">{proj.period} | {proj.location}</span>
                  </div>
                  <p className="text-sm text-black/80 font-medium mb-3">{proj.role}</p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-black/60 leading-relaxed">
                    {proj.desc.map((d, j) => <li key={j} className="pl-1">{d}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-8 text-black/30 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-black/10"></div>
              {labels.skills}
            </h3>
            <div className="space-y-4 bg-stone-50/50 p-6 rounded-2xl border border-black/5">
              {Object.entries(cv.skills).map(([category, skills], i) => (
                <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
                  <span className="font-medium min-w-[140px] text-black/80">{category}</span>
                  <span className="text-black/60 leading-relaxed">{skills}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const content = t[lang].footer;
  return (
    <footer className="py-6 px-6 border-t border-black/5 bg-stone-50/50 mt-auto">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
          © 2026 Runchu Wu
        </p>
        <a 
          href="mailto:rw312@duke.edu"
          className="px-5 py-2 bg-black text-white rounded-full text-xs font-medium hover:bg-black/80 transition-colors"
        >
          {content.contact}
        </a>
      </div>
    </footer>
  );
};

export default function App() {
  const [section, setSection] = useState<Section>("home");
  const [lang, setLang] = useState<Language>("en");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-black selection:text-white">
      <Navbar activeSection={section} setSection={setSection} lang={lang} setLang={setLang} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {section === "home" && (
              <>
                <Hero setSection={setSection} lang={lang} />
              </>
            )}
            {section === "work" && <WorkSection lang={lang} setSection={setSection} setSelectedProject={setSelectedProject} />}
            {section === "life" && <LifeSection lang={lang} />}
            {section === "resume" && <ResumeSection lang={lang} />}
            {section === "project-detail" && <ProjectDetail lang={lang} projectId={selectedProject} setSection={setSection} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
