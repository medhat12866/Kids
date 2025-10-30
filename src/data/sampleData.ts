// Sample data for the kids educational platform

export const videos = [
  {
    id: 1,
    title: "تعلم الصدق مع ياسر",
    titleEn: "Learn Honesty with Yasser",
    thumbnail: "https://images.unsplash.com/photo-1565373086464-c8af0d586c0c?w=400",
    duration: "12 دقيقة",
    ageRange: "6-8 سنوات",
    topic: "القيم",
    description: "قصة تعليمية عن أهمية الصدق في حياتنا اليومية",
    watched: false,
    favorite: false
  },
  {
    id: 2,
    title: "مغامرات الحروف الأبجدية",
    titleEn: "Alphabet Adventures",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
    duration: "15 دقيقة",
    ageRange: "6-7 سنوات",
    topic: "اللغة",
    description: "تعلم الحروف العربية بطريقة ممتعة وتفاعلية",
    watched: true,
    favorite: true
  },
  {
    id: 3,
    title: "قصة النبي يوسف",
    titleEn: "Prophet Yusuf's Story",
    thumbnail: "https://images.unsplash.com/photo-1684859634430-3fb8d390e119?w=400",
    duration: "20 دقيقة",
    ageRange: "8-10 سنوات",
    topic: "القصص الدينية",
    description: "قصة ملهمة عن الصبر والأمل",
    watched: false,
    favorite: false
  },
  {
    id: 4,
    title: "عالم الأرقام السحري",
    titleEn: "Magical Numbers World",
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400",
    duration: "10 دقائق",
    ageRange: "6-7 سنوات",
    topic: "الرياضيات",
    description: "تعلم الأرقام والعد بطريقة مرحة",
    watched: false,
    favorite: false
  },
  {
    id: 5,
    title: "كوكبنا الجميل",
    titleEn: "Our Beautiful Planet",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
    duration: "18 دقيقة",
    ageRange: "8-10 سنوات",
    topic: "العلوم",
    description: "رحلة ممتعة لاكتشاف كوكب الأرض",
    watched: false,
    favorite: true
  },
  {
    id: 6,
    title: "حديقة الحيوانات",
    titleEn: "Zoo Adventure",
    thumbnail: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400",
    duration: "14 دقيقة",
    ageRange: "6-8 سنوات",
    topic: "الحيوانات",
    description: "تعرف على أصدقائنا من الحيوانات",
    watched: true,
    favorite: false
  }
];

export const stories = [
  {
    id: 1,
    title: "الأرنب الشجاع",
    titleEn: "The Brave Rabbit",
    cover: "https://images.unsplash.com/photo-1757361414781-dfa67c106aa6?w=400",
    narrator: "أحمد السعيد",
    duration: "8 دقائق",
    ageRange: "6-8 سنوات",
    description: "قصة جميلة عن الشجاعة والثقة بالنفس",
    favorite: true
  },
  {
    id: 2,
    title: "الأسد الطيب والفأر",
    titleEn: "Kind Lion and the Mouse",
    cover: "https://images.unsplash.com/photo-1684859634430-3fb8d390e119?w=400",
    narrator: "فاطمة محمد",
    duration: "10 دقائق",
    ageRange: "6-9 سنوات",
    description: "قصة عن اللطف ومساعدة الآخرين",
    favorite: false
  },
  {
    id: 3,
    title: "النملة النشيطة",
    titleEn: "The Hardworking Ant",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    narrator: "خالد عمر",
    duration: "7 دقائق",
    ageRange: "6-8 سنوات",
    description: "تعلم قيمة العمل الجاد والمثابرة",
    favorite: true
  }
];

export const games = [
  {
    id: 1,
    title: "مهمة الرياضيات",
    titleEn: "Math Quest",
    icon: "calculator",
    difficulty: "سهل",
    xpReward: 50,
    progress: 75,
    color: "from-[#4ECAFF] to-[#5FD08A]",
    category: "رياضيات"
  },
  {
    id: 2,
    title: "مطابقة الكلمات",
    titleEn: "Word Match",
    icon: "book",
    difficulty: "متوسط",
    xpReward: 75,
    progress: 40,
    color: "from-[#9C6FFF] to-[#B991FF]",
    category: "لغة"
  },
  {
    id: 3,
    title: "خلط الألوان",
    titleEn: "Color Mix",
    icon: "palette",
    difficulty: "سهل",
    xpReward: 30,
    progress: 100,
    color: "from-[#FFB84D] to-[#FF8B67]",
    category: "فنون"
  },
  {
    id: 4,
    title: "لعبة الذاكرة",
    titleEn: "Memory Game",
    icon: "brain",
    difficulty: "متوسط",
    xpReward: 60,
    progress: 20,
    color: "from-[#FF6B9D] to-[#FF8B67]",
    category: "ذاكرة"
  }
];

export const activities = [
  {
    id: 1,
    title: "ارسم منزل أحلامك",
    titleEn: "Draw your dream house",
    difficulty: "سهل",
    category: "رسم",
    thumbnail: "https://images.unsplash.com/photo-1579594124477-1bdbb77ab939?w=400",
    steps: 5,
    printable: true
  },
  {
    id: 2,
    title: "تجربة قوس قزح",
    titleEn: "Make a rainbow experiment",
    difficulty: "متوسط",
    category: "علوم",
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400",
    steps: 7,
    printable: true
  },
  {
    id: 3,
    title: "صنع بطاقة معايدة",
    titleEn: "Create a greeting card",
    difficulty: "سهل",
    category: "حرف يدوية",
    thumbnail: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400",
    steps: 4,
    printable: true
  }
];

export const badges = [
  { id: 1, name: "قارئ ماهر", icon: "book", unlocked: true, color: "#9C6FFF" },
  { id: 2, name: "عالم رياضيات", icon: "calculator", unlocked: true, color: "#4ECAFF" },
  { id: 3, name: "مبدع فني", icon: "palette", unlocked: false, color: "#FFB84D" },
  { id: 4, name: "مستكشف", icon: "compass", unlocked: false, color: "#5FD08A" }
];

export const childProfile = {
  name: "سارة",
  nameEn: "Sarah",
  avatar: "https://images.unsplash.com/photo-1744574005416-d558b1e44380?w=200",
  level: 7,
  xp: 2450,
  nextLevelXp: 3000,
  badges: badges.filter(b => b.unlocked),
  weeklyScreenTime: 180, // minutes
  totalWatchedVideos: 24,
  favoriteCategory: "القصص"
};

export const parentDashboardData = {
  weeklyActivity: [
    { day: "السبت", minutes: 25 },
    { day: "الأحد", minutes: 30 },
    { day: "الاثنين", minutes: 20 },
    { day: "الثلاثاء", minutes: 35 },
    { day: "الأربعاء", minutes: 28 },
    { day: "الخميس", minutes: 22 },
    { day: "الجمعة", minutes: 20 }
  ],
  topCategories: [
    { name: "القصص", percentage: 40, color: "#9C6FFF" },
    { name: "الفيديوهات", percentage: 30, color: "#FF6B9D" },
    { name: "الألعاب", percentage: 20, color: "#4ECAFF" },
    { name: "الأنشطة", percentage: 10, color: "#FFB84D" }
  ],
  achievements: {
    videosWatched: 24,
    storiesRead: 15,
    gamesCompleted: 8,
    activitiesDone: 5
  }
};
