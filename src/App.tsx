/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Tv, 
  Monitor, 
  ChevronRight, 
  ChevronLeft, 
  Info, 
  Zap, 
  Settings, 
  Lightbulb, 
  TrendingDown,
  Music,
  Video,
  Share2,
  Gamepad2,
  Globe,
  Database,
  Languages,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check
} from 'lucide-react';
import { 
  DeviceType, 
  OSType,
  ConsoleType,
  Language,
  CategoryType, 
  AppConfig, 
  APPS, 
  getOptimization 
} from './data.ts';

export default function App() {
  const [step, setStep] = useState(0);
  const [language, setLanguage] = useState<Language>('en');
  const [selectedDevice, setSelectedDevice] = useState<DeviceType | null>(null);
  const [selectedOS, setSelectedOS] = useState<OSType>(null);
  const [selectedConsole, setSelectedConsole] = useState<ConsoleType>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [selectedApp, setSelectedApp] = useState<AppConfig | null>(null);
  const [copied, setCopied] = useState(false);

  // Translations for UI
  const t = {
    en: {
      brand: 'DataWise',
      region: 'EG',
      chooseDevice: 'Choose Device',
      appCategory: 'App Category',
      targetApp: 'Target App',
      optPath: 'Optimization Path',
      marketFavs: 'Egyptian Market Favorites',
      newAnalysis: 'New Analysis',
      chooseOS: 'Select Mobile OS',
      chooseConsole: 'Select Gaming Console',
      android: 'Android',
      ios: 'Apple / iOS',
      playstation: 'PlayStation 4 & 5',
      xbox: 'Xbox Series / One',
      reduceLoad: 'Reduce your load.',
      selectHardware: 'Select your hardware.',
      deviceDesc: 'Guide your internet optimization journey by picking your primary device.',
      activityTitle: 'What\'s your primary activity?',
      stage02: 'Stage 02',
      finalHub: 'Final Hub',
      pickApp: 'Pick the target application',
      optimization: 'Optimization',
      detailedGuide: 'Detailed guide for users in Egypt and MENA.',
      usage: 'Usage',
      estConsumption: 'Est. Consumption',
      optimizedGoal: 'Optimized Goal',
      standardSettings: 'Standard Settings',
      usingDataSaver: 'Using Data Saver',
      stepByStep: 'Step-by-Step Instructions',
      whyDrains: 'Why it drains data',
      smartTips: 'Smart Expert Tips',
      behavioralInsight: 'Behavioral Insight',
      potentialSavings: 'Potential Savings',
      reductionAchievable: 'Reduction achievable',
      localizedGuidance: 'Localized Guidance',
      localizedDesc: 'Optimized for WE, Orange, Etisalat, and Vodafone Egypt data quotas.',
      startNew: 'Start New Optimization',
      copySteps: 'Copy Steps',
      copied: 'Copied!',
      back: 'Back',
      mobile: 'Mobile',
      console: 'Gaming Console',
      tv: 'Smart TV',
      computer: 'Computer',
    },
    ar: {
      brand: 'DataWise',
      region: 'مصر',
      chooseDevice: 'اختر الجهاز',
      appCategory: 'فئة التطبيق',
      targetApp: 'التطبيق المستهدف',
      optPath: 'مسار التحسين',
      marketFavs: 'مفضلات السوق المصري',
      newAnalysis: 'تحليل جديد',
      chooseOS: 'اختر نظام التشغيل',
      chooseConsole: 'اختر جهاز الألعاب',
      android: 'أندرويد',
      ios: 'آيفون / iOS',
      playstation: 'بلاي ستيشن 4 و 5',
      xbox: 'إكس بوكس',
      reduceLoad: 'قلل استهلاكك.',
      selectHardware: 'اختر جهازك.',
      deviceDesc: 'ابدأ رحلة توفير البيانات باختيار الجهاز الذي تستخدمه بشكل أساسي.',
      activityTitle: 'ما هو نشاطك الأساسي؟',
      stage02: 'المرحلة 02',
      finalHub: 'المحطة الأخيرة',
      pickApp: 'اختر التطبيق المطلوب',
      optimization: 'تحسين',
      detailedGuide: 'دليل مفصل للمستخدمين في مصر والشرق الأوسط.',
      usage: 'الاستهلاك',
      estConsumption: 'الاستهلاك المتوقع',
      optimizedGoal: 'الهدف بعد التحسين',
      standardSettings: 'الإعدادات العادية',
      usingDataSaver: 'مع موفر البيانات',
      stepByStep: 'تعليمات خطوة بخطوة',
      whyDrains: 'لماذا يستهلك الكثير؟',
      smartTips: 'نصائح الخبراء الذكية',
      behavioralInsight: 'رؤية سلوكية',
      potentialSavings: 'التوفير المحتمل',
      reductionAchievable: 'نسبة التوفير الممكنة',
      localizedGuidance: 'إرشادات محلية',
      localizedDesc: 'مُحسن لشبكات وي، أورنج، اتصالات، وفودافون مصر.',
      startNew: 'ابدأ تحسين جديد',
      copySteps: 'نسخ الخطوات',
      copied: 'تم النسخ!',
      back: 'رجوع',
      mobile: 'موبايل',
      console: 'جهاز ألعاب',
      tv: 'تلفزيون ذكي',
      computer: 'كمبيوتر',
    }
  };

  const ui = t[language];
  const isRTL = language === 'ar';

  const devices: { type: DeviceType; icon: any; desc: string; label: string }[] = [
    { type: 'Mobile', icon: Smartphone, desc: ui.android + ' / ' + ui.ios, label: ui.mobile },
    { type: 'Gaming Console', icon: Gamepad2, desc: 'PS4/5, Xbox', label: ui.console },
    { type: 'Smart TV', icon: Tv, desc: 'Smart Television', label: ui.tv },
    { type: 'Computer', icon: Monitor, desc: 'PC / Laptop', label: ui.computer },
  ];

  const categories: { name: CategoryType; icon: any; labels: Record<Language, string> }[] = [
    { name: 'Video Streaming', icon: Video, labels: { en: 'Video Streaming', ar: 'بث الفيديو' } },
    { name: 'Music Streaming', icon: Music, labels: { en: 'Music Streaming', ar: 'بث الموسيقى' } },
    { name: 'Social Media', icon: Share2, labels: { en: 'Social Media', ar: 'وسائل التواصل' } },
    { name: 'Gaming', icon: Gamepad2, labels: { en: 'Gaming', ar: 'الألعاب' } },
    { name: 'Browsing / General Usage', icon: Globe, labels: { en: 'Browsing / General', ar: 'التصفح والعامة' } },
  ];

  const handleDeviceSelect = (device: DeviceType) => {
    setSelectedDevice(device);
    if (device === 'Mobile') {
      setStep(0.5);
    } else if (device === 'Gaming Console') {
      setStep(0.7);
    } else {
      setSelectedOS(null);
      setSelectedConsole(null);
      setStep(1);
    }
  };

  const handleOSSelect = (os: OSType) => {
    setSelectedOS(os);
    setSelectedConsole(null);
    setStep(1);
  };

  const handleConsoleSelect = (console: ConsoleType) => {
    setSelectedConsole(console);
    setSelectedOS(null);
    setStep(1);
  };

  const handleCategorySelect = (category: CategoryType) => {
    setSelectedCategory(category);
    setStep(2);
  };

  const handleAppSelect = (app: AppConfig) => {
    setSelectedApp(app);
    setStep(3);
  };

  const reset = () => {
    setStep(0);
    setSelectedDevice(null);
    setSelectedOS(null);
    setSelectedConsole(null);
    setSelectedCategory(null);
    setSelectedApp(null);
  };

  const back = () => {
    if (step === 1 && selectedDevice === 'Mobile') {
      setStep(0.5);
    } else if (step === 1 && selectedDevice === 'Gaming Console') {
      setStep(0.7);
    } else if (step === 0.5 || step === 0.7) {
      setStep(0);
    } else {
      setStep((prev) => Math.floor(prev) === prev ? Math.max(0, prev - 1) : Math.floor(prev));
    }
  };

  const copyStepsToClipboard = () => {
    if (!selectedApp || !deviceSpecificSteps) return;
    
    const instructions = deviceSpecificSteps.instructions[language].map((step, i) => `${i + 1}. ${step}`).join('\n');
    const deviceTag = `${selectedDevice}${selectedOS ? ` (${selectedOS})` : ''}${selectedConsole ? ` (${selectedConsole})` : ''}`;
    const textToCopy = `DataWise ${ui.region}\n------------------\nApp: ${selectedApp.name[language]}\nDevice: ${deviceTag}\n\n${ui.stepByStep}:\n${instructions}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const filteredApps = APPS.filter(app => app.category === selectedCategory);
  const optimization = selectedApp ? getOptimization(selectedApp.id) : null;
  const deviceSpecificSteps = optimization?.steps.find(s => 
    s.deviceType === selectedDevice && 
    (selectedDevice !== 'Mobile' || s.osType === selectedOS) &&
    (selectedDevice !== 'Gaming Console' || (s as any).consoleType === selectedConsole)
  ) || optimization?.steps[0];

  return (
    <div className="min-h-screen bg-app-bg text-app-fg font-sans selection:bg-blue-900/30 transition-all duration-500" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Left Sidebar */}
        <aside className={`w-80 border-${isRTL ? 'l' : 'r'} border-app-border p-8 flex flex-col gap-10 bg-app-bg hidden lg:flex shrink-0 transition-all duration-500`}>
          <div className="flex items-center gap-3 cursor-pointer group" onClick={reset}>
            <div className="w-10 h-10 bg-app-accent rounded-xl flex items-center justify-center shadow-lg shadow-app-accent/20 group-hover:scale-105 transition-transform">
              <Database className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">{ui.brand} <span className="text-app-accent">{ui.region}</span></span>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-app-surface border border-app-border rounded-xl text-xs font-bold text-zinc-400 hover:text-white transition-all shadow-sm"
            >
              <Languages className="w-4 h-4" />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          <nav className="space-y-8 flex-1">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">{ui.optPath}</p>
              <ul className="space-y-6">
                <li className={`flex items-center gap-4 text-sm transition-all duration-300 ${step >= 0 ? 'text-white' : 'opacity-30'}`}>
                  <div className={`w-2 h-2 rounded-full ${selectedDevice ? 'bg-emerald-500' : step === 0 ? 'bg-app-accent' : 'bg-zinc-600'}`}></div>
                  <span className={step === 0 ? 'font-bold text-app-accent' : 'font-medium'}>
                    {selectedDevice ? (
                      selectedOS ? `${devices.find(d => d.type === selectedDevice)?.label} (${selectedOS})` : 
                      selectedConsole ? `${devices.find(d => d.type === selectedDevice)?.label} (${selectedConsole})` : 
                      devices.find(d => d.type === selectedDevice)?.label
                    ) : ui.chooseDevice}
                  </span>
                </li>
                <li className={`flex items-center gap-4 text-sm transition-all duration-300 ${step >= 1 ? 'text-white' : 'opacity-30'}`}>
                  <div className={`w-2 h-2 rounded-full ${selectedCategory ? 'bg-emerald-500' : step === 1 ? 'bg-app-accent' : 'bg-zinc-600'}`}></div>
                  <span className={step === 1 ? 'font-bold text-app-accent' : 'font-medium'}>
                    {selectedCategory ? (categories.find(c => c.name === selectedCategory)?.labels[language]) : ui.appCategory}
                  </span>
                </li>
                <li className={`flex items-center gap-4 text-sm transition-all duration-300 ${step >= 2 ? 'text-white' : 'opacity-30'}`}>
                  <div className={`w-2 h-2 rounded-full ${selectedApp ? 'bg-emerald-500' : step === 2 ? 'bg-app-accent' : 'bg-zinc-600'}`}></div>
                  <span className={step === 2 ? 'font-bold text-app-accent' : 'font-medium'}>{selectedApp?.name[language] || ui.targetApp}</span>
                </li>
              </ul>
            </div>

            {step === 3 && (
              <div className="pt-8 border-t border-app-border">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">{ui.marketFavs}</p>
                <div className="space-y-3">
                  {['Shahid VIP', 'WATCH IT', 'Anghami'].map(fav => (
                    <div key={fav} className="text-xs py-3 px-4 bg-app-surface border border-app-border rounded-xl text-zinc-300 font-medium italic">
                      {fav}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </nav>

          <div className="pt-6 border-t border-app-border">
            <button 
              onClick={reset}
              className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-xl transition-all font-semibold text-xs"
            >
              <TrendingDown className="w-4 h-4" />
              {ui.newAnalysis}
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-app-bg custom-scrollbar">
          {/* Mobile Header (Hidden on LG) */}
          <header className="lg:hidden p-6 border-b border-app-border flex justify-between items-center bg-app-bg/50 backdrop-blur-xl sticky top-0 z-50">
            <div className="flex items-center gap-2" onClick={reset}>
              <Database className="w-6 h-6 text-app-accent" />
              <span className="font-bold text-white tracking-tight">{ui.brand} {ui.region}</span>
            </div>
            <div className="flex gap-3">
              <button onClick={toggleLanguage} className="p-2 bg-app-surface rounded-lg text-zinc-400 text-xs font-bold uppercase transition-all hover:text-white">
                {language === 'en' ? 'AR' : 'EN'}
              </button>
              {step > 0 && (
                <button onClick={back} className="p-2 bg-app-surface rounded-lg text-zinc-400">
                  {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
              )}
            </div>
          </header>

          <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-16">
            <AnimatePresence mode="wait">
              {/* Step 0: Device Selection */}
              {step === 0 && (
                <motion.div
                  key="device"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-12"
                >
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight uppercase">
                      {ui.reduceLoad} <br />
                      <span className="text-app-accent">{ui.selectHardware}</span>
                    </h1>
                    <p className="text-lg text-zinc-500 max-w-xl font-medium">
                      {ui.deviceDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {devices.map((device) => (
                      <button
                        key={device.type}
                        onClick={() => handleDeviceSelect(device.type)}
                        className={`group flex flex-col p-8 bg-app-surface border border-app-border rounded-3xl hover:border-app-accent/50 hover:bg-zinc-900 transition-all ${isRTL ? 'text-right' : 'text-left'} space-y-6 accent-glow`}
                      >
                        <div className="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-app-border rounded-2xl group-hover:bg-app-accent group-hover:text-white transition-all shadow-sm">
                          <device.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-white italic uppercase tracking-tight">{device.label}</h3>
                          <p className="text-sm text-zinc-500 font-medium">{device.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 0.5: OS Selection */}
              {step === 0.5 && (
                <motion.div
                  key="os"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-10"
                >
                  <div className="space-y-4">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-app-accent">OS Choice</p>
                    <h2 className="text-4xl font-extrabold text-white italic tracking-tighter uppercase">{ui.chooseOS}</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
                    <button
                      onClick={() => handleOSSelect('Android')}
                      className="group p-10 bg-app-surface border border-app-border rounded-3xl hover:border-app-accent transition-all space-y-4 accent-glow"
                    >
                      <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border border-app-border group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-all">
                        <Smartphone className="w-8 h-8" />
                      </div>
                      <span className="block font-black text-2xl text-white tracking-tighter uppercase italic">{ui.android}</span>
                    </button>
                    <button
                      onClick={() => handleOSSelect('iOS')}
                      className="group p-10 bg-app-surface border border-app-border rounded-3xl hover:border-app-accent transition-all space-y-4 accent-glow"
                    >
                      <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border border-app-border group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-all">
                        <Smartphone className="w-8 h-8 rotate-180" />
                      </div>
                      <span className="block font-black text-2xl text-white tracking-tighter uppercase italic">{ui.ios}</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 0.7: Console Selection */}
              {step === 0.7 && (
                <motion.div
                  key="console"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-10"
                >
                  <div className="space-y-4">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-app-accent">Platform Context</p>
                    <h2 className="text-4xl font-extrabold text-white italic tracking-tighter uppercase">{ui.chooseConsole}</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
                    <button
                      onClick={() => handleConsoleSelect('PlayStation 4 & 5')}
                      className="group p-10 bg-app-surface border border-app-border rounded-3xl hover:border-app-accent transition-all space-y-4 accent-glow"
                    >
                      <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border border-app-border group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-all">
                        <Gamepad2 className="w-8 h-8" />
                      </div>
                      <span className="block font-black text-2xl text-white tracking-tighter uppercase italic">{ui.playstation}</span>
                    </button>
                    <button
                      onClick={() => handleConsoleSelect('Xbox')}
                      className="group p-10 bg-app-surface border border-app-border rounded-3xl hover:border-app-accent transition-all space-y-4 accent-glow"
                    >
                      <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border border-app-border group-hover:bg-green-500/10 group-hover:text-green-500 transition-all">
                        <Gamepad2 className="w-8 h-8 rotate-12" />
                      </div>
                      <span className="block font-black text-2xl text-white tracking-tighter uppercase italic">{ui.xbox}</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 1: Category Selection */}
              {step === 1 && (
                <motion.div
                  key="category"
                  initial={{ opacity: 0, x: isRTL ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? 10 : -10 }}
                  className="space-y-10"
                >
                  <div className="space-y-4">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-app-accent">{ui.stage02}</p>
                    <h2 className="text-4xl font-extrabold text-white italic tracking-tighter uppercase leading-tight">{ui.activityTitle}</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => handleCategorySelect(cat.name)}
                        className={`group flex items-center gap-6 p-6 bg-app-surface border border-app-border rounded-2xl hover:border-white/20 hover:bg-zinc-900 transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        <div className="w-14 h-14 flex items-center justify-center bg-zinc-900 border border-app-border rounded-xl group-hover:border-app-accent/50 transition-all shadow-sm shrink-0">
                          <cat.icon className="w-6 h-6 text-zinc-400 group-hover:text-app-accent" />
                        </div>
                        <span className="font-bold text-xl text-zinc-300 group-hover:text-white italic uppercase tracking-tight">{cat.labels[language]}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: App Selection */}
              {step === 2 && (
                <motion.div
                  key="apps"
                  initial={{ opacity: 0, x: isRTL ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? 10 : -10 }}
                  className="space-y-10"
                >
                  <div className="space-y-4">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-app-accent">{ui.finalHub}</p>
                    <h2 className="text-4xl font-extrabold text-white italic uppercase tracking-tighter">{ui.pickApp}</h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredApps.map((app) => (
                      <button
                        key={app.id}
                        onClick={() => handleAppSelect(app)}
                        className="p-8 bg-app-surface border border-app-border rounded-3xl hover:bg-zinc-900 hover:border-app-accent/40 shadow-sm transition-all flex flex-col items-center gap-6 text-center group"
                      >
                        <div className="w-20 h-20 bg-zinc-900 border border-app-border rounded-full flex items-center justify-center overflow-hidden group-hover:border-app-accent/20 transition-all shadow-xl">
                          {app.domain ? (
                            <img 
                              src={`https://www.google.com/s2/favicons?domain=${app.domain}&sz=128`} 
                              alt={app.name[language]}
                              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="text-3xl font-black text-zinc-700 group-hover:text-app-accent italic">
                              {app.name[language].slice(0, 2).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <span className="font-extrabold text-lg text-white uppercase tracking-tighter">{app.name[language]}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Optimization View */}
              {step === 3 && selectedApp && optimization && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-5xl mx-auto space-y-12"
                >
                  <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-app-border">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 bg-app-surface border border-app-border rounded-3xl flex items-center justify-center overflow-hidden shrink-0 shadow-2xl accent-glow">
                        {selectedApp.domain ? (
                          <img 
                            src={`https://www.google.com/s2/favicons?domain=${selectedApp.domain}&sz=128`} 
                            alt={selectedApp.name[language]}
                            className="w-14 h-14 object-contain"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="text-4xl font-black text-app-accent italic uppercase tracking-tighter">
                            {selectedApp.name[language].slice(0, 2)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h1 className="text-5xl font-black text-white mb-3 tracking-tighter italic uppercase">
                          {selectedApp.name[language]} <span className="text-app-accent">{ui.optimization}</span>
                        </h1>
                        <p className="text-zinc-500 text-lg font-medium">{ui.detailedGuide}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 px-6 py-4 bg-zinc-900 border border-app-border rounded-2xl italic">
                      <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
                        {selectedDevice} {selectedOS && `/ ${selectedOS}`} {selectedConsole && `/ ${selectedConsole}`}
                      </span>
                    </div>
                  </header>

                  <div className="grid grid-cols-12 gap-8">
                    {/* Left Column */}
                    <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
                      <section className="bg-app-surface border border-app-border rounded-3xl p-10 accent-glow">
                        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
                          <div className="relative w-36 h-36 flex items-center justify-center">
                            <div className={`absolute inset-0 rounded-full border-4 border-app-border ${
                              optimization.consumption.level[language] === 'Very High' || optimization.consumption.level[language] === 'High' || optimization.consumption.level[language].includes('عالي')
                              ? 'border-t-rose-500 shadow-[0_-4px_15px_rgba(244,63,94,0.3)]' 
                              : 'border-t-emerald-500 shadow-[0_-4px_15px_rgba(16,185,129,0.3)]'
                            } transition-all duration-1000`}></div>
                            <div className="text-center">
                              <span className={`block text-2xl font-black ${
                                optimization.consumption.level[language] === 'Very High' || optimization.consumption.level[language] === 'High' || optimization.consumption.level[language].includes('عالي')
                                ? 'text-rose-500' : 'text-emerald-500'
                              }`}>{optimization.consumption.level[language]}</span>
                              <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">{ui.usage}</span>
                            </div>
                          </div>
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-1">
                              <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">{ui.estConsumption}</p>
                              <p className="text-3xl font-black text-white leading-none italic">{optimization.consumption.description[language]}</p>
                              <p className="text-[10px] text-rose-400/60 font-black tracking-widest uppercase mt-3">{ui.standardSettings}</p>
                            </div>
                            <div className={`border-${isRTL ? 'r' : 'l'} border-app-border px-8 space-y-1`}>
                              <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">{ui.optimizedGoal}</p>
                              <p className="text-3xl font-black text-emerald-400 leading-none italic">-85% <span className="text-sm font-normal text-zinc-500">AVG</span></p>
                              <p className="text-[10px] text-emerald-400/60 font-black tracking-widest uppercase mt-3">{ui.usingDataSaver}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-8 pt-10 border-t border-app-border">
                          <div className="flex items-center justify-between mb-8">
                            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-3">
                              <Settings className="w-4 h-4 text-app-accent" />
                              {ui.stepByStep}
                            </h2>
                            <button
                              onClick={copyStepsToClipboard}
                              className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-app-border text-[10px] font-black uppercase tracking-widest transition-all ${
                                copied ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-500' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white'
                              }`}
                            >
                              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                              {copied ? ui.copied : ui.copySteps}
                            </button>
                          </div>
                          <div className="space-y-8">
                            {deviceSpecificSteps?.instructions[language].map((instr, i) => (
                              <div key={i} className="flex gap-6 items-start group">
                                <span className="w-10 h-10 rounded-xl flex-shrink-0 bg-app-accent flex items-center justify-center font-black text-sm text-white shadow-lg shadow-app-accent/20 group-hover:scale-110 transition-transform">
                                  {i + 1}
                                </span>
                                <div className="space-y-1 pt-2 flex-1">
                                  <p className="text-lg text-zinc-300 leading-relaxed font-medium group-hover:text-white transition-colors uppercase tracking-tight">{instr}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-app-surface border border-app-border border-l-4 border-l-amber-500 rounded-3xl p-10 accent-glow">
                          <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                             <Zap className="w-4 h-4" /> {ui.whyDrains}
                          </h3>
                          <ul className="space-y-5 text-zinc-400">
                            {optimization.whyItConsumes[language].map((reason, i) => (
                              <li key={i} className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-sm bg-amber-500/50 mt-1.5 shrink-0 rotate-45"></div>
                                <span className="text-base font-bold text-zinc-300 uppercase tracking-tighter">{reason}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-app-surface border border-app-border border-l-4 border-l-app-accent rounded-3xl p-10 accent-glow">
                          <h3 className="text-xs font-black text-app-accent uppercase tracking-widest mb-8 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4" /> {ui.smartTips}
                          </h3>
                          <ul className="space-y-5 text-zinc-400">
                            {optimization.smartTips[language].map((tip, i) => (
                              <li key={i} className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-sm bg-app-accent/50 mt-1.5 shrink-0 rotate-45"></div>
                                <span className="text-base font-bold text-zinc-300 uppercase tracking-tighter">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <aside className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                      <div className="bg-zinc-900 border border-app-border rounded-3xl p-10 bg-gradient-to-br from-zinc-900 to-app-surface accent-glow relative overflow-hidden">
                        <div className="w-14 h-14 rounded-2xl bg-app-accent/20 flex items-center justify-center mb-8 text-app-accent border border-app-accent/10">
                          <Info className="w-7 h-7" />
                        </div>
                        <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter italic">{ui.behavioralInsight}</h2>
                        <p className="text-zinc-400 leading-relaxed italic mb-10 font-bold text-xl uppercase tracking-tight">
                          "{optimization.proTip[language]}"
                        </p>
                        <div className="pt-10 border-t border-app-border relative z-10">
                          <p className="text-[10px] font-black text-zinc-500 uppercase mb-4 tracking-[0.2em]">{ui.potentialSavings}</p>
                          <div className="h-4 bg-zinc-800 rounded-full overflow-hidden mb-3 p-1">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '85%' }}
                              className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] rounded-full"
                            ></motion.div>
                          </div>
                          <p className="text-end text-[10px] font-black text-emerald-400 tracking-widest uppercase italic">{ui.reductionAchievable}</p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 opacity-5">
                          <TrendingDown className="w-48 h-48" />
                        </div>
                      </div>

                      <div className="bg-app-surface border border-app-border rounded-3xl p-10 flex flex-col items-center text-center gap-6">
                        <div className="text-6xl drop-shadow-2xl">🇪🇬</div>
                        <div className="space-y-4">
                          <p className="text-xs font-black text-zinc-500 uppercase tracking-widest leading-none">{ui.localizedGuidance}</p>
                          <p className="text-sm text-zinc-400 leading-normal font-bold uppercase tracking-tight px-4">
                            {ui.localizedDesc}
                          </p>
                        </div>
                      </div>

                      <button 
                         onClick={reset}
                         className="w-full py-6 bg-white text-black font-black uppercase text-sm tracking-[0.2em] rounded-3xl hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3 italic"
                      >
                         {ui.startNew}
                         {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                      </button>
                    </aside>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
