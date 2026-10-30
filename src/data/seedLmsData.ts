import type {
  Profile,
  Course,
  Channel,
  CourseEnrollment,
  ChannelAccess,
  LearningProgress,
  AdminAuditLog,
  CompanyNewsArticle,
  CompanyVideoItem,
  TopPerformerEntry,
  EmailLogEntry,
  HodMotto,
  LdTeamMember,
  LicenseTrainingLesson,
  LicenseChapter,
  SkillDevelopmentResource,
  SkillCategory,
  SkillQuiz,
  SkillQuizQuestion,
  LicenseQuiz,
  LicenseQuizQuestion,
  ProductKnowledgeItem,
  ProductQuiz,
  ProductQuizQuestion,
  CompanyBulletinItem,
} from '../types/lms.ts';

export const INITIAL_PROFILES: Profile[] = [
  {
    id: 'u0000000-0000-0000-0000-000000000001',
    username: 'admin',
    full_name: 'U Aung Thu',
    email: 'admin@kbzlife.com',
    role: 'admin',
    account_status: 'active',
    employee_id: 'KBZ-ADM-001',
    department: 'LMS Administration & HR Governance',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
    must_change_password: true,
    created_at: '2026-01-15T08:00:00Z',
    updated_at: '2026-10-20T10:00:00Z',
    last_sign_in_at: '2026-10-20T21:00:00Z',
  },
  {
    id: 'u0000000-0000-0000-0000-000000000002',
    username: 'daw.thida',
    full_name: 'Daw Thida',
    email: 'daw.thida@kbzlife.com',
    role: 'user',
    account_status: 'active',
    employee_id: 'KBZ-UW-104',
    department: 'Underwriting & Policy Issue',
    avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
    must_change_password: false,
    created_at: '2026-02-01T09:30:00Z',
    updated_at: '2026-10-18T14:20:00Z',
    last_sign_in_at: '2026-10-20T18:45:00Z',
  },
  {
    id: 'u0000000-0000-0000-0000-000000000003',
    username: 'ko.zawmin',
    full_name: 'Ko Zaw Min',
    email: 'ko.zawmin@kbzlife.com',
    role: 'user',
    account_status: 'active',
    employee_id: 'KBZ-AGY-208',
    department: 'Alliance Agency Network (Mandalay Region)',
    avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
    must_change_password: false,
    created_at: '2026-03-10T11:15:00Z',
    updated_at: '2026-10-19T08:00:00Z',
    last_sign_in_at: '2026-10-20T16:10:00Z',
  },
  {
    id: 'u0000000-0000-0000-0000-000000000004',
    username: 'ma.hninyu',
    full_name: 'Ma Hnin Yu',
    email: 'susp.user@kbzlife.com',
    role: 'user',
    account_status: 'suspended',
    employee_id: 'KBZ-OPS-330',
    department: 'Branch Operations (Yangon South)',
    avatar_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80',
    must_change_password: false,
    created_at: '2026-04-12T13:45:00Z',
    updated_at: '2026-10-15T09:20:00Z',
    last_sign_in_at: '2026-10-14T11:30:00Z',
  },
  {
    id: 'u0000000-0000-0000-0000-000000000005',
    username: 'kyaw.zin',
    full_name: 'U Kyaw Zin Lat',
    email: 'kyaw.zin@kbzlife.com',
    role: 'user',
    account_status: 'active',
    employee_id: 'KBZ-BAN-012',
    department: 'Bancassurance Channel Headquarters',
    avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80',
    must_change_password: false,
    created_at: '2026-05-20T10:00:00Z',
    updated_at: '2026-10-17T11:00:00Z',
    last_sign_in_at: '2026-10-20T14:15:00Z',
  },
  {
    id: 'u0000000-0000-0000-0000-000000000006',
    username: 'mg.phyowai',
    full_name: 'Mg Phyo Wai',
    email: 'phyo.wai@kbzlife.com',
    role: 'user',
    account_status: 'pending',
    employee_id: 'KBZ-REG-501',
    department: 'Retail Agency Distribution (Naypyitaw)',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    must_change_password: false,
    created_at: '2026-10-20T19:30:00Z',
    updated_at: '2026-10-20T19:30:00Z',
  },
  {
    id: 'u0000000-0000-0000-0000-000000000007',
    username: 'daw.ayemaw',
    full_name: 'Daw Aye Aye Maw',
    email: 'aye.maw@kbzlife.com',
    role: 'user',
    account_status: 'rejected',
    employee_id: 'KBZ-REG-502',
    department: 'External Affiliate Contractor',
    avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80',
    must_change_password: false,
    created_at: '2026-10-19T14:20:00Z',
    updated_at: '2026-10-20T08:15:00Z',
  },
];

export const INITIAL_COURSES: Course[] = [
  {
    id: 'c0000000-0000-0000-0000-000000000001',
    title: 'KBZLife Foundation: Underwriting & Risk Analysis',
    description:
      'Master the core life underwriting guidelines, standard and substandard medical classifications, financial underwriting thresholds, and ethical appraisal rules for KBZLife Insurance.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    category: 'Underwriting & Actuarial',
    published: true,
    duration_hours: 6.0,
    modules_count: 8,
    created_at: '2026-01-10T10:00:00Z',
    updated_at: '2026-10-10T10:00:00Z',
    learning_outcomes: [
      'Interpret KBZLife standard medical and non-medical underwriting limits',
      'Accurately calculate financial insurance capacity and anti-selection risks',
      'Handle substandard health loading and policy exclusion endorsements',
    ],
  },
  {
    id: 'c0000000-0000-0000-0000-000000000002',
    title: 'AML/CFT & Regulatory Compliance 2026',
    description:
      'Mandatory annual regulatory certification covering Anti-Money Laundering, Counter-Financing of Terrorism, and Central Bank & IBRB supervisory directives.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    category: 'Compliance & Ethics',
    published: true,
    duration_hours: 4.0,
    modules_count: 5,
    created_at: '2026-01-12T10:00:00Z',
    updated_at: '2026-10-12T10:00:00Z',
    learning_outcomes: [
      'Execute robust Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD)',
      'Detect red flags in single-premium policies and large cash transactions',
      'Submit Suspicious Transaction Reports (STR) through approved institutional channels',
    ],
  },
  {
    id: 'c0000000-0000-0000-0000-000000000003',
    title: 'Customer Consultation & Advisory Mastery',
    description:
      'Professional life advisory curriculum focused on empathetic consultative dialogues, family protection needs analysis, and trustworthy claim advisory.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    category: 'Advisory & Customer Care',
    published: true,
    duration_hours: 5.0,
    modules_count: 6,
    created_at: '2026-02-05T10:00:00Z',
    updated_at: '2026-10-15T10:00:00Z',
    learning_outcomes: [
      'Conduct holistic family protection and education savings needs audits',
      'Articulate policy benefits and exclusions in transparent Myanmar language',
      'Provide compassionate, efficient support during beneficiary claims processing',
    ],
  },
  {
    id: 'c0000000-0000-0000-0000-000000000004',
    title: 'Group Life & Corporate Welfare Solutions',
    description:
      'Structuring comprehensive group term life, executive health riders, and corporate employee welfare schemes for institutional clients across Myanmar.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    category: 'Corporate Solutions',
    published: true,
    duration_hours: 3.5,
    modules_count: 4,
    created_at: '2026-03-01T10:00:00Z',
    updated_at: '2026-10-18T10:00:00Z',
    learning_outcomes: [
      'Design tailored group life proposals for corporate and NGO workforces',
      'Calculate group risk mortality pooling and claims retention limits',
      'Manage annual policy renewal audits and employee roster adjustments',
    ],
  },
];

export const INITIAL_CHANNELS: Channel[] = [
  {
    id: 'a0000000-0000-0000-0000-000000000001',
    course_id: 'c0000000-0000-0000-0000-000000000001',
    title: 'Bancassurance Channel Mastery',
    description:
      'Dedicated learning stream for KBZ Bank branch relationship executives, bancassurance specialists, and customer-facing advisors.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    published: true,
    order_index: 1,
    tags: ['Bancassurance', 'KBZ Bank Branch', 'Customer Consultation'],
    created_at: '2026-01-20T10:00:00Z',
    updated_at: '2026-10-12T10:00:00Z',
    key_highlights: [
      'In-branch ethical presentation guidelines',
      'Seamless digital enrollment via bank partner terminals',
      'Immediate referral escalation and advisor synchronization',
    ],
  },
  {
    id: 'a0000000-0000-0000-0000-000000000002',
    course_id: 'c0000000-0000-0000-0000-000000000003',
    title: 'Alliance Channel Growth & Partner Ethics',
    description:
      'Specialized curriculum for licensed agency leaders, regional business associates, and independent life protection consultants.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    published: true,
    order_index: 2,
    tags: ['Alliance Channel', 'Agency Leadership', 'Advisor Honor Code'],
    created_at: '2026-02-15T10:00:00Z',
    updated_at: '2026-10-14T10:00:00Z',
    key_highlights: [
      'Agency team coaching and ethical recruitment',
      'Regional community outreach workshops',
      'Long-term client relationship governance and retention',
    ],
  },
  {
    id: 'a0000000-0000-0000-0000-000000000003',
    course_id: 'c0000000-0000-0000-0000-000000000004',
    title: 'Corporate Channel & Key Account Governance',
    description:
      'Advanced executive briefings for enterprise sales managers handling enterprise conglomerates, manufacturing plants, and financial institutions.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    published: true,
    order_index: 3,
    tags: ['Corporate Channel', 'Group Life', 'Key Accounts'],
    created_at: '2026-03-05T10:00:00Z',
    updated_at: '2026-10-16T10:00:00Z',
    key_highlights: [
      'Corporate tendering and customized benefit design',
      'Executive service level agreements (SLAs)',
      'Enterprise group claims turnaround benchmarks',
    ],
  },
  {
    id: 'a0000000-0000-0000-0000-000000000004',
    course_id: 'c0000000-0000-0000-0000-000000000002',
    title: 'Compliance & Ethics Briefing Channel',
    description:
      'Weekly micro-briefings from KBZLife legal counsel covering updated sanctions, AML typologies, and data confidentiality.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    published: true,
    order_index: 4,
    tags: ['Regulatory Briefings', 'Ethics Case Studies', 'Legal Notices'],
    created_at: '2026-03-20T10:00:00Z',
    updated_at: '2026-10-18T10:00:00Z',
    key_highlights: [
      'Real-world insurance fraud case studies',
      'Confidential whistleblowing channels and protections',
      'Quarterly compliance assessment milestones',
    ],
  },
];

export const INITIAL_NEWS: CompanyNewsArticle[] = [
  {
    id: 'n0000000-0000-0000-0000-000000000001',
    title: 'KBZ Universal Life ကိုတစ်နှစ် ၆ သိန်းသွင်းပြီး အသက်အာမခံထားရှိသူအား (သိန်း ၂၁၀)ကျပ် အာမခံလျော်ကြေးငွေပေးအပ်ခဲ့ခြင်း',
    summary:
      'တစ်ခါတစ်ရံ ဘဝဟာ ကြိုတင်မသိနိုင်တဲ့ အခြေအနေတွေကို ရုတ်တရက် ချပြတတ်ပါတယ်...မနေ့တုန်းကပဲ ကျန်းမာနေသူတစ်ယောက်က ဒီနေ့မှာတော့ "ဦးနှောက်သွေးကြောပေါက်" ပြီးအသက်ဆုံးရှုံးသွားနိုင်ပါတယ်...ဒီလိုအချိန်မှာ "င့ါမိသားစုအတွက် ဘာကျန်ခဲ့မလဲ"ဆိုတဲ့ မေးခွန်းကအရေးအကြီးဆုံးပါ။ KBZ Universal Life ကိုရွေးချယ်ထားခဲ့သော Customer တစ်ယောက်က တစ်နှစ်စာ ပရီမီယံကြေး (၆)သိန်းကျပ်သွင်းပြီး အာမခံအကာအကွယ် သိန်း(၂၁၀)ကျပ်ကို KBZ LIFE Insurance ကနေ အကျိုးခံစားခွင့်နဲ့အညီ အကျိုး ခံစားခွင့်ရှိသူထံပြန်လည်ပေးအပ်ခဲ့ပါတယ်။',
    content: [
      'တစ်ခါတစ်ရံ ဘဝဟာ ကြိုတင်မသိနိုင်တဲ့ အခြေအနေတွေကို ရုတ်တရက် ချပြတတ်ပါတယ်...မနေ့တုန်းကပဲ ကျန်းမာနေသူတစ်ယောက်က ဒီနေ့မှာတော့ "ဦးနှောက်သွေးကြောပေါက်" ပြီးအသက်ဆုံးရှုံးသွားနိုင်ပါတယ်...ဒီလိုအချိန်မှာ "င့ါမိသားစုအတွက် ဘာကျန်ခဲ့မလဲ"ဆိုတဲ့ မေးခွန်းကအရေးအကြီးဆုံးပါ။',
      'KBZ Universal Life ကိုရွေးချယ်ထားခဲ့သော Customer တစ်ယောက်က တစ်နှစ်စာ ပရီမီယံကြေး (၆)သိန်းကျပ်သွင်းပြီး အာမခံအကာအကွယ် သိန်း(၂၁၀)ကျပ်ကို KBZ LIFE Insurance ကနေ အကျိုးခံစားခွင့်နဲ့အညီ အကျိုး ခံစားခွင့်ရှိသူထံပြန်လည်ပေးအပ်ခဲ့ပါတယ်။',
      'KBZ LIFE Insurance အနေဖြင့် အသက်အာမခံထားရှိသူ မိသားစုများ၏ မမျှော်လင့်သော အခက်အခဲကာလများတွင် မိသားစုအတွက် ငွေကြေးလုံခြုံမှုနှင့် ကာကွယ်မှုအပြည့်အဝရရှိစေရန် ကတိကဝတ်ပြုထားသည့်အတိုင်း လျော်ကြေးငွေများကို အချိန်နှင့်တပြေးညီ တိကျမှန်ကန်စွာ စိစစ်ထုတ်ပေးလျက်ရှိပါသည်။',
    ],
    cover_image_url: '/assets/aistudio/viber_image_2026-10-30_09-37-02-547_9a4c3237.jpg',
    category: 'အသက်အာမခံ လျော်ကြေးငွေ ပေးအပ်ခြင်း',
    status: 'published',
    is_featured: true,
    author_name: 'KBZ LIFE Insurance Co.,Ltd.',
    read_time_minutes: 2,
    published_at: '2026-10-30T09:37:00Z',
    created_at: '2026-10-30T09:37:00Z',
    updated_at: '2026-10-30T09:37:00Z',
  },
  {
    id: 'n0000000-0000-0000-0000-000000000002',
    title: 'ဘန်ကောက်ထိဆေးကုသနိုင်တဲ့ "နိုင်ငံတကာဆေးကုသမှုအာမခံ (I Medical Insurance)" ကို Claim လျော်ကြေးငွေပေးအပ်ခြင်း',
    summary:
      'သိန်း (၁၂၀၀)အထိ အကာအကွယ်ရတဲ့ I Medical ကိုဝယ်ယူထားတဲ့ Customer တစ်ဦးက "မျက်လုံးသွေးကြောရောင်တာကြောင့် ဘန်ကောက်မှာ ဆေးကုသမှုခံယူခဲ့ပါတယ်" I Medical Insurance ရဲ့ Grand Plan 2 Plus အတိုင်း အာမခံပေါ် လစီ ငွေကျပ်(၂၇)သိန်းကို လျော်ကြေးအနေနဲ့ ပေးအပ်ခဲ့ပါတယ်...',
    content: [
      'သိန်း (၁၂၀၀)အထိ အကာအကွယ်ရတဲ့ I Medical ကိုဝယ်ယူထားတဲ့ Customer တစ်ဦးက "မျက်လုံးသွေးကြောရောင်တာကြောင့် ဘန်ကောက်မှာ ဆေးကုသမှုခံယူခဲ့ပါတယ်"',
      'I Medical Insurance ရဲ့ Grand Plan 2 Plus အတိုင်း အာမခံပေါ် လစီ ငွေကျပ်(၂၇)သိန်းကို လျော်ကြေးအနေနဲ့ ပေးအပ်ခဲ့ပါတယ်...',
      'KBZ LIFE Insurance ၏ နိုင်ငံတကာဆေးကုသမှုအာမခံ (i-Medical Insurance) သည် မြန်မာနိုင်ငံတွင်သာမက ဘန်ကောက်နှင့် နိုင်ငံတကာအဆင့်မီ ဆေးရုံကြီးများတွင်ပါ စိတ်အေးချမ်းသာစွာ ဆေးကုသမှုခံယူနိုင်ရန် အထူးအကာအကွယ်ပေးထားပြီး အာမခံထားရှိသူများအတွက် ဆေးကုသစရိတ် လျော်ကြေးငွေများကို လျင်မြန်ချောမွေ့စွာ ထုတ်ပေးလျက်ရှိပါသည်။',
    ],
    cover_image_url: '/assets/aistudio/viber_image_2026-10-30_09-37-03-813_7790504d.jpg',
    category: 'ကျန်းမာရေးအာမခံ လျော်ကြေးငွေ ပေးအပ်ခြင်း',
    status: 'published',
    is_featured: false,
    author_name: 'KBZ LIFE Insurance Co.,Ltd.',
    read_time_minutes: 2,
    published_at: '2026-10-30T09:37:00Z',
    created_at: '2026-10-30T09:37:00Z',
    updated_at: '2026-10-30T09:37:00Z',
  },
  {
    id: 'n0000000-0000-0000-0000-000000000003',
    title: 'Annual Vietnam Trip',
    summary:
      'United in purpose, stronger as a team. Grateful for the shared ideas, teamwork and momentum captured in these group movements.',
    content: [
      'United in purpose, stronger as a team. Grateful for the shared ideas, teamwork and momentum captured in these group movements.',
      'KBZLife team members united during the annual corporate retreat in Da Nang, Vietnam, celebrating collective achievements, cross-functional collaboration, and cultural alignment under the dragon bridge.',
    ],
    cover_image_url: '/assets/aistudio/viber_image_2026-10-30_09-37-04-954_3893c8d6.png',
    category: 'Corporate Culture & Events',
    status: 'published',
    is_featured: false,
    author_name: 'KBZ LIFE Internal Communications',
    read_time_minutes: 1,
    published_at: '2026-10-30T09:37:00Z',
    created_at: '2026-10-30T09:37:00Z',
    updated_at: '2026-10-30T09:37:00Z',
  },
  {
    id: 'n0000000-0000-0000-0000-000000000004',
    title: 'Our Staff Party "2026"',
    summary:
      'We’re so happy to share that our KBZ Life Staff Party 2026 was held at Inya Lake Hotel in Yangon! All KBZ Life employees across Myanmar came together and joined the celebration with great energy and happiness. It was such a fun and memorable time for everyone!',
    content: [
      'We’re so happy to share that our KBZ Life Staff Party 2026 was held at Inya Lake Hotel in Yangon!',
      'All KBZ Life employees across Myanmar came together and joined the celebration with great energy and happiness. It was such a fun and memorable time for everyone!',
    ],
    cover_image_url: '/assets/aistudio/viber_image_2026-10-30_09-37-06-086_b8a4007c.jpg',
    category: 'Corporate Celebration & Events',
    status: 'published',
    is_featured: false,
    author_name: 'KBZ LIFE Internal Communications',
    read_time_minutes: 1,
    published_at: '2026-10-30T09:37:00Z',
    created_at: '2026-10-30T09:37:00Z',
    updated_at: '2026-10-30T09:37:00Z',
  },
  {
    id: 'n0000000-0000-0000-0000-000000000005',
    title: 'A Great Day with Great People 🎉',
    summary:
      'Our KBZ LIFE Insurance all-hands meeting was full of energy, ideas, and inspiration. 💙 Proud of this team and excited for the journey ahead.',
    content: [
      'Our KBZ LIFE Insurance all-hands meeting was full of energy, ideas, and inspiration. 💙',
      'Proud of this team and excited for the journey ahead.',
    ],
    cover_image_url: '/assets/aistudio/viber_image_2026-10-30_09-37-07-116_fc1102ab.png',
    category: 'Corporate Culture & Events',
    status: 'published',
    is_featured: false,
    author_name: 'KBZ LIFE Internal Communications',
    read_time_minutes: 1,
    published_at: '2026-10-30T09:37:00Z',
    created_at: '2026-10-30T09:37:00Z',
    updated_at: '2026-10-30T09:37:00Z',
  },
];

export const INITIAL_VIDEOS: CompanyVideoItem[] = [
  {
    id: 'v0000000-0000-0000-0000-000000000001',
    title: "တောင်ကြီးမြို့မှာ ကျင်းပခဲ့တဲ့ KBZ LIFE ရဲ့ '' အလင်းများဝေစည် သီတင်းကျွတ်ရာသီ '' ဆီမီးထွန်းပွဲကြီး",
    description:
      'တောင်ကြီးမြို့တွင် ခမ်းနားသိုက်မြိုက်စွာ ကျင်းပပြုလုပ်ခဲ့သော KBZ LIFE ၏ "အလင်းများဝေစည် သီတင်းကျွတ်ရာသီ" ဆီမီးထွန်းပွဲတော် အခမ်းအနား မှတ်တမ်းတင်ဗီဒီယို။ ဝန်ထမ်းများနှင့် မိသားစုများ၊ ဒေသခံပြည်သူများ စုပေါင်းဆင်နွှဲခဲ့ကြသည့် အမှတ်တရ မြင်ကွင်းများ။',
    video_url: 'https://youtu.be/zy51ZSz_mtk?si=vLhbHucTrgrJZT7p',
    thumbnail_url: 'https://img.youtube.com/vi/zy51ZSz_mtk/hqdefault.jpg',
    category: 'Corporate Events & Highlights',
    display_order: 1,
    duration: '03:45',
    status: 'published',
    published_at: '2026-10-30T10:00:00Z',
    created_at: '2026-10-30T10:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'v0000000-0000-0000-0000-000000000002',
    title: 'မန္တလေးမြို့မှာ စည်စည်ကားကား ကျင်းပခဲ့တဲ့ " အလင်းများဝေစည် သီတင်းကျွတ်ရာသီ " ဆီမီးထွန်းပွဲတော်ကြီး',
    description:
      'မန္တလေးမြို့တွင် စည်စည်ကားကား ခမ်းနားသိုက်မြိုက်စွာ ကျင်းပပြုလုပ်ခဲ့သော KBZ LIFE ၏ "အလင်းများဝေစည် သီတင်းကျွတ်ရာသီ" ဆီမီးထွန်းပွဲတော်ကြီး မှတ်တမ်းတင်ဗီဒီယို။ ဝန်ထမ်းများနှင့် မိသားစုများ၊ ဒေသခံပြည်သူများ စုပေါင်းဆင်နွှဲခဲ့ကြသည့် အမှတ်တရ မြင်ကွင်းများ။',
    video_url: 'https://youtu.be/2LfW4_synno?si=Q4Z0yA74vnzUQvUz',
    thumbnail_url: 'https://img.youtube.com/vi/2LfW4_synno/hqdefault.jpg',
    category: 'Corporate Events & Highlights',
    display_order: 2,
    duration: '03:20',
    status: 'published',
    published_at: '2026-10-30T11:00:00Z',
    created_at: '2026-10-30T11:00:00Z',
    updated_at: '2026-10-30T11:00:00Z',
  },
  {
    id: 'v0000000-0000-0000-0000-000000000003',
    title: 'Life Insurance Career ကို ဘာလို့ရွေးချယ်သင့်တာလဲ?',
    description:
      'KBZ LIFE Insurance တွင် အသက်အာမခံအကြံပေးပညာရှင် (Life Insurance Career) အဖြစ် ရွေးချယ်လုပ်ကိုင်ခြင်းဖြင့် ရရှိနိုင်မည့် အကျိုးကျေးဇူးများနှင့် အသက်မွေးဝမ်းကျောင်းဆိုင်ရာ အခွင့်အလမ်းများ မျှဝေဆွေးနွေးမှု။',
    video_url: 'https://youtu.be/dhktz2R1KW8?si=N-Ev6AAK3e41iYD2',
    thumbnail_url: 'https://img.youtube.com/vi/dhktz2R1KW8/hqdefault.jpg',
    category: 'Career & Professional Growth',
    display_order: 3,
    duration: '04:15',
    status: 'published',
    published_at: '2026-10-30T12:00:00Z',
    created_at: '2026-10-30T12:00:00Z',
    updated_at: '2026-10-30T12:00:00Z',
  },
  {
    id: 'v0000000-0000-0000-0000-000000000004',
    title: '" အသက်အာမခံဆိုတာ ထားကိုထားသင့်တဲ့ အရာလို့ အမကတော့ မြင်တယ် "',
    description:
      'KBZ LIFE Insurance တွင် အသက်အာမခံထားရှိခြင်း၏ အရေးပါပုံနှင့် မိသားစုလုံခြုံမှုအတွက် မရှိမဖြစ်လိုအပ်သည့် အကာအကွယ်ဖြစ်ကြောင်း အတွေ့အကြုံမျှဝေထားသည့် အင်တာဗျူးမှတ်တမ်းတင်ဗီဒီယို။',
    video_url: 'https://youtu.be/w91PC5xxxDw?si=ZsboDshBba-cUzGo',
    thumbnail_url: 'https://img.youtube.com/vi/w91PC5xxxDw/hqdefault.jpg',
    category: 'Customer Stories & Testimonials',
    display_order: 4,
    duration: '03:15',
    status: 'published',
    published_at: '2026-10-30T13:00:00Z',
    created_at: '2026-10-30T13:00:00Z',
    updated_at: '2026-10-30T13:00:00Z',
  },
];

export const INITIAL_TOP_PERFORMERS: TopPerformerEntry[] = [
  {
    id: 'tp000000-0000-0000-0000-000000000001',
    employee_name: 'Daw May Thu Khaing',
    employee_title: 'Senior Agency Leader',
    department: 'Mandalay Central Agency',
    channel: 'Alliance Channel',
    achievement_title: 'Top Life Advisor — Highest Policy Retention Rate',
    achievement_description:
      'Achieved a 98.4% persistency rate while onboarding 140 new family protection policies across upper Myanmar.',
    image_url:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    recognition_period: 'January 2026',
    month_index: 1,
    ranking: 1,
    award_date: '2026-01-31',
    status: 'published',
    created_at: '2026-02-01T10:00:00Z',
    updated_at: '2026-02-01T10:00:00Z',
  },
  {
    id: 'tp000000-0000-0000-0000-000000000002',
    employee_name: 'U Kyaw Zin Lat',
    employee_title: 'Bancassurance Branch Executive',
    department: 'KBZ Bank Kyauktada Branch',
    channel: 'Bancassurance Channel',
    achievement_title: 'Top Bank Branch Production & Customer Satisfaction',
    achievement_description:
      'Surpassed annual endowment protection targets by 135% through transparent customer consultation.',
    image_url:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    recognition_period: 'January 2026',
    month_index: 1,
    ranking: 1,
    award_date: '2026-01-31',
    status: 'published',
    created_at: '2026-02-01T10:00:00Z',
    updated_at: '2026-02-01T10:00:00Z',
  },
  {
    id: 'tp000000-0000-0000-0000-000000000003',
    employee_name: 'Daw Khin Sandar',
    employee_title: 'Corporate Account Manager',
    department: 'Headquarters Enterprise Risk Group',
    channel: 'Corporate Channel',
    achievement_title: 'Largest Group Life Onboarding',
    achievement_description:
      'Structured group life and medical rider coverage for a 3,200-employee manufacturing conglomerate.',
    image_url:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    recognition_period: 'January 2026',
    month_index: 1,
    ranking: 1,
    award_date: '2026-01-31',
    status: 'published',
    created_at: '2026-02-01T10:00:00Z',
    updated_at: '2026-02-01T10:00:00Z',
  },
  {
    id: 'tp000000-0000-0000-0000-000000000004',
    employee_name: 'Ko Thet Naing Oo',
    employee_title: 'Senior Field Consultant',
    department: 'Taunggyi Regional Center',
    channel: 'Alliance Channel',
    achievement_title: 'Outstanding Regional Outreach & Family Protection',
    achievement_description:
      'Delivered educational life protection seminars across Shan State, protecting 110 farming households.',
    image_url:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    recognition_period: 'February 2026',
    month_index: 2,
    ranking: 1,
    award_date: '2026-02-28',
    status: 'published',
    created_at: '2026-03-01T10:00:00Z',
    updated_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'tp000000-0000-0000-0000-000000000005',
    employee_name: 'July Moe',
    employee_title: 'Alliance Channel Advisor',
    department: 'Alliance Channel',
    channel: 'Alliance Channel',
    achievement_title: 'Top Performer of the Month — September 2025',
    achievement_description:
      'Recognized for exceptional sales excellence and customer relationship leadership in the Alliance Channel.',
    image_url: '/assets/aistudio/file_00000000ced08211860ef0e8c4f007d8_a0f82840.png',
    recognition_period: 'September 2025',
    month_index: 9,
    ranking: 1,
    award_date: '2025-09-30',
    status: 'published',
    created_at: '2025-10-01T10:00:00Z',
    updated_at: '2025-10-01T10:00:00Z',
  },
  {
    id: 'tp000000-0000-0000-0000-000000000006',
    employee_name: 'Sat Naing Htun',
    employee_title: 'Bancassurance Specialist',
    department: 'Bancassurance Channel',
    channel: 'Bancassurance Channel',
    achievement_title: 'Top Performer of the Month — September 2025',
    achievement_description:
      'Honored for outstanding bank branch advisory performance and exceptional client satisfaction.',
    image_url: '/assets/aistudio/file_000000003e7082119e98c99ea13ff520_8dfd6fd7.png',
    recognition_period: 'September 2025',
    month_index: 9,
    ranking: 1,
    award_date: '2025-09-30',
    status: 'published',
    created_at: '2025-10-01T10:00:00Z',
    updated_at: '2025-10-01T10:00:00Z',
  },
  {
    id: 'tp000000-0000-0000-0000-000000000007',
    employee_name: 'Sai Win Thu',
    employee_title: 'Corporate Direct Sales Executive',
    department: 'Corporate Direct Sales Channel',
    channel: 'Corporate Channel',
    achievement_title: 'Top Performer of the Month — September 2025',
    achievement_description:
      'Recognized for highest enterprise life coverage acquisitions and corporate partnerships.',
    image_url: '/assets/aistudio/file_00000000d9548207b797bdc3604e12c8_d4352730.png',
    recognition_period: 'September 2025',
    month_index: 9,
    ranking: 1,
    award_date: '2025-09-30',
    status: 'published',
    created_at: '2025-10-01T10:00:00Z',
    updated_at: '2025-10-01T10:00:00Z',
  },
  {
    id: 'tp000000-0000-0000-0000-000000000008',
    employee_name: 'Zin Mar Wai',
    employee_title: 'Alliance Channel Advisor',
    department: 'Alliance Channel',
    channel: 'Alliance Channel',
    achievement_title: 'Top Performer of the Month — November 2025',
    achievement_description:
      'Recognized for exceptional sales leadership and agency growth in the Alliance Channel.',
    image_url: '/assets/aistudio/file_000000000cb0821184775f7d6aadd196_93ad2ed3.png',
    recognition_period: 'November 2025',
    month_index: 11,
    ranking: 1,
    award_date: '2025-11-30',
    status: 'published',
    created_at: '2025-12-01T10:00:00Z',
    updated_at: '2025-12-01T10:00:00Z',
  },
  {
    id: 'tp000000-0000-0000-0000-000000000009',
    employee_name: 'Sai Win Thu',
    employee_title: 'Corporate Direct Sales Executive',
    department: 'Corporate Direct Sales Channel',
    channel: 'Corporate Channel',
    achievement_title: 'Top Performer of the Month — November 2025',
    achievement_description:
      'Recognized for repeated outstanding commercial life solutions and corporate portfolio expansion.',
    image_url: '/assets/aistudio/file_00000000a17c8211aae3bd3fa8ee02f4_a46c2e40.png',
    recognition_period: 'November 2025',
    month_index: 11,
    ranking: 1,
    award_date: '2025-11-30',
    status: 'published',
    created_at: '2025-12-01T10:00:00Z',
    updated_at: '2025-12-01T10:00:00Z',
  },
  {
    id: 'tp000000-0000-0000-0000-000000000010',
    employee_name: 'Zin Naing Htun',
    employee_title: 'Alliance Channel Specialist',
    department: 'Alliance Channel',
    channel: 'Alliance Channel',
    achievement_title: 'Top Performer of the Month — October 2025',
    achievement_description:
      'Honored for exceptional partner relationship management and retail distribution growth.',
    image_url: '/assets/aistudio/aifaceswap-d42f5df74846f1ccf67cee0a6bd0f132_c2a92958.jpg',
    recognition_period: 'October 2025',
    month_index: 10,
    ranking: 1,
    award_date: '2025-10-31',
    status: 'published',
    created_at: '2025-11-01T10:00:00Z',
    updated_at: '2025-11-01T10:00:00Z',
  },
  {
    id: 'tp000000-0000-0000-0000-000000000011',
    employee_name: 'Thu Kha',
    employee_title: 'Bancassurance Consultant',
    department: 'Bancassurance Channel',
    channel: 'Bancassurance Channel',
    achievement_title: 'Top Performer of the Month — October 2025',
    achievement_description:
      'Recognized for exceptional bank customer satisfaction and high-performing branch advisory results.',
    image_url: '/assets/aistudio/aifaceswap-a24b639f50bff103c50d409b894cd559__1__5f37f9b3.jpg',
    recognition_period: 'October 2025',
    month_index: 10,
    ranking: 1,
    award_date: '2025-10-31',
    status: 'published',
    created_at: '2025-11-01T10:00:00Z',
    updated_at: '2025-11-01T10:00:00Z',
  },
  {
    id: 'tp000000-0000-0000-0000-000000000012',
    employee_name: 'Kyaw Zin Than',
    employee_title: 'Corporate Direct Sales Executive',
    department: 'Corporate Direct Sales Channel',
    channel: 'Corporate Channel',
    achievement_title: 'Top Performer of the Month — October 2025',
    achievement_description:
      'Recognized for outstanding group life client acquisition and nationwide enterprise portfolio growth.',
    image_url: '/assets/aistudio/aifaceswap-a33e11fd845940782a5ed20119b5fa50__2__cb7a3bb8.jpg',
    recognition_period: 'October 2025',
    month_index: 10,
    ranking: 1,
    award_date: '2025-10-31',
    status: 'published',
    created_at: '2025-11-01T10:00:00Z',
    updated_at: '2025-11-01T10:00:00Z',
  },
];

export const INITIAL_ENROLLMENTS: CourseEnrollment[] = [
  {
    id: 'e0000000-0000-0000-0000-000000000001',
    user_id: 'u0000000-0000-0000-0000-000000000002', // Daw Thida
    course_id: 'c0000000-0000-0000-0000-000000000001', // Foundation Underwriting
    status: 'enrolled',
    assigned_by: 'u0000000-0000-0000-0000-000000000001',
    assigned_at: '2026-09-01T10:00:00Z',
    expires_at: '2027-09-01T10:00:00Z',
  },
  {
    id: 'e0000000-0000-0000-0000-000000000002',
    user_id: 'u0000000-0000-0000-0000-000000000002', // Daw Thida
    course_id: 'c0000000-0000-0000-0000-000000000002', // AML/CFT
    status: 'enrolled',
    assigned_by: 'u0000000-0000-0000-0000-000000000001',
    assigned_at: '2026-09-01T10:00:00Z',
  },
  {
    id: 'e0000000-0000-0000-0000-000000000003',
    user_id: 'u0000000-0000-0000-0000-000000000003', // Ko Zaw Min
    course_id: 'c0000000-0000-0000-0000-000000000003', // Customer Consultation
    status: 'enrolled',
    assigned_by: 'u0000000-0000-0000-0000-000000000001',
    assigned_at: '2026-09-10T11:00:00Z',
  },
  {
    id: 'e0000000-0000-0000-0000-000000000004',
    user_id: 'u0000000-0000-0000-0000-000000000004', // Ma Hnin Yu (suspended)
    course_id: 'c0000000-0000-0000-0000-000000000001',
    status: 'enrolled',
    assigned_by: 'u0000000-0000-0000-0000-000000000001',
    assigned_at: '2026-08-01T10:00:00Z',
    restriction_note: 'Under administrative review for compliance verification',
  },
  {
    id: 'e0000000-0000-0000-0000-000000000005',
    user_id: 'u0000000-0000-0000-0000-000000000005', // U Kyaw Zin Lat
    course_id: 'c0000000-0000-0000-0000-000000000004', // Corporate Welfare
    status: 'enrolled',
    assigned_by: 'u0000000-0000-0000-0000-000000000001',
    assigned_at: '2026-09-15T10:00:00Z',
  },
];

export const INITIAL_CHANNEL_ACCESS: ChannelAccess[] = [
  {
    id: 'ca000000-0000-0000-0000-000000000001',
    user_id: 'u0000000-0000-0000-0000-000000000002', // Daw Thida
    channel_id: 'a0000000-0000-0000-0000-000000000001', // Bancassurance
    status: 'granted',
    assigned_by: 'u0000000-0000-0000-0000-000000000001',
    assigned_at: '2026-09-01T10:00:00Z',
  },
  {
    id: 'ca000000-0000-0000-0000-000000000002',
    user_id: 'u0000000-0000-0000-0000-000000000002', // Daw Thida
    channel_id: 'a0000000-0000-0000-0000-000000000004', // Compliance Briefing
    status: 'granted',
    assigned_by: 'u0000000-0000-0000-0000-000000000001',
    assigned_at: '2026-09-01T10:00:00Z',
  },
  {
    id: 'ca000000-0000-0000-0000-000000000003',
    user_id: 'u0000000-0000-0000-0000-000000000003', // Ko Zaw Min
    channel_id: 'a0000000-0000-0000-0000-000000000002', // Alliance Channel
    status: 'granted',
    assigned_by: 'u0000000-0000-0000-0000-000000000001',
    assigned_at: '2026-09-10T11:00:00Z',
  },
  {
    id: 'ca000000-0000-0000-0000-000000000004',
    user_id: 'u0000000-0000-0000-0000-000000000005', // U Kyaw Zin Lat
    channel_id: 'a0000000-0000-0000-0000-000000000003', // Corporate Channel
    status: 'granted',
    assigned_by: 'u0000000-0000-0000-0000-000000000001',
    assigned_at: '2026-09-15T10:00:00Z',
  },
];

export const INITIAL_PROGRESS: LearningProgress[] = [
  {
    id: 'p0000000-0000-0000-0000-000000000001',
    user_id: 'u0000000-0000-0000-0000-000000000002', // Daw Thida
    course_id: 'c0000000-0000-0000-0000-000000000001',
    progress_percentage: 65,
    completion_status: 'in_progress',
    last_accessed_at: '2026-10-20T17:30:00Z',
    updated_at: '2026-10-20T17:30:00Z',
    completed_modules: [
      'Module 1: Principles of Risk',
      'Module 2: Medical Underwriting Tables',
      'Module 3: Financial Capacity Assessment',
    ],
  },
  {
    id: 'p0000000-0000-0000-0000-000000000002',
    user_id: 'u0000000-0000-0000-0000-000000000002', // Daw Thida
    course_id: 'c0000000-0000-0000-0000-000000000002',
    progress_percentage: 100,
    completion_status: 'completed',
    last_accessed_at: '2026-10-18T14:00:00Z',
    updated_at: '2026-10-18T14:00:00Z',
    completed_modules: [
      'Module 1: AML Foundations',
      'Module 2: CDD Protocols',
      'Module 3: Reporting Suspicious Flows',
      'Module 4: Final Certification Exam',
    ],
  },
  {
    id: 'p0000000-0000-0000-0000-000000000003',
    user_id: 'u0000000-0000-0000-0000-000000000003', // Ko Zaw Min
    course_id: 'c0000000-0000-0000-0000-000000000003',
    progress_percentage: 30,
    completion_status: 'in_progress',
    last_accessed_at: '2026-10-19T08:15:00Z',
    updated_at: '2026-10-19T08:15:00Z',
    completed_modules: [
      'Module 1: Client Consultation Fundamentals',
      'Module 2: Family Protection Needs Analysis',
    ],
  },
];

export const INITIAL_AUDIT_LOGS: AdminAuditLog[] = [
  {
    id: 'l0000000-0000-0000-0000-000000000001',
    admin_user_id: 'u0000000-0000-0000-0000-000000000001',
    admin_name: 'U Aung Thu',
    target_user_id: 'u0000000-0000-0000-0000-000000000004',
    target_user_name: 'Ma Hnin Yu',
    action: 'user_status_changed',
    entity_type: 'user',
    entity_id: 'u0000000-0000-0000-0000-000000000004',
    details: 'Account status set to suspended pending annual AML compliance re-certification.',
    created_at: '2026-10-15T09:20:00Z',
  },
  {
    id: 'l0000000-0000-0000-0000-000000000002',
    admin_user_id: 'u0000000-0000-0000-0000-000000000001',
    admin_name: 'U Aung Thu',
    target_user_id: 'u0000000-0000-0000-0000-000000000002',
    target_user_name: 'Daw Thida',
    action: 'course_assigned',
    entity_type: 'course',
    entity_id: 'c0000000-0000-0000-0000-000000000001',
    details: 'Assigned course "KBZLife Foundation: Underwriting & Risk Analysis" with 1-year validity.',
    created_at: '2026-09-01T10:00:00Z',
  },
  {
    id: 'l0000000-0000-0000-0000-000000000003',
    admin_user_id: 'u0000000-0000-0000-0000-000000000001',
    admin_name: 'U Aung Thu',
    target_user_id: 'u0000000-0000-0000-0000-000000000002',
    target_user_name: 'Daw Thida',
    action: 'channel_granted',
    entity_type: 'channel',
    entity_id: 'a0000000-0000-0000-0000-000000000001',
    details: 'Granted access to "Bancassurance Channel Mastery" stream.',
    created_at: '2026-09-01T10:05:00Z',
  },
  {
    id: 'l0000000-0000-0000-0000-000000000004',
    admin_user_id: 'u0000000-0000-0000-0000-000000000001',
    admin_name: 'U Aung Thu',
    target_user_id: 'u0000000-0000-0000-0000-000000000003',
    target_user_name: 'Ko Zaw Min',
    action: 'course_assigned',
    entity_type: 'course',
    entity_id: 'c0000000-0000-0000-0000-000000000003',
    details: 'Assigned "Customer Consultation & Advisory Mastery" for regional agency rollout.',
    created_at: '2026-09-10T11:00:00Z',
  },
];

export const INITIAL_EMAIL_LOGS: EmailLogEntry[] = [
  {
    id: 'eml_001',
    recipient: 'daw.thida@kbzlife.com',
    subject: 'Welcome to KBZLife Employee Learning Portal',
    template: 'user_invitation',
    status: 'sent',
    created_at: '2026-02-01T09:30:00Z',
  },
  {
    id: 'eml_002',
    recipient: 'ko.zawmin@kbzlife.com',
    subject: 'Welcome to KBZLife Employee Learning Portal',
    template: 'user_invitation',
    status: 'sent',
    created_at: '2026-03-10T11:15:00Z',
  },
];

export const INITIAL_HOD_MOTTO: HodMotto = {
  id: 'hod_motto_001',
  motto_text: `“Building a Culture of Continuous Learning for Performance Excellence

Our focus is on building a culture of continuous learning for performance excellence.

We believe that when our people learn continuously, they grow stronger in capability, more confident in their roles, and more effective in delivering results.

Through this approach, we aim to enhance performance, strengthen trust, and support sustainable growth across the organization.”`,
  hod_name: 'U Htet Ko Ko Aung',
  hod_title: 'Head of Learning & Development, KBZLife Insurance',
  photo_url: '/assets/aistudio/viber_image_2026-10-30_09-41-20-883_f4f0b801.jpg',
  statement_context: 'Leadership statement for all KBZLife operational and advisory employees nationwide.',
  is_published: true,
  updated_at: '2026-10-30T10:00:00Z',
};

export const INITIAL_TEAM_MEMBERS: LdTeamMember[] = [
  // 9 Core Team Members
  {
    id: 'tm_001',
    full_name: 'U Htet Ko Ko Aung',
    position: 'Head of Learning & Development',
    department: 'Learning & Development',
    member_type: 'team_member',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_09-41-20-883_f4f0b801.jpg',
    display_order: 1,
    is_published: true,
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'tm_002',
    full_name: 'U Aung Zaw Myo',
    position: 'Trainer (YGN)',
    department: 'Learning & Development',
    member_type: 'team_member',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_09-41-17-383_e7a92a26.jpg',
    display_order: 2,
    is_published: true,
    created_at: '2026-01-12T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'tm_003',
    full_name: 'U Myat Thura Kyaw',
    position: 'Trainer (YGN)',
    department: 'Learning & Development',
    member_type: 'team_member',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_09-41-23-049_1d0bf443.png',
    display_order: 3,
    is_published: true,
    created_at: '2026-02-01T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'tm_004',
    full_name: 'Daw Ei Ei Phoue',
    position: 'Trainer (MDY)',
    department: 'Learning & Development',
    member_type: 'team_member',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_09-41-21-983_71909b2c.jpg',
    display_order: 4,
    is_published: true,
    created_at: '2026-02-15T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'tm_005',
    full_name: 'Daw Honey Aung',
    position: 'Trainer (TGI)',
    department: 'Learning & Development',
    member_type: 'team_member',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_09-41-19-777_57c6efc3.jpg',
    display_order: 5,
    is_published: true,
    created_at: '2026-03-01T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'tm_006',
    full_name: 'Daw Htet Thazin Phoo',
    position: 'Trainer (YGN)',
    department: 'Learning & Development',
    member_type: 'team_member',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_09-41-25-973_5fbdf003.png',
    display_order: 6,
    is_published: true,
    created_at: '2026-03-10T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'tm_007',
    full_name: 'Daw Khaing Zon Moe',
    position: 'Trainer (YGN)',
    department: 'Learning & Development',
    member_type: 'team_member',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_09-41-27-182_ab7b3775.jpg',
    display_order: 7,
    is_published: true,
    created_at: '2026-03-15T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'tm_008',
    full_name: 'Daw Nang Thuzar Aung',
    position: 'Trainer (MDY)',
    department: 'Learning & Development',
    member_type: 'team_member',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_09-41-24-459_7342cfa8.png',
    display_order: 8,
    is_published: true,
    created_at: '2026-04-01T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'tm_009',
    full_name: 'U Phone Hein Kyaw',
    position: 'Trainer (YGN)',
    department: 'Learning & Development',
    member_type: 'team_member',
    photo_url: '/assets/aistudio/DSC02630_a092a08f.JPEG',
    display_order: 9,
    is_published: true,
    created_at: '2026-04-15T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },

  // 5 Interns
  {
    id: 'int_001',
    full_name: 'Ma Aye Chan Moe',
    position: 'Intern',
    department: 'Learning & Development',
    member_type: 'intern',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_11-38-58-150_223b9f8b.jpg',
    display_order: 10,
    is_published: true,
    created_at: '2026-06-01T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'int_002',
    full_name: 'Ma Hsu Lae Nwe Ni',
    position: 'Intern',
    department: 'Learning & Development',
    member_type: 'intern',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_11-36-21-217_834875fb.jpg',
    display_order: 11,
    is_published: true,
    created_at: '2026-06-01T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'int_003',
    full_name: 'Ma Kyal Sin Theint',
    position: 'Intern',
    department: 'Learning & Development',
    member_type: 'intern',
    photo_url: '/assets/aistudio/photo_2026-10-30_11.46.12_12736999.jpeg',
    display_order: 12,
    is_published: true,
    created_at: '2026-06-15T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'int_004',
    full_name: 'Mg Min Khant Lwin',
    position: 'Intern',
    department: 'Learning & Development',
    member_type: 'intern',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_11-38-50-996_4808a22a.jpg',
    display_order: 13,
    is_published: true,
    created_at: '2026-07-01T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
  {
    id: 'int_005',
    full_name: 'Mg Thiha Tun Tun',
    position: 'Intern',
    department: 'Learning & Development',
    member_type: 'intern',
    photo_url: '/assets/aistudio/viber_image_2026-10-30_11-36-47-537_4d174b15.jpg',
    display_order: 14,
    is_published: true,
    created_at: '2026-07-15T08:00:00Z',
    updated_at: '2026-10-30T10:00:00Z',
  },
];

export const INITIAL_LICENSE_CHAPTERS: LicenseChapter[] = [
  {
    id: 'lic_ch_001',
    chapter_number: 1,
    title: 'Chapter 1: Regulatory Foundations & Anti-Money Laundering',
    description: 'Master statutory licensing regulations under the Insurance Business Regulatory Board (IBRB), core advisor ethics, and compulsory Anti-Money Laundering (AML/CFT) frameworks.',
    passing_score: 80,
    display_order: 1,
    is_published: true,
    created_at: '2026-08-01T08:00:00Z',
    updated_at: '2026-10-22T10:00:00Z',
  },
  {
    id: 'lic_ch_002',
    chapter_number: 2,
    title: 'Chapter 2: Underwriting Fundamentals & Fair Market Conduct',
    description: 'Learn field underwriting discipline, medical & financial hazard disclosure principles, policyholder rights, and transparency standards.',
    passing_score: 80,
    display_order: 2,
    is_published: true,
    created_at: '2026-08-15T08:00:00Z',
    updated_at: '2026-10-22T10:00:00Z',
  },
  {
    id: 'lic_ch_003',
    chapter_number: 3,
    title: 'Chapter 3: Bancassurance & Point-of-Sale Governance',
    description: 'Guidelines on co-branded banking distributions, suitability evaluation, client consent records, and ethical customer solicitation.',
    passing_score: 80,
    display_order: 3,
    is_published: true,
    created_at: '2026-09-01T08:00:00Z',
    updated_at: '2026-10-22T10:00:00Z',
  },
];

export const INITIAL_LICENSE_LESSONS: LicenseTrainingLesson[] = [
  {
    id: 'lic_lesson_001',
    chapter_id: 'lic_ch_001',
    title: 'Myanmar Life Insurance Agent Licensing & Code of Conduct',
    description: 'Comprehensive regulatory foundation covering IBRB agent licensing requirements, ethical marketing protocols, and statutory compliance across Myanmar branches.',
    content_type: 'video',
    lesson_type: 'video',
    file_url: '/uploads/IBRB_Licensing_Agent_Code.mp4',
    file_name: 'IBRB_Licensing_Agent_Code.mp4',
    file_size_bytes: 700000,
    file_size_formatted: '683.0 KB',
    duration: '00:45',
    video_duration: '00:45',
    thumbnail_url: '/src/assets/images/license_compliance_training_1792658701433.jpg',
    category: 'Regulatory Accreditation',
    display_order: 1,
    status: 'published',
    is_published: true,
    created_at: '2026-08-10T09:00:00Z',
    updated_at: '2026-10-18T10:00:00Z',
  },
  {
    id: 'lic_lesson_002',
    chapter_id: 'lic_ch_001',
    title: 'Anti-Money Laundering (AML) & CFT Compliance Handbook',
    description: 'Mandatory annual AML compliance guidelines, red flag detection, Customer Due Diligence (CDD), and Suspicious Transaction Report (STR) documentation for licensed advisors.',
    content_type: 'pdf',
    lesson_type: 'pdf',
    file_url: '/uploads/KBZLife_AML_CFT_Compliance_2026.pdf',
    file_name: 'KBZLife_AML_CFT_Compliance_2026.pdf',
    file_size_bytes: 58198,
    file_size_formatted: '58.2 KB',
    thumbnail_url: '',
    category: 'Statutory Compliance',
    display_order: 2,
    status: 'published',
    is_published: true,
    created_at: '2026-08-15T11:00:00Z',
    updated_at: '2026-10-19T09:00:00Z',
  },
  {
    id: 'lic_lesson_003',
    chapter_id: 'lic_ch_002',
    title: 'Underwriting Fundamentals & Risk Selection for Agency Force',
    description: 'Essential field underwriting practices, medical questionnaire disclosures, financial underwriting limits, and moral hazard verification.',
    content_type: 'video',
    lesson_type: 'video',
    file_url: '/uploads/Digital_Cloud_Workflows.mp4',
    file_name: 'Digital_Cloud_Workflows.mp4',
    file_size_bytes: 65400000,
    file_size_formatted: '65.4 MB',
    duration: '22:10',
    video_duration: '22:10',
    thumbnail_url: '/src/assets/images/underwriting_risk_training_1792658701585.jpg',
    category: 'Underwriting Certification',
    display_order: 3,
    status: 'published',
    is_published: true,
    created_at: '2026-09-01T10:00:00Z',
    updated_at: '2026-10-20T11:00:00Z',
  },
  {
    id: 'lic_lesson_004',
    chapter_id: 'lic_ch_002',
    title: 'Fair Market Conduct & Beneficiary Rights Protection Manual',
    description: 'Detailed operating procedures on policyholder privacy, transparent product illustration disclosures, and swift claims facilitation standards.',
    content_type: 'pdf',
    lesson_type: 'pdf',
    file_url: '/uploads/Fair_Market_Conduct_Manual.pdf',
    file_name: 'Fair_Market_Conduct_Manual.pdf',
    file_size_bytes: 58198,
    file_size_formatted: '58.2 KB',
    thumbnail_url: '',
    category: 'Policyholder Protection',
    display_order: 4,
    status: 'published',
    is_published: true,
    created_at: '2026-09-15T08:30:00Z',
    updated_at: '2026-10-20T14:00:00Z',
  },
  {
    id: 'lic_lesson_005',
    chapter_id: 'lic_ch_003',
    title: 'Bancassurance Point-of-Sale Disclosure Directives (Draft)',
    description: 'Internal procedural preview for in-branch bank executives on co-branded endowment disclosures and customer suitability tests.',
    content_type: 'video',
    lesson_type: 'video',
    file_url: '/uploads/English_Insurance_Advisory.mp4',
    file_name: 'English_Insurance_Advisory.mp4',
    file_size_bytes: 32000000,
    file_size_formatted: '32.0 MB',
    duration: '15:30',
    video_duration: '15:30',
    thumbnail_url: '/src/assets/images/license_compliance_training_1792658701433.jpg',
    category: 'Bancassurance Compliance',
    display_order: 5,
    status: 'draft',
    is_published: false,
    created_at: '2026-10-01T10:00:00Z',
    updated_at: '2026-10-21T09:00:00Z',
  },
];

export const INITIAL_SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'sk_cat_001',
    name: 'Business English',
    description: 'Professional terminology, client consultation dialogue, and formal correspondence.',
    display_order: 1,
    is_published: true,
    created_at: '2026-08-01T08:00:00Z',
    updated_at: '2026-10-20T10:00:00Z',
  },
  {
    id: 'sk_cat_002',
    name: 'Excel & Data Analytics',
    description: 'Financial modeling, automated reporting, formulas, and policy analytics dashboards.',
    display_order: 2,
    is_published: true,
    created_at: '2026-08-01T08:00:00Z',
    updated_at: '2026-10-20T10:00:00Z',
  },
  {
    id: 'sk_cat_003',
    name: 'Leadership & Management',
    description: 'Team coaching, emotional intelligence, and frontline operational leadership.',
    display_order: 3,
    is_published: true,
    created_at: '2026-08-01T08:00:00Z',
    updated_at: '2026-10-20T10:00:00Z',
  },
  {
    id: 'sk_cat_004',
    name: 'Technology & Digital Tools',
    description: 'Cloud collaboration suites, digital signatures, and paperless branch workflows.',
    display_order: 4,
    is_published: true,
    created_at: '2026-08-01T08:00:00Z',
    updated_at: '2026-10-20T10:00:00Z',
  },
];

export const INITIAL_SKILL_RESOURCES: SkillDevelopmentResource[] = [
  {
    id: 'sk_res_001',
    title: 'English for Insurance Professionals: Client Advisory & Presentation',
    description: 'Essential business English vocabulary, empathetic email writing, and professional consultative terminology for modern insurance advisors.',
    category_id: 'sk_cat_001',
    category: 'Business English',
    topic: 'Business English',
    content_type: 'video',
    file_url: '/uploads/English_Insurance_Advisory.mp4',
    content_url: '/uploads/English_Insurance_Advisory.mp4',
    file_name: 'English_Insurance_Advisory.mp4',
    file_size_bytes: 655347,
    file_size_formatted: '640.0 KB',
    duration: '00:45',
    video_duration: '00:45',
    thumbnail_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    instructor_name: 'Daw Eleanor Pena',
    instructor_role: 'Corporate Language Specialist',
    instructor_title: 'Corporate Language Specialist',
    instructor_avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
    lesson_count: 16,
    display_order: 1,
    status: 'published',
    is_published: true,
    created_at: '2026-08-01T08:00:00Z',
    updated_at: '2026-10-18T12:00:00Z',
  },
  {
    id: 'sk_res_002',
    title: 'Excel Mastery: Financial Modeling & Actuarial Reporting',
    description: 'Master advanced formulas (XLOOKUP, INDEX/MATCH), dynamic Pivot Tables, and automated dashboard reporting for policy portfolio analytics.',
    category_id: 'sk_cat_002',
    category: 'Excel & Data Analytics',
    topic: 'Excel & Data Analytics',
    content_type: 'video',
    external_url: 'https://youtu.be/wbJcJCkBcMg?si=wcJL7TG0Cq2JI5li',
    content_url: 'https://youtu.be/wbJcJCkBcMg?si=wcJL7TG0Cq2JI5li',
    file_url: 'https://youtu.be/wbJcJCkBcMg?si=wcJL7TG0Cq2JI5li',
    thumbnail_url: 'https://img.youtube.com/vi/wbJcJCkBcMg/hqdefault.jpg',
    instructor_name: 'KBZ Life Insurance',
    instructor_role: 'Financial Analytics Lead',
    instructor_title: 'Financial Analytics Lead',
    instructor_avatar: '/assets/aistudio/KBZ_Logo_28e9d8fb.png',
    lesson_count: 24,
    display_order: 2,
    status: 'published',
    is_published: true,
    created_at: '2026-08-10T10:00:00Z',
    updated_at: '2026-10-30T08:00:00Z',
  },
  {
    id: 'sk_res_003',
    title: 'Excel Advanced Formulas & Automation Handbook',
    description: 'Comprehensive quick-reference manual featuring automated macro scripts, conditional formatting blueprints, and validation rules for branch managers.',
    category_id: 'sk_cat_002',
    category: 'Excel & Data Analytics',
    topic: 'Excel & Data Analytics',
    content_type: 'pdf',
    content_url: '/uploads/KBZLife_Excel_Automation_Handbook.pdf',
    file_url: '/uploads/KBZLife_Excel_Automation_Handbook.pdf',
    file_name: 'KBZLife_Excel_Automation_Handbook.pdf',
    file_size_bytes: 58198,
    file_size_formatted: '58.2 KB',
    thumbnail_url: '',
    instructor_name: 'U Min Htet Aung',
    instructor_role: 'Senior L&D Manager',
    instructor_title: 'Senior L&D Manager',
    instructor_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
    lesson_count: 8,
    display_order: 3,
    status: 'published',
    is_published: true,
    created_at: '2026-08-20T11:00:00Z',
    updated_at: '2026-10-20T10:00:00Z',
  },
  {
    id: 'sk_res_004',
    title: 'Everyday Business English for Frontline Branch Service',
    description: 'Practical customer interaction dialogs, objection handling phrases, and polite formal correspondence guides for customer care advisors.',
    category_id: 'sk_cat_001',
    category: 'Business English',
    topic: 'Business English',
    content_type: 'pdf',
    content_url: '/uploads/Everyday_Business_English_Frontline.pdf',
    file_url: '/uploads/Everyday_Business_English_Frontline.pdf',
    file_name: 'Everyday_Business_English_Frontline.pdf',
    file_size_bytes: 58198,
    file_size_formatted: '58.2 KB',
    thumbnail_url: '',
    instructor_name: 'Daw Su Myat Noe',
    instructor_role: 'Sales Enablement Specialist',
    instructor_title: 'Sales Enablement Specialist',
    instructor_avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80',
    lesson_count: 12,
    display_order: 4,
    status: 'published',
    is_published: true,
    created_at: '2026-09-05T09:00:00Z',
    updated_at: '2026-10-21T08:00:00Z',
  },
  {
    id: 'sk_res_005',
    title: 'Leading Teams: Developing High-Performance Insurance Leaders',
    description: 'External leadership briefing focusing on team coaching, emotional intelligence in underwriting, and building psychological safety in high-stress sales environments.',
    category_id: 'sk_cat_003',
    category: 'Leadership & Management',
    topic: 'Leadership & Management',
    content_type: 'link',
    external_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    content_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    instructor_name: 'Guy Hawkins',
    instructor_role: 'HR & Talent Governance Director',
    instructor_title: 'HR & Talent Governance Director',
    instructor_avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80',
    lesson_count: 38,
    display_order: 5,
    status: 'published',
    is_published: true,
    created_at: '2026-09-12T13:00:00Z',
    updated_at: '2026-10-21T11:00:00Z',
  },
  {
    id: 'sk_res_006',
    title: 'Digital Systems & Cloud Collaboration for Insurance Operations',
    description: 'Hands-on workflow tutorial on modern cloud suites, secure document processing, digital signatures, and paperless policy issuance.',
    category_id: 'sk_cat_004',
    category: 'Technology & Digital Tools',
    topic: 'Technology & Digital Tools',
    content_type: 'video',
    file_url: '/uploads/Digital_Cloud_Workflows.mp4',
    content_url: '/uploads/Digital_Cloud_Workflows.mp4',
    file_name: 'Digital_Cloud_Workflows.mp4',
    file_size_bytes: 683100,
    file_size_formatted: '667.0 KB',
    duration: '00:45',
    video_duration: '00:45',
    thumbnail_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    instructor_name: 'U Zin Min Oo',
    instructor_role: 'Lead Systems Trainer',
    instructor_title: 'Lead Systems Trainer',
    instructor_avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80',
    lesson_count: 10,
    display_order: 6,
    status: 'published',
    is_published: true,
    created_at: '2026-09-25T14:30:00Z',
    updated_at: '2026-10-21T15:00:00Z',
  },
  {
    id: 'sk_res_007',
    title: 'Business Communication & Professional Advisory Skills (Part 1)',
    description: 'Comprehensive business advisory and client engagement video training session for corporate and field life insurance professionals.',
    category_id: 'sk_cat_001',
    category: 'Business English',
    topic: 'Business English',
    content_type: 'video',
    external_url: 'https://youtu.be/TJhCKf_qrWI?si=Y_ETa0K-43Mr1eGW',
    content_url: 'https://youtu.be/TJhCKf_qrWI?si=Y_ETa0K-43Mr1eGW',
    file_url: 'https://youtu.be/TJhCKf_qrWI?si=Y_ETa0K-43Mr1eGW',
    thumbnail_url: 'https://img.youtube.com/vi/TJhCKf_qrWI/hqdefault.jpg',
    instructor_name: 'KBZ Life Insurance',
    instructor_role: 'Learning & Development',
    instructor_title: 'Learning & Development Team',
    instructor_avatar: '/assets/aistudio/KBZ_Logo_28e9d8fb.png',
    lesson_count: 1,
    display_order: 7,
    status: 'published',
    is_published: true,
    created_at: '2026-10-30T07:50:00Z',
    updated_at: '2026-10-30T07:50:00Z',
  },
  {
    id: 'sk_res_008',
    title: 'Business Strategy & Consultative Selling Foundations (Part 2)',
    description: 'Advanced consultative communication frameworks, business discussion tactics, and value-driven client advisory insights.',
    category_id: 'sk_cat_001',
    category: 'Business English',
    topic: 'Business English',
    content_type: 'video',
    external_url: 'https://youtu.be/dsA_Cq40f1Y?si=4azterF7UF-cvzfw',
    content_url: 'https://youtu.be/dsA_Cq40f1Y?si=4azterF7UF-cvzfw',
    file_url: 'https://youtu.be/dsA_Cq40f1Y?si=4azterF7UF-cvzfw',
    thumbnail_url: 'https://img.youtube.com/vi/dsA_Cq40f1Y/hqdefault.jpg',
    instructor_name: 'KBZ Life Insurance',
    instructor_role: 'Learning & Development',
    instructor_title: 'Learning & Development Team',
    instructor_avatar: '/assets/aistudio/KBZ_Logo_28e9d8fb.png',
    lesson_count: 1,
    display_order: 8,
    status: 'published',
    is_published: true,
    created_at: '2026-10-30T07:50:00Z',
    updated_at: '2026-10-30T07:50:00Z',
  },
  {
    id: 'sk_res_009',
    title: 'Excel Data Analysis & Dashboard Reporting Essentials',
    description: 'Dynamic reporting, pivot charts, and portfolio analytics formulas for insurance sales performance analysis.',
    category_id: 'sk_cat_002',
    category: 'Excel & Data Analytics',
    topic: 'Excel & Data Analytics',
    content_type: 'video',
    external_url: 'https://youtu.be/4RIBT8_tXPk?si=BS6rNstVMeX8G5mr',
    content_url: 'https://youtu.be/4RIBT8_tXPk?si=BS6rNstVMeX8G5mr',
    file_url: 'https://youtu.be/4RIBT8_tXPk?si=BS6rNstVMeX8G5mr',
    thumbnail_url: 'https://img.youtube.com/vi/4RIBT8_tXPk/hqdefault.jpg',
    instructor_name: 'KBZ Life Insurance',
    instructor_role: 'Financial Analytics Lead',
    instructor_title: 'Financial Analytics Lead',
    instructor_avatar: '/assets/aistudio/KBZ_Logo_28e9d8fb.png',
    lesson_count: 18,
    display_order: 9,
    status: 'published',
    is_published: true,
    created_at: '2026-10-30T08:00:00Z',
    updated_at: '2026-10-30T08:00:00Z',
  },
];

export const INITIAL_LICENSE_QUIZZES: LicenseQuiz[] = [
  {
    id: 'quiz_lic_001',
    chapter_id: 'lic_ch_001',
    lesson_id: 'lic_lesson_001',
    title: 'Chapter 1: Licensing Regulations & AML Assessment',
    description: 'Verify your comprehension of IBRB statutory guidelines, anti-rebating laws, agent duties, and ethical disclosure standards.',
    passing_score: 80,
    created_at: '2026-08-10T10:00:00Z',
    updated_at: '2026-10-22T10:00:00Z',
    questions: [
      {
        id: 'q_001_1',
        quiz_id: 'quiz_lic_001',
        question_text: 'Under the Myanmar Insurance Business Regulatory Board (IBRB) framework, what is the mandatory renewal cycle for life insurance agent licenses?',
        options: [
          'Every 6 calendar months',
          'Annually (every 1 year) with verified CPD hours',
          'Every 3 years upon branch manager endorsement',
          'Permanent certification with no renewal needed'
        ],
        correct_option_index: 1,
        explanation: 'Under IBRB regulatory directives, licensed life insurance agents in Myanmar must renew their certification annually along with verified Continuing Professional Development (CPD) hours.',
        display_order: 1
      },
      {
        id: 'q_001_2',
        quiz_id: 'quiz_lic_001',
        question_text: 'What fundamental legal and ethical principle governs all agent interactions and disclosures with prospective policyholders?',
        options: [
          'Caveat Emptor (Buyer Beware)',
          'Utmost Good Faith (Uberrimae Fidei) and full disclosure of all material facts',
          'Maximum Quota Attainment priority',
          'Discretionary premium discount flexibility'
        ],
        correct_option_index: 1,
        explanation: 'The doctrine of Uberrimae Fidei (Utmost Good Faith) requires both insurer and agent to disclose all material facts transparently without misrepresentation or concealment.',
        display_order: 2
      },
      {
        id: 'q_001_3',
        quiz_id: 'quiz_lic_001',
        question_text: 'Which practice is strictly prohibited under the KBZLife Code of Conduct regarding customer premium settlements?',
        options: [
          'Issuing instant computerized receipts through corporate channels',
          'Accepting customer premium payments into an agent’s personal bank or mobile money account',
          'Guiding clients to direct bank transfer and official digital payment gateways',
          'Providing premium payment schedules during policy delivery'
        ],
        correct_option_index: 1,
        explanation: 'Under strict financial conduct rules, agents must never receive premium payments into personal bank accounts or personal wallets; funds must be remitted directly to official KBZLife accounts.',
        display_order: 3
      },
      {
        id: 'q_001_4',
        quiz_id: 'quiz_lic_001',
        question_text: 'If a prospective applicant discloses a history of medical conditions during the interview, what is the licensed agent’s statutory obligation?',
        options: [
          'Omit the disclosure to ensure instant policy issuance',
          'Record the complete medical history honestly on the proposal form for medical underwriter assessment',
          'Advise the applicant to wait one year before declaring',
          'Issue an instant binding endorsement on behalf of the company'
        ],
        correct_option_index: 1,
        explanation: 'An agent must record every material fact disclosed by the applicant to protect both the client and insurer against non-disclosure disputes during future claims.',
        display_order: 4
      },
      {
        id: 'q_001_5',
        quiz_id: 'quiz_lic_001',
        question_text: 'What constitutes illegal "rebating" under Myanmar insurance statutory regulations?',
        options: [
          'Providing official KBZLife policy document binders and informative brochures',
          'Returning part of the agent commission or offering cash kickbacks to induce a client to purchase',
          'Explaining loyalty terminal bonuses and annual dividend structures',
          'Assisting bereaved family members with claim documentation'
        ],
        correct_option_index: 1,
        explanation: 'Rebating—offering cash incentives, commission sharing, or unapproved discounts to induce policy purchases—is strictly illegal under Myanmar insurance regulations and leads to immediate license revocation.',
        display_order: 5
      }
    ]
  },
  {
    id: 'quiz_lic_003',
    chapter_id: 'lic_ch_002',
    lesson_id: 'lic_lesson_003',
    title: 'Chapter 2: Underwriting & Market Conduct Assessment',
    description: 'Test your understanding of primary field underwriting responsibilities, moral vs physical hazard differentiation, and insurable interest.',
    passing_score: 80,
    created_at: '2026-09-01T10:00:00Z',
    updated_at: '2026-10-22T10:00:00Z',
    questions: [
      {
        id: 'q_003_1',
        quiz_id: 'quiz_lic_003',
        question_text: 'What is the primary role of an insurance advisor acting as a "field underwriter"?',
        options: [
          'Determining corporate investment yields and financial reserves',
          'Serving as the initial line of risk appraisal by observing facts, verifying identity, and gathering accurate client data at the point of sale',
          'Issuing policy contracts independently without head office underwriting approval',
          'Calculating mortality tables and actuarial rate books'
        ],
        correct_option_index: 1,
        explanation: 'Field underwriting empowers the advisor as the first point of contact to observe physical condition, lifestyle habits, and financial legitimacy before transmitting proposals to underwriters.',
        display_order: 1
      },
      {
        id: 'q_003_2',
        quiz_id: 'quiz_lic_003',
        question_text: 'Which scenario exemplifies a "moral hazard" in life insurance risk appraisal?',
        options: [
          'A client diagnosed with hypertension or hereditary heart condition',
          'A client working in high-voltage electrical grid maintenance',
          'An applicant who provides inconsistent income details, conceals heavy debt, and seeks excessive life coverage disproportionate to income',
          'An individual who participates in recreational weekend cycling'
        ],
        correct_option_index: 2,
        explanation: 'Moral hazard stems from character, honesty, or financial distress that creates motivation to falsify disclosures or profit inappropriately from life insurance coverage.',
        display_order: 2
      },
      {
        id: 'q_003_3',
        quiz_id: 'quiz_lic_003',
        question_text: 'How is "Insurable Interest" defined in life insurance law?',
        options: [
          'Any acquaintance who is willing to fund the premium installments',
          'A verifiable legal or financial relationship where the policy beneficiary suffers genuine economic loss upon the insured person’s demise',
          'Any member of the same social club or neighborhood group',
          'Mutual interest between colleagues in the same corporate department'
        ],
        correct_option_index: 1,
        explanation: 'Insurable interest requires a bona fide legal, familial, or economic dependence ensuring life insurance is purchased for legitimate protection rather than speculative gain.',
        display_order: 3
      },
      {
        id: 'q_003_4',
        quiz_id: 'quiz_lic_003',
        question_text: 'In financial underwriting, what guideline helps determine a reasonable sum assured for family income replacement?',
        options: [
          'A flat 500 million MMK limit for every individual regardless of income',
          'Human Life Value (HLV) multiple calculation based on age, current annual earned income, and years to retirement',
          'Sum of current bank checking account balances',
          'Double the purchase price of the client’s residential real estate'
        ],
        correct_option_index: 1,
        explanation: 'Underwriters employ Human Life Value (HLV) multiples (e.g., 10x–25x annual income depending on age bracket) to calculate appropriate and sustainable life insurance coverage.',
        display_order: 4
      },
      {
        id: 'q_003_5',
        quiz_id: 'quiz_lic_003',
        question_text: 'When a head-office underwriter requests an Attending Physician’s Statement (APS), what does this signify?',
        options: [
          'The application has been automatically rejected without appeal',
          'Specific clinical findings and medical history from treating physicians are required to assess and appropriately rate the risk',
          'The policy can be issued immediately without further paperwork',
          'The agent failed to obtain a national registration card (NRC)'
        ],
        correct_option_index: 1,
        explanation: 'An APS provides objective clinical insight regarding specific conditions, enabling the underwriting team to offer fair terms, standard rates, or specialized medical loadings.',
        display_order: 5
      }
    ]
  },
  {
    id: 'quiz_lic_005',
    chapter_id: 'lic_ch_003',
    lesson_id: 'lic_lesson_005',
    title: 'Chapter 3: Bancassurance & POS Governance Assessment',
    description: 'Ensure compliance with bank branch point-of-sale protocols, deposit vs insurance distinction, suitability checks, and cooling-off directives.',
    passing_score: 80,
    created_at: '2026-10-01T10:00:00Z',
    updated_at: '2026-10-22T10:00:00Z',
    questions: [
      {
        id: 'q_005_1',
        quiz_id: 'quiz_lic_005',
        question_text: 'What critical disclosure must every bank executive emphasize to customers when introducing bancassurance products?',
        options: [
          'That insurance policies are fixed term deposits insured by the central bank deposit scheme',
          'That bancassurance products are life insurance contracts underwritten by KBZLife and are distinct from bank deposit accounts',
          'That life insurance policies offer unlimited immediate ATM cash withdrawals',
          'That insurance premiums replace regular income tax obligations'
        ],
        correct_option_index: 1,
        explanation: 'Bancassurance regulatory directives require clear disclosure that insurance policies are long-term insurance contracts issued by KBZLife and are not bank deposit liabilities.',
        display_order: 1
      },
      {
        id: 'q_005_2',
        quiz_id: 'quiz_lic_005',
        question_text: 'What is the statutory purpose of the mandatory "Cooling-Off Period" in bancassurance policy issuance?',
        options: [
          'A waiting period before the bank approves loan applications',
          'A defined period (typically 14 to 21 days) allowing the policyholder to review policy terms and cancel with full refund of premiums paid less medical expenses',
          'The period when no policy benefits are payable in the first year',
          'The time taken by the bank to print policy booklets'
        ],
        correct_option_index: 1,
        explanation: 'The cooling-off period provides consumer protection by allowing policyholders to examine the actual policy contract and cancel for a full refund if the policy does not meet expectations.',
        display_order: 2
      },
      {
        id: 'q_005_3',
        quiz_id: 'quiz_lic_005',
        question_text: 'What is the requirement of the mandatory "Customer Suitability Assessment" at the bank branch?',
        options: [
          'Ensuring the customer deposits all savings into high-risk investment funds',
          'Verifying that the proposed insurance product matches the customer’s financial horizon, affordability, risk appetite, and genuine protection needs',
          'Requiring the customer to open an overdraft facility before applying',
          'Selling whatever product has the highest sales bonus of the month'
        ],
        correct_option_index: 1,
        explanation: 'Suitability guidelines require bank advisors to match products with customer needs, avoiding mis-selling and ensuring long-term premium affordability.',
        display_order: 3
      },
      {
        id: 'q_005_4',
        quiz_id: 'quiz_lic_005',
        question_text: 'How should projected non-guaranteed bonuses or dividend illustrations be presented to branch customers?',
        options: [
          'Stated as guaranteed annual interest returns identical to fixed deposit coupons',
          'Clearly presented with dual benchmark return scenarios, explicitly identifying non-guaranteed components and explaining market fluctuations',
          'Hidden in the fine print without oral explanation',
          'Guaranteed by the branch manager’s verbal commitment'
        ],
        correct_option_index: 1,
        explanation: 'Illustrations must transparently delineate guaranteed benefits from non-guaranteed projections and explain that past dividend history does not guarantee future results.',
        display_order: 4
      },
      {
        id: 'q_005_5',
        quiz_id: 'quiz_lic_005',
        question_text: 'When a bank customer expresses dissatisfaction or submits a formal grievance regarding a bancassurance product, what is the mandatory immediate action?',
        options: [
          'Advise the customer to abandon the policy without official paperwork',
          'Log the grievance into the integrated customer complaint tracking system within 24 hours and issue a formal tracking acknowledgment',
          'Instruct the customer to contact the insurance regulator directly without internal branch review',
          'Hold the complaint until the quarterly regional audit'
        ],
        correct_option_index: 1,
        explanation: 'Mandatory market conduct protocols demand prompt grievance registration within 24 hours with an official acknowledgment number and structured resolution tracking.',
        display_order: 5
      }
    ]
  }
];

// =====================================================================
// INITIAL PRODUCT KNOWLEDGE HUB ITEMS
// =====================================================================
export const INITIAL_PRODUCTS: ProductKnowledgeItem[] = [
  {
    id: 'prod_medical_intl',
    title: 'KBZ LIFE International ဆေးကုသမှု အာမခံ (Medical Insurance)',
    subtitle: 'သင့်အိပ်မက်တွေကို ရွှေ့ဆိုင်းစရာမလိုတဲ့ အလုံးစုံဆေးကုသမှု အာမခံ (Comprehensive Coverage)',
    category: 'Medical & Health',
    card_color_theme: 'sky',
    short_description: 'မွေးကင်းစမှ အသက် (၆၅) နှစ်အထိ ဝယ်ယူနိုင်ပြီး ထိုင်းနိုင်ငံဆေးကုသမှု၊ Inpatient/Day Surgery၊ Cashless Claim နှင့် ရောဂါကြီးကုသမှုအလုံးစုံ အကာအကွယ်ပေးသော အာမခံ။',
    description: 'KBZ LIFE International ဆေးကုသမှု အာမခံသည် မမျှော်လင့်ဘဲ ဖြစ်ပေါ်လာသော ကျန်းမာရေးကုသစရိတ်အတွက် အလုံးစုံ အကာအကွယ်ရရှိစေရန် ဖန်တီးထားသော အဆင့်မြင့် ကျန်းမာရေးစောင့်ရှောက်မှု အာမခံစနစ်ဖြစ်ပါသည်။ Core Plan (1 & 2), Grand Plan (1 & 2), Grand Plan 1 Plus & 2 Plus အပါအဝင် မိမိစိတ်ကြိုက် အကာအကွယ် ကျပ်သိန်း (၁၅၀) မှ ကျပ်သိန်း (၁,၂၀၀) အထိ ပြည့်စုံစွာ ရွေးချယ်နိုင်ပါသည်။',
    image_url: '/assets/aistudio/viber_image_2026-10-30_09-39-55-627_bbf31392.jpg',
    content: `![KBZ LIFE International ဆေးကုသမှု အာမခံ](/assets/aistudio/viber_image_2026-10-30_09-39-55-627_bbf31392.jpg)

## အာမခံထားရှိနိုင်သူများ
မွေးကင်းစ မှ အသက် (၆၅)နှစ်အထိ အာမခံဝယ်ယူ ထားရှိနိုင်ပါသည်။

## ရရှိနိုင်သည့်အာမခံချက်များ
မမျှော်လင့်ဘဲ ဖြစ်ပေါ်လာသော ကျန်းမာရေးကုသစရိတ်အတွက် အကာအကွယ်ရနိုင်ခြင်း။

## ဝယ်ယူနိုင်သော အမျိုးအစားများ
- Core Plan (1)
- Core Plan (2)
- Grand Plan (1)
- Grand Plan (2)
- Grand Plan 1 Plus
- Grand Plan 2 Plus

## အာမခံထားငွေ
မိမိစိတ်ကြိုက် Plan အမျိုးအစားအလိုက်အား အကာအကွယ် **ကျပ်သိန်း(၁၅၀) မှ ကျပ်သိန်း (၁,၂၀၀)** အထိ ဝယ်ယူနိုင်ပါသည်။

## အာမခံသက်တမ်း
အာမခံသက်တမ်းမှာ **(၁)နှစ်** ဖြစ်ပါသည်။ နှစ်စဉ် သက်တမ်းတိုး၍ ဝယ်ယူနိုင်ပါသည်။

## ပရီမီယံနှုန်းထား နှင့် ပရီမီယံပေးသွင်းခြင်း
မိမိ ရွေးချယ်ထားသောစိတ်ကြိုက် Plan အမျိုးအစားအလိုက် **တစ်ကြိမ်တည်း** ပေးသွင်းသည့်ပုံစံဖြင့် ပေးသွင်းရပါမည်။ သို့သော် **Grand Plan 1 နှင့် Grand Plan 2** အမျိုးအစားအား ဝယ်ယူမည်ဆိုပါက တစ်ကြိမ်တည်း (သို့မဟုတ်) **နှစ်ကြိမ်ခွဲသွင်း၍** ပေးသွင်းနိုင်ပါသည်။

## အခွန်တံဆိပ်ခေါင်းခပေးဆောင်ခြင်း
အခွန်တံဆိပ်ခေါင်းခအနေဖြင့် မိမိဝယ်ယူထားသည့် အာမခံအကာအကွယ်ပမာဏပေါ်မူတည်ပြီး အာမခံအကာအကွယ်ပမာဏ **(၁၀)သိန်းကျပ်လျှင် (၃၀၀)ကျပ်** ပေးဆောင်ရပါမည်။

---

## အကျိုးခံစားခွင့်များ

### (က) Basic Cover
1. **Oversea Treatment (Thailand)** - ဘန်ကောက်တွင် ဆေးကုသ၍ ရနိုင်ခြင်း *(Grand Plan 2 Plus အားဝယ်ယူမှသာ အကျိုးခံစားခွင့်ရရှိပါမည်။)*
2. **Inpatient & pre- and post-hospitalization** - ဆေးရုံတက် ကုသမှုအပြင် ဆေးရုံမတက်ခင်နှင့် တက်ပြီး ကုသမှုစရိတ်တွေပါ ရနိုင်ခြင်း
3. **Cashless claim service** - KBZ Life နှင့် ချိတ်ဆက်ထားသော ပြည်တွင်းဆေးရုံများတွင် ငွေသားမလိုဘဲ ဆေးကုသနိုင်ခြင်း
4. **Day Surgery** - နေ့ချင်းပြီး ခွဲစိတ်ကုသခြင်း
5. **Ambulance service** - အရေးပေါ်ယာဉ်ဝန်ဆောင်မှုရယူခြင်း *(မိမိတက်ရောက်ကုသမည့် ဆေးရုံရှိ ယာဉ်အား ဆရာဝန်ညွှန်ကြားချက်ဖြင့် သုံးစွဲမှသာ အကျိုးခံစားခွင့်ရပါမည်။)*
6. **Emergency accident treatment** - မတော်တဆထိခိုက်မှုဖြင့် အရေးပေါ်ဆေးကုသခြင်း
7. **Kidney dialysis / Chemo therapy / Stroke** - ကျောက်ကပ်၊ ကင်ဆာ၊ လေဖြတ်ရောဂါကုသခြင်း
8. **Death benefit** - သေဆုံးခြင်း ခံစားခွင့်ရရှိခြင်း
9. **Nar ku benefit (နာရေးကူညီမှု ခံစားခွင့်)** - အာမခံထားသူ၏ တရားဝင် အိမ်ထောင်ဖက်သေဆုံးခြင်းအတွက်သာ အကျိုးခံစားခွင့် ရပါမည်။
10. **Maternity & child birth benefit after 36 months** - (၃၆)လ ဆက်တိုက် အာမခံထားပြီးသူများအနေဖြင့် (၃၇)လ မှစပြီး သတ်မှတ်ထားသည့် ကလေးမီးဖွားကုသမှုစရိတ်ပါ ခံစားခွင့်ရရှိခြင်း

### (ခ) Optional Cover (အပိုထပ်ဆောင်းအကာအကွယ်)
1. **Outpatient Clinic (OPD)**
2. **Dental (သွားနှင့်ခံတွင်း)**
3. **Vision (မျက်စိစစ်ဆေးကုသမှု)**

*Optional Cover (အပိုထပ်ဆောင်းအကာအကွယ်)အတွက် အကျိုးခံစားခွင့်အားလုံးအပေါ်တွင် **(20%) Co-Payment** ပုံစံဖြင့် ခံစားခွင့်ရရှိပါမည်။*

---

## Good Health Bonus
**၃ နှစ်ဆက်တိုက်** အာမခံလျော်ကြေး မတောင်းခံပါက နောက်နှစ်တွင် သတ်မှတ်ထားသော နှစ်စဉ် အများဆုံးအာမခံပမာဏ၏ **(၁၀%)** ကို ထပ်မံ၍ အပိုခံစားခွင့်ရှိပါသည်။

*အာမခံ အကျိုးခံစားခွင့် ရရှိရန် သတ်မှတ်ထားသော အမျိုးအစားအလိုက် စောင့်ဆိုင်းရမည့် ကာလများရှိပါသည်။*

---

## အာမခံထားရှိရန် လိုအပ်သော အချက်အလက်များ
1. အဆိုပြုလွှာ
2. မှတ်ပုံတင် အရှေ့ နှင့် အနောက် ပုံ
3. ဆေးစစ်ရန် လိုအပ်ပါက ဆေးစစ်ချက်အထောက်အထားများ

---

## Claim တောင်းခံပါက လိုအပ်သောအချက်အလက်များ
Claim တောင်းခံမည်ဆိုပါက KBZ LIFE နှင့်ချိတ်ဆက်ထားသည့် **Ulink Assist** မှ သတ်မှတ်ထားသည့် လုပ်ငန်းစဥ် အတိုင်း လုပ်ဆောင်ရပါမည်။ အသေးစိတ်အား Product Video ထဲမှ **Cashless Claim Process** တွင် ဝင်ရောက်လေ့လာနိုင်ပါသည်။`,
    key_benefits: [
      'Oversea Treatment (Thailand) ဘန်ကောက်တွင် ဆေးကုသ၍ ရနိုင်ခြင်း (Grand Plan 2 Plus)',
      'Inpatient & pre- and post-hospitalization ဆေးရုံတက်၊ တက်ခင်နှင့် ဆင်းပြီး ကုန်ကျစရိတ်များ',
      'Cashless Claim Service ချိတ်ဆက်ထားသော ပြည်တွင်းဆေးရုံများတွင် ငွေသားမလိုဘဲ ကုသနိုင်ခြင်း',
      'Day Surgery နေ့ချင်းပြီး ခွဲစိတ်ကုသမှု အပြည့်အဝရရှိခြင်း',
      'Kidney Dialysis / Chemo / Stroke ကျောက်ကပ်၊ ကင်ဆာ၊ လေဖြတ်ရောဂါ ကုသမှုအကာအကွယ်',
      'Good Health Bonus: ၃ နှစ်ဆက်တိုက် လျော်ကြေးမတောင်းခံပါက အများဆုံးအာမခံပမာဏ၏ (၁၀%) ထပ်ဆောင်းရရှိခြင်း'
    ],
    key_features: [
      'ဝယ်ယူနိုင်သော Plan များ: Core Plan (1, 2), Grand Plan (1, 2), Grand Plan 1 Plus & 2 Plus',
      'အကာအကွယ်ပမာဏ: ကျပ်သိန်း (၁၅၀) မှ ကျပ်သိန်း (၁,၂၀၀) အထိ စိတ်ကြိုက်ရွေးချယ်နိုင်ခြင်း',
      'အာမခံသက်တမ်း: (၁) နှစ် (နှစ်စဉ် သက်တမ်းတိုးဝယ်ယူနိုင်)',
      'ပရီမီယံပေးသွင်းခြင်း: တစ်ကြိမ်တည်း (သို့) Grand Plan 1 & 2 အတွက် ၂ ကြိမ်ခွဲသွင်းနိုင်ခြင်း',
      'Optional Cover (OPD, Dental, Vision): 20% Co-Payment ဖြင့် အပိုရွေးချယ်နိုင်ခြင်း'
    ],
    eligibility_criteria: 'မွေးကင်းစ မှ အသက် (၆၅) နှစ်အထိ အာမခံဝယ်ယူထားရှိနိုင်ပါသည်။',
    coverage_details: 'အကာအကွယ် ကျပ်သိန်း (၁၅၀) မှ ကျပ်သိန်း (၁,၂၀၀) အထိ။ အခွန်တံဆိပ်ခေါင်းခ အာမခံအကာအကွယ် (၁၀) သိန်းကျပ်လျှင် (၃၀၀) ကျပ်။',
    premium_terms: 'တစ်ကြိမ်တည်း ပေးသွင်းခြင်း (သို့) Grand Plan 1 နှင့် Grand Plan 2 အတွက် နှစ်ကြိမ်ခွဲသွင်း၍ ပေးသွင်းနိုင်ပါသည်။',
    target_audience: 'မွေးကင်းစကလေးငယ်များမှစ၍ အသက် ၆၅ နှစ်အထိ မိမိနှင့် မိသားစုဝင်များ၏ ကျန်းမာရေးအတွက် အလုံးစုံဆေးကုသမှုအကာအကွယ်ရယူလိုသူများ။',
    display_order: 1,
    status: 'published',
    is_published: true,
    created_at: '2026-10-30T08:00:00Z',
    updated_at: '2026-10-30T08:00:00Z',
  },
  {
    id: 'prod_group_life',
    title: 'KBZ LIFE စုပေါင်းအသက်အာမခံ (Group Life Insurance)',
    subtitle: 'ဝန်ထမ်း/အလုပ်သမားများ၏ မိသားစုနောင်ရေး စိတ်အေးချမ်းမှုအတွက် စုပေါင်းအသက်အာမခံ',
    category: 'Group Life',
    card_color_theme: 'navy',
    short_description: 'ကုမ္ပဏီများ၊ စက်ရုံများနှင့် အသင်းအဖွဲ့များရှိ ဝန်ထမ်းအနည်းဆုံး (၅) ဦးမှစတင်၍ သေဆုံးခြင်း၊ ထာဝစဉ်မသန်စွမ်းဖြစ်ခြင်းနှင့် ဒဏ်ရာရရှိခြင်းတို့အတွက် အာမခံထားငွေ ကျပ် (၁၀) သိန်းမှ (၅၀၀) သိန်းအထိ အကာအကွယ်ပေးသော စုပေါင်းအသက်အာမခံ။',
    description: 'KBZ LIFE စုပေါင်းအသက်အာမခံသည် ကုမ္ပဏီများ၊ စက်ရုံများ၊ အလုပ်ရုံများနှင့် အသင်းအဖွဲ့များရှိ ဝန်ထမ်း/အလုပ်သမားများအတွက် ၎င်းတို့၏ မိသားစုနောင်ရေး စိတ်အေးချမ်းမှုရရှိစေရန် အသက် (၁၈) နှစ်မှ (၆၅) နှစ်အတွင်းရှိ ဝန်ထမ်း/အလုပ်သမား အနည်းဆုံး (၅)ဦး စုပေါင်း၍ အာမခံထားရှိနိုင်ပါသည်။ သေဆုံးခြင်း၊ ထာဝစဉ်မသန်စွမ်းဖြစ်ခြင်းနှင့် ထိခိုက်ဒဏ်ရာရရှိခြင်းများအတွက် ခိုင်မာသော အကာအကွယ်ပေးပါသည်။',
    image_url: '/assets/aistudio/6-2-1024x683_b78785ee.jpg',
    content: `## အာမခံထားရှိနိုင်သူများ
ကုမ္ပဏီများ၊ စက်ရုံများ၊ အလုပ်ရုံများနှင့် အသင်းအဖွဲ့များရှိ ဝန်ထမ်း/အလုပ်သမားများအတွက် ၎င်းတို့၏ မိသားစုနောင်ရေး စိတ်အေးချမ်းမှုရရှိစေရန် **အသက် (၁၈) နှစ်မှ (၆၅) နှစ်အတွင်း** ရှိ ဝန်ထမ်း/အလုပ်သမား **အနည်းဆုံး (၅)ဦး** စုပေါင်း၍ အာမခံထားရှိနိုင်ပါသည်။

---

## ရရှိနိုင်သည့်အာမခံချက်များ
ဤပေါ်လစီအရ အာမခံသက်တမ်းကာလအတွင်း အလုပ်သမား၏ အောက်ပါဖြစ်ရပ်များအတွက် အကာအကွယ် ပေးပါသည်-
- **သေဆုံးခြင်း (Death)**
- **ထာဝစဉ်မသန်စွမ်းဖြစ်ခြင်း (Total Permanent Disability)**
- **ဒဏ်ရာရရှိခြင်း (Injury)**

---

## အာမခံဝယ်ယူခွင့်ရှိသူများ
- **အလုပ်သမားများ၊ ဝန်ထမ်းများ၊ အဖွဲ့ဝင်များ** အနေဖြင့် မိမိတို့၏အသက်အတွက်လည်းကောင်း *(ဤနေရာတွင် ဆုံးရှုံးနိုင်ခြေ အန္တရာယ်တူညီသော ပုဂ္ဂိုလ် ၅ ဦး ထက်ပိုသူများ စုပေါင်းလျှောက်ထားနိုင်ပါသည်။)*
- **ကုမ္ပဏီများ၊ စက်ရုံများ၊ အလုပ်ရုံများနှင့် အသင်းအဖွဲ့များ** အနေဖြင့် ၎င်းတို့၏ အလုပ်သမားများ၊ ဝန်ထမ်းများ၊ အဖွဲ့ဝင်တို့၏အသက် အတွက်လည်းကောင်း အာမခံဝယ်ယူရန် လျှောက်ထားနိုင်ပါသည်။

---

## အာမခံထားငွေ
အာမခံထားငွေမှာ **အနည်းဆုံးကျပ် (၁၀)သိန်းမှ အများဆုံးကျပ်သိန်း (၅၀၀) အထိ** ထားရှိနိုင်ပါသည်။

---

## အာမခံသက်တမ်း
စုပေါင်းအသက်အာမခံ၏ သက်တမ်းမှာ **(၁) နှစ်** ဖြစ်ပါသည်။

---

## ပရီမီယံနှုန်းထား
အာမခံထားငွေ၏ **၁%** နှုန်းဖြစ်ပါသည်။

---

## ပရီမီယံကြေးပေးသွင်းခြင်း
ပရီမီယံကြေးကို **တစ်လုံးတစ်ခဲတည်း** ပေးချေရမည်ဖြစ်ပါသည်။

---

## အခွန်တံဆိပ်ခေါင်းခပေးဆောင်ခြင်း
အခွန်တံဆိပ်ခေါင်းခအနေဖြင့် **ပေါ်လစီတစ်စောင်လျှင် (၁၀)ကျပ်** ပေးဆောင်ရပါမည်။

---

## အကျိုးခံစားခွင့်များ

### (၁) သေဆုံးခြင်း
အာမခံထားသူများစာရင်းတွင် ပါဝင်သည့် အလုပ်သမားတစ်ဦးဦးသည် အာမခံသက်တမ်းအတွင်း မည်သည့် အကြောင်းကြောင့်မဆို သေဆုံးခဲ့ပါက **အာမခံထားငွေအပြည့်အဝ** ကို ပေါ်လစီရှင်မှတဆင့် အကျိုးခံစားခွင့် လွှဲပြောင်းပေးထားသူသို့ တစ်လုံးတည်း ပေးအပ်သွားမည်ဖြစ်ပါသည်။

### (၂) ဒဏ်ရာရရှိခြင်း
အာမခံထားသူစာရင်းတွင် ပါဝင်သည့် အလုပ်သမားတစ်ဦးဦးသည် အာမခံသက်တမ်းအတွင်း ထိခိုက်ဒဏ်ရာ ရရှိခဲ့ပါလျှင် ရရှိသည့် ထိခိုက်ဒဏ်ရာပြင်းထန်မှုအပေါ် မူတည်၍ ပေးလျော်သွားမည်ဖြစ်ပါသည်။ ထိခိုက်ဒဏ်ရာရရှိမှုအတွက် ဆရာဝန်၏ထောက်ခံချက်အပေါ်အခြေခံ၍ သင့်လျော်သော အကျိုးခံစားခွင့် ရရှိစေမည်ဖြစ်ပါသည်။ 

*ဇယားပါလျော်ကြေးနှုန်းထားများအား ဤနေရာတွင် ဝင်ရောက်ကြည့်ရှုနိုင်ပါသည်။*

### (၃) ထာဝစဉ်မသန်စွမ်းအကျိုးခံစားခွင့်
အာမခံထားသူစာရင်းတွင် ပါဝင်သည့် အလုပ်သမားတစ်ဦးဦးသည် အာမခံသက်တမ်းအတွင်း ထိခိုက်ဒဏ်ရာ ရရှိမှုကြောင့် အလုပ်အကိုင် လုံးဝလုပ်ကိုင်နိုင်ခြင်းမရှိသည်အထိ ထာဝစဉ်မသန်စွမ်း ဖြစ်ခဲ့လျှင် ဆရာဝန်၏ထောက်ခံချက်အပေါ်အခြေခံ၍ သင့်လျော်သော အကျိုးခံစားခွင့် **(သို့မဟုတ်) အာမခံထားငွေ အပြည့်အဝ** ကို ရရှိစေမည်ဖြစ်ပါသည်။

---

## ဤပေါ်လစီအရ အကျုံးမဝင်သောကိစ္စရပ်များ (Exclusions)
- မိမိကိုယ်ကို သတ်သေခြင်း
- မူးယစ်ဆေးဝါးသုံးစွဲခြင်း
- အာမခံထားသူများစာရင်းတွင်ပါဝင်သည့် အလုပ်သမားတစ်ဦးဦးသည် လုပ်ငန်းခွင်မှ နှုတ်ထွက် သွားလျှင်သော်လည်းကောင်း၊ ထုတ်ပယ်ခြင်းခံရလျှင် သော်လည်းကောင်း၊ ယင်းနေ့ရက်နောက်ပိုင်း ဖြစ်ပေါ်သည့် သေဆုံးခြင်းနှင့် ဒဏ်ရာရရှိခြင်း
- အာမခံထားသူကိုယ်တိုင်ပြစ်မှုကျူးလွန်ရာမှ သေဆုံးခြင်းနှင့် ဒဏ်ရာရရှိခြင်း
- အာမခံထားသူကိုယ်တိုင် အနာတရဖြစ်အောင် ဆောင်ရွက်ခြင်းမှ သေဆုံးခြင်းနှင့် ဒဏ်ရာရရှိခြင်း (ခိုက်ရန်ဖြစ်ပွားခြင်းကဲ့သို့သော)
- စစ်ဖြစ်ပွားခြင်း၊ (စစ်ကြေညာသည်ဖြစ်စေ၊ မကြေညာသည်ဖြစ်စေ)၊ စစ်အသွင်တိုက်ခိုက်ခြင်း၊ ပြည်တွင်း စစ်၊ ပုန်ကန်ခြင်း၊ အဓိကရုဏ်း၊ စစ်တပ် (သို့) လူထုအုံကြွခြင်း၊ သောင်းကျန်းခြင်း၊ သူပုန်ထခြင်း၊ တော်လှန်ခြင်း၊ စစ်တပ်အာဏာသိမ်းခြင်း၊ စစ်အမိန့် ထုတ်ပြန်ခြင်း (သို့) သိမ်းပိုက်ထားခြင်း၊ ပြည်တွင်းဆူပူသောင်းကျန်းခြင်း၊ ၎င်းတို့ကို ဖြစ်ပေါ်စေသော အကြောင်းအရင်းများ (သို့) ၎င်းတို့၏ အကျိုးဆက်များကြောင့် ဒဏ်ရာရခြင်း၊ မသန်စွမ်းဖြစ်ခြင်းနှင့် သေဆုံးခြင်း။

---

## ပြင်ဆင်မှုများ
အာမခံထားရှိစဉ် အကြောင်းအရာများနှင့် ပတ်သက်သော အပြောင်းအလဲတစ်ရပ်ရပ် ဖြစ်ပေါ်ခဲ့ပါက KBZ LIFE ရုံး (သို့) KBZ LIFE ကိုယ်စားလှယ်သို့ ပြင်ဆင်မှုများ ပြုလုပ်နိုင်ပါရန် အကြောင်းကြား ရပါမည်။ ဥပမာအားဖြင့် -
- **အကျိုးခံစားခွင့်ထားသူ ပြောင်းလဲခြင်း**
- **နှုတ်ထွက်/ ထုတ်ပယ်ခံရသူနေရာ၌ အလုပ်သမားအစားထိုးခန့်ထားခြင်း** (တစ်နှစ်အတွင်း အစားထိုးခွင့်ရှိပါသည်။)

*KBZ LIFE Insurance ရုံးသို့ အကြောင်းကြားထားသော ပြင်ဆင်မှုများနှင့်ပတ်သတ်ပြီး Case by Case ပေါ်မူတည်၍ KBZ LIFE Insurance မှ ဆောင်ရွက်ပေးသွားပါမည်။*

---

## အာမခံထားရှိရန် လိုအပ်သော အချက်အလက်များ
1. **အဆိုပြုလွှာ**
2. **မှတ်ပုံတင် အရှေ့ နှင့် အနောက် ပုံ**
3. **ဆေးစစ်ရန် လိုအပ်ပါက ဆေးစစ်ချက်အထောက်အထားများ**
4. **အဖွဲ့ဝင်များအား စာရင်းသွင်းရန် Excel Member Sheet** *(ထို sheet အား မိမိတို့၏ Sales channel အလိုက် Operation Department တွင် တောင်းခံရပါမည်။)*

---

## Claim တောင်းခံပါက လိုအပ်သောအချက်အလက်များ
1. **အကျိုးခံစားခွင့် တောင်းခံလွှာ**
2. **ပေါ်လစီစာချုပ်မိတ္တူ**
3. **အကယ်၍ ထာဝစဉ်မသန်စွမ်း၊ ဒဏ်ရာရရှိခြင်း ဖြစ်ပါက** - ဆေးကုသမှုဆိုင်ရာ စာရွက်စာတမ်းများ နှင့် ဆရာဝန်၏ ထောက်ခံချက်
4. **အကယ်၍ သေဆုံးခဲ့ပါက** - သေဆုံးကြောင်းလက်မှတ် ၊ ကျေးရွာ/ရပ်ကွက်အုပ်ချုပ်ရေးမှူး ထောက်ခံချက် ၊ ဆေးကုသမှုဆိုင်ရာ စာရွက်စာတမ်းများ နှင့် ဆရာဝန်၏ ထောက်ခံချက်အပြင် သက်ဆိုင်သည့် Case အလိုက် Claim Department မှ ထပ်မံ တောင်းခံသော စာရွက်စာတမ်းများအား ပူးတွဲ တင်ပြရန် လိုအပ်ပါသည်။`,
    key_benefits: [
      'သေဆုံးခြင်း: အာမခံထားငွေ အပြည့်အဝကို အကျိုးခံစားခွင့်လွှဲပြောင်းသူထံ တစ်လုံးတည်း ပေးအပ်ခြင်း',
      'ဒဏ်ရာရရှိခြင်း: ထိခိုက်ဒဏ်ရာပြင်းထန်မှုနှင့် ဆရာဝန်ထောက်ခံချက်ပေါ်မူတည်၍ လျော်ကြေးပေးအပ်ခြင်း',
      'ထာဝစဉ်မသန်စွမ်း: အလုပ်အကိုင်လုံးဝမလုပ်နိုင်သည်အထိ ဖြစ်ပါက အာမခံထားငွေ အပြည့်အဝအထိ ခံစားခွင့်ရှိခြင်း',
      'အလုပ်သမားအစားထိုးခွင့်: နှုတ်ထွက်/ထုတ်ပယ်ခံရသူနေရာတွင် ၁ နှစ်အတွင်း အစားထိုးလဲလှယ်နိုင်ခြင်း',
      'မိသားစုနောင်ရေး စိတ်အေးချမ်းမှု: လုပ်ငန်းခွင်အဖွဲ့အစည်းနှင့် ဝန်ထမ်းများအတွက် စုပေါင်းကာကွယ်မှု'
    ],
    key_features: [
      'အဖွဲ့ဝင်သတ်မှတ်ချက်: အသက် (၁၈) မှ (၆၅) နှစ်အတွင်းရှိ ဝန်ထမ်း/အလုပ်သမား အနည်းဆုံး (၅) ဦး',
      'အာမခံထားငွေ: အနည်းဆုံး ကျပ် (၁၀) သိန်းမှ အများဆုံး ကျပ်သိန်း (၅၀၀) အထိ',
      'အာမခံသက်တမ်း: (၁) နှစ် သက်တမ်း',
      'ပရီမီယံနှုန်းထား: အာမခံထားငွေ၏ ၁% (တစ်လုံးတစ်ခဲတည်း ပေးသွင်းခြင်း)',
      'တံဆိပ်ခေါင်းခ: ပေါ်လစီတစ်စောင်လျှင် (၁၀) ကျပ်'
    ],
    eligibility_criteria: 'အသက် (၁၈) နှစ်မှ (၆၅) နှစ်အတွင်းရှိ ဝန်ထမ်း/အလုပ်သမား အနည်းဆုံး (၅) ဦး စုပေါင်း၍ ဝယ်ယူနိုင်ပါသည်။',
    coverage_details: 'အာမခံထားငွေ အနည်းဆုံး ကျပ် (၁၀) သိန်းမှ အများဆုံး ကျပ်သိန်း (၅၀၀) အထိ။ သေဆုံးခြင်း၊ ထာဝစဉ်မသန်စွမ်းဖြစ်ခြင်းနှင့် ဒဏ်ရာရရှိခြင်း အကာအကွယ်။',
    premium_terms: 'အာမခံထားငွေ၏ ၁% နှုန်းအား တစ်လုံးတစ်ခဲတည်း ပေးချေရပါမည်။',
    target_audience: 'ကုမ္ပဏီများ၊ စက်ရုံများ၊ အလုပ်ရုံများနှင့် အသင်းအဖွဲ့များရှိ ဝန်ထမ်း/အလုပ်သမားများ။',
    display_order: 2,
    status: 'published',
    is_published: true,
    created_at: '2026-10-30T09:00:00Z',
    updated_at: '2026-10-30T09:00:00Z',
  },
];

// =====================================================================
// INITIAL PRODUCT-SPECIFIC QUIZZES
// =====================================================================
export const INITIAL_PRODUCT_QUIZZES: ProductQuiz[] = [
  {
    id: 'quiz_prod_medical_intl',
    product_id: 'prod_medical_intl',
    title: 'KBZ LIFE International ဆေးကုသမှု အာမခံ (Medical Insurance) Certification Quiz',
    description: 'Test your understanding of KBZ LIFE International Medical Insurance coverage, eligibility, plans, cashless claim process, and benefits.',
    passing_score: 80,
    max_attempts: 0,
    is_published: true,
    created_at: '2026-10-30T08:00:00Z',
    updated_at: '2026-10-30T08:00:00Z',
    questions: [
      {
        id: 'qp_intl_1',
        quiz_id: 'quiz_prod_medical_intl',
        question_text: 'KBZ LIFE International ဆေးကုသမှု အာမခံကို မည်သည့် အသက်အရွယ်မှစတင်၍ အာမခံထားရှိ ဝယ်ယူနိုင်ပါသနည်း?',
        options: [
          'အသက် (၁၈) နှစ် မှ အသက် (၆၀) အထိ',
          'မွေးကင်းစ မှ အသက် (၆၅) နှစ်အထိ',
          'အသက် (၂၁) နှစ် မှ အသက် (၅၅) အထိ',
          'မွေးကင်းစ မှ အသက် (၅၀) အထိ'
        ],
        correct_option_index: 1,
        explanation: 'မွေးကင်းစ မှ အသက် (၆၅) နှစ်အထိ အာမခံဝယ်ယူထားရှိနိုင်ပါသည်။',
        display_order: 1
      },
      {
        id: 'qp_intl_2',
        quiz_id: 'quiz_prod_medical_intl',
        question_text: 'Oversea Treatment (Thailand) ဘန်ကောက်တွင် ဆေးကုသခွင့် အကျိုးခံစားခွင့် ရရှိရန် မည်သည့် Plan အမျိုးအစားကို ဝယ်ယူရမည်နည်း?',
        options: [
          'Core Plan 1',
          'Core Plan 2',
          'Grand Plan 1',
          'Grand Plan 2 Plus'
        ],
        correct_option_index: 3,
        explanation: 'Grand Plan 2 Plus အား ဝယ်ယူမှသာ ဘန်ကောက်တွင် ဆေးကုသ၍ ရနိုင်သည့် Oversea Treatment (Thailand) အကျိုးခံစားခွင့် ရရှိပါမည်။',
        display_order: 2
      },
      {
        id: 'qp_intl_3',
        quiz_id: 'quiz_prod_medical_intl',
        question_text: 'Good Health Bonus အကျိုးခံစားခွင့်အရ မည်မျှခံစားခွင့်ရှိပါသနည်း?',
        options: [
          '(၁) နှစ် လျော်ကြေးမတောင်းပါက (၅%)',
          '(၃) နှစ်ဆက်တိုက် အာမခံလျော်ကြေး မတောင်းခံပါက နောက်နှစ်တွင် နှစ်စဉ်အများဆုံးအာမခံပမာဏ၏ (၁၀%) အပိုခံစားခွင့်',
          'နှစ်စဉ် (၂၀%) အမြတ်ဝေစု ပြန်လည်ရရှိခြင်း',
          'မည်သည့် အပိုခံစားခွင့်မျှ မရှိပါ'
        ],
        correct_option_index: 1,
        explanation: '၃ နှစ်ဆက်တိုက် အာမခံလျော်ကြေး မတောင်းခံပါက နောက်နှစ်တွင် သတ်မှတ်ထားသော နှစ်စဉ် အများဆုံးအာမခံပမာဏ၏ (၁၀%) ကို ထပ်မံ၍ အပိုခံစားခွင့်ရှိပါသည်။',
        display_order: 3
      },
      {
        id: 'qp_intl_4',
        quiz_id: 'quiz_prod_medical_intl',
        question_text: 'Optional Cover (OPD, Dental, Vision) အတွက် မည်သည့် ပုံစံဖြင့် ခံစားခွင့်ရရှိမည်နည်း?',
        options: [
          '(10%) Co-Payment ပုံစံဖြင့်',
          '(20%) Co-Payment ပုံစံဖြင့်',
          '(50%) Co-Payment ပုံစံဖြင့်',
          'Co-Payment မလိုဘဲ အပြည့်အဝ'
        ],
        correct_option_index: 1,
        explanation: 'Optional Cover (အပိုထပ်ဆောင်းအကာအကွယ်) အတွက် အကျိုးခံစားခွင့်အားလုံးအပေါ်တွင် (20%) Co-Payment ပုံစံဖြင့် ခံစားခွင့်ရရှိပါမည်။',
        display_order: 4
      },
      {
        id: 'qp_intl_5',
        quiz_id: 'quiz_prod_medical_intl',
        question_text: 'မိမိစိတ်ကြိုက် Plan အမျိုးအစားအလိုက် အာမခံအကာအကွယ်ပမာဏ မည်မျှအထိ ဝယ်ယူနိုင်ပါသနည်း?',
        options: [
          'ကျပ်သိန်း (၁၀) မှ ကျပ်သိန်း (၁၀၀) အထိ',
          'ကျပ်သိန်း (၅၀) မှ ကျပ်သိန်း (၅၀၀) အထိ',
          'ကျပ်သိန်း (၁၅၀) မှ ကျပ်သိန်း (၁,၂၀၀) အထိ',
          'ကျပ်သိန်း (၅၀၀) မှ ကျပ်သိန်း (၂,၀၀၀) အထိ'
        ],
        correct_option_index: 2,
        explanation: 'မိမိစိတ်ကြိုက် Plan အမျိုးအစားအလိုက်အား အကာအကွယ် ကျပ်သိန်း(၁၅၀) မှ ကျပ်သိန်း (၁,၂၀၀) အထိ ဝယ်ယူနိုင်ပါသည်။',
        display_order: 5
      }
    ]
  },
  {
    id: 'quiz_prod_group_life',
    product_id: 'prod_group_life',
    title: 'KBZ LIFE စုပေါင်းအသက်အာမခံ (Group Life Insurance) Certification Quiz',
    description: 'Test your knowledge on Group Life Insurance eligibility, coverage limits, premium calculations, exclusions, and claim requirements.',
    passing_score: 80,
    max_attempts: 0,
    is_published: true,
    created_at: '2026-10-30T09:00:00Z',
    updated_at: '2026-10-30T09:00:00Z',
    questions: [
      {
        id: 'qp_gl_1',
        quiz_id: 'quiz_prod_group_life',
        question_text: 'KBZ LIFE စုပေါင်းအသက်အာမခံ ထားရှိရန် အလုပ်သမား အနည်းဆုံး မည်မျှ စုပေါင်းရမည်နည်း?',
        options: [
          '(၂) ဦး',
          '(၃) ဦး',
          '(၅) ဦး',
          '(၁၀) ဦး'
        ],
        correct_option_index: 2,
        explanation: 'အသက် (၁၈) နှစ်မှ (၆၅) နှစ်အတွင်းရှိ ဝန်ထမ်း/အလုပ်သမား အနည်းဆုံး (၅) ဦး စုပေါင်း၍ အာမခံထားရှိနိုင်ပါသည်။',
        display_order: 1
      },
      {
        id: 'qp_gl_2',
        quiz_id: 'quiz_prod_group_life',
        question_text: 'စုပေါင်းအသက်အာမခံ၏ ပရီမီယံနှုန်းထားမှာ အာမခံထားငွေ၏ မည်မျှ ရာခိုင်နှုန်းဖြစ်ပါသနည်း?',
        options: [
          '၀.၅ %',
          '၁ %',
          '၂ %',
          '၅ %'
        ],
        correct_option_index: 1,
        explanation: 'ပရီမီယံနှုန်းထားမှာ အာမခံထားငွေ၏ ၁% နှုန်းဖြစ်ပြီး တစ်လုံးတစ်ခဲတည်း ပေးချေရပါမည်။',
        display_order: 2
      },
      {
        id: 'qp_gl_3',
        quiz_id: 'quiz_prod_group_life',
        question_text: 'စုပေါင်းအသက်အာမခံတွင် ထားရှိနိုင်သော အာမခံထားငွေ ပမာဏမှာ မည်မျှဖြစ်ပါသနည်း?',
        options: [
          'အနည်းဆုံး ကျပ် (၅) သိန်း မှ အများဆုံး ကျပ်သိန်း (၁၀၀)',
          'အနည်းဆုံး ကျပ် (၁၀) သိန်း မှ အများဆုံး ကျပ်သိန်း (၅၀၀)',
          'အနည်းဆုံး ကျပ် (၅၀) သိန်း မှ အများဆုံး ကျပ်သိန်း (၁,၀၀၀)',
          'အကန့်အသတ်မရှိ ထားရှိနိုင်ပါသည်'
        ],
        correct_option_index: 1,
        explanation: 'အာမခံထားငွေမှာ အနည်းဆုံးကျပ် (၁၀) သိန်းမှ အများဆုံးကျပ်သိန်း (၅၀၀) အထိ ထားရှိနိုင်ပါသည်။',
        display_order: 3
      },
      {
        id: 'qp_gl_4',
        quiz_id: 'quiz_prod_group_life',
        question_text: 'အလုပ်သမားတစ်ဦးသည် လုပ်ငန်းခွင်မှ နှုတ်ထွက်/ထုတ်ပယ်ခံရပါက ယင်းနေရာတွင် အလုပ်သမား အစားထိုးခန့်ထားခြင်းကို မည်သည့်ကာလအတွင်း ပြုလုပ်ခွင့်ရှိပါသနည်း?',
        options: [
          '(၁) လအတွင်း',
          '(၃) လအတွင်း',
          '(၆) လအတွင်း',
          '(၁) နှစ်အတွင်း'
        ],
        correct_option_index: 3,
        explanation: 'နှုတ်ထွက်/ ထုတ်ပယ်ခံရသူနေရာ၌ အလုပ်သမားအစားထိုးခန့်ထားခြင်းကို တစ်နှစ်အတွင်း အစားထိုးခွင့်ရှိပါသည်။',
        display_order: 4
      },
      {
        id: 'qp_gl_5',
        quiz_id: 'quiz_prod_group_life',
        question_text: 'စုပေါင်းအသက်အာမခံအတွက် အဖွဲ့ဝင်များအား စာရင်းသွင်းရန် မည်သည့် စာရွက်စာတမ်း လိုအပ်ပါသနည်း?',
        options: [
          'Personal Bank Statement',
          'Excel Member Sheet (Operation Department တွင် တောင်းခံရန်)',
          'Tax Clearance Certificate',
          'Export/Import License'
        ],
        correct_option_index: 1,
        explanation: 'အဖွဲ့ဝင်များအား စာရင်းသွင်းရန် Excel Member Sheet လိုအပ်ပြီး မိမိတို့၏ Sales channel အလိုက် Operation Department တွင် တောင်းခံရပါမည်။',
        display_order: 5
      }
    ]
  }
];

// =====================================================================
// INITIAL COMPANY BULLETIN (Campaigns, Announcements, Notices)
// =====================================================================

export const INITIAL_SKILL_QUIZZES: SkillQuiz[] = [
  {
    id: 'quiz_sk_001',
    category_id: 'sk_cat_001',
    resource_id: 'sk_res_001',
    title: 'Business English: Client Advisory & Professional Communications Assessment',
    description: 'Verify your mastery of corporate consultative terminology, formal email writing conventions, and empathetic client interaction standards.',
    passing_score: 80,
    created_at: '2026-08-01T08:00:00Z',
    updated_at: '2026-10-20T10:00:00Z',
    is_published: true,
    questions: [
      {
        id: 'q_sk_001_1',
        quiz_id: 'quiz_sk_001',
        question_text: 'When communicating premium adjustments or policy renewals to a high-net-worth client, which phrasing demonstrates the highest level of professional consultative empathy?',
        options: [
          '"You have to pay the new premium rate immediately or your coverage is cancelled."',
          '"We appreciate your continued trust in KBZLife. Allow us to review how your updated portfolio values maintain optimal protection for your family."',
          '"The head office changed the rates and there is nothing anyone can do."',
          '"Please check our general website whenever you have spare time."'
        ],
        correct_option_index: 1,
        explanation: 'Consultative advisory emphasizes relationship-building, acknowledging client trust, and linking changes to their family protection objectives.',
        display_order: 1
      },
      {
        id: 'q_sk_001_2',
        quiz_id: 'quiz_sk_001',
        question_text: 'In formal business correspondence, what does the abbreviation "CDD" represent in life insurance advisory contexts?',
        options: [
          'Central Daily Disbursement',
          'Customer Due Diligence',
          'Certified Death Declaration',
          'Corporate Distribution Directive'
        ],
        correct_option_index: 1,
        explanation: 'CDD stands for Customer Due Diligence, the core standard operating process of verifying client identity and risk background.',
        display_order: 2
      },
      {
        id: 'q_sk_001_3',
        quiz_id: 'quiz_sk_001',
        question_text: 'Which email closing is most appropriate for formal policyholder advisory inquiries?',
        options: [
          '"Later,"',
          '"Yours sincerely / Warm regards, [Advisor Name], KBZLife Insurance"',
          '"Sent from my phone,"',
          '"Thanks a bunch,"'
        ],
        correct_option_index: 1,
        explanation: '"Yours sincerely" or "Warm regards" followed by complete name and official title maintains brand professionalism and customer confidence.',
        display_order: 3
      }
    ]
  },
  {
    id: 'quiz_sk_002',
    category_id: 'sk_cat_002',
    resource_id: 'sk_res_002',
    title: 'Excel & Data Analytics: Financial Modeling Assessment',
    description: 'Practical evaluation on policyholder calculations, dynamic formulas (XLOOKUP), and financial dashboard analytics.',
    passing_score: 80,
    created_at: '2026-08-10T10:00:00Z',
    updated_at: '2026-10-20T10:00:00Z',
    is_published: true,
    questions: [
      {
        id: 'q_sk_002_1',
        quiz_id: 'quiz_sk_002',
        question_text: 'Why is XLOOKUP generally preferred over traditional VLOOKUP in financial modeling sheets?',
        options: [
          'XLOOKUP requires columns to be sorted in ascending order',
          'XLOOKUP defaults to exact matches, looks up to the left and right, and handles column insertions safely without breaking index references',
          'XLOOKUP only works on numeric data and ignores string cells',
          'XLOOKUP automatically converts spreadsheets into PDF documents'
        ],
        correct_option_index: 1,
        explanation: 'XLOOKUP defaults to exact match, allows leftward searches, and uses cell ranges rather than column index numbers, preventing breakage if columns are added.',
        display_order: 1
      },
      {
        id: 'q_sk_002_2',
        quiz_id: 'quiz_sk_002',
        question_text: 'Which Excel function is best suited to calculate the periodic payment for an annuity policy based on constant payments and interest rate?',
        options: [
          'PMT',
          'COUNTIF',
          'STDEV.S',
          'CONCATENATE'
        ],
        correct_option_index: 0,
        explanation: 'PMT calculates the payment for a loan or annuity investment based on constant payments and a constant interest rate.',
        display_order: 2
      }
    ]
  }
];

// =====================================================================
// INITIAL COMPANY BULLETIN (Campaigns, Announcements, Notices)
// =====================================================================

export const INITIAL_COMPANY_BULLETINS: CompanyBulletinItem[] = [
  {
    id: 'bulletin-001',
    title: 'Smile Campaign 2026 (Myanmar Version)',
    description: '“ငါတို့အပြုံး ငါတို့ခွန်အား” — ၂၀၂၆ ခုနှစ် ဇွန်လ (၁၉) ရက် မှ ဩဂုတ်လ (၁၉) ရက်အထိ။ ဝန်ထမ်းများအကြား အပြုသဘောဆောင်သော လုပ်ငန်းခွင်ယဉ်ကျေးမှုနှင့် အပြုံးဖြင့် နွေးထွေးစွာ နှုတ်ဆက်ခြင်း ယဉ်ကျေးမှု မြှင့်တင်ရေး အထူးလှုပ်ရှားမှု။ လျှို့ဝှက်အကဲဖြတ်ဒိုင် (၉) ဦး၊ All-Hands Meeting Voting စနစ်နှင့် ဆုကြေးများ (Smile Champion: 1,000,000 MMK, First Runner-Up: 300,000 MMK, Branch Champions: 800,000 MMK) ပါဝင်သည်။',
    category: 'Campaign',
    pdf_url: '/assets/aistudio/Smile_Campaign_2026___Myanmar_Version_0ac67e87.pdf',
    file_name: 'Smile_Campaign_2026___Myanmar_Version_0ac67e87.pdf',
    file_size: 194713,
    formatted_file_size: '190.1 KB',
    page_count: 3,
    published: true,
    status: 'published',
    published_at: '2026-10-24T09:30:00Z',
    created_at: '2026-10-24T08:00:00Z',
    updated_at: '2026-10-29T12:00:00Z',
    author_id: 'u0000000-0000-0000-0000-000000000001',
    author_name: 'Executive Leadership & HR Governance',
    department: 'Corporate Culture & HR Governance',
    tags: ['campaign', 'smile campaign 2026', 'workplace culture', 'all-hands', 'rewards', 'yangon', 'mandalay', 'taunggyi'],
    priority: 'high',
    verified: true,
  },
  {
    id: 'bulletin-002',
    title: 'Office Vehicle Transportation Policy & Guidelines Ver 1.1 (Myanmar Version)',
    description: 'ရုံးမော်တော်ယာဉ်အသုံးပြုခြင်းဆိုင်ရာ မူဝါဒ နှင့် လမ်းညွှန်ချက်များ (Internal Memorandum Ver 1.1) — ၂၀၂၅ ခုနှစ်မှ စတင်အကျိုးသက်ရောက်သည့် တရားဝင် စည်းမျဉ်းများ။ ယာဉ်တောင်းခံမှု လမ်းညွှန်ချက် (အနည်းဆုံး ၂၄ နာရီ ကြိုတင်တင်ပြရန်)၊ HOD ကြိုတင်ခွင့်ပြုချက်၊ Grab Services အစားထိုးစီစဉ်မှု၊ စက်သုံးဆီစံနှုန်း (၁၀ ကီလိုမီတာလျှင် ၁ လီတာ)၊ လမ်းကြောင်းလိုက်နာမှု၊ ယာဉ်မောင်းတာဝန်နှင့် ဘေးအန္တရာယ်ကင်းရှင်းရေး စည်းမျဉ်းများ။',
    category: 'Policy Memo',
    pdf_url: '/assets/aistudio/Office_Vehicle_Transportation_Policy___Guidelines_Ver_1.1_Myan_108094a4.pdf',
    file_name: 'Office_Vehicle_Transportation_Policy___Guidelines_Ver_1.1_Myan_108094a4.pdf',
    file_size: 360705,
    formatted_file_size: '352.3 KB',
    page_count: 7,
    published: true,
    status: 'published',
    published_at: '2026-10-22T14:15:00Z',
    created_at: '2026-10-22T11:00:00Z',
    updated_at: '2026-10-29T12:00:00Z',
    author_id: 'u0000000-0000-0000-0000-000000000001',
    author_name: 'Corporate Services Department',
    department: 'Corporate Services / Administration',
    tags: ['policy memo', 'vehicle policy', 'transportation', 'corporate services', 'guidelines', 'standard operating procedure'],
    priority: 'normal',
    verified: true,
  },
  {
    id: 'bulletin-003',
    title: 'Notice on Office and Workplace Cleanliness',
    description: 'ရုံးတွင်း နှင့် ရုံးပတ်ဝန်းကျင် သန့်ရှင်းသပ်ရပ်ရေး၊ စည်းကမ်း လိုက်နာမှု နှင့် လုပ်ငန်းခွင် ပတ်ဝန်းကျင် ထိန်းသိမ်းရေး အသိပေးကြေညာချက် (INTERNAL MEMO) — Head Office နှင့် ရုံးခွဲများအားလုံးအတွက် စည်းကမ်းချက် ၂၀ ချက်။ အမှိုက်စွန့်ပစ်ခြင်း၊ ဆေးလိပ်နှင့် ကွမ်းယာစည်းကမ်း၊ Pantry/Dining Area၊ Meeting Room၊ Toilet၊ Workspace Cleanliness၊ “Clean as You Go” အလေ့အကျင့်နှင့် Shared Responsibility စုပေါင်းတာဝန်ယူမှု လမ်းညွှန်ချက်များ။',
    category: 'Notice',
    pdf_url: '/assets/aistudio/Notice_on_Office_and_Workplace_Cleanliness_PDF_1_6e27f744.pdf',
    file_name: 'Notice_on_Office_and_Workplace_Cleanliness_PDF_1_6e27f744.pdf',
    file_size: 373061,
    formatted_file_size: '364.3 KB',
    page_count: 8,
    published: true,
    status: 'published',
    published_at: '2026-10-20T11:00:00Z',
    created_at: '2026-10-20T08:30:00Z',
    updated_at: '2026-10-29T12:00:00Z',
    author_id: 'u0000000-0000-0000-0000-000000000001',
    author_name: 'Human Resources ဌာန',
    department: 'Human Resources Department',
    tags: ['notice', 'office cleanliness', 'workplace environment', 'clean as you go', 'facility etiquette', 'human resources'],
    priority: 'normal',
    verified: true,
  },
  {
    id: 'bulletin-004',
    title: 'CEO Challenge - High Five Sales Campaign (High Five Sprint)',
    description: '“HIGH FIVE SPRINT” (မေလ ၅ ရက်တာ အရောင်းမြှင့်တင်ရေး အထူးအစီအစဉ်) — ၄၀၀ မီလီယံ FYP ပန်းတိုင်အတွက် မေလ ၁၁ ရက်မှ ၁၅ ရက်အထိ ၅ ရက်တာ အထူးမစ်ရှင်။ နေ့စဉ် Daily FYP ဆု (၁၀ မီလီယံပြည့်တိုင်း ၁၀၀,၀၀၀ ကျပ်)၊ Friday Finisher အပတ်စဉ်ဆု (၃၀ မီလီယံပြည့်ပါက ၂၀၀,၀၀၀ ကျပ်) နှင့် Weekend Warrior အပတ်စဉ်ချန်ပီယံဆု (၃၀၀,၀၀၀ ကျပ်)။ ၅ ရက်အတွင်း စုစုပေါင်း ငွေကျပ် ၁၀ သိန်းအထိ ရရှိနိုင်မည့် အခွင့်အရေး။ Agency, Bancassurance, CDS အရောင်းဝန်ထမ်းများအားလုံး ပါဝင်နိုင်သည်။',
    category: 'Campaign',
    pdf_url: '/assets/aistudio/CEO_Challenge_-_High_Five_Sales_Campaign_8aca8477.pdf',
    file_name: 'CEO_Challenge_-_High_Five_Sales_Campaign_8aca8477.pdf',
    file_size: 225164,
    formatted_file_size: '219.9 KB',
    page_count: 3,
    published: true,
    status: 'published',
    published_at: '2026-10-18T16:45:00Z',
    created_at: '2026-10-18T13:00:00Z',
    updated_at: '2026-10-29T12:00:00Z',
    author_id: 'u0000000-0000-0000-0000-000000000001',
    author_name: 'Chief Executive Officer & Sales Leadership',
    department: 'Sales & Agency Distribution',
    tags: ['campaign', 'ceo challenge', 'high five sprint', 'fyp sales target', 'agency', 'bancassurance', 'corporate direct sale'],
    priority: 'urgent',
    verified: true,
  },
];
