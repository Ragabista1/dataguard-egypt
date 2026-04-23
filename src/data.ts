export type DeviceType = 'Mobile' | 'Smart TV' | 'Computer' | 'Gaming Console';
export type OSType = 'Android' | 'iOS' | null;
export type ConsoleType = 'PlayStation 4 & 5' | 'Xbox' | null;
export type Language = 'en' | 'ar';

export type CategoryType = 'Video Streaming' | 'Music Streaming' | 'Social Media' | 'Gaming' | 'Browsing / General Usage';

export interface Translation {
  title: string;
  desc: string;
  status?: string;
}

export interface AppConfig {
  id: string;
  name: Record<Language, string>;
  category: CategoryType;
  categoryNames: Record<Language, string>;
  domain?: string;
  icon?: string;
}

export interface OptimizationDetails {
  consumption: {
    level: Record<Language, string>;
    description: Record<Language, string>;
  };
  whyItConsumes: Record<Language, string[]>;
  steps: {
    deviceType: DeviceType;
    osType?: OSType;
    consoleType?: ConsoleType;
    instructions: Record<Language, string[]>;
  }[];
  smartTips: Record<Language, string[]>;
  proTip: Record<Language, string>;
}

export const APPS: AppConfig[] = [
  // Video
  { id: 'youtube', name: { en: 'YouTube', ar: 'يوتيوب' }, domain: 'youtube.com', category: 'Video Streaming', categoryNames: { en: 'Video Streaming', ar: 'بث الفيديو' } },
  { id: 'netflix', name: { en: 'Netflix', ar: 'نتفليكس' }, domain: 'netflix.com', category: 'Video Streaming', categoryNames: { en: 'Video Streaming', ar: 'بث الفيديو' } },
  { id: 'shahid', name: { en: 'Shahid', ar: 'شاهد' }, domain: 'shahid.mbc.net', category: 'Video Streaming', categoryNames: { en: 'Video Streaming', ar: 'بث الفيديو' } },
  { id: 'watch-it', name: { en: 'WATCH IT', ar: 'واتش إت' }, domain: 'watchit.com', category: 'Video Streaming', categoryNames: { en: 'Video Streaming', ar: 'بث الفيديو' } },
  { id: 'disney-plus', name: { en: 'Disney+', ar: 'ديزني+' }, domain: 'disneyplus.com', category: 'Video Streaming', categoryNames: { en: 'Video Streaming', ar: 'بث الفيديو' } },
  { id: 'prime-video', name: { en: 'Amazon Prime Video', ar: 'أمازون برايم' }, domain: 'primevideo.com', category: 'Video Streaming', categoryNames: { en: 'Video Streaming', ar: 'بث الفيديو' } },
  { id: 'coursera', name: { en: 'Coursera', ar: 'كورسيرا' }, domain: 'coursera.org', category: 'Video Streaming', categoryNames: { en: 'Video Streaming', ar: 'بث الفيديو' } },
  { id: 'udemy', name: { en: 'Udemy', ar: 'يوديمي' }, domain: 'udemy.com', category: 'Video Streaming', categoryNames: { en: 'Video Streaming', ar: 'بث الفيديو' } },
  { id: 'edx', name: { en: 'edX', ar: 'إيدكس' }, domain: 'edx.org', category: 'Video Streaming', categoryNames: { en: 'Video Streaming', ar: 'بث الفيديو' } },
  { id: 'yango-play', name: { en: 'Yango Play', ar: 'يانجو بلاي' }, domain: 'yango.com', category: 'Video Streaming', categoryNames: { en: 'Video Streaming', ar: 'بث الفيديو' } },
  { id: 'tod', name: { en: 'TOD', ar: 'تود' }, domain: 'tod.tv', category: 'Video Streaming', categoryNames: { en: 'Video Streaming', ar: 'بث الفيديو' } },
  
  // Music
  { id: 'spotify', name: { en: 'Spotify', ar: 'سبوتيفاي' }, domain: 'spotify.com', category: 'Music Streaming', categoryNames: { en: 'Music Streaming', ar: 'بث الموسيقى' } },
  { id: 'anghami', name: { en: 'Anghami', ar: 'أنغامي' }, domain: 'anghami.com', category: 'Music Streaming', categoryNames: { en: 'Music Streaming', ar: 'بث الموسيقى' } },
  { id: 'youtube-music', name: { en: 'YouTube Music', ar: 'يوتيوب ميوزك' }, domain: 'music.youtube.com', category: 'Music Streaming', categoryNames: { en: 'Music Streaming', ar: 'بث الموسيقى' } },
  
  // Social
  { id: 'facebook', name: { en: 'Facebook', ar: 'فيسبوك' }, domain: 'facebook.com', category: 'Social Media', categoryNames: { en: 'Social Media', ar: 'وسائل التواصل' } },
  { id: 'instagram', name: { en: 'Instagram', ar: 'إنستجرام' }, domain: 'instagram.com', category: 'Social Media', categoryNames: { en: 'Social Media', ar: 'وسائل التواصل' } },
  { id: 'tiktok', name: { en: 'TikTok', ar: 'تيك توك' }, domain: 'tiktok.com', category: 'Social Media', categoryNames: { en: 'Social Media', ar: 'وسائل التواصل' } },
  { id: 'snapchat', name: { en: 'Snapchat', ar: 'سناب شات' }, domain: 'snapchat.com', category: 'Social Media', categoryNames: { en: 'Social Media', ar: 'وسائل التواصل' } },
  
  // Gaming
  { id: 'pubg', name: { en: 'PUBG Mobile', ar: 'ببجي موبايل' }, domain: 'pubg.com', category: 'Gaming', categoryNames: { en: 'Gaming', ar: 'الألعاب' } },
  { id: 'cod-mobile', name: { en: 'Call of Duty Mobile', ar: 'كول اوف ديوتي' }, domain: 'callofduty.com', category: 'Gaming', categoryNames: { en: 'Gaming', ar: 'الألعاب' } },
  { id: 'fortnite', name: { en: 'Fortnite', ar: 'فورتنايت' }, domain: 'fortnite.com', category: 'Gaming', categoryNames: { en: 'Gaming', ar: 'الألعاب' } },
  
  // Browsing
  { id: 'chrome', name: { en: 'Chrome', ar: 'كروم' }, domain: 'google.com', category: 'Browsing / General Usage', categoryNames: { en: 'Browsing', ar: 'التصفح' } },
  { id: 'safari', name: { en: 'Safari', ar: 'سفاري' }, domain: 'apple.com', category: 'Browsing / General Usage', categoryNames: { en: 'Browsing', ar: 'التصفح' } },
  { id: 'edge', name: { en: 'Edge', ar: 'إيدج' }, domain: 'microsoft.com', category: 'Browsing / General Usage', categoryNames: { en: 'Browsing', ar: 'التصفح' } },
  { id: 'system-data-saver', name: { en: 'System Data Saver', ar: 'موفر بيانات النظام' }, category: 'Browsing / General Usage', categoryNames: { en: 'Browsing', ar: 'التصفح' } },
];

export const OPTIMIZATIONS: Record<string, OptimizationDetails> = {
  youtube: {
    consumption: {
      level: { en: 'Very High', ar: 'عالي جداً' },
      description: { 
        en: 'Streaming in 4K can consume up to 15 GB per hour. HD (1080p) uses ~3 GB/hr.',
        ar: 'البث بجودة 4K يستهلك حتى 15 جيجابايت في الساعة. جودة HD تستهلك حوالي 3 جيجابايت.'
      },
    },
    whyItConsumes: {
      en: ['Autoplay videos', 'High-definition default quality', 'Background play'],
      ar: ['التشغيل التلقائي', 'الجودة العالية الافتراضية', 'التشغيل في الخلفية']
    },
    steps: [
      {
        deviceType: 'Mobile',
        osType: 'Android',
        instructions: {
          en: [
            'Open YouTube App',
            'Settings → General → Playback in feeds → Off',
            'Settings → Video quality preferences → Data saver (on mobile networks)',
          ],
          ar: [
            'افتح تطبيق يوتيوب',
            'الإعدادات ← إعدادات عامة ← التشغيل في الخلاصات ← متوقف',
            'الإعدادات ← تفضيلات جودة الفيديو ← توفير البيانات',
          ]
        },
      },
      {
        deviceType: 'Mobile',
        osType: 'iOS',
        instructions: {
          en: [
            'Open App → Tap Profile',
            'Settings → Video Quality Preferences',
            'Set Cellular and Wi-Fi to "Data Saver"',
          ],
          ar: [
            'افتح التطبيق ← اضغط على ملفك الشخصي',
            'الإعدادات ← تفضيلات جودة الفيديو',
            'اختر "موفّر البيانات" للبيانات والواي فاي',
          ]
        },
      },
      {
        deviceType: 'Gaming Console',
        consoleType: 'PlayStation 4 & 5',
        instructions: {
          en: [
            'Press Down while playing → Settings',
            'Quality → Select 720p',
            'Turn off Video Previews in Home Screen',
          ],
          ar: [
            'اضغط لأسفل أثناء التشغيل ← الإعدادات',
            'الجودة ← اختر 720p',
            'أوقف معاينة الفيديو في الشاشة الرئيسية',
          ]
        }
      },
      {
        deviceType: 'Gaming Console',
        consoleType: 'Xbox',
        instructions: {
          en: [
            'Settings gear in-app → Quality',
            'Set to 720p maximum',
            'Xbox Dashboard Settings → General → Network Settings → Data Usage → Set Limit',
          ],
          ar: [
            'ترس الإعدادات داخل التطبيق ← الجودة',
            'اختر 720p كحد أقصى',
            'إعدادات الإكس بوكس ← عام ← إعدادات الشبكة ← استهلاك البيانات ← وضع حد',
          ]
        }
      },
      {
        deviceType: 'Smart TV',
        instructions: {
          en: [
            'Select video → Gear icon',
            'Quality → Select 480p or 720p',
          ],
          ar: [
            'اختر الفيديو ← أيقونة الترس',
            'الجودة ← اختر 480p أو 720p',
          ]
        },
      },
      {
        deviceType: 'Computer',
        instructions: {
          en: [
            'Click Settings (Gear) on video player',
            'Select Quality → 480p',
          ],
          ar: [
            'اضغط على الإعدادات (الترس) في مشغل الفيديو',
            'اختر الجودة ← 480p',
          ]
        },
      },
    ],
    smartTips: {
      en: ['Turn off Autoplay', 'Download on WiFi'],
      ar: ['أوقف التشغيل التلقائي', 'حمل الفيديوهات عبر الواي فاي فقط']
    },
    proTip: {
      en: 'Watching 2 hours in HD daily uses 180GB/month!',
      ar: 'مشاهدة ساعتين يومياً بجودة HD تستهلك 180 جيجابايت شهرياً!'
    },
  },
  shahid: {
    consumption: {
      level: { en: 'High', ar: 'عالي' },
      description: { 
        en: 'Estimated ~2-3 GB per hour in HD quality.',
        ar: 'يستهلك حوالي 2-3 جيجابايت في الساعة بجودة HD.'
      },
    },
    whyItConsumes: {
      en: ['High resolution standards', 'Content pre-loading'],
      ar: ['معايير دقة عالية', 'التحميل المسبق للمحتوى']
    },
    steps: [
      {
        deviceType: 'Mobile',
        osType: 'Android',
        instructions: {
          en: ['Settings → Video Quality → Low/Data Saver'],
          ar: ['الإعدادات ← جودة الفيديو ← توفير البيانات']
        },
      },
      {
        deviceType: 'Mobile',
        osType: 'iOS',
        instructions: {
          en: ['Settings → Download Quality → Standard'],
          ar: ['الإعدادات ← جودة التحميل ← قياسية']
        },
      },
      {
        deviceType: 'Smart TV',
        instructions: {
          en: ['App Settings → Playback → Data Saver'],
          ar: ['إعدادات التطبيق ← التشغيل ← موفر البيانات']
        },
      },
    ],
    smartTips: {
      en: ['Disable background refresh'],
      ar: ['أوقف التحديث في الخلفية']
    },
    proTip: {
      en: 'Standard quality is perfect for mobile screens and saves 70% data.',
      ar: 'الجودة العادية مثالية لشاشات الموبايل وتوفر 70% من البيانات.'
    },
  },
  coursera: {
    consumption: {
      level: { en: 'Medium', ar: 'متوسط' },
      description: { en: '~500MB - 1GB per hour of lecture.', ar: 'حوالي 500 ميجابايت إلى 1 جيجابايت في الساعة.' },
    },
    whyItConsumes: {
      en: ['HD lecture videos', 'Auto-play quizzes', 'Course asset pre-loading'],
      ar: ['محاضرات فيديو عالية الدقة', 'تشغيل الاختبارات تلقائياً', 'تحميل مسبق لملفات الكورس']
    },
    steps: [
      {
        deviceType: 'Mobile',
        instructions: {
          en: ['Settings → Video Quality → 360p', 'Turn on "Download only on WiFi"'],
          ar: ['الإعدادات ← جودة الفيديو ← 360p', 'تفعيل "التحميل عبر الواي فاي فقط"']
        },
      },
      {
        deviceType: 'Computer',
        instructions: {
          en: ['Click Gear icon on player → Quality → Low/360p'],
          ar: ['اضغط على الترس في المشغل ← الجودة ← منخفضة/360p']
        },
      },
    ],
    smartTips: {
      en: ['Download entire modules on WiFi', 'Listen to audio-only if visuals are not needed'],
      ar: ['حمل الوحدات كاملة عبر الواي فاي', 'استمع للصوت فقط إذا لم تكن بحاجة للصورة']
    },
    proTip: {
      en: 'Downloading lessons on WiFi saves 100% of your mobile data quota.',
      ar: 'تحميل الدروس عبر الواي فاي يوفر 100% من باقة الموبايل.'
    },
  },
  udemy: {
    consumption: {
      level: { en: 'Medium', ar: 'متوسط' },
      description: { en: 'Lectures average ~600MB/hr in standard HD.', ar: 'المحاضرات تستهلك حوالي 600 ميجابايت في الساعة.' },
    },
    whyItConsumes: {
      en: ['High resolution lectures', 'Automatic video quality switching'],
      ar: ['محاضرات عالية الدقة', 'تبديل جودة الفيديو تلقائياً']
    },
    steps: [
      {
        deviceType: 'Mobile',
        instructions: {
          en: ['Account → Video Preferences → Download Quality → 360p', 'Streaming Quality → set to 360p'],
          ar: ['الحساب ← تفضيلات الفيديو ← جودة التحميل ← 360p', 'جودة البث ← اختر 360p']
        },
      },
    ],
    smartTips: {
      en: ['Clear course cache regularly'],
      ar: ['امسح ذاكرة التخزين المؤقت بانتظام']
    },
    proTip: {
      en: 'Standard definition (360p) is clear enough for most coding tutorials.',
      ar: 'دقة 360p كافية جداً لمعظم دروس البرمجة والشرح.'
    },
  },
  edx: {
    consumption: {
      level: { en: 'Medium', ar: 'متوسط' },
      description: { en: 'Lecture streaming uses ~400-800MB/hr.', ar: 'بث المحاضرات يستهلك حوالي 400-800 ميجابايت في الساعة.' },
    },
    whyItConsumes: {
      en: ['Integrated video tools', 'Transcript auto-scrolling'],
      ar: ['أدوات فيديو مدمجة', 'التمرير التلقائي للنصوص']
    },
    steps: [
      {
        deviceType: 'Mobile',
        instructions: {
          en: ['Settings → Video Quality → Standard', 'Data Saver → Enabled'],
          ar: ['الإعدادات ← جودة الفيديو ← عادية', 'توفير البيانات ← تفعيل']
        },
      },
    ],
    smartTips: {
      en: ['Prioritize downloads over streaming'],
      ar: ['اجعل الأولوية للتحميل بدلاً من البث المباشر']
    },
    proTip: {
      en: 'Course transcripts are lightweight; read them first while offline.',
      ar: 'نصوص المحاضرات خفيفة جداً، اقرأها أولاً بدون إنترنت.'
    },
  },
  'yango-play': {
    consumption: {
      level: { en: 'High', ar: 'عالي' },
      description: { en: 'Modern streaming engine uses ~1.5 - 3GB/hr.', ar: 'محرك البث الحديث يستهلك حوالي 1.5 - 3 جيجابايت في الساعة.' },
    },
    whyItConsumes: {
      en: ['Super-HD quality defaults', 'Rich UI animations with video previews'],
      ar: ['جودة فائقة الدقة افتراضياً', 'واجهة غنية بالرسوم المتحركة ومعاينات الفيديو']
    },
    steps: [
      {
        deviceType: 'Mobile',
        instructions: {
          en: ['Profile → Settings → Data Usage → Low/Medium', 'Disable Video Previews'],
          ar: ['الملف الشخصي ← الإعدادات ← استهلاك البيانات ← منخفض/متوسط', 'إيقاف معاينة الفيديو']
        },
      },
      {
        deviceType: 'Smart TV',
        instructions: {
          en: ['App Settings → Video Playback → Data Saver'],
          ar: ['إعدادات التطبيق ← تشغيل الفيديو ← موفر البيانات']
        },
      },
    ],
    smartTips: {
      en: ['Turn off background refresh'],
      ar: ['أوقف التحديث في الخلفية']
    },
    proTip: {
      en: 'Using "Low" quality on Yango Play reduces data by almost 60%.',
      ar: 'استخدام الجودة "المنخفضة" في يانجو بلاي يقلل الاستهلاك بنسبة 60%.'
    },
  },
  tod: {
    consumption: {
      level: { en: 'Very High', ar: 'عالي جداً' },
      description: { en: 'Live sports matches can hit 3GB+ per hour in HD.', ar: 'مباريات الرياضة المباشرة قد تتجاوز 3 جيجابايت في الساعة.' },
    },
    whyItConsumes: {
      en: ['High frame rate for sports (50/60fps)', 'Stable high-bitrate streaming'],
      ar: ['معدل إطارات عالٍ للرياضة (50/60 إطار)', 'بث ثابت بمعدل نقل بيانات مرتفع']
    },
    steps: [
      {
        deviceType: 'Mobile',
        instructions: {
          en: ['Tap Gear during match → Quality → 480p or 720p', 'Account Settings → Data Saver'],
          ar: ['اضغط على الترس أثناء المباراة ← الجودة ← 480p أو 720p', 'إعدادات الحساب ← موفر البيانات']
        },
      },
      {
        deviceType: 'Smart TV',
        instructions: {
          en: ['Player Controls → Settings → Resolution → 720p (Max for saving)'],
          ar: ['عناصر التحكم ← الإعدادات ← الدقة ← 720p (الحد الأقصى للتوفير)']
        },
      },
    ],
    smartTips: {
      en: ['Avoid 4K/UHD specifically for live events unless on Fiber WiFi'],
      ar: ['تجنب جودة 4K في الأحداث المباشرة إلا عند استخدام واي فاي سريع']
    },
    proTip: {
      en: '720p is the sweet spot for sports: clear movement with half the data of 1080p.',
      ar: '720p هي الجودة الأفضل للرياضة: حركة واضحة مع نصف استهلاك بيانات 1080p.'
    },
  },
  'system-data-saver': {
    consumption: {
      level: { en: 'Global', ar: 'شامل' },
      description: { en: 'Affects all apps by limiting background data usage.', ar: 'يؤثر على جميع التطبيقات من خلال تقييد استخدام البيانات في الخلفية.' },
    },
    whyItConsumes: {
      en: ['Background app syncing', 'Automatic software updates', 'Cloud backups (Photos/Docs)'],
      ar: ['مزامنة التطبيقات في الخلفية', 'تحديثات البرامج التلقائية', 'النسخ الاحتياطي السحابي']
    },
    steps: [
      {
        deviceType: 'Mobile',
        osType: 'Android',
        instructions: {
          en: [
            'Open Settings → Network & Internet',
            'Data Saver → Turn ON',
            'Select "Unrestricted data" to choose apps that can still use data in background',
          ],
          ar: [
            'افتح الإعدادات ← الشبكة والإنترنت',
            'موفر البيانات ← تفعيل',
            'اختر "بيانات غير مقيدة" لاختيار تطبيقات تعمل في الخلفية'
          ]
        },
      },
      {
        deviceType: 'Mobile',
        osType: 'iOS',
        instructions: {
          en: [
            'Open Settings → Cellular → Cellular Data Options',
            'Turn ON "Low Data Mode"',
            'Settings → General → Background App Refresh → OFF',
          ],
          ar: [
            'افتح الإعدادات ← خلوي ← خيارات البيانات الخلوية',
            'تفعيل "نمط البيانات المنخفضة"',
            'الإعدادات ← عام ← تحديث التطبيقات في الخلفية ← إيقاف'
          ]
        },
      },
      {
        deviceType: 'Computer',
        instructions: {
          en: [
            'Windows: Settings → Network & Internet → Wi-Fi → Current Network → Set as metered connection',
            'Mac: System Settings → Wi-Fi → Details of your network → Turn on Low Data Mode'
          ],
          ar: [
            'ويندوز: الإعدادات ← الشبكة ← واي فاي ← الشبكة الحالية ← تعيين فاتورة استهلاك',
            'ماك: إعدادات النظام ← واي فاي ← تفاصيل الشبكة ← تفعيل نمط البيانات المنخفضة'
          ]
        },
      },
    ],
    smartTips: {
      en: ['Disable Auto-Update on App Store/Play Store', 'Schedule backups for WiFi only'],
      ar: ['أوقف التحديث التلقائي للمتجر', 'اجعل النسخ الاحتياطي عبر الواي فاي فقط']
    },
    proTip: {
      en: 'System Data Saver can reduce overall monthly usage by 20% by stopping invisible hidden syncs.',
      ar: 'موفر بيانات النظام يقلل الاستهلاك الشهري بنسبة 20% بإيقاف المزامنة الخفية.'
    },
  }
};

export const getOptimization = (appId: string): OptimizationDetails => {
  return OPTIMIZATIONS[appId] || OPTIMIZATIONS['youtube']; 
};
