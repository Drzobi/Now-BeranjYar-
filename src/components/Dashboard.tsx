import React, { useState } from 'react';
import { 
  Sprout, 
  AlertTriangle, 
  CloudRain, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  Scale, 
  Droplet, 
  ChevronRight,
  TrendingUp,
  Sparkles,
  Search,
  BookOpen
} from 'lucide-react';
import { Language } from '../types';
import { CROP_STAGES } from '../data/stages';
import { RICE_VARIETIES } from '../data/varieties';
import { DISEASES_PESTS } from '../data/diseases';
import { TabType } from './Navigation';

interface DashboardProps {
  lang: Language;
  onSelectTab: (tab: TabType) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ lang, onSelectTab }) => {
  const isFa = lang === 'fa';

  // Interactive Blast Risk Simulator
  const [temp, setTemp] = useState<number>(25);
  const [humidity, setHumidity] = useState<number>(88);

  const calculateBlastRisk = () => {
    if (humidity >= 85 && temp >= 20 && temp <= 28) {
      return {
        level: 'high',
        textFa: 'خطر بالای طغیان بلاست برگ و گردن خوشه! رطوبت و دمای فعلی ایده‌آل اسپورزایی قارچ است.',
        textEn: 'High blast epidemic risk! Current temp and humidity are optimal for fungal sporulation.',
        badgeFa: 'خطر شدید بلاست',
        badgeEn: 'Severe Blast Alert',
        color: 'bg-rose-50 border-rose-200 text-rose-800'
      };
    } else if (humidity >= 70 && temp >= 18 && temp <= 30) {
      return {
        level: 'medium',
        textFa: 'خطر متوسط؛ مزارع دارای بوته‌های متراکم و مصرف زیاد کود اوره مستعد آلودگی هستند.',
        textEn: 'Moderate risk; dense canopies with high nitrogen levels require close monitoring.',
        badgeFa: 'هشدار پایش',
        badgeEn: 'Moderate Monitoring',
        color: 'bg-amber-50 border-amber-200 text-amber-800'
      };
    } else {
      return {
        level: 'low',
        textFa: 'شرایط فعلی برای جوانه‌زنی قارچ بلاست نامساعد است. رطوبت یا دما در دامنه خطرناک نیست.',
        textEn: 'Conditions unfavorable for blast spores. Low epidemic probability.',
        badgeFa: 'وضعیت نرمال',
        badgeEn: 'Low Risk',
        color: 'bg-emerald-50 border-emerald-200 text-emerald-800'
      };
    }
  };

  const risk = calculateBlastRisk();

  // Benchmark Market Prices (in Tomans per kg)
  const marketBenchmarks = [
    { nameFa: 'برنج هاشمی اعلاء گیلان', nameEn: 'Hashemi Premium (Gilan)', price: '135,000 - 150,000', change: '+3.2%', trend: 'up' },
    { nameFa: 'طارم محلی معطر فریدونکنار', nameEn: 'Tarom Heirloom (Fereydunkenar)', price: '140,000 - 155,000', change: '+2.8%', trend: 'up' },
    { nameFa: 'برنج عنبربو ممتاز خوزستان', nameEn: 'Anbarboo Super (Khuzestan)', price: '90,000 - 105,000', change: '+1.5%', trend: 'up' },
    { nameFa: 'برنج شیرودی پرمحصول', nameEn: 'Shiroudi High-Yield', price: '85,000 - 95,000', change: '0.0%', trend: 'neutral' },
    { nameFa: 'برنج فجر سوزنی گرگان', nameEn: 'Fajr Needle Grain', price: '95,000 - 110,000', change: '+1.0%', trend: 'up' },
    { nameFa: 'نیم‌دانه هاشمی و طارم', nameEn: 'Broken Aromatic Rice (Nim-Daneh)', price: '65,000 - 75,000', change: '+0.5%', trend: 'up' },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-paddy-900 text-white p-6 sm:p-8 shadow-xl border border-emerald-700/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-500/30 text-xs font-semibold text-emerald-200">
              <Sprout className="w-4 h-4 text-amber-400" />
              <span>{isFa ? 'سامانه جامع هوشمند زراعت برنج ایران' : 'Smart Rice Agronomy & Paddy Management'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {isFa 
                ? 'مدیریت علمی شالیزار؛ افزایش برداشت و کاهش ضایعات' 
                : 'Scientific Paddy Farming; Maximize Yield & Minimize Losses'}
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
              {isFa
                ? 'از انتخاب دقیق بذر و مدیریت خزانه تا مبارزه با کرم ساقه‌خوار و بلاست، محاسبه کودهای فسفاته و پتاسه و تبدیل شلتوک در شالیکوبی.'
                : 'From precision seed selection and nursery tuning to stem borer & blast defense, balanced NPK scheduling and paddy milling optimization.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onSelectTab('calculator')}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Scale className="w-4 h-4" />
                <span>{isFa ? 'شروع محاسبه‌گر شالیزار' : 'Launch Field Calculator'}</span>
              </button>
              <button
                onClick={() => onSelectTab('diagnostic')}
                className="px-5 py-2.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-500/40 text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>{isFa ? 'کلینیک عارضه‌یابی آفات' : 'Diagnostic Lab'}</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Badge Card */}
          <div className="w-full lg:w-80 bg-emerald-950/60 backdrop-blur-md rounded-2xl p-4 border border-emerald-600/40 text-xs space-y-3 shrink-0">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-800">
              <span className="text-emerald-300 font-semibold">
                {isFa ? 'شاخص‌های کلیدی زراعت' : 'Key Agronomic Benchmarks'}
              </span>
              <span className="text-amber-300 font-bold">🌾 ۱ هکتار</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-emerald-900/60 rounded-xl p-2.5 border border-emerald-800/60">
                <div className="text-stone-300">{isFa ? 'شلتوک هاشمی' : 'Hashemi Paddy'}</div>
                <div className="text-base font-bold text-white mt-0.5">۴.۲ الی ۴.۸ تن</div>
              </div>
              <div className="bg-emerald-900/60 rounded-xl p-2.5 border border-emerald-800/60">
                <div className="text-stone-300">{isFa ? 'شلتوک شیرودی' : 'Shiroudi Paddy'}</div>
                <div className="text-base font-bold text-emerald-300 mt-0.5">۶.۵ الی ۸ تن</div>
              </div>
              <div className="bg-emerald-900/60 rounded-xl p-2.5 border border-emerald-800/60">
                <div className="text-stone-300">{isFa ? 'راندمان تبدیل سفید' : 'Milling Recovery'}</div>
                <div className="text-base font-bold text-amber-300 mt-0.5">۶۲ - ۶۵ ٪</div>
              </div>
              <div className="bg-emerald-900/60 rounded-xl p-2.5 border border-emerald-800/60">
                <div className="text-stone-300">{isFa ? 'آب مورد نیاز' : 'Water Requirement'}</div>
                <div className="text-base font-bold text-cyan-300 mt-0.5">۱۰ تا ۱۲ هزار m³</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Blast Risk Weather Simulator & Crop Stages Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Blast & Weather Risk Predictor */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  {isFa ? 'پایش هوشمند خطر بلاست' : 'Rice Blast Microclimate Predictor'}
                </h3>
                <p className="text-xs text-stone-500">
                  {isFa ? 'بررسی شرایط شیوع قارچ بلاست برگ و گردن' : 'Risk calculation based on temp & humidity'}
                </p>
              </div>
            </div>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${risk.color}`}>
              {isFa ? risk.badgeFa : risk.badgeEn}
            </span>
          </div>

          <div className="space-y-3 pt-1">
            {/* Temperature Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                <span>{isFa ? 'دمای هوا (شبانه‌روز)' : 'Average Temperature'}:</span>
                <span className="text-emerald-700 font-bold">{temp} °C</span>
              </div>
              <input
                type="range"
                min="14"
                max="38"
                value={temp}
                onChange={(e) => setTemp(Number(e.target.value))}
                className="w-full accent-emerald-600 h-1.5 bg-stone-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                <span>14°C (خنک)</span>
                <span className="text-rose-500 font-semibold">22-28°C (اوج خطر بلاست)</span>
                <span>38°C (گرم)</span>
              </div>
            </div>

            {/* Humidity Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                <span>{isFa ? 'رطوبت نسبی شالیزار' : 'Relative Humidity'}:</span>
                <span className="text-emerald-700 font-bold">{humidity} %</span>
              </div>
              <input
                type="range"
                min="40"
                max="100"
                value={humidity}
                onChange={(e) => setHumidity(Number(e.target.value))}
                className="w-full accent-cyan-600 h-1.5 bg-stone-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                <span>40% (خشک)</span>
                <span className="text-rose-500 font-semibold">&gt; 85% (خطر بالا)</span>
                <span>100% (شبنم سنگین)</span>
              </div>
            </div>

            {/* Result advisory box */}
            <div className={`p-3 rounded-xl border text-xs leading-relaxed ${risk.color}`}>
              <div className="font-bold flex items-center gap-1.5 mb-1">
                {risk.level === 'high' ? '⚠️ اقدام فوری:' : '💡 توصیه فنی:'}
              </div>
              <p>{isFa ? risk.textFa : risk.textEn}</p>
              {risk.level === 'high' && (
                <div className="mt-2 pt-2 border-t border-rose-200 text-[11px] font-semibold text-rose-900">
                  {isFa 
                    ? 'پیشنهاد: محلول‌پاشی قارچ‌کش تریکلازول (بیم) ۰.۵ کیلوگرم/هکتار یا ناتیوو ۲۰۰ گرم/هکتار' 
                    : 'Action: Spray Tricyclazole 0.5kg/ha or Nativo 200g/ha before rain'}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 8-Stage Crop Roadmap Overview */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  {isFa ? 'تقویم و مراحل زراعت برنج' : '8-Stage Rice Crop Timeline'}
                </h3>
                <p className="text-xs text-stone-500">
                  {isFa ? 'مرور گام به گام تقویم شالیکاری از فروردین تا شهریور' : 'Step-by-step roadmap from seedbed to harvest'}
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectTab('stages')}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <span>{isFa ? 'مشاهده همه جزئیات' : 'View Full Guide'}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>

          {/* Quick Stage Horizontal Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {CROP_STAGES.slice(0, 4).map((stage) => (
              <div
                key={stage.id}
                onClick={() => onSelectTab('stages')}
                className="bg-stone-50 hover:bg-emerald-50/70 border border-stone-200/80 hover:border-emerald-300 rounded-xl p-3 cursor-pointer transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[10px] font-bold flex items-center justify-center">
                    {stage.stepNumber}
                  </span>
                  <span className="text-[10px] font-medium text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded">
                    {isFa ? stage.jalaliMonthFa : stage.jalaliMonthEn}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-stone-900 line-clamp-1">
                  {isFa ? stage.titleFa : stage.titleEn}
                </h4>
                <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                  {isFa ? stage.summaryFa : stage.summaryEn}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {CROP_STAGES.slice(4, 8).map((stage) => (
              <div
                key={stage.id}
                onClick={() => onSelectTab('stages')}
                className="bg-stone-50 hover:bg-emerald-50/70 border border-stone-200/80 hover:border-emerald-300 rounded-xl p-3 cursor-pointer transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-[10px] font-bold flex items-center justify-center">
                    {stage.stepNumber}
                  </span>
                  <span className="text-[10px] font-medium text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded">
                    {isFa ? stage.jalaliMonthFa : stage.jalaliMonthEn}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-stone-900 line-clamp-1">
                  {isFa ? stage.titleFa : stage.titleEn}
                </h4>
                <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                  {isFa ? stage.summaryFa : stage.summaryEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row: Market Benchmark Tracker & Quick Diagnostic Shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Market Benchmark Table */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-100">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  {isFa ? 'نرخ مرجع بازار برنج و شلتوک' : 'Benchmark Rice & Paddy Market Rates'}
                </h3>
                <p className="text-xs text-stone-500">
                  {isFa ? 'میانگین قیمت برنج سفید درجه یک (تومان بر کیلوگرم)' : 'Approximate wholesale price ranges in Toman/kg'}
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectTab('market')}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <span>{isFa ? 'محاسبه‌گر شالیکوبی' : 'Milling Calculator'}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-right">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 bg-stone-50/60">
                  <th className="py-2.5 px-3 font-semibold">{isFa ? 'نام رقم برنج' : 'Variety'}</th>
                  <th className="py-2.5 px-3 font-semibold">{isFa ? 'محدوده قیمت (تومان)' : 'Price Range'}</th>
                  <th className="py-2.5 px-3 font-semibold">{isFa ? 'روند قیمت' : 'Trend'}</th>
                  <th className="py-2.5 px-3 font-semibold text-left">{isFa ? 'عملیات' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {marketBenchmarks.map((item, idx) => (
                  <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-stone-800">
                      {isFa ? item.nameFa : item.nameEn}
                    </td>
                    <td className="py-2.5 px-3 text-emerald-800 font-semibold font-mono">
                      {item.price}
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <ArrowUpRight className="w-3 h-3" />
                        {item.change}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-left">
                      <button
                        onClick={() => onSelectTab('market')}
                        className="text-[11px] font-medium text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
                      >
                        {isFa ? 'تبدیل شلتوک' : 'Convert'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Diagnostic / Top Pests Box */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  {isFa ? 'شایع‌ترین آفات و امراض' : 'Critical Rice Threats'}
                </h3>
                <p className="text-xs text-stone-500">
                  {isFa ? 'کنترل به موقع جهت پیشگیری از خسارت' : 'Immediate diagnosis & prevention'}
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectTab('diagnostic')}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
            >
              {isFa ? 'ورود به کلینیک' : 'Enter Lab'}
            </button>
          </div>

          <div className="space-y-2.5">
            {DISEASES_PESTS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectTab('diagnostic')}
                className="p-3 rounded-xl border border-stone-200/90 hover:border-emerald-400 bg-stone-50/70 hover:bg-emerald-50/40 cursor-pointer transition-all space-y-1"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-stone-900">
                    {isFa ? item.nameFa : item.nameEn}
                  </h4>
                  <span className="text-[10px] px-1.5 py-0.2 rounded font-bold bg-rose-100 text-rose-800">
                    {item.category === 'fungal' ? (isFa ? 'قارچی' : 'Fungal') : (isFa ? 'حشره آفت' : 'Insect')}
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 line-clamp-1 italic font-mono">
                  {item.scientificName}
                </p>
                <div className="text-[11px] text-stone-600 line-clamp-1">
                  {isFa ? item.symptomsFa[0] : item.symptomsEn[0]}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => onSelectTab('diagnostic')}
            className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Search className="w-4 h-4 text-amber-300" />
            <span>{isFa ? 'شروع عارضه‌یابی هوشمند برگ و ساقه' : 'Start Diagnostic Wizard'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
