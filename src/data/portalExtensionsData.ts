/**
 * KBZLife Employee Learning Portal
 * Extensions Data: Our Company News, Company Update Videos, and Top Performers (12 Months, 3 Channels)
 */

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  category: string;
  imageUrl?: string | null;
  imageCaption?: string;
  isFeatured?: boolean;
  author?: string;
  readTimeMinutes?: number;
}

export interface CompanyVideo {
  id: string;
  title: string;
  description?: string;
  youtubeUrl: string;
  publishDate?: string;
  category?: string;
  duration?: string;
}

export type PerformerChannel = 'Alliance Channel' | 'Bancassurance Channel' | 'Corporate Channel';

export interface PerformerRecord {
  channel: PerformerChannel;
  name?: string; // When empty, display blank
  photoUrl?: string | null; // When null/empty, display question-mark silhouette
  recognitionNote?: string;
}

export interface MonthlyTopPerformerGroup {
  monthIndex: number; // 1 to 12
  monthName: string; // e.g. "January"
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  setIndex: 0 | 1 | 2; // Set 0: Jan-Apr, Set 1: May-Aug, Set 2: Sep-Dec
  performers: {
    alliance: PerformerRecord;
    bancassurance: PerformerRecord;
    corporate: PerformerRecord;
  };
}

/**
 * Helper to safely extract YouTube video ID from various standard URL formats
 */
export function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  // Match standard formats: v=ID, youtu.be/ID, embed/ID
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = trimmed.match(regExp);
  if (match && match[1]) {
    return match[1];
  }
  // If the user entered raw 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  return null;
}

/**
 * Initial News Content (Strict adherence: clearly labelled internal news, editable)
 */
export const defaultCompanyNews: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'KBZ Universal Life ကိုတစ်နှစ် ၆ သိန်းသွင်းပြီး အသက်အာမခံထားရှိသူအား (သိန်း ၂၁၀)ကျပ် အာမခံလျော်ကြေးငွေပေးအပ်ခဲ့ခြင်း',
    excerpt: 'တစ်ခါတစ်ရံ ဘဝဟာ ကြိုတင်မသိနိုင်တဲ့ အခြေအနေတွေကို ရုတ်တရက် ချပြတတ်ပါတယ်...မနေ့တုန်းကပဲ ကျန်းမာနေသူတစ်ယောက်က ဒီနေ့မှာတော့ "ဦးနှောက်သွေးကြောပေါက်" ပြီးအသက်ဆုံးရှုံးသွားနိုင်ပါတယ်...ဒီလိုအချိန်မှာ "င့ါမိသားစုအတွက် ဘာကျန်ခဲ့မလဲ"ဆိုတဲ့ မေးခွန်းကအရေးအကြီးဆုံးပါ။ KBZ Universal Life ကိုရွေးချယ်ထားခဲ့သော Customer တစ်ယောက်က တစ်နှစ်စာ ပရီမီယံကြေး (၆)သိန်းကျပ်သွင်းပြီး အာမခံအကာအကွယ် သိန်း(၂၁၀)ကျပ်ကို KBZ LIFE Insurance ကနေ အကျိုးခံစားခွင့်နဲ့အညီ အကျိုး ခံစားခွင့်ရှိသူထံပြန်လည်ပေးအပ်ခဲ့ပါတယ်။',
    body: [
      'တစ်ခါတစ်ရံ ဘဝဟာ ကြိုတင်မသိနိုင်တဲ့ အခြေအနေတွေကို ရုတ်တရက် ချပြတတ်ပါတယ်...မနေ့တုန်းကပဲ ကျန်းမာနေသူတစ်ယောက်က ဒီနေ့မှာတော့ "ဦးနှောက်သွေးကြောပေါက်" ပြီးအသက်ဆုံးရှုံးသွားနိုင်ပါတယ်...ဒီလိုအချိန်မှာ "င့ါမိသားစုအတွက် ဘာကျန်ခဲ့မလဲ"ဆိုတဲ့ မေးခွန်းကအရေးအကြီးဆုံးပါ။',
      'KBZ Universal Life ကိုရွေးချယ်ထားခဲ့သော Customer တစ်ယောက်က တစ်နှစ်စာ ပရီမီယံကြေး (၆)သိန်းကျပ်သွင်းပြီး အာမခံအကာအကွယ် သိန်း(၂၁၀)ကျပ်ကို KBZ LIFE Insurance ကနေ အကျိုးခံစားခွင့်နဲ့အညီ အကျိုး ခံစားခွင့်ရှိသူထံပြန်လည်ပေးအပ်ခဲ့ပါတယ်။',
      'KBZ LIFE Insurance အနေဖြင့် အသက်အာမခံထားရှိသူ မိသားစုများ၏ မမျှော်လင့်သော အခက်အခဲကာလများတွင် မိသားစုအတွက် ငွေကြေးလုံခြုံမှုနှင့် ကာကွယ်မှုအပြည့်အဝရရှိစေရန် ကတိကဝတ်ပြုထားသည့်အတိုင်း လျော်ကြေးငွေများကို အချိန်နှင့်တပြေးညီ တိကျမှန်ကန်စွာ စိစစ်ထုတ်ပေးလျက်ရှိပါသည်။',
    ],
    date: 'October 2026',
    category: 'အသက်အာမခံ လျော်ကြေးငွေ ပေးအပ်ခြင်း',
    imageUrl: '/assets/aistudio/viber_image_2026-10-30_09-37-02-547_9a4c3237.jpg',
    imageCaption: 'KBZ Universal Life တစ်သက်တာအသက်အာမခံ လျော်ကြေးငွေ (သိန်း ၂၁၀) ပေးအပ်ခြင်း',
    isFeatured: true,
    author: 'KBZ LIFE Insurance Co.,Ltd.',
    readTimeMinutes: 2,
  },
  {
    id: 'news-2',
    title: 'ဘန်ကောက်ထိဆေးကုသနိုင်တဲ့ "နိုင်ငံတကာဆေးကုသမှုအာမခံ (I Medical Insurance)" ကို Claim လျော်ကြေးငွေပေးအပ်ခြင်း',
    excerpt: 'သိန်း (၁၂၀၀)အထိ အကာအကွယ်ရတဲ့ I Medical ကိုဝယ်ယူထားတဲ့ Customer တစ်ဦးက "မျက်လုံးသွေးကြောရောင်တာကြောင့် ဘန်ကောက်မှာ ဆေးကုသမှုခံယူခဲ့ပါတယ်" I Medical Insurance ရဲ့ Grand Plan 2 Plus အတိုင်း အာမခံပေါ် လစီ ငွေကျပ်(၂၇)သိန်းကို လျော်ကြေးအနေနဲ့ ပေးအပ်ခဲ့ပါတယ်...',
    body: [
      'သိန်း (၁၂၀၀)အထိ အကာအကွယ်ရတဲ့ I Medical ကိုဝယ်ယူထားတဲ့ Customer တစ်ဦးက "မျက်လုံးသွေးကြောရောင်တာကြောင့် ဘန်ကောက်မှာ ဆေးကုသမှုခံယူခဲ့ပါတယ်"',
      'I Medical Insurance ရဲ့ Grand Plan 2 Plus အတိုင်း အာမခံပေါ် လစီ ငွေကျပ်(၂၇)သိန်းကို လျော်ကြေးအနေနဲ့ ပေးအပ်ခဲ့ပါတယ်...',
      'KBZ LIFE Insurance ၏ နိုင်ငံတကာဆေးကုသမှုအာမခံ (i-Medical Insurance) သည် မြန်မာနိုင်ငံတွင်သာမက ဘန်ကောက်နှင့် နိုင်ငံတကာအဆင့်မီ ဆေးရုံကြီးများတွင်ပါ စိတ်အေးချမ်းသာစွာ ဆေးကုသမှုခံယူနိုင်ရန် အထူးအကာအကွယ်ပေးထားပြီး အာမခံထားရှိသူများအတွက် ဆေးကုသစရိတ် လျော်ကြေးငွေများကို လျင်မြန်ချောမွေ့စွာ ထုတ်ပေးလျက်ရှိပါသည်။',
    ],
    date: 'October 2026',
    category: 'ကျန်းမာရေးအာမခံ လျော်ကြေးငွေ ပေးအပ်ခြင်း',
    imageUrl: '/assets/aistudio/viber_image_2026-10-30_09-37-03-813_7790504d.jpg',
    imageCaption: 'i-Medical Insurance နိုင်ငံတကာဆေးကုသမှုအာမခံ လျော်ကြေးငွေ (၂၇) သိန်း ပေးအပ်ခြင်း',
    isFeatured: false,
    author: 'KBZ LIFE Insurance Co.,Ltd.',
    readTimeMinutes: 2,
  },
  {
    id: 'news-3',
    title: 'Annual Vietnam Trip',
    excerpt: 'United in purpose, stronger as a team. Grateful for the shared ideas, teamwork and momentum captured in these group movements.',
    body: [
      'United in purpose, stronger as a team. Grateful for the shared ideas, teamwork and momentum captured in these group movements.',
      'KBZLife team members united during the annual corporate retreat in Da Nang, Vietnam, celebrating collective achievements, cross-functional collaboration, and cultural alignment under the dragon bridge.',
    ],
    date: 'October 2026',
    category: 'Corporate Culture & Events',
    imageUrl: '/assets/aistudio/viber_image_2026-10-30_09-37-04-954_3893c8d6.png',
    imageCaption: 'KBZLife Corporate Annual Vietnam Trip — Da Nang Dragon Bridge',
    isFeatured: false,
    author: 'KBZ LIFE Internal Communications',
    readTimeMinutes: 1,
  },
  {
    id: 'news-4',
    title: 'Our Staff Party "2026"',
    excerpt: 'We’re so happy to share that our KBZ Life Staff Party 2026 was held at Inya Lake Hotel in Yangon! All KBZ Life employees across Myanmar came together and joined the celebration with great energy and happiness. It was such a fun and memorable time for everyone!',
    body: [
      'We’re so happy to share that our KBZ Life Staff Party 2026 was held at Inya Lake Hotel in Yangon!',
      'All KBZ Life employees across Myanmar came together and joined the celebration with great energy and happiness. It was such a fun and memorable time for everyone!',
    ],
    date: 'October 2026',
    category: 'Corporate Celebration & Events',
    imageUrl: '/assets/aistudio/viber_image_2026-10-30_09-37-06-086_b8a4007c.jpg',
    imageCaption: 'KBZ Life Staff Party 2026 at Inya Lake Hotel, Yangon',
    isFeatured: false,
    author: 'KBZ LIFE Internal Communications',
    readTimeMinutes: 1,
  },
  {
    id: 'news-5',
    title: 'A Great Day with Great People 🎉',
    excerpt: 'Our KBZ LIFE Insurance all-hands meeting was full of energy, ideas, and inspiration. 💙 Proud of this team and excited for the journey ahead.',
    body: [
      'Our KBZ LIFE Insurance all-hands meeting was full of energy, ideas, and inspiration. 💙',
      'Proud of this team and excited for the journey ahead.',
    ],
    date: 'October 2026',
    category: 'Corporate Culture & Events',
    imageUrl: '/assets/aistudio/viber_image_2026-10-30_09-37-07-116_fc1102ab.png',
    imageCaption: 'KBZ LIFE Insurance All-Hands Meeting & Executive Engagement',
    isFeatured: false,
    author: 'KBZ LIFE Internal Communications',
    readTimeMinutes: 1,
  },
];

/**
 * Initial Company Update Videos (Internal videos hosted on YouTube)
 */
export const defaultCompanyVideos: CompanyVideo[] = [
  {
    id: 'vid-1',
    title: "တောင်ကြီးမြို့မှာ ကျင်းပခဲ့တဲ့ KBZ LIFE ရဲ့ '' အလင်းများဝေစည် သီတင်းကျွတ်ရာသီ '' ဆီမီးထွန်းပွဲကြီး",
    description:
      'တောင်ကြီးမြို့တွင် ခမ်းနားသိုက်မြိုက်စွာ ကျင်းပပြုလုပ်ခဲ့သော KBZ LIFE ၏ "အလင်းများဝေစည် သီတင်းကျွတ်ရာသီ" ဆီမီးထွန်းပွဲတော် အခမ်းအနား မှတ်တမ်းတင်ဗီဒီယို။ ဝန်ထမ်းများနှင့် မိသားစုများ၊ ဒေသခံပြည်သူများ စုပေါင်းဆင်နွှဲခဲ့ကြသည့် အမှတ်တရ မြင်ကွင်းများ။',
    youtubeUrl: 'https://youtu.be/zy51ZSz_mtk?si=vLhbHucTrgrJZT7p',
    publishDate: 'October 2026',
    category: 'Corporate Events & Highlights',
    duration: '03:45',
  },
  {
    id: 'vid-2',
    title: 'မန္တလေးမြို့မှာ စည်စည်ကားကား ကျင်းပခဲ့တဲ့ " အလင်းများဝေစည် သီတင်းကျွတ်ရာသီ " ဆီမီးထွန်းပွဲတော်ကြီး',
    description:
      'မန္တလေးမြို့တွင် စည်စည်ကားကား ခမ်းနားသိုက်မြိုက်စွာ ကျင်းပပြုလုပ်ခဲ့သော KBZ LIFE ၏ "အလင်းများဝေစည် သီတင်းကျွတ်ရာသီ" ဆီမီးထွန်းပွဲတော်ကြီး မှတ်တမ်းတင်ဗီဒီယို။ ဝန်ထမ်းများနှင့် မိသားစုများ၊ ဒေသခံပြည်သူများ စုပေါင်းဆင်နွှဲခဲ့ကြသည့် အမှတ်တရ မြင်ကွင်းများ။',
    youtubeUrl: 'https://youtu.be/2LfW4_synno?si=Q4Z0yA74vnzUQvUz',
    publishDate: 'October 2026',
    category: 'Corporate Events & Highlights',
    duration: '03:20',
  },
  {
    id: 'vid-3',
    title: 'Life Insurance Career ကို ဘာလို့ရွေးချယ်သင့်တာလဲ?',
    description:
      'KBZ LIFE Insurance တွင် အသက်အာမခံအကြံပေးပညာရှင် (Life Insurance Career) အဖြစ် ရွေးချယ်လုပ်ကိုင်ခြင်းဖြင့် ရရှိနိုင်မည့် အကျိုးကျေးဇူးများနှင့် အသက်မွေးဝမ်းကျောင်းဆိုင်ရာ အခွင့်အလမ်းများ မျှဝေဆွေးနွေးမှု။',
    youtubeUrl: 'https://youtu.be/dhktz2R1KW8?si=N-Ev6AAK3e41iYD2',
    publishDate: 'October 2026',
    category: 'Career & Professional Growth',
    duration: '04:15',
  },
  {
    id: 'vid-4',
    title: '" အသက်အာမခံဆိုတာ ထားကိုထားသင့်တဲ့ အရာလို့ အမကတော့ မြင်တယ် "',
    description:
      'KBZ LIFE Insurance တွင် အသက်အာမခံထားရှိခြင်း၏ အရေးပါပုံနှင့် မိသားစုလုံခြုံမှုအတွက် မရှိမဖြစ်လိုအပ်သည့် အကာအကွယ်ဖြစ်ကြောင်း အတွေ့အကြုံမျှဝေထားသည့် အင်တာဗျူးမှတ်တမ်းတင်ဗီဒီယို။',
    youtubeUrl: 'https://youtu.be/w91PC5xxxDw?si=ZsboDshBba-cUzGo',
    publishDate: 'October 2026',
    category: 'Customer Stories & Testimonials',
    duration: '03:15',
  },
];

/**
 * 12 Months Top Performer Structure
 * Channels:
 * 1. Alliance Channel
 * 2. Bancassurance Channel
 * 3. Corporate Channel
 * 
 * Strict Constraint per Prompt Section 5:
 * "For months or performer entries with no photo/details yet, show a neutral silhouette/avatar placeholder with a question mark (?) in the image area.
 * For these empty placeholders, do not show a name or channel text. Leave the card’s information area blank until details are supplied.
 * Do not invent employee names, photos, rankings, achievements, or channel assignments."
 */
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const defaultTopPerformers: MonthlyTopPerformerGroup[] = MONTH_NAMES.map((monthName, idx) => {
  const monthIndex = idx + 1;
  const quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4' =
    idx < 3 ? 'Q1' : idx < 6 ? 'Q2' : idx < 9 ? 'Q3' : 'Q4';
  const setIndex: 0 | 1 | 2 = (Math.floor(idx / 4) as 0 | 1 | 2);

  // Month 1 (January) demonstrates populated channel records so the user can test arrow navigation between channels
  if (idx === 0) {
    return {
      monthIndex,
      monthName,
      quarter,
      setIndex,
      performers: {
        alliance: {
          channel: 'Alliance Channel',
          name: 'Daw Thida Win',
          photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
          recognitionNote: 'Exceeded retail partnership targets and client onboarding excellence.',
        },
        bancassurance: {
          channel: 'Bancassurance Channel',
          name: 'U Kyaw Zayar',
          photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
          recognitionNote: 'Top bank branch advisory volume and 100% persistency rate.',
        },
        corporate: {
          channel: 'Corporate Channel',
          name: 'Daw Myint Myint San',
          photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
          recognitionNote: 'Closed premier group life agreements for nationwide enterprises.',
        },
      },
    };
  }

  // Month 9 (September) Top Performers
  if (idx === 8) {
    return {
      monthIndex,
      monthName,
      quarter,
      setIndex,
      performers: {
        alliance: {
          channel: 'Alliance Channel',
          name: 'July Moe',
          photoUrl: '/assets/aistudio/file_00000000ced08211860ef0e8c4f007d8_a0f82840.png',
          recognitionNote: 'Top Performer of the Month — September 2025 (Alliance Channel)',
        },
        bancassurance: {
          channel: 'Bancassurance Channel',
          name: 'Sat Naing Htun',
          photoUrl: '/assets/aistudio/file_000000003e7082119e98c99ea13ff520_8dfd6fd7.png',
          recognitionNote: 'Top Performer of the Month — September 2025 (Bancassurance Channel)',
        },
        corporate: {
          channel: 'Corporate Channel',
          name: 'Sai Win Thu',
          photoUrl: '/assets/aistudio/file_00000000d9548207b797bdc3604e12c8_d4352730.png',
          recognitionNote: 'Top Performer of the Month — September 2025 (Corporate Direct Sales Channel)',
        },
      },
    };
  }

  // Month 10 (October) Top Performers
  if (idx === 9) {
    return {
      monthIndex,
      monthName,
      quarter,
      setIndex,
      performers: {
        alliance: {
          channel: 'Alliance Channel',
          name: 'Zin Naing Htun',
          photoUrl: '/assets/aistudio/aifaceswap-d42f5df74846f1ccf67cee0a6bd0f132_c2a92958.jpg',
          recognitionNote: 'Top Performer of the Month — October 2025 (Alliance Channel)',
        },
        bancassurance: {
          channel: 'Bancassurance Channel',
          name: 'Thu Kha',
          photoUrl: '/assets/aistudio/aifaceswap-a24b639f50bff103c50d409b894cd559__1__5f37f9b3.jpg',
          recognitionNote: 'Top Performer of the Month — October 2025 (Bancassurance Channel)',
        },
        corporate: {
          channel: 'Corporate Channel',
          name: 'Kyaw Zin Than',
          photoUrl: '/assets/aistudio/aifaceswap-a33e11fd845940782a5ed20119b5fa50__2__cb7a3bb8.jpg',
          recognitionNote: 'Top Performer of the Month — October 2025 (Corporate Direct Sales Channel)',
        },
      },
    };
  }

  // Month 11 (November) Top Performers
  if (idx === 10) {
    return {
      monthIndex,
      monthName,
      quarter,
      setIndex,
      performers: {
        alliance: {
          channel: 'Alliance Channel',
          name: 'Zin Mar Wai',
          photoUrl: '/assets/aistudio/file_000000000cb0821184775f7d6aadd196_93ad2ed3.png',
          recognitionNote: 'Top Performer of the Month — November 2025 (Alliance Channel)',
        },
        bancassurance: {
          channel: 'Bancassurance Channel',
          name: undefined,
          photoUrl: null,
          recognitionNote: undefined,
        },
        corporate: {
          channel: 'Corporate Channel',
          name: 'Sai Win Thu',
          photoUrl: '/assets/aistudio/file_00000000a17c8211aae3bd3fa8ee02f4_a46c2e40.png',
          recognitionNote: 'Top Performer of the Month — November 2025 (Corporate Direct Sales Channel)',
        },
      },
    };
  }

  // Future / Pending months: blank info and silhouette question-mark placeholder per prompt section 5
  return {
    monthIndex,
    monthName,
    quarter,
    setIndex,
    performers: {
      alliance: {
        channel: 'Alliance Channel',
        name: undefined,
        photoUrl: null,
        recognitionNote: undefined,
      },
      bancassurance: {
        channel: 'Bancassurance Channel',
        name: undefined,
        photoUrl: null,
        recognitionNote: undefined,
      },
      corporate: {
        channel: 'Corporate Channel',
        name: undefined,
        photoUrl: null,
        recognitionNote: undefined,
      },
    },
  };
});
